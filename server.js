/*
SUPABASE SETUP (run these SQL commands in Supabase SQL Editor):

create table agent_messages (
  id uuid default gen_random_uuid() primary key,
  user_id text not null,
  user_name text,
  user_message text not null,
  agent_reply text not null,
  created_at timestamptz default now()
);

create table agent_feedback (
  id uuid default gen_random_uuid() primary key,
  message_id text,
  user_id text,
  rating text not null,
  comment text,
  created_at timestamptz default now()
);

create index on agent_messages(user_id);
create index on agent_messages(created_at desc);
create index on agent_feedback(created_at desc);
*/

require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const crypto = require('crypto');

const app = express();
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, 'public')));

// ── Rate limiting ──────────────────────────────────────────
// Max 30 lesson requests per IP per 10 minutes
const lessonLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 30,
  message: { error: 'Too many requests. Please wait a few minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Max 60 doubt requests per IP per 10 minutes
const doubtLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 60,
  message: { error: 'Too many requests. Please wait a few minutes.' },
});

// ── Validate env vars on startup ───────────────────────────
const REQUIRED = ['AZURE_OPENAI_ENDPOINT', 'AZURE_OPENAI_KEY', 'AZURE_OPENAI_DEPLOYMENT'];
const missing = REQUIRED.filter(k => !process.env[k]);
if (missing.length) {
  console.error('ERROR: Missing environment variables:', missing.join(', '));
  process.exit(1);
}

const LABS_CACHE_DIR = path.join(__dirname, 'labs-cache');
if (!fs.existsSync(LABS_CACHE_DIR)) {
  fs.mkdirSync(LABS_CACHE_DIR);
  console.log('Created labs-cache directory');
}

const ENDPOINT   = process.env.AZURE_OPENAI_ENDPOINT.replace(/\/$/, '');
const API_KEY    = process.env.AZURE_OPENAI_KEY;
const DEPLOYMENT = process.env.AZURE_OPENAI_DEPLOYMENT;
const API_VER    = process.env.AZURE_OPENAI_API_VERSION || '2024-08-01-preview';

const AZURE_URL = `${ENDPOINT}/openai/deployments/${DEPLOYMENT}/chat/completions?api-version=${API_VER}`;

// ── Raushan knowledge base ─────────────────────────────────
const RR_KNOWLEDGE = `
You are Raushan Ranjan's AI learning assistant on RR Skillverse.

ABOUT RAUSHAN RANJAN:
- Microsoft Certified Trainer (MCT) — one of the most prestigious
  Microsoft certifications globally
- Senior Corporate Trainer at Koenig Solutions, Noida, India
- Founder of RR Skillverse — a personal learning platform
- 10+ years of teaching experience
- 2900+ professionals trained across 25+ countries
- 38+ Microsoft certifications including:
  AZ-204 (Azure Developer), AZ-104 (Azure Administrator),
  PL-300 (Power BI), PL-400 (Power Platform Developer),
  AZ-900, AI-900, DP-900, MS-900 and more
- Expert in: Azure, .NET, Blazor, C#, Power Platform,
  Power BI, Power Apps, Power Automate, Copilot Studio,
  Python, Data Analytics, System Design, API Management (Apigee),
  Qt/QML, TensorFlow, Machine Learning
- Teaches at Koenig Solutions for global enterprise clients
- YouTube channel: @RaushanRanjan — 300+ free videos
- Known for: simplifying complex concepts with real-world analogies,
  warm and engaging teaching style, "learn by building" approach

RR SKILLVERSE PLATFORM:
- Courses: Power Platform, Azure & Cloud, .NET & Blazor,
  AI & Machine Learning, Data Analytics, System Design
- Live course: Intelligent Enterprise Development with .NET 8 & Azure AI
  (46 lessons, 4 phases, 4 hands-on labs, 3 capstone projects)
- AI-powered lessons generated in Raushan's trainer style
- Labs section with cached AI-generated step-by-step guides
- Portal: learn.html — the full interactive learning experience

RAUSHAN'S TEACHING STYLE:
- Always starts with a real-world analogy before technical content
- Short, direct sentences — conversational, warm, never condescending
- Explains the WHY before the HOW
- Uses phrases like "Think of it this way..." "Here's the thing..."
  "In simple terms..." "The real question is..."
- Encourages learners: "You've got this." "Good question."
- When solving errors: diagnoses root cause first, then fixes step by step
- For notes: structured, scannable, includes key terms and examples

YOUR CAPABILITIES AS THIS ASSISTANT:
1. Answer anything about Raushan, his background, courses, certifications
2. Answer questions about RR Skillverse platform and courses
3. Help learners understand concepts from any course Raushan teaches
   (Azure, .NET, C#, Blazor, Power BI, Power Platform, Python, etc.)
4. Solve errors — when someone pastes an error message or stack trace,
   diagnose and explain the fix clearly
5. Generate notes — when asked for notes on any topic,
   produce structured, well-formatted learning notes
6. General learning support — explain concepts, review code,
   answer questions about tech topics Raushan covers

ALWAYS respond in Raushan's warm trainer voice.
NEVER say you cannot help with something Raushan teaches.
For error solving: show the fix AND explain why the error happened.
For notes: use clear headings, bullet points, and code examples.
Keep responses focused and practical — no unnecessary padding.
`;

// ── Shared proxy function ──────────────────────────────────
async function callAzure(messages, maxTokens) {
  const response = await fetch(AZURE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': API_KEY,
    },
    body: JSON.stringify({ messages, max_tokens: maxTokens, temperature: 0.7 }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    const msg = err?.error?.message || `Azure API error: HTTP ${response.status}`;
    throw new Error(msg);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// ── POST /api/lesson ───────────────────────────────────────
app.post('/api/lesson', lessonLimiter, async (req, res) => {
  const { lessonTitle, phaseLabel, phaseTitle } = req.body;

  if (!lessonTitle || !phaseLabel || !phaseTitle) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  // Sanitize — prevent prompt injection via lesson titles
  const safeTitle = String(lessonTitle).slice(0, 120).replace(/[<>]/g, '');
  const safePhase = String(phaseLabel).slice(0, 40).replace(/[<>]/g, '');
  const safeModule = String(phaseTitle).slice(0, 80).replace(/[<>]/g, '');

  const systemMsg = `You are Raushan Ranjan, a Microsoft Certified Trainer (MCT) at Koenig Solutions, India. Your portal "RR Skillverse" teaches C# and Blazor to beginners building intelligent enterprise applications with .NET 8 and Azure AI.

TEACHING STYLE:
- Lead with a real-world analogy before any code
- Short, direct sentences. Warm classroom tone.
- Always explain the WHY behind every concept
- Connect each topic to how Blazor or enterprise apps use it
- Include 1-2 well-commented C# code examples

OUTPUT FORMAT — HTML only, no markdown:
- <h2> for section headings
- <h3> for sub-headings
- <p> for paragraphs
- <ul><li> for lists
- <strong> for emphasis
- <pre><code class="language-csharp">code</code></pre> for ALL code blocks
- <analogy>text</analogy> for real-world analogy
- <tip>text</tip> for a trainer pro tip
- <warn>text</warn> for a common mistake warning
- Always end with this exact quiz structure:
<div class="quiz-block">
  <div class="quiz-eyebrow">Quick Check</div>
  <div class="quiz-question">question text here</div>
  <div class="quiz-options">
    <button class="quiz-opt" data-correct="false">option</button>
    <button class="quiz-opt" data-correct="true">correct option</button>
    <button class="quiz-opt" data-correct="false">option</button>
    <button class="quiz-opt" data-correct="false">option</button>
  </div>
  <div class="quiz-fb"></div>
</div>

Keep explanation 550-800 words. End with quiz. Output HTML only — no markdown, no backticks.`;

  const userMsg = `Generate a complete lesson for: "${safeTitle}"
Module: ${safePhase} — ${safeModule}
Student goal: build Blazor enterprise apps with Azure AI.`;

  try {
    const content = await callAzure(
      [{ role: 'system', content: systemMsg }, { role: 'user', content: userMsg }],
      1800
    );
    res.json({ content });
  } catch (err) {
    console.error('Lesson generation error:', err.message);
    res.status(502).json({ error: err.message });
  }
});

// ── POST /api/doubt ────────────────────────────────────────
app.post('/api/doubt', doubtLimiter, async (req, res) => {
  const { question, lessonTitle } = req.body;

  if (!question || !lessonTitle) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const safeQ = String(question).slice(0, 500);
  const safeTitle = String(lessonTitle).slice(0, 120).replace(/[<>]/g, '');

  try {
    const content = await callAzure([
      {
        role: 'system',
        content: `You are Raushan Ranjan, MCT trainer. Answer student doubts about "${safeTitle}" in simple direct language. Max 100 words. Use <p> and <code> HTML tags only.`
      },
      { role: 'user', content: safeQ }
    ], 400);

    res.json({ content });
  } catch (err) {
    console.error('Doubt resolution error:', err.message);
    res.status(502).json({ error: err.message });
  }
});

// ── Lab generation rate limiter ───────────────────────────
const labGenLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: { error: 'Too many generation requests. Wait a few minutes.' },
});

// ── GET /api/lab/:id — check cache ─────────────────────────
app.get('/api/lab/:id', (req, res) => {
  const id = req.params.id.replace(/[^a-z0-9-]/g, '');
  const filePath = path.join(LABS_CACHE_DIR, `${id}.json`);

  if (fs.existsSync(filePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return res.json({ cached: true, content: data.content,
                        generatedAt: data.generatedAt });
    } catch {
      // corrupted file — treat as not cached
    }
  }

  res.json({ cached: false });
});

// ── POST /api/lab/generate — generate and cache ────────────
app.post('/api/lab/generate', labGenLimiter, async (req, res) => {
  const { labId, labTitle, labPhase, labObjective,
          labDeliverable, labPrereqs } = req.body;

  if (!labId || !labTitle) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const id             = String(labId).replace(/[^a-z0-9-]/g, '').slice(0, 20);
  const safeTitle      = String(labTitle).slice(0, 120).replace(/[<>]/g, '');
  const safePhase      = String(labPhase || '').slice(0, 80).replace(/[<>]/g, '');
  const safeObjective  = String(labObjective || '').slice(0, 400);
  const safeDeliverable = String(labDeliverable || '').slice(0, 300);
  const safePrereqs    = Array.isArray(labPrereqs)
    ? labPrereqs.slice(0, 6).map(p => String(p).slice(0, 80)).join(', ')
    : '';

  const systemMsg = `You are Raushan Ranjan, MCT, Koenig Solutions.
Write a precise, step-by-step hands-on lab guide for a .NET 8 & Blazor course.

Lab: "${safeTitle}"
Phase: ${safePhase}
Objective: ${safeObjective}
Deliverable: ${safeDeliverable}
Prerequisites covered: ${safePrereqs}

CRITICAL — this guide must be REPRODUCIBLE. Every student must get
the same result. Use exact file names, exact variable names,
exact commands. No variation allowed.

Output HTML only. Structure exactly as follows:

<h2>Environment Check</h2>
<p>What the student needs installed before starting.</p>
<pre><code class="language-bash">exact commands to verify setup</code></pre>

<h2>Step 1 — [Action Title]</h2>
<p>What and WHY — one short paragraph.</p>
<pre><code class="language-csharp">exact code</code></pre>
<tip>One practical trainer tip for this step</tip>

[Repeat Step N pattern for 4–7 steps]

<h2>Run and Verify</h2>
<p>Exact steps to run the project and what the student should see.</p>
<warn>One common mistake that causes this step to fail</warn>

<h2>What You Built</h2>
<p>2–3 sentences. What concept was practiced. How it connects to the next lab.</p>

Rules:
- All file names use exact casing: e.g. WeatherService.cs not weatherservice.cs
- All commands are complete and copy-pasteable
- Code blocks are complete, not partial snippets
- No placeholders like YOUR_VALUE — use sensible defaults
- Output HTML only, no markdown, no backtick fences outside code blocks`;

  const userMsg = `Generate the complete lab guide for: "${safeTitle}".
This guide will be saved and shown to all students — make it precise and consistent.`;

  try {
    const content = await callAzure(
      [{ role: 'system', content: systemMsg },
       { role: 'user', content: userMsg }],
      2200
    );

    const filePath = path.join(LABS_CACHE_DIR, `${id}.json`);
    const cacheData = {
      labId: id,
      labTitle: safeTitle,
      content,
      generatedAt: new Date().toISOString(),
      version: 1
    };
    await fsPromises.writeFile(filePath, JSON.stringify(cacheData, null, 2));

    res.json({ cached: true, content, generatedAt: cacheData.generatedAt });
  } catch (err) {
    console.error('Lab generation error:', err.message);
    res.status(502).json({ error: err.message });
  }
});

// ── DELETE /api/lab/:id — admin regenerate ─────────────────
app.delete('/api/lab/:id', (req, res) => {
  const secret = req.headers['x-admin-secret'];
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Not authorized.' });
  }

  const id = req.params.id.replace(/[^a-z0-9-]/g, '');
  const filePath = path.join(LABS_CACHE_DIR, `${id}.json`);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return res.json({ deleted: true, id });
  }

  res.json({ deleted: false, message: 'File not found.' });
});

// ── Agent rate limiter ─────────────────────────────────────
const agentLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  message: { error: 'Too many requests. Please wait.' }
});

// ── POST /api/agent/chat ───────────────────────────────────
app.post('/api/agent/chat', agentLimiter, async (req, res) => {
  const { message, history, userId, userName } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message required.' });
  }

  const safeMessage = String(message).slice(0, 2000);
  const safeName = userName
    ? String(userName).slice(0, 50).replace(/[<>]/g, '')
    : 'Learner';

  const messages = [
    { role: 'system', content: RR_KNOWLEDGE }
  ];

  if (Array.isArray(history)) {
    const recent = history.slice(-10);
    recent.forEach(h => {
      if (h.role && h.content) {
        messages.push({
          role: h.role === 'user' ? 'user' : 'assistant',
          content: String(h.content).slice(0, 1000)
        });
      }
    });
  }

  messages.push({ role: 'user', content: safeMessage });

  try {
    const reply = await callAzure(messages, 1200);

    if (userId && process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {
      try { await saveMessage(userId, safeName, safeMessage, reply); }
      catch (e) { console.error('Save failed:', e.message); }
    }

    res.json({ reply });
  } catch (err) {
    console.error('Agent chat error:', err.message);
    res.status(502).json({ error: err.message });
  }
});

// ── Supabase helpers ───────────────────────────────────────
async function supabaseRequest(path, method = 'GET', body = null) {
  const url = process.env.SUPABASE_URL + '/rest/v1/' + path;
  const headers = {
    'apikey': process.env.SUPABASE_KEY,
    'Authorization': 'Bearer ' + process.env.SUPABASE_KEY,
    'Content-Type': 'application/json',
    'Prefer': method === 'POST' ? 'return=minimal' : 'return=representation'
  };
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);

  const res = await fetch(url, opts);

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Supabase ${method} ${path} failed: ${res.status} ${errText}`);
  }

  if (method === 'GET') {
    const text = await res.text();
    return text ? JSON.parse(text) : [];
  }
  return null;
}

async function saveMessage(userId, userName, userMsg, agentReply) {
  if (!process.env.SUPABASE_URL) {
    console.log('SUPABASE_URL not set — skipping save');
    return;
  }
  try {
    console.log('Saving message for user:', userId);
    await supabaseRequest('agent_messages', 'POST', {
      user_id: userId,
      user_name: userName,
      user_message: userMsg,
      agent_reply: agentReply,
      created_at: new Date().toISOString()
    });
    console.log('Message saved successfully');
  } catch (e) {
    console.error('saveMessage error:', e.message);
  }
}

// ── POST /api/agent/feedback ───────────────────────────────
app.post('/api/agent/feedback', async (req, res) => {
  const { messageId, userId, rating, comment } = req.body;
  if (!rating) return res.status(400).json({ error: 'Rating required.' });

  if (process.env.SUPABASE_URL) {
    try {
      await supabaseRequest('agent_feedback', 'POST', {
        message_id: messageId || null,
        user_id: userId || 'anonymous',
        rating: String(rating).slice(0, 10),
        comment: comment ? String(comment).slice(0, 500) : null,
        created_at: new Date().toISOString()
      });
    } catch (e) {
      console.error('Feedback save error:', e.message);
    }
  }

  res.json({ saved: true });
});

// ── GET /api/agent/history ─────────────────────────────────
app.get('/api/agent/history', async (req, res) => {
  const { userId } = req.query;
  if (!userId || !process.env.SUPABASE_URL) {
    return res.json({ messages: [] });
  }

  try {
    const safeId = String(userId).slice(0, 100).replace(/[^a-zA-Z0-9@._-]/g, '');
    const data = await supabaseRequest(
      `agent_messages?user_id=eq.${encodeURIComponent(safeId)}&order=created_at.desc&limit=50`
    );
    res.json({ messages: Array.isArray(data) ? data : [] });
  } catch (e) {
    res.json({ messages: [] });
  }
});

// ── GET /api/admin/agent ───────────────────────────────────
app.get('/api/admin/agent', async (req, res) => {
  const secret = req.headers['x-admin-secret'];
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ error: 'Not authorized.' });
  }

  if (!process.env.SUPABASE_URL) {
    return res.json({ messages: [], feedback: [] });
  }

  try {
    const [messages, feedback] = await Promise.all([
      supabaseRequest('agent_messages?order=created_at.desc&limit=100'),
      supabaseRequest('agent_feedback?order=created_at.desc&limit=100')
    ]);
    res.json({ messages: messages || [], feedback: feedback || [] });
  } catch (e) {
    res.status(502).json({ error: e.message });
  }
});

// ── GET /api/proxy-avatar ──────────────────────────────────
app.get('/api/proxy-avatar', async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send('No URL');

  const allowed = [
    'googleusercontent.com',
    'googleapis.com',
    'lh3.googleusercontent.com'
  ];
  const isAllowed = allowed.some(d => url.includes(d));
  if (!isAllowed) return res.status(403).send('Forbidden');

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Fetch failed');

    const buffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    res.set('Content-Type', contentType);
    res.set('Cache-Control', 'public, max-age=86400');
    res.send(Buffer.from(buffer));
  } catch (e) {
    res.status(502).send('Could not fetch image');
  }
});

// ── Health check (Render uses this) ───────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'RR Skillverse', deployment: DEPLOYMENT });
});

// ── Catch-all → serve frontend ─────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'learn.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`RR Skillverse running on port ${PORT}`);
  console.log(`Azure deployment: ${DEPLOYMENT}`);
});
