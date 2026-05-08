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

    ${[
      {
        id: \'ms1\', title: \'1. Introduction to Data & Analytics\',
        meta: \'3 modules\', links: [
          [\'Understand types of data and data storage\', \'https://learn.microsoft.com/en-us/training/modules/understand-concepts-of-data-analytics/4-understand-types-of-data-data-storage\'],
          [\'Roles in data\', \'https://learn.microsoft.com/en-us/training/modules/data-analytics-microsoft/3-roles\'],
          [\'Introduction to data analytics\', \'https://learn.microsoft.com/en-us/training/modules/data-analytics-microsoft/1-introduction\']
        ]
      },
      {
        id: \'ms2\', title: \'2. Types of Data Analysis & Analyst Tasks\',
        meta: \'4 modules\', links: [
          [\'Get started with Microsoft data analytics\', \'https://learn.microsoft.com/en-us/training/modules/data-analytics-microsoft/2-data-analysis\'],
          [\'Understand data analytics types\', \'https://learn.microsoft.com/en-us/training/modules/understand-concepts-of-data-analytics/2-understand-data-analytics-types\'],
          [\'Explore the data analytics process\', \'https://learn.microsoft.com/en-us/training/modules/understand-concepts-of-data-analytics/3-explore-data-analytics-process\'],
          [\'Tasks of a data analyst\', \'https://learn.microsoft.com/en-us/training/modules/data-analytics-microsoft/4-tasks\']
        ]
      },
      {
        id: \'ms3\', title: \'3. Power BI Components & Building Blocks\',
        meta: \'3 modules\', links: [
          [\'Introduction to Power BI\', \'https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/1-introduction\'],
          [\'Capabilities of Microsoft Power BI\', \'https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/2-using-power-bi\'],
          [\'Building blocks of Power BI\', \'https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi/3-building-blocks-of-power-bi\']
        ]
      },
      {
        id: \'ms4\', title: \'4. Prepare Data (Load, Explore, Transform)\',
        meta: \'3 modules\', links: [
          [\'Get data from files\', \'https://learn.microsoft.com/en-us/training/modules/get-data/2-data-files\'],
          [\'Get data from relational data sources\', \'https://learn.microsoft.com/en-us/training/modules/get-data/3-relational-data\'],
          [\'Get data from a NoSQL database\', \'https://learn.microsoft.com/en-us/training/modules/get-data/4-nosql-database\'],
          [\'Get data from online services\', \'https://learn.microsoft.com/en-us/training/modules/get-data/5-online-services\'],
          [\'Explore / Profile data in Power BI\', \'https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/6-profile-data\'],
          [\'Simplify the data structure\', \'https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/3-data-structure\'],
          [\'Evaluate and change column data types\', \'https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/4-column-data-types\'],
          [\'Combine multiple tables into a single table\', \'https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/5-combine-tables\']
        ]
      },
      {
        id: \'ms5\', title: \'5. Model Data (Fact/Dim, Relationships, DAX)\',
        meta: \'5 modules\', links: [
          [\'Fact and dimension tables\', \'https://learn.microsoft.com/en-us/kusto/concepts/fact-and-dimension-tables?view=microsoft-fabric\'],
          [\'Introduction to modeling your data\', \'https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/1-overview-power-bi\'],
          [\'How to manage your data relationships\', \'https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/2-how-to-manage-data-relationships\'],
          [\'Optimize data models\', \'https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/4-optimize-data-models\'],
          [\'DAX overview\', \'https://learn.microsoft.com/en-us/dax/dax-overview\'],
          [\'DAX syntax reference\', \'https://learn.microsoft.com/en-us/dax/dax-syntax-reference\'],
          [\'Create measures\', \'https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/4b-create-calculated-measures\'],
          [\'Create calculated columns\', \'https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/3-create-calculated-columns\'],
          [\'Create calculated tables\', \'https://learn.microsoft.com/en-us/training/modules/model-data-power-bi/5-create-calculated-tables\'],
          [\'DAX function reference\', \'https://learn.microsoft.com/en-us/dax/dax-function-reference\']
        ]
      },
      {
        id: \'ms6\', title: \'6. Visualize Data (Effective Visuals, Formatting, Layout)\',
        meta: \'5 modules\', links: [
          [\'Visualization types in Power BI\', \'https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a\'],
          [\'Get started formatting report visualizations\', \'https://learn.microsoft.com/en-us/power-bi/visuals/service-getting-started-with-color-formatting-and-axis-properties\'],
          [\'Tips and tricks for formatting in reports\', \'https://learn.microsoft.com/en-us/power-bi/visuals/service-tips-and-tricks-for-color-formatting?tabs=powerbi-desktop\'],
          [\'Customize visualization titles, backgrounds, labels, and legends\', \'https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-customize-title-background-and-legend\'],
          [\'Page layout and formatting\', \'https://learn.microsoft.com/en-us/training/modules/visuals-in-power-bi/12-formatting\'],
          [\'Create slicers\', \'https://learn.microsoft.com/en-us/training/modules/visuals-in-power-bi/4-create-slicers\']
        ]
      },
      {
        id: \'ms7\', title: \'7. Analyze with Power BI (AI, Advanced Visuals)\',
        meta: \'8 modules\', links: [
          [\'Use the Analyze feature to explain fluctuations\', \'https://learn.microsoft.com/en-us/power-bi/consumer/end-user-analyze-visuals\'],
          [\'Create smart narrative summaries\', \'https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-smart-narrative\'],
          [\'Create key influencers visualizations\', \'https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-influencers?tabs=powerbi-desktop\'],
          [\'Create decomposition tree visuals\', \'https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-decomposition-tree\'],
          [\'Anomaly detection\', \'https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-anomaly-detection\'],
          [\'Use AI Insights in Power BI Desktop\', \'https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-ai-insights\'],
          [\'Q&A for Power BI business users\', \'https://learn.microsoft.com/en-us/power-bi/consumer/end-user-q-and-a\'],
          [\'Tips for asking questions in Power BI Q&A\', \'https://learn.microsoft.com/en-us/power-bi/consumer/end-user-q-and-a-tips\']
        ]
      },
      {
        id: \'ms8\', title: \'8. Manage Power BI Environment (Workspaces, Refresh, RLS)\',
        meta: \'10 modules\', links: [
          [\'Workspaces in Power BI\', \'https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-new-workspaces\'],
          [\'Create a workspace in Power BI\', \'https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-create-the-new-workspaces\'],
          [\'Roles in workspaces in Power BI\', \'https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces\'],
          [\'Monitor usage metrics in the workspaces\', \'https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-modern-usage-metrics\'],
          [\'Introduction to dashboards for Power BI designers\', \'https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards\'],
          [\'Create a Power BI dashboard from a report\', \'https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboard-create\'],
          [\'Tips for designing a great Power BI dashboard\', \'https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips\'],
          [\'Implement row-level security (RLS)\', \'https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security\'],
          [\'Implement object-level security (OLS)\', \'https://learn.microsoft.com/en-us/fabric/security/service-admin-object-level-security?tabs=table\']
        ]
      },
      {
        id: \'ms9\', title: \'9. Additional Learning\',
        meta: \'4 modules\', links: [
          [\'Create interactive reports using Copilot for Power BI\', \'https://learn.microsoft.com/en-us/training/modules/power-bi-copilot/\'],
          [\'Use Advanced Editor to modify M code\', \'https://learn.microsoft.com/en-us/training/modules/clean-data-power-bi/7-advanced-editor\'],
          [\'Write DAX queries with Copilot\', \'https://learn.microsoft.com/en-us/dax/dax-copilot\'],
          [\'Implement row-level security (RLS)\', \'https://learn.microsoft.com/en-us/training/modules/row-level-security-power-bi/\']
        ]
      }
    ].map(path => \`
      <div class="blog-lhub-accordion">
        <div class="blog-lhub-acc-header" onclick="toggleLHub(\'acc-\${path.id}-body\')">
          <span class="blog-lhub-acc-title">\${path.title}</span>
          <span class="blog-lhub-acc-meta">Learning Path · \${path.meta}</span>
          <span class="blog-lhub-acc-chevron" id="acc-\${path.id}-chev">▸</span>
        </div>
        <div class="blog-lhub-acc-body" id="acc-\${path.id}-body">
          <ul class="blog-lhub-link-list">
            \${path.links.map(([label, url]) =>
              \`<li><a href="\${url}" target="_blank" rel="noopener">\${label}</a></li>\`
            ).join(\'\')}
          </ul>
        </div>
      </div>\`
    ).join(\'\')}
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

<script>
function toggleLHub(bodyId) {
  const body = document.getElementById(bodyId);
  if (!body) return;
  const isOpen = body.classList.contains(\'lhub-open\');
  body.classList.toggle(\'lhub-open\', !isOpen);
  body.style.display = isOpen ? \'none\' : \'block\';
  const chevId = bodyId.replace(\'-body\', \'-chev\');
  const chev = document.getElementById(chevId);
  if (chev) chev.textContent = isOpen ? \'▸\' : \'▾\';
}
document.addEventListener(\'DOMContentLoaded\', () => {
  document.querySelectorAll(\'.blog-lhub-acc-body, .blog-lhub-sub-list\')
    .forEach(el => { el.style.display = \'none\'; });
});
<\/script>
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
