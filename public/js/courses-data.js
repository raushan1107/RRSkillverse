const COURSE_CATALOG = {

  // ── DEFAULT / FLAGSHIP ─────────────────────────────────────
  'default': {
    id: 'default',
    title: 'Intelligent Enterprise Development with .NET 8 & Azure AI',
    subtitle: 'Intelligent Enterprise Dev · .NET 8 & Azure AI',
    description: 'A zero-to-production learning path. Start with zero C# knowledge, build solid fundamentals, then develop real Blazor applications powered by Azure AI.',
    stats: ['46 lessons', '4 phases', 'Zero to Azure AI'],
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
          'Type Casting in C#'
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
        label: 'Phase 3', title: 'Blazor with .NET 8',
        colorClass: 'p3', dot: '#c75c1a',
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
        label: 'Phase 4', title: 'Azure AI Integration',
        colorClass: 'p4', dot: '#1c5bde',
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
    ]
  },

  // ── AZ-204 ──────────────────────────────────────────────────
  'az204': {
    id: 'az204',
    title: 'AZ-204: Developing Solutions for Microsoft Azure',
    subtitle: 'AZ-204 · Azure Developer Associate',
    description: 'Build cloud-native solutions on Azure — Functions, Cosmos DB, Blob Storage, API Management, and secure enterprise deployments.',
    stats: ['40+ lessons', '5 phases', 'Developer → Certified'],
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
    ]
  },

  // ── PL-300 ──────────────────────────────────────────────────
  'pl300': {
    id: 'pl300',
    title: 'PL-300: Design and Manage Analytics Solutions Using Power BI',
    subtitle: 'PL-300 · Power BI Data Analyst Associate',
    description: 'Complete Power BI from data connection to enterprise deployment — DAX, data modeling, reports, dashboards, and the PL-300 certification.',
    stats: ['45+ lessons', '5 phases', 'Analyst → Certified'],
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
    ]
  }

};

// Helper — get course by URL param
// Falls back to 'default' if not found or no param
function getCourseData() {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('course') || 'default';
  return COURSE_CATALOG[courseId] || null;
}
