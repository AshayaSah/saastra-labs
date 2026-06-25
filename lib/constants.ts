import type {
  NavLink,
  Product,
  ProjectItem,
  InsightItem,
  ComparisonRow,
  BenefitCard,
  PricingPlan,
  TestimonialItem,
  FAQItem,
  FooterColumn,
} from "./types"

export const NAV_LINKS: NavLink[] = [
  { label: "Work",     href: "/work" },
  { label: "Products", href: "/products" },
  { label: "Pricing",  href: "/pricing" },
  { label: "Blog",     href: "/blog" },
]

export const PRODUCTS: Product[] = [
  {
    id: "acebuilder",
    name: "Acebuilder",
    badge: "Web app",
    description:
      "A natural-language interface where you describe the app you want — Acebuilder ships production-ready code in minutes.",
    preview: "linear-gradient(160deg,#eef1f6,#d4ddee)",
    previewLabel: "[ describe → ship ]",
  },
  {
    id: "acebuilder-ui",
    name: "Acebuilder UI",
    badge: "UI Library",
    description:
      "A composable component library and design system — drop-in ready for any modern React or Next.js stack.",
    preview: "linear-gradient(160deg,#1a1a1a,#343434)",
    previewLabel: "[ 120+ components ]",
    dark: true,
  },
  {
    id: "acebuilder-cloud",
    name: "Acebuilder Cloud",
    badge: "Hosting",
    description:
      "One-click deploys, edge caching and zero-config scaling for everything you build — fast and global by default.",
    preview: "radial-gradient(120% 120% at 30% 20%,#2a1c10,#0b0b0b)",
    previewLabel: "▲ deployed · 12 regions",
    dark: true,
  },
  {
    id: "acebuilder-analytics",
    name: "Acebuilder Analytics",
    badge: "Insights",
    description:
      "Privacy-first product analytics with real-time dashboards, funnels and cohort retention out of the box.",
    preview: "linear-gradient(160deg,#1d3a30,#0c1c17)",
    previewLabel: "[ live dashboards ]",
    dark: true,
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    id: "ai-search",
    title: "AI search landing page",
    tag: "Landing page",
    meta: "Figma Design · Next.js Development",
    description:
      "A conversion-focused landing page designed to explain a complex AI product in under 10 seconds.",
    preview: "linear-gradient(155deg,#1c1c1c,#080808)",
    href: "#",
    dark: true,
    colSpan: 4,
    rowSpan: 2,
  },
  {
    id: "hpa-app",
    title: "HPA mobile app",
    tag: "Mobile app",
    meta: "Product Design · React Native",
    description:
      "A performance-tracking app for athletes, rebuilt around a single glanceable home screen.",
    preview: "radial-gradient(120% 120% at 30% 20%,#2a1c10,#0b0b0b)",
    href: "#",
    dark: true,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: "north-dashboard",
    title: "Analytics dashboard",
    tag: "Web app",
    meta: "Design System · Data Viz",
    description:
      "Privacy-first product analytics with real-time funnels and cohort retention out of the box.",
    preview: "linear-gradient(160deg,#1d3a30,#0c1c17)",
    href: "#",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: "vellum-brand",
    title: "Vellum brand site",
    tag: "Brand site",
    meta: "Art Direction · Webflow",
    description:
      "An editorial brand site that lets a typography studio show off its own type at full volume.",
    preview: "repeating-linear-gradient(45deg,#d8cbb8,#d8cbb8 14px,#e0d4c2 14px,#e0d4c2 28px)",
    href: "#",
    colSpan: 4,
    rowSpan: 1,
  },
  {
    id: "outpost-commerce",
    title: "Commerce platform",
    tag: "E-commerce",
    meta: "Platform · Next.js · Stripe",
    description:
      "A commerce platform with a built-in framework for deep store customizations.",
    preview: "linear-gradient(160deg,#e6ecf6,#cdd9ee)",
    href: "#",
    colSpan: 3,
    rowSpan: 2,
  },
  {
    id: "brink-campaign",
    title: "Launch campaign",
    tag: "Campaign",
    meta: "Creative · Motion",
    description:
      "A multi-surface launch campaign tying a product reveal together across web, social and email.",
    preview: "linear-gradient(160deg,#3a2a1a,#120c06)",
    href: "#",
    dark: true,
    colSpan: 3,
    rowSpan: 1,
  },
]

export const LOGO_MARQUEE: string[] = [
  "Nimbus", "Outpost", "Hexgrid", "Caret", "Northwind",
  "Splice", "Brink", "Loophole", "Thrust", "Vellum",
]

export const INSIGHTS: InsightItem[] = [
  {
    tag: "CARET",
    text: "Excellent communication and a genuinely fast turnaround. They felt like part of our team from day one.",
    name: "Marcus Bell",
    role: "Founder, Caret",
  },
  {
    tag: "OUTPOST",
    text: "Quick to respond, very iterative, and shipped a site we love. Looking forward to the next collaboration.",
    name: "Aanya Rao",
    role: "Head of Growth, Outpost",
  },
  {
    tag: "HEXGRID",
    text: "The best engineers I have worked with. They understood the requirements deeply and delivered beyond expectations.",
    name: "John Mowbray",
    role: "CTO, Hexgrid",
  },
  {
    tag: "NIMBUS",
    text: "Exceptional attention to detail. They delivered beyond our expectations and well ahead of schedule.",
    name: "Sarah Jensen",
    role: "Product Lead, Nimbus",
  },
]

export const COMP_ROWS: ComparisonRow[] = [
  { label: "Approach",          saastra: "Design and engineering in sync",    traditional: "Siloed hand-offs" },
  { label: "Process",           saastra: "Streamlined, transparent, fast",    traditional: "Lengthy, opaque, unclear" },
  { label: "Design philosophy", saastra: "Modern, minimal and purposeful",    traditional: "Trend-based and cluttered" },
  { label: "Developer stack",   saastra: "Built with modern frameworks",      traditional: "Outdated, legacy stacks" },
  { label: "Communication",     saastra: "Clear updates, daily",              traditional: "Multiple middlemen" },
  { label: "Deliverables",      saastra: "Production-ready clean systems",    traditional: "Static mockups" },
  { label: "Support",           saastra: "Long-term partnership mindset",     traditional: "One-off projects" },
  { label: "Timeline",          saastra: "Fixed scope, no surprises",         traditional: "Open-ended timelines" },
]

export const BENEFIT_CARDS: BenefitCard[] = [
  { icon: "⚡", title: "Instant onboarding",       description: "Get up and running in days, not months. Kick off with a single call." },
  { icon: "◎", title: "High impact, low overhead", description: "Senior talent without the senior price tag or the hiring risk." },
  { icon: "◆", title: "Stress-free collaboration", description: "Async-friendly, with clear and consistent updates throughout." },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "composable",
    name: "Composable",
    tagline: "Tailored website components",
    description: "for fast-moving brands",
    monthlyPrice: 4995,
    badge: "2 spots left",
    badgeVariant: "green",
    features: [
      "Custom design & build",
      "Component library access",
      "High-velocity output",
      "Unlimited revisions",
      "Direct Slack channel",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Tailored website components",
    description: "for high-growth teams",
    monthlyPrice: 6995,
    badge: "Most popular",
    badgeVariant: "yellow",
    dark: true,
    features: [
      "Everything in Foundation",
      "Dedicated project manager",
      "Priority delivery queue",
      "Performance optimization",
      "Quarterly strategy reviews",
    ],
  },
  {
    id: "multi-pages",
    name: "Multi pages",
    tagline: "Tailored multi-page websites",
    description: "for fast conversion rates",
    monthlyPrice: 12499,
    badge: "Best for scale",
    badgeVariant: "green",
    wide: true,
    features: [
      "Custom design & build",
      "Multi-page architecture",
      "High-velocity output",
      "Unlimited revisions",
      "SEO & analytics setup",
      "Conversion-focused copy",
      "CMS integration",
      "Dedicated PM",
    ],
  },
]

export const TESTIMONIALS: TestimonialItem[] = [
  {
    company: "Cal.com",
    quote: "\"Working with Saastra Labs has been a masterclass in engineering. They didn't just build a product — they built a high-performance, thoughtfully crafted system.\"",
    name: "Josh Tucker",
    role: "VP of Engineering",
  },
  {
    company: "Vercel",
    quote: "\"Saastra Labs' team rapidly aligned with our stakeholders and delivered a thoughtful, polished product that exceeded every expectation.\"",
    name: "Priya Singh",
    role: "Product Manager",
  },
  {
    company: "GitHub",
    quote: "\"Technical excellence paired with strong product sense — highly recommended. They made the whole process effortless from start to finish.\"",
    name: "Lewis Nordstrom",
    role: "Engineering Manager",
  },
]

export const FAQS: FAQItem[] = [
  { question: "Do I need to be locked into a monthly fee?",         answer: "No. Plans are month-to-month — pause or cancel anytime with no long-term contract." },
  { question: "What's a typical use case for a fast-moving team?",  answer: "Shipping a new product, rebuilding a marketing site, or augmenting an in-house team during a crunch." },
  { question: "Can I connect with you during a kickoff call?",       answer: "Absolutely. Every engagement starts with a kickoff where we align on goals, scope and timelines." },
  { question: "How does the two-week sprint cycle work?",            answer: "We work in focused sprints with a clear deliverable each cycle, plus regular async updates in your Slack." },
  { question: "How do you handle revisions and feedback?",           answer: "Revisions are unlimited within your plan. Drop feedback anytime and we fold it into the next cycle." },
  { question: "Do I need to be technical to work with you?",         answer: "Not at all. We translate business goals into technical decisions and keep you in the loop in plain language." },
]

export const TECH_LOGOS: string[] = [
  "Next.js", "Vercel", "Figma", "GitHub", "Linear", "Stripe", "Supabase", "Tailwind CSS",
]

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "PAGES",
    links: [
      { label: "Work",     href: "/work" },
      { label: "Products", href: "/products" },
      { label: "Pricing",  href: "/pricing" },
      { label: "Blog",     href: "/blog" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About",   href: "#" },
      { label: "Team",    href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms",   href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
]
