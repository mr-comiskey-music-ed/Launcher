import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

dotenv.config();

function writeVarLength(value: number) {
  const buffer: number[] = [];
  let v = value & 0x7F;
  while ((value >>= 7) > 0) {
    buffer.unshift((value & 0x7F) | 0x80);
  }
  buffer.push(v);
  return buffer;
}

function generatePatternMidiBuffer(pat: any): Buffer {
  const ticksPerBeat = 480;
  const stepsPerBeat = pat.stepsPerBeat || 4;
  const ticksPerStep = Math.round(ticksPerBeat / stepsPerBeat);
  const bpm = (pat.meta && pat.meta.bpmRange && pat.meta.bpmRange[0]) ? pat.meta.bpmRange[0] : 120;
  const usPerQuarter = Math.round(60000000 / bpm);

  const DRUM_MAP: Record<string, number> = {
    kick: 36,     // C1
    snare: 38,    // D1
    hihatC: 42,   // F#1
    hihatO: 46    // A#1
  };

  const events: Array<{ time: number; type: 'on' | 'off'; note: number; vel: number }> = [];
  const voices = pat.voices || {};

  for (const [voiceKey, noteNumber] of Object.entries(DRUM_MAP)) {
    const activeSteps: number[] = voices[voiceKey] || [];
    for (const step of activeSteps) {
      const startTime = step * ticksPerStep;
      const dur = voiceKey === 'hihatO' ? ticksPerStep * 2 : Math.max(1, ticksPerStep - 10);
      events.push({ time: startTime, type: 'on', note: noteNumber, vel: 100 });
      events.push({ time: startTime + dur, type: 'off', note: noteNumber, vel: 0 });
    }
  }

  events.sort((a, b) => a.time === b.time ? (a.type === 'off' ? -1 : 1) : a.time - b.time);

  const trackBytes: number[] = [];
  const nameStr = pat.name || 'Drum Pattern';
  const nameBytes: number[] = [];
  for (let i = 0; i < nameStr.length; i++) nameBytes.push(nameStr.charCodeAt(i));
  trackBytes.push(0x00, 0xFF, 0x03, nameBytes.length, ...nameBytes);
  trackBytes.push(0x00, 0xFF, 0x51, 0x03, (usPerQuarter >> 16) & 0xFF, (usPerQuarter >> 8) & 0xFF, usPerQuarter & 0xFF);
  trackBytes.push(0x00, 0xFF, 0x58, 0x04, 0x04, 0x02, 0x18, 0x08);

  let lastTime = 0;
  for (const ev of events) {
    const deltaTime = ev.time - lastTime;
    lastTime = ev.time;
    trackBytes.push(...writeVarLength(deltaTime));
    if (ev.type === 'on') {
      trackBytes.push(0x99, ev.note, ev.vel);
    } else {
      trackBytes.push(0x89, ev.note, 0);
    }
  }

  trackBytes.push(0x00, 0xFF, 0x2F, 0x00);

  const header = [
    0x4D, 0x54, 0x68, 0x64,
    0x00, 0x00, 0x00, 0x06,
    0x00, 0x00,
    0x00, 0x01,
    (ticksPerBeat >> 8) & 0xFF, ticksPerBeat & 0xFF
  ];

  const trackLen = trackBytes.length;
  const trackHeader = [
    0x4D, 0x54, 0x72, 0x6B,
    (trackLen >> 24) & 0xFF,
    (trackLen >> 16) & 0xFF,
    (trackLen >> 8) & 0xFF,
    trackLen & 0xFF
  ];

  return Buffer.from([...header, ...trackHeader, ...trackBytes]);
}

async function startServer() {
  const app = express();
  const port = 3000;

  app.use(express.json());

  // MIDI Download Endpoint for drag-out / direct download
  app.get('/api/download-midi', (req, res) => {
    try {
      const patternId = req.query.id as string;
      const patternsPath = path.join(process.cwd(), 'public', 'patterns.json');
      let patterns: any[] = [];
      if (fs.existsSync(patternsPath)) {
        patterns = JSON.parse(fs.readFileSync(patternsPath, 'utf-8'));
      }

      const pat = patterns.find((p: any) => p.id === patternId) || patterns[0];
      if (!pat) {
        return res.status(404).send('Pattern not found');
      }

      const fileName = `${(pat.name || 'Drum_Pattern').replace(/[^a-zA-Z0-9_-]/g, '_')}.mid`;
      const midiBuffer = generatePatternMidiBuffer(pat);

      res.setHeader('Content-Type', 'audio/midi');
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
      res.setHeader('Content-Length', midiBuffer.length.toString());
      res.send(midiBuffer);
    } catch (err: any) {
      console.error('Error generating MIDI download:', err);
      res.status(500).send('Error generating MIDI');
    }
  });

  // API endpoint matching api/get-docs.js
  app.get('/api/get-docs', async (req, res) => {
    const qKey = req.query.key as string;
    const validQueryKey = qKey && qKey !== 'undefined' && qKey !== 'null' ? qKey : '';
    const apiKey = validQueryKey || process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;
    const SE_FOLDER_ID = '15pkshnr9luUQY9oZfpyxSZ4wI9oH4Bge';
    const AMP_FOLDER_ID = '1EvIPUXvf5PiSenapOKapb_N8QWUDuxMp';

    const FALLBACK_SE = [
      { title: "Mixing Help #1: Hip Hop", id: "1QsbuL5Qz-iavTE81iOQM-4oiQ3_pl2t7", webViewLink: "https://docs.google.com/document/d/1QsbuL5Qz-iavTE81iOQM-4oiQ3_pl2t7/view" },
      { title: "Mixing Help #2: DnB (more intense)", id: "1ZcFem-9KIgbeVmCQKGca7gddHAIjVoLM", webViewLink: "https://docs.google.com/document/d/1ZcFem-9KIgbeVmCQKGca7gddHAIjVoLM/view" },
      { title: "Mixing Help #2: House (less intense)", id: "1xrvdgsHTTJRHWkduzYdl7rAPj1oXC21g", webViewLink: "https://docs.google.com/document/d/1xrvdgsHTTJRHWkduzYdl7rAPj1oXC21g/view" },
      { title: "Mixing Help #3: Rock", id: "1ZQPgtCrR3SnQoOVt59eKNnaJoxEK6M5V", webViewLink: "https://docs.google.com/document/d/1ZQPgtCrR3SnQoOVt59eKNnaJoxEK6M5V/view" },
      { title: "Mixing Help #4: \"Common Cents.\" - Mike DFG & Nate Vintage", id: "1h4OlLHRCNHoYPA8HHd7KOCuFtaDI4Fd3", webViewLink: "https://docs.google.com/document/d/1h4OlLHRCNHoYPA8HHd7KOCuFtaDI4Fd3/view" },
      { title: "Project #1: Loops in Soundtrap", id: "1S_B2FHY70GZ1WRpb0EXtVPMGe9CU9KZ7", webViewLink: "https://docs.google.com/document/d/1S_B2FHY70GZ1WRpb0EXtVPMGe9CU9KZ7/view" },
      { title: "Project #2: My Musical Life (interview audio version) & Recording Practice Check", id: "1Ed-zKB1yYGcrLY6lTG3pbPPN9-MklvPb", webViewLink: "https://docs.google.com/document/d/1Ed-zKB1yYGcrLY6lTG3pbPPN9-MklvPb/view" },
      { title: "Project #3: Drums & Loops", id: "1hVgmdXWZkHEn-uBKDzW7TVnvrF_Hxzuc", webViewLink: "https://docs.google.com/document/d/1hVgmdXWZkHEn-uBKDzW7TVnvrF_Hxzuc/view" },
      { title: "Project #5: Podcast Project", id: "1h2Aw7CYnYL-euY8I4tYQlIw4yAdbKK0m", webViewLink: "https://docs.google.com/document/d/1h2Aw7CYnYL-euY8I4tYQlIw4yAdbKK0m/view" },
      { title: "Project #8: Mixing Raw Stems Steps", id: "1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8", webViewLink: "https://docs.google.com/document/d/1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8/view" },
      { title: "Project #9: Drum Programming Mini-Project", id: "13bhoBvhksf6bpuSqlIEZzdJNCxdK4oBY", webViewLink: "https://docs.google.com/document/d/13bhoBvhksf6bpuSqlIEZzdJNCxdK4oBY/view" },
      { title: "Project #10: Class Song Docs", id: "1DyXK1aqcnaMBMyurdrj676e_ep0JtmRV", webViewLink: "https://docs.google.com/document/d/1DyXK1aqcnaMBMyurdrj676e_ep0JtmRV/view" },
      { title: "Project #11: Pingu Project", id: "1TrTE8Y1FR0NR71BpN188hKmPRJBgJjN0", webViewLink: "https://docs.google.com/document/d/1TrTE8Y1FR0NR71BpN188hKmPRJBgJjN0/view" },
      { title: "Project #12: Foley/SFX Project", id: "1U2POTmWCCCPboAkuu2P14QBY-zm-WluZ", webViewLink: "https://docs.google.com/document/d/1U2POTmWCCCPboAkuu2P14QBY-zm-WluZ/view" },
      { title: "Project #13: Found Sound Composition", id: "1MnEjo4h7vkQ-94nNMhdHFMqdVEDxv7Nn", webViewLink: "https://docs.google.com/document/d/1MnEjo4h7vkQ-94nNMhdHFMqdVEDxv7Nn/view" },
      { title: "Project #14: Sampling Project", id: "1f2Hk8i1x72gy3cT_eEqcbuJApEpyiSK4", webViewLink: "https://docs.google.com/document/d/1f2Hk8i1x72gy3cT_eEqcbuJApEpyiSK4/view" }
    ];

    const FALLBACK_AMP = [
      { title: "Autodidact #1", id: "1K4co7I5S-zcpXhOtjO7Y0H3JW9lqnlkpenyIFn5HgHQ", webViewLink: "https://docs.google.com/document/d/1K4co7I5S-zcpXhOtjO7Y0H3JW9lqnlkpenyIFn5HgHQ/view" },
      { title: "Project #1: Partner Project & Logic Review", id: "118H-sHLE_Ezjn_rooh52rVnDZ6Kf_f7h0Wlioj24Wx4", webViewLink: "https://docs.google.com/document/d/118H-sHLE_Ezjn_rooh52rVnDZ6Kf_f7h0Wlioj24Wx4/view" }
    ];

    if (!apiKey) {
      return res.json({ se: FALLBACK_SE, amp: FALLBACK_AMP });
    }

    try {
      const fetchFolder = async (folderId: string) => {
        const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&key=${apiKey}&fields=files(id,name)&supportsAllDrives=true&includeItemsFromAllDrives=true&orderBy=name`;
        const response = await fetch(url);
        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`Google Drive API error (${response.status}): ${errText}`);
        }
        const data = await response.json();
        
        const files = data.files || [];
        const resolvedFiles = await Promise.all(files.map(async (f: any) => {
          let resolvedId = f.id;
          let title = f.name;
          try {
            const metaRes = await fetch(`https://www.googleapis.com/drive/v3/files/${f.id}?fields=id,name,mimeType,shortcutDetails&key=${apiKey}&supportsAllDrives=true&includeItemsFromAllDrives=true`);
            if (metaRes.ok) {
              const meta = await metaRes.json();
              title = meta.name || title;
              if (meta.mimeType === 'application/vnd.google-apps.shortcut' && meta.shortcutDetails && meta.shortcutDetails.targetId) {
                resolvedId = meta.shortcutDetails.targetId;
              }
            }
          } catch (e) {
            console.error('Error fetching file metadata for folder item:', e);
          }
          return {
            title,
            id: resolvedId,
            webViewLink: `https://docs.google.com/document/d/${resolvedId}/view`
          };
        }));

        return resolvedFiles.sort((a: any, b: any) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' }));
      };

      const [se, amp] = await Promise.all([
        fetchFolder(SE_FOLDER_ID).catch(() => FALLBACK_SE),
        fetchFolder(AMP_FOLDER_ID).catch(() => FALLBACK_AMP)
      ]);

      res.json({
        se: se.length > 0 ? se : FALLBACK_SE,
        amp: amp.length > 0 ? amp : FALLBACK_AMP
      });
    } catch (err: any) {
      console.error('Error fetching drive docs (falling back):', err);
      res.json({ se: FALLBACK_SE, amp: FALLBACK_AMP });
    }
  });

  // API endpoint to fetch and parse checklist from Google Drive Doc / Shortcut
  app.get('/api/fetch-checklist', async (req, res) => {
    let rawId = req.query.id as string;
    if (!rawId) return res.json({ items: [], note: 'Document ID is required.' });
    try {
      let fileId = rawId;
      if (rawId.includes('/d/')) {
        const match = rawId.match(/\/d\/([a-zA-Z0-9-_]+)/);
        if (match && match[1]) fileId = match[1];
      } else if (rawId.includes('id=')) {
        const match = rawId.match(/id=([a-zA-Z0-9-_]+)/);
        if (match && match[1]) fileId = match[1];
      }

      const qKey = req.query.key as string;
      const validQueryKey = qKey && qKey !== 'undefined' && qKey !== 'null' ? qKey : '';
      const apiKey = validQueryKey || process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;
      let targetDocId = fileId;

      // 1. Resolve Drive shortcut if apiKey is available
      if (apiKey && !rawId.includes('docs.google.com/document/d/e/')) {
        try {
          const metaRes = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=id,name,mimeType,shortcutDetails&key=${apiKey}`);
          if (metaRes.ok) {
            const meta = await metaRes.json();
            if (meta.mimeType === 'application/vnd.google-apps.shortcut' && meta.shortcutDetails && meta.shortcutDetails.targetId) {
              targetDocId = meta.shortcutDetails.targetId;
            }
          }
        } catch (e) {
          console.error('Error resolving Drive shortcut:', e);
        }
      }

      // 2. Fetch document content via Drive export endpoint (text/plain)
      let textContent = '';
      if (apiKey) {
        try {
          const exportRes = await fetch(`https://www.googleapis.com/drive/v3/files/${targetDocId}/export?mimeType=text/plain&key=${apiKey}`);
          if (exportRes.ok) {
            textContent = await exportRes.text();
          }
        } catch (e) {
          console.error('Error exporting doc text:', e);
        }
      }

      // 3. Fallback to published web URL or public fetch if export didn't return text
      if (!textContent || textContent.length < 20 || textContent.includes('<!DOCTYPE html>') || textContent.includes('<html')) {
        const PUBLISH_URL_MAP: Record<string, string> = {
          "mixing-help-hiphop-1": "https://docs.google.com/document/d/e/2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp/pub",
          "1QsbuL5Qz-iavTE81iOQM-4oiQ3_pl2t7": "https://docs.google.com/document/d/e/2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp/pub",
          "1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8": "https://docs.google.com/document/d/e/2PACX-1vSn1zukoDKI95AMWqtZT8FqZMtHL0obm3ay1yEztwAeekKZiEJQR8TYkKkP1piyUaax_hTYSTiV8YdC/pub",
          "1LwVqdcdJ5caRrjhWnqoT3TTCVkK4VqUNZZgZjpUUy0s": "https://docs.google.com/document/d/e/2PACX-1vQGF7X2VO4t7dbwpR2Fr1lbfl1MAXIgUdI10Mn_cHNuHL9QeQk78EC8adGthyA13M752lnEOM53-IaR/pub"
        };
        let pubUrl = PUBLISH_URL_MAP[rawId] || PUBLISH_URL_MAP[fileId];
        if (!pubUrl) {
          if (rawId.includes('docs.google.com/document/d/e/')) {
            pubUrl = rawId;
          } else if (rawId.startsWith('e/')) {
            pubUrl = `https://docs.google.com/document/d/${rawId}/pub`;
          } else {
            pubUrl = `https://docs.google.com/document/d/${targetDocId}/pub`;
          }
        }
        const pubRes = await fetch(pubUrl, {
          headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        if (pubRes.ok) {
          const html = await pubRes.text();
          textContent = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                            .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                            .replace(/<[^>]+>/g, '\n');
        }
      }

      // 4. Parse checklist items under "Checklist" section
      const items: string[] = [];
      const lines = textContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      let inChecklistSection = false;

      console.log('--- FETCH CHECKLIST DEBUG ---');
      console.log('Total lines parsed:', lines.length);

      for (const line of lines) {
        const lower = line.toLowerCase();
        if (lower.includes('checklist') && (line.startsWith('#') || lower === 'checklist' || lower.endsWith(':'))) {
          inChecklistSection = true;
          console.log('Found checklist section header:', line);
          continue;
        }
        if (inChecklistSection && line.startsWith('#') && !lower.includes('checklist')) {
          inChecklistSection = false;
          console.log('Exited checklist section at header:', line);
          continue;
        }

        if (inChecklistSection) {
          console.log('Inspecting line in checklist section:', line);
          // Match lines that have checkboxes: [ ], [x], [X], ☐, ☑
          // Support non-breaking spaces and flexible spacing inside brackets
          const checkboxRegex = /^[\s\-•\*]*(?:\[[\s\xA0]*\]|\[[xX]\]|[\u2610\u2611])\s*(.*)$/;
          const match = line.match(checkboxRegex);

          if (match) {
            let cleanText = (match[1] || '').trim();
            // Fallback if match[1] is empty but line had bracket
            if (!cleanText) {
              cleanText = line
                .replace(/^[\s\-•\*]*[\u2610\u2611]\s*/, '')
                .replace(/^[\s\-•\*]*\[[\s\xA0]*[xX]?[\s\xA0]*\]\s*/, '')
                .trim();
            }

            console.log('Matched checkbox item! Clean text:', cleanText);
            if (cleanText && cleanText.length > 0 && cleanText.length < 300 && !cleanText.toLowerCase().includes('file > share') && !cleanText.toLowerCase().includes('checklist')) {
              if (!items.includes(cleanText)) {
                items.push(cleanText);
              }
            }
          } else {
            console.log('Skipped line (no checkbox marker):', line);
          }
        }
      }
      console.log('Extracted final items:', items);

      if (items.length === 0) {
        return res.json({
          items: [],
          note: 'Document loaded successfully, but no checklist items or bullet steps were found under a "## Checklist" section.'
        });
      }

      res.json({ items });
    } catch (err: any) {
      console.error('Fetch checklist error:', err);
      res.json({
        items: [],
        note: `Error loading checklist: ${err.message}`
      });
    }
  });

  // API endpoint matching api/chat.js
  app.post('/api/chat', async (req, res) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY is not configured.' });
    }

    try {
      const { prompt, currentDocId } = req.body || {};
      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required.' });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You operate inside a small, floating side panel while students actively work in Logic Pro 11. 

FORMATTING RULES:
1. MAX LENGTH: 125 words total. Never write long introductory paragraphs or background essays.
2. ACTION-FIRST: Start immediately with the answer or keyboard shortcut.
3. STRUCTURE: Use maximum 4 bullet points. 
4. BOLD KEY COMMANDS: Always put exact macOS key commands in bold (e.g., **⌘B**, **Option-C**).
5. NO FLUFF: Skip introductory greetings (e.g., 'Here is what you need to know...') and go straight to the solution.

# System Instructions: Music Tech AI Assistant
You are an encouraging, highly practical High School Music Technology AI assistant for Mr. Comiskey's Sound Engineering and Advanced Music Production classes at Lane Tech High School. Base DAW functionality on Logic Pro 11 and Soundtrap. Always emphasize macOS keyboard shortcuts in bold.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || 'I am here to help with your music tech project!';
      res.json({ reply, text: reply, message: reply, response: reply });
    } catch (err: any) {
      console.error('Chat API Error:', err);
      res.status(500).json({ error: err.message || 'Internal server error' });
    }
  });

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });

  app.use(vite.middlewares);

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
