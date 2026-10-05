import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

async function startServer() {
  const app = express();
  const port = 3000;

  app.use(express.json());

  // API endpoint matching api/get-docs.js
  app.get('/api/get-docs', async (req, res) => {
    const apiKey = process.env.GOOGLE_DRIVE_API_KEY;
    const SE_FOLDER_ID = '15pkshnr9luUQY9oZfpyxSZ4wI9oH4Bge';
    const AMP_FOLDER_ID = '1EvIPUXvf5PiSenapOKapb_N8QWUDuxMp';

    const FALLBACK_SE = [
      { title: "Mixing Help #1: Hip Hop", id: "mixing-help-hiphop-1", webViewLink: "https://docs.google.com/document/d/e/2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp/pub" },
      { title: "Project #1: Loops in Soundtrap", id: "1HOLjorJv6ONr7ACmGEcJq6CFbhi_Rr41dNDNvRFtngE", webViewLink: "https://docs.google.com/document/d/1HOLjorJv6ONr7ACmGEcJq6CFbhi_Rr41dNDNvRFtngE/view" },
      { title: "Project #2: My Musical Life", id: "1Tiy5EIDgB1-_XDSe1aX0pLpIYnL2YYmWuJjWR38PFok", webViewLink: "https://docs.google.com/document/d/1Tiy5EIDgB1-_XDSe1aX0pLpIYnL2YYmWuJjWR38PFok/view" },
      { title: "Project #3: Soundtrap Drums & Loops", id: "1JCTDjoXTgTqK7goxczUCbN-nk4afQAUlrhrOH5TShtw", webViewLink: "https://docs.google.com/document/d/1JCTDjoXTgTqK7goxczUCbN-nk4afQAUlrhrOH5TShtw/view" },
      { title: "Project #5: Podcast Project", id: "1RkESXLqDIc36SlzUOzu3kz1ciqwcW7VSOCOPJqADTDY", webViewLink: "https://docs.google.com/document/d/1RkESXLqDIc36SlzUOzu3kz1ciqwcW7VSOCOPJqADTDY/view" },
      { title: "Project #8: Mixing Raw Stems", id: "1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8", webViewLink: "https://docs.google.com/document/d/1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8/view" },
      { title: "Project #9: Drum Programming", id: "15HKH1U--ZCv9xFkxOvbmyeDWeSpN1dci3sONnmc6RcA", webViewLink: "https://docs.google.com/document/d/15HKH1U--ZCv9xFkxOvbmyeDWeSpN1dci3sONnmc6RcA/view" },
      { title: "Project #11: Pingu Project", id: "1LwVqdcdJ5caRrjhWnqoT3TTCVkK4VqUNZZgZjpUUy0s", webViewLink: "https://docs.google.com/document/d/1LwVqdcdJ5caRrjhWnqoT3TTCVkK4VqUNZZgZjpUUy0s/view" },
      { title: "Project #12: Foley/SFX Project", id: "1mhrnMKKxMBXWL8UwwS9lz7BotftIy-RYvbwjtpZ5cBs", webViewLink: "https://docs.google.com/document/d/1mhrnMKKxMBXWL8UwwS9lz7BotftIy-RYvbwjtpZ5cBs/view" },
      { title: "Project #13: Found Sound Composition", id: "16Flq6UC0EKrCDdx_Nd-7tk5QzEDlrlF0GjAgmdedRRM", webViewLink: "https://docs.google.com/document/d/16Flq6UC0EKrCDdx_Nd-7tk5QzEDlrlF0GjAgmdedRRM/view" },
      { title: "Project #14: Sampling Project", id: "1EZG-3EZbeMK3MzlMOunfylgxU6p2QM8Xnl7HA9tl6nA", webViewLink: "https://docs.google.com/document/d/1EZG-3EZbeMK3MzlMOunfylgxU6p2QM8Xnl7HA9tl6nA/view" }
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
        const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&key=${apiKey}&fields=files(id,name,webViewLink)&orderBy=name`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Google Drive API error: ${response.statusText}`);
        const data = await response.json();
        return (data.files || []).map((f: any) => ({
          title: f.name,
          id: f.id,
          webViewLink: f.webViewLink || `https://docs.google.com/document/d/${f.id}/view`
        })).sort((a: any, b: any) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' }));
      };

      const [se, amp] = await Promise.all([
        fetchFolder(SE_FOLDER_ID).catch(() => FALLBACK_SE),
        fetchFolder(AMP_FOLDER_ID).catch(() => FALLBACK_AMP)
      ]);

      res.json({
        se: se.length > 0 ? se : FALLBACK_SE,
        amp: amp.length > 0 ? amp : FALLBACK_AMP
      });
    } catch (err) {
      console.error('Error fetching drive docs:', err);
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

      const apiKey = process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;
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

      // 4. Parse checklist items strictly under a "Checklist" section
      const items: string[] = [];
      const lines = textContent.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      let inChecklistSection = false;

      for (const line of lines) {
        const lower = line.toLowerCase();
        if (lower.includes('checklist') && (line.startsWith('#') || lower === 'checklist' || lower.endsWith(':'))) {
          inChecklistSection = true;
          continue;
        }
        if (inChecklistSection && line.startsWith('#') && !lower.includes('checklist')) {
          inChecklistSection = false;
          continue;
        }

        if (inChecklistSection) {
          // Remove ballot boxes (☐, ☑), markdown brackets with any space/non-breaking space, or bullet markers
          let cleanText = line
            .replace(/^[\s\-•\*]*[\u2610\u2611]\s*/, '')
            .replace(/^[\s\-•\*]*\[\s*[\s\S]*?\s*\]\s*/, '')
            .replace(/^[•\-\*]\s*/, '')
            .trim();

          if (cleanText && cleanText.length > 1 && cleanText.length < 300 && !cleanText.toLowerCase().includes('file > share') && !cleanText.toLowerCase().includes('checklist')) {
            if (!items.includes(cleanText)) {
              items.push(cleanText);
            }
          }
        }
      }

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
