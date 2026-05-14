/* ═══════════════════════════════════════════════════════
   RR SKILLVERSE — NAV.JS
   Injects topnav + FAB into every page
═══════════════════════════════════════════════════════ */

(function injectNav() {
  const navHTML = `
<nav class="topnav" id="topnav">
  <a href="index.html" class="nav-brand">
    <div class="nav-logo">RR</div>
    <div class="nav-brand-text">
      <div class="nav-brand-name">RR Skillverse</div>
      <div class="nav-brand-sub">Learning Platform</div>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index.html" data-page="index.html">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 6l7-5 7 5v8a1 1 0 01-1 1H2a1 1 0 01-1-1V6z"/><path d="M6 14V9h4v5"/></svg>Home</a></li>
    <li><a href="courses.html" data-page="courses.html">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="2" width="14" height="11" rx="2"/><path d="M5 15h6M8 13v2"/></svg>🎓 AI Academy</a></li>
    <li class="nav-exam-item" id="navExamItem">
      <button class="nav-dropdown-trigger" id="navExamBtn" aria-expanded="false" aria-haspopup="true">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><rect x="2" y="1" width="12" height="14" rx="2"/><path d="M5 5h6M5 8h6M5 11h4"/></svg>
        Exam Practice
        <svg class="nav-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 3.5l3 3 3-3"/></svg>
      </button>
      <div class="nav-exam-dropdown" id="navExamDropdown" role="menu">
        <div class="ned-header">Certification Exam Practice</div>
        <a href="pl-300-practice.html" class="ned-item" data-page="pl-300-practice.html" role="menuitem">
          <span class="ned-badge ned-badge-blue">PL-300</span>
          <div class="ned-info">
            <div class="ned-title">Power BI Data Analyst</div>
            <div class="ned-meta">169 questions · Free + ₹51 Premium</div>
          </div>
          <span class="ned-new-tag">NEW</span>
        </a>
        <div class="ned-item ned-locked" role="menuitem" aria-disabled="true">
          <span class="ned-badge ned-badge-gray">AZ-900</span>
          <div class="ned-info">
            <div class="ned-title">Azure Fundamentals</div>
            <div class="ned-meta ned-soon">Coming Soon</div>
          </div>
        </div>
        <div class="ned-item ned-locked" role="menuitem" aria-disabled="true">
          <span class="ned-badge ned-badge-gray">DP-900</span>
          <div class="ned-info">
            <div class="ned-title">Azure Data Fundamentals</div>
            <div class="ned-meta ned-soon">Coming Soon</div>
          </div>
        </div>
        <div class="ned-item ned-locked" role="menuitem" aria-disabled="true">
          <span class="ned-badge ned-badge-gray">PL-900</span>
          <div class="ned-info">
            <div class="ned-title">Power Platform Fundamentals</div>
            <div class="ned-meta ned-soon">Coming Soon</div>
          </div>
        </div>
      </div>
    </li>
    <li><a href="/blog.html" class="nav-link">📝 Blogs</a></li>
    <li><a href="labs.html" data-page="labs.html">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2v5L2 13h12L10 7V2"/><path d="M5 2h6"/></svg>Hands-on Labs</a></li>
    <li><a href="profile.html" data-page="profile.html">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3 2.5-5 6-5s6 2 6 5"/></svg>About Us</a></li>
    <li><a href="ai-agent.html" data-page="ai-agent.html">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/></svg>AI Agent</a></li>
  </ul>
  <div class="nav-right">
    <a href="profile.html" class="nav-avatar" title="Raushan Ranjan" id="navAvatarLink">
    <img id="navAvatarImg" src="images/raushanranjan.jpg" alt="RR"
         style="width:100%;height:100%;border-radius:50%;object-fit:cover;display:block"
         onerror="this.style.display='none';document.getElementById('navAvatarTxt').style.display='flex'"/>
    <span id="navAvatarTxt" style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-size:11px;font-weight:700">RR</span>
  </a>
  </div>
  <button class="nav-hamburger" id="navHamburger" aria-label="Menu" aria-expanded="false">
    ☰
  </button>
</nav>

<div class="nav-drawer" id="navDrawer">
  <a href="index.html">🏠 Home</a>
  <a href="courses.html">🎓 AI Academy</a>
  <a href="pl-300-practice.html">📋 Exam Practice (PL-300)</a>
  <a href="blog.html">📝 Blogs</a>
  <a href="labs.html">🧪 Hands-on Labs</a>
  <a href="profile.html">👤 About Us</a>
  <a href="ai-agent.html">💬 AI Agent</a>
</div>`;
  // Only inject if placeholder exists
  const placeholder = document.getElementById('navPlaceholder');
  if (placeholder) { placeholder.outerHTML = navHTML; }
  else {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = navHTML;
    document.body.insertBefore(wrapper.firstElementChild, document.body.firstChild);
    // Insert drawer after nav
    const nav = document.body.querySelector('.topnav');
    nav.insertAdjacentHTML('afterend', wrapper.innerHTML);
  }
})();

// Inject FAB (not on ai-agent page)
(function injectFAB() {
  const page = location.pathname.split('/').pop();
  if (page === 'ai-agent.html') return;
  const fab = document.createElement('button');
  fab.className = 'ai-fab'; fab.id = 'aiFab'; fab.title = 'Ask AI';
  fab.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>
    <span class="ai-fab-tooltip">Ask AI Agent</span>`;
  document.body.appendChild(fab);
  fab.addEventListener('click', () => window.location.href = 'ai-agent.html');
})();

// Set active nav link
(function setActive() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-links a[data-page], .nav-drawer a');
  links.forEach(a => {
    const pg = a.getAttribute('data-page') || a.getAttribute('href');
    if (pg === page) a.classList.add('active');
  });
  // Highlight Exam Practice button when on exam page
  if (page === 'pl-300-practice.html') {
    const examBtn = document.getElementById('navExamBtn');
    if (examBtn) examBtn.classList.add('active');
  }
})();

// ── Exam Practice dropdown ─────────────────────────────
(function initExamDropdown() {
  let dropdownOpen = false;

  function openDropdown() {
    const btn = document.getElementById('navExamBtn');
    const menu = document.getElementById('navExamDropdown');
    if (!btn || !menu) return;
    dropdownOpen = true;
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    const chevron = btn.querySelector('.nav-chevron');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  }

  function closeDropdown() {
    const btn = document.getElementById('navExamBtn');
    const menu = document.getElementById('navExamDropdown');
    if (!btn || !menu) return;
    dropdownOpen = false;
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    const chevron = btn.querySelector('.nav-chevron');
    if (chevron) chevron.style.transform = '';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('navExamBtn');
    const item = document.getElementById('navExamItem');
    const menu = document.getElementById('navExamDropdown');
    if (!btn || !item || !menu) return;

    // Click toggle
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownOpen ? closeDropdown() : openDropdown();
    });

    // Hover on desktop
    item.addEventListener('mouseenter', openDropdown);
    item.addEventListener('mouseleave', closeDropdown);

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!item.contains(e.target)) closeDropdown();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDropdown();
    });
  });
})();

// ── Mobile hamburger ────────────────────────────
(function initMobileNav() {
  const hamburger = document.getElementById('navHamburger')
    || document.querySelector('.nav-hamburger')
    || document.querySelector('.hamburger-btn')
    || document.querySelector('[data-nav-toggle]');

  const drawer = document.getElementById('navDrawer')
    || document.querySelector('.nav-drawer')
    || document.querySelector('.mobile-drawer');

  if (!hamburger) {
    console.warn('[nav] hamburger button not found');
    return;
  }
  if (!drawer) {
    console.warn('[nav] nav drawer not found');
    return;
  }

  function toggleDrawer(e) {
    e.stopPropagation();
    const isOpen = drawer.classList.contains('open');
    drawer.classList.toggle('open', !isOpen);
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    hamburger.textContent = isOpen ? '☰' : '✕';
  }

  hamburger.addEventListener('click', toggleDrawer);
  hamburger.addEventListener('touchend', function(e) {
    e.preventDefault();
    toggleDrawer(e);
  }, { passive: false });

  drawer.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    });
  });

  document.addEventListener('click', function(e) {
    if (
      drawer.classList.contains('open') &&
      !drawer.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    }
  });
})();
