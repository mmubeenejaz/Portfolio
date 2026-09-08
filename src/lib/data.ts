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
  overline: "Product Owner · AI Product Engineer",
  name: "Mubeen Ejaz",
  headline: "I turn ideas into software.",
  statement: "I used to write the specs. Now I build and ship the product.",
  primaryCta: { label: "Explore what I've built", href: "#work" },
  secondaryCta: { label: "Let's build something", href: "#contact" },
  resumeLabel: "Download resume",
};

export const about = {
  overline: "The shift",
  title: "Product Owner to AI Product Engineer",
  statement: "I spent years defining software for developers. Now I build and ship it myself.",
  principles: [
    { icon: "target", title: "Product", description: "Understand the problem." },
    { icon: "code", title: "Engineering", description: "Build the solution." },
    { icon: "cpu", title: "AI", description: "Use it where it creates leverage." },
    { icon: "rocket", title: "Shipping", description: "Care about what reaches users." },
  ],
  credential: {
    role: "Business Analyst & Product Owner",
    company: "Reporteq (Pvt.) Ltd.",
    period: "Dec 2022 – Present",
    note: "more than 50 client projects shipped",
  },
};

export const featuredProject = {
  eyebrow: "Personal Projects",
  name: "Nisab",
  subtitle: "Personal Finance OS",
  description:
    "A modern personal finance platform designed to give people a clearer picture of their money, spending, goals, and financial decisions in one place.",
  meta: { role: "Product and engineering", type: "SaaS / FinTech", status: "Live" },
  problemHeading: "The Problem",
  problem:
    "Personal finances are usually scattered across spreadsheets, bank records, and notes, making it hard to see where money is going, how wealth is growing, or what's outstanding.",
  builtHeading: "What I Built",
  built:
    "A single platform built around one ledger every balance derives from: income and expenses, budgeting, a multi-asset investment portfolio (stocks, funds, gold, property, business), possessions and liabilities, net worth over time, and a manual Zakat tracker.",
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
    { label: "Net worth", description: "Tracked over time" },
    { label: "Investments", description: "Multi-asset portfolio" },
    { label: "Zakat", description: "Manual tracker" },
    { label: "Budgets", description: "Spending analysis" },
  ],
  aiHeading: "How AI Was Used",
  ai: "AI accelerated implementation through Claude Code-assisted development. Nisab has no runtime AI feature today; deterministic financial correctness (one ledger, exact decimal math, tenant isolation) was the priority before layering on anything probabilistic.",
  liveUrl: "https://nisab-personal-finance-tracker.vercel.app/login",
  primaryCtaLabel: "Explore Nisab",
};

export const services = {
  overline: "Services",
  title: "What I can build for you",
  description:
    "From a first idea to a shipped product: discovery, design, engineering and the AI layer, done by one person who has done all four.",
  items: [
    {
      icon: "layout-dashboard",
      title: "Web & SaaS development",
      description:
        "Modern web apps, SaaS platforms, customer portals, dashboards, and internal business systems.",
    },
    {
      icon: "smartphone",
      title: "Mobile app development",
      description:
        "Production-ready Android and iOS apps for customers, employees, operations, bookings, and business workflows.",
    },
    {
      icon: "cpu",
      title: "AI application development",
      description:
        "AI-powered applications, agents, assistants, document processing, knowledge systems, and intelligent workflows.",
    },
    {
      icon: "workflow",
      title: "Business automation",
      description:
        "Automate repetitive tasks, reporting, communications, data entry, and operational workflows with AI and integrations.",
    },
    {
      icon: "pen-tool",
      title: "Product design & UI/UX",
      description:
        "Product strategy, user flows, UI/UX, design systems, responsive interfaces, and polished landing pages.",
    },
    {
      icon: "rocket",
      title: "MVP development",
      description:
        "Turn an idea into a working MVP quickly, helping you validate the product with real users in weeks instead of months.",
    },
    {
      icon: "plug",
      title: "API & systems integration",
      description:
        "Connect your software with payments, WhatsApp, CRMs, third-party APIs, databases, and existing business systems.",
    },
    {
      icon: "table-2",
      title: "Custom business software",
      description:
        "Replace spreadsheets and disconnected tools with purpose-built software designed around your business processes.",
    },
  ],
  closing: {
    text: "Not sure which of these you need? Describe the problem and I'll tell you what it actually takes.",
    ctaLabel: "Start a project",
    ctaHref: "#contact",
  },
};

export const howIBuild = {
  overline: "Method",
  heading: "How I build",
  steps: [
    {
      number: "01",
      title: "Problem",
      description: "Understand what actually needs solving.",
      detail:
        "Talk to the people closest to the problem, not just the request. Most feature ideas are symptoms; the real problem is usually one level deeper.",
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
        "AI earns its place where reasoning is probabilistic and being occasionally wrong is cheap. Everywhere else (money, auth, tenant boundaries), deterministic logic wins.",
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

export const activeBuilds = {
  overline: "In progress",
  heading: "Currently building",
  items: [
    {
      number: "02",
      name: "Nazim",
      subtitle: "Financial & Operations Platform for Academies & Schools",
      description: "Financial and operations platform for academies and schools.",
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
      description: "Financial operating system for small businesses.",
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
  ],
};

export const finalCTA = {
  eyebrow: "Contact",
  heading: "Have something worth building?",
  subheading: "Tell me the problem. Let's turn it into software.",
  inputPlaceholder: "Write the message you would like to send Mubeen on WhatsApp.",
  submitLabel: "Let's build it.",
  footerTagline: "Product Owner · AI Product Engineer",
};

export const nav = [
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Building", href: "#building" },
  { label: "Contact", href: "#contact" },
];
