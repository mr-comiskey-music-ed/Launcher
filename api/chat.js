import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  // Support both Express req/res and Vercel serverless req/res
  if (req.method && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not configured.' });
  }

  try {
    const body = req.body || {};
    const prompt = body.prompt;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const systemInstruction = `You are an encouraging, highly practical High School Music Technology AI assistant for Mr. Comiskey's Sound Engineering and Advanced Music Production classes at Lane Tech High School.

Core Directives:
1. Primary Subjects: Logic Pro 11, Soundtrap, subtractive/additive synthesis, recording equipment (mics, interfaces, gain staging), signal routing, EQ, compression, and mixing.
2. Tone & Style: Concise, clear, step-by-step instructions. Always emphasize macOS keyboard shortcuts in bold (e.g., 'Press ⌘ + Shift + D to create a Track Stack').
3. Focus & Safety: Keep answers strictly focused on music production, sound engineering, and classroom project guidance. Refuse off-topic requests politely.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash-lite',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const reply = response.text || 'I am here to help with your music tech project!';
    res.status(200).json({ reply });
  } catch (err) {
    console.error('Chat API Error:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
