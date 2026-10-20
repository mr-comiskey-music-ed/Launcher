import { handleChat } from './_lib/chat.js';

export default async function handler(req, res) {
  return handleChat(req, res, { apiKey: process.env.GEMINI_API_KEY });
}
