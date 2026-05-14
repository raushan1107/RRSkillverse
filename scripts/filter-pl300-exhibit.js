/**
 * filter-pl300-exhibit.js
 * Reads the existing pl300-questions.js, removes exhibit-dependent questions,
 * re-numbers sequentially, sets isPremium flags, and overwrites the file.
 */

const fs = require('fs');
const path = require('path');

// ── paths ────────────────────────────────────────────────────────────────────
const SRC  = path.join(__dirname, '..', 'public', 'js', 'pl300-questions.js');
const DEST = SRC;   // overwrite in place

// ── load the existing array ──────────────────────────────────────────────────
// The file uses  `const pl300Questions = [...]`
// We can require() it directly because it has the CommonJS guard at the bottom.
const allQuestions = require(SRC);

console.log(`Loaded ${allQuestions.length} questions from source file.`);

// ── exhibit-detection phrases (case-insensitive) ─────────────────────────────
const EXHIBIT_PHRASES = [
  'click the exhibit tab',
  'shown in the following exhibit',
  'shown in the exhibit',
  'refer to the exhibit',
  'the exhibit shows',
  'exhibit tab',
  '(click the exhibit',
  'in the exhibit.',
  'is shown in the exhibit',
  'the following exhibit',
];

function isExhibitDependent(q) {
  const text = (q.question || '').toLowerCase();
  return EXHIBIT_PHRASES.some(phrase => text.includes(phrase));
}

// ── filter ───────────────────────────────────────────────────────────────────
const skipped = allQuestions.filter(isExhibitDependent);
const valid   = allQuestions.filter(q => !isExhibitDependent(q));

console.log(`Skipped (exhibit-dependent): ${skipped.length}`);
console.log(`Valid questions remaining  : ${valid.length}`);

// ── re-number + set isPremium ────────────────────────────────────────────────
const renumbered = valid.map((q, i) => {
  const id = i + 1;
  return {
    id,
    topic:         q.topic,
    type:          q.type,
    question:      q.question,
    options:       q.options,
    correctAnswer: q.correctAnswer,
    explanation:   q.explanation,
    communityVote: q.communityVote,
    isPremium:     id > 80,
  };
});

const freeCount    = renumbered.filter(q => !q.isPremium).length;
const premiumCount = renumbered.filter(q =>  q.isPremium).length;

console.log(`Free (id 1–80)  : ${freeCount}`);
console.log(`Premium (id 81+): ${premiumCount}`);

// ── serialise one question object to JS source ────────────────────────────────
function serializeQuestion(q) {
  const optionsStr = q.options.length === 0
    ? '[]'
    : '[\n' +
      q.options.map(o => `      ${JSON.stringify(o)}`).join(',\n') +
      '\n    ]';

  return `  {
    id: ${q.id},
    topic: ${JSON.stringify(q.topic)},
    type: ${JSON.stringify(q.type)},
    question: ${JSON.stringify(q.question)},
    options: ${optionsStr},
    correctAnswer: ${JSON.stringify(q.correctAnswer)},
    explanation: ${JSON.stringify(q.explanation)},
    communityVote: ${q.communityVote === null ? 'null' : JSON.stringify(q.communityVote)},
    isPremium: ${q.isPremium}
  }`;
}

// ── build file content ────────────────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

const header = `// PL-300 Question Bank — RR Skillverse
// Total parsed from PDF: ${allQuestions.length}
// Skipped (image/exhibit dependent): ${skipped.length}
// Valid questions included: ${valid.length}
// Free (id 1–80): first 80 questions
// Premium (id 81+): remaining ${premiumCount} questions
// Last updated: ${today}`;

const body =
  header + '\n\n' +
  'const pl300Questions = [\n' +
  renumbered.map(serializeQuestion).join(',\n') + '\n' +
  '];\n\n' +
  'if (typeof module !== \'undefined\') module.exports = pl300Questions;\n';

// ── write ─────────────────────────────────────────────────────────────────────
fs.writeFileSync(DEST, body, 'utf8');
console.log(`\nFile written to: ${DEST}`);

// ── spot-check ────────────────────────────────────────────────────────────────
function preview(q) {
  return {
    id:           q.id,
    isPremium:    q.isPremium,
    topic:        q.topic,
    type:         q.type,
    questionSnip: q.question.slice(0, 120).replace(/\n/g, ' '),
    options:      q.options.slice(0, 2),
    correctAnswer:q.correctAnswer,
  };
}

console.log('\n── Q1  ──────────────────────────────────────────────────────');
console.log(JSON.stringify(preview(renumbered[0]), null, 2));
console.log('\n── Q2  ──────────────────────────────────────────────────────');
console.log(JSON.stringify(preview(renumbered[1]), null, 2));
console.log(`\n── Q81 ──────────────────────────────────────────────────────`);
console.log(JSON.stringify(preview(renumbered[80]), null, 2));
