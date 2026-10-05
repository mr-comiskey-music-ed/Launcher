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
    const apiKey = (req.query.key as string) || process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;
    const SE_FOLDER_ID = '15pkshnr9luUQY9oZfpyxSZ4wI9oH4Bge';
    const AMP_FOLDER_ID = '1EvIPUXvf5PiSenapOKapb_N8QWUDuxMp';

    if (!apiKey) {
      return res.status(400).json({ error: 'Google Drive API key is not configured. Please set VITE_GOOGLE_DRIVE_API_KEY or VITE_GEMINI_API_KEY.' });
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
        fetchFolder(SE_FOLDER_ID),
        fetchFolder(AMP_FOLDER_ID)
      ]);

      res.json({ se, amp });
    } catch (err: any) {
      console.error('Error fetching drive docs:', err);
      res.status(500).json({ error: err.message || 'Internal server error' });
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

      const apiKey = (req.query.key as string) || process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;
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
