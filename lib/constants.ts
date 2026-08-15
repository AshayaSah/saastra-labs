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
  PageSection,
  CompanyStat,
  CompanyValue,
  TeamMember,
  JobOpening,
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
    preview: "linear-gradient(160deg,#F6F3E4,#EBE6DC)",
    href: "#",
    ctaLabel: "Visit",
  },
  {
    id: "acebuilder-ui",
    name: "Acebuilder UI",
    badge: "UI Library",
    description:
      "A composable component library and design system — drop-in ready for any modern React or Next.js stack.",
    preview: "linear-gradient(160deg,#1E100F,#30050E)",
    href: "#",
    ctaLabel: "Browse components",
    dark: true,
  },
  {
    id: "acebuilder-cloud",
    name: "Acebuilder Cloud",
    badge: "Hosting",
    description:
      "One-click deploys, edge caching and zero-config scaling for everything you build — fast and global by default.",
    preview: "radial-gradient(120% 120% at 30% 20%,#4D0C12,#1E100F)",
    href: "#",
    ctaLabel: "Deploy now",
    dark: true,
  },
  {
    id: "acebuilder-analytics",
    name: "Acebuilder Analytics",
    badge: "Insights",
    description:
      "Privacy-first product analytics with real-time dashboards, funnels and cohort retention out of the box.",
    preview: "linear-gradient(160deg,#30050E,#1E100F)",
    href: "#",
    ctaLabel: "See it live",
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
    preview: "linear-gradient(155deg,#1E100F,#30050E)",
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
    preview: "radial-gradient(120% 120% at 30% 20%,#4D0C12,#1E100F)",
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
    preview: "repeating-linear-gradient(45deg,#4D0C12,#4D0C12 14px,#30050E 14px,#30050E 28px)",
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
      { label: "About",   href: "/about" },
      { label: "Team",    href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
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

export const PAGE_SECTIONS: PageSection[] = [
  // About
  {
    page: "about",
    eyebrow: "Who we are",
    heading: "We build digital products that earn their place on the screen.",
    body: "Saastra Labs is a design and engineering studio based in Kathmandu, working with founders and teams around the world. We pair product thinking with senior engineering so the thing we ship is the thing people actually use.",
  },
  {
    page: "about",
    eyebrow: "How we started",
    heading: "Started small, shipped relentlessly.",
    body: "We began as two people taking on the projects bigger agencies passed over. The work compounded. Today we're a small, deliberate team that still measures itself by what makes it to production — not what makes it into a deck.",
  },
  {
    page: "about",
    eyebrow: "How we work",
    heading: "Design and engineering in the same room.",
    body: "No hand-offs across silos, no telephone game between teams. The people designing a screen are the people building it, which is why our work holds together from the first pixel to the last deploy.",
  },
  // Team
  {
    page: "team",
    eyebrow: "The people",
    heading: "A small team that ships like a big one.",
    body: "Designers, engineers and product folks who care about the details most people never notice — and the ones everyone feels.",
  },
  // Careers
  {
    page: "careers",
    eyebrow: "Join us",
    heading: "Do the best work of your career.",
    body: "We hire slowly and trust deeply. If you want ownership, sharp teammates and work that ships, you'll feel at home here.",
  },
]

export const COMPANY_STATS: CompanyStat[] = [
  { value: "100+",  label: "Projects delivered" },
  { value: "8",     label: "Countries served" },
  { value: "2018",  label: "Founded" },
  { value: "12",    label: "People on the team" },
]

export const COMPANY_VALUES: CompanyValue[] = [
  { icon: "◆", title: "Craft is the point",  description: "We sweat the details because the details are what people remember. Good enough is where we start, not where we stop." },
  { icon: "⚡", title: "Ship, then refine",   description: "Momentum beats perfection. We get real work in front of real users early, then sharpen it with what we learn." },
  { icon: "◎", title: "Clear over clever",   description: "Plain language, honest timelines, no jargon games. The best collaboration is the one where nobody is guessing." },
]

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Ashaya Sah",     role: "Founder & Engineer",     bio: "Sets the technical direction and still reviews the pull requests that matter most." },
  { name: "Maya Gurung",    role: "Design Lead",            bio: "Turns rough briefs into interfaces that feel obvious in hindsight." },
  { name: "Rohan Thapa",    role: "Senior Engineer",        bio: "Lives in the place where performance budgets meet product deadlines." },
  { name: "Sara Lehmann",   role: "Product Manager",        bio: "Keeps scope honest and the roadmap moving without the drama." },
  { name: "Bibek Shrestha", role: "Frontend Engineer",      bio: "Cares about the 16ms frame and the keyboard user nobody else tests for." },
  { name: "Nina Acharya",   role: "Brand & Motion",         bio: "Gives every project a personality it couldn't be mistaken for." },
]

export const JOB_OPENINGS: JobOpening[] = [
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Kathmandu / Remote",
    type: "Full-time",
    description: "Own end-to-end design for client products — from first concept through production handoff alongside engineering.",
    applyHref: "/contact",
  },
  {
    title: "Full-stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and ship modern web apps with Next.js, TypeScript and Postgres. You'll touch the whole stack, not a slice of it.",
    applyHref: "/contact",
  },
  {
    title: "Frontend Engineer (React)",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    description: "Translate polished designs into fast, accessible interfaces. Strong eye for motion and detail required.",
    applyHref: "/contact",
  },
]
