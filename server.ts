import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { getDocLists, FALLBACK_SE, FALLBACK_AMP } from './api/_lib/docs.js';
import { fetchChecklist } from './api/_lib/checklist.js';
import { handleChat } from './api/_lib/chat.js';
import path from 'path';
import fs from 'fs';

dotenv.config();

async function startServer() {
  const app = express();
  const port = 3000;

  app.use(express.json());

  // The three API routes share their logic with the Vercel functions in /api (see api/_lib),
  // so the local dev server and the live site behave identically.
  const driveKey = () => process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;

  app.get('/api/get-docs', async (req, res) => {
    try {
      const { se, amp, cacheable } = await getDocLists(driveKey());
      if (cacheable) res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
      res.json({ se, amp });
    } catch (err: any) {
      console.error('Error fetching drive docs (falling back):', err.message);
      res.json({ se: FALLBACK_SE, amp: FALLBACK_AMP });
    }
  });

  app.get('/api/fetch-checklist', async (req, res) => {
    try {
      const result = await fetchChecklist(req.query.id, { apiKey: driveKey() });
      if (result.items.length > 0) res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=300');
      res.json(result);
    } catch (err: any) {
      console.error('Fetch checklist error:', err.message);
      res.json({ items: [], note: 'Could not load the checklist right now.' });
    }
  });

  app.all('/api/chat', (req, res) => handleChat(req, res, { apiKey: process.env.GEMINI_API_KEY }));

  // Dedicated YouTube Embed Relay page to provide verified Referer & Origin
  app.get('/yt-embed.html', (req, res) => {
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.sendFile(path.join(process.cwd(), 'public', 'yt-embed.html'));
  });

  // Serve static assets from public directory without serving public/index.html over root
  app.use(express.static(path.join(process.cwd(), 'public'), { index: false }));

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
