const express = require('express');
const { OpenAI } = require('openai');
const router = express.Router();

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Helper: call GPT-3.5 Turbo Instruct
async function openaiGenerate(prompt) {
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct", // NEW: Use this model, not text-davinci-003
    prompt: prompt,
    max_tokens: 64,
    temperature: 0.7,
    n: 1,
  });
  return response.choices[0].text.trim();
}

// GET /api/ai/wishlist-suggest?items=Milk,Chair
router.get('/wishlist-suggest', async (req, res) => {
  try {
    const raw = req.query.items || '';
    const items = raw.split(',').map(s => s.trim()).filter(Boolean);
    if (!items.length) return res.json({ suggestions: [] });

    const prompt = `Suggest three other product names they might like, comma-separated, based on: ${items.join(', ')}`;
    const output = await openaiGenerate(prompt);

    const suggestions = output.split('\n')[0]
      .split(',')
      .map(s => s.trim())
      .filter(Boolean)
      .slice(0, 3);

    res.json({ suggestions });
  } catch (error) {
    console.error('OpenAI wishlist error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
