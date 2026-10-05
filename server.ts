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

  // API endpoint to fetch and parse checklist from published Google Doc
  app.get('/api/fetch-checklist', async (req, res) => {
    const docId = req.query.id as string;
    if (!docId) return res.status(400).json({ error: 'Document ID is required' });
    try {
      const PUBLISH_URL_MAP: Record<string, string> = {
        "mixing-help-hiphop-1": "https://docs.google.com/document/d/e/2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp/pub",
        "1oQbqJMabNBT-1DfnPAugMmyH3LN3qXXfFqWqsdWnzF8": "https://docs.google.com/document/d/e/2PACX-1vSn1zukoDKI95AMWqtZT8FqZMtHL0obm3ay1yEztwAeekKZiEJQR8TYkKkP1piyUaax_hTYSTiV8YdC/pub",
        "1LwVqdcdJ5caRrjhWnqoT3TTCVkK4VqUNZZgZjpUUy0s": "https://docs.google.com/document/d/e/2PACX-1vQGF7X2VO4t7dbwpR2Fr1lbfl1MAXIgUdI10Mn_cHNuHL9QeQk78EC8adGthyA13M752lnEOM53-IaR/pub",
        "2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp": "https://docs.google.com/document/d/e/2PACX-1vRRcCwNyh2Etl3FnDP90h3PBPXqvKwM-2LbLebpw6B6j0CmIS4CJb5G46PGvYYsFC7GdxA3jjArVzSp/pub"
      };

      let pubUrl = PUBLISH_URL_MAP[docId];
      if (!pubUrl) {
        pubUrl = docId.startsWith('e/')
          ? `https://docs.google.com/document/d/${docId}/pub`
          : `https://docs.google.com/document/d/${docId}/pub`;
      }

      const response = await fetch(pubUrl);
      if (!response.ok) {
        return res.json({ 
          items: [
            'Review assignment instructions in Google Doc',
            'Set up project tracks in DAW',
            'Complete recording and arrangement tasks',
            'Export and submit final audio project'
          ],
          note: 'Note: Document is not published to the web or URL mapping needed. Publish to web in Google Docs (File > Share > Publish to web).' 
        });
      }
      const html = await response.text();
      
      const items: string[] = [];
      const liMatches = html.match(/<li[^>]*>(.*?)<\/li>/gis);
      if (liMatches) {
        for (const li of liMatches) {
          const cleanText = li.replace(/<[^>]+>/g, '').trim();
          if (cleanText && cleanText.length > 2 && cleanText.length < 250) {
            items.push(cleanText);
          }
        }
      }

      if (items.length === 0) {
        const pMatches = html.match(/<p[^>]*>(.*?)<\/p>/gis);
        if (pMatches) {
          for (const p of pMatches) {
            const cleanText = p.replace(/<[^>]+>/g, '').trim();
            if (cleanText && (cleanText.toLowerCase().includes('step') || cleanText.toLowerCase().includes('task') || cleanText.startsWith('•') || cleanText.startsWith('-') || cleanText.match(/^\d+[\.\)]/))) {
              items.push(cleanText.replace(/^[•\-\*]\s*/, ''));
            }
          }
        }
      }

      if (items.length === 0) {
        items.push('Review assignment requirements');
        items.push('Complete project steps');
        items.push('Export final audio file');
      }

      res.json({ items });
    } catch (err: any) {
      console.error('Fetch checklist error:', err);
      res.json({ 
        items: [
          'Review assignment instructions',
          'Complete project steps in DAW',
          'Export and submit final project'
        ],
        note: 'Could not fetch checklist automatically.' 
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
