import { getDocLists, FALLBACK_SE, FALLBACK_AMP } from './_lib/docs.js';

export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY || process.env.GEMINI_API_KEY;
  try {
    const { se, amp, cacheable } = await getDocLists(apiKey);
    if (cacheable) res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600');
    res.status(200).json({ se, amp });
  } catch (err) {
    console.error('Error fetching drive docs:', err.message);
    res.status(200).json({ se: FALLBACK_SE, amp: FALLBACK_AMP });
  }
}
