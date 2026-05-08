/* ═══════════════════════════════════════════════════════
   RR SKILLVERSE — NAV.JS
   Injects topnav + FAB into every page
═══════════════════════════════════════════════════════ */

/* ── Blog category data for Learn mega-menu ─────────── */
const NAV_BLOG_CATEGORIES = [
  {
    group: 'Power Platform',
    icon: '⚡',
    color: '#0078d4',
    slug: 'power-platform',
    items: [
      { label: 'Copilot Studio',  slug: 'copilot-studio' },
      { label: 'Power BI',        slug: 'power-bi' },
      { label: 'Power Apps',      slug: 'power-apps' },
      { label: 'Power Pages',     slug: 'power-pages' },
      { label: 'Power Automate',  slug: 'power-automate' },
      { label: 'Dataverse',       slug: 'dataverse' }
    ]
  },
  {
    group: 'Microsoft Azure',
    icon: '☁️',
    color: '#0ea5e9',
    slug: 'azure',
    items: [
      { label: 'Azure Fundamentals', slug: 'azure-fundamentals' },
      { label: 'Azure AI Services',  slug: 'azure-ai' },
      { label: 'Azure Integration',  slug: 'azure-integration' },
      { label: 'Azure Functions',    slug: 'azure-functions' }
    ]
  },
  {
    group: 'Programming',
    icon: '🔷',
    color: '#7c4b9e',
    slug: 'programming',
    items: [
      { label: 'C# Tutorial',     slug: 'csharp' },
      { label: 'Python Tutorial', slug: 'python' },
      { label: 'C++ Tutorial',    slug: 'cpp' },
      { label: 'C Tutorial',      slug: 'c-lang' }
    ]
  },
  {
    group: '.NET Ecosystem',
    icon: '🚀',
    color: '#6366f1',
    slug: 'dotnet',
    items: [
      { label: '.NET Development',    slug: 'dotnet-dev' },
      { label: 'Blazor',             slug: 'blazor' },
      { label: 'Embedding in .NET',  slug: 'embedding-dotnet' },
      { label: 'ASP.NET Core',       slug: 'aspnet-core' }
    ]
  },
  {
    group: 'Graphics & Systems',
    icon: '🎮',
    color: '#c75c1a',
    slug: 'graphics',
    items: [
      { label: 'OpenGL',      slug: 'opengl' },
      { label: 'Vulkan',      slug: 'vulkan' },
      { label: 'Qt and QML',  slug: 'qt-qml' }
    ]
  },
  {
    group: 'AI & Cloud',
    icon: '🤖',
    color: '#2d7a4f',
    slug: 'ai-cloud',
    items: [
      { label: 'AI / ML',            slug: 'ai-ml' },
      { label: 'Azure AI',           slug: 'azure-ai-studio' },
      { label: 'Claude & Anthropic', slug: 'claude' },
      { label: 'GCP',                slug: 'gcp' }
    ]
  }
];

/* ── Mega-menu builder ───────────────────────────────── */
function buildLearnMegaMenu() {
  const menu = document.getElementById('learnMegaMenu');
  if (!menu) return;

  menu.innerHTML = `
    <div class="mega-menu-inner">
      <div class="mega-menu-header">
        <span class="mega-menu-title">Learn by Technology</span>
        <span class="mega-menu-sub">
          Real notes, demo guides &amp; learning curves
          by MCT Raushan Ranjan
        </span>
      </div>
      <div class="mega-menu-grid">
        ${NAV_BLOG_CATEGORIES.map(cat => `
          <div class="mega-col">
            <div class="mega-col-header">
              <span class="mega-col-icon">${cat.icon}</span>
              <a href="/blog.html?cat=${cat.slug}"
                 class="mega-col-title"
                 style="color:${cat.color}">
                ${cat.group}
              </a>
            </div>
            <ul class="mega-col-list">
              ${cat.items.map(item => `
                <li>
                  <a href="/blog.html?cat=${cat.slug}&topic=${item.slug}"
                     class="mega-item-link">
                    ${item.label}
                  </a>
                </li>`).join('')}
            </ul>
          </div>`).join('')}
      </div>
      <div class="mega-menu-footer">
        <a href="/blog.html" class="mega-footer-link">
          View all articles →
        </a>
        <span class="mega-footer-note">
          Imported from Google Blogger · Verified by MCT
        </span>
      </div>
    </div>`;
}

/* ── Dropdown toggle ─────────────────────────────────── */
function toggleLearnMenu(e) {
  e.stopPropagation();
  const wrap    = document.getElementById('learnDropdown');
  const menu    = document.getElementById('learnMegaMenu');
  const trigger = wrap.querySelector('.nav-dropdown-trigger');
  const isOpen  = wrap.classList.contains('open');

  document.querySelectorAll('.nav-dropdown-wrap.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
    el.querySelector('.nav-mega-menu')?.setAttribute('aria-hidden', 'true');
  });

  if (!isOpen) {
    wrap.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
  }
}

/* Close on outside click */
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown-wrap.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.nav-dropdown-trigger')?.setAttribute('aria-expanded', 'false');
    el.querySelector('.nav-mega-menu')?.setAttribute('aria-hidden', 'true');
  });
});

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
    <li class="nav-dropdown-wrap" id="learnDropdown">
      <button class="nav-dropdown-trigger"
              aria-haspopup="true"
              aria-expanded="false"
              onclick="toggleLearnMenu(event)">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h12v9a2 2 0 01-2 2H4a2 2 0 01-2-2V3z"/><path d="M2 3l6 5 6-5"/></svg>
        Learn
        <svg class="nav-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <div class="nav-mega-menu" id="learnMegaMenu"
           role="menu" aria-hidden="true">
      </div>
    </li>
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
  <a href="courses.html">📚 Skillverse Library</a>
  <a href="blog.html">📖 Learn</a>
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

/* Populate mega-menu content after nav is in DOM */
buildLearnMegaMenu();

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

  const learnWrap = document.getElementById('learnDropdown');
  if (learnWrap) {
    learnWrap.addEventListener('click', () => {
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.textContent = '☰';
    });
  }
})();
