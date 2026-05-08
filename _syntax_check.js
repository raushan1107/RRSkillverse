
// ── Supabase config ──────────────────────────────────────────
const SUPABASE_URL = 'https://oekmyrfqietuqmrwklcs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9la215cmZxaWV0dXFtcndrbGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMjU2NTYsImV4cCI6MjA5MzgwMTY1Nn0.p5jBl7x_YXYOVhjeOyFaoqrKRZcdf6cdxTK2vCSxsjo';

// ── State ────────────────────────────────────────────────────
let currentUser = null;
let chatHistory = [];
let currentMode = 'general';
let isTyping = false;

const MODES = [
  { id: 'general',  label: '💬 General',      hint: 'Ask anything...' },
  { id: 'error',    label: '🔧 Error Solver',  hint: 'Paste your error here...' },
  { id: 'notes',    label: '📝 Notes',         hint: "e.g. 'Give me notes on Blazor components'" },
  { id: 'raushan',  label: '👤 Raushan', hint: 'Ask about Raushan, courses, certifications...' },
];

const ALL_SUGGESTIONS = [
  // About Raushan
  'What certifications does Raushan have?',
  "What is Raushan's teaching style?",
  "Tell me about Raushan's background",
  'What courses does Raushan teach at Koenig?',
  'How many professionals has Raushan trained?',
  // .NET & Blazor
  'Explain dependency injection in Blazor',
  'What is the difference between Blazor Server and WebAssembly?',
  'How does data binding work in Blazor?',
  'Give me notes on C# interfaces',
  'Help me understand async/await in C#',
  'What is the difference between abstract class and interface?',
  // Azure
  'Explain Azure App Service vs Azure Functions',
  'What is Azure OpenAI and how do I use it?',
  'How does Azure Service Bus work?',
  // Power Platform
  'What is Power BI used for?',
  'Explain Power Automate with a real example',
  'What is Copilot Studio?',
  // General
  'Give me notes on OOP principles',
  'Explain SOLID principles simply',
  'What is the difference between REST and GraphQL?',
  'Help me understand Entity Framework Core',
];

// ── Welcome screen ────────────────────────────────────────────
function renderWelcome() {
  const firstName = currentUser?.name?.split(' ')[0] || 'there';
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning'
    : hour < 17 ? 'Good afternoon' : 'Good evening';
  const icon = hour < 12 ? '🌅' : hour < 17 ? '☀️' : '🌙';

  return `
    <div class="chat-welcome" id="chatWelcome">
      <div style="font-size:36px">${icon}</div>
      <div class="chat-welcome-title">${greeting}, ${firstName}!</div>
      <p class="chat-welcome-sub">
        I'm Axiom — ask me anything about Azure, .NET, Blazor,
        Power Platform, errors you're stuck on, or anything you want
        notes on. I respond the way Raushan explains in class.
      </p>
      <div class="chat-suggestions" id="suggestions"></div>
    </div>`;
}

// ── Auth ──────────────────────────────────────────────────────
async function signInWithGoogle() {
  const redirectTo = window.location.origin + window.location.pathname;
  window.location.href = `${SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${encodeURIComponent(redirectTo)}`;
}

async function signOut() {
  await fetch(SUPABASE_URL + '/auth/v1/logout', {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + (currentUser?.token || SUPABASE_ANON_KEY)
    }
  }).catch(() => {});
  currentUser = null;
  localStorage.removeItem('rr_agent_user');
  showSignIn();
}

async function checkSession() {
  const hash = window.location.hash;
  if (hash && hash.includes('access_token')) {
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    if (token) {
      try {
        const user = await fetch(SUPABASE_URL + '/auth/v1/user', {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': 'Bearer ' + token
          }
        }).then(r => r.json());

        if (user?.email) {
          currentUser = {
            id: user.id,
            email: user.email,
            name: user.user_metadata?.full_name || user.email.split('@')[0],
            avatar: user.user_metadata?.avatar_url || '',
            token
          };
          localStorage.setItem('rr_agent_user', JSON.stringify(currentUser));
          window.history.replaceState({}, '', window.location.pathname);
          showChat();
          return;
        }
      } catch (e) {
        console.error('Auth error:', e);
      }
    }
  }

  const saved = localStorage.getItem('rr_agent_user');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed?.id) {
        currentUser = parsed;
        showChat();
        return;
      }
    } catch (e) {}
    localStorage.removeItem('rr_agent_user');
  }

  showSignIn();
}

function showSignIn() {
  document.getElementById('signinGate').style.display = 'flex';
  document.getElementById('chatInterface').classList.remove('visible');
}

async function showChat() {
  document.getElementById('signinGate').style.display = 'none';
  document.getElementById('chatInterface').classList.add('visible');

  document.getElementById('userNameDisplay').textContent =
    currentUser.name || currentUser.email?.split('@')[0] || 'Learner';

  const avatarImg = document.getElementById('userAvatarImg');
  const avatarFb = document.getElementById('userAvatarFb');
  const initials = (currentUser.name || '')
    .split(' ').map(w => w[0]).filter(Boolean).join('').slice(0, 2).toUpperCase()
    || 'RR';

  if (currentUser.avatar) {
    const testImg = new Image();
    testImg.onload = () => {
      avatarImg.src = currentUser.avatar;
      avatarImg.style.display = 'block';
      if (avatarFb) avatarFb.style.display = 'none';
    };
    testImg.onerror = () => {
      avatarImg.style.display = 'none';
      if (avatarFb) { avatarFb.style.display = 'flex'; avatarFb.textContent = initials; }
    };
    testImg.src = currentUser.avatar;
  } else {
    avatarImg.style.display = 'none';
    if (avatarFb) { avatarFb.style.display = 'flex'; avatarFb.textContent = initials; }
  }

  // Render time-aware welcome
  document.getElementById('chatMessages').innerHTML = renderWelcome();
  buildModePills();
  buildSuggestions();
  await loadHistory();
}

// ── Mode Pills ────────────────────────────────────────────────
function buildModePills() {
  const row = document.getElementById('modePills');
  row.innerHTML = MODES.map(m => `
    <button class="mode-pill ${m.id === currentMode ? 'active' : ''}"
            onclick="setMode('${m.id}')">
      ${m.label}
    </button>`).join('');
}

function setMode(mode) {
  currentMode = mode;
  buildModePills();
  const m = MODES.find(x => x.id === mode);
  document.getElementById('chatInput').placeholder = m?.hint || 'Ask anything...';
}

// ── Suggestions ───────────────────────────────────────────────
function buildSuggestions() {
  const el = document.getElementById('suggestions');
  if (!el) return;
  const shuffled = [...ALL_SUGGESTIONS]
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);
  el.innerHTML = shuffled.map(s => `
    <button class="suggestion-chip"
            onclick="useSuggestion(this.textContent.trim())">
      ${s}
    </button>`).join('');
}

function useSuggestion(text) {
  document.getElementById('chatInput').value = text;
  sendMessage();
}

// ── Send message ──────────────────────────────────────────────
async function sendMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg || isTyping) return;

  const welcome = document.getElementById('chatWelcome');
  if (welcome) {
    welcome.style.transition = 'opacity 0.2s';
    welcome.style.opacity = '0';
    setTimeout(() => welcome.remove(), 200);
  }

  let fullMsg = msg;
  if (currentMode === 'error') {
    fullMsg = `I'm getting this error — please diagnose and fix it:\n\n${msg}`;
  } else if (currentMode === 'notes') {
    fullMsg = `Please generate structured learning notes on: ${msg}`;
  } else if (currentMode === 'raushan') {
    fullMsg = `Tell me about: ${msg}`;
  }

  addMessage('user', msg);
  input.value = '';
  input.style.height = '44px';
  const counter = document.getElementById('charCount');
  if (counter) counter.style.display = 'none';

  chatHistory.push({ role: 'user', content: fullMsg });

  const typingId = showTyping();
  isTyping = true;
  document.getElementById('sendBtn').disabled = true;

  try {
    const res = await fetch('/api/agent/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: fullMsg,
        history: chatHistory.slice(-8),
        userId: currentUser?.id,
        userName: currentUser?.name
      })
    });

    const data = await res.json();
    if (data.error) throw new Error(data.error);

    removeTyping(typingId);
    addMessage('agent', data.reply, true);
    chatHistory.push({ role: 'assistant', content: data.reply });
    setTimeout(() => loadHistory(), 1500);

  } catch (err) {
    removeTyping(typingId);
    addMessage('agent', `Sorry, something went wrong: ${err.message}. Please try again.`, false);
  }

  isTyping = false;
  document.getElementById('sendBtn').disabled = false;
  scrollToBottom();
}

// ── Message rendering ─────────────────────────────────────────
let msgCounter = 0;

function addMessage(role, content, showFeedback = false) {
  const id = 'msg-' + (++msgCounter);
  const messages = document.getElementById('chatMessages');
  const isUser = role === 'user';
  const initials = isUser
    ? (currentUser?.name?.[0] || 'U').toUpperCase()
    : 'RR';

  // IMPROVEMENT 6 — timestamp
  const timeStr = new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit'
  });

  const html = `
    <div class="msg-row ${role}" id="${id}">
      <div class="msg-avatar ${isUser ? 'user-av' : 'agent'}">${initials}</div>
      <div style="min-width:0;flex:1">
        <div class="msg-bubble">
          ${isUser ? escapeHtml(content) : formatMessage(content)}
        </div>
        <div style="font-size:9px;color:var(--text-dim);
                    margin-top:3px;
                    text-align:${isUser ? 'right' : 'left'};
                    padding:0 4px;
                    font-family:var(--mono)">
          ${timeStr}
        </div>
        ${showFeedback ? `
        <div style="display:flex;align-items:center;gap:4px;
                    margin-top:4px;padding-left:44px">
          <button onclick="sendFeedback('${id}','up')"
                  id="fb-up-${id}"
                  style="background:none;border:none;cursor:pointer;
                         font-size:14px;opacity:0.35;
                         transition:opacity 0.15s,transform 0.15s;
                         padding:2px 4px;border-radius:4px"
                  onmouseover="this.style.opacity='1'"
                  onmouseout="if(!this.classList.contains('active'))this.style.opacity='0.35'"
                  title="Helpful">👍</button>
          <button onclick="sendFeedback('${id}','down')"
                  id="fb-down-${id}"
                  style="background:none;border:none;cursor:pointer;
                         font-size:14px;opacity:0.35;
                         transition:opacity 0.15s,transform 0.15s;
                         padding:2px 4px;border-radius:4px"
                  onmouseover="this.style.opacity='1'"
                  onmouseout="if(!this.classList.contains('active'))this.style.opacity='0.35'"
                  title="Not helpful">👎</button>
          <span id="fb-txt-${id}"
                style="font-size:10px;color:var(--text-dim);margin-left:2px"></span>
        </div>` : ''}
      </div>
    </div>`;

  messages.insertAdjacentHTML('beforeend', html);

  // FIX 6 — copy buttons on code blocks
  setTimeout(() => {
    const bubble = document.getElementById(id)?.querySelector('.msg-bubble');
    if (!bubble) return;
    bubble.querySelectorAll('pre').forEach(pre => {
      if (pre.querySelector('.code-copy-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copy';
      btn.style.cssText = `
        position:absolute;top:8px;right:8px;
        background:rgba(255,255,255,0.1);
        border:1px solid rgba(255,255,255,0.15);
        border-radius:4px;padding:3px 8px;
        font-size:10px;color:rgba(255,255,255,0.6);
        cursor:pointer;font-family:var(--font);
        transition:all 0.15s;`;
      btn.onmouseover = () => btn.style.background = 'rgba(255,255,255,0.18)';
      btn.onmouseout = () => btn.style.background = 'rgba(255,255,255,0.1)';
      btn.onclick = () => {
        const code = pre.querySelector('code')?.textContent || '';
        navigator.clipboard.writeText(code).then(() => {
          btn.textContent = 'Copied!';
          setTimeout(() => btn.textContent = 'Copy', 1500);
        });
      };
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  }, 50);

  scrollToBottom();
  return id;
}

// FIX 2 — improved markdown renderer
function formatMessage(text) {
  // Escape HTML first
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Code blocks (must come before inline code)
  html = html.replace(/```[\w]*\n?([\s\S]*?)```/g,
    (_, code) => `<pre><code>${code.trim()}</code></pre>`);

  // Inline code
  html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');

  // Bold
  html = html.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');

  // Italic (single asterisk, not double)
  html = html.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');

  // H4 (####) — must come before H3, H2, H1
  html = html.replace(/^#{4}\s+(.+)$/gm,
    '<h4 style="font-size:12px;font-weight:700;color:var(--text);margin:8px 0 4px;text-transform:uppercase;letter-spacing:0.5px">$1</h4>');

  // H3 (###)
  html = html.replace(/^#{3}\s+(.+)$/gm,
    '<h3 style="font-size:13px;font-weight:700;color:var(--text);margin:10px 0 4px">$1</h3>');

  // H2 (##)
  html = html.replace(/^#{2}\s+(.+)$/gm,
    '<h2 style="font-size:14px;font-weight:700;color:var(--text);margin:12px 0 6px;padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,0.06)">$1</h2>');

  // H1 (#)
  html = html.replace(/^#\s+(.+)$/gm,
    '<h2 style="font-size:15px;font-weight:800;color:var(--text);margin:12px 0 6px">$1</h2>');

  // Numbered lists — convert "1. item" lines into <ol>
  html = html.replace(/^(\d+)\.\s+(.+)$/gm,
    '<li style="margin-bottom:2px">$2</li>');
  html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g,
    m => `<ol style="padding-left:16px;margin:4px 0">${m}</ol>`);

  // Bullet lists — convert "- item" or "• item" lines
  html = html.replace(/^[-•]\s+(.+)$/gm,
    '<li style="margin-bottom:2px">$1</li>');
  html = html.replace(/(<li[^>]*>(?!.*<\/ol>).*<\/li>\n?)+/g,
    m => `<ul style="padding-left:16px;margin:4px 0">${m}</ul>`);

  // Horizontal rule
  html = html.replace(/^---+$/gm,
    '<hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:14px 0"/>');

  // Paragraphs — wrap double newlines
  html = html.replace(/\n\n+/g, '</p><p style="margin-bottom:8px">');
  html = html.replace(/\n/g, '<br/>');

  // Wrap in paragraph if not starting with a block element
  if (!html.startsWith('<h') && !html.startsWith('<ul') &&
      !html.startsWith('<ol') && !html.startsWith('<pre')) {
    html = `<p style="margin-bottom:8px">${html}</p>`;
  }

  return html;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ── Typing indicator ──────────────────────────────────────────
function showTyping() {
  const id = 'typing-' + Date.now();
  document.getElementById('chatMessages').insertAdjacentHTML('beforeend', `
    <div class="typing-indicator" id="${id}">
      <div class="msg-avatar agent">RR</div>
      <div class="typing-dots">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>`);
  scrollToBottom();
  return id;
}

function removeTyping(id) {
  document.getElementById(id)?.remove();
}

function scrollToBottom() {
  const el = document.getElementById('chatMessages');
  el.scrollTop = el.scrollHeight;
}

// ── Feedback ──────────────────────────────────────────────────
async function sendFeedback(msgId, rating) {
  document.getElementById(`fb-up-${msgId}`)?.classList.toggle('active', rating === 'up');
  document.getElementById(`fb-down-${msgId}`)?.classList.toggle('active', rating === 'down');
  document.getElementById(`fb-txt-${msgId}`).textContent =
    rating === 'up' ? 'Thanks!' : "Got it, I'll improve.";

  await fetch('/api/agent/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messageId: msgId, userId: currentUser?.id, rating })
  }).catch(() => {});
}

// ── History ───────────────────────────────────────────────────
async function loadHistory() {
  if (!currentUser?.id) return;
  try {
    const res = await fetch(`/api/agent/history?userId=${encodeURIComponent(currentUser.id)}`);
    const data = await res.json();
    renderHistoryPanel(data.messages || []);
  } catch (e) {}
}

function renderHistoryPanel(messages) {
  const list = document.getElementById('historyList');
  const countEl = document.getElementById('historyCount');
  if (!messages.length) {
    list.innerHTML = `
      <div style="padding:20px 12px;text-align:center">
        <div style="font-size:28px;margin-bottom:10px">💬</div>
        <div style="font-size:11px;color:var(--text-dim);line-height:1.6">
          Your conversations will appear here after your first chat
        </div>
      </div>`;
    if (countEl) countEl.textContent = '';
    return;
  }

  // Group messages by date
  const groups = {};
  messages.forEach(m => {
    const date = new Date(m.created_at);
    const key = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    if (!groups[key]) groups[key] = [];
    groups[key].push(m);
  });

  let html = '';
  Object.entries(groups).forEach(([date, msgs]) => {
    html += `
      <div style="padding:8px 12px 4px;font-size:9px;font-weight:700;
                  letter-spacing:0.8px;text-transform:uppercase;
                  color:var(--text-dim)">
        ${date}
      </div>`;
    msgs.forEach(m => {
      const preview = m.user_message.length > 45
        ? m.user_message.slice(0, 45) + '…'
        : m.user_message;
      const time = new Date(m.created_at).toLocaleTimeString('en-IN', {
        hour: '2-digit', minute: '2-digit'
      });
      html += `
        <div class="history-item"
             onclick="reuseHistoryQuestion(${JSON.stringify(m.user_message)})">
          <div class="history-item-preview">${escapeHtml(preview)}</div>
          <div class="history-item-time">${time}</div>
        </div>`;
    });
  });

  list.innerHTML = html;
  if (countEl) countEl.textContent = `· ${messages.length}`;
}

function reuseHistoryQuestion(question) {
  const input = document.getElementById('chatInput');
  input.value = question;
  input.focus();
  autoResize(input);
}

function newChat() {
  chatHistory = [];
  document.getElementById('chatMessages').innerHTML = renderWelcome();
  buildSuggestions();
}

// ── Input helpers ─────────────────────────────────────────────
function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = '44px';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  // IMPROVEMENT 7 — character counter
  const len = el.value.length;
  const counter = document.getElementById('charCount');
  if (counter) {
    if (len > 100) {
      counter.style.display = 'inline';
      counter.textContent = len + ' / 2000';
      counter.style.color = len > 1800 ? 'var(--error)' : 'var(--text-dim)';
    } else {
      counter.style.display = 'none';
    }
  }
}

// ── Init ──────────────────────────────────────────────────────
checkSession();
