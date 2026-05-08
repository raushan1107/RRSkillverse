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
    id: 'power-bi-first-dashboard',
    title: 'Chapter 2: From "Not My Thing" to "Wow!" — Raushan\'s First Power BI Dashboard',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'Beginners', 'Dashboard', 'Visualizations', 'Excel'],
    published: '2025-04-17',
    updated: '2025-04-17',
    readTime: '6 min',
    excerpt: 'Raushan woke up the next morning feeling a mix of excitement and nervousness. He had downloaded Power BI Desktop — and now it was time to see if the tool could live up to its promises. Spoiler: it did.',
    featured: false,
    content: `
<div class="blog-story">

  <p>Raushan woke up the next morning feeling a mix of excitement and nervousness.
  He had downloaded Power BI Desktop (the free version), and now it was time to see
  if the tool could live up to its promises.</p>

  <p>He opened the app, and the first thing he noticed was how clean and simple
  everything seemed. No code, no complicated terms — just an interface that looked
  like a cross between Excel and a modern design tool.</p>

  <div class="blog-callout blog-callout-info">
    <h2>📊 Connecting to Data</h2>
    <p>Raushan\'s first task was clear: get some data in there.</p>
    <p>Luckily, he had a neat Excel file saved on his computer with his company\'s
    sales data. It wasn\'t huge — just a few columns — but it was enough to get started.</p>
    <p>He clicked on <strong>Get Data</strong> and selected <strong>Excel</strong>.
    In seconds, the file opened, showing him all the sheets in it. He selected the
    sheet called "Sales Data," and with a click, the data was imported.</p>
  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>🧑‍💻 The Power of the Fields Pane</h2>
    <p>The next challenge: turning this boring data into something useful. On the
    right-hand side, Raushan noticed a <strong>Fields pane</strong>. This was where
    he would drag and drop the columns he wanted to use for his report. He selected
    a few:</p>
    <ul>
      <li>Product Name</li>
      <li>Region</li>
      <li>Sales Amount</li>
      <li>Date</li>
    </ul>
    <p>Suddenly, Power BI turned those boring rows and columns into something a lot
    more engaging — a live, dynamic canvas ready to be transformed into charts and
    visuals.</p>
  </div>

  <div class="blog-callout blog-callout-problem">
    <h2>🔧 Building His First Visuals</h2>
    <p>Raushan didn\'t know much about what a "bar chart" or "pie chart" could do,
    but the options were right there in the <strong>Visualizations pane</strong>.
    He clicked on the Bar Chart option. Instantly, Power BI plotted the sales by
    Product Name, showing him how each product had performed.</p>
    <p>Then he thought: <em>"What about sales by region?"</em></p>
    <p>With a couple of clicks, he turned his data into a <strong>map</strong> to
    visualise which regions were performing the best.</p>
  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>📈 Adding Interactivity</h2>
    <p>Raushan\'s eyes lit up when he realised how interactive Power BI could be.
    The map was cool, but it didn\'t tell him the whole story.</p>
    <p>He clicked on a region, and boom — the rest of his visualisations updated
    automatically. He could now see sales breakdowns just for that region, without
    needing to build separate reports or filter data manually.</p>

    <blockquote class="blog-quote">
      "This is better than Excel… way better!" Raushan thought.
    </blockquote>
  </div>

  <div class="blog-callout blog-callout-info">
    <h2>🔄 Refreshing Data</h2>
    <p>Raushan had one last task: ensuring the data could refresh automatically.
    He clicked the <strong>Refresh</strong> button in Power BI Desktop, and within
    seconds, the tool updated his visuals with the latest data from his Excel sheet.</p>
    <p>No more exporting new charts. No more manually updating graphs.
    Everything was automatic.</p>
  </div>

  <div class="blog-summary">
    <h2>🚀 Summary — What You Learned in Chapter 2</h2>
    <p>Here\'s a quick recap of the key concepts covered in this chapter:</p>
    <ul style="padding-left:18px;margin-top:10px">
      <li style="margin-bottom:8px">
        <strong>Power BI Desktop</strong> is a free, simple tool to create
        reports and dashboards — no coding required.
      </li>
      <li style="margin-bottom:8px">
        <strong>Data Connectivity:</strong> You can easily import data from
        Excel, databases, or web sources in seconds.
      </li>
      <li style="margin-bottom:8px">
        <strong>Interactive Visualisations:</strong> Create graphs, charts,
        and maps that automatically update when you click.
      </li>
      <li style="margin-bottom:8px">
        <strong>Instant Analysis:</strong> Filter data, click on regions or
        categories, and see changes in real time across the entire report.
      </li>
    </ul>
  </div>

  <div class="blog-exercise">
    <h2>📝 Try It Yourself — Build Your First Sales Dashboard</h2>
    <p>Now it\'s your turn to do what Raushan just did. Use the dummy dataset
    below and follow these steps:</p>

    <div class="blog-exercise-download">
      <span>📥 Dummy Dataset</span>
      <a href="/downloads/SalesData.xlsx"
         download="SalesData.xlsx"
         class="lab-download-btn">
        Download Sales Data (Excel)
      </a>
      <span class="lab-download-note">50 rows · 2 sheets · INR sales data</span>
    </div>

    <ol class="blog-exercise-steps">
      <li>
        <strong>Connect to the Sales Data</strong><br/>
        Open Power BI Desktop, click <em>Get Data</em>, and load the Sales
        Data from the Excel file.
      </li>
      <li>
        <strong>Build Basic Visualisations</strong>
        <ul>
          <li>Create a Bar Chart to show Sales Amount by Product</li>
          <li>Create a Map to show Sales by Region</li>
          <li>Add a Line Chart to show Sales Trends Over Time</li>
        </ul>
      </li>
      <li>
        <strong>Add Filters and Slicers</strong>
        <ul>
          <li>Add a slicer for Region to filter the entire report by region</li>
          <li>Add a slicer for Product to focus on a specific product</li>
        </ul>
      </li>
      <li>
        <strong>Test Interactivity</strong><br/>
        Click on a region on the map — confirm the bar chart and line chart
        update automatically.
      </li>
      <li>
        <strong>Refresh Data</strong><br/>
        Manually change a few numbers in the Excel sheet to simulate new data,
        then click Refresh in Power BI Desktop to confirm it updates.
      </li>
    </ol>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">Coming Next</span>
    <span class="blog-next-title">
      Chapter 3: "Sharing and Collaborating" — Raushan learns how to share
      his report with his team, collaborate on it, and control who sees what
      using Power BI Service roles and permissions.
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
