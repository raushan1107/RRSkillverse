/* ═══════════════════════════════════════════════════════
   RR SKILLVERSE — MAIN.JS
   Shared across all pages: nav, FAB, mobile menu, toast
═══════════════════════════════════════════════════════ */

// ── Active nav link ──────────────────────────────────
(function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ── Mobile hamburger ─────────────────────────────────
const hamburger = document.getElementById('navHamburger');
const drawer    = document.getElementById('navDrawer');
if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    drawer.classList.toggle('open');
  });
  // close on link click
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => drawer.classList.remove('open'));
  });
}

// ── Toast utility ────────────────────────────────────
function showToast(msg, type = '', dur = 2800) {
  let t = document.getElementById('globalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'globalToast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), dur);
}
window.showToast = showToast;

// ── Floating AI Button ────────────────────────────────
const fab = document.getElementById('aiFab');
if (fab) {
  fab.addEventListener('click', () => {
    window.location.href = 'ai-agent.html';
  });
}

// ── Animate elements on scroll ────────────────────────
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach((el, i) => {
    el.style.transitionDelay = (i * 0.06) + 's';
    io.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', initScrollReveal);

// ── Scroll-reveal CSS injection ───────────────────────
(function injectRevealStyles() {
  const s = document.createElement('style');
  s.textContent = `
    [data-reveal] { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
    [data-reveal="left"] { transform: translateX(-24px); }
    [data-reveal="scale"] { transform: scale(0.95); }
    [data-reveal].revealed { opacity: 1; transform: none; }
  `;
  document.head.appendChild(s);
})();

// ── Counter animation utility ─────────────────────────
function animateCounter(el, target, duration = 1800) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
window.animateCounter = animateCounter;

// ── Init counters when visible ────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target, parseInt(e.target.dataset.counter));
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
});
