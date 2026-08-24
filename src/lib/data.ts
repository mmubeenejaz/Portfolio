export const profile = {
  name: "Mubeen Ejaz",
  email: "m.mubeenejaz@gmail.com",
  phone: "+92 342 4500018",
  linkedin: "https://www.linkedin.com/in/mubeenejaz",
  github: "https://github.com/mmubeenejaz",
  whatsappNumber: "923424500018",
  whatsappMessage:
    "Hi Mubeen, I came across your portfolio and would like to discuss a project or opportunity.",
  resumeUrl: "/Mubeen-Ejaz-Resume.docx",
};

export const hero = {
  headline: "I turn ideas into software.",
  positioning: "Product Owner × AI Product Engineer",
  statement: "I used to write the specs. Now I build and ship the product.",
  workflow: ["Idea", "Product", "AI", "Engineering", "Ship"],
  primaryCta: { label: "Explore what I've built", href: "#work" },
  secondaryCta: { label: "Let's build something", href: "#contact" },
};

export const featuredProject = {
  eyebrow: "Featured Product",
  name: "Nisab",
  subtitle: "Personal Finance OS",
  description:
    "A modern personal finance platform designed to give people a clearer picture of their money, spending, goals, and financial decisions in one place.",
  meta: { role: "Product + Engineering", type: "SaaS / FinTech", status: "Live" },
  problemHeading: "The Problem",
  problem:
    "Personal finances are usually scattered across spreadsheets, bank records, and notes, making it hard to see where money is going, how wealth is growing, or what's outstanding.",
  builtHeading: "What I Built",
  built:
    "A single platform built around one ledger every balance derives from — income and expenses, budgeting, a multi-asset investment portfolio (stocks, funds, gold, property, business), possessions and liabilities, net worth over time, and a manual Zakat tracker.",
  roleHeading: "My Role",
  role: [
    "Product discovery",
    "Requirements",
    "Product design",
    "Architecture",
    "Full-stack development",
    "Testing",
    "Deployment",
  ],
  featuresHeading: "Key Features",
  features: [
    "Income & expense tracking, single-ledger derived",
    "Budgeting & spending analysis",
    "Multi-asset investment portfolio (stocks, funds, gold, property, business)",
    "Possessions & liabilities tracking",
    "Net worth over time",
    "Manual Zakat tracker",
    "Financial reports",
    "CSV / JSON export",
  ],
  technologyHeading: "Technology",
  technology: [
    "Next.js 16",
    "TypeScript",
    "Prisma 7",
    "PostgreSQL (Supabase)",
    "Supabase Auth",
    "Row-Level Security",
    "Tailwind CSS",
    "shadcn/ui",
    "Recharts",
    "Vitest",
    "Vercel",
  ],
  previewPanels: [
    { label: "Net Worth", description: "Tracked over time across every asset and liability." },
    { label: "Investments", description: "Stocks, funds, gold, property, and business in one portfolio." },
    { label: "Zakat", description: "A fully manual, auditable Zakat tracker." },
    { label: "Budgets", description: "Spending analysis derived from a single ledger." },
  ],
  pipeline: [
    "Problem",
    "Product Discovery",
    "Requirements",
    "Design",
    "Architecture",
    "Build",
    "AI-Assisted Engineering",
    "Testing",
    "Deployment",
  ],
  aiHeading: "How AI Was Used",
  ai: "AI accelerated implementation through Claude Code-assisted development. Nisab has no runtime AI feature today — deterministic financial correctness (one ledger, exact decimal math, tenant isolation) was the priority before layering on anything probabilistic.",
  liveUrl: "https://nisab-personal-finance-tracker.vercel.app/login",
  primaryCtaLabel: "Explore Nisab",
  secondaryCta: { label: "Open the hood", href: "#architecture" },
};

export const howIBuild = {
  heading: "How I build",
  steps: [
    {
      number: "01",
      title: "Problem",
      description: "Understand what actually needs solving.",
      detail:
        "Talk to the people closest to the problem, not just the request. Most feature ideas are symptoms — the real problem is usually one level deeper.",
    },
    {
      number: "02",
      title: "Product",
      description: "Define the experience, scope and priorities.",
      detail:
        "Turn the problem into a scoped product: what's in, what's out, and what success looks like. Most of the real thinking happens here, before any code.",
    },
    {
      number: "03",
      title: "AI",
      description: "Identify where AI creates real leverage.",
      detail:
        "AI earns its place where reasoning is probabilistic and being occasionally wrong is cheap. Everywhere else — money, auth, tenant boundaries — deterministic logic wins.",
    },
    {
      number: "04",
      title: "Engineering",
      description: "Design and build the system.",
      detail:
        "Architecture decisions get made here, not discovered later: the data model, tenant isolation, and a single source of truth for every important number.",
    },
    {
      number: "05",
      title: "Ship",
      description: "Deploy, learn and iterate.",
      detail:
        "A shipped v1 that's honestly scoped beats an unshipped v3. Ship it, watch what actually gets used, and let that decide what's next.",
    },
  ],
};

export const activeBuilds = [
  {
    number: "02",
    name: "Nazim",
    subtitle: "Financial & Operations Platform for Academies & Schools",
    description:
      "A web platform helping academies and schools manage students, fees, financials, and day-to-day operations, with WhatsApp integrated for parent communication, automated reminders, and fee collection.",
    status: "In development",
    capabilities: [
      "Student management",
      "Fee management",
      "Financial tracking",
      "Financial reporting",
      "Parent communication",
      "WhatsApp integration",
      "Automated fee reminders",
      "Fee payment workflows",
      "JazzCash fee payments",
      "Payment confirmation",
    ],
    idea: "Give academies and schools one place to manage students, fees and financial operations, while giving parents a simple communication and payment experience through WhatsApp.",
    flow: ["Students", "Fees", "Financial Management", "WhatsApp", "Parent", "JazzCash", "Payment Confirmation"],
  },
  {
    number: "03",
    name: "Small Business Cashflow OS",
    subtitle: "Financial Operating System for Small Businesses",
    description:
      "A SaaS platform designed to help small businesses understand and manage cash flow, income, expenses, receivables, and financial performance in one place.",
    status: "In development",
    capabilities: [
      "Cash flow tracking",
      "Income tracking",
      "Expense tracking",
      "Receivables",
      "Financial reporting",
      "Business performance insights",
      "Centralized financial visibility",
    ],
    idea: "Give small businesses a simple financial operating system for understanding where cash is coming from, where it is going, what is outstanding, and how the business is performing.",
    flow: null as string[] | null,
  },
];

export const architecture = {
  heading: "Open the hood",
  intro: "Don't just look at the product. See how it works.",
  subheading: "Nisab's architecture — the real thing, not a diagram for show.",
  nodes: [
    {
      id: "user",
      label: "User",
      description: "Signs in through Supabase Auth. Every request carries their identity from here on.",
    },
    {
      id: "web",
      label: "Web Application",
      description: "Next.js 16, App Router, TypeScript. Server-rendered, with Server Actions doing the writes.",
    },
    {
      id: "services",
      label: "Server Actions",
      description:
        "One domain service per concern — finance, investments, possessions, liabilities, budgets, Zakat, net worth, reports. Finance is the only writer of ledger rows.",
    },
    {
      id: "database",
      label: "Database",
      description:
        "PostgreSQL on Supabase via Prisma 7. Money and quantities are Decimal, never float — realized and unrealized gains are never mixed.",
    },
    {
      id: "isolation",
      label: "Tenant Isolation",
      description:
        "Two independent layers: an app-level gate every query goes through, plus Postgres Row-Level Security underneath it. One layer failing doesn't leak another user's data.",
    },
  ],
  decisionsHeading: "Product decisions",
  decisions: [
    {
      question: "Why Postgres + Supabase instead of SQLite?",
      answer:
        "Vercel's serverless functions have no persistent writable filesystem — SQLite doesn't survive that. Real multi-user auth and exact Decimal support for financial correctness both needed a real database from day one.",
    },
    {
      question: "Why two independent tenant-isolation layers instead of one?",
      answer:
        "A bug in application code alone shouldn't be able to leak one user's financial data to another. App-level scoping and Postgres Row-Level Security are enforced independently, so one failing doesn't expose the other.",
    },
    {
      question: "Where does AI actually fit today?",
      answer:
        "It accelerated the build — Claude Code-assisted development end to end. It isn't a runtime feature yet. Deterministic financial correctness came first; a probabilistic feature only gets added where it earns its cost.",
    },
    {
      question: "Why is Nazim on SQLite while Nisab is on Postgres?",
      answer:
        "A deliberate demo-phase trade-off, not an oversight. Row-Level Security and a database-level ledger trigger are deferred until real money moves through it; app-level tenant scoping and a ledger balance assertion cover the gap until then.",
    },
  ],
};

export const about = {
  eyebrow: "Product Owner → AI Product Engineer",
  statement: "I spent years defining software for developers. Now I build and ship it myself.",
  principles: [
    { title: "Product", description: "Understand the problem." },
    { title: "Engineering", description: "Build the solution." },
    { title: "AI", description: "Use it where it creates leverage." },
    { title: "Shipping", description: "Care about what reaches users." },
  ],
  credential: {
    role: "Business Analyst & Product Owner",
    company: "Reporteq (Pvt.) Ltd.",
    period: "Dec 2022 – Present",
    note: "50+ client projects shipped",
  },
  resumeLabel: "Download résumé",
};

export const finalCTA = {
  heading: "Have something worth building?",
  subheading: "Tell me the problem. Let's turn it into software.",
  inputPlaceholder: "What are you trying to build? Describe the problem...",
  submitLabel: "Let's build it.",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
