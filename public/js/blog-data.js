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
