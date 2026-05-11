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
    featured: false,
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
    id: 'power-bi-sharing-collaboration',
    title: 'Chapter 3: Sharing and Collaborating — The Power of Power BI Service',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'Power BI Service', 'RLS', 'Sharing', 'Dashboards', 'Roles'],
    published: '2025-04-18',
    updated: '2025-04-18',
    readTime: '7 min',
    excerpt: 'Raushan had built beautiful reports — but what\'s the point if no one else can see them? That\'s when Ritu introduced him to Power BI Service: where reports live in the cloud, teams collaborate in real time, and you control exactly who sees what.',
    featured: false,
    content: `
<div class="blog-story">

  <p>Raushan had just completed his first interactive report. His bar charts, maps,
  and slicers were all looking amazing, and he felt pretty proud of himself. But there
  was one thing missing: he wanted to share this with his team. After all, what\'s the
  point of building beautiful reports if no one else can see them?</p>

  <p>That\'s when Ritu came to the rescue again.</p>

  <blockquote class="blog-quote">
    "Raushan, have you tried Power BI Service?" she asked.
  </blockquote>

  <p>"Power BI Service? What\'s that?" Raushan replied.</p>

  <blockquote class="blog-quote">
    "It\'s where your reports can live and be accessed by everyone in your team —
    and beyond. Plus, it lets you control who can see what."
  </blockquote>

  <p>Raushan wasn\'t sure what that meant yet, but he was about to find out.</p>

  <div class="blog-callout blog-callout-info">
    <h2>🌐 The Power of Power BI Service</h2>
    <p>Raushan logged into <strong>Power BI Service</strong> — the cloud version of
    Power BI. What he found was exciting: this was where he could publish his reports
    online, collaborate with his team, and ensure everyone was working with the same
    live data.</p>
    <p>To get his report into the service, Raushan went back to Power BI Desktop. He
    clicked the <strong>Publish</strong> button on the Home ribbon and selected his
    team\'s workspace. In moments, his report was live in the cloud.</p>
    <p>Once published, Raushan was now able to:</p>
    <ul>
      <li>Share the report with teammates by sending them a link</li>
      <li>Let his team comment directly on the report</li>
      <li>Set permissions — choosing who could view and who could edit</li>
      <li>Assign roles (Manager, Analyst, Field Rep) and limit access to certain sections</li>
    </ul>
    <blockquote class="blog-quote">
      "This is like handing my team a real-time version of my reports — not just
      static PDFs." — Raushan
    </blockquote>
  </div>

  <div class="blog-callout blog-callout-problem">
    <h2>🔑 Understanding Roles and Permissions</h2>
    <p>Raushan was particularly excited about <strong>Roles and Permissions</strong>.
    In his company, there were managers, analysts, and field reps — each needed
    different levels of access to data:</p>
    <ul>
      <li><strong>Managers</strong> — could see the full dataset: everything from
      sales figures to regional trends</li>
      <li><strong>Analysts</strong> — only needed aggregate data and trends to
      generate reports</li>
      <li><strong>Field Reps</strong> — needed sales by region, but didn\'t require
      detailed financial figures</li>
    </ul>
    <p>Raushan set up <strong>Row-Level Security (RLS)</strong> to ensure each role
    only saw the data they were supposed to. With RLS in place, sensitive data was
    only accessible to the right people — automatically, based on who was logged in.</p>

    <div class="blog-rls-diagram">
      <div class="blog-rls-title">How RLS Works</div>
      <div class="blog-rls-row">
        <div class="blog-rls-node blog-rls-report">📄 Report</div>
      </div>
      <div class="blog-rls-arrow">↓</div>
      <div class="blog-rls-roles">
        <div class="blog-rls-role blog-rls-manager">
          <div class="blog-rls-role-icon">👔</div>
          <div class="blog-rls-role-label">Manager</div>
          <div class="blog-rls-role-desc">Full dataset</div>
        </div>
        <div class="blog-rls-role blog-rls-analyst">
          <div class="blog-rls-role-icon">📊</div>
          <div class="blog-rls-role-label">Analyst</div>
          <div class="blog-rls-role-desc">Summary data</div>
        </div>
        <div class="blog-rls-role blog-rls-fieldrep">
          <div class="blog-rls-role-icon">🗺️</div>
          <div class="blog-rls-role-label">Field Rep</div>
          <div class="blog-rls-role-desc">Regional only</div>
        </div>
      </div>
    </div>
  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>📲 Sharing Reports and Creating Dashboards</h2>
    <p>Raushan was ready to take his report further. He clicked on
    <strong>Pin to Dashboard</strong>, which allowed him to combine multiple reports
    into one central dashboard — containing KPIs, charts, and visuals from several
    reports, providing a holistic view of sales performance.</p>

    <figure class="blog-figure">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7-mtFhK7TcPkrhn6w8QL2aEkNe098cxdu9gb7cTJrvgeAi8Z29mWGHtfVpxKsPMdDWU9B_iJ9rcJJkobTjRLa6sJiXcWFudJ-hISJY_9Oosck3ITH4yOu44JIX-bMPms6aaCThhTur41fahSg5yUOvXTK6MdNVfQiVYwjJ5PMj9crfBZqLeKOeclPakE/s1314/power-bi-dashboard.png"
        alt="Power BI Service Dashboard view"
        class="blog-img"
        style="width:480px"/>
      <figcaption>A Power BI Service dashboard — multiple reports pinned into one view.</figcaption>
    </figure>

    <p>Now, Raushan\'s manager could check the sales trends from the dashboard, while
    the field reps could dive deeper into regional performance with just a few clicks.</p>
    <p>The best part? Anyone with access to Power BI Service could view the reports
    on <strong>any device</strong> — computer, tablet, or phone. Everything was
    responsive and ready to share on the go.</p>

    <figure class="blog-figure">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVpshFyqlTGfgS1V0fDXW6o19OBnVz4Fc9USdQiD2qH0KYFsEUH6plx6DK5OYp8XNJjIXxxonydpfx2iGapUzynzhr4FiROFtEppWJPoIlBz1VVKk_xbJGEAljElMV6EH7ZpwPfp3_6We9Zqw4yn2pIimProSqiGfUqukjgKQXc6Fgb6veqMDPF83Ju7w/s1080/Power-BI.png"
        alt="Power BI responsive on multiple devices"
        class="blog-img"
        style="width:480px"/>
      <figcaption>Power BI Service — accessible on any device, anywhere.</figcaption>
    </figure>
  </div>

  <div class="blog-summary">
    <h2>🚀 Summary — What You Learned in Chapter 3</h2>
    <ul style="padding-left:18px;margin-top:10px">
      <li style="margin-bottom:8px">
        <strong>Publishing Reports:</strong> Upload reports from Power BI Desktop
        to Power BI Service with one click using the Publish button.
      </li>
      <li style="margin-bottom:8px">
        <strong>Sharing:</strong> Share your reports with colleagues via a link —
        accessible on any device, anywhere.
      </li>
      <li style="margin-bottom:8px">
        <strong>Roles and Permissions:</strong> Control who can view or edit your
        reports by assigning workspace roles.
      </li>
      <li style="margin-bottom:8px">
        <strong>Row-Level Security (RLS):</strong> Restrict access to specific data
        rows based on the user\'s role — managers see everything, field reps see
        only their region.
      </li>
      <li style="margin-bottom:8px">
        <strong>Dashboards:</strong> Pin visuals from multiple reports into one
        central dashboard for a comprehensive at-a-glance view.
      </li>
    </ul>
  </div>

  <div class="blog-exercise">
    <h2>📝 Try It Yourself — Share Your First Report in Power BI Service</h2>
    <p>Now that Raushan has shown you how to publish and share, it\'s your turn.
    Follow these steps:</p>
    <ol class="blog-exercise-steps">
      <li>
        <strong>Publish Your Report</strong><br/>
        In Power BI Desktop, click <em>Publish</em> and sign into your Power BI
        Service account. Upload your report to a workspace.
      </li>
      <li>
        <strong>Share Your Report</strong><br/>
        After publishing, open your report in Power BI Service and click
        <em>Share</em> to send a link to a colleague. Try sharing with a different
        user and verify they see data that matches their role.
      </li>
      <li>
        <strong>Create a Dashboard</strong><br/>
        Pin visuals from your report to a new dashboard in Power BI Service.
        Arrange the visuals to get a complete view of your data.
      </li>
      <li>
        <strong>Set Up Row-Level Security</strong><br/>
        In Power BI Desktop, go to <em>Modelling → Manage Roles</em> and define
        a role with a DAX filter. Publish again, then in Power BI Service go to
        the dataset settings and assign a user to that role. Verify they only see
        filtered data.
      </li>
    </ol>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">Coming Next</span>
    <span class="blog-next-title">
      Chapter 4: "Advanced Features" — Raushan dives into custom visuals,
      advanced analytics, and the Power BI features that take reports to
      the next level.
    </span>
  </div>

</div>
    `
  },

  {
    id: 'power-bi-advanced-features-overview',
    title: 'Chapter 4: Advanced Features — Taking Power BI to the Next Level',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'DAX', 'Power Query', 'Data Modeling', 'RLS', 'AI Features', 'Advanced'],
    published: '2025-04-19',
    updated: '2025-04-19',
    readTime: '5 min',
    excerpt: 'Welcome to the advanced chapter of Raushan\'s Power BI journey. Having mastered the basics and sharing, it\'s time to explore the powerful tools that separate casual users from true Power BI practitioners — from DAX and Data Modeling to AI features and custom visuals.',
    featured: false,
    content: `
<div class="blog-story">

  <p>Welcome to the advanced features of Power BI! Having built his first reports,
  shared them with his team, and set up row-level security, Raushan was ready to go
  deeper. This chapter is a launchpad — an overview of the powerful tools and
  techniques that separate casual users from true Power BI practitioners.</p>

  <p>Each topic below is a deep-dive article of its own. Click any card to explore
  that subject fully.</p>

  <div class="blog-chapter-grid">

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.1</span>
        <span class="blog-chapter-icon">🔌</span>
      </div>
      <div class="blog-chapter-card-title">Data Connectivity Modes</div>
      <div class="blog-chapter-card-desc">
        Understand the difference between <strong>Import</strong>,
        <strong>DirectQuery</strong>, and <strong>Live Connection</strong> modes
        — when to use each and what trade-offs come with them.
      </div>
      <a href="https://rreducationpowerbi.blogspot.com/2025/04/data-connectivity-modes.html"
         target="_blank" rel="noopener"
         class="blog-chapter-card-btn">Read Article →</a>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.2</span>
        <span class="blog-chapter-icon">🔍</span>
      </div>
      <div class="blog-chapter-card-title">Data Exploration Options</div>
      <div class="blog-chapter-card-desc">
        Discover <strong>Column Quality</strong>, <strong>Column Distribution</strong>,
        and <strong>Column Profile</strong> in Power Query — essential tools for
        understanding your data before you model it.
      </div>
      <a href="https://rreducationpowerbi.blogspot.com/2025/04/Data-Exploration-Options-Column-Quality-Distribution-and-Profiling.html"
         target="_blank" rel="noopener"
         class="blog-chapter-card-btn">Read Article →</a>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.3</span>
        <span class="blog-chapter-icon">⚙️</span>
      </div>
      <div class="blog-chapter-card-title">Data Transformation</div>
      <div class="blog-chapter-card-desc">
        Explore data transformation techniques in <strong>Power Query</strong> —
        splitting columns, merging tables, unpivoting data, and building
        reusable transformation steps.
      </div>
      <a href="https://rreducationpowerbi.blogspot.com/2025/04/transforming-data-in-power-bi.html"
         target="_blank" rel="noopener"
         class="blog-chapter-card-btn">Read Article →</a>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.4</span>
        <span class="blog-chapter-icon">🗂️</span>
      </div>
      <div class="blog-chapter-card-title">Data Modeling</div>
      <div class="blog-chapter-card-desc">
        Grasp <strong>Fact</strong> and <strong>Dimension</strong> tables, star
        schema vs snowflake schema, relationship cardinality, and why a clean
        model is the foundation of every great report.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.5</span>
        <span class="blog-chapter-icon">📐</span>
      </div>
      <div class="blog-chapter-card-title">DAX Basics</div>
      <div class="blog-chapter-card-desc">
        Get started with <strong>DAX</strong> — creating measures, calculated
        columns, and calculated tables. Understand the difference between a
        measure and a column, and why it matters.
      </div>
      <a href="https://rreducationpowerbi.blogspot.com/2025/04/dax-basics-in-power-bi.html"
         target="_blank" rel="noopener"
         class="blog-chapter-card-btn">Read Article →</a>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.6</span>
        <span class="blog-chapter-icon">🔽</span>
      </div>
      <div class="blog-chapter-card-title">Filters</div>
      <div class="blog-chapter-card-desc">
        Explore the different types of filters in Power BI — visual-level,
        page-level, and report-level filters — and how they interact with
        slicers and cross-filtering.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.7</span>
        <span class="blog-chapter-icon">📊</span>
      </div>
      <div class="blog-chapter-card-title">Advanced Visualizations</div>
      <div class="blog-chapter-card-desc">
        Go beyond bar charts — learn scatter plots, decomposition trees,
        waterfall charts, ribbon charts, and when to use each one for
        maximum clarity.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.9</span>
        <span class="blog-chapter-icon">🎨</span>
      </div>
      <div class="blog-chapter-card-title">Formatting Reports</div>
      <div class="blog-chapter-card-desc">
        Learn how to format visuals, apply themes, control fonts and colours,
        and build reports that look professional and are easy to read at a
        glance.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.10</span>
        <span class="blog-chapter-icon">📐</span>
      </div>
      <div class="blog-chapter-card-title">Layout Design</div>
      <div class="blog-chapter-card-desc">
        Explore tips for effective report layout — page sizing, alignment,
        grouping visuals, and designing for both desktop and mobile viewing.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.11</span>
        <span class="blog-chapter-icon">✨</span>
      </div>
      <div class="blog-chapter-card-title">Enhancing Visualizations</div>
      <div class="blog-chapter-card-desc">
        Learn about <strong>buttons</strong>, <strong>bookmarks</strong>,
        <strong>tooltips</strong>, and <strong>sync slicers</strong> — the
        features that turn a static report into an interactive experience.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.13</span>
        <span class="blog-chapter-icon">🔗</span>
      </div>
      <div class="blog-chapter-card-title">Sync Slicers</div>
      <div class="blog-chapter-card-desc">
        Understand and use <strong>synchronised slicers</strong> — allowing a
        single slicer to filter visuals across multiple pages of a report
        simultaneously.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.14</span>
        <span class="blog-chapter-icon">🧩</span>
      </div>
      <div class="blog-chapter-card-title">Custom &amp; Advanced Visuals</div>
      <div class="blog-chapter-card-desc">
        Learn how to import and use <strong>custom visuals</strong> from
        AppSource — expanding Power BI\'s built-in library with community and
        certified visuals.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.15</span>
        <span class="blog-chapter-icon">🤖</span>
      </div>
      <div class="blog-chapter-card-title">AI Features</div>
      <div class="blog-chapter-card-desc">
        Explore Power BI\'s built-in AI tools — <strong>Q&amp;A visual</strong>,
        <strong>Key Influencers</strong>, <strong>Anomaly Detection</strong>,
        and <strong>Smart Narrative</strong> — that surface insights automatically.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

    <div class="blog-chapter-card">
      <div class="blog-chapter-card-header">
        <span class="blog-chapter-number">4.16</span>
        <span class="blog-chapter-icon">🔒</span>
      </div>
      <div class="blog-chapter-card-title">RLS Implementation</div>
      <div class="blog-chapter-card-desc">
        Learn the step-by-step process for implementing
        <strong>Row-Level Security</strong> — defining roles in Power BI Desktop,
        writing DAX filter rules, and testing in Power BI Service.
      </div>
      <span class="blog-chapter-card-btn blog-chapter-card-btn-soon">Coming Soon</span>
    </div>

  </div>

  <div class="blog-summary" style="margin-top:32px">
    <h2>📌 How to Use This Chapter</h2>
    <p>Each card above links to its own dedicated article with explanations,
    examples, and exercises. Work through them in order if you\'re following
    Raushan\'s journey from scratch, or jump directly to the topic you need most.</p>
    <p>Topics marked <strong>Coming Soon</strong> are being written and will be
    published progressively. Subscribe to the YouTube channel or bookmark this
    page to catch each one as it drops.</p>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">Series Progress</span>
    <span class="blog-next-title">
      You are in Chapter 4 of Raushan\'s Power BI Journey.
      Start with 4.1 Data Connectivity Modes and work your way through
      each sub-topic to build a complete, professional-level Power BI skill set.
    </span>
  </div>

</div>
    `
  },

  {
    id: 'power-bi-data-connectivity-modes',
    title: 'Chapter 4.1: Data Connectivity Modes — Import, DirectQuery and Live Connection',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'Import Mode', 'DirectQuery', 'Live Connection', 'Composite Models', 'Data Sources'],
    published: '2025-04-20',
    updated: '2025-04-20',
    readTime: '8 min',
    excerpt: 'Power BI offers several ways to connect to your data — each with different implications for performance, freshness, and functionality. Understanding Import, DirectQuery, and Live Connection is key to building reports that are both fast and accurate.',
    featured: false,
    content: `
<div class="blog-story">

  <p>Power BI offers several ways to connect with your data, each with its own
  implications for performance, functionality, and data freshness. Understanding
  these modes is key to building effective and efficient reports. Let\'s explore
  the essentials of <strong>Import</strong>, <strong>DirectQuery</strong>, and
  <strong>Live Connection</strong>.</p>

  <div class="blog-callout blog-callout-info">
    <h2>💡 Import Mode — Data at Your Fingertips</h2>
    <p>Import mode brings a <strong>copy of your data</strong> directly into
    Power BI\'s high-performance in-memory engine (called VertiPaq).</p>
    <ul>
      <li>Leverages in-memory processing for rapid query response — highly
      interactive reports with instant filtering</li>
      <li>Unlocks the <strong>complete suite</strong> of Power Query transformations
      and DAX calculations, allowing for rich data modelling and analysis</li>
      <li>Operates on a <strong>snapshot</strong> of your data — requires scheduled
      refreshes to reflect updates from the source</li>
      <li>Best when speed and rich analytical capabilities are paramount and data
      latency from scheduled refreshes is acceptable</li>
    </ul>
    <div class="blog-fact-pill">
      <span class="blog-fact-label">⚡ Interesting Fact</span>
      Power BI\'s VertiPaq engine employs advanced compression techniques, often
      achieving data size reduction of <strong>10x or more</strong> — making even
      large datasets manageable in memory.
    </div>
    <blockquote class="blog-quote">
      Example: Analysing historical sales trends where daily updates are sufficient,
      allowing for deep dives into past performance.
    </blockquote>
  </div>

  <div class="blog-callout blog-callout-problem">
    <h2>🔗 DirectQuery Mode — Querying Live</h2>
    <p>DirectQuery establishes a <strong>live connection</strong> to your data
    source, querying it directly each time a visual is rendered or a filter
    is applied.</p>
    <ul>
      <li>Provides <strong>near real-time data visibility</strong> — reports always
      reflect the current state of the underlying data source</li>
      <li>Enables analysis of datasets <strong>too large to fit in memory</strong>,
      as data processing happens at the source</li>
      <li>Performance is directly tied to the speed and capacity of the data source
      — complex queries can impact report responsiveness</li>
      <li>Some Power Query transformations and DAX functions have
      <strong>restrictions</strong> due to the need to translate operations to the
      source database\'s query language</li>
      <li>Best suited for up-to-the-minute data: live operational metrics, financial
      trading activity, or IoT sensor monitoring</li>
    </ul>
    <div class="blog-fact-pill blog-fact-pill-orange">
      <span class="blog-fact-label">⚡ Interesting Fact</span>
      DirectQuery is a powerful option for <strong>Big Volume of Data</strong>
      scenarios — users can interact with massive datasets without extensive data
      movement or duplication.
    </div>
    <blockquote class="blog-quote">
      Example: Real-time monitoring of sensor data from industrial equipment to
      identify immediate operational anomalies.
    </blockquote>
  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>🏢 Live Connection Mode — Leveraging Pre-built Models</h2>
    <p>Live Connection connects to an <strong>existing, curated data model</strong>
    hosted in Power BI Service or Analysis Services (Tabular / Multidimensional).</p>
    <ul>
      <li>Ensures <strong>consistency and a single source of truth</strong> — all
      reports are built on top of a centrally managed, governed model</li>
      <li>Benefits from performance tuning and optimisation already applied to the
      underlying data model</li>
      <li>Report creators focus on visualisation and report-level measures — no
      need to worry about data modelling</li>
      <li>The data model itself <strong>cannot be altered</strong> within the Power
      BI Desktop file in Live Connection mode</li>
      <li>Best for enterprise-scale reporting and collaboration on shared datasets</li>
    </ul>
    <div class="blog-fact-pill blog-fact-pill-green">
      <span class="blog-fact-label">⚡ Interesting Fact</span>
      Live Connection promotes a <strong>separation of concerns</strong> — data
      engineers build robust models while business users concentrate on creating
      insightful reports on top of them.
    </div>
    <blockquote class="blog-quote">
      Example: Different departments using a central Analysis Services cube to
      create their specific sales, marketing, or finance reports — all from the
      same trusted model.
    </blockquote>
  </div>

  <div class="blog-callout blog-callout-info">
    <h2>🛠️ Composite Models — The Best of Both Worlds</h2>
    <p>Composite Models allow you to <strong>combine multiple connection types</strong>
    (Import, DirectQuery, and/or Live Connection) within a single Power BI report.</p>
    <ul>
      <li>Combine the speed of in-memory data with the real-time capabilities of
      DirectQuery</li>
      <li>Augment a Live Connection model with local tables imported separately</li>
      <li>Create aggregated tables for performance on top of DirectQuery sources</li>
      <li>Supports complex enterprise requirements that no single mode can address
      alone</li>
    </ul>
  </div>

  <div class="blog-summary">
    <h2>📊 Summary — Connectivity Modes at a Glance</h2>
    <div class="blog-comparison-table">
      <div class="blog-table-header">
        <div class="blog-table-cell blog-table-feature">Feature</div>
        <div class="blog-table-cell">Import</div>
        <div class="blog-table-cell">DirectQuery</div>
        <div class="blog-table-cell">Live Connection</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Data Storage</div>
        <div class="blog-table-cell">In-memory (Power BI)</div>
        <div class="blog-table-cell">Stays at source</div>
        <div class="blog-table-cell">External model</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Performance</div>
        <div class="blog-table-cell blog-table-best">⚡ Fastest</div>
        <div class="blog-table-cell">Source-dependent</div>
        <div class="blog-table-cell">Generally fast</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">DAX &amp; Power Query</div>
        <div class="blog-table-cell blog-table-best">✅ Full support</div>
        <div class="blog-table-cell">⚠️ Limited</div>
        <div class="blog-table-cell">Report-level only</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Real-time Data</div>
        <div class="blog-table-cell">❌ Needs refresh</div>
        <div class="blog-table-cell blog-table-best">✅ Near real-time</div>
        <div class="blog-table-cell">Model schedule</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Large Datasets</div>
        <div class="blog-table-cell">Limited by memory</div>
        <div class="blog-table-cell blog-table-best">✅ Handles very large</div>
        <div class="blog-table-cell">Depends on model</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Best Use Case</div>
        <div class="blog-table-cell">Speed, rich analysis</div>
        <div class="blog-table-cell">Live ops, IoT, trading</div>
        <div class="blog-table-cell">Enterprise reporting</div>
      </div>
    </div>
    <p style="margin-top:16px;font-size:13.5px">
      Choosing the optimal mode hinges on your specific data requirements,
      performance expectations, and the need for real-time information.
    </p>
  </div>

  <div class="blog-mslearn">
    <div class="blog-mslearn-title">📚 Go Deeper — Microsoft Learn Resources</div>
    <ul class="blog-mslearn-links">
      <li>
        <a href="https://learn.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources"
           target="_blank" rel="noopener">
          Power BI data sources overview
        </a>
      </li>
      <li>
        <a href="https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about"
           target="_blank" rel="noopener">
          DirectQuery in Power BI — deep dive
        </a>
      </li>
      <li>
        <a href="https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-composite-models"
           target="_blank" rel="noopener">
          Composite models in Power BI Desktop
        </a>
      </li>
      <li>
        <a href="https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-import-excel-workbooks"
           target="_blank" rel="noopener">
          Connect to Excel workbooks in Power BI Desktop
        </a>
      </li>
    </ul>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">Up Next in Chapter 4</span>
    <span class="blog-next-title">
      4.2 Data Exploration Options — Column Quality, Column Distribution,
      and Column Profile in Power Query.
    </span>
  </div>

</div>
    `
  },

  {
    id: 'power-bi-data-exploration-options',
    title: 'Chapter 4.2: Data Exploration in Power BI — Column Quality, Distribution and Profile',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'Power Query', 'Column Quality', 'Column Profile', 'Data Profiling', 'Data Cleaning'],
    published: '2025-04-21',
    updated: '2025-04-21',
    readTime: '6 min',
    excerpt: 'Before diving into visuals or modelling, understanding your data is a vital first step. Power BI\'s Power Query Editor gives you three powerful built-in tools — Column Quality, Column Distribution, and Column Profile — to validate, explore, and clean your data before it ever reaches a report.',
    featured: false,
    content: `
<div class="blog-story">

  <p>Before diving deep into visuals or modelling, <strong>understanding your data
  is a vital first step</strong>. Power BI provides a powerful set of tools to help
  you examine the structure, quality, and distribution of your data — directly within
  the Power Query Editor, before any transformation or modelling begins.</p>

  <blockquote class="blog-quote">
    "These data exploration tools reduce the guesswork and allow report creators to
    validate assumptions early in the development process."
  </blockquote>

  <div class="blog-callout blog-callout-info">
    <h2>🔍 Data Preview and Column Indicators</h2>
    <p>As soon as you load data into Power Query Editor, you get a preview grid of
    your dataset. But there\'s more beneath the surface — enable
    <strong>Column Quality</strong>, <strong>Column Distribution</strong>, and
    <strong>Column Profile</strong> from the <strong>View</strong> tab to gain
    richer insights about every column in your dataset.</p>
    <p>Once enabled, Power Query displays contextual statistics above or below each
    column — giving you an at-a-glance picture of your data\'s health before you
    write a single transformation step.</p>
  </div>

  <div class="blog-profiling-grid">

    <div class="blog-profiling-card">
      <div class="blog-profiling-card-header">
        <span class="blog-profiling-icon">✅</span>
        <span class="blog-profiling-title">Column Quality</span>
      </div>
      <div class="blog-profiling-card-body">
        <p>Shows the <strong>percentage of valid, error, and empty values</strong>
        for each column as a horizontal bar directly above the column data.</p>
        <ul>
          <li>Instantly spot which columns have missing or dirty data</li>
          <li>Green = valid, red = errors, grey = empty</li>
          <li>Hover over the bar to see exact counts and percentages</li>
          <li>Accessible via <em>View → Column quality</em></li>
        </ul>
        <div class="blog-profiling-use-case">
          <span class="blog-profiling-use-label">When to use</span>
          Quick data validation pass — identify columns that need cleaning
          before you start building transformations.
        </div>
      </div>
    </div>

    <div class="blog-profiling-card">
      <div class="blog-profiling-card-header">
        <span class="blog-profiling-icon">📊</span>
        <span class="blog-profiling-title">Column Distribution</span>
      </div>
      <div class="blog-profiling-card-body">
        <p>Visually displays the <strong>value distribution</strong> across a column
        as a small histogram, plus distinct and unique value counts.</p>
        <ul>
          <li>Distinct count = number of different values (including duplicates counted once)</li>
          <li>Unique count = values that appear exactly once</li>
          <li>The histogram shows how data is spread — spot skewed distributions instantly</li>
          <li>Helpful for verifying categorical columns (e.g. should Region have exactly 4 values?)</li>
        </ul>
        <div class="blog-profiling-use-case">
          <span class="blog-profiling-use-label">When to use</span>
          Spotting outliers, duplicate issues, and verifying that categorical
          columns contain expected values only.
        </div>
      </div>
    </div>

    <div class="blog-profiling-card blog-profiling-card-full">
      <div class="blog-profiling-card-header">
        <span class="blog-profiling-icon">🧪</span>
        <span class="blog-profiling-title">Column Profile</span>
      </div>
      <div class="blog-profiling-card-body">
        <p>The most detailed of the three — provides a <strong>full statistical
        breakdown</strong> of a selected column in a dedicated panel at the bottom
        of Power Query Editor.</p>
        <ul>
          <li>Count, empty count, distinct count, unique count</li>
          <li>Min, max, average, standard deviation (for numeric columns)</li>
          <li>Most frequent and least frequent values with counts</li>
          <li>A value distribution chart for the selected column</li>
          <li>Data type and any detected errors shown clearly</li>
        </ul>
        <div class="blog-profiling-use-case">
          <span class="blog-profiling-use-label">When to use</span>
          Deep-dive analysis of a specific column — understand its range,
          outliers, and value distribution before deciding how to transform it.
        </div>
      </div>
    </div>

  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>📁 How to Enable All Three Features</h2>
    <p>All three tools are in the same place — the <strong>View</strong> tab of the
    Power Query Editor ribbon:</p>
    <ol style="padding-left:18px;margin-top:10px">
      <li style="margin-bottom:8px">
        Open Power Query Editor —
        click <em>Transform Data</em> from the Home ribbon in Power BI Desktop
      </li>
      <li style="margin-bottom:8px">
        Click the <strong>View</strong> tab in the Power Query ribbon
      </li>
      <li style="margin-bottom:8px">
        In the <strong>Data Preview</strong> group, check:
        <strong>Column quality</strong>, <strong>Column distribution</strong>,
        and <strong>Column profile</strong>
      </li>
      <li style="margin-bottom:8px">
        The indicators appear immediately — quality bars above columns,
        distribution histograms below, and profile panel at the bottom
        when you click a column
      </li>
    </ol>
    <div class="blog-fact-pill blog-fact-pill-green">
      <span class="blog-fact-label">💡 Pro Tip</span>
      By default, Power Query profiles only the <strong>first 1,000 rows</strong>.
      To profile the entire dataset, click the status bar at the bottom of Power
      Query Editor and change it from "Column profiling based on top 1000 rows"
      to "Column profiling based on entire data set". This matters for large tables
      where errors may only appear in later rows.
    </div>
  </div>

  <div class="blog-summary">
    <h2>📌 Summary — Which Tool for Which Job</h2>
    <div class="blog-comparison-table">
      <div class="blog-table-header">
        <div class="blog-table-cell blog-table-feature">Tool</div>
        <div class="blog-table-cell">What It Shows</div>
        <div class="blog-table-cell">Best Used For</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">✅ Column Quality</div>
        <div class="blog-table-cell">Valid / Error / Empty %</div>
        <div class="blog-table-cell">Quick data health check</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">📊 Column Distribution</div>
        <div class="blog-table-cell">Value spread, distinct &amp; unique counts</div>
        <div class="blog-table-cell">Spotting outliers and duplicates</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">🧪 Column Profile</div>
        <div class="blog-table-cell">Full stats: min, max, avg, std dev, frequency</div>
        <div class="blog-table-cell">Deep-dive on a specific column</div>
      </div>
    </div>
  </div>

  <div class="blog-exercise">
    <h2>🧠 Quick Challenge — Test Your Understanding</h2>
    <p>Answer these questions to check your grasp of the profiling tools:</p>
    <ol class="blog-exercise-steps">
      <li>
        <strong>Which profiling feature would you use to see the most and
        least frequent values in a column?</strong><br/>
        <em style="color:var(--text-dim);font-size:12.5px">
          Hint: It shows a full statistical breakdown with value frequency.
        </em>
      </li>
      <li>
        <strong>How can you identify columns with a high number of nulls
        at a glance?</strong><br/>
        <em style="color:var(--text-dim);font-size:12.5px">
          Hint: It shows a colour-coded percentage bar above each column.
        </em>
      </li>
      <li>
        <strong>What feature helps in spotting skewed data or unexpected
        value frequencies?</strong><br/>
        <em style="color:var(--text-dim);font-size:12.5px">
          Hint: It shows a histogram of how values are spread across the column.
        </em>
      </li>
    </ol>
    <div class="blog-challenge-answers">
      <div class="blog-challenge-answer-title">✅ Answers</div>
      <ol style="padding-left:18px;margin-top:8px;font-size:13px;color:var(--text-muted)">
        <li style="margin-bottom:6px">
          <strong>Column Profile</strong> — shows most/least frequent values
          with counts in its detailed statistics panel.
        </li>
        <li style="margin-bottom:6px">
          <strong>Column Quality</strong> — the grey section of the bar
          represents empty/null values as a percentage.
        </li>
        <li style="margin-bottom:6px">
          <strong>Column Distribution</strong> — the histogram reveals the
          shape of the value distribution across the column.
        </li>
      </ol>
    </div>
  </div>

  <div class="blog-mslearn">
    <div class="blog-mslearn-title">📚 Go Deeper — Microsoft Learn Resources</div>
    <ul class="blog-mslearn-links">
      <li>
        <a href="https://learn.microsoft.com/en-us/power-query/data-profiling-tools"
           target="_blank" rel="noopener">
          Overview of data profiling tools in Power Query
        </a>
      </li>
    </ul>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">Up Next in Chapter 4</span>
    <span class="blog-next-title">
      4.3 Data Transformation — splitting columns, merging tables, unpivoting
      data, and building reusable transformation steps in Power Query.
    </span>
  </div>

</div>
    `
  },

  {
    id: 'power-bi-data-transformation',
    title: 'Chapter 4.3: Data Transformation in Power BI — Clean and Reshape with Power Query',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'Power Query', 'Data Transformation', 'ETL', 'Applied Steps', 'Data Cleaning'],
    published: '2025-04-22',
    updated: '2025-04-22',
    readTime: '7 min',
    excerpt: 'Once you\'ve profiled your data, the next crucial step is transformation. Power BI\'s Power Query Editor lets you clean, reshape, and structure data without ever touching the original source. Think of it as fixing your Lego pieces before building the castle.',
    featured: false,
    content: `
<div class="blog-story">

  <p>Once you\'ve profiled your data, the next crucial step is
  <strong>transformation</strong>. Power BI empowers you to clean, reshape, and
  structure data with the help of its intuitive Power Query Editor. Whether you\'re
  removing unnecessary columns or pivoting your entire dataset, these transformations
  make your data analytics-ready — without ever touching the original source.</p>

  <blockquote class="blog-quote">
    "Power Query transformations are non-destructive — your original data remains
    untouched while you shape a working version tailored to your needs."
  </blockquote>

  <div class="blog-callout blog-callout-info">
    <h2>🔧 Common Data Transformation Actions</h2>
    <p>Power Query Editor exposes a rich set of transformation operations through
    its ribbon — no code required for most tasks. Here are the most commonly used
    ones:</p>

    <div class="blog-transform-grid">

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🗑️</span>
        <div>
          <div class="blog-transform-name">Remove Columns / Rows</div>
          <div class="blog-transform-desc">Strip out irrelevant, empty, or
          duplicate data that would clutter your model.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">✏️</span>
        <div>
          <div class="blog-transform-name">Rename Columns</div>
          <div class="blog-transform-desc">Give columns meaningful names —
          "Amt" becomes "Sales Amount", "Dt" becomes "Order Date".</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔢</span>
        <div>
          <div class="blog-transform-name">Change Data Types</div>
          <div class="blog-transform-desc">Ensure dates are typed as Date,
          numbers as Decimal/Integer, and text as Text. Wrong types break DAX
          calculations.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔽</span>
        <div>
          <div class="blog-transform-name">Filter Rows</div>
          <div class="blog-transform-desc">Keep only the records that matter —
          filter by date range, region, product category, or any condition.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">✂️</span>
        <div>
          <div class="blog-transform-name">Split Columns</div>
          <div class="blog-transform-desc">Break "Full Name" into "First Name"
          and "Last Name", or split "Product - Size" into two usable
          columns.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔗</span>
        <div>
          <div class="blog-transform-name">Merge Columns</div>
          <div class="blog-transform-desc">Combine "City" and "State" into a
          single "Location" column for cleaner visualisation.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔄</span>
        <div>
          <div class="blog-transform-name">Pivot / Unpivot Columns</div>
          <div class="blog-transform-desc">Reshape flat wide tables into tall,
          analysis-friendly formats — or vice versa. Essential for poorly
          structured source data.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📦</span>
        <div>
          <div class="blog-transform-name">Group By</div>
          <div class="blog-transform-desc">Aggregate rows — sum sales by region,
          count orders by product, or average quantity by category.</div>
        </div>
      </div>

    </div>
  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>⚙️ Applied Steps — The Magic Recorder</h2>
    <p>Every transformation you perform is recorded in the
    <strong>Applied Steps</strong> pane on the right side of Power Query Editor.
    Think of it as your personal data-cleaning history — a transparent audit trail
    of every operation applied to your data.</p>
    <ul>
      <li>Rename any step to make the pipeline self-documenting</li>
      <li>Double-click a step to review or edit the transformation settings</li>
      <li>Delete a step to undo it — the remaining steps re-run automatically</li>
      <li>Reorder steps when needed (with caution — some steps depend on
      earlier ones)</li>
      <li>Each step generates an M language formula — visible in the formula bar</li>
    </ul>
    <div class="blog-fact-pill blog-fact-pill-green">
      <span class="blog-fact-label">💡 Key Principle</span>
      Applied Steps are executed <strong>top to bottom</strong> in sequence.
      If you rename a column in Step 3, any step after that which references the
      old column name will break. Always be mindful of step order when editing
      existing pipelines.
    </div>
  </div>

  <div class="blog-callout blog-callout-problem">
    <h2>🔄 Real-World Example — Sales Report Cleanup</h2>
    <p>Imagine you\'re working on a report for a retail clothing company. You receive
    a CSV file with thousands of rows from multiple store branches. Here\'s a typical
    transformation pipeline:</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">1</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Remove irrelevant columns</div>
          <div class="blog-pipeline-desc">Delete "Internal Notes" and "ProcessedBy"
          — not needed for sales analysis.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">2</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Fix data types</div>
          <div class="blog-pipeline-desc">"Sale Date" is stored as text — change it
          to Date type so time intelligence DAX works correctly.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">3</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Filter rows</div>
          <div class="blog-pipeline-desc">Keep only data from the last 2 years —
          filter on Sale Date ≥ today minus 730 days.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">4</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Split column</div>
          <div class="blog-pipeline-desc">"Product Name - Size" splits into two
          columns: "Product Name" and "Size" — by delimiter.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">5</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Merge columns</div>
          <div class="blog-pipeline-desc">Combine "City" and "State" into a single
          "Location" column separated by ", " for cleaner map visuals.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step blog-pipeline-step-done">
        <div class="blog-pipeline-num blog-pipeline-num-done">✓</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Close &amp; Apply</div>
          <div class="blog-pipeline-desc">Data is clean, consistent, and loaded
          into the model — ready for relationships and DAX measures.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="blog-callout blog-callout-info">
    <h2>🧠 Analogy — Data as Lego Blocks</h2>
    <p>Think of each row of data as a Lego piece. Raw data might have broken,
    mismatched, or oddly shaped pieces. <strong>Transformation is like fixing
    the pieces</strong> — cutting some, merging others, snapping them into the
    right orientation — so you can build a stable, accurate model.</p>
    <p>Without proper preparation, your Lego castle will collapse under its own
    weight. 🏰 The same is true for Power BI reports built on messy, untyped,
    or duplicated data.</p>
  </div>

  <div class="blog-summary">
    <h2>📌 Summary — Transformation Principles to Remember</h2>
    <ul style="padding-left:18px;margin-top:10px">
      <li style="margin-bottom:8px">
        <strong>Non-destructive by design</strong> — Power Query never modifies
        your original data source. All transformations create a computed view.
      </li>
      <li style="margin-bottom:8px">
        <strong>Applied Steps are sequential</strong> — steps execute top to
        bottom. Edit with awareness of downstream dependencies.
      </li>
      <li style="margin-bottom:8px">
        <strong>Data types matter</strong> — wrong types cause DAX errors and
        incorrect aggregations. Always verify types after loading data.
      </li>
      <li style="margin-bottom:8px">
        <strong>Transform before you model</strong> — clean data in Power Query,
        not in DAX. It is more efficient and easier to maintain.
      </li>
      <li style="margin-bottom:8px">
        <strong>Transformation = trust</strong> — reports built on clean,
        well-shaped data earn credibility with stakeholders.
      </li>
    </ul>
  </div>

  <div class="blog-exercise">
    <h2>🧠 Try It Yourself</h2>
    <p>Open the Sales dataset in Power Query and complete these tasks:</p>
    <ol class="blog-exercise-steps">
      <li>
        <strong>Filter rows based on a condition</strong><br/>
        Keep only orders where the Sales Amount is greater than 1000.
        Check the Applied Steps pane — notice the new "Filtered Rows" step.
      </li>
      <li>
        <strong>Split a column</strong><br/>
        If your dataset has a column like "Product - Size", split it by the
        delimiter " - " into two separate columns. Rename both clearly.
      </li>
      <li>
        <strong>Rename an Applied Step</strong><br/>
        Right-click any step in the Applied Steps pane and rename it to
        something descriptive like "Remove Internal Columns" instead of
        the default "Removed Columns".
      </li>
    </ol>
  </div>

  <div class="blog-mslearn">
    <div class="blog-mslearn-title">📚 Go Deeper — Microsoft Learn Resources</div>
    <ul class="blog-mslearn-links">
      <li>
        <a href="https://learn.microsoft.com/en-us/power-query/transform-data"
           target="_blank" rel="noopener">
          Transform data in Power Query Editor
        </a>
      </li>
      <li>
        <a href="https://learn.microsoft.com/en-us/power-query/applied-steps"
           target="_blank" rel="noopener">
          Understanding Applied Steps in Power Query
        </a>
      </li>
    </ul>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">Up Next in Chapter 4</span>
    <span class="blog-next-title">
      4.4 Data Modeling — Fact and Dimension tables, star schema vs snowflake
      schema, relationship cardinality, and why a clean model is the
      foundation of every great Power BI report.
    </span>
  </div>

</div>
    `
  },

  {
    id: 'power-bi-data-modeling',
    title: 'Chapter 4.4: Data Modeling in Power BI — Facts, Dimensions, Relationships and Schema',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'Data Modeling', 'Star Schema', 'Snowflake Schema', 'Fact Table', 'Dimension Table', 'Relationships'],
    published: '2025-04-23',
    updated: '2025-04-23',
    readTime: '8 min',
    excerpt: 'Data Modeling is the process of organising and relating multiple tables so that analysis is fast, logical, and efficient. Think of it as designing the blueprint of your data house — deciding what each room (table) does, how they connect (relationships), and what they hold (columns).',
    featured: false,
    content: `
<div class="blog-story">

  <p>In Power BI, <strong>Data Modeling</strong> is the process of organising and
  relating multiple data tables in a way that makes analysis fast, logical, and
  efficient. Think of it as designing the <em>blueprint of your data house</em> —
  you decide what each room (table) does, how they connect (relationships), and
  which rooms hold what (columns).</p>

  <blockquote class="blog-quote">
    "A well-designed data model is invisible to the end user — they just see fast,
    accurate reports. A poorly designed one makes everything harder."
  </blockquote>

  <div class="blog-callout blog-callout-info">
    <h2>🛍️ Real-World Analogy — A Supermarket System</h2>
    <p>Imagine a supermarket\'s data. Every time a customer checks out, several
    tables are involved:</p>
    <div class="blog-table-type-grid">
      <div class="blog-table-type-card blog-table-type-fact">
        <div class="blog-table-type-header">
          <span>📊</span>
          <span>Sales Table</span>
          <span class="blog-table-type-badge blog-badge-fact">Fact</span>
        </div>
        <div class="blog-table-type-desc">
          Every bill generated — OrderID, ProductID, CustomerID, DateID,
          Quantity, Amount. The measurable events.
        </div>
      </div>
      <div class="blog-table-type-card blog-table-type-dim">
        <div class="blog-table-type-header">
          <span>📦</span>
          <span>Products Table</span>
          <span class="blog-table-type-badge blog-badge-dim">Dimension</span>
        </div>
        <div class="blog-table-type-desc">
          All items with name, category, price, brand. Describes
          <em>what</em> was sold.
        </div>
      </div>
      <div class="blog-table-type-card blog-table-type-dim">
        <div class="blog-table-type-header">
          <span>👤</span>
          <span>Customers Table</span>
          <span class="blog-table-type-badge blog-badge-dim">Dimension</span>
        </div>
        <div class="blog-table-type-desc">
          Customer name, city, segment, loyalty tier. Describes
          <em>who</em> bought.
        </div>
      </div>
      <div class="blog-table-type-card blog-table-type-dim">
        <div class="blog-table-type-header">
          <span>📅</span>
          <span>Date Table</span>
          <span class="blog-table-type-badge blog-badge-dim">Dimension</span>
        </div>
        <div class="blog-table-type-desc">
          Full calendar with Day, Month, Quarter, Year, Weekday. Enables
          all time intelligence DAX functions.
        </div>
      </div>
    </div>
    <p style="margin-top:14px">Each sale <em>refers to</em> a specific customer,
    product, and date. These references are <strong>relationships</strong>. Together
    they form a data model.</p>
  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>🗃️ Fact Tables vs Dimension Tables</h2>

    <div class="blog-fd-compare">
      <div class="blog-fd-col">
        <div class="blog-fd-header blog-fd-header-fact">📊 Fact Table</div>
        <ul class="blog-fd-list">
          <li>Stores <strong>measurable events</strong> — sales, revenue, quantity, scores</li>
          <li>Usually long (millions of rows) and narrow (few columns)</li>
          <li>Contains <strong>foreign keys</strong> linking to dimension tables</li>
          <li>Rows represent individual transactions or measurements</li>
          <li>Examples: <code>Sales</code>, <code>Orders</code>, <code>Transactions</code>, <code>Logs</code></li>
        </ul>
      </div>
      <div class="blog-fd-col">
        <div class="blog-fd-header blog-fd-header-dim">📎 Dimension Table</div>
        <ul class="blog-fd-list">
          <li>Stores <strong>descriptive attributes</strong> about business entities</li>
          <li>Usually short (fewer rows) and wide (many descriptive columns)</li>
          <li>Contains a <strong>primary key</strong> referenced by the Fact table</li>
          <li>Rows represent unique entities — one row per product, customer, date</li>
          <li>Examples: <code>Products</code>, <code>Customers</code>, <code>Employees</code>, <code>Dates</code></li>
        </ul>
      </div>
    </div>

    <blockquote class="blog-quote" style="margin-top:16px">
      Think of <strong>Fact Tables</strong> as bank transactions and
      <strong>Dimension Tables</strong> as your contact list. The transaction
      shows "₹5,000 paid to Vendor A" — the contact list tells you everything
      about Vendor A.
    </blockquote>
  </div>

  <div class="blog-callout blog-callout-problem">
    <h2>🔗 Understanding Relationships</h2>
    <p>Power BI allows you to define relationships between tables in the
    <strong>Model View</strong>. You drag from the primary key of a Dimension
    table to the foreign key in the Fact table.</p>

    <div class="blog-relationship-types">
      <div class="blog-rel-card blog-rel-onetoone">
        <div class="blog-rel-title">1 : 1</div>
        <div class="blog-rel-name">One-to-One</div>
        <div class="blog-rel-desc">Each row in Table A matches exactly one row in Table B. Rare — usually means tables should be merged.</div>
      </div>
      <div class="blog-rel-card blog-rel-onetomany">
        <div class="blog-rel-title">1 : *</div>
        <div class="blog-rel-name">One-to-Many ✅ Preferred</div>
        <div class="blog-rel-desc">One product can appear in many sales rows. This is the standard relationship in a star schema.</div>
      </div>
      <div class="blog-rel-card blog-rel-manytomany">
        <div class="blog-rel-title">* : *</div>
        <div class="blog-rel-name">Many-to-Many ⚠️</div>
        <div class="blog-rel-desc">Avoid where possible — can cause ambiguous filter paths and incorrect aggregations. Resolve with a bridge table.</div>
      </div>
    </div>

    <p style="margin-top:14px">Example of a correct one-to-many relationship:</p>
    <div class="blog-rel-example">
      <code>Products.ProductID</code>
      <span class="blog-rel-arrow">——— 1 : * ———→</span>
      <code>Sales.ProductID</code>
    </div>
    <p style="margin-top:12px">Filters flow <strong>from the "one" side to the "many" side</strong>
    — slicing by a product name filters the Sales table automatically.</p>
  </div>

  <div class="blog-callout blog-callout-info">
    <h2>🌟 Star Schema vs ❄️ Snowflake Schema</h2>
    <p>These are the two dominant patterns for organising a data model:</p>

    <div class="blog-schema-compare">
      <div class="blog-schema-card blog-schema-star">
        <div class="blog-schema-card-title">🌟 Star Schema</div>
        <div class="blog-schema-diagram">
          <div class="blog-schema-center">Sales<br/><span>Fact</span></div>
          <div class="blog-schema-dims">
            <div class="blog-schema-dim">Products</div>
            <div class="blog-schema-dim">Customers</div>
            <div class="blog-schema-dim">Dates</div>
            <div class="blog-schema-dim">Regions</div>
          </div>
        </div>
        <ul class="blog-schema-points">
          <li>One Fact table at the centre</li>
          <li>Dimension tables are denormalised (flat)</li>
          <li>Faster query performance</li>
          <li>Easier for Power BI to optimise</li>
          <li><strong>Recommended for most Power BI models</strong></li>
        </ul>
      </div>
      <div class="blog-schema-card blog-schema-snow">
        <div class="blog-schema-card-title">❄️ Snowflake Schema</div>
        <ul class="blog-schema-points" style="margin-top:14px">
          <li>Dimension tables are <strong>normalised</strong> — split into multiple related tables</li>
          <li>Example: Products → SubCategory → Category (three separate tables)</li>
          <li>Reduces data storage and redundancy</li>
          <li>More complex query paths — can slow Power BI down</li>
          <li>Often arrives this way from a data warehouse — you may need to flatten it in Power Query</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="blog-summary">
    <h2>⚠️ Golden Rules for Good Data Modeling</h2>
    <ul style="padding-left:18px;margin-top:10px">
      <li style="margin-bottom:9px">
        <strong>Always include a dedicated Date table</strong> — mark it as a
        Date table in Power BI so time intelligence functions like TOTALYTD,
        SAMEPERIODLASTYEAR, and DATEADD work correctly.
      </li>
      <li style="margin-bottom:9px">
        <strong>Prefer star schema over snowflake</strong> — flatten dimension
        tables in Power Query if they arrive normalised. Power BI performs
        better with fewer joins.
      </li>
      <li style="margin-bottom:9px">
        <strong>Remove unused columns</strong> — every column you import uses
        memory. Only load what you need for your reports.
      </li>
      <li style="margin-bottom:9px">
        <strong>Use surrogate keys</strong> — integer IDs are faster to join on
        than text strings or composite keys.
      </li>
      <li style="margin-bottom:9px">
        <strong>Avoid bidirectional relationships</strong> unless absolutely
        necessary — they can cause unexpected filter propagation and slow down
        your model.
      </li>
      <li style="margin-bottom:9px">
        <strong>One-to-many is your friend</strong> — design your model so
        filters flow cleanly from dimension tables into the fact table.
      </li>
    </ul>
  </div>

  <div class="blog-exercise">
    <h2>🧠 Hands-on Mini Task</h2>
    <p>Build a star schema from scratch in Power BI Desktop:</p>
    <ol class="blog-exercise-steps">
      <li>
        <strong>Create three tables</strong><br/>
        Use Enter Data to manually create <strong>Products</strong>,
        <strong>Sales</strong>, and <strong>Customers</strong> tables with
        at least 3 rows each and appropriate columns including ProductID
        and CustomerID keys.
      </li>
      <li>
        <strong>Define relationships</strong><br/>
        Go to Model View. Drag <code>Products.ProductID</code> to
        <code>Sales.ProductID</code>. Then drag
        <code>Customers.CustomerID</code> to <code>Sales.CustomerID</code>.
        Confirm both are one-to-many.
      </li>
      <li>
        <strong>Test with a slicer</strong><br/>
        Add a slicer for Customer Name on a report page. Add a table visual
        showing Sales Amount. Confirm that selecting a customer filters
        the sales correctly.
      </li>
      <li>
        <strong>Add a Date table</strong><br/>
        Use DAX to create a Date table:
        <code style="display:block;margin-top:6px;padding:8px;
                     background:var(--bg3);border-radius:6px;
                     font-size:12px;color:var(--accent)">
          DateTable = CALENDAR(DATE(2023,1,1), DATE(2025,12,31))
        </code>
        Mark it as a Date table from the Table Tools ribbon. Link it to
        Sales.OrderDate. Now your model is time-intelligence ready.
      </li>
    </ol>
  </div>

  <div class="blog-mslearn">
    <div class="blog-mslearn-title">📚 Go Deeper — Microsoft Learn Resources</div>
    <ul class="blog-mslearn-links">
      <li>
        <a href="https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-data-modeling"
           target="_blank" rel="noopener">
          Data Modeling in Power BI Desktop
        </a>
      </li>
      <li>
        <a href="https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-star-schema"
           target="_blank" rel="noopener">
          Understand Star Schema in Power BI
        </a>
      </li>
      <li>
        <a href="https://learn.microsoft.com/en-us/power-bi/guidance/modeling-star-snowflake"
           target="_blank" rel="noopener">
          Star vs Snowflake Schema — guidance
        </a>
      </li>
    </ul>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">Up Next in Chapter 4</span>
    <span class="blog-next-title">
      4.5 DAX Basics — creating measures, calculated columns, and calculated
      tables. Understanding the difference between a measure and a column,
      and why it matters for your reports.
    </span>
  </div>

</div>
    `
  },

  {
    id: 'power-bi-dax-basics',
    title: 'Chapter 4.5: DAX Basics in Power BI — The Language of Powerful Calculations',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'DAX', 'Measures', 'Calculated Columns', 'CALCULATE', 'Filter Context', 'SUM', 'DIVIDE'],
    published: '2025-04-24',
    updated: '2025-04-24',
    readTime: '9 min',
    excerpt: 'DAX (Data Analysis Expressions) is the formula language behind Power BI\'s brain. If you\'ve used Excel formulas, you already understand the idea — but DAX goes further. It works across related tables, respects filters in visuals, and recalculates automatically when a slicer is applied.',
    featured: false,
    content: `
<div class="blog-story">

  <p><strong>DAX</strong> (Data Analysis Expressions) is the formula language behind
  Power BI\'s brain. It allows you to create custom calculations, aggregations, and
  filters beyond the built-in visual options — making your reports smarter and more
  interactive.</p>

  <div class="blog-callout blog-callout-info">
    <h2>💬 Real-World Analogy — Excel on Steroids</h2>
    <p>If you\'ve used Excel formulas like <code>SUMIF()</code> or
    <code>VLOOKUP()</code>, you already understand the idea behind DAX. But DAX
    goes significantly further:</p>
    <div class="blog-dax-compare">
      <div class="blog-dax-compare-col">
        <div class="blog-dax-compare-header">📊 Excel Formulas</div>
        <ul class="blog-dax-compare-list">
          <li>Work on a single sheet or range</li>
          <li>Calculated at the cell level</li>
          <li>Static — don\'t respond to slicers</li>
          <li>No cross-table awareness</li>
        </ul>
      </div>
      <div class="blog-dax-compare-col blog-dax-compare-col-right">
        <div class="blog-dax-compare-header blog-dax-compare-header-right">⚡ DAX in Power BI</div>
        <ul class="blog-dax-compare-list">
          <li>Work across multiple related tables</li>
          <li>Recalculate dynamically per visual context</li>
          <li>Respond instantly to slicers and filters</li>
          <li>Understand model relationships automatically</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>🧮 The Three Types of DAX Expressions</h2>
    <p>DAX can produce three fundamentally different outputs. Choosing the right
    one is the first skill to master:</p>

    <div class="blog-dax-types">

      <div class="blog-dax-type-card blog-dax-type-column">
        <div class="blog-dax-type-header">
          <span class="blog-dax-type-icon">📌</span>
          <span class="blog-dax-type-name">Calculated Column</span>
        </div>
        <div class="blog-dax-type-body">
          <ul>
            <li>Stored permanently in the data model</li>
            <li>Calculated <strong>row-by-row</strong> at refresh time (Row Context)</li>
            <li>Increases model size — use sparingly</li>
            <li>Good for: categorisation, bucketing, combining fields</li>
          </ul>
          <div class="blog-dax-code-block">
            <div class="blog-dax-code-label">Example</div>
            <code>Profit = Sales[Total] - Sales[Cost]</code>
          </div>
        </div>
      </div>

      <div class="blog-dax-type-card blog-dax-type-measure">
        <div class="blog-dax-type-header">
          <span class="blog-dax-type-icon">📊</span>
          <span class="blog-dax-type-name">Measure ✅ Preferred</span>
        </div>
        <div class="blog-dax-type-body">
          <ul>
            <li>Calculated <strong>on the fly</strong> when a visual renders</li>
            <li>Responds dynamically to filters, slicers, and visual context (Filter Context)</li>
            <li>Memory-efficient — not stored in the model</li>
            <li>Good for: aggregations, KPIs, % of total, YTD</li>
          </ul>
          <div class="blog-dax-code-block">
            <div class="blog-dax-code-label">Example</div>
            <code>Total Sales = SUM(Sales[Amount])</code>
          </div>
        </div>
      </div>

      <div class="blog-dax-type-card blog-dax-type-table">
        <div class="blog-dax-type-header">
          <span class="blog-dax-type-icon">🧪</span>
          <span class="blog-dax-type-name">Calculated Table</span>
        </div>
        <div class="blog-dax-type-body">
          <ul>
            <li>Returns a <strong>full table</strong> instead of a value or column</li>
            <li>Stored in the model like a regular table</li>
            <li>Used for Date tables, bridge tables, virtual aggregations</li>
            <li>Good for: advanced modelling, helper tables</li>
          </ul>
          <div class="blog-dax-code-block">
            <div class="blog-dax-code-label">Example</div>
            <code>HighValueOrders = FILTER(Sales, Sales[Amount] &gt; 1000)</code>
          </div>
        </div>
      </div>

    </div>

    <blockquote class="blog-quote" style="margin-top:16px">
      "Measures are like answering a question on demand. Calculated Columns are
      like writing the answer down ahead of time."
    </blockquote>
  </div>

  <div class="blog-callout blog-callout-problem">
    <h2>🔁 Filter Context vs Row Context</h2>
    <p>This is the concept that trips up most beginners — and unlocks everything
    once understood.</p>

    <div class="blog-context-compare">
      <div class="blog-context-card blog-context-row">
        <div class="blog-context-header">Row Context 📌</div>
        <div class="blog-context-body">
          <p>Used by <strong>Calculated Columns</strong>. Power BI evaluates the
          formula once for each row in the table — like Excel dragging a formula
          down.</p>
          <div class="blog-dax-code-block">
            <code>Margin % = DIVIDE(Sales[Profit], Sales[Total])</code>
          </div>
          <p style="margin-top:8px;font-size:12px">This runs for every row
          individually — each row knows its own Sales[Profit] and Sales[Total].</p>
        </div>
      </div>
      <div class="blog-context-card blog-context-filter">
        <div class="blog-context-header">Filter Context 📊</div>
        <div class="blog-context-body">
          <p>Used by <strong>Measures</strong>. The filter context is the set of
          filters currently applied by visuals, slicers, and report-level
          filters.</p>
          <div class="blog-dax-code-block">
            <code>Total Sales = SUM(Sales[Amount])</code>
          </div>
          <p style="margin-top:8px;font-size:12px">When a slicer selects "North
          Region", this measure automatically sums only North Region sales.</p>
        </div>
      </div>
    </div>

    <div class="blog-fact-pill" style="margin-top:16px">
      <span class="blog-fact-label">💡 Key Insight</span>
      The <strong>CALCULATE()</strong> function is powerful because it lets you
      <em>modify</em> the filter context inside a measure — adding, removing, or
      replacing filters programmatically. It is the most important DAX function
      to master after the basic aggregations.
    </div>
  </div>

  <div class="blog-callout blog-callout-info">
    <h2>🔥 Most Used DAX Functions</h2>
    <p>These are the functions you will use in almost every Power BI project:</p>

    <div class="blog-dax-functions-grid">

      <div class="blog-dax-fn-card">
        <div class="blog-dax-fn-name"><code>SUM()</code> / <code>AVERAGE()</code> / <code>COUNT()</code></div>
        <div class="blog-dax-fn-cat">Aggregation</div>
        <div class="blog-dax-fn-desc">Basic aggregations that respond to filter context. The foundation of every measure.</div>
      </div>

      <div class="blog-dax-fn-card blog-dax-fn-highlight">
        <div class="blog-dax-fn-name"><code>CALCULATE()</code></div>
        <div class="blog-dax-fn-cat">Context Modification</div>
        <div class="blog-dax-fn-desc">The most powerful DAX function. Evaluates an expression in a modified filter context — used for YTD, % of Total, comparisons.</div>
      </div>

      <div class="blog-dax-fn-card">
        <div class="blog-dax-fn-name"><code>DIVIDE()</code></div>
        <div class="blog-dax-fn-cat">Safe Division</div>
        <div class="blog-dax-fn-desc">Divides two numbers safely — returns a custom result (like 0 or BLANK) instead of an error when dividing by zero.</div>
      </div>

      <div class="blog-dax-fn-card">
        <div class="blog-dax-fn-name"><code>FILTER()</code></div>
        <div class="blog-dax-fn-cat">Table Filtering</div>
        <div class="blog-dax-fn-desc">Returns a filtered subset of a table. Used inside CALCULATE() to define custom filter conditions.</div>
      </div>

      <div class="blog-dax-fn-card">
        <div class="blog-dax-fn-name"><code>IF()</code> / <code>SWITCH()</code></div>
        <div class="blog-dax-fn-cat">Conditional Logic</div>
        <div class="blog-dax-fn-desc">Returns different values based on a condition. SWITCH() is cleaner for multiple conditions than nested IF() statements.</div>
      </div>

      <div class="blog-dax-fn-card">
        <div class="blog-dax-fn-name"><code>RELATED()</code></div>
        <div class="blog-dax-fn-cat">Cross-table Lookup</div>
        <div class="blog-dax-fn-desc">Pulls a value from a related table via the model relationship. Used in calculated columns to bring in dimension attributes.</div>
      </div>

      <div class="blog-dax-fn-card">
        <div class="blog-dax-fn-name"><code>SUMX()</code> / <code>AVERAGEX()</code></div>
        <div class="blog-dax-fn-cat">Iterator Functions</div>
        <div class="blog-dax-fn-desc">Iterate row-by-row over a table and aggregate the result. Used when you need row-level calculation before summing.</div>
      </div>

      <div class="blog-dax-fn-card">
        <div class="blog-dax-fn-name"><code>TOTALYTD()</code> / <code>SAMEPERIODLASTYEAR()</code></div>
        <div class="blog-dax-fn-cat">Time Intelligence</div>
        <div class="blog-dax-fn-desc">Built-in time intelligence functions that require a marked Date table. Used for YTD, MTD, period comparisons.</div>
      </div>

    </div>
  </div>

  <div class="blog-callout blog-callout-spark">
    <h2>⚙️ Practical DAX Examples</h2>
    <p>Here are three measures you should build in every sales report:</p>

    <div class="blog-dax-examples">

      <div class="blog-dax-example">
        <div class="blog-dax-example-title">Total Sales</div>
        <div class="blog-dax-example-desc">Sum all sales — adjusts to any filter.</div>
        <div class="blog-dax-code-block">
          <code>Total Sales = SUM(Sales[Amount])</code>
        </div>
      </div>

      <div class="blog-dax-example">
        <div class="blog-dax-example-title">% of Total Sales</div>
        <div class="blog-dax-example-desc">Each row\'s sales as a percentage of the
        overall total — uses CALCULATE to remove filters.</div>
        <div class="blog-dax-code-block">
          <code>% of Total =
DIVIDE(
  SUM(Sales[Amount]),
  CALCULATE(SUM(Sales[Amount]), ALL(Sales))
)</code>
        </div>
      </div>

      <div class="blog-dax-example">
        <div class="blog-dax-example-title">Sales YTD</div>
        <div class="blog-dax-example-desc">Cumulative sales from the start of the
        year — requires a marked Date table.</div>
        <div class="blog-dax-code-block">
          <code>Sales YTD =
TOTALYTD(SUM(Sales[Amount]), Dates[Date])</code>
        </div>
      </div>

    </div>
  </div>

  <div class="blog-summary">
    <h2>⚠️ Golden Rules for Writing DAX</h2>
    <ul style="padding-left:18px;margin-top:10px">
      <li style="margin-bottom:8px">
        <strong>Use measures over calculated columns</strong> — measures are
        more efficient, flexible, and respond to filter context. Use calculated
        columns only when you need to store a value per row.
      </li>
      <li style="margin-bottom:8px">
        <strong>Use DIVIDE() not the / operator</strong> — DIVIDE(a, b) returns
        BLANK instead of an error when b is zero, keeping your visuals clean.
      </li>
      <li style="margin-bottom:8px">
        <strong>Name measures clearly</strong> — "Total Sales ₹" is better than
        "Measure1". Clear names make reports self-documenting.
      </li>
      <li style="margin-bottom:8px">
        <strong>Format your DAX</strong> — write one argument per line for
        complex formulas. Use daxformatter.com to auto-format.
      </li>
      <li style="margin-bottom:8px">
        <strong>Test incrementally</strong> — build complex DAX one function at
        a time, verifying the result at each stage before adding more complexity.
      </li>
      <li style="margin-bottom:8px">
        <strong>Master CALCULATE() early</strong> — it is the gateway to
        advanced DAX. Every YTD, comparison, and overriding filter measure
        uses it.
      </li>
    </ul>
  </div>

  <div class="blog-exercise">
    <h2>🧠 Try It Yourself — Three Starter Measures</h2>
    <p>Build these three measures in your Sales dataset to practise DAX:</p>
    <ol class="blog-exercise-steps">
      <li>
        <strong>Total Sales using SUM()</strong><br/>
        <div class="blog-dax-code-block" style="margin-top:6px">
          <code>Total Sales = SUM(Sales[Amount])</code>
        </div>
        Add this to a Card visual. Apply a Region slicer and confirm it
        updates dynamically.
      </li>
      <li>
        <strong>Profit Calculated Column</strong><br/>
        In the Sales table, create a new column:
        <div class="blog-dax-code-block" style="margin-top:6px">
          <code>Profit = Sales[Amount] - Sales[Cost]</code>
        </div>
        Notice it runs row-by-row and appears as a new column in the table.
      </li>
      <li>
        <strong>% of Total Sales using DIVIDE()</strong><br/>
        <div class="blog-dax-code-block" style="margin-top:6px">
          <code>% of Total =
DIVIDE(
  SUM(Sales[Amount]),
  CALCULATE(SUM(Sales[Amount]), ALL(Sales)),
  0
)</code>
        </div>
        Add this to a table visual alongside Product Name. Confirm each row
        shows that product\'s share of total sales as a percentage.
      </li>
    </ol>
  </div>

  <div class="blog-mslearn">
    <div class="blog-mslearn-title">📚 Go Deeper — Microsoft Learn Resources</div>
    <ul class="blog-mslearn-links">
      <li>
        <a href="https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-dax-overview"
           target="_blank" rel="noopener">
          Introduction to DAX in Power BI Desktop
        </a>
      </li>
      <li>
        <a href="https://learn.microsoft.com/en-us/dax/dax-function-reference"
           target="_blank" rel="noopener">
          DAX Function Reference — full index
        </a>
      </li>
      <li>
        <a href="https://learn.microsoft.com/en-us/power-bi/guidance/dax-overview"
           target="_blank" rel="noopener">
          DAX Best Practices for Power BI
        </a>
      </li>
    </ul>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">Up Next in Chapter 4</span>
    <span class="blog-next-title">
      4.6 Filters in Power BI — visual-level, page-level, and report-level
      filters, and how they interact with slicers and cross-filtering.
    </span>
  </div>

</div>
    `
  },

  {
    id: 'power-bi-learning-hub',
    title: 'Power BI Learning Hub — Your Complete Structured Learning Path',
    category: 'power-platform',
    topic: 'power-bi',
    tags: ['Power BI', 'PL-300', 'Learning Path', 'Microsoft Learn', 'Hands-on Labs', 'Beginner', 'Study Guide'],
    published: '2025-04-25',
    updated: '2025-04-25',
    readTime: '4 min',
    excerpt: 'Whether you\'re a complete beginner or brushing up for PL-300, this Learning Hub brings everything together in one place — Raushan\'s story-based blog series, official Microsoft Learn modules in the right order, and hands-on labs from Microsoft\'s own training platform.',
    featured: true,
    content: `
<div class="blog-story">

  <p>Whether you\'re a complete beginner or preparing for the
  <strong>PL-300: Power BI Data Analyst Associate</strong> certification, this
  Learning Hub brings everything together in one place — structured, sequenced,
  and ready to follow.</p>

  <p>Use this page as your <strong>home base</strong>. Start from the top and
  work your way down, or jump to the section most relevant to where you are
  right now.</p>

  <div class="blog-lhub-toc">
    <div class="blog-lhub-toc-title">What\'s in this Hub</div>
    <div class="blog-lhub-toc-items">
      <a href="#lhub-story" class="blog-lhub-toc-item">
        <span class="blog-lhub-toc-icon">🟠</span>
        <span>Story-Based Journey (Beginners)</span>
      </a>
      <a href="#lhub-mslearn" class="blog-lhub-toc-item">
        <span class="blog-lhub-toc-icon">🔵</span>
        <span>Official Microsoft Learn Modules</span>
      </a>
      <a href="#lhub-labs" class="blog-lhub-toc-item">
        <span class="blog-lhub-toc-icon">🧪</span>
        <span>Hands-on Labs</span>
      </a>
    </div>
  </div>

  <!-- ═══ SECTION 1: STORY JOURNEY ═══ -->
  <div class="blog-lhub-section" id="lhub-story">
    <div class="blog-lhub-section-header blog-lhub-orange">
      <span class="blog-lhub-section-icon">🟠</span>
      <div>
        <div class="blog-lhub-section-title">Not a Techie? Start Here</div>
        <div class="blog-lhub-section-sub">Story-Based Power BI Journey by Raushan Ranjan · 4 Chapters · Beginner Friendly</div>
      </div>
    </div>

    <div class="blog-lhub-accordion" id="acc-story">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-story-body\')">
        <span class="blog-lhub-acc-title">Your Story-Based Power BI Learning Journey</span>
        <span class="blog-lhub-acc-meta">Blog Series · 4 Chapters</span>
        <span class="blog-lhub-acc-chevron" id="acc-story-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-story-body">
        <ul class="blog-lhub-link-list">
          <li>
            <a href="/blog-post.html?id=power-bi-journey-begins">
              Chapter 1: Your Power BI Journey Begins
            </a>
          </li>
          <li>
            <a href="/blog-post.html?id=power-bi-first-dashboard">
              Chapter 2: The First Dashboard
            </a>
          </li>
          <li>
            <a href="/blog-post.html?id=power-bi-sharing-collaboration">
              Chapter 3: Sharing and Collaborating
            </a>
          </li>
          <li class="blog-lhub-parent">
            <div class="blog-lhub-sub-toggle"
                 onclick="toggleLHub(\'acc-ch4-body\')">
              <span class="blog-lhub-sub-arrow" id="acc-ch4-chev">▸</span>
              Chapter 4: Advanced Features
            </div>
            <ul class="blog-lhub-sub-list" id="acc-ch4-body">
              <li>
                <a href="/blog-post.html?id=power-bi-advanced-features-overview">
                  Chapter 4.0: Advanced Features Overview
                </a>
              </li>
              <li>
                <a href="/blog-post.html?id=power-bi-data-connectivity-modes">
                  Chapter 4.1: Data Connectivity Modes
                </a>
              </li>
              <li>
                <a href="/blog-post.html?id=power-bi-data-exploration-options">
                  Chapter 4.2: Data Exploration Options
                </a>
              </li>
              <li>
                <a href="/blog-post.html?id=power-bi-data-transformation">
                  Chapter 4.3: Data Transformation
                </a>
              </li>
              <li>
                <a href="/blog-post.html?id=power-bi-data-modeling">
                  Chapter 4.4: Data Modeling
                </a>
              </li>
              <li>
                <a href="/blog-post.html?id=power-bi-dax-basics">
                  Chapter 4.5: DAX Basics
                </a>
              </li>
              <li class="blog-lhub-coming">
                Chapter 4.6: Filters — <em>Coming Soon</em>
              </li>
              <li class="blog-lhub-coming">
                Chapter 4.7: Advanced Visualizations — <em>Coming Soon</em>
              </li>
              <li class="blog-lhub-coming">
                Chapter 4.8: Formatting — <em>Coming Soon</em>
              </li>
              <li class="blog-lhub-coming">
                Chapter 4.9: Layout Design — <em>Coming Soon</em>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- ═══ SECTION 2: MICROSOFT LEARN ═══ -->
  <div class="blog-lhub-section" id="lhub-mslearn">
    <div class="blog-lhub-section-header blog-lhub-blue">
      <span class="blog-lhub-section-icon">🔵</span>
      <div>
        <div class="blog-lhub-section-title">Official Microsoft Learn Modules</div>
        <div class="blog-lhub-section-sub">Follow in order for PL-300 exam preparation · 9 Learning Paths</div>
      </div>
    </div>

    <div class="blog-lhub-accordion">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-ms1-body\')">
        <span class="blog-lhub-acc-title">1. Introduction to Data &amp; Analytics</span>
        <span class="blog-lhub-acc-meta">Learning Path · 3 modules</span>
        <span class="blog-lhub-acc-chevron" id="acc-ms1-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-ms1-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/training/modules/understand-concepts-of-data-analytics/4-understand-types-of-data-data-storage" target="_blank" rel="noopener">Understand types of data and data storage</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/data-analytics-microsoft/3-roles" target="_blank" rel="noopener">Roles in data</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/data-analytics-microsoft/1-introduction" target="_blank" rel="noopener">Introduction to data analytics</a></li>
        </ul>
      </div>
    </div>

    <div class="blog-lhub-accordion">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-ms2-body\')">
        <span class="blog-lhub-acc-title">2. Types of Data Analysis &amp; Analyst Tasks</span>
        <span class="blog-lhub-acc-meta">Learning Path · 4 modules</span>
        <span class="blog-lhub-acc-chevron" id="acc-ms2-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-ms2-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/training/modules/data-analytics-microsoft/2-data-analysis" target="_blank" rel="noopener">Get started with Microsoft data analytics</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/understand-concepts-of-data-analytics/2-understand-data-analytics-types" target="_blank" rel="noopener">Understand data analytics types</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/understand-concepts-of-data-analytics/3-explore-data-analytics-process" target="_blank" rel="noopener">Explore the data analytics process</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/data-analytics-microsoft/4-tasks" target="_blank" rel="noopener">Tasks of a data analyst</a></li>
        </ul>
      </div>
    </div>

    <div class="blog-lhub-accordion">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-ms3-body\')">
        <span class="blog-lhub-acc-title">3. Power BI Components &amp; Building Blocks</span>
        <span class="blog-lhub-acc-meta">Learning Path · 3 modules</span>
        <span class="blog-lhub-acc-chevron" id="acc-ms3-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-ms3-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/1-introduction" target="_blank" rel="noopener">Introduction to Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/2-using-power-bi" target="_blank" rel="noopener">Capabilities of Microsoft Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/3-building-blocks-of-power-bi" target="_blank" rel="noopener">Building blocks of Power BI</a></li>
        </ul>
      </div>
    </div>

    <div class="blog-lhub-accordion">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-ms4-body\')">
        <span class="blog-lhub-acc-title">4. Prepare Data (Load, Explore, Transform)</span>
        <span class="blog-lhub-acc-meta">Learning Path · 8 modules</span>
        <span class="blog-lhub-acc-chevron" id="acc-ms4-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-ms4-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/training/modules/get-data/2-data-files" target="_blank" rel="noopener">Get data from files</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/get-data/3-relational-data" target="_blank" rel="noopener">Get data from relational data sources</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/get-data/4-nosql-database" target="_blank" rel="noopener">Get data from a NoSQL database</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/get-data/5-online-services" target="_blank" rel="noopener">Get data from online services</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/6-profile-data" target="_blank" rel="noopener">Explore / Profile data in Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/3-data-structure" target="_blank" rel="noopener">Simplify the data structure</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/4-column-data-types" target="_blank" rel="noopener">Evaluate and change column data types</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/5-combine-tables" target="_blank" rel="noopener">Combine multiple tables into a single table</a></li>
        </ul>
      </div>
    </div>

    <div class="blog-lhub-accordion">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-ms5-body\')">
        <span class="blog-lhub-acc-title">5. Model Data (Fact/Dim, Relationships, DAX)</span>
        <span class="blog-lhub-acc-meta">Learning Path · 10 modules</span>
        <span class="blog-lhub-acc-chevron" id="acc-ms5-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-ms5-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/kusto/concepts/fact-and-dimension-tables?view=microsoft-fabric" target="_blank" rel="noopener">Fact and dimension tables</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/1-overview-power-bi" target="_blank" rel="noopener">Introduction to modeling your data</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/2-how-to-manage-data-relationships" target="_blank" rel="noopener">How to manage your data relationships</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/4-optimize-data-models" target="_blank" rel="noopener">Optimize data models</a></li>
          <li><a href="https://learn.microsoft.com/en-us/dax/dax-overview" target="_blank" rel="noopener">DAX overview</a></li>
          <li><a href="https://learn.microsoft.com/en-us/dax/dax-syntax-reference" target="_blank" rel="noopener">DAX syntax reference</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/4b-create-calculated-measures" target="_blank" rel="noopener">Create measures</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/3-create-calculated-columns" target="_blank" rel="noopener">Create calculated columns</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/5-create-calculated-tables" target="_blank" rel="noopener">Create calculated tables</a></li>
          <li><a href="https://learn.microsoft.com/en-us/dax/dax-function-reference" target="_blank" rel="noopener">DAX function reference</a></li>
        </ul>
      </div>
    </div>

    <div class="blog-lhub-accordion">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-ms6-body\')">
        <span class="blog-lhub-acc-title">6. Visualize Data (Effective Visuals, Formatting, Layout)</span>
        <span class="blog-lhub-acc-meta">Learning Path · 6 modules</span>
        <span class="blog-lhub-acc-chevron" id="acc-ms6-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-ms6-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a" target="_blank" rel="noopener">Visualization types in Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/visuals/service-getting-started-with-color-formatting-and-axis-properties" target="_blank" rel="noopener">Get started formatting report visualizations</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/visuals/service-tips-and-tricks-for-color-formatting?tabs=powerbi-desktop" target="_blank" rel="noopener">Tips and tricks for formatting in reports</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-customize-title-background-and-legend" target="_blank" rel="noopener">Customize visualization titles, backgrounds, labels, and legends</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/visuals-in-power-bi/12-formatting" target="_blank" rel="noopener">Page layout and formatting</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/visuals-in-power-bi/4-create-slicers" target="_blank" rel="noopener">Create slicers</a></li>
        </ul>
      </div>
    </div>

    <div class="blog-lhub-accordion">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-ms7-body\')">
        <span class="blog-lhub-acc-title">7. Analyze with Power BI (AI, Advanced Visuals)</span>
        <span class="blog-lhub-acc-meta">Learning Path · 8 modules</span>
        <span class="blog-lhub-acc-chevron" id="acc-ms7-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-ms7-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/power-bi/consumer/end-user-analyze-visuals" target="_blank" rel="noopener">Use the Analyze feature to explain fluctuations</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-smart-narrative" target="_blank" rel="noopener">Create smart narrative summaries</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers?tabs=powerbi-desktop" target="_blank" rel="noopener">Create key influencers visualizations</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-decomposition-tree" target="_blank" rel="noopener">Create decomposition tree visuals</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-anomaly-detection" target="_blank" rel="noopener">Anomaly detection</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-ai-insights" target="_blank" rel="noopener">Use AI Insights in Power BI Desktop</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/consumer/end-user-q-and-a" target="_blank" rel="noopener">Q&amp;A for Power BI business users</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/consumer/end-user-q-and-a-tips" target="_blank" rel="noopener">Tips for asking questions in Power BI Q&amp;A</a></li>
        </ul>
      </div>
    </div>

    <div class="blog-lhub-accordion">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-ms8-body\')">
        <span class="blog-lhub-acc-title">8. Manage Power BI Environment (Workspaces, RLS)</span>
        <span class="blog-lhub-acc-meta">Learning Path · 9 modules</span>
        <span class="blog-lhub-acc-chevron" id="acc-ms8-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-ms8-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-new-workspaces" target="_blank" rel="noopener">Workspaces in Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-the-new-workspaces" target="_blank" rel="noopener">Create a workspace in Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces" target="_blank" rel="noopener">Roles in workspaces in Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-modern-usage-metrics" target="_blank" rel="noopener">Monitor usage metrics in the workspaces</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards" target="_blank" rel="noopener">Introduction to dashboards for Power BI designers</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-create" target="_blank" rel="noopener">Create a Power BI dashboard from a report</a></li>
          <li><a href="https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips" target="_blank" rel="noopener">Tips for designing a great Power BI dashboard</a></li>
          <li><a href="https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security" target="_blank" rel="noopener">Implement row-level security (RLS)</a></li>
          <li><a href="https://learn.microsoft.com/en-us/fabric/security/service-admin-object-level-security?tabs=table" target="_blank" rel="noopener">Implement object-level security (OLS)</a></li>
        </ul>
      </div>
    </div>

    <div class="blog-lhub-accordion">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-ms9-body\')">
        <span class="blog-lhub-acc-title">9. Additional Learning</span>
        <span class="blog-lhub-acc-meta">Learning Path · 4 modules</span>
        <span class="blog-lhub-acc-chevron" id="acc-ms9-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-ms9-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/training/modules/power-bi-copilot/" target="_blank" rel="noopener">Create interactive reports using Copilot for Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/7-advanced-editor" target="_blank" rel="noopener">Use Advanced Editor to modify M code</a></li>
          <li><a href="https://learn.microsoft.com/en-us/dax/dax-copilot" target="_blank" rel="noopener">Write DAX queries with Copilot</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/row-level-security-power-bi/" target="_blank" rel="noopener">Implement row-level security (RLS)</a></li>
        </ul>
      </div>
    </div>

  </div>

  <!-- ═══ SECTION 3: HANDS-ON LABS ═══ -->
  <div class="blog-lhub-section" id="lhub-labs">
    <div class="blog-lhub-section-header blog-lhub-green">
      <span class="blog-lhub-section-icon">🧪</span>
      <div>
        <div class="blog-lhub-section-title">Hands-on Labs — Practice What You Learn</div>
        <div class="blog-lhub-section-sub">Official Microsoft labs · Beginner to Intermediate</div>
      </div>
    </div>

    <div class="blog-lhub-accordion" id="acc-labs">
      <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-labs-body\')">
        <span class="blog-lhub-acc-title">Power BI Labs Collection</span>
        <span class="blog-lhub-acc-meta">Labs · Beginner to Intermediate</span>
        <span class="blog-lhub-acc-chevron" id="acc-labs-chev">▸</span>
      </div>
      <div class="blog-lhub-acc-body" id="acc-labs-body">
        <ul class="blog-lhub-link-list">
          <li><a href="https://learn.microsoft.com/en-us/training/modules/get-data/lab-prepare" target="_blank" rel="noopener">Load &amp; Explore Data in Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/8-lab" target="_blank" rel="noopener">Transform Data in Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/configure-semantic-model-power-bi/8-lab" target="_blank" rel="noopener">Modeling in Power BI (Relationships, Hierarchies, Quick Measures)</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/dax-power-bi-create-calculations/7-lab" target="_blank" rel="noopener">DAX Calculations (Measures, Columns, Tables)</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/dax-power-bi-time-intelligence/3b-lab" target="_blank" rel="noopener">Advanced DAX (Time Intelligence)</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/power-bi-visual-calculations/5-exercise" target="_blank" rel="noopener">Create visual calculations in Power BI Desktop</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/power-bi-effective-reports/9-lab" target="_blank" rel="noopener">Visualizing Reports in Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/power-bi-effective-user-experience/10-lab" target="_blank" rel="noopener">Enhancing Report UX</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/perform-analytics-power-bi/10-lab" target="_blank" rel="noopener">Analyzing Data in Power BI</a></li>
          <li><a href="https://learn.microsoft.com/en-us/training/modules/enforce-power-bi-model-security/4a-exercise-enforce-model-security" target="_blank" rel="noopener">Managing Security with RLS &amp; Workspaces</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="blog-summary" style="margin-top:32px">
    <h2>📌 How to Use This Hub</h2>
    <p><strong>Complete beginner?</strong> Start with the 🟠 Story-Based Journey —
    follow Raushan\'s path from zero to confident Power BI user before touching
    the official Microsoft modules.</p>
    <p><strong>Studying for PL-300?</strong> Work through the 🔵 Microsoft Learn
    paths in order (1 → 9), then reinforce every topic with the 🧪 hands-on labs
    from Microsoft\'s own training portal.</p>
    <p><strong>Already know the basics?</strong> Jump directly to the section you
    need — each accordion opens independently. Bookmark this page and return as
    you progress through your learning journey.</p>
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
  },

  {
  id: 'github-copilot-complete-guide-2026',
  title: 'GitHub Copilot — The Definitive Guide (2026): Every Feature, Plan, Setup & Integration',
  category: 'ai-cloud',
  topic: 'ai-ml',
  tags: ['GitHub Copilot', 'AI Coding', 'VS Code', 'Visual Studio', 'JetBrains', 'Agent Mode', 'AI Credits', 'Copilot Chat', 'Salesforce', 'GitHub Actions', 'Developer Tools', 'Copilot CLI'],
  published: '2026-05-11',
  updated: '2026-05-11',
  readTime: '18 min',
  excerpt: 'The most complete GitHub Copilot guide written for 2026 — covering every plan, every feature, the new AI Credits billing model, step-by-step setup for VS Code, Visual Studio, JetBrains, Xcode, Neovim, Salesforce and more, real use cases it solves, licensing, security, enterprise governance, and practical tips from MCT Raushan Ranjan.',
  featured: false,
  content: `
<div class="blog-story">

  <p class="blog-intro-quote">"I assigned a GitHub issue to Copilot before lunch. By the time I finished eating, there was a pull request waiting for my review."</p>

  <p>That is not an exaggeration. That is GitHub Copilot in 2026 — an AI that has evolved from a glorified autocomplete into a fully autonomous background developer. This guide covers everything: what it is, what it costs, how tokens and credits work, how to set it up in every major IDE and tool, every single feature explained plainly, real-world use cases, enterprise licensing, security, and practical tips that will make you a more productive developer from day one.</p>

  <!-- ════════════════════════════════════
       SECTION 1 — WHAT IS GITHUB COPILOT
  ════════════════════════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>🤖 What Is GitHub Copilot?</h2>
    <p>GitHub Copilot is an <strong>AI-powered coding assistant</strong> built by GitHub (a Microsoft subsidiary). It integrates directly into your development environment — IDE, terminal, browser, and mobile — and helps you write, review, and ship code faster.</p>
    <p>It was launched in 2021 as a technical preview powered by OpenAI Codex. By 2026 it has expanded into a multi-model, multi-agent platform. Here is the full timeline of how it grew:</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">2021</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Technical Preview</div>
          <div class="blog-pipeline-desc">Inline code completions powered by OpenAI Codex. Single-line and function-level suggestions only.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">2022</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">General Availability</div>
          <div class="blog-pipeline-desc">First commercially available AI coding assistant. Individual and Business plans launched.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">2023</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Copilot Chat Added</div>
          <div class="blog-pipeline-desc">Conversational AI added to the IDE. Enterprise plan launched with knowledge base and org-level governance.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">2024</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Multi-model + Agent Mode Preview</div>
          <div class="blog-pipeline-desc">Model choice introduced (GPT-4o, Claude, Gemini). Agent mode and coding agent previewed.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step blog-pipeline-step-done">
        <div class="blog-pipeline-num blog-pipeline-num-done">2026</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Full Agentic Platform</div>
          <div class="blog-pipeline-desc">Agent mode GA on VS Code and JetBrains. Cloud agent issue-to-PR. Agentic code review. MCP support. GitHub Spark. Usage-based AI Credits billing.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════════════════════════
       SECTION 2 — LICENSING
  ════════════════════════════════════ -->

  <div class="blog-callout blog-callout-problem">
    <h2>📋 Licensing — What You Need to Know Before You Start</h2>
    <p>GitHub Copilot is a <strong>commercial product</strong>. Here is how licensing works across different types of users:</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">👤</span>
        <div>
          <div class="blog-transform-name">Individual Developer</div>
          <div class="blog-transform-desc">Purchase directly from github.com/features/copilot. Licence is tied to your personal GitHub account. Managed in your GitHub billing settings.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🎓</span>
        <div>
          <div class="blog-transform-name">Students (Free)</div>
          <div class="blog-transform-desc">Verified students get Copilot Pro features at no cost via the GitHub Student Developer Pack. Apply at education.github.com. Must verify student status annually.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔓</span>
        <div>
          <div class="blog-transform-name">Open Source Maintainers (Free)</div>
          <div class="blog-transform-desc">Maintainers of popular open source projects may qualify for free Copilot access. Apply through GitHub's open source program.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🏢</span>
        <div>
          <div class="blog-transform-name">Organisation / Business</div>
          <div class="blog-transform-desc">Licences are purchased per seat and managed by org owners in GitHub org settings. Admins assign licences to specific members. Billing is per user per month.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🏛️</span>
        <div>
          <div class="blog-transform-name">Enterprise</div>
          <div class="blog-transform-desc">Licences are managed at the enterprise account level. Enterprise owners can allocate licences to specific organisations within the enterprise. Includes IP indemnity coverage.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">📜</span>
        <div>
          <div class="blog-transform-name">IP Indemnity (Enterprise only)</div>
          <div class="blog-transform-desc">GitHub offers intellectual property indemnification for Enterprise customers — meaning GitHub will defend you if a third party claims Copilot's output infringes their copyright. Not available on Free, Pro, or Business plans.</div>
        </div>
      </div>
    </div>

    <div class="blog-fact-pill blog-fact-pill-orange">
      <span class="blog-fact-label">⚠️ Data Training Policy</span>
      On <strong>Free and Pro</strong> plans, GitHub may use your prompts and suggestions to improve the model by default. You can opt out in Settings → Copilot → Policies. On <strong>Business and Enterprise</strong> plans, your code is <strong>never used for training</strong> — this is contractually guaranteed and enabled by default.
    </div>
  </div>

  <!-- ════════════════════════════════════
       SECTION 3 — PLANS & PRICING
  ════════════════════════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>💳 Plans &amp; Pricing — Full 2026 Breakdown</h2>
    <p>As of <strong>June 1, 2026</strong>, all GitHub Copilot plans move from counting "premium requests" to <strong>usage-based billing via AI Credits</strong>. The monthly price stays the same — but what you get per dollar is now metered by actual token consumption.</p>

    <div class="blog-comparison-table">
      <div class="blog-table-header">
        <div class="blog-table-cell blog-table-feature">Plan</div>
        <div class="blog-table-cell">Monthly Price</div>
        <div class="blog-table-cell">AI Credits Included</div>
        <div class="blog-table-cell">Best For</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Free</div>
        <div class="blog-table-cell">$0</div>
        <div class="blog-table-cell">Limited allowance</div>
        <div class="blog-table-cell">Evaluating Copilot</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Student</div>
        <div class="blog-table-cell">$0 (verified)</div>
        <div class="blog-table-cell">Pro-equivalent</div>
        <div class="blog-table-cell">Enrolled students</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Pro</div>
        <div class="blog-table-cell">$10 / month</div>
        <div class="blog-table-cell">$10 in AI Credits</div>
        <div class="blog-table-cell">Individual devs</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Pro+</div>
        <div class="blog-table-cell">$39 / month</div>
        <div class="blog-table-cell">$39 in AI Credits</div>
        <div class="blog-table-cell">Power users, agents</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Business</div>
        <div class="blog-table-cell">$19 / user / month</div>
        <div class="blog-table-cell">$19 per user (pooled)</div>
        <div class="blog-table-cell">Teams &amp; organisations</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Enterprise</div>
        <div class="blog-table-cell">$39 / user / month</div>
        <div class="blog-table-cell">$39 per user (pooled)</div>
        <div class="blog-table-cell">Large orgs, compliance</div>
      </div>
    </div>

    <p style="margin-top:16px;font-size:13px;color:var(--text-muted)">Annual plans are also available at a discount. Users on existing annual plans continue on request-based billing until their plan expires, then transition to AI Credits billing.</p>

    <div class="blog-fact-pill">
      <span class="blog-fact-label">📌 Key Differences — Pro vs Pro+</span>
      Pro+ gives <strong>5x more premium AI Credits</strong> than Pro, access to the most powerful models including Claude Opus 4.7, and exclusive access to <strong>GitHub Spark</strong> (the natural language app builder). If you use agent mode heavily or want the best models, Pro+ is worth it.
    </div>
  </div>

  <!-- ════════════════════════════════════
       SECTION 4 — TOKENS & AI CREDITS
  ════════════════════════════════════ -->

  <div class="blog-callout blog-callout-spark">
    <h2>🪙 Tokens &amp; AI Credits — How the Billing Actually Works</h2>
    <p>This is where most people get confused. Understanding it means no surprise bills and smarter usage of your plan.</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">→</span>
        <div>
          <div class="blog-transform-name">Input Tokens</div>
          <div class="blog-transform-desc">Everything sent TO the model — your code in the editor, your chat message, the files open in your workspace, conversation history, custom instructions, and any MCP context. Larger open files = more input tokens.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">←</span>
        <div>
          <div class="blog-transform-name">Output Tokens</div>
          <div class="blog-transform-desc">Everything the model generates BACK — code suggestions, chat responses, review comments, agent plans. Longer outputs cost more. Asking for a 500-line refactor costs more than a one-liner fix.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">♻️</span>
        <div>
          <div class="blog-transform-name">Cached Tokens</div>
          <div class="blog-transform-desc">Context the model reuses from earlier in the same session — billed at a significantly lower rate. Long agentic sessions become cheaper over time as the model reuses previously seen context.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔢</span>
        <div>
          <div class="blog-transform-name">Model Multipliers</div>
          <div class="blog-transform-desc">Not all tokens cost the same. GPT-4o Mini costs fewer credits per token than GPT-4o. Claude Opus costs more than Claude Sonnet. The model picker lets you choose cost vs capability for each task.</div>
        </div>
      </div>
    </div>

    <div class="blog-fact-pill blog-fact-pill-green">
      <span class="blog-fact-label">✅ What Is Always Unlimited (Never Consumes Credits)</span>
      <strong>Inline code completions</strong> and <strong>Next Edit Suggestions</strong> are unlimited on Pro and above — they never consume AI Credits, no matter how many you trigger. Credits are only consumed by: Copilot Chat, Agent Mode, Code Review, Cloud Agent, Copilot CLI, and PR Summaries.
    </div>

    <div class="blog-fact-pill blog-fact-pill-orange">
      <span class="blog-fact-label">⚠️ What Consumes the Most Credits</span>
      Agent Mode on complex multi-file tasks, Cloud Agent issue-to-PR workflows, and Agentic Code Review consume the most credits — especially when using premium models. Monitor usage in GitHub Billing settings. Business and Enterprise plans can set budget alerts and spending limits per user or team.
    </div>
  </div>

  <!-- ════════════════════════════════════
       SECTION 5 — ALL FEATURES
  ════════════════════════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>🔧 Every GitHub Copilot Feature — Fully Explained</h2>
    <p>Here is a complete reference of every feature available in GitHub Copilot as of May 2026, with a plain explanation of what it does, when to use it, and which plans include it.</p>

    <div class="blog-transform-grid">

      <div class="blog-transform-item">
        <span class="blog-transform-icon">⌨️</span>
        <div>
          <div class="blog-transform-name">Inline Code Completions</div>
          <div class="blog-transform-desc">As you type, Copilot suggests the next line or entire block. Press <strong>Tab</strong> to accept, <strong>Escape</strong> to dismiss, <strong>Alt+]</strong> to cycle alternatives. Reads your cursor context, open files, and comments. Available in all supported IDEs. Unlimited on Pro+. <em>Plans: All</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">➡️</span>
        <div>
          <div class="blog-transform-name">Next Edit Suggestions (NES)</div>
          <div class="blog-transform-desc">Predicts the LOCATION and CONTENT of your next edit based on what you just changed. Example: you rename a variable — NES jumps to every reference and suggests updating it. Available in VS Code, Xcode, Eclipse. Unlimited. <em>Plans: Pro+</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">💬</span>
        <div>
          <div class="blog-transform-name">Copilot Chat (IDE)</div>
          <div class="blog-transform-desc">A full conversational interface inside your IDE. Ask "Explain this function", "What does this regex do?", "Write a unit test for this class", "Why is this throwing a null reference?". Consumes AI Credits. Supports slash commands (/explain, /fix, /tests, /doc). <em>Plans: All (limited on Free)</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📍</span>
        <div>
          <div class="blog-transform-name">Inline Chat</div>
          <div class="blog-transform-desc">Press Ctrl+I / ⌘I in VS Code to open a chat input directly in the editor at your cursor. Describe a change and Copilot applies it in place — no panel switching. Best for targeted refactors, adding error handling, or explaining a specific block without leaving your code. <em>Plans: Pro+</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🤖</span>
        <div>
          <div class="blog-transform-name">Agent Mode (IDE)</div>
          <div class="blog-transform-desc">Switch the Chat panel from "Ask" to "Agent" and give Copilot a goal rather than a question. It plans the approach, determines which files to edit, makes the changes, runs terminal commands (npm install, pytest, dotnet build), reads the output, and self-corrects. GA on VS Code and JetBrains since March 2026. Consumes AI Credits heavily. <em>Plans: Pro+</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">☁️</span>
        <div>
          <div class="blog-transform-name">Cloud Agent / Coding Agent</div>
          <div class="blog-transform-desc">Assign any GitHub issue to Copilot and walk away. The agent works autonomously in an ephemeral GitHub Actions environment — researches the repository, creates an implementation plan, writes code, runs tests, runs security scans, and opens a draft pull request. You review and merge. Consumes both AI Credits and GitHub Actions minutes. <em>Plans: Pro, Pro+, Business, Enterprise</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔍</span>
        <div>
          <div class="blog-transform-name">AI Code Review</div>
          <div class="blog-transform-desc">Copilot reviews pull requests using FULL project context — not just the changed lines. It understands how the change relates to the rest of the codebase. Can suggest specific line fixes which you accept with one click. Can trigger the Cloud Agent to auto-fix its own suggestions and open a new PR. Runs on GitHub Actions. <em>Plans: Pro+, Business, Enterprise</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📝</span>
        <div>
          <div class="blog-transform-name">PR Summaries</div>
          <div class="blog-transform-desc">Auto-generates a structured description for a pull request — what changed, which files were affected, what the reviewer should focus on. Saves 5–10 minutes per PR. Editable before publishing. Available directly on github.com when creating or editing a PR. <em>Plans: Pro+, Business, Enterprise</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🖥️</span>
        <div>
          <div class="blog-transform-name">Copilot CLI</div>
          <div class="blog-transform-desc">AI in your terminal. Install via <code>gh extension install github/gh-copilot</code> then run <code>gh copilot suggest</code> or <code>gh copilot explain</code>. Describe a shell task in plain English, get a suggested command with explanation, confirm to execute. Works with bash, zsh, PowerShell, and fish. Also accessible from Windows Terminal Canary. <em>Plans: Pro+</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🛡️</span>
        <div>
          <div class="blog-transform-name">Security Scanning (in Cloud Agent)</div>
          <div class="blog-transform-desc">The Cloud Agent automatically runs code scanning (SAST), secret scanning, and dependency vulnerability checks on the code it generates — before opening the pull request. If it finds a committed API key or a known CVE in a dependency, it flags and fixes it. This is normally a GitHub Advanced Security feature — it is included free within the Cloud Agent. <em>Plans: Pro+, Business, Enterprise</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🧠</span>
        <div>
          <div class="blog-transform-name">Agentic Memory</div>
          <div class="blog-transform-desc">Copilot deduces and stores useful facts about a repository over time — preferred patterns, architecture decisions, naming conventions. This memory is used by the Code Review agent and Cloud Agent to generate more accurate, context-aware output on subsequent runs. Enable in repository settings. <em>Plans: Pro+</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">✨</span>
        <div>
          <div class="blog-transform-name">GitHub Spark</div>
          <div class="blog-transform-desc">Describe an application in plain English. Spark generates working code with a live preview. Open in a GitHub Codespace for full agent mode access. Example: "A web app where team members submit their weekly wins and a manager sees a summary dashboard." Produces a deployable prototype. <em>Plans: Pro+ and Enterprise only</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📄</span>
        <div>
          <div class="blog-transform-name">Custom Instructions</div>
          <div class="blog-transform-desc">Create <code>.github/copilot-instructions.md</code> in your repository. This file is automatically injected as context for all Copilot interactions in that repo — chat, agent mode, code review. Use it to enforce coding standards, preferred libraries, language requirements, or review rules without repeating them in every prompt. <em>Plans: All</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📁</span>
        <div>
          <div class="blog-transform-name">Prompt Files</div>
          <div class="blog-transform-desc">Reusable Markdown files stored in your workspace that act as pre-written prompts. You can reference them in chat instead of retyping complex instructions. Great for: standard code review checklists, test generation templates, documentation formats, or domain-specific prompting strategies. <em>Plans: Pro+</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔌</span>
        <div>
          <div class="blog-transform-name">MCP Server Integration</div>
          <div class="blog-transform-desc">Connect Copilot to external tools via Model Context Protocol. Supported in VS Code agent mode, the Cloud Agent, and Copilot Chat. Connect to: databases (query schema and rows), Jira (read issues), Linear (manage tasks), Slack (read conversation context), Figma (read design specs), and any custom MCP server you build. <em>Plans: Pro+, Business, Enterprise</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">👥</span>
        <div>
          <div class="blog-transform-name">Custom Agents</div>
          <div class="blog-transform-desc">Create specialised agent personas by placing a Markdown file under <code>.github/agents/</code>. Define the agent's purpose, tools it can access, MCP servers it connects to, and specific instructions. Examples: a "Performance Optimizer" agent that benchmarks before and after every change, a "Security Reviewer" that checks against your org's security checklist. Shareable across your entire org. <em>Plans: Enterprise</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔢</span>
        <div>
          <div class="blog-transform-name">Model Picker</div>
          <div class="blog-transform-desc">Choose which AI model powers each task. Options include GPT-4o, GPT-4o Mini, GPT-4.1, Claude Sonnet, Claude Opus 4.7, Gemini 1.5 Pro, and more. Different models have different cost-per-token rates. Use lightweight models for quick completions; use premium models for complex reasoning, large refactors, or architectural decisions. <em>Plans: Pro (subset), Pro+ (all models)</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📱</span>
        <div>
          <div class="blog-transform-name">GitHub Mobile</div>
          <div class="blog-transform-desc">Copilot Chat is available in the GitHub mobile app on iOS and Android. Review agent output, chat about code issues, and continue agent sessions started on desktop. Pro and Business also get Bing search and public repo code search in mobile. Enterprise gets organisation knowledge base access. <em>Plans: All</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📊</span>
        <div>
          <div class="blog-transform-name">Usage Analytics (Business/Enterprise)</div>
          <div class="blog-transform-desc">Organisation and enterprise owners get dashboards showing: who is using Copilot, which features they use most, acceptance rates for suggestions, AI Credit consumption per user, and team-level adoption metrics. Use this to identify underutilised licences, drive adoption, and justify ROI to leadership. <em>Plans: Business, Enterprise</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔒</span>
        <div>
          <div class="blog-transform-name">Policy Management (Business/Enterprise)</div>
          <div class="blog-transform-desc">Admins can control: which AI models users can access, whether Copilot can access the public internet, which MCP servers are allowed, whether the Chat panel is enabled, and which IDE extensions can use Copilot. Enforced at the org or enterprise level. <em>Plans: Business, Enterprise</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🗂️</span>
        <div>
          <div class="blog-transform-name">Knowledge Bases (Enterprise)</div>
          <div class="blog-transform-desc">Index your organisation's internal documentation, wikis, architecture docs, and code repositories into a searchable knowledge base. Copilot Chat (in GitHub.com) can reference this when answering questions — giving answers grounded in YOUR organisation's specific context rather than generic knowledge. <em>Plans: Enterprise only</em></div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔎</span>
        <div>
          <div class="blog-transform-name">Autofix (Code Security)</div>
          <div class="blog-transform-desc">When GitHub Advanced Security detects a vulnerability, Copilot Autofix generates a suggested code fix with an explanation of why the original code was vulnerable. Available on all public repositories for free. Included in GitHub Advanced Security for private repositories. <em>Plans: Free for public repos; Advanced Security for private</em></div>
        </div>
      </div>

    </div>
  </div>

  <!-- ════════════════════════════════════
       SECTION 6 — SETUP BY IDE
  ════════════════════════════════════ -->

  <div class="blog-callout blog-callout-spark">
    <h2>⚙️ Setup Guide — Every Supported IDE &amp; Surface</h2>
    <p>Here is the complete setup process for every environment where GitHub Copilot works.</p>

    <div class="blog-profiling-grid">

      <div class="blog-profiling-card">
        <div class="blog-profiling-card-header">
          <span class="blog-profiling-icon">📘</span>
          <span class="blog-profiling-title">VS Code (Recommended)</span>
        </div>
        <div class="blog-profiling-card-body">
          <ol style="padding-left:16px;margin:0;font-size:13px;color:var(--text-muted);line-height:1.7">
            <li>Open VS Code → Extensions panel (Ctrl+Shift+X)</li>
            <li>Search "GitHub Copilot" → Install the extension</li>
            <li>Search "GitHub Copilot Chat" → Install it too</li>
            <li>A GitHub sign-in prompt appears in the bottom bar → Click it → Authorise in browser</li>
            <li>The Copilot icon in the status bar turns green = active</li>
            <li>Open any file and start typing → suggestions appear in grey</li>
            <li>Open Chat with Ctrl+Alt+I (Windows/Linux) or ⌃⌘I (Mac)</li>
            <li>Run /init in Chat to create custom instructions for your project</li>
          </ol>
          <div class="blog-profiling-use-case">
            <span class="blog-profiling-use-label">Key Settings</span>
            VS Code settings → search "copilot" → configure: enable/disable per language, NES on/off, inline chat position, model preference.
          </div>
        </div>
      </div>

      <div class="blog-profiling-card">
        <div class="blog-profiling-card-header">
          <span class="blog-profiling-icon">🔷</span>
          <span class="blog-profiling-title">Visual Studio (2022+)</span>
        </div>
        <div class="blog-profiling-card-body">
          <ol style="padding-left:16px;margin:0;font-size:13px;color:var(--text-muted);line-height:1.7">
            <li>Open Visual Studio 2022 → Extensions menu → Manage Extensions</li>
            <li>Search "GitHub Copilot" in the Online tab → Download and Install</li>
            <li>Restart Visual Studio when prompted</li>
            <li>Go to Tools → Options → GitHub Copilot → Sign in with GitHub</li>
            <li>Copilot icon appears in the top-right toolbar</li>
            <li>Chat panel opens via View → GitHub Copilot Chat</li>
          </ol>
          <div class="blog-profiling-use-case">
            <span class="blog-profiling-use-label">Best For</span>
            C#, VB.NET, C++, F#, ASP.NET Core, WinForms, WPF, MAUI development.
          </div>
        </div>
      </div>

      <div class="blog-profiling-card">
        <div class="blog-profiling-card-header">
          <span class="blog-profiling-icon">🟣</span>
          <span class="blog-profiling-title">JetBrains IDEs</span>
        </div>
        <div class="blog-profiling-card-body">
          <ol style="padding-left:16px;margin:0;font-size:13px;color:var(--text-muted);line-height:1.7">
            <li>Open any JetBrains IDE (IntelliJ, PyCharm, WebStorm, GoLand, Rider, etc.)</li>
            <li>Go to Settings → Plugins → search "GitHub Copilot" → Install</li>
            <li>Restart the IDE</li>
            <li>A GitHub Copilot widget appears in the status bar → Click to sign in</li>
            <li>Authorise in browser → return to IDE</li>
            <li>Chat panel: right-click in editor → GitHub Copilot → Open Chat</li>
            <li>Agent mode: available in the Chat panel dropdown since March 2026</li>
          </ol>
          <div class="blog-profiling-use-case">
            <span class="blog-profiling-use-label">Agent Mode Note</span>
            Agent mode on JetBrains became generally available March 2026 — previously VS Code only.
          </div>
        </div>
      </div>

      <div class="blog-profiling-card">
        <div class="blog-profiling-card-header">
          <span class="blog-profiling-icon">🍎</span>
          <span class="blog-profiling-title">Xcode (macOS)</span>
        </div>
        <div class="blog-profiling-card-body">
          <ol style="padding-left:16px;margin:0;font-size:13px;color:var(--text-muted);line-height:1.7">
            <li>Download GitHub Copilot for Xcode from github.com/github/CopilotForXcode</li>
            <li>Open the downloaded app → follow the setup wizard</li>
            <li>Grant necessary macOS accessibility permissions when prompted</li>
            <li>Sign in with GitHub account</li>
            <li>Open Xcode → Editor menu → GitHub Copilot → Enable</li>
            <li>Suggestions appear as you type Swift or Objective-C code</li>
            <li>Chat and Code Review available from the Copilot menu</li>
          </ol>
          <div class="blog-profiling-use-case">
            <span class="blog-profiling-use-label">Requires</span>
            Version 0.41.0 or later for code review support. macOS 13 Ventura or later.
          </div>
        </div>
      </div>

      <div class="blog-profiling-card">
        <div class="blog-profiling-card-header">
          <span class="blog-profiling-icon">⬛</span>
          <span class="blog-profiling-title">Vim / Neovim</span>
        </div>
        <div class="blog-profiling-card-body">
          <ol style="padding-left:16px;margin:0;font-size:13px;color:var(--text-muted);line-height:1.7">
            <li>Ensure Node.js 18+ is installed on your system</li>
            <li>Install the plugin: using vim-plug add <code>Plug 'github/copilot.vim'</code> to your .vimrc or init.vim</li>
            <li>Run :PlugInstall in Vim</li>
            <li>Run :Copilot setup — follow the device activation flow in your browser</li>
            <li>Suggestions appear as ghost text — Tab to accept</li>
            <li>For Neovim: use the copilot.lua plugin for a native Lua integration with additional configuration options</li>
          </ol>
          <div class="blog-profiling-use-case">
            <span class="blog-profiling-use-label">Note</span>
            Chat is not available in Vim/Neovim. Inline completions only.
          </div>
        </div>
      </div>

      <div class="blog-profiling-card">
        <div class="blog-profiling-card-header">
          <span class="blog-profiling-icon">🗄️</span>
          <span class="blog-profiling-title">Azure Data Studio</span>
        </div>
        <div class="blog-profiling-card-body">
          <ol style="padding-left:16px;margin:0;font-size:13px;color:var(--text-muted);line-height:1.7">
            <li>Open Azure Data Studio → Extensions (Ctrl+Shift+X)</li>
            <li>Search "GitHub Copilot" → Install</li>
            <li>Sign in with GitHub when prompted</li>
            <li>Copilot provides SQL completions, T-SQL suggestions, and query explanations</li>
            <li>Chat available for asking data-related questions</li>
          </ol>
          <div class="blog-profiling-use-case">
            <span class="blog-profiling-use-label">Best For</span>
            SQL development, database querying, stored procedure writing, query optimisation.
          </div>
        </div>
      </div>

      <div class="blog-profiling-card blog-profiling-card-full">
        <div class="blog-profiling-card-header">
          <span class="blog-profiling-icon">☁️</span>
          <span class="blog-profiling-title">Salesforce (VS Code + Salesforce Extension Pack)</span>
        </div>
        <div class="blog-profiling-card-body">
          <p style="font-size:13px;color:var(--text-muted);margin-bottom:10px">GitHub Copilot integrates with Salesforce development via the Salesforce Extension Pack in VS Code. This is the recommended approach for Apex, LWC, and Visualforce development.</p>
          <ol style="padding-left:16px;margin:0;font-size:13px;color:var(--text-muted);line-height:1.7">
            <li>Install VS Code and set up the Salesforce Extension Pack (Salesforce CLI + Salesforce Extensions for VS Code)</li>
            <li>Install GitHub Copilot and GitHub Copilot Chat extensions in VS Code</li>
            <li>Sign in to both GitHub (for Copilot) and Salesforce org (for the extension pack) separately</li>
            <li>Copilot automatically understands Apex syntax, SOQL queries, Lightning Web Component structure, Aura Component syntax, and Visualforce markup</li>
            <li>Open any .cls (Apex) or .js/.html (LWC) file — completions appear as you type</li>
            <li>Use Chat to ask Salesforce-specific questions: "Write a trigger that prevents duplicate Account records based on phone number", "Create an LWC that displays a custom datatable with server-side pagination"</li>
            <li>Use Agent Mode for larger Salesforce tasks: "Create a complete LWC component with Apex controller, test class, and metadata XML for a case management dashboard"</li>
          </ol>
          <div class="blog-profiling-use-case">
            <span class="blog-profiling-use-label">Copilot Understands in Salesforce Context</span>
            Apex classes, triggers, test classes (@isTest), SOQL and SOSL queries, LWC (JS + HTML + CSS + XML), Aura components, Visualforce pages, Flow metadata, Custom Object schema (when files are open), Platform Event structures, and Salesforce CLI commands.
          </div>
          <div class="blog-fact-pill blog-fact-pill-orange" style="margin-top:12px">
            <span class="blog-fact-label">⚠️ Important Note for Salesforce Developers</span>
            Copilot does not have live access to your org's schema by default. For best results, keep the relevant metadata XML files and object definition files open in your VS Code workspace so Copilot can read them as context. You can also describe your object schema in your <code>.github/copilot-instructions.md</code> file.
          </div>
        </div>
      </div>

      <div class="blog-profiling-card blog-profiling-card-full">
        <div class="blog-profiling-card-header">
          <span class="blog-profiling-icon">💻</span>
          <span class="blog-profiling-title">Copilot CLI — Terminal Setup</span>
        </div>
        <div class="blog-profiling-card-body">
          <ol style="padding-left:16px;margin:0;font-size:13px;color:var(--text-muted);line-height:1.7">
            <li>Ensure GitHub CLI is installed: <code>gh --version</code> (install from cli.github.com if not)</li>
            <li>Authenticate: <code>gh auth login</code></li>
            <li>Install the Copilot extension: <code>gh extension install github/gh-copilot</code></li>
            <li>Verify: <code>gh copilot --help</code></li>
            <li>Suggest a command: <code>gh copilot suggest "list all running docker containers and show their port mappings"</code></li>
            <li>Explain a command: <code>gh copilot explain "awk '{print $2}' /var/log/nginx/access.log | sort | uniq -c | sort -rn | head -20"</code></li>
          </ol>
          <div class="blog-profiling-use-case">
            <span class="blog-profiling-use-label">Shell Alias Tip</span>
            Add <code>alias cops='gh copilot suggest'</code> and <code>alias cope='gh copilot explain'</code> to your ~/.bashrc or ~/.zshrc for faster access.
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- ════════════════════════════════════
       SECTION 7 — USE CASES
  ════════════════════════════════════ -->

  <div class="blog-callout blog-callout-problem">
    <h2>💡 Real-World Use Cases — Problems Copilot Solves</h2>
    <p>GitHub Copilot is not just for writing new code. Here are the real situations where it delivers the most value:</p>

    <div class="blog-transform-grid">

      <div class="blog-transform-item">
        <span class="blog-transform-icon">⚡</span>
        <div>
          <div class="blog-transform-name">Boilerplate Elimination</div>
          <div class="blog-transform-desc">Writing CRUD routes, form handlers, API clients, test setup, dependency injection registration, entity configurations, migration files, Dockerfile templates — Copilot writes all of this from a single comment or function signature. What used to take 20 minutes takes 30 seconds.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🐛</span>
        <div>
          <div class="blog-transform-name">Debugging Unfamiliar Code</div>
          <div class="blog-transform-desc">Select a confusing block of legacy code → right-click → Explain This. Copilot gives a plain English walkthrough of what it does, what data it expects, and what it returns. No more 45 minutes reading someone else's nested ternaries.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🧪</span>
        <div>
          <div class="blog-transform-name">Test Generation</div>
          <div class="blog-transform-desc">Select any function → /tests in Chat → Copilot generates unit tests covering happy path, edge cases, and error conditions. Works for Jest, xUnit, NUnit, pytest, JUnit, Mocha, and most popular frameworks. Dramatically increases test coverage with minimal effort.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📚</span>
        <div>
          <div class="blog-transform-name">Documentation Generation</div>
          <div class="blog-transform-desc">Select a function, class, or module → /doc in Chat → generates JSDoc, XML doc comments, or Markdown documentation. Consistent, complete documentation for every public API member without the pain of writing it manually.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔄</span>
        <div>
          <div class="blog-transform-name">Language and Framework Migration</div>
          <div class="blog-transform-desc">Migrating from JavaScript to TypeScript? jQuery to React? .NET Framework to .NET 8? Python 2 to 3? Give Copilot the old code in Chat and ask it to rewrite for the new target. Review the output — it handles most of the mechanical conversion work, leaving you to focus on business logic decisions.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📊</span>
        <div>
          <div class="blog-transform-name">SQL and Data Query Writing</div>
          <div class="blog-transform-desc">Describe what data you need in plain English inside a SQL comment: <code>-- get top 10 customers by revenue in Q1 2026 who placed more than 3 orders</code>. Copilot writes the query. Works for T-SQL, PostgreSQL, MySQL, SQLite, SOQL (Salesforce), KQL (Azure), and BigQuery.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔧</span>
        <div>
          <div class="blog-transform-name">Refactoring and Code Quality</div>
          <div class="blog-transform-desc">Select any code smell → Ask Copilot to refactor for readability, extract a method, apply a design pattern, reduce cyclomatic complexity, or convert to async/await. The Cloud Agent can run automated tests after each refactor to verify behaviour is preserved.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔐</span>
        <div>
          <div class="blog-transform-name">Security Vulnerability Remediation</div>
          <div class="blog-transform-desc">Copilot Autofix triggers whenever GitHub Advanced Security finds a vulnerability — it generates a suggested fix with a plain-language explanation of the root cause. Security alerts that used to sit unresolved for weeks get fixed in minutes.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">📦</span>
        <div>
          <div class="blog-transform-name">DevOps and Infrastructure as Code</div>
          <div class="blog-transform-desc">Writing GitHub Actions workflows, Kubernetes manifests, Terraform modules, Bicep templates, Docker Compose files, Ansible playbooks, or Azure Pipelines YAML. Describe the pipeline in plain English — Copilot writes the YAML. Use the CLI extension to troubleshoot pipeline failures from the terminal.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🌐</span>
        <div>
          <div class="blog-transform-name">API Integration</div>
          <div class="blog-transform-desc">Need to call a REST API? Describe what you need — "fetch the current weather for a given city using the OpenWeatherMap API, handle rate limiting and retry on 429" — and Copilot writes the complete client code with error handling, typed response models, and retry logic.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🧹</span>
        <div>
          <div class="blog-transform-name">Technical Debt Reduction</div>
          <div class="blog-transform-desc">Assign a "clean up X module" issue to the Cloud Agent. It analyses the module, makes targeted improvements (removing dead code, standardising naming, fixing obvious bugs, adding missing tests), reviews its own changes, and opens a PR. Systematic debt reduction without burning a sprint on it.</div>
        </div>
      </div>

      <div class="blog-transform-item">
        <span class="blog-transform-icon">🎓</span>
        <div>
          <div class="blog-transform-name">Learning New Technologies</div>
          <div class="blog-transform-desc">Starting with a technology you don't know? Ask Copilot in Chat: "I'm new to Rust. Show me how to read a CSV file, parse each row, and write matching records to a new file." It generates working code AND explains every step. Faster than documentation, more interactive than a tutorial.</div>
        </div>
      </div>

    </div>
  </div>

  <!-- ════════════════════════════════════
       SECTION 8 — SECURITY & ENTERPRISE
  ════════════════════════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>🔒 Security, Privacy &amp; Enterprise Governance</h2>
    <p>These are the questions enterprise teams ask before deploying Copilot at scale. Here are the factual answers.</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔏</span>
        <div>
          <div class="blog-transform-name">Is my code sent to the cloud?</div>
          <div class="blog-transform-desc">Yes — snippets of your code (the context window around your cursor) are sent to GitHub's servers to generate suggestions. On Business and Enterprise plans, this data is not stored after the response is returned and is never used for training. On Free and Pro, prompts may be retained — you can opt out in settings.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🚫</span>
        <div>
          <div class="blog-transform-name">Excluding sensitive files</div>
          <div class="blog-transform-desc">Create a <code>.copilotignore</code> file (same syntax as .gitignore) to prevent specific files from being sent as context. Use this for: environment config files, secrets files, proprietary algorithm implementations, PII-containing data files, and internal price lists or salary data.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">📋</span>
        <div>
          <div class="blog-transform-name">Audit Logs</div>
          <div class="blog-transform-desc">Enterprise plans provide detailed audit logs of all Copilot activity — who used which feature, when, which model, and what type of request. Essential for security compliance, SOC 2 audits, and internal governance reviews.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🌐</span>
        <div>
          <div class="blog-transform-name">Proxy and Firewall Considerations</div>
          <div class="blog-transform-desc">Copilot communicates with GitHub's servers over HTTPS (port 443). If your organisation uses a proxy or firewall, ensure <code>copilot.github.com</code>, <code>api.github.com</code>, and <code>default.exp-tas.com</code> are whitelisted. Certificate inspection proxies may require additional certificate trust configuration in the extension settings.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════════════════════════
       SECTION 9 — PRACTICAL TIPS
  ════════════════════════════════════ -->

  <div class="blog-callout blog-callout-spark">
    <h2>💡 Practical Tips from the Trainer's Desk</h2>
    <p>These are the tips I give to developers in enterprise Copilot training sessions. They make a measurable difference.</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">01</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Write the comment first, then the function signature</div>
          <div class="blog-pipeline-desc">Copilot gives dramatically better completions when it sees both a comment describing the intent AND the function signature. Example: <code>// validates that an email address is syntactically correct and not a disposable domain</code> then <code>function isValidEmail(email: string): boolean {</code> — Copilot will write the entire implementation correctly.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">·</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">02</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Keep relevant files open in your editor</div>
          <div class="blog-pipeline-desc">Copilot reads ALL open tabs as context — not just your current file. Before working on a feature, open the related model, interface, service, and test files. This gives Copilot the full picture and results in suggestions that match your actual codebase patterns rather than generic examples.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">·</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">03</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Use @workspace for codebase-wide questions in VS Code</div>
          <div class="blog-pipeline-desc">Prefix your chat message with <code>@workspace</code> to ask questions that span your entire project: "@workspace Where is the authentication middleware registered?", "@workspace Which services implement the INotificationService interface?", "@workspace Find all places where we directly query the database without using the repository pattern."</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">·</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">04</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Write detailed GitHub issues for the Cloud Agent</div>
          <div class="blog-pipeline-desc">The Cloud Agent is only as good as the issue you give it. A good issue includes: what the problem is, which files or modules are likely involved, what the expected behaviour should be, any constraints (must not break existing tests, must follow our coding standards), and acceptance criteria. A one-line issue produces a mediocre PR. A detailed issue produces a review-ready PR.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">·</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">05</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Use copilot-instructions.md to encode team standards</div>
          <div class="blog-pipeline-desc">Put your team's coding rules in .github/copilot-instructions.md so every developer on the team benefits automatically. Include: preferred libraries (use Zod not Joi for validation), naming conventions, error handling patterns, testing requirements (every new function needs a corresponding test), and anything reviewers consistently flag. This file is injected into every Copilot interaction in your repo.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">·</div>
      <div class="blog-pipeline-step blog-pipeline-step-done">
        <div class="blog-pipeline-num blog-pipeline-num-done">06</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Review Copilot output as you would any junior developer's code</div>
          <div class="blog-pipeline-desc">Copilot is fast, but it is not infallible. It can produce code that compiles but has subtle logic errors, uses deprecated APIs, or misses an edge case. Treat its output as a strong first draft from a smart junior developer — worth reviewing, not blindly accepting. Run your tests. Read the diff. The goal is to ship correct code faster, not to skip the review step.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════════════════════════
       SECTION 10 — SUMMARY
  ════════════════════════════════════ -->

  <div class="blog-summary">
    <h2>📌 Complete Summary — GitHub Copilot 2026</h2>
    <ul style="padding-left:18px;margin-top:10px">
      <li style="margin-bottom:9px"><strong>Licensing:</strong> Free (2,000 completions/mo), Pro ($10), Pro+ ($39), Business ($19/user), Enterprise ($39/user). Students and OSS maintainers may qualify for free Pro access.</li>
      <li style="margin-bottom:9px"><strong>AI Credits:</strong> 1 credit = $0.01. Charged for Chat, Agent Mode, Code Review, Cloud Agent, CLI, PR Summaries. Inline completions are always unlimited on paid plans.</li>
      <li style="margin-bottom:9px"><strong>Setup:</strong> Available in VS Code, Visual Studio, all JetBrains IDEs, Xcode, Vim/Neovim, Azure Data Studio, and via VS Code for Salesforce development. Install the extension → sign in → use.</li>
      <li style="margin-bottom:9px"><strong>Key Features:</strong> Inline completions, NES, Chat, Inline Chat, Agent Mode, Cloud Agent, Code Review, PR Summaries, CLI, Security Scanning, Agentic Memory, GitHub Spark, Custom Instructions, MCP, Model Picker, Knowledge Bases (Enterprise).</li>
      <li style="margin-bottom:9px"><strong>Top Use Cases:</strong> Boilerplate, tests, docs, debugging, refactoring, migration, SQL, security fixes, IaC, API clients, tech debt reduction, learning.</li>
      <li style="margin-bottom:9px"><strong>Security:</strong> Business/Enterprise — code never used for training, no retention after response, audit logs, policy controls, .copilotignore support, IP indemnity (Enterprise only).</li>
      <li style="margin-bottom:9px"><strong>Best Practice:</strong> Comment-first coding, open relevant files, @workspace in Chat, detailed issues for Cloud Agent, team standards in copilot-instructions.md, always review output.</li>
    </ul>
  </div>

  <!-- ════════════════════════════════════
       SECTION 11 — EXERCISE
  ════════════════════════════════════ -->

  <div class="blog-exercise">
    <h2>🧠 Hands-On Challenge — 7 Tasks to Master Copilot This Week</h2>
    <p>Complete one task per day and by the end of the week you will have used every major Copilot feature:</p>
    <ol class="blog-exercise-steps">
      <li>
        <strong>Day 1 — Setup &amp; First Completion</strong><br/>
        Install Copilot in VS Code. Write a comment describing a function you need. Let Copilot generate it. Test it. Verify it works as expected.
      </li>
      <li>
        <strong>Day 2 — Chat for Explanation &amp; Debugging</strong><br/>
        Find a piece of code in any project you have access to that you find hard to understand. Select it → /explain. Then introduce a deliberate bug → select the buggy code → /fix. Compare what Copilot suggests versus what the actual fix should be.
      </li>
      <li>
        <strong>Day 3 — Test Generation</strong><br/>
        Pick any function in your codebase that has no tests. Open it in VS Code. Use Copilot Chat → /tests. Review the generated tests, run them, and fix any that need adjustment. Aim for at least 80% pass rate without manual changes.
      </li>
      <li>
        <strong>Day 4 — Agent Mode Multi-File Task</strong><br/>
        Give Agent Mode a real task that spans multiple files — for example: "Add server-side pagination to the user list endpoint. The API should accept page and pageSize query parameters and return totalCount in the response. Update the controller, service, repository, and any affected tests."
      </li>
      <li>
        <strong>Day 5 — Copilot CLI</strong><br/>
        Install the CLI extension. Use it to: (1) suggest a command to find all files modified in the last 7 days, (2) explain a complex command you found online, (3) generate a one-liner to count lines of code by file extension in your project.
      </li>
      <li>
        <strong>Day 6 — Cloud Agent Issue-to-PR</strong><br/>
        Write a detailed GitHub issue for a small bug or small feature in any repository you own. Include: description, relevant file paths, expected behaviour, acceptance criteria. Assign it to Copilot. Review the resulting pull request.
      </li>
      <li>
        <strong>Day 7 — Custom Instructions</strong><br/>
        Create <code>.github/copilot-instructions.md</code> in your project. Add at least five team standards: preferred error handling pattern, naming conventions, required test coverage, preferred libraries, and code review rules. Then do any coding task and verify Copilot follows the instructions automatically.
      </li>
    </ol>
  </div>

  <!-- ════════════════════════════════════
       SECTION 12 — RESOURCES
  ════════════════════════════════════ -->

  <div class="blog-mslearn">
    <div class="blog-mslearn-title">📚 Official Resources</div>
    <ul class="blog-mslearn-links">
      <li><a href="https://github.com/features/copilot" target="_blank" rel="noopener">GitHub Copilot — Plans, pricing, and sign-up</a></li>
      <li><a href="https://docs.github.com/en/copilot/get-started/features" target="_blank" rel="noopener">All GitHub Copilot features — official documentation</a></li>
      <li><a href="https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing" target="_blank" rel="noopener">AI Credits and model pricing reference</a></li>
      <li><a href="https://code.visualstudio.com/docs/copilot/overview" target="_blank" rel="noopener">GitHub Copilot in VS Code — setup and usage guide</a></li>
      <li><a href="https://docs.github.com/copilot/concepts/agents/coding-agent/about-coding-agent" target="_blank" rel="noopener">GitHub Copilot Cloud Agent — concepts and usage</a></li>
      <li><a href="https://docs.github.com/en/copilot/concepts/agents/code-review" target="_blank" rel="noopener">GitHub Copilot Code Review — agentic capabilities</a></li>
      <li><a href="https://github.blog/ai-and-ml/github-copilot/whats-new-with-github-copilot-coding-agent/" target="_blank" rel="noopener">What is new with GitHub Copilot Coding Agent (2026)</a></li>
      <li><a href="https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot" target="_blank" rel="noopener">Custom instructions for GitHub Copilot</a></li>
      <li><a href="https://github.com/github/gh-copilot" target="_blank" rel="noopener">GitHub Copilot CLI extension</a></li>
      <li><a href="https://github.com/github/CopilotForXcode" target="_blank" rel="noopener">GitHub Copilot for Xcode</a></li>
    </ul>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">MCT Note</span>
    <span class="blog-next-title">
      Written by Raushan Ranjan, MCT and Senior Corporate Trainer at Koenig Solutions, from real enterprise GitHub Copilot training sessions. If your team is evaluating or rolling out Copilot at scale, feel free to reach out via LinkedIn or email.
    </span>
  </div>

</div>
  `
},

  {
  id: 'copilot-studio-raushan-smart-agent',
  title: 'Raushan and the Rise of the Smart Agent — A Story-Based Guide to Copilot Studio',
  category: 'power-platform',
  topic: 'copilot-studio',
  tags: ['Copilot Studio', 'PL-200', 'Power Virtual Agents', 'Chatbot', 'Microsoft Teams', 'Power Automate', 'NLU', 'AI Agent', 'Beginners'],
  published: '2026-05-12',
  updated: '2026-05-12',
  readTime: '14 min',
  excerpt: 'Raushan was the go-to person at his company for every employee query — password resets, leave applications, policy questions. Exhausted by repetition, he decided to build a smart agent using Microsoft Copilot Studio. Follow his journey from zero to a fully deployed Teams bot — covering agent fundamentals, topics, entities, variables, Power Automate integration, NLU training, testing, and deployment.',
  featured: false,
  content: `
<div class="blog-story">

  <p class="blog-intro-quote">"I need a virtual assistant who can take care of all these questions — day or night. I'll build one with Copilot Studio."</p>

  <p>Raushan, an IT professional at a mid-sized company, was always the go-to person for employee queries.
  "How do I reset my password?" "Can you help me apply for leave?" "Where is the project update form?"
  Day after day, the same questions. Tired but determined, he decided it was time to build something smarter.</p>

  <p>This is the story of how Raushan built <strong>SmartHelpBot</strong> — a fully deployed Microsoft Teams
  agent — starting from nothing. Every chapter below maps to a real concept in
  <strong>Microsoft Copilot Studio</strong> (formerly Power Virtual Agents).</p>

  <!-- ════════════════════════
       CHAPTER 1
  ════════════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>📖 Chapter 1: The Quest Begins — "Why Not Just Automate?"</h2>
    <p>Raushan sat at his desk, surrounded by an ever-growing backlog of Outlook notifications.
    Every message was an employee asking something he had answered a hundred times before.</p>
    <p>He opened his notebook and wrote down the ten most common questions he received every week:</p>
    <ul>
      <li>How do I reset my Active Directory password?</li>
      <li>What is the leave application process?</li>
      <li>Where do I submit an IT support ticket?</li>
      <li>What is the WFH policy?</li>
      <li>How do I connect to the VPN?</li>
      <li>Where is the onboarding document for new joiners?</li>
      <li>How do I request access to a shared drive?</li>
      <li>What are the office timings?</li>
      <li>Who do I contact for payroll queries?</li>
      <li>How do I book a meeting room?</li>
    </ul>
    <p>"Every single one of these," he said to himself, "could be answered by a bot. Instantly. At 2am if needed.
    Without me being involved."</p>
    <p>That was the moment Raushan decided to build <strong>SmartHelpBot</strong> using
    <strong>Microsoft Copilot Studio</strong>.</p>

    <div class="blog-fact-pill blog-fact-pill-green">
      <span class="blog-fact-label">💡 What Is Copilot Studio?</span>
      Microsoft Copilot Studio is a low-code platform for building, testing, and deploying
      conversational AI agents (chatbots). It combines a visual topic designer, built-in
      Natural Language Understanding, Generative AI grounding, Power Automate integration,
      and one-click publishing to Teams, websites, and other channels — all without writing
      traditional code.
    </div>
  </div>

  <!-- ════════════════════════
       CHAPTER 2
  ════════════════════════ -->

  <div class="blog-callout blog-callout-spark">
    <h2>🤖 Chapter 2: Giving Birth to an Agent — Agent Fundamentals</h2>
    <p>Raushan opened <strong>make.microsoft.com</strong>, navigated to Copilot Studio, and clicked
    <strong>Create a Copilot</strong>. A blank canvas appeared — waiting for him to give it life.</p>
    <p>He filled in the agent fundamentals:</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">①</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Name</div>
          <div class="blog-pipeline-desc">SmartHelpBot — something friendly but professional.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">②</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Icon</div>
          <div class="blog-pipeline-desc">A robot emoji 🤖 — instantly recognisable as a bot, not a human.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">③</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Description</div>
          <div class="blog-pipeline-desc">"Assists employees with IT support and HR queries 24/7."</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">④</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Instructions</div>
          <div class="blog-pipeline-desc">"Respond politely and concisely. Guide users step by step.
          If unsure, escalate to a human agent. Never make up answers."</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step blog-pipeline-step-done">
        <div class="blog-pipeline-num blog-pipeline-num-done">⑤</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Language</div>
          <div class="blog-pipeline-desc">English — with plans to add Hindi later for regional staff.</div>
        </div>
      </div>
    </div>

    <blockquote class="blog-quote">
      "The Instructions field is like your agent's personality and values — what it should do,
      what it should never do, and how it should treat users."
    </blockquote>

    <div class="blog-fact-pill">
      <span class="blog-fact-label">📌 Key Concept — Agent Fundamentals</span>
      The Name, Description, and Instructions together define your agent's identity. Instructions
      are particularly important — they act as a system prompt that guides the agent's behaviour
      across every conversation. Be specific: list what the bot should and should not do.
    </div>
  </div>

  <!-- ════════════════════════
       CHAPTER 3
  ════════════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>🧠 Chapter 3: Teaching the Bot to Think — Agent Capabilities &amp; Knowledge Sources</h2>
    <p>A bot without knowledge is a bot that can only say "I don't know." Raushan knew he needed
    to fill SmartHelpBot's brain with the right information from the right places.</p>
    <p>He navigated to the <strong>Knowledge</strong> section and connected three sources:</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🌐</span>
        <div>
          <div class="blog-transform-name">SharePoint Site</div>
          <div class="blog-transform-desc">Linked the company's internal HR SharePoint site. The bot
          can now search and retrieve answers from all HR pages — leave policies, benefits, onboarding guides.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">📄</span>
        <div>
          <div class="blog-transform-name">PDF Document</div>
          <div class="blog-transform-desc">Uploaded the IT Support Policy PDF. Any question about
          support procedures is now grounded in the official document — not guessed.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🗄️</span>
        <div>
          <div class="blog-transform-name">Dataverse</div>
          <div class="blog-transform-desc">Connected the IT ticket history table in Dataverse.
          The bot can look up whether an employee has an open ticket already before creating a new one.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🤖</span>
        <div>
          <div class="blog-transform-name">Generative AI (Enabled)</div>
          <div class="blog-transform-desc">With this on, the agent uses Azure OpenAI to answer questions
          even when no specific topic has been created — grounded to the connected knowledge sources only.</div>
        </div>
      </div>
    </div>

    <p>Raushan typed into the test panel: <em>"What is the leave policy?"</em></p>
    <p>SmartHelpBot responded with a clear, accurate answer — pulled directly from the HR SharePoint page
    and the uploaded PDF. No hallucination. No guessing.</p>

    <div class="blog-fact-pill blog-fact-pill-green">
      <span class="blog-fact-label">💡 Grounding vs Hallucination</span>
      When Generative AI is enabled WITH knowledge sources, the bot grounds its answers in those
      documents — it can only answer from what you gave it. Without knowledge sources, a generative
      bot might make things up. Always connect specific, trusted knowledge sources for enterprise use.
    </div>
  </div>

  <!-- ════════════════════════
       CHAPTER 4
  ════════════════════════ -->

  <div class="blog-callout blog-callout-problem">
    <h2>💬 Chapter 4: Let's Talk Topics — Structuring Conversations</h2>
    <p>"Generative AI can answer questions," Raushan thought, "but for guided workflows — like applying
    for leave — I need structured conversations. That's what Topics are for."</p>

    <p>He learned the anatomy of a Topic:</p>

    <div class="blog-comparison-table">
      <div class="blog-table-header">
        <div class="blog-table-cell blog-table-feature">Part</div>
        <div class="blog-table-cell">What It Does</div>
        <div class="blog-table-cell">Example</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Trigger Phrases</div>
        <div class="blog-table-cell">Phrases that activate the topic</div>
        <div class="blog-table-cell">"Apply for leave", "I need time off"</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Question Nodes</div>
        <div class="blog-table-cell">Bot asks the user for information</div>
        <div class="blog-table-cell">"What type of leave do you need?"</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Message Nodes</div>
        <div class="blog-table-cell">Bot sends a message or confirmation</div>
        <div class="blog-table-cell">"Your leave request has been submitted."</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Action Nodes</div>
        <div class="blog-table-cell">Bot calls a Power Automate flow</div>
        <div class="blog-table-cell">Logs request to SharePoint</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">System Topics</div>
        <div class="blog-table-cell">Built-in topics provided by Copilot Studio</div>
        <div class="blog-table-cell">Greeting, Fallback, End of Conversation</div>
      </div>
    </div>

    <p>Raushan built his first custom topic: <strong>"Apply for Leave"</strong></p>
    <ul>
      <li>Trigger phrases: "I want leave", "Need time off", "Apply for leave", "Take a day off"</li>
      <li>Question node 1: "What type of leave? (Sick / Casual / Maternity / Paternity)"</li>
      <li>Question node 2: "From which date?"</li>
      <li>Question node 3: "Until which date?"</li>
      <li>Message node: "Thank you! Your request for {leaveType} leave from {leaveStart} to {leaveEnd} has been submitted."</li>
      <li>Action node: Calls a Power Automate flow to log the request</li>
    </ul>

    <blockquote class="blog-quote">
      "Topics are the backbone of your agent. Think of each topic as one specific conversation
      the bot knows how to have — one skill in its repertoire."
    </blockquote>
  </div>

  <!-- ════════════════════════
       CHAPTER 5
  ════════════════════════ -->

  <div class="blog-callout blog-callout-spark">
    <h2>🔀 Chapter 5: Smart Conversations — Conditions &amp; Adaptive Cards</h2>
    <p>"What if someone wants sick leave versus casual leave?" Raushan realised. "The process is
    different. Sick leave needs a doctor's note. Casual leave just needs dates. The bot needs to branch."</p>
    <p>He added <strong>Condition Nodes</strong> to his Apply for Leave topic:</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">If</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Leave Type = "Sick"</div>
          <div class="blog-pipeline-desc">Ask: "Please upload a doctor's note or provide the certificate number."
          Then proceed with submission.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">Else If</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Leave Type = "Casual"</div>
          <div class="blog-pipeline-desc">Skip the doctor's note. Ask only for dates. Proceed to submission.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step blog-pipeline-step-done">
        <div class="blog-pipeline-num blog-pipeline-num-done">Else</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Any Other Leave Type</div>
          <div class="blog-pipeline-desc">Redirect to HR contact: "For this leave type, please contact HR directly at hr@company.com."</div>
        </div>
      </div>
    </div>

    <p>Then Raushan added an <strong>Adaptive Card</strong> to show a visual confirmation summary
    before submission — displaying leave type, dates, and a Confirm / Cancel button pair.
    Much better than a plain text message.</p>

    <div class="blog-fact-pill">
      <span class="blog-fact-label">📌 Adaptive Cards</span>
      Adaptive Cards are JSON-based UI components that render beautifully in Microsoft Teams,
      Outlook, and the web chat widget. Use them for: confirmation summaries, form-like inputs,
      approval buttons, and rich information displays. Design them at adaptivecards.io.
    </div>
  </div>

  <!-- ════════════════════════
       CHAPTER 6
  ════════════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>📦 Chapter 6: Knowing More — Variables &amp; Entities</h2>
    <p>"The bot collects data from the user," Raushan noted, "but how does it remember that data
    within the conversation and pass it to other nodes?" The answer was <strong>Variables</strong>
    and <strong>Entities</strong>.</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🏷️</span>
        <div>
          <div class="blog-transform-name">Prebuilt Entities</div>
          <div class="blog-transform-desc">Ready-made data recognisers built into Copilot Studio.
          Copilot Studio automatically extracts dates, times, emails, phone numbers, and numbers
          from user input — you don't need to build this logic yourself.
          Example: If user types "next Monday", the Date entity extracts the actual date value.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔧</span>
        <div>
          <div class="blog-transform-name">Custom Entities</div>
          <div class="blog-transform-desc">You define the allowed values.
          Raushan created a <strong>LeaveType</strong> entity with values:
          Sick, Casual, Maternity, Paternity, Unpaid.
          When the bot asks "What type of leave?", it matches the user's answer
          to one of these values — even if they say "sick day" instead of "sick".</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">📝</span>
        <div>
          <div class="blog-transform-name">Variables</div>
          <div class="blog-transform-desc">Storage containers within a conversation.
          Every question node stores its answer in a variable.
          Raushan's variables: <strong>userEmail</strong>, <strong>leaveType</strong>,
          <strong>leaveStart</strong>, <strong>leaveEnd</strong>.
          These are then passed to the Power Automate flow and used in confirmation messages.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🌍</span>
        <div>
          <div class="blog-transform-name">Global vs Topic Variables</div>
          <div class="blog-transform-desc">Topic variables exist only within a single topic conversation.
          Global variables persist across topics — useful when you need to pass the user's
          authenticated email from a Greeting topic to every other topic in the bot.</div>
        </div>
      </div>
    </div>

    <blockquote class="blog-quote">
      "Entities are the categories — what TYPE of thing you're capturing.
      Variables are the containers — WHERE you store what the user actually said."
    </blockquote>
  </div>

  <!-- ════════════════════════
       CHAPTER 7
  ════════════════════════ -->

  <div class="blog-callout blog-callout-problem">
    <h2>⚡ Chapter 7: Automation — When SmartHelpBot Takes Real Action</h2>
    <p>"A bot that only talks is just a fancy FAQ," Raushan said. "I want SmartHelpBot to actually
    <em>do things</em> — submit requests, send emails, create records."</p>
    <p>He built a <strong>Power Automate Flow</strong> triggered by Copilot Studio:</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">1</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Trigger: When Copilot Studio calls this flow</div>
          <div class="blog-pipeline-desc">Input parameters defined: userEmail (text), leaveType (text),
          leaveStart (date), leaveEnd (date).</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">2</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Create item in SharePoint List</div>
          <div class="blog-pipeline-desc">Writes a new row to the "Leave Requests" SharePoint list
          with all four input values plus the current timestamp.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">3</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Send an email to HR</div>
          <div class="blog-pipeline-desc">Uses the Office 365 connector to email
          hr@company.com with a formatted summary of the leave request.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step blog-pipeline-step-done">
        <div class="blog-pipeline-num blog-pipeline-num-done">4</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Return confirmation to the bot</div>
          <div class="blog-pipeline-desc">Flow returns a "requestId" output variable back to Copilot Studio,
          which the bot then displays: "Your request ID is REQ-0042. HR will respond within 24 hours."</div>
        </div>
      </div>
    </div>

    <p>He connected this flow in the topic using a <strong>Call an Action</strong> node,
    mapped the variables to the flow's input parameters, and captured the output requestId
    into a new variable to display to the user.</p>

    <div class="blog-fact-pill blog-fact-pill-green">
      <span class="blog-fact-label">💡 What Flows Can Do</span>
      Power Automate flows called from Copilot Studio can: create SharePoint items, send emails,
      create Teams messages, call REST APIs, write to Dataverse, trigger approvals, send SMS,
      update Excel rows, create calendar events, and much more — connecting your bot to
      virtually any system your organisation uses.
    </div>
  </div>

  <!-- ════════════════════════
       CHAPTER 8
  ════════════════════════ -->

  <div class="blog-callout blog-callout-spark">
    <h2>🗣️ Chapter 8: Making the Bot Learn — NLU &amp; Training</h2>
    <p>"Users never type exactly what I expect," Raushan discovered during early testing.
    Someone typed "wanna take off tomorrow" — the bot had no idea what to do with that.</p>
    <p>He dug into <strong>Natural Language Understanding (NLU)</strong>:</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🎯</span>
        <div>
          <div class="blog-transform-name">Add More Trigger Phrases</div>
          <div class="blog-transform-desc">For "Apply for Leave" he added:
          "wanna take off", "need a day off", "sick today", "apply sick leave",
          "want to go on leave", "holiday request", "day off tomorrow".
          The more variants, the better the NLU matching.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">📊</span>
        <div>
          <div class="blog-transform-name">Topic Priority</div>
          <div class="blog-transform-desc">When multiple topics might match a user's message,
          Copilot Studio uses priority to decide which one triggers first.
          Raushan set "Apply for Leave" higher priority than the Fallback topic.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🐛</span>
        <div>
          <div class="blog-transform-name">Debug Mode</div>
          <div class="blog-transform-desc">In the Test Panel, enabling Debug Mode shows exactly which topic
          was triggered for each user input, what the NLU confidence score was, and which
          variables were populated at each step. Essential for diagnosing misroutes.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🧪</span>
        <div>
          <div class="blog-transform-name">Generative Answers Fallback</div>
          <div class="blog-transform-desc">When no topic matches AND generative AI is enabled,
          the bot falls back to generative answers grounded in your knowledge sources.
          This dramatically reduces "I don't understand" responses for questions
          you haven't explicitly built topics for.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════════════
       CHAPTER 9
  ════════════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>🧪 Chapter 9: Testing the Bot Like a Pro</h2>
    <p>Before going live, Raushan spent a full day in the Test Panel — systematically
    breaking his own bot to find its weak spots.</p>
    <p>His testing checklist:</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">①</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Happy Path Testing</div>
          <div class="blog-pipeline-desc">Simulate the perfect user — types exactly the expected trigger phrase,
          answers every question correctly, completes the flow without interruption. Verify the SharePoint
          record is created and HR email is sent.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">②</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Variant Phrase Testing</div>
          <div class="blog-pipeline-desc">Try every trigger phrase variant and confirm the correct topic fires.
          Use Debug Mode to verify NLU confidence scores are above 0.8 for all primary phrases.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">③</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Edge Case Testing</div>
          <div class="blog-pipeline-desc">Test unexpected inputs: invalid dates ("February 30th"),
          gibberish text, empty responses, extremely long answers, special characters.
          Verify graceful handling in every case.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">④</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Fallback Testing</div>
          <div class="blog-pipeline-desc">Type something completely unrelated to any topic.
          Verify the Fallback topic triggers, provides a helpful message, and offers
          to escalate to a human agent if needed.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step blog-pipeline-step-done">
        <div class="blog-pipeline-num blog-pipeline-num-done">⑤</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Variable Value Inspection</div>
          <div class="blog-pipeline-desc">At each step, use the variable inspector in the Test Panel
          to confirm that leaveType, leaveStart, leaveEnd, and userEmail are storing the correct values
          before they are passed to the Power Automate flow.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════════════
       CHAPTER 10
  ════════════════════════ -->

  <div class="blog-callout blog-callout-problem">
    <h2>🚀 Chapter 10: Time to Shine — Deployment</h2>
    <p>SmartHelpBot had passed every test. Raushan was ready to share it with the world —
    or at least, his company's 300 employees.</p>
    <p>He clicked <strong>Publish</strong>. Then chose his deployment channels:</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">💜</span>
        <div>
          <div class="blog-transform-name">Microsoft Teams</div>
          <div class="blog-transform-desc">The primary channel. Raushan added the bot to Teams as an app.
          Employees could now chat with SmartHelpBot directly in Teams — the tool they already used
          all day. No new system to learn.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🌐</span>
        <div>
          <div class="blog-transform-name">Demo Website / Web Chat Widget</div>
          <div class="blog-transform-desc">Copilot Studio generated an embeddable chat widget
          that Raushan added to the company intranet homepage. Employees on the intranet
          could chat without opening Teams.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">👥</span>
        <div>
          <div class="blog-transform-name">Shared with Colleague</div>
          <div class="blog-transform-desc">Raushan gave his colleague Anika co-owner access
          so she could monitor conversations, add topics, and update knowledge sources
          without needing Raushan for every change.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">📊</span>
        <div>
          <div class="blog-transform-name">Analytics Dashboard</div>
          <div class="blog-transform-desc">After one week, Raushan checked the built-in analytics:
          247 conversations, 91% resolution rate without human escalation, most common topic:
          "Leave Application". Average conversation duration: 2 minutes 14 seconds.</div>
        </div>
      </div>
    </div>

    <blockquote class="blog-quote">
      "Week 1: 247 conversations handled by SmartHelpBot. That's 247 emails I didn't have to answer."
    </blockquote>
  </div>

  <!-- ════════════════════════
       FINAL CHAPTER
  ════════════════════════ -->

  <div class="blog-callout blog-callout-spark">
    <h2>🎓 Final Chapter: The Legacy of a Maker</h2>
    <p>Three months after SmartHelpBot went live, Raushan's manager called him into a meeting.</p>
    <p>"IT ticket volume is down 34%. HR query time is down 58%. What did you do?"</p>
    <p>Raushan explained the bot. His manager asked him to present it to the leadership team.
    A week later, Raushan was running a Copilot Studio workshop for five other teams —
    each of them building their own agents for their own domains.</p>
    <p>He became the company's <strong>Copilot Studio champion</strong>.</p>
    <p>And it started with one afternoon, one question, and one decision: <em>"Why not just automate this?"</em></p>
  </div>

  <!-- ════════════════════════
       SUMMARY
  ════════════════════════ -->

  <div class="blog-summary">
    <h2>📌 Complete Summary — What Raushan (and You) Learned</h2>
    <ul style="padding-left:18px;margin-top:10px">
      <li style="margin-bottom:8px"><strong>Agent Fundamentals:</strong> Name, description, instructions, language — define the bot's identity and behaviour before anything else.</li>
      <li style="margin-bottom:8px"><strong>Knowledge Sources:</strong> SharePoint, PDFs, Dataverse, websites — ground the agent in your organisation's actual information.</li>
      <li style="margin-bottom:8px"><strong>Generative AI:</strong> Enable it for open-ended questions; always pair with knowledge sources to prevent hallucination.</li>
      <li style="margin-bottom:8px"><strong>Topics:</strong> The structured conversations — trigger phrases activate them, question/message/action nodes build the flow.</li>
      <li style="margin-bottom:8px"><strong>Conditions:</strong> Branch conversations based on user answers — different paths for sick vs casual leave, new vs returning customer, etc.</li>
      <li style="margin-bottom:8px"><strong>Adaptive Cards:</strong> Rich UI components for Teams — use for confirmations, summaries, approval buttons.</li>
      <li style="margin-bottom:8px"><strong>Entities &amp; Variables:</strong> Entities define what type of data to capture; variables store the actual values and pass them between nodes and flows.</li>
      <li style="margin-bottom:8px"><strong>Power Automate:</strong> Connect the bot to real systems — SharePoint, email, Dataverse, Teams, REST APIs.</li>
      <li style="margin-bottom:8px"><strong>NLU &amp; Training:</strong> Add many trigger phrase variants; use debug mode; rely on generative fallback for uncovered questions.</li>
      <li style="margin-bottom:8px"><strong>Testing:</strong> Happy path, variant phrases, edge cases, fallback, variable inspection — test all five before publishing.</li>
      <li style="margin-bottom:8px"><strong>Deployment:</strong> Publish to Teams, web chat, or other channels; share ownership; monitor with built-in analytics.</li>
    </ul>
  </div>

  <!-- ════════════════════════
       EXERCISE
  ════════════════════════ -->

  <div class="blog-exercise">
    <h2>🧠 Build Your Own SmartHelpBot — 7-Day Challenge</h2>
    <p>Follow Raushan's path and build your own agent in one week:</p>
    <ol class="blog-exercise-steps">
      <li>
        <strong>Day 1 — Create your agent</strong><br/>
        Go to make.microsoft.com → Copilot Studio → Create. Set a name, description, and
        detailed instructions. Connect at least one knowledge source (a SharePoint page or a PDF).
        Test a question against it in the Test Panel.
      </li>
      <li>
        <strong>Day 2 — Build your first topic</strong><br/>
        Choose a repetitive query in your context (leave, IT support, course registration, product FAQ).
        Create a topic with at least 5 trigger phrase variants, 3 question nodes, and a confirmation message node.
      </li>
      <li>
        <strong>Day 3 — Add conditions</strong><br/>
        Add at least one condition branch to your topic. Different path based on the user's answer.
        Test both branches in the Test Panel.
      </li>
      <li>
        <strong>Day 4 — Add a Power Automate Flow</strong><br/>
        Build a flow that receives variables from your bot and writes a record somewhere —
        SharePoint list, Excel table, or Dataverse. Connect it via Call an Action. Test end-to-end.
      </li>
      <li>
        <strong>Day 5 — Create custom entities and global variables</strong><br/>
        Build a custom entity for a category relevant to your domain. Store the authenticated
        user's email in a global variable so every topic can access it.
      </li>
      <li>
        <strong>Day 6 — Test like Raushan</strong><br/>
        Run all five test types: happy path, variant phrases, edge cases, fallback, variable inspection.
        Fix every issue you find. Enable debug mode and verify NLU confidence scores.
      </li>
      <li>
        <strong>Day 7 — Publish and share</strong><br/>
        Publish to Teams or the demo website. Share access with one colleague.
        Check the analytics dashboard after 24 hours.
      </li>
    </ol>
  </div>

  <!-- ════════════════════════
       RESOURCES
  ════════════════════════ -->

  <div class="blog-mslearn">
    <div class="blog-mslearn-title">📚 Official Resources to Go Deeper</div>
    <ul class="blog-mslearn-links">
      <li><a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/fundamentals-what-is-copilot-studio" target="_blank" rel="noopener">What is Microsoft Copilot Studio — official overview</a></li>
      <li><a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-create-edit-topics" target="_blank" rel="noopener">Create and edit topics in Copilot Studio</a></li>
      <li><a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-entities-slot-filling" target="_blank" rel="noopener">Entities and slot filling in Copilot Studio</a></li>
      <li><a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/advanced-flow" target="_blank" rel="noopener">Use Power Automate flows with Copilot Studio</a></li>
      <li><a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-fundamentals-publish-channels" target="_blank" rel="noopener">Publish your agent to channels</a></li>
      <li><a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/analytics-summary" target="_blank" rel="noopener">Copilot Studio analytics and usage reporting</a></li>
      <li><a href="https://adaptivecards.io" target="_blank" rel="noopener">Adaptive Cards designer — adaptivecards.io</a></li>
    </ul>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">MCT Note</span>
    <span class="blog-next-title">
      Written by Raushan Ranjan, MCT and Senior Corporate Trainer at Koenig Solutions,
      from real Copilot Studio enterprise training sessions. This story-based format
      mirrors the actual PL-200 / PL-100 learning path concepts — feel free to use it
      as a study companion for the Microsoft certification.
    </span>
  </div>

</div>
  `
},

  {
  id: 'microsoft-copilot-data-privacy-security',
  title: 'How Microsoft Copilot & Azure Handle Your Data — What Really Happens When You Upload Confidential Files',
  category: 'ai-cloud',
  topic: 'azure-ai-studio',
  tags: ['Microsoft Copilot', 'Azure', 'Data Privacy', 'Security', 'Compliance', 'GDPR', 'Encryption', 'Copilot Studio', 'Enterprise', 'Data Governance'],
  published: '2026-05-12',
  updated: '2026-05-12',
  readTime: '10 min',
  excerpt: 'When you upload a confidential document to Microsoft Copilot or an Azure AI service, what actually happens to it? Does Microsoft store it? Train on it? Who can see it? This guide — written from Microsoft\'s public documentation and technical whitepapers — gives you an expert-level, plain-English answer to every data privacy question your legal and compliance team will ask.',
  featured: false,
  content: `
<div class="blog-story">

  <p class="blog-intro-quote">"We want to use Copilot — but our legal team wants to know exactly what happens to the data we upload."</p>

  <p>This is the question Raushan gets asked in almost every enterprise Copilot Studio and Azure AI training
  session. Developers and IT teams are excited about AI. Legal, compliance, and security teams are cautious —
  and rightfully so.</p>

  <p>This article summarises Microsoft's data handling policies — drawn from Microsoft's public documentation,
  privacy statements, and technical whitepapers as of mid-2026 — in plain English, with enough technical depth
  to satisfy a compliance review. Where policy details may change, always verify against your specific
  Microsoft contract and the latest documentation at <strong>microsoft.com/trust</strong>.</p>

  <!-- ════════════════
       SECTION 1
  ════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>🏛️ 1. Data Ownership, Control &amp; Isolation — The Foundation</h2>
    <p>These are the three principles that underpin everything else:</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">👤</span>
        <div>
          <div class="blog-transform-name">You Own Your Data</div>
          <div class="blog-transform-desc">The documents, files, images, and prompts you upload remain yours.
          Microsoft does not grant itself rights to your content beyond what is strictly necessary to
          deliver the service you requested. Your data is not Microsoft's data.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔒</span>
        <div>
          <div class="blog-transform-name">Tenant Isolation</div>
          <div class="blog-transform-desc">Your data stays within your Azure tenant and your
          organisation's environment — especially when using Azure OpenAI Service, Copilot for
          Microsoft 365, or Copilot Studio with enterprise licensing. It is never shared with
          other customers or mixed with another organisation's data.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🌍</span>
        <div>
          <div class="blog-transform-name">Geographic Residency</div>
          <div class="blog-transform-desc">Data is stored in the geographic region you select for
          your Azure tenant — your "home geo." For EU customers this means data stays in the EU.
          For customers with specific regulatory requirements (e.g. government, healthcare),
          sovereign cloud options are available.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════
       SECTION 2
  ════════════════ -->

  <div class="blog-callout blog-callout-problem">
    <h2>🚫 2. What Microsoft Does NOT Do — By Default</h2>
    <p>These are the protections that apply automatically — without you needing to configure anything —
    when using Microsoft's enterprise AI services:</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">✗</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Does NOT use your data to train foundation models</div>
          <div class="blog-pipeline-desc">Microsoft does not use your uploaded documents, files, images,
          prompts, or conversation contents to train GPT-4, GPT-4o, or any other foundation model —
          unless you explicitly opt in. This is a contractual commitment for enterprise customers,
          not just a policy statement.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">·</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">✗</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Does NOT share your content with other customers</div>
          <div class="blog-pipeline-desc">No other Microsoft customer can see your files, prompts,
          or AI outputs. Tenant isolation is enforced at the infrastructure level — it is not
          just a policy but an architectural guarantee.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">·</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">✗</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Does NOT make your uploaded files broadly available</div>
          <div class="blog-pipeline-desc">Files you upload are processed for your specific request
          and stored temporarily (typically up to 30 days for standard Copilot usage). They are not
          indexed, surfaced in search results, or made available to other users beyond those your
          own access controls permit.</div>
        </div>
      </div>
    </div>

    <div class="blog-fact-pill blog-fact-pill-green">
      <span class="blog-fact-label">✅ Key Contractual Difference</span>
      On <strong>Free and standard consumer plans</strong>, Microsoft's terms may allow use of some
      interaction data to improve services. On <strong>Business and Enterprise plans</strong> (Azure,
      Microsoft 365 E3/E5, Copilot for M365), the no-training guarantee is contractually binding.
      Always use enterprise licensing when handling confidential or regulated data.
    </div>
  </div>

  <!-- ════════════════
       SECTION 3
  ════════════════ -->

  <div class="blog-callout blog-callout-spark">
    <h2>📋 3. What Microsoft Does Do — Feature-by-Feature Breakdown</h2>
    <p>Different features have different storage and retention behaviours. Here is a plain-English
    breakdown of the most common scenarios:</p>

    <div class="blog-comparison-table">
      <div class="blog-table-header">
        <div class="blog-table-cell blog-table-feature">Feature / Scenario</div>
        <div class="blog-table-cell">What Is Stored</div>
        <div class="blog-table-cell">How Long</div>
        <div class="blog-table-cell">Who Can Access</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">File upload to Copilot Chat</div>
        <div class="blog-table-cell">The file + your conversation (questions and responses)</div>
        <div class="blog-table-cell">~30 days, then auto-deleted</div>
        <div class="blog-table-cell">Only you / your permitted users</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Azure OpenAI API calls</div>
        <div class="blog-table-cell">Prompts and completions are NOT stored by default</div>
        <div class="blog-table-cell">Not retained unless you enable logging</div>
        <div class="blog-table-cell">Only your Azure subscription</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Azure OpenAI Fine-tuning</div>
        <div class="blog-table-cell">Your training dataset, model weights</div>
        <div class="blog-table-cell">Until you delete it</div>
        <div class="blog-table-cell">Only your Azure resource</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Copilot Studio Knowledge Sources</div>
        <div class="blog-table-cell">Documents indexed for retrieval (embeddings)</div>
        <div class="blog-table-cell">Until you remove the source</div>
        <div class="blog-table-cell">All users of your agent (apply RLS carefully)</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Assistants API / Threads</div>
        <div class="blog-table-cell">Conversation threads and attached files</div>
        <div class="blog-table-cell">Until you delete — no automatic expiry</div>
        <div class="blog-table-cell">Your Azure OpenAI resource only</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Copilot for Microsoft 365</div>
        <div class="blog-table-cell">Grounded in your M365 data (Teams, SharePoint, Email)</div>
        <div class="blog-table-cell">Follows your existing M365 retention policies</div>
        <div class="blog-table-cell">Only what existing M365 permissions allow</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Abuse monitoring (all services)</div>
        <div class="blog-table-cell">Prompts/outputs temporarily reviewed if flagged</div>
        <div class="blog-table-cell">Brief — only for safety review purposes</div>
        <div class="blog-table-cell">Authorised Microsoft safety personnel only</div>
      </div>
    </div>
  </div>

  <!-- ════════════════
       SECTION 4
  ════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>📁 4. File Uploads, Images &amp; Sensitive Data — Specifics</h2>
    <p>When you upload a file or image to a Microsoft AI service, here is the precise sequence of events:</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">1</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Upload &amp; Encryption in Transit</div>
          <div class="blog-pipeline-desc">The file is transmitted over TLS 1.2+ encrypted connection.
          No data is sent in plain text. Microsoft's servers receive the encrypted payload.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">2</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Processing for Your Request</div>
          <div class="blog-pipeline-desc">The file is parsed and processed to respond to your specific
          prompt — summarise this, extract key points, answer questions about it. This processing
          happens within your tenant boundary.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">3</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Encrypted Storage at Rest</div>
          <div class="blog-pipeline-desc">The file is stored encrypted using AES-256. Microsoft manages
          the encryption keys by default. Enterprise customers can opt for Customer-Managed Keys (CMK)
          via Azure Key Vault for additional control — meaning Microsoft cannot decrypt your data
          without your key.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">4</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Retention &amp; Auto-Deletion</div>
          <div class="blog-pipeline-desc">For standard Copilot usage, uploaded files are automatically
          deleted after approximately 30 days. For Azure OpenAI features you explicitly configure
          (fine-tuning datasets, vector stores, threads), data persists until you delete it —
          you are responsible for lifecycle management.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step blog-pipeline-step-done">
        <div class="blog-pipeline-num blog-pipeline-num-done">5</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Biometric &amp; Special Category Data</div>
          <div class="blog-pipeline-desc">Images containing faces or biometric data require explicit
          consent for certain processing pipelines. If consent is not provided, those images are
          not passed into face recognition or biometric analysis pipelines. This is a GDPR requirement
          that Microsoft implements at the platform level.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════
       SECTION 5
  ════════════════ -->

  <div class="blog-callout blog-callout-problem">
    <h2>🔐 5. Security, Encryption &amp; Compliance — The Technical Layer</h2>
    <p>Here is what Microsoft implements at the infrastructure level across all enterprise AI services:</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔑</span>
        <div>
          <div class="blog-transform-name">Encryption at Rest</div>
          <div class="blog-transform-desc">All stored data is encrypted using AES-256.
          This applies to files, embeddings, conversation logs, training datasets,
          and any other persisted content — not just "sensitive" data.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔐</span>
        <div>
          <div class="blog-transform-name">Customer-Managed Keys (CMK)</div>
          <div class="blog-transform-desc">Available for Azure OpenAI Service and many M365 features.
          You bring your own encryption key via Azure Key Vault. Microsoft encrypts your data
          with YOUR key — meaning only you can authorise decryption.
          Even Microsoft support cannot access your data without your key.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🏷️</span>
        <div>
          <div class="blog-transform-name">Sensitivity Labels &amp; DLP</div>
          <div class="blog-transform-desc">Microsoft Purview sensitivity labels (Confidential,
          Highly Confidential, etc.) travel with documents — including into Copilot interactions.
          Data Loss Prevention (DLP) policies can prevent certain content from being processed
          by AI features at all.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">📋</span>
        <div>
          <div class="blog-transform-name">Audit Logs</div>
          <div class="blog-transform-desc">All Copilot interactions, file uploads, and data access
          events are logged in Microsoft Purview audit logs. Your security team can query who
          accessed what, when, and what AI features were used — with the same fidelity as
          other M365 audit events.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">👮</span>
        <div>
          <div class="blog-transform-name">Existing Permissions Respected</div>
          <div class="blog-transform-desc">Copilot and AI agents respect your existing access controls.
          If a SharePoint document is restricted to the Finance team, Copilot will not surface its
          content to users outside that group — even if those users try to query it directly.
          AI does not bypass your ACLs.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">✅</span>
        <div>
          <div class="blog-transform-name">Compliance Certifications</div>
          <div class="blog-transform-desc">Azure AI services hold certifications including:
          ISO 27001, ISO 27018, SOC 1, SOC 2, SOC 3, GDPR compliance, HIPAA BAA availability,
          FedRAMP (for US government), and many others. Full list at
          microsoft.com/trust/compliance.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════
       SECTION 6
  ════════════════ -->

  <div class="blog-callout blog-callout-spark">
    <h2>⏱️ 6. Retention, Deletion &amp; Lifecycle Management</h2>
    <p>Understanding what persists and what doesn't is critical for compliance. Here is the full picture:</p>

    <div class="blog-comparison-table">
      <div class="blog-table-header">
        <div class="blog-table-cell blog-table-feature">Data Type</div>
        <div class="blog-table-cell">Default Retention</div>
        <div class="blog-table-cell">How to Delete</div>
        <div class="blog-table-cell">Your Responsibility</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Copilot Chat uploads</div>
        <div class="blog-table-cell">~30 days auto-delete</div>
        <div class="blog-table-cell">Delete conversation in Copilot</div>
        <div class="blog-table-cell">Low — auto-managed</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Azure OpenAI prompts/completions</div>
        <div class="blog-table-cell">NOT retained by default</div>
        <div class="blog-table-cell">N/A — not stored</div>
        <div class="blog-table-cell">Ensure logging is disabled if not needed</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Fine-tuning training data</div>
        <div class="blog-table-cell">Until you delete</div>
        <div class="blog-table-cell">Azure Portal → delete resource</div>
        <div class="blog-table-cell">High — you manage lifecycle</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Copilot Studio knowledge sources</div>
        <div class="blog-table-cell">Until source is removed</div>
        <div class="blog-table-cell">Remove from Knowledge tab</div>
        <div class="blog-table-cell">High — review regularly</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Copilot for M365 interactions</div>
        <div class="blog-table-cell">Follows your M365 retention policies</div>
        <div class="blog-table-cell">Via Microsoft Purview eDiscovery</div>
        <div class="blog-table-cell">Set M365 retention policies correctly</div>
      </div>
      <div class="blog-table-row">
        <div class="blog-table-cell blog-table-feature">Abuse monitoring logs</div>
        <div class="blog-table-cell">Short-term — safety review only</div>
        <div class="blog-table-cell">Not user-deletable</div>
        <div class="blog-table-cell">Low — Microsoft-managed safety process</div>
      </div>
    </div>
  </div>

  <!-- ════════════════
       SECTION 7
  ════════════════ -->

  <div class="blog-callout blog-callout-info">
    <h2>⚠️ 7. Risks, Gaps &amp; Things to Watch Out For</h2>
    <p>Microsoft's architecture is strong — but "strong" is not the same as "zero risk."
    Here are the areas where things can go wrong, and what to do about each:</p>

    <div class="blog-transform-grid">
      <div class="blog-transform-item">
        <span class="blog-transform-icon">⚙️</span>
        <div>
          <div class="blog-transform-name">Misconfiguration Risk</div>
          <div class="blog-transform-desc"><strong>Risk:</strong> Many protections are only active
          if an admin configures them. Default settings may not match your compliance requirements.
          <strong>Mitigation:</strong> Review your tenant's Copilot settings, data retention policies,
          DLP rules, and sensitivity label configuration before rolling out to users.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔬</span>
        <div>
          <div class="blog-transform-name">Preview Features</div>
          <div class="blog-transform-desc"><strong>Risk:</strong> Features in public preview may not
          have the same data handling guarantees as GA features. SLAs and compliance certifications
          often do not cover preview features.
          <strong>Mitigation:</strong> Never use preview features for regulated or highly sensitive
          data. Wait for GA before using in production compliance-sensitive environments.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🌐</span>
        <div>
          <div class="blog-transform-name">Copilot Studio Knowledge Source Permissions</div>
          <div class="blog-transform-desc"><strong>Risk:</strong> Documents added as knowledge sources
          in Copilot Studio may be retrievable by ALL users of that agent — unless you implement
          Row-Level Security or restrict agent access to specific user groups.
          <strong>Mitigation:</strong> Only add documents all agent users are permitted to see.
          For sensitive content, create separate agents with restricted access.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">💾</span>
        <div>
          <div class="blog-transform-name">Session Memory / Context Window</div>
          <div class="blog-transform-desc"><strong>Risk:</strong> During an AI interaction, content
          from uploaded files passes through the model's context window — it is temporarily "in memory"
          during processing. This is necessary for the AI to work but means the content is processed,
          even if briefly.
          <strong>Mitigation:</strong> Understand this is equivalent to the data being processed by
          the service — which your enterprise contract covers. It is not stored beyond the session.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">🔄</span>
        <div>
          <div class="blog-transform-name">Opt-in vs Opt-out Confusion</div>
          <div class="blog-transform-desc"><strong>Risk:</strong> Some protections require tenant admins
          to actively configure them — they are not always on by default for all plan types.
          Non-enterprise plans have different defaults.
          <strong>Mitigation:</strong> Use enterprise licensing. Have your admin audit all
          Copilot-related settings in the Microsoft 365 Admin Center and Azure Portal quarterly.</div>
        </div>
      </div>
      <div class="blog-transform-item">
        <span class="blog-transform-icon">👁️</span>
        <div>
          <div class="blog-transform-name">Abuse Monitoring Human Review</div>
          <div class="blog-transform-desc"><strong>Risk:</strong> If content triggers Microsoft's
          abuse detection systems, authorised Microsoft personnel may review it. This is rare and
          done under strict controls — but it is not zero.
          <strong>Mitigation:</strong> Accept this as a feature (it protects against misuse),
          not a vulnerability. Ensure your contracts specify the conditions under which this can occur.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════
       SECTION 8
  ════════════════ -->

  <div class="blog-callout blog-callout-problem">
    <h2>🛠️ 8. What Your Organisation Should Configure — The Compliance Checklist</h2>
    <p>If your organisation is deploying Microsoft AI services with confidential data,
    here is the minimum configuration checklist your IT and compliance teams should complete:</p>

    <div class="blog-steps-pipeline">
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">①</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Verify Enterprise Licensing</div>
          <div class="blog-pipeline-desc">Confirm you are on a plan where the no-training guarantee
          applies contractually — Azure OpenAI Service, Microsoft 365 E3/E5, or Copilot for M365.
          Do not use free or standard consumer plans for confidential data.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">②</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Enable Sensitivity Labels &amp; DLP</div>
          <div class="blog-pipeline-desc">Configure Microsoft Purview sensitivity labels. Set DLP policies
          that prevent "Highly Confidential" labelled content from being processed by specific Copilot
          features if required by your policy.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">③</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Review Access Permissions</div>
          <div class="blog-pipeline-desc">Audit SharePoint, Teams, and OneDrive permissions.
          Copilot respects existing permissions — but if your permissions are too broad,
          Copilot will be too broad. Oversharing in M365 becomes oversharing in Copilot.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">④</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Enable Audit Logging</div>
          <div class="blog-pipeline-desc">Ensure Microsoft Purview audit logging is enabled
          for Copilot interactions. Define how long audit logs are retained (minimum 90 days
          recommended; 1 year for regulated industries).</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">⑤</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Set Data Retention &amp; Deletion Policies</div>
          <div class="blog-pipeline-desc">Configure M365 retention policies to align with your
          legal requirements. For Azure resources (fine-tuning data, vector stores), implement
          a regular deletion review — at minimum quarterly.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step">
        <div class="blog-pipeline-num">⑥</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Consider Customer-Managed Keys</div>
          <div class="blog-pipeline-desc">For highly regulated data (healthcare, financial, legal),
          implement Customer-Managed Keys via Azure Key Vault. This gives you exclusive control
          over your encryption keys and the ability to instantly revoke access to all your data.</div>
        </div>
      </div>
      <div class="blog-pipeline-connector">↓</div>
      <div class="blog-pipeline-step blog-pipeline-step-done">
        <div class="blog-pipeline-num blog-pipeline-num-done">⑦</div>
        <div class="blog-pipeline-content">
          <div class="blog-pipeline-title">Review Compliance Certifications for Your Industry</div>
          <div class="blog-pipeline-desc">Verify that Azure AI services hold the certifications
          required in your industry — HIPAA BAA for healthcare, FedRAMP for US government,
          ISO 27001 for general enterprise, PCI DSS for payment processing. Visit
          microsoft.com/trust/compliance for the current list.</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ════════════════
       SECTION 9
  ════════════════ -->

  <div class="blog-summary">
    <h2>📌 Conclusion — How Safe Is It for Confidential Data?</h2>
    <p>Microsoft offers enterprise-grade protections for data processed through Copilot and Azure AI services.
    The key protections — tenant isolation, no training on your data, AES-256 encryption, permission inheritance,
    audit logging, and compliance certifications — are real, contractual, and technically enforced.</p>
    <p><strong>With proper enterprise licensing and correct configuration, Microsoft's AI services are
    among the safer environments available for working with sensitive business data.</strong></p>
    <p>However, "safe architecture" does not eliminate risk from misconfiguration, overly broad permissions,
    use of preview features, or inadequate lifecycle management. The technology protects your data —
    your team's configuration determines whether those protections are actually active.</p>

    <div class="blog-fact-pill blog-fact-pill-orange" style="margin-top:16px">
      <span class="blog-fact-label">⚠️ The Most Common Risk in Practice</span>
      It is not Microsoft's architecture that exposes confidential data — it is overly broad SharePoint
      permissions combined with Copilot. If everyone in your organisation can read a "Confidential"
      SharePoint site, Copilot will summarise it for anyone who asks. Fix your permissions first,
      then deploy Copilot.
    </div>
  </div>

  <!-- ════════════════
       EXERCISE / CHECKLIST
  ════════════════ -->

  <div class="blog-exercise">
    <h2>🧠 Pre-Deployment Checklist — Share With Your Compliance Team</h2>
    <p>Before enabling Microsoft Copilot or Azure AI services for confidential data, verify each item:</p>
    <ol class="blog-exercise-steps">
      <li>
        <strong>Licensing confirmed</strong><br/>
        We are on an enterprise plan (Azure, M365 E3/E5, or Copilot for M365) where the
        no-training contractual guarantee applies. We are NOT using consumer or free plans
        for business data.
      </li>
      <li>
        <strong>Data residency verified</strong><br/>
        Our Azure tenant is configured for the correct geographic region. We have confirmed
        our data will not leave that region. For EU customers: GDPR-compliant region is selected.
      </li>
      <li>
        <strong>M365 permissions audited</strong><br/>
        We have reviewed SharePoint, Teams, and OneDrive sharing settings. No content labelled
        Confidential or above is broadly shared with "Everyone" or "All company."
      </li>
      <li>
        <strong>Sensitivity labels deployed</strong><br/>
        Microsoft Purview sensitivity labels are configured and applied to regulated content.
        DLP policies are in place to restrict AI processing of the most sensitive labels if required.
      </li>
      <li>
        <strong>Audit logging enabled</strong><br/>
        Copilot interaction audit logging is enabled in Microsoft Purview.
        Log retention period is set to meet our regulatory requirements.
      </li>
      <li>
        <strong>Lifecycle policies defined</strong><br/>
        We have documented retention and deletion schedules for: Copilot conversation history,
        any Azure OpenAI resources we operate (fine-tuning data, vector stores, threads),
        and Copilot Studio knowledge sources.
      </li>
      <li>
        <strong>Preview features excluded</strong><br/>
        We are not using any Microsoft AI features currently in public preview for production
        processing of regulated or highly confidential data.
      </li>
    </ol>
  </div>

  <!-- ════════════════
       RESOURCES
  ════════════════ -->

  <div class="blog-mslearn">
    <div class="blog-mslearn-title">📚 Official Reference Resources</div>
    <ul class="blog-mslearn-links">
      <li><a href="https://www.microsoft.com/en-us/trust-center" target="_blank" rel="noopener">Microsoft Trust Center — privacy, security, compliance overview</a></li>
      <li><a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/data-privacy" target="_blank" rel="noopener">Azure OpenAI Service — data privacy and security</a></li>
      <li><a href="https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy" target="_blank" rel="noopener">Microsoft 365 Copilot — privacy and data security</a></li>
      <li><a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/privacy-security" target="_blank" rel="noopener">Microsoft Copilot Studio — privacy and security</a></li>
      <li><a href="https://learn.microsoft.com/en-us/purview/sensitivity-labels" target="_blank" rel="noopener">Microsoft Purview sensitivity labels</a></li>
      <li><a href="https://learn.microsoft.com/en-us/azure/key-vault/general/overview" target="_blank" rel="noopener">Azure Key Vault — customer-managed keys overview</a></li>
      <li><a href="https://www.microsoft.com/en-us/trust-center/compliance/compliance-overview" target="_blank" rel="noopener">Microsoft compliance certifications — full list</a></li>
    </ul>
  </div>

  <div class="blog-next-chapter">
    <span class="blog-next-label">MCT Note</span>
    <span class="blog-next-title">
      Written by Raushan Ranjan, MCT and Senior Corporate Trainer at Koenig Solutions.
      This article is based on Microsoft's public documentation and policies as of mid-2026.
      For your specific regulatory requirements, always consult your Microsoft contract,
      your legal team, and verify against the latest documentation at microsoft.com/trust.
    </span>
  </div>

</div>
  `
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
