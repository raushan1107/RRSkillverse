/* RR Skillverse v2 — Top Navigation Injector */
(function () {
  const NAV_HTML = `
<nav class="v2-nav" id="v2-nav">
  <div class="v2-nav-inner">
    <a class="v2-nav-brand" href="/v2/index.html">
      <span class="v2-nav-logo">RR</span>
      <span class="v2-nav-brand-text">Skillverse</span>
    </a>
    <ul class="v2-nav-links" id="v2-nav-links">
      <li><a href="/v2/index.html" data-page="index">Home</a></li>
      <li><a href="/v2/courses.html" data-page="courses">Courses</a></li>
      <li><a href="/v2/learn.html" data-page="learn">Learn</a></li>
      <li><a href="/v2/profile.html" data-page="profile">Instructor</a></li>
    </ul>
    <div class="v2-nav-actions">
      <a href="/v2/courses.html" class="v2-btn-primary" style="padding:6px 16px;font-size:13px;">Browse Courses</a>
      <button class="v2-nav-hamburger" id="v2-hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="v2-nav-drawer" id="v2-drawer">
  <div class="v2-nav-drawer-inner">
    <a href="/v2/index.html">Home</a>
    <a href="/v2/courses.html">Courses</a>
    <a href="/v2/learn.html">Learn</a>
    <a href="/v2/profile.html">Instructor</a>
    <a href="/v2/courses.html" class="v2-btn-primary" style="margin-top:8px;display:inline-block;padding:8px 20px;">Browse Courses</a>
  </div>
</div>
<div class="v2-nav-overlay" id="v2-overlay"></div>`;

  // Inject at top of body
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Active link detection
  const path = window.location.pathname;
  let active = 'index';
  if (path.includes('courses')) active = 'courses';
  else if (path.includes('learn'))   active = 'learn';
  else if (path.includes('profile')) active = 'profile';

  document.querySelectorAll('[data-page]').forEach(function (a) {
    if (a.dataset.page === active) a.classList.add('active');
  });

  // Mobile hamburger toggle
  const hamburger = document.getElementById('v2-hamburger');
  const drawer    = document.getElementById('v2-drawer');
  const overlay   = document.getElementById('v2-overlay');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    drawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });
  overlay.addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeDrawer);
  });
})();
