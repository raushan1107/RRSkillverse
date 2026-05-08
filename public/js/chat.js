/* ═══════════════════════════════════════════════════════
   RR SKILLVERSE — CHAT.JS
   Direct Line + Azure Speech Service (STT & TTS)
   Note: Speech key exposed intentionally for demo/testing
═══════════════════════════════════════════════════════ */

const CONFIG = {
  DIRECT_LINE_SECRET: '5kh7cbMYOgfnj3srl6yBF1pdD9uyCBUAqkY9wwy8QRlVGzuNocQNJQQJ99CCACqBBLyAArohAAABAZBS1coS.4K0XEJLESA6iYreKJh9t9YHbjxJKv5sc1Tgcz7TDtXOcUSimEe55JQQJ99CCACqBBLyAArohAAABAZBS3hxX',
  DIRECT_LINE_BASE:   'https://directline.botframework.com/v3/directline',
  POLLING_INTERVAL:   1000,
  POLLING_TIMEOUT:    30000,
  AZURE_SPEECH_KEY:    'mjhaRHgaqViQu8zedjWL6JRYrruCkwBlwYmVgdhR2ZMJwezcBJXIJQQJ99CCACYeBjFXJ3w3AAAYACOGNvVV',
  AZURE_SPEECH_REGION: 'eastus',
  AZURE_SPEECH_VOICE:  'en-IN-NeerjaNeural',
  AZURE_SPEECH_LANG:   'en-IN',
};

const SVC = { copilot: null, stt: null, tts: null };
let conversationId = null, convToken = CONFIG.DIRECT_LINE_SECRET;
let watermark = null, isBotTyping = false, isListening = false;
let sessionHistory = [], azureSTTRecognizer = null;
let ttsEnabled = false, selectedVoice = CONFIG.AZURE_SPEECH_VOICE;
let SpeechSDK = null, _sdkLoadPromise = null;

const qs  = s => document.querySelector(s);
const now = () => new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* ── SDK LOADER ──────────────────────────────────────── */
function loadSpeechSDK() {
  if (SpeechSDK) return Promise.resolve(SpeechSDK);
  if (_sdkLoadPromise) return _sdkLoadPromise;
  _sdkLoadPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/microsoft-cognitiveservices-speech-sdk/1.38.0/microsoft.cognitiveservices.speech.sdk.bundle-min.js';
    s.onload  = () => { SpeechSDK = window.SpeechSDK; SpeechSDK ? resolve(SpeechSDK) : reject(new Error('SpeechSDK not on window')); };
    s.onerror = () => reject(new Error('Failed to load Azure Speech SDK'));
    document.head.appendChild(s);
  });
  return _sdkLoadPromise;
}

/* ── DIAGNOSTICS ─────────────────────────────────────── */
async function runDiagnostics() {
  setDiag('Copilot','spin','Checking...');
  setDiag('STT','spin','Loading SDK...');
  setDiag('TTS','spin','Loading SDK...');
  hideBanners();
  await Promise.all([checkCopilot(), checkAzureSpeech()]);
  applyServiceState();
  const lr = qs('#diagLastRun');
  if (lr) lr.textContent = 'Last checked: ' + now();
}

async function checkCopilot() {
  try {
    const r = await fetch(`${CONFIG.DIRECT_LINE_BASE}/conversations`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${CONFIG.DIRECT_LINE_SECRET}`, 'Content-Type': 'application/json' }
    });
    if (r.ok) {
      const d = await r.json();
      conversationId = d.conversationId; convToken = d.token || CONFIG.DIRECT_LINE_SECRET; watermark = null;
      SVC.copilot = true; setDiag('Copilot','ok','Connected');
    } else {
      SVC.copilot = false;
      const msg = r.status===401?'Invalid / expired secret':r.status===403?'Access denied':r.status===404?'Resource deleted':`HTTP ${r.status}`;
      setDiag('Copilot','fail',msg);
    }
  } catch(e) { SVC.copilot = false; setDiag('Copilot','fail', e.message.includes('fetch')?'Network / CORS error':e.message.slice(0,45)); }
}

async function checkAzureSpeech() {
  try {
    await loadSpeechSDK();
    setDiag('STT','spin','Verifying key...');
    setDiag('TTS','spin','Verifying key...');
    const cfg = SpeechSDK.SpeechConfig.fromSubscription(CONFIG.AZURE_SPEECH_KEY, CONFIG.AZURE_SPEECH_REGION);
    cfg.speechSynthesisVoiceName = selectedVoice;
    const synth = new SpeechSDK.SpeechSynthesizer(cfg, null);
    await new Promise(resolve => {
      synth.speakTextAsync('', result => {
        synth.close();
        const ok = result.reason !== SpeechSDK.ResultReason.Canceled || !result.errorDetails?.includes('401');
        if (ok) {
          SVC.stt = true; SVC.tts = true;
          setDiag('STT','ok',`Azure · ${CONFIG.AZURE_SPEECH_LANG}`);
          setDiag('TTS','ok',`Azure · ${selectedVoice}`);
        } else {
          SVC.stt = false; SVC.tts = false;
          setDiag('STT','fail','Auth failed'); setDiag('TTS','fail','Auth failed');
        }
        resolve();
      }, err => {
        synth.close();
        const isAuth = err.includes('401')||err.includes('403')||err.includes('Unauthorized');
        SVC.stt = false; SVC.tts = false;
        setDiag('STT','fail', isAuth?'Invalid key':'SDK error');
        setDiag('TTS','fail', isAuth?'Invalid key':'SDK error');
        resolve();
      });
    });
    if (SVC.tts) populateAzureVoiceList();
  } catch(e) {
    SVC.stt = false; SVC.tts = false;
    const msg = e.message.includes('Failed')?'SDK load failed':e.message.slice(0,45);
    setDiag('STT','fail',msg); setDiag('TTS','fail',msg);
  }
}

function populateAzureVoiceList() {
  const sel = qs('#voiceSelect');
  if (!sel) return;
  const voices = [
    {name:'en-IN-NeerjaNeural',   label:'Neerja — Indian English (Female)'},
    {name:'en-IN-PrabhatNeural',  label:'Prabhat — Indian English (Male)'},
    {name:'en-IN-AaravNeural',    label:'Aarav — Indian English (Male)'},
    {name:'en-IN-AnanyaNeural',   label:'Ananya — Indian English (Female)'},
    {name:'en-US-JennyNeural',    label:'Jenny — US English (Female)'},
    {name:'en-US-GuyNeural',      label:'Guy — US English (Male)'},
    {name:'en-US-AriaNeural',     label:'Aria — US English (Female)'},
    {name:'en-GB-SoniaNeural',    label:'Sonia — UK English (Female)'},
    {name:'en-GB-RyanNeural',     label:'Ryan — UK English (Male)'},
    {name:'en-AU-NatashaNeural',  label:'Natasha — Australian (Female)'},
  ];
  sel.innerHTML = voices.map(v => `<option value="${v.name}"${v.name===selectedVoice?' selected':''}>${v.label}</option>`).join('');
}

function setDiag(svc, status, note) {
  const d = qs(`#diagDot${svc}`), n = qs(`#diagNote${svc}`);
  if (d) d.className = `diag-dot ${status}`;
  if (n) n.textContent = note;
}
function hideBanners() { document.querySelectorAll('.svc-banner').forEach(b=>b.classList.remove('show')); }

/* ── SERVICE STATE → UI ──────────────────────────────── */
function applyServiceState() {
  const {copilot,stt,tts} = SVC;
  const av = qs('#agentAvatar');
  if (av) av.className = 'agent-avatar';
  let pillCls, pillText, descText;
  if (copilot && stt && tts)       { pillCls='online';  pillText='All systems operational';     descText='Copilot Studio · Azure Speech active';     if(av)av.classList.add('av-online'); }
  else if (copilot && (!stt||!tts)){ pillCls='partial'; pillText='Chat active · voice limited'; descText='Copilot Studio connected · voice degraded'; if(av)av.classList.add('av-online'); }
  else if (!copilot && (stt||tts)) { pillCls='partial'; pillText='Voice ready · agent offline'; descText='Azure Speech ready · Copilot unavailable';  if(av)av.classList.add('av-error');  }
  else                              { pillCls='error';   pillText='Services unavailable';        descText='See Settings → Diagnostics';                if(av)av.classList.add('av-error');  }

  document.querySelectorAll('.status-dot').forEach(d=>d.className='status-dot '+pillCls);
  document.querySelectorAll('#statusText').forEach(el=>el.textContent=pillText);
  const desc=qs('#agentDesc'); if(desc) desc.textContent=descText;

  const cs=qs('#connStatus'),cd=qs('#connDetail');
  if(cs){cs.textContent=copilot?'Connected to Copilot Studio':'Disconnected';cs.style.color=copilot?'var(--success)':'var(--error)';}
  if(cd) cd.textContent=copilot?`Conversation ID: ${conversationId}`:'Secret key invalid or resource deleted.';

  if(!copilot)          qs('#bannerCopilot')?.classList.add('show');
  if(stt===false)       qs('#bannerSTT')?.classList.add('show');
  if(tts===false)       qs('#bannerTTS')?.classList.add('show');
  if(copilot&&(!stt||!tts)) qs('#bannerPartial')?.classList.add('show');

  const ta=qs('#chatTextarea'),sb=qs('#sendBtn'),ih=qs('#inputHintLeft');
  if(ta){ta.disabled=!copilot;ta.placeholder=copilot?'Ask anything about courses, skills, or learning paths...':'Chat unavailable — agent not connected';}
  if(sb) sb.disabled=!copilot;
  if(ih) ih.textContent=copilot?'Enter to send · Shift+Enter for new line':'Reconnect via Settings';

  const mic=qs('#micBtn');
  if(mic){
    if(!stt){mic.classList.add('unavailable');mic.title='Azure Speech STT unavailable';}
    else{mic.classList.remove('unavailable');mic.title='Voice input — Azure Speech';}
  }
  document.querySelectorAll('.chip').forEach(c=>{if(!copilot)c.classList.add('disabled');else c.classList.remove('disabled');});

  const ttsHint=qs('#ttsHint');
  if(ttsHint){
    if(tts){ttsHint.textContent=`Azure Neural Voice · ${selectedVoice}`;ttsHint.style.color='';}
    else{ttsHint.textContent='Azure Speech TTS unavailable';ttsHint.style.color='var(--error)';const te=qs('#ttsEnabled');if(te)te.disabled=true;}
  }
  if(!copilot){const w=qs('#messagesWrap');if(w&&!w.querySelector('.sys-msg'))addSysMsg('Agent offline — check Settings');}
}

/* ── DIRECT LINE ─────────────────────────────────────── */
async function retryConnection() {
  showToast('Reconnecting...');
  hideBanners(); SVC.copilot=null; setDiag('Copilot','spin','Connecting...');
  await checkCopilot(); applyServiceState();
}
window.retryConnection = retryConnection;

async function sendToBot(text) {
  if(!conversationId) return false;
  try {
    const r = await fetch(`${CONFIG.DIRECT_LINE_BASE}/conversations/${conversationId}/activities`,{
      method:'POST',
      headers:{'Authorization':`Bearer ${convToken}`,'Content-Type':'application/json'},
      body:JSON.stringify({type:'message',from:{id:'user1',name:'Learner'},text,locale:'en-US'})
    });
    if(!r.ok) throw new Error(`HTTP ${r.status}`);
    return true;
  } catch(e){showToast('Send failed: '+e.message,'error');return false;}
}

async function pollReply(deadline) {
  const url = `${CONFIG.DIRECT_LINE_BASE}/conversations/${conversationId}/activities`;
  let lastWm = watermark;
  while(Date.now()<deadline){
    try{
      const r = await fetch(url+(lastWm?`?watermark=${lastWm}`:''),{headers:{'Authorization':`Bearer ${convToken}`}});
      if(!r.ok) throw new Error(`HTTP ${r.status}`);
      const data=await r.json();
      const bots=(data.activities||[]).filter(a=>a.type==='message'&&a.from?.role==='bot');
      if(bots.length){watermark=data.watermark;return bots;}
      lastWm=data.watermark; await sleep(CONFIG.POLLING_INTERVAL);
    }catch(e){await sleep(CONFIG.POLLING_INTERVAL);}
  }
  return [];
}

function extractText(act) {
  const parts=[];
  if(act.text?.trim()) parts.push(act.text.trim());
  for(const att of(act.attachments||[])){
    const ct=att.contentType||'',c=att.content||{};
    if(ct.includes('adaptiveCard')||ct==='application/vnd.microsoft.card.adaptive') parts.push(parseAC(c));
    else if(ct==='application/vnd.microsoft.card.hero'){if(c.title)parts.push(c.title);if(c.text)parts.push(c.text);}
  }
  const actions=(act.suggestedActions?.actions||[]);
  if(actions.length){parts.push('\nOptions:');actions.forEach(a=>parts.push('  - '+(a.title||a.value||'')));}
  return parts.join('\n')||'(no text)';
}

function parseAC(c) {
  const lines=[];
  function walk(n){
    if(!n||typeof n!=='object') return;
    if(n.type==='TextBlock'&&n.text) lines.push((n.weight==='bolder'?'**':'')+n.text.trim()+(n.weight==='bolder'?'**':''));
    else if(n.type==='FactSet')(n.facts||[]).forEach(f=>lines.push(`${f.title}: ${f.value}`));
    ['body','items'].forEach(k=>(n[k]||[]).forEach(walk));
    (n.columns||[]).forEach(col=>(col.items||[]).forEach(walk));
  }
  walk(c); return lines.join('\n');
}

/* ── RENDER ──────────────────────────────────────────── */
function renderMsg(text, role) {
  const wrap=qs('#messagesWrap'); if(!wrap) return;
  qs('#welcomeState')?.remove();
  const row=document.createElement('div');row.className='msg-row '+(role==='user'?'user':'');
  const av=document.createElement('div');av.className='msg-av '+(role==='user'?'user-av':'bot');av.textContent=role==='user'?'You':'AI';
  const cnt=document.createElement('div');cnt.className='msg-content';
  const sndr=document.createElement('div');sndr.className='msg-sender';sndr.textContent=role==='user'?'You':'Skillverse Assistant';
  const bub=document.createElement('div');bub.className='bubble '+role;bub.innerHTML=fmtText(text);
  const time=document.createElement('div');time.className='msg-time';time.textContent=now();
  cnt.append(sndr,bub,time);row.append(av,cnt);wrap.append(row);
  wrap.scrollTop=wrap.scrollHeight;
}

function addSysMsg(text) {
  const wrap=qs('#messagesWrap');if(!wrap)return;
  qs('#welcomeState')?.remove();
  const d=document.createElement('div');d.className='sys-msg';d.textContent=text;
  wrap.append(d);wrap.scrollTop=wrap.scrollHeight;
}

function fmtText(t) {
  return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
    .replace(/\*(.*?)\*/g,'<em>$1</em>')
    .replace(/`(.*?)`/g,'<code>$1</code>')
    .replace(/\n/g,'<br>');
}

function showTyping() {
  const wrap=qs('#messagesWrap');if(!wrap)return;
  const row=document.createElement('div');row.className='thinking-row';row.id='typingIndicator';
  const av=document.createElement('div');av.className='msg-av bot';av.textContent='AI';
  const bub=document.createElement('div');bub.className='typing-bubble';
  bub.innerHTML='<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  row.append(av,bub);wrap.append(row);wrap.scrollTop=wrap.scrollHeight;
}
function hideTyping(){qs('#typingIndicator')?.remove();}

/* ── SEND ────────────────────────────────────────────── */
async function sendMessage() {
  if(!SVC.copilot){showToast('Agent offline — check Settings','error');return;}
  const ta=qs('#chatTextarea');
  const text=ta?.value.trim();
  if(!text||isBotTyping) return;
  ta.value='';autoResize(ta);updateCharCount();
  renderMsg(text,'user');
  isBotTyping=true;qs('#sendBtn').disabled=true;
  const ok=await sendToBot(text);
  if(!ok){isBotTyping=false;qs('#sendBtn').disabled=false;return;}
  showTyping();
  const activities=await pollReply(Date.now()+CONFIG.POLLING_TIMEOUT);
  hideTyping();
  if(!activities.length){
    addSysMsg('No reply — agent timed out. Please try again.');
    showToast('No response (timeout)','warn');
  } else {
    for(const act of activities){
      const rt=extractText(act);
      renderMsg(rt,'bot');
      sessionHistory.push({time:now(),q:text,a:rt});
      if(ttsEnabled&&SVC.tts) await speakAzure(rt);
    }
    updateHistory();
  }
  isBotTyping=false;qs('#sendBtn').disabled=false;
}
window.sendMessage=sendMessage;

function sendChip(el){if(el.classList.contains('disabled'))return;const ta=qs('#chatTextarea');if(ta)ta.value=el.textContent;sendMessage();}
window.sendChip=sendChip;
function handleKey(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}}
window.handleKey=handleKey;
function autoResize(el){el.style.height='auto';el.style.height=Math.min(el.scrollHeight,130)+'px';updateCharCount();}
window.autoResize=autoResize;
function updateCharCount(){const el=qs('#charCount');if(el)el.textContent=(qs('#chatTextarea')?.value.length||0)+' / 2000';}

/* ── AZURE STT ───────────────────────────────────────── */
function toggleVoice(){
  if(!SVC.stt){showToast('Azure Speech STT not available','warn');return;}
  if(isListening){cancelVoice();return;}
  startAzureSTT();
}
window.toggleVoice=toggleVoice;

async function startAzureSTT() {
  try {
    await loadSpeechSDK();
    const cfg=SpeechSDK.SpeechConfig.fromSubscription(CONFIG.AZURE_SPEECH_KEY,CONFIG.AZURE_SPEECH_REGION);
    cfg.speechRecognitionLanguage=CONFIG.AZURE_SPEECH_LANG;
    const audio=SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    azureSTTRecognizer=new SpeechSDK.SpeechRecognizer(cfg,audio);
    isListening=true;
    qs('#micBtn')?.classList.add('listening');
    qs('#voiceOverlay')?.classList.add('active');
    azureSTTRecognizer.recognizeOnceAsync(
      result => {
        azureSTTRecognizer.close();azureSTTRecognizer=null;closeVoiceUI();
        if(result.reason===SpeechSDK.ResultReason.RecognizedSpeech){
          const t=result.text.trim();
          if(t){const ta=qs('#chatTextarea');if(ta){ta.value=t;autoResize(ta);}if(SVC.copilot)sendMessage();else showToast('Voice captured but agent is offline','warn');}
          else showToast('No speech recognised — try again','warn');
        } else if(result.reason===SpeechSDK.ResultReason.NoMatch){
          showToast('Could not understand audio — please speak clearly','warn');
        } else {
          const d=SpeechSDK.CancellationDetails.fromResult(result);
          showToast(d.reason===SpeechSDK.CancellationReason.Error?'STT error: '+d.errorDetails:'Cancelled','error');
        }
      },
      err=>{azureSTTRecognizer?.close();azureSTTRecognizer=null;closeVoiceUI();showToast('Mic error: '+err,'error');}
    );
  } catch(e){closeVoiceUI();showToast('Azure STT failed: '+e.message,'error');}
}

function cancelVoice(){try{if(azureSTTRecognizer){azureSTTRecognizer.close();azureSTTRecognizer=null;}}catch(e){}closeVoiceUI();}
window.cancelVoice=cancelVoice;
function closeVoiceUI(){isListening=false;qs('#micBtn')?.classList.remove('listening');qs('#voiceOverlay')?.classList.remove('active');}

/* ── AZURE TTS ───────────────────────────────────────── */
async function speakAzure(text) {
  if(!SVC.tts||!SpeechSDK) return;
  const clean=text.replace(/\*\*(.*?)\*\*/g,'$1').replace(/\*(.*?)\*/g,'$1')
    .replace(/`(.*?)`/g,'$1').replace(/#{1,6}\s/g,'').replace(/<[^>]+>/g,'')
    .replace(/•\s/g,', ').trim();
  if(!clean) return;
  try {
    await loadSpeechSDK();
    const cfg=SpeechSDK.SpeechConfig.fromSubscription(CONFIG.AZURE_SPEECH_KEY,CONFIG.AZURE_SPEECH_REGION);
    cfg.speechSynthesisVoiceName=selectedVoice;
    const audio=SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
    const synth=new SpeechSDK.SpeechSynthesizer(cfg,audio);
    const ssml=`<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${CONFIG.AZURE_SPEECH_LANG}"><voice name="${selectedVoice}"><prosody rate="0%" pitch="0%">${escSSML(clean)}</prosody></voice></speak>`;
    await new Promise((resolve,reject)=>{
      synth.speakSsmlAsync(ssml,
        result=>{synth.close();result.reason===SpeechSDK.ResultReason.SynthesizingAudioCompleted?resolve():reject(new Error('TTS failed'));},
        err=>{synth.close();reject(new Error(err));}
      );
    });
  } catch(e){console.warn('Azure TTS:',e.message);showToast('Voice output error','warn');}
}

function escSSML(t){return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');}

/* ── CONTROLS ────────────────────────────────────────── */
async function newConversation(){
  hideBanners();SVC.copilot=null;setDiag('Copilot','spin','Connecting...');
  await checkCopilot();applyServiceState();
  const wrap=qs('#messagesWrap');if(!wrap)return;
  wrap.innerHTML='';buildWelcomeState(wrap);
  if(!SVC.copilot){document.querySelectorAll('.chip').forEach(c=>c.classList.add('disabled'));addSysMsg('Agent offline — check Settings');}
}
window.newConversation=newConversation;

function buildWelcomeState(wrap){
  const ws=document.createElement('div');ws.className='welcome-state';ws.id='welcomeState';
  ws.innerHTML=`<div class="welcome-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div><div><div class="welcome-title">Hi! I'm your Skillverse AI Agent</div><div class="welcome-sub" style="margin-top:6px">Ask me anything about courses, certifications, skills, or your learning path.</div></div><div class="suggestion-chips"><div class="chip" onclick="sendChip(this)">What courses are available?</div><div class="chip" onclick="sendChip(this)">How do I earn certifications?</div><div class="chip" onclick="sendChip(this)">Show my learning progress</div><div class="chip" onclick="sendChip(this)">What skills should I develop?</div><div class="chip" onclick="sendChip(this)">Recommend a learning path</div><div class="chip" onclick="sendChip(this)">What's new this week?</div></div>`;
  wrap.append(ws);
}
window.buildWelcomeState=buildWelcomeState;

function clearMessages(){if(!confirm('Clear this conversation?'))return;const w=qs('#messagesWrap');if(w)w.innerHTML='';showToast('Cleared');}
window.clearMessages=clearMessages;

function updateHistory(){
  const list=qs('#historyList');if(!list||!sessionHistory.length)return;
  list.innerHTML='';
  const ae=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  sessionHistory.slice().reverse().forEach(e=>{
    const card=document.createElement('div');
    card.style.cssText='background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:14px 16px;margin-bottom:10px';
    card.innerHTML=`<div style="font-size:9px;color:var(--text-dim);font-family:var(--mono);margin-bottom:6px">${e.time}</div><div style="font-size:12px;color:var(--accent);margin-bottom:5px;font-weight:600">${ae(e.q)}</div><div style="font-size:11.5px;color:var(--text-muted);line-height:1.6">${ae(e.a).substring(0,220)}${e.a.length>220?'...':''}</div>`;
    list.append(card);
  });
}
window.updateHistory=updateHistory;

function setTab(el,tab){
  document.querySelectorAll('.chat-tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');
  document.querySelectorAll('.chat-pane').forEach(p=>p.style.display='none');
  const pane=qs('#pane'+tab.charAt(0).toUpperCase()+tab.slice(1));if(pane)pane.style.display='flex';
  if(tab==='history')updateHistory();
}
window.setTab=setTab;

function saveSetting(key,val){
  if(key==='tts') ttsEnabled=val;
  if(key==='voice'){
    selectedVoice=val;
    const hint=qs('#ttsHint');if(hint&&SVC.tts)hint.textContent=`Azure Neural Voice · ${selectedVoice}`;
  }
  showToast(key==='voice'?'Voice: '+val:'Setting saved','success');
}
window.saveSetting=saveSetting;

/* ── INIT ────────────────────────────────────────────── */
window.addEventListener('load',()=>{
  const ta=qs('#chatTextarea');
  if(ta){ta.addEventListener('keydown',handleKey);ta.addEventListener('input',()=>autoResize(ta));}
  const wrap=qs('#messagesWrap');if(wrap)buildWelcomeState(wrap);
  runDiagnostics();
});
