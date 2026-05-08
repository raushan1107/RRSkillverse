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
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="2" width="14" height="11" rx="2"/><path d="M5 15h6M8 13v2"/></svg>Skillverse Library</a></li>
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
  <button class="nav-hamburger" id="navHamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="nav-drawer" id="navDrawer">
  <a href="index.html">🏠 Home</a>
  <a href="courses.html">📚 Skillverse Library</a>
  <a href="labs.html">🧪 Hands-on Labs</a>
  <a href="profile.html">👤 About Us</a>
</div>`;
  // <a href="ai-agent.html">🤖 AI Agent</a>
  // <a href="certifications.html">🏆 Certifications</a>
  // <a href="skillmap.html">🗺️ Skill Map</a>
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
})();

// Hamburger toggle
document.addEventListener('DOMContentLoaded', () => {
  const hb = document.getElementById('navHamburger');
  const dr = document.getElementById('navDrawer');
  if (hb && dr) {
    hb.addEventListener('click', () => dr.classList.toggle('open'));
    dr.querySelectorAll('a').forEach(a => a.addEventListener('click', () => dr.classList.remove('open')));
  }
});
