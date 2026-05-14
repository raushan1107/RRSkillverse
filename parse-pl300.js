'use strict';

const fs = require('fs');
const path = require('path');

// ── Input / Output ─────────────────────────────────────────────────────────
const INPUT  = path.join(__dirname, 'Pdfs', 'pl300-extracted.txt');
const OUTPUT = path.join(__dirname, 'public', 'js', 'pl300-questions.js');

// ── Fix null-byte ligature artifacts ──────────────────────────────────────
// The PDF extracted fi/fl ligatures as null bytes (0x00).
const NULL_BYTE_FIXES = [
  // fi replacements
  [/arti\x00cial/g,        'artificial'],
  [/Certi\x00cation/g,     'Certification'],
  [/certi\x00cation/g,     'certification'],
  [/certi\x00cations/g,    'certifications'],
  [/certi\x00ed/g,         'certified'],
  [/Con\x00dential/g,      'Confidential'],
  [/con\x00guration/g,     'configuration'],
  [/con\x00gure/g,         'configure'],
  [/con\x00gured/g,        'configured'],
  [/con\x00guring/g,       'configuring'],
  [/con\x00icting/g,       'conflicting'],
  [/de\x00ne\b/g,          'define'],
  [/de\x00ned/g,           'defined'],
  [/de\x00nes/g,           'defines'],
  [/de\x00ning/g,          'defining'],
  [/de\x00nition/g,        'definition'],
  [/de\x00nitions/g,       'definitions'],
  [/e\x00ciency/g,         'efficiency'],
  [/e\x00cient/g,          'efficient'],
  [/ex\x00ltration/g,      'exfiltration'],
  [/ful\x00ll\b/g,         'fulfill'],
  [/ful\x00lled/g,         'fulfilled'],
  [/ful\x00lling/g,        'fulfilling'],
  [/Identi\x00able/g,      'Identifiable'],
  [/identi\x00able/g,      'identifiable'],
  [/identi\x00er\b/g,      'identifier'],
  [/identi\x00es/g,        'identifies'],
  [/manager-speci\x00c/g,  'manager-specific'],
  [/modi\x00cation/g,      'modification'],
  [/modi\x00ed/g,          'modified'],
  [/modi\x00er/g,          'modifier'],
  [/noti\x00cation/g,      'notification'],
  [/noti\x00cations/g,     'notifications'],
  [/noti\x00ed/g,          'notified'],
  [/o\x00cial/g,           'official'],
  [/O\x00ce\b/g,           'Office'],
  [/o\x00ce\b/g,           'office'],
  [/pre\x00x/g,            'prefix'],
  [/pro\x00le/g,           'profile'],
  [/pro\x00ling/g,         'profiling'],
  [/pro\x00t\b/g,          'profit'],
  [/pro\x00ts\b/g,         'profits'],
  [/re\x00ect\b/g,         'reflect'],
  [/re\x00ected/g,         'reflected'],
  [/re\x00ects/g,          'reflects'],
  [/speci\x00c\b/g,        'specific'],
  [/Speci\x00cally/g,      'Specifically'],
  [/speci\x00cally/g,      'specifically'],
  [/speci\x00ed/g,         'specified'],
  [/veri\x00ed/g,          'verified'],
  [/Veri\x00ed/g,          'Verified'],
  // fl replacements
  [/data\x00ow\b/g,        'dataflow'],
  [/data\x00ows/g,         'dataflows'],
  [/Data\x00ow\b/g,        'Dataflow'],
  [/Data\x00ows/g,         'Dataflows'],
  [/cross-\x00lter/g,      'cross-filter'],
  [/cross-\x00ltering/g,   'cross-filtering'],
  [/geo\x00ltering/g,      'geofiltering'],
  [/in\x00uencer\b/g,      'influencer'],
  [/in\x00uencers/g,       'influencers'],
  [/in\x00uence\b/g,       'influence'],
  [/in\x00uences/g,        'influences'],
  [/Paci\x00c/g,           'Pacific'],
  [/paci\x00c/g,           'pacific'],
  [/tra\x00c\b/g,          'traffic'],
  [/Tra\x00c\b/g,          'Traffic'],
  // Remaining specific null patterns
  [/\x00lter/g,            'filter'],
  [/\x00lters/g,           'filters'],
  [/\x00ltered/g,          'filtered'],
  [/\x00ltering/g,         'filtering'],
  [/\x00le\b/g,            'file'],
  [/\x00les\b/g,           'files'],
  [/\x00nal/g,             'final'],
  [/\x00rst/g,             'first'],
  [/\x00eld/g,             'field'],
  [/\x00elds/g,            'fields'],
  // fallback: any remaining null before lowercase letter => fi
  [/\x00([a-z])/g,         'fi$1'],
  [/\x00([A-Z])/g,         'Fi$1'],
];

// ── Hebrew/encoding glitch fixes ──────────────────────────────────────────
const ENCODING_FIXES = [
  [/ﬁ/g, 'fi'],
  [/ﬂ/g, 'fl'],
  [/ג€"/g,  '—'],
  [/ג€™/g,  "'"],
  [/ג€˜/g,  "'"],
  [/ג€¦/g,  '...'],
  [/ג€¢/g,  '•'],
  [/ג€/g,   '"'],
  [/ִ/g,   ''],
  [/ֲ/g,   ''],
  [/̈/g,   ''],
];

function cleanText(txt) {
  for (const [re, rep] of NULL_BYTE_FIXES) txt = txt.replace(re, rep);
  for (const [re, rep] of ENCODING_FIXES)  txt = txt.replace(re, rep);
  return txt.trim();
}

// ── Line-filter helpers ────────────────────────────────────────────────────
function isJunkLine(line) {
  const t = line.trim();
  if (!t) return true;
  if (t.includes('examtopics.com')) return true;
  if (t.startsWith('https://') || t.startsWith('http://')) return true;
  if (/^\d{1,2}\/\d{1,2}\/\d{2,4},\s+\d+:\d+/.test(t)) return true;
  if (/^PL-300 Exam\s+[–-]\s+Free Actual Q&As/.test(t)) return true;
  if (/^-\s*$/.test(t)) return true;
  if (t === ' ') return true;
  if (/^Expert Veri.ed, Online, Free/.test(t)) return true;
  if (t === 'Custom View Settings') return true;
  return false;
}

// ── Parse community vote ───────────────────────────────────────────────────
function parseCommunityVote(rawLines) {
  const joined = rawLines.join(' ').trim();
  const m = joined.match(/([A-Z]{1,3}\s*\(\d+%\))/);
  if (m) return m[1].replace(/\s+/g, ' ');
  return joined || null;
}

// ── Read file (preserve null bytes) ───────────────────────────────────────
const rawBuffer = fs.readFileSync(INPUT);
const raw = rawBuffer.toString('utf8');
const rawLines = raw.split('\n').map(l => l.replace(/\r$/, ''));
const lines = rawLines.filter(l => !isJunkLine(l));

// ── State machine ─────────────────────────────────────────────────────────
const questions = [];
let currentTopic = 'Topic 1';
let globalId = 0;

let inQuestion = false;
let qType = 'mcq';
let qTopic = 'Topic 1';
let qLines = [];
let qOptions = [];
let qCorrect = '';
let qCorrectLines = [];
let qExplanation = [];
let qCommunityLines = [];

// Phases within a question
// 'question' → 'correct' → 'explanation' → 'community'
let phase = 'question';

function flushQuestion() {
  if (!inQuestion) return;
  inQuestion = false;
  globalId++;

  let questionText = qLines.join('\n').trim();
  questionText = cleanText(questionText);

  if (/exhibit/i.test(questionText) || /click the exhibit/i.test(questionText)) {
    questionText += '\n\n[This question references an exhibit image. Please refer to the original exam for the visual.]';
  }

  const options = qOptions.map(o => cleanText(o));

  let correctAnswer;
  if (qType === 'mcq') {
    correctAnswer = cleanText(qCorrect.trim());
  } else {
    correctAnswer = cleanText(qCorrectLines.join('\n').trim());
  }

  let explanation = cleanText(qExplanation.join('\n').trim());

  let communityVote = null;
  if (qCommunityLines.length > 0) {
    const raw = parseCommunityVote(qCommunityLines);
    communityVote = raw ? cleanText(raw) : null;
  }

  questions.push({
    id: globalId,
    topic: qTopic,
    type: qType,
    question: questionText,
    options,
    correctAnswer,
    explanation,
    communityVote,
    isPremium: globalId > 80
  });

  // reset
  qType = 'mcq';
  qTopic = currentTopic;
  qLines = [];
  qOptions = [];
  qCorrect = '';
  qCorrectLines = [];
  qExplanation = [];
  qCommunityLines = [];
  phase = 'question';
}

// ── Patterns ──────────────────────────────────────────────────────────────
const topicHeaderRe    = /^Topic\s+(\d+)\s+-\s+(.+)$/i;
const questionHeaderRe = /^Topic\s+\d+\s*Question\s+#\d+$/i;
const hotspotRe        = /^HOTSPOT\s*-?\s*$/i;
const dragdropRe       = /^DRAG\s+DROP\s*-?\s*$/i;
const optionRe         = /^([A-E])\.\s+(.*)$/;
const correctAnswerRe  = /^Correct\s+Answer:\s*(.*)$/i;
const communityRe      = /^Community\s+vote\s+distribution\s*$/i;
// Standalone "Question" line that appears as case-study section separator
const caseStudyQRe     = /^Question\s*$/;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // ── Topic header ──────────────────────────────────────────────────────
  if (topicHeaderRe.test(trimmed)) {
    const m = trimmed.match(/^Topic\s+(\d+)/i);
    currentTopic = `Topic ${m[1]}`;
    continue;
  }

  // ── New question header ───────────────────────────────────────────────
  if (questionHeaderRe.test(trimmed)) {
    flushQuestion();
    inQuestion = true;
    qTopic = currentTopic;
    qType = 'mcq';
    phase = 'question';
    // Peek ahead for HOTSPOT / DRAG DROP on the very next non-blank line
    // (for regular questions it's right after; for case study ones we handle below)
    const next1 = lines[i + 1] ? lines[i + 1].trim() : '';
    if (hotspotRe.test(next1)) {
      qType = 'hotspot';
      i++;
    } else if (dragdropRe.test(next1)) {
      qType = 'dragdrop';
      i++;
    }
    continue;
  }

  if (!inQuestion) continue;

  // ── Standalone "Question" line in case study blocks ───────────────────
  // This is the section separator before the actual question text.
  // After it, HOTSPOT/DRAGDROP type detection should re-run.
  if (caseStudyQRe.test(trimmed) && phase === 'question') {
    // Don't add this to qLines; instead check what comes next
    const next1 = lines[i + 1] ? lines[i + 1].trim() : '';
    const next2 = lines[i + 2] ? lines[i + 2].trim() : '';
    if (hotspotRe.test(next1)) {
      qType = 'hotspot';
      i++; // consume HOTSPOT line
    } else if (dragdropRe.test(next1)) {
      qType = 'dragdrop';
      i++; // consume DRAG DROP line
    }
    // Clear question lines up to this point — the preamble before "Question"
    // is case study background. We'll keep it as context but mark it.
    // Actually keep the preamble as is (it gives context), just don't add "Question" itself.
    continue;
  }

  // ── Correct Answer ────────────────────────────────────────────────────
  if (correctAnswerRe.test(trimmed)) {
    phase = 'correct';
    const m = trimmed.match(correctAnswerRe);
    const inline = m[1].trim();
    qCorrect = inline;

    if (qType === 'mcq') {
      if (inline) {
        // Standard MCQ: answer is the letter(s) inline
        qCorrectLines = [];
        phase = 'explanation'; // rest is explanation
      } else {
        // Empty inline — answer is on next lines (e.g., HOTSPOT detected as MCQ, or multi-line)
        // Stay in 'correct' phase; we'll collect lines
        qCorrectLines = [];
      }
    } else {
      // hotspot/dragdrop: multi-line answer
      qCorrectLines = inline ? [inline] : [];
      // stay in 'correct' phase
    }
    continue;
  }

  // ── Community vote ────────────────────────────────────────────────────
  if (communityRe.test(trimmed)) {
    phase = 'community';
    continue;
  }

  // ── Dispatch by phase ─────────────────────────────────────────────────
  switch (phase) {
    case 'question': {
      const om = trimmed.match(optionRe);
      if (om) {
        qOptions.push(`${om[1]}. ${om[2]}`);
      } else {
        qLines.push(trimmed);
      }
      break;
    }
    case 'correct': {
      // If we encounter a "Reference:" line, switch to explanation
      if (/^Reference:/i.test(trimmed)) {
        phase = 'explanation';
        qExplanation.push(trimmed);
      } else {
        qCorrectLines.push(trimmed);
      }
      break;
    }
    case 'explanation': {
      qExplanation.push(trimmed);
      break;
    }
    case 'community': {
      qCommunityLines.push(trimmed);
      break;
    }
  }
}

flushQuestion();

console.log(`Total questions parsed: ${questions.length}`);

if (questions.length !== 169) {
  console.warn(`WARNING: Expected 169 questions, got ${questions.length}`);
}

// Print diagnostics for empty-answer questions
const emptyCA = questions.filter(q => !q.correctAnswer);
if (emptyCA.length > 0) {
  console.log(`\nQuestions with empty correctAnswer (${emptyCA.length}):`);
  emptyCA.forEach(q => {
    console.log(`  Q${q.id} topic=${q.topic} type=${q.type}`);
    console.log(`    correctAnswer=[${q.correctAnswer.substring(0, 80)}]`);
    console.log(`    explanation start=[${q.explanation.substring(0, 80)}]`);
  });
}

const emptyOpts = questions.filter(q => q.type === 'mcq' && q.options.length === 0);
if (emptyOpts.length > 0) {
  console.log(`\nMCQ questions with no options (${emptyOpts.length}):`);
  emptyOpts.forEach(q => {
    console.log(`  Q${q.id} topic=${q.topic} correctAnswer=[${q.correctAnswer.substring(0,40)}]`);
  });
}

// ── Print first 3 and last 3 ──────────────────────────────────────────────
console.log('\n=== First 3 questions ===');
questions.slice(0, 3).forEach(q => {
  console.log(JSON.stringify({
    id: q.id,
    topic: q.topic,
    type: q.type,
    question: q.question.substring(0, 150) + (q.question.length > 150 ? '...' : ''),
    options: q.options,
    correctAnswer: q.correctAnswer.substring(0, 100) + (q.correctAnswer.length > 100 ? '...' : ''),
    communityVote: q.communityVote,
    isPremium: q.isPremium
  }, null, 2));
  console.log('---');
});

console.log('\n=== Last 3 questions ===');
questions.slice(-3).forEach(q => {
  console.log(JSON.stringify({
    id: q.id,
    topic: q.topic,
    type: q.type,
    question: q.question.substring(0, 150) + (q.question.length > 150 ? '...' : ''),
    options: q.options,
    correctAnswer: q.correctAnswer.substring(0, 100) + (q.correctAnswer.length > 100 ? '...' : ''),
    communityVote: q.communityVote,
    isPremium: q.isPremium
  }, null, 2));
  console.log('---');
});

console.log('\n=== Q80/Q81 boundary ===');
[questions[79], questions[80]].forEach(q => {
  if (q) console.log(`Q${q.id}: isPremium=${q.isPremium}, topic=${q.topic}, type=${q.type}, options=${q.options.length}, caLen=${q.correctAnswer.length}`);
});

// ── Build output JS ───────────────────────────────────────────────────────
const entries = questions.map(q => {
  const optionsArr = q.options.length
    ? `[\n      ${q.options.map(o => JSON.stringify(o)).join(',\n      ')}\n    ]`
    : '[]';

  return `  {
    id: ${q.id},
    topic: ${JSON.stringify(q.topic)},
    type: ${JSON.stringify(q.type)},
    question: ${JSON.stringify(q.question)},
    options: ${optionsArr},
    correctAnswer: ${JSON.stringify(q.correctAnswer)},
    explanation: ${JSON.stringify(q.explanation)},
    communityVote: ${q.communityVote === null ? 'null' : JSON.stringify(q.communityVote)},
    isPremium: ${q.isPremium}
  }`;
}).join(',\n');

const output = `// PL-300: Microsoft Power BI Data Analyst — Exam Practice Questions
// ${questions.length} questions extracted from practice exam PDF
// Questions 1-80: Free | Questions 81-${questions.length}: Premium

const pl300Questions = [
${entries}
];

if (typeof module !== 'undefined') module.exports = pl300Questions;
`;

fs.writeFileSync(OUTPUT, output, 'utf8');
console.log(`\nOutput written to: ${OUTPUT}`);
console.log(`File size: ${(fs.statSync(OUTPUT).size / 1024).toFixed(1)} KB`);
