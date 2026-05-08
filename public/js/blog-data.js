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
