const COURSE_CATALOG = {

  // ── DEFAULT / FLAGSHIP ─────────────────────────────────────
  'default': {
    id: 'default',
    title: 'Intelligent Enterprise Development with .NET 8 & Azure AI',
    subtitle: 'Intelligent Enterprise Dev · .NET 8 & Azure AI',
    description: 'A zero-to-production learning path. Start with zero C# knowledge, build solid fundamentals, then develop real Blazor applications powered by Azure AI.',
    stats: ['54 lessons', '5 phases', 'Zero to Azure AI'],
    loadingMessages: [
      'Thinking like Raushan — why before how…',
      'Brewing the code example…',
      'Raushan is compiling concepts for you…',
      'Almost there — Raushan-style deep dive loading…'
    ],
    labStyle: 'code',
    phases: [
      {
        label: 'Phase 1', title: 'C# Foundations',
        colorClass: 'p1', dot: '#2d7a4f',
        lessons: [
          'Basic Structure of a C# Program',
          'Data Types in C#',
          'Variables in C#',
          'Operators in C#',
          'Control Flow — If, Else, Switch',
          'Loops — For, While, Do-While',
          'Functions in C#',
          'String Handling in C#',
          'User Input and Output in C#',
          'Type Casting in C#',
          'File Handling in C#'
        ]
      },
      {
        label: 'Phase 2', title: 'OOP — The Blazor Way',
        colorClass: 'p2', dot: '#7c4b9e',
        lessons: [
          'Classes and Objects in C#',
          'Constructors in C#',
          'Properties in C#',
          'Encapsulation in C#',
          'Inheritance in C#',
          'Interfaces in C# — The Blazor Contract',
          'Abstract Classes in C#',
          'Polymorphism in C#',
          'Static vs Instance Members',
          'Exception Handling in C#',
          'Delegates and Lambda Expressions'
        ]
      },
      {
        label: 'Phase 3', title: 'Data Access with EF Core',
        colorClass: 'p3', dot: '#b5860d',
        lessons: [
          'Why EF Core? ORM Concepts and Architecture',
          'Setting Up EF Core in a .NET 8 Project',
          'DbContext and DbSet — The Core Abstractions',
          'Code-First Migrations',
          'Defining Entities and Relationships',
          'Querying with LINQ and EF Core',
          'CRUD Operations with EF Core',
          'Repository Pattern with EF Core'
        ]
      },
      {
        label: 'Phase 4', title: 'Blazor with .NET 8',
        colorClass: 'p4', dot: '#c75c1a',
        lessons: [
          'What is Blazor? Server vs WebAssembly vs Auto',
          'Setting Up a .NET 8 Blazor Project',
          'Your First Blazor Component',
          'Data Binding in Blazor',
          'Event Handling in Blazor',
          'Component Parameters and Cascading Values',
          'Forms and Validation in Blazor',
          'Dependency Injection in Blazor',
          'Calling REST APIs from Blazor with HttpClient',
          'State Management in Blazor',
          'Routing in Blazor',
          'Layouts and Navigation in Blazor',
          'Lifecycle Methods — OnInitialized, OnParametersSet',
          'JavaScript Interop in Blazor'
        ]
      },
      {
        label: 'Phase 5', title: 'Azure AI Integration',
        colorClass: 'p5', dot: '#1c5bde',
        lessons: [
          'Introduction to Azure AI Services',
          'Azure OpenAI Service — Key Concepts',
          'Connecting Blazor to Azure OpenAI GPT-4o',
          'Building an AI Chat UI in Blazor',
          'Streaming Responses with Server-Sent Events',
          'Prompt Engineering for Enterprise Apps',
          'Azure AI Search — Semantic Search in Blazor',
          'Azure Cognitive Services — Vision and Language',
          'Secure API Key Management in Azure',
          'Deploying Blazor App to Azure App Service',
          'Putting It All Together — Intelligent Enterprise App'
        ]
      }
    ],
    labs: {
      handson: [
        {
          id: 'lab-01', code: 'Lab 01',
          title: 'Hello Blazor — Your First Component',
          phase: 'Phase 4 — Blazor with .NET 8',
          duration: '45 min', difficulty: 'Beginner',
          objective: 'Create a .NET 8 Blazor project from scratch, build your first component with data binding, and run it in the browser.',
          prereqs: ['Basic Structure of a C# Program', 'Variables in C#', 'Functions in C#'],
          deliverable: 'A running Blazor app with a counter component and a greeting form.',
          tags: ['Blazor', '.NET 8', 'Components', 'Data Binding']
        },
        {
          id: 'lab-02', code: 'Lab 02',
          title: 'OOP in Action — Classes and Services',
          phase: 'Phase 2 — OOP, The Blazor Way',
          duration: '60 min', difficulty: 'Intermediate',
          objective: 'Build a C# class library with interfaces, inheritance, and DI — then consume it in a Blazor page.',
          prereqs: ['Classes and Objects in C#', 'Interfaces in C#', 'Dependency Injection in Blazor'],
          deliverable: 'A Blazor page that displays a list of items served by an injected service class.',
          tags: ['OOP', 'Interfaces', 'DI', 'Services']
        },
        {
          id: 'lab-03', code: 'Lab 03',
          title: 'Build a Data Layer with EF Core',
          phase: 'Phase 3 — Data Access with EF Core',
          duration: '75 min', difficulty: 'Intermediate',
          objective: 'Create a DbContext, define entity models, run Code-First migrations against SQLite, and implement a Repository pattern used by a Blazor page.',
          prereqs: ['DbContext and DbSet', 'Code-First Migrations', 'CRUD Operations with EF Core', 'Repository Pattern with EF Core'],
          deliverable: 'A Blazor app backed by a SQLite database — full CRUD via EF Core repository.',
          tags: ['EF Core', 'SQLite', 'Repository', 'Migrations', 'CRUD']
        },
        {
          id: 'lab-04', code: 'Lab 04',
          title: 'Forms, Validation and API Calls',
          phase: 'Phase 4 — Blazor with .NET 8',
          duration: '75 min', difficulty: 'Intermediate',
          objective: 'Build a Blazor form with full validation, submit to a .NET 8 minimal API, and display the response.',
          prereqs: ['Forms and Validation in Blazor', 'Calling REST APIs from Blazor', 'Exception Handling in C#'],
          deliverable: 'A working contact form that posts to a backend and renders the result.',
          tags: ['Forms', 'Validation', 'HttpClient', 'Minimal API']
        },
        {
          id: 'lab-05', code: 'Lab 05',
          title: 'Connect Azure OpenAI to Blazor',
          phase: 'Phase 5 — Azure AI Integration',
          duration: '90 min', difficulty: 'Advanced',
          objective: 'Wire Blazor to Azure OpenAI GPT-4o — build a chat interface with streaming responses.',
          prereqs: ['Azure OpenAI Service — Key Concepts', 'Building an AI Chat UI in Blazor'],
          deliverable: 'A Blazor chat page that streams real-time responses from your Azure OpenAI deployment.',
          tags: ['Azure OpenAI', 'GPT-4o', 'Streaming', 'Chat UI']
        }
      ],
      capstone: [
        {
          id: 'cap-01', code: 'Capstone 1',
          title: 'Blazor Task Manager',
          phase: 'Phases 1–4',
          duration: '3–4 hours', difficulty: 'Intermediate',
          objective: 'Build a full-featured task management app in Blazor — CRUD, EF Core persistence, state management, and component hierarchy.',
          prereqs: ['Complete Phase 1', 'Complete Phase 2', 'Complete Phase 3', 'Complete Phase 4 (Labs 1–4)'],
          deliverable: 'A deployable Blazor WebAssembly app with task lists, filters, and EF Core SQLite persistence.',
          tags: ['Blazor', 'CRUD', 'EF Core', 'State', 'Full App']
        },
        {
          id: 'cap-02', code: 'Capstone 2',
          title: 'AI-Powered Knowledge Base',
          phase: 'Phases 4–5',
          duration: '4–5 hours', difficulty: 'Advanced',
          objective: 'Build a searchable knowledge base with Azure AI Search and GPT-4o RAG.',
          prereqs: ['Complete Phase 4', 'Complete Lab 05', 'Azure AI Search'],
          deliverable: 'A Blazor app where documents are indexed and GPT-4o answers questions with citations.',
          tags: ['RAG', 'Azure AI Search', 'GPT-4o', 'Documents']
        },
        {
          id: 'cap-03', code: 'Capstone 3',
          title: 'Intelligent Enterprise Application',
          phase: 'All Phases',
          duration: '6–8 hours', difficulty: 'Advanced',
          objective: 'Build and deploy a production-grade Blazor app with EF Core, Azure OpenAI, authentication, and CI/CD.',
          prereqs: ['Complete all 5 Phases', 'Complete Capstones 1 and 2'],
          deliverable: 'A live URL on Azure App Service — a fully deployed AI-powered enterprise Blazor app.',
          tags: ['Enterprise', 'Auth', 'Azure', 'CI/CD', 'Production', 'EF Core']
        }
      ]
    }
  },

  // ── AZ-204 ──────────────────────────────────────────────────
  'az204': {
    id: 'az204',
    title: 'AZ-204: Developing Solutions for Microsoft Azure',
    subtitle: 'AZ-204 · Azure Developer Associate',
    description: 'Build cloud-native solutions on Azure — Functions, Cosmos DB, Blob Storage, API Management, and secure enterprise deployments.',
    stats: ['40+ lessons', '5 phases', 'Developer → Certified'],
    loadingMessages: [
      'Raushan is provisioning the Azure example…',
      'Deploying concepts — Raushan-style…',
      'Thinking like a cloud architect…',
      'Preparing your lesson with MCT precision…'
    ],
    labStyle: 'code',
    phases: [
      {
        label: 'Phase 1', title: 'Azure Foundations',
        colorClass: 'p1', dot: '#2d7a4f',
        lessons: [
          'Introduction to Azure Cloud Concepts',
          'Azure Subscriptions and Resource Groups',
          'Azure CLI and Azure Portal',
          'Azure Resource Manager (ARM) Overview',
          'Identity and Access Management Basics'
        ]
      },
      {
        label: 'Phase 2', title: 'Compute Solutions',
        colorClass: 'p2', dot: '#7c4b9e',
        lessons: [
          'Azure App Service — Web Apps',
          'Azure App Service — Deployment Slots',
          'Azure Functions — Serverless Compute',
          'Azure Container Instances and Registry',
          'Azure Kubernetes Service Basics'
        ]
      },
      {
        label: 'Phase 3', title: 'Storage and Data',
        colorClass: 'p3', dot: '#c75c1a',
        lessons: [
          'Azure Blob Storage',
          'Azure Cosmos DB',
          'Azure SQL Database',
          'Azure Cache for Redis',
          'Azure CDN and Static Websites'
        ]
      },
      {
        label: 'Phase 4', title: 'Security and Integration',
        colorClass: 'p4', dot: '#1c5bde',
        lessons: [
          'Azure Key Vault',
          'Managed Identities',
          'Azure API Management',
          'Azure Service Bus',
          'Azure Event Grid and Event Hubs'
        ]
      },
      {
        label: 'Phase 5', title: 'Monitoring and Exam Prep',
        colorClass: 'p1', dot: '#2d7a4f',
        lessons: [
          'Azure Monitor and Application Insights',
          'Azure Log Analytics',
          'Exam Strategy and Key Topics',
          'Practice Scenarios and Review'
        ]
      }
    ],
    labs: {
      handson: [
        {
          id: 'az204-lab-01', code: 'Lab 01',
          title: 'Deploy Your First Azure Web App',
          phase: 'Phase 2 — Compute Solutions',
          duration: '45 min', difficulty: 'Beginner',
          objective: 'Create an Azure App Service plan, deploy a simple .NET app, configure deployment slots, and swap production and staging.',
          prereqs: ['Azure App Service — Web Apps', 'Azure CLI and Azure Portal'],
          deliverable: 'A live Azure App Service with staging and production slots configured.',
          tags: ['App Service', 'Azure CLI', 'Deployment']
        },
        {
          id: 'az204-lab-02', code: 'Lab 02',
          title: 'Build and Deploy an Azure Function',
          phase: 'Phase 2 — Compute Solutions',
          duration: '60 min', difficulty: 'Beginner',
          objective: 'Create an HTTP-triggered Azure Function in C#, test it locally with Azure Functions Core Tools, and deploy to Azure.',
          prereqs: ['Azure Functions — Serverless Compute', 'Azure CLI'],
          deliverable: 'A deployed Azure Function responding to HTTP requests with a JSON payload.',
          tags: ['Azure Functions', 'Serverless', 'C#']
        },
        {
          id: 'az204-lab-03', code: 'Lab 03',
          title: 'Cosmos DB — Store and Query Data',
          phase: 'Phase 3 — Storage and Data',
          duration: '75 min', difficulty: 'Intermediate',
          objective: 'Create a Cosmos DB account, define containers, insert documents using the SDK, and query with SQL API.',
          prereqs: ['Azure Cosmos DB', 'Azure Blob Storage'],
          deliverable: 'A C# console app that creates, reads, updates, and deletes Cosmos DB documents.',
          tags: ['Cosmos DB', 'NoSQL', 'Azure SDK', 'C#']
        },
        {
          id: 'az204-lab-04', code: 'Lab 04',
          title: 'Secure Secrets with Azure Key Vault',
          phase: 'Phase 4 — Security and Integration',
          duration: '60 min', difficulty: 'Intermediate',
          objective: 'Store connection strings in Key Vault, retrieve them using Managed Identity from an App Service — zero secrets in code.',
          prereqs: ['Azure Key Vault', 'Managed Identities'],
          deliverable: 'An App Service that reads its database connection string from Key Vault using Managed Identity.',
          tags: ['Key Vault', 'Managed Identity', 'Security']
        }
      ],
      capstone: [
        {
          id: 'az204-cap-01', code: 'Capstone 1',
          title: 'Serverless API with Azure Functions',
          phase: 'Phases 2–4',
          duration: '3–4 hours', difficulty: 'Intermediate',
          objective: 'Build a complete REST API using Azure Functions, Cosmos DB for storage, Key Vault for secrets, and API Management as the gateway.',
          prereqs: ['Complete Labs 1–4'],
          deliverable: 'A published API Management endpoint backed by Azure Functions and Cosmos DB.',
          tags: ['Azure Functions', 'Cosmos DB', 'APIM', 'Serverless']
        },
        {
          id: 'az204-cap-02', code: 'Capstone 2',
          title: 'Event-Driven Microservice',
          phase: 'Phases 3–4',
          duration: '4–5 hours', difficulty: 'Advanced',
          objective: 'Build a microservice architecture using Azure Service Bus for messaging, Azure Functions as consumers, and Blob Storage for persistence.',
          prereqs: ['Azure Service Bus', 'Azure Event Grid and Event Hubs'],
          deliverable: 'Two Azure Functions communicating via Service Bus with dead-letter queue handling.',
          tags: ['Service Bus', 'Event-Driven', 'Microservices']
        },
        {
          id: 'az204-cap-03', code: 'Capstone 3',
          title: 'Full Azure Solution — AZ-204 Exam Ready',
          phase: 'All Phases',
          duration: '6–8 hours', difficulty: 'Advanced',
          objective: 'Build a production-grade solution covering every AZ-204 domain — App Service, Functions, Cosmos DB, Key Vault, Service Bus, and monitoring.',
          prereqs: ['Complete all Labs and Capstone 1–2'],
          deliverable: 'A fully deployed Azure solution with Application Insights monitoring and a documented architecture diagram.',
          tags: ['AZ-204', 'Exam Ready', 'Full Solution', 'Azure']
        }
      ]
    }
  },

  // ── PL-300 ──────────────────────────────────────────────────
  'pl300': {
    id: 'pl300',
    title: 'PL-300: Design and Manage Analytics Solutions Using Power BI',
    subtitle: 'PL-300 · Power BI Data Analyst Associate',
    description: 'Complete Power BI from data connection to enterprise deployment — DAX, data modeling, reports, dashboards, and the PL-300 certification.',
    stats: ['45+ lessons', '5 phases', 'Analyst → Certified'],
    loadingMessages: [
      'Raushan is building the Power BI walkthrough…',
      'DAX is being computed, Raushan-style…',
      'Slicing data the way Raushan taught us…',
      'Visualising insights — MCT approved…'
    ],
    labStyle: 'gui',
    phases: [
      {
        label: 'Phase 1', title: 'Power BI Foundations',
        colorClass: 'p1', dot: '#2d7a4f',
        lessons: [
          'Introduction to Power BI Desktop',
          'Connecting to Data Sources',
          'Power Query Basics',
          'Data Transformation in Power Query',
          'Loading Data into Power BI'
        ]
      },
      {
        label: 'Phase 2', title: 'Data Modeling',
        colorClass: 'p2', dot: '#7c4b9e',
        lessons: [
          'Understanding Data Models',
          'Relationships in Power BI',
          'Star Schema vs Snowflake Schema',
          'Calculated Columns vs Measures',
          'Introduction to DAX'
        ]
      },
      {
        label: 'Phase 3', title: 'DAX Deep Dive',
        colorClass: 'p3', dot: '#c75c1a',
        lessons: [
          'DAX Evaluation Context',
          'CALCULATE and Context Transition',
          'Time Intelligence Functions',
          'Iterator Functions (SUMX, AVERAGEX)',
          'Advanced DAX Patterns'
        ]
      },
      {
        label: 'Phase 4', title: 'Reports and Dashboards',
        colorClass: 'p4', dot: '#1c5bde',
        lessons: [
          'Building Effective Visualizations',
          'Slicers, Filters and Drill-through',
          'Row-Level Security (RLS)',
          'Power BI Service and Workspaces',
          'Publishing and Sharing Reports'
        ]
      },
      {
        label: 'Phase 5', title: 'Enterprise & Exam Prep',
        colorClass: 'p1', dot: '#2d7a4f',
        lessons: [
          'Deployment Pipelines',
          'Power BI Premium and Capacity',
          'Performance Optimization',
          'Exam Strategy and Key Topics',
          'Practice Scenarios and Review'
        ]
      }
    ],
    labs: {
      handson: [
        {
          id: 'pl300-lab-01', code: 'Lab 01',
          title: 'Connect and Transform Sales Data',
          phase: 'Phase 1 — Power BI Foundations',
          duration: '45 min', difficulty: 'Beginner',
          objective: 'Connect Power BI Desktop to an Excel sales file, clean and transform data in Power Query, and load it into the data model.',
          prereqs: ['Introduction to Power BI Desktop', 'Connecting to Data Sources', 'Power Query Basics'],
          deliverable: 'A Power BI Desktop file with cleaned sales data loaded and ready for modeling.',
          tags: ['Power Query', 'Excel', 'Data Transformation']
        },
        {
          id: 'pl300-lab-02', code: 'Lab 02',
          title: 'Build a Star Schema Data Model',
          phase: 'Phase 2 — Data Modeling',
          duration: '60 min', difficulty: 'Beginner',
          objective: 'Create a proper star schema with a Fact table and Dimension tables, define relationships, and validate the model.',
          prereqs: ['Understanding Data Models', 'Relationships in Power BI', 'Star Schema vs Snowflake Schema'],
          deliverable: 'A Power BI model with correct relationships, a Date table, and hidden foreign keys.',
          tags: ['Star Schema', 'Relationships', 'Data Model']
        },
        {
          id: 'pl300-lab-03', code: 'Lab 03',
          title: 'Write DAX Measures for Business KPIs',
          phase: 'Phase 3 — DAX Deep Dive',
          duration: '75 min', difficulty: 'Intermediate',
          objective: 'Write DAX measures for Total Sales, YTD Sales, % Growth, and a dynamic Top N ranking using RANKX.',
          prereqs: ['Introduction to DAX', 'CALCULATE and Context Transition', 'Time Intelligence Functions'],
          deliverable: 'A Power BI file with 8+ DAX measures covering time intelligence and ranking patterns.',
          tags: ['DAX', 'CALCULATE', 'Time Intelligence', 'RANKX']
        },
        {
          id: 'pl300-lab-04', code: 'Lab 04',
          title: 'Build and Publish a Sales Dashboard',
          phase: 'Phase 4 — Reports and Dashboards',
          duration: '90 min', difficulty: 'Intermediate',
          objective: 'Design a multi-page Power BI report with slicers, drill-through, bookmarks, and row-level security, then publish to Power BI Service.',
          prereqs: ['Building Effective Visualizations', 'Slicers, Filters and Drill-through', 'Row-Level Security (RLS)', 'Power BI Service and Workspaces'],
          deliverable: 'A published Power BI report with RLS configured and shared with a workspace.',
          tags: ['Reports', 'RLS', 'Power BI Service', 'Dashboard']
        }
      ],
      capstone: [
        {
          id: 'pl300-cap-01', code: 'Capstone 1',
          title: 'End-to-End Sales Analytics Solution',
          phase: 'Phases 1–4',
          duration: '3–4 hours', difficulty: 'Intermediate',
          objective: 'Build a complete sales analytics solution from raw CSV data — Power Query transformation, star schema model, DAX KPIs, and a polished report.',
          prereqs: ['Complete Labs 1–4'],
          deliverable: 'A Power BI Desktop file with full data pipeline, model, and 3-page executive report.',
          tags: ['End-to-End', 'Sales Analytics', 'Power BI']
        },
        {
          id: 'pl300-cap-02', code: 'Capstone 2',
          title: 'HR Analytics Dashboard with RLS',
          phase: 'Phases 2–4',
          duration: '3–4 hours', difficulty: 'Intermediate',
          objective: 'Build an HR analytics report with headcount, attrition, salary bands, and department drill-through. Configure RLS so managers see only their department.',
          prereqs: ['Complete Capstone 1', 'Row-Level Security (RLS)'],
          deliverable: 'A published Power BI report with department-level RLS and manager access configured.',
          tags: ['HR Analytics', 'RLS', 'Drill-through', 'Workspaces']
        },
        {
          id: 'pl300-cap-03', code: 'Capstone 3',
          title: 'PL-300 Exam-Ready Portfolio Project',
          phase: 'All Phases',
          duration: '5–6 hours', difficulty: 'Advanced',
          objective: 'Build a comprehensive Power BI solution covering all PL-300 exam domains — ingestion, modeling, DAX, visualizations, deployment pipelines, and performance optimization.',
          prereqs: ['Complete all Labs and Capstones 1–2'],
          deliverable: 'A deployment-pipeline-enabled Power BI solution with documented DAX patterns and performance notes.',
          tags: ['PL-300', 'Exam Ready', 'Deployment Pipelines', 'Performance']
        }
      ]
    }
  },

  // ── Fallback loading messages ───────────────────────────────
  defaultLoadingMessages: [
    'Raushan is preparing your lesson…',
    'Loading with MCT precision…',
    'Almost ready…'
  ]

};

// Helper — get course by URL param
// Falls back to 'default' if not found or no param
function getCourseData() {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('course') || 'default';
  return COURSE_CATALOG[courseId] || null;
}