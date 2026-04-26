import 'dotenv/config';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import Anthropic from '@anthropic-ai/sdk';
import { buildChatSystemPrompt, buildOnboardingSystemPrompt } from './prompts.js';
import type { Persona, Tone } from './prompts.js';

const app = new Hono();
const client = new Anthropic();

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173';

app.use(
  '/*',
  cors({
    origin: FRONTEND_ORIGIN,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
  })
);

app.get('/health', (c) => c.json({ ok: true }));

app.post('/onboarding', async (c) => {
  try {
    const body = await c.req.json<{
      persona: Persona;
      history: { role: 'user' | 'assistant'; content: string }[];
    }>();

    const { persona, history } = body;

    if (!persona) {
      return c.json({ error: 'persona is required' }, 400);
    }

    const systemPrompt = buildOnboardingSystemPrompt(persona);

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 256,
      system: systemPrompt,
      messages: history.length > 0 ? history : [{ role: 'user', content: 'start' }],
    });

    const rawText = response.content[0].type === 'text' ? response.content[0].text.trim() : '';

    // Strip markdown code fences if Claude wrapped the JSON in them
    const raw = rawText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```\s*$/, '').trim();

    let parsed: { question?: string; complete: boolean };
    try {
      parsed = JSON.parse(raw);
    } catch {
      // Try extracting JSON object from the response as fallback
      const jsonMatch = raw.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          parsed = JSON.parse(jsonMatch[0]);
        } catch {
          parsed = { question: raw, complete: false };
        }
      } else {
        parsed = { question: raw, complete: false };
      }
    }

    return c.json(parsed);
  } catch (err) {
    console.error('onboarding error', err);
    return c.json({ error: 'internal server error' }, 500);
  }
});

app.post('/chat', async (c) => {
  try {
    const body = await c.req.json<{
      messages: { role: 'user' | 'assistant'; content: string }[];
      persona: Persona;
      contextSummary: string;
      tone: Tone;
    }>();

    const { messages, persona, contextSummary, tone } = body;

    if (!messages || messages.length === 0) {
      return c.json({ error: 'messages is required' }, 400);
    }

    const systemPrompt = buildChatSystemPrompt(
      persona ?? 'curious',
      contextSummary ?? '',
      tone ?? 'casual'
    );

    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages,
    });

    const reply = response.content[0].type === 'text' ? response.content[0].text : '';

    return c.json({ reply });
  } catch (err) {
    console.error('chat error', err);
    return c.json({ error: 'internal server error' }, 500);
  }
});

const port = parseInt(process.env.PORT ?? '3001', 10);
serve({ fetch: app.fetch, port }, () => {
  console.log(`chatbot-server running on http://localhost:${port}`);
});
