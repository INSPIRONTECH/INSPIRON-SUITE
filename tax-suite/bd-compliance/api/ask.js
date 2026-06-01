export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // Auth gate — shared secret header required
  const AUTH_TOKEN = process.env.ASK_AUTH_TOKEN;
  if (!AUTH_TOKEN || req.headers['x-ask-token'] !== AUTH_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { question, system } = req.body;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system,
      messages: [{ role: 'user', content: question }]
    })
  });

  const data = await response.json();
  const answer = data.content?.find(b => b.type === 'text')?.text || 'No response.';
  res.status(200).json({ answer });
}
