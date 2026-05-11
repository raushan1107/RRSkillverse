(function () {
  const path = window.location.pathname;
  function isActive(check) {
    return check ? 'v2-nav-link active' : 'v2-nav-link';
  }

  const nav = `
<nav class="v2-topnav">
  <div class="v2-topnav-inner">
    <a href="/v2/index.html" class="v2-brand">
      <div class="v2-brand-logo">RR</div>
      <div class="v2-brand-text">
        <span class="v2-brand-name">RR Skillverse</span>
        <span class="v2-brand-sub">Learning Platform</span>
      </div>
    </a>
    <div class="v2-nav-links">
      <a href="/v2/index.html"
         class="${isActive(path.endsWith('index.html') ||
                           path.endsWith('/v2/') ||
                           path.endsWith('/v2'))}">
        Home
      </a>
      <a href="/v2/courses.html"
         class="${isActive(path.includes('courses'))}">
        Skillverse Library
      </a>
      <a href="/learn.html"
         class="${isActive(path.includes('learn'))}">
        Learn
      </a>
      <a href="/labs.html" class="v2-nav-link">
        Hands-on Labs
      </a>
      <a href="/v2/profile.html"
         class="${isActive(path.includes('profile'))}">
        About Us
      </a>
      <a href="/ai-agent.html"
         class="v2-nav-link v2-nav-axiom">
        ⚡ Axiom AI
      </a>
    </div>
    <div class="v2-nav-right">
      <div class="v2-mct-pill">
        <span class="v2-mct-dot"></span>
        MCT Certified
      </div>
      <a href="/v2/profile.html"
         class="v2-nav-avatar"
         title="Raushan Ranjan · MCT">RR</a>
    </div>
  </div>
</nav>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.style.paddingTop = '52px';
})();
