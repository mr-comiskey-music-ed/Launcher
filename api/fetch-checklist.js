import { fetchChecklist } from './_lib/checklist.js';

export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;
  try {
    const result = await fetchChecklist(req.query.id, { apiKey });
    if (result.items.length > 0) {
      res.setHeader('Cache-Control', 'public, s-maxage=120, stale-while-revalidate=300');
    }
    res.status(200).json(result);
  } catch (err) {
    console.error('Fetch checklist error:', err.message);
    res.status(200).json({ items: [], note: 'Could not load the checklist right now.' });
  }
}
