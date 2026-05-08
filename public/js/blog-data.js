// ─────────────────────────────────────────────────
// RR Skillverse — Blog Data
// Auto-managed — add posts using the template below
// ─────────────────────────────────────────────────

const BLOG_POSTS = [

  {
    id: 'power-bi-journey-begins',
    title: 'Power BI for Non-Tech Folks — Raushan\'s Journey Begins',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'Beginners', 'Non-Tech', 'Dashboards'],
    published: '2025-04-16',
    updated: '2025-04-16',
    readTime: '5 min',
    excerpt: 'That\'s what Raushan used to say about data and charts — until everything changed one morning in his office. If you juggle Excel sheets, struggle to make sense of data, and wish for a better way, this story is for you.',
    featured: true,
    content: `
<div class="blog-story">

  <p class="blog-intro-quote">"Data? Charts? Reports? That\'s not my thing!"</p>
  <p>That\'s what Raushan used to say… until everything changed one morning in his office.</p>

  <p>Raushan wasn\'t a techie. He worked as an operations manager at a mid-sized
  manufacturing company in Delhi. His daily routine revolved around coordinating
  shipments, handling customer queries, and tracking sales targets in Excel. A solid
  guy — practical, grounded, and extremely curious — but definitely not someone you\'d
  catch writing code or dabbling with databases.</p>

  <p>But Raushan had a problem.</p>

  <div class="blog-callout blog-callout-problem">
    <h2>💼 The Problem</h2>
    <p>His company\'s leadership had a habit of asking questions like:</p>
    <ul>
      <li>"Which region performed the best this quarter?"</li>
      <li>"Can we see how product demand changed over the last year?"</li>
      <li>"What\'s causing our delivery delays?"</li>
    </ul>
    <p>And every time, Raushan would dive into a jungle of Excel files — manually
    sorting, filtering, copying charts, and emailing screenshots. His weekends? Gone.
    Accuracy? Questionable. Interactivity? Zero. Sharing updates? A nightmare.</p>

    <figure class="blog-figure">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHDfBaphychv1V0W0aLD-OufB9OXD6tn-Pes85ViZ7iO9_bs7kxQYXT4MUXzzQFbKxxhv5kUhUdfMRMi_vgfYQ9szEMXBXVLPr-LFt-a98KUJkf1ZbJ3LdZqqKcGajFOJhPxxnfZUo_IiGY-b3xNEsd93sPL-xnLYAALv0qsqYLNKZWqcH2HWqTnPcw-U/s747/stressed.png"
        alt="Raushan stressed over Excel reports"
        class="blog-img"/>
      <figcaption>Sound familiar? The Excel reporting spiral.</figcaption>
    </figure>

    <p>One day, after a particularly frustrating meeting where his charts froze
    mid-presentation, his colleague Ritu leaned over and said:</p>

    <blockquote class="blog-quote">
      "You know, you could use Power BI for this. It\'d make your life a lot easier."
    </blockquote>

    <p>"Power <em>what</em>?" Raushan asked.</p>
  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>🧠 The Spark</h2>
    <p>That night, Raushan Googled "Power BI" out of curiosity. What he found amazed him:</p>
    <ul>
      <li>A visual tool for creating powerful dashboards</li>
      <li>No coding required</li>
      <li>Pulls data from Excel, databases, websites, and more</li>
      <li>Interactive reports that update with a click</li>
      <li>Share dashboards with your team — all online</li>
      <li>Control who sees what with roles and permissions</li>
    </ul>

    <figure class="blog-figure">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgB7y-AF6R1JmnhruK8FyrbG2p909nNKu4lqtNkQi4LyxS8hjU6T-brO7e_qI8ysT9YQusZbgDePwyVAPX3brkRG4OlumaTfgt81kKyD_GAVq-6Oebq0I6EpigwbulmaR4a2Rq2R34G40XYeVaxlj0KcxlguNIdk_aXNUGFHEk0kzqjk1qTjYPtyLjbGNw/s992/power_bi.jpg"
        alt="Power BI Dashboard overview"
        class="blog-img"/>
      <figcaption>Power BI — Excel had hit the gym, learned martial arts, and became Iron Man.</figcaption>
    </figure>

    <p>It was like Excel had hit the gym, learned martial arts, and became Iron Man.</p>
    <p>Raushan was intrigued. <em>"What if I could actually enjoy reporting?"</em> he thought.</p>
  </div>

  <div class="blog-summary">
    <h2>📌 What This Series Is About</h2>
    <p>If you\'re like Raushan — juggling multiple Excel sheets, struggling to make sense
    of data, and wishing for a better way to analyse and share information — Power BI
    might just become your new best friend.</p>
    <p>It\'s made for people who understand their work but not necessarily tech. Whether
    you\'re in operations, sales, marketing, HR, or running your own business — if you
    deal with data, Power BI can help you see it like never before.</p>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">Coming Next</span>
    <span class="blog-next-title">
      Chapter 2: "The First Report" — Raushan downloads Power BI Desktop,
      connects it to Excel, and builds his first ever interactive report.
    </span>
  </div>

</div>
    `
  },

  {
    id: 'blazor-component-lifecycle',
    title: 'Blazor Component Lifecycle — Every Method Explained',
    category: 'dotnet',
    topic: 'blazor',
    tags: ['Blazor', '.NET 8', 'Components', 'Lifecycle'],
    published: '2025-01-18',
    updated: '2025-02-05',
    readTime: '7 min',
    excerpt: 'Every Blazor component goes through a predictable lifecycle. Understanding OnInitialized, OnParametersSet, and ShouldRender makes you a significantly better Blazor developer.',
    content: `
      <p>Coming soon — full article being imported.</p>
    `,
    featured: false
  },

  {
    id: 'azure-functions-vs-logic-apps',
    title: 'Azure Functions vs Logic Apps — When to Use Which',
    category: 'azure',
    topic: 'azure-integration',
    tags: ['Azure', 'Functions', 'Logic Apps', 'AZ-204'],
    published: '2024-11-22',
    updated: '2024-12-01',
    readTime: '6 min',
    excerpt: 'This is one of the most common questions in AZ-204 training. The answer is not about which is better — it is about what problem you are solving. Here is a practical decision framework.',
    content: `
      <p>Coming soon — full article being imported.</p>
    `,
    featured: false
  }

];

// ─────────────────────────────────────────────────
// CATEGORY METADATA
// ─────────────────────────────────────────────────

const BLOG_CATEGORIES = {
  'power-platform': {
    label: 'Power Platform', icon: '⚡', color: '#0078d4',
    topics: {
      'power-bi':       'Power BI',
      'power-apps':     'Power Apps',
      'power-automate': 'Power Automate',
      'power-pages':    'Power Pages',
      'copilot-studio': 'Copilot Studio',
      'dataverse':      'Dataverse'
    }
  },
  'azure': {
    label: 'Microsoft Azure', icon: '☁️', color: '#0ea5e9',
    topics: {
      'azure-fundamentals': 'Azure Fundamentals',
      'azure-ai':           'Azure AI Services',
      'azure-integration':  'Azure Integration',
      'azure-functions':    'Azure Functions'
    }
  },
  'programming': {
    label: 'Programming', icon: '🔷', color: '#7c4b9e',
    topics: {
      'csharp':  'C# Tutorial',
      'python':  'Python Tutorial',
      'cpp':     'C++ Tutorial',
      'c-lang':  'C Tutorial'
    }
  },
  'dotnet': {
    label: '.NET Ecosystem', icon: '🚀', color: '#6366f1',
    topics: {
      'dotnet-dev':       '.NET Development',
      'blazor':           'Blazor',
      'embedding-dotnet': 'Embedding in .NET',
      'aspnet-core':      'ASP.NET Core'
    }
  },
  'graphics': {
    label: 'Graphics & Systems', icon: '🎮', color: '#c75c1a',
    topics: {
      'opengl':  'OpenGL',
      'vulkan':  'Vulkan',
      'qt-qml':  'Qt and QML'
    }
  },
  'ai-cloud': {
    label: 'AI & Cloud', icon: '🤖', color: '#2d7a4f',
    topics: {
      'ai-ml':           'AI / ML',
      'azure-ai-studio': 'Azure AI',
      'claude':          'Claude & Anthropic',
      'gcp':             'GCP'
    }
  }
};
