export type TocItem = { id: string; label: string }
export type Section  = { id: string; heading: string; content: string; list?: string[] }

export type Post = {
  slug:       string
  title:      string
  excerpt:    string
  category:   string
  author:     string
  date:       string
  readTime:   string
  tags:       string[]
  gradient:   string
  toc:        TocItem[]
  sections:   Section[]
}

export const posts: Post[] = [
  {
    slug:     "why-most-influencer-deals-go-unseen",
    title:    "Why Most Influencer Deals Go Unseen",
    excerpt:  "Most influencer campaigns fail silently. Here's the uncomfortable truth about why — and how to fix it before your next brief goes out.",
    category: "Marketing",
    author:   "Ashaya Sah",
    date:     "Jun 10, 2025",
    readTime: "5 min read",
    tags:     ["Marketing", "Growth", "Brand"],
    gradient: "linear-gradient(145deg, #4D0C12 0%, #30050E 100%)",
    toc: [
      { id: "the-problem",  label: "The Problem with Traditional Deals" },
      { id: "low-hanging",  label: "Low-Hanging Wins" },
      { id: "measure",      label: "Measure and Repeat" },
      { id: "closing",      label: "Closing" },
    ],
    sections: [
      {
        id: "the-problem",
        heading: "The Problem with Traditional Deals",
        content:
          "Most influencer campaigns are built around follower counts and engagement rates — metrics that look impressive in a brief but rarely translate into measurable business outcomes. Brands spend months negotiating deals, only to see the content disappear into algorithmic noise within 48 hours.\n\nThe fundamental issue is misalignment. Brands optimize for reach. Influencers optimize for content quality. But neither party is optimizing for the thing that actually matters: audience trust and conversion intent.",
        list: [
          "Follower count is not a proxy for influence",
          "Short-form content has a half-life of hours, not weeks",
          "Most briefs don't leave room for authentic storytelling",
        ],
      },
      {
        id: "low-hanging",
        heading: "Low-Hanging Wins",
        content:
          "Before renegotiating your influencer strategy from scratch, there are a few quick changes that consistently improve campaign performance. These don't require bigger budgets — just a shift in what you optimize for.\n\nThe biggest unlock is moving from one-off posts to narrative arcs. An influencer who tells the story of discovering your product, using it for a week, and returning with real results will outperform five isolated posts every single time.",
      },
      {
        id: "measure",
        heading: "Measure and Repeat",
        content:
          "The brands that win at influencer marketing aren't necessarily spending more — they're measuring more granularly. Link tracking, UTM parameters, promo codes, and post-purchase surveys are baseline requirements, not advanced tactics.\n\nThe data you collect in the first 30 days of a campaign should inform everything from creator selection to content format in the next one. Treat influencer marketing like a product: ship, measure, iterate.",
      },
      {
        id: "closing",
        heading: "Closing",
        content:
          "Influencer deals go unseen because most are built to look good in a deck rather than to perform in the wild. The solution isn't to spend less — it's to spend more deliberately, measure relentlessly, and build creator relationships that compound over time rather than burn in a single post.",
      },
    ],
  },
  {
    slug:     "quick-guide-to-performance-optimization",
    title:    "Quick Guide to Performance Optimization",
    excerpt:  "Performance is a feature. Here's a practical, no-fluff guide to making your web app significantly faster in a single sprint.",
    category: "Engineering",
    author:   "Ashaya Sah",
    date:     "Jun 4, 2025",
    readTime: "7 min read",
    tags:     ["Engineering", "Performance", "Web"],
    gradient: "linear-gradient(145deg, #30050E 0%, #1E100F 100%)",
    toc: [
      { id: "perceived-speed", label: "Perceived Speed Matters" },
      { id: "low-hanging",     label: "Low-Hanging Wins" },
      { id: "measure",         label: "Measure and Repeat" },
      { id: "closing",         label: "Closing" },
    ],
    sections: [
      {
        id: "perceived-speed",
        heading: "Perceived Speed Matters",
        content:
          "There's a meaningful difference between how fast your app actually is and how fast it feels. Perceived performance is often more important for user retention than raw load time. An app that shows a skeleton screen in 100ms and loads data in 800ms will feel faster than one that renders everything in 600ms from a blank screen.\n\nThis distinction matters because optimizing perceived performance is almost always faster to implement than true performance improvements — and the user impact is immediate.",
      },
      {
        id: "low-hanging",
        heading: "Low-Hanging Wins",
        content:
          "Before diving into bundle analysis and edge caching strategies, there are a handful of changes that pay outsized dividends in almost every web app.",
        list: [
          "Lazy-load everything below the fold",
          "Compress images to WebP or AVIF at the point of upload",
          "Defer non-critical JavaScript until after page load",
          "Preconnect to critical third-party domains",
          "Move all analytics to a web worker",
        ],
      },
      {
        id: "measure",
        heading: "Measure and Repeat",
        content:
          "Performance without measurement is guesswork. Before you optimize anything, establish baselines using Lighthouse, Web Vitals, and real user monitoring (RUM). Track Core Web Vitals — LCP, INP, and CLS — as your primary signals.\n\nRun performance audits on every deploy, not just monthly. A CI check that fails the build when LCP exceeds 2.5 seconds on a slow connection will save you from dozens of painful regression investigations.",
      },
      {
        id: "closing",
        heading: "Closing",
        content:
          "Performance optimization is not a one-time event. The best teams treat it as a continuous discipline — a definition of done that includes performance thresholds, automated testing, and a culture where engineers think about runtime cost before shipping.\n\nStart with the low-hanging fruit. Measure the impact. Then build from there.",
      },
    ],
  },
  {
    slug:     "lessons-from-successful-product-launches",
    title:    "Lessons from Successful Product Launches",
    excerpt:  "We've shipped dozens of products. Here are the patterns that separate launches that gain traction from those that go quiet.",
    category: "Product",
    author:   "Ashaya Sah",
    date:     "May 28, 2025",
    readTime: "6 min read",
    tags:     ["Product", "Strategy", "Launch"],
    gradient: "linear-gradient(145deg, #4D0C12 0%, #30050E 100%)",
    toc: [
      { id: "validate",       label: "Validate Before You Build" },
      { id: "launch-window",  label: "The Launch Window" },
      { id: "distribution",   label: "Distribution Is the Product" },
      { id: "closing",        label: "Closing" },
    ],
    sections: [
      {
        id: "validate",
        heading: "Validate Before You Build",
        content:
          "The most common reason products fail is not poor execution — it's building the wrong thing. Validation doesn't require a fully functional product. A landing page, a waitlist, and ten conversations with prospective users will tell you more than three months of solo building.\n\nThe question you're trying to answer is not 'can we build this' but 'will people pay for this.' These are very different questions and they require very different processes.",
      },
      {
        id: "launch-window",
        heading: "The Launch Window",
        content:
          "There's a 72-hour window around any product launch where momentum compounds. Everything you can do to concentrate energy — social posts, press outreach, email campaigns, community announcements — should happen in this window.\n\nAfter 72 hours, the algorithm stops surfacing your launch content and you're competing with everything else on the internet. Plan for this and use the window deliberately.",
      },
      {
        id: "distribution",
        heading: "Distribution Is the Product",
        content:
          "The best product without distribution is still invisible. The question isn't just 'how do we get users' but 'what is the system that consistently brings the right people to us.'\n\nThis means thinking about distribution channels before you build features. It means engineering shareability into the product from day one. And it means investing in content, community, or partnerships that can compound over time.",
      },
      {
        id: "closing",
        heading: "Closing",
        content:
          "A successful launch is not a moment — it's a process. The teams that launch well are the ones who prepared months in advance, validated before they built, and treated distribution with the same seriousness as engineering.",
      },
    ],
  },
  {
    slug:     "how-to-run-remote-teams-effectively",
    title:    "How to Run Remote Teams Effectively",
    excerpt:  "Remote doesn't mean disconnected. These are the communication and process patterns that make distributed engineering teams actually work.",
    category: "Team",
    author:   "Ashaya Sah",
    date:     "May 20, 2025",
    readTime: "5 min read",
    tags:     ["Team", "Remote", "Culture"],
    gradient: "linear-gradient(145deg, #1E100F 0%, #30050E 100%)",
    toc: [
      { id: "async-first", label: "Async-First by Default" },
      { id: "rituals",     label: "Rituals That Actually Work" },
      { id: "tools",       label: "Tools vs. Process" },
      { id: "closing",     label: "Closing" },
    ],
    sections: [
      {
        id: "async-first",
        heading: "Async-First by Default",
        content:
          "The biggest mistake remote teams make is treating async tools as synchronous ones. Expecting immediate Slack replies is the remote equivalent of constantly tapping someone on the shoulder — it destroys focus and creates ambient anxiety.\n\nAsync-first means defaulting to written communication, providing enough context that a reply doesn't require a follow-up question, and respecting timezone differences as a feature rather than a bug.",
      },
      {
        id: "rituals",
        heading: "Rituals That Actually Work",
        content:
          "Not every meeting is created equal. For distributed teams, the rituals that compound the most are the ones that don't require perfect attendance.",
        list: [
          "Weekly written status updates, not status meetings",
          "Bi-weekly 1:1s with a shared running agenda",
          "Monthly async retrospectives via a shared doc",
          "Quarterly video sprints for relationship-building",
        ],
      },
      {
        id: "tools",
        heading: "Tools vs. Process",
        content:
          "No tool will fix a broken process. Teams often reach for new software when what they actually need is a clearer agreement about how work gets done.\n\nThe tooling question is secondary. The primary question is: does everyone on the team have a shared understanding of what good looks like? Once that's established, almost any tool stack can support it.",
      },
      {
        id: "closing",
        heading: "Closing",
        content:
          "Running a great remote team is a management discipline, not a technology problem. The teams that thrive distributed are the ones with strong writing cultures, high-trust relationships, and a bias for clarity over consensus.",
      },
    ],
  },
  {
    slug:     "designing-for-accessibility-first-tips",
    title:    "Designing for Accessibility First Tips",
    excerpt:  "Accessibility isn't a checklist or a retrofit. It's a design philosophy that makes products better for every user.",
    category: "Design",
    author:   "Ashaya Sah",
    date:     "May 12, 2025",
    readTime: "6 min read",
    tags:     ["Design", "Accessibility", "UX"],
    gradient: "linear-gradient(145deg, #cac0d0 0%, #a090b4 100%)",
    toc: [
      { id: "contrast",  label: "Contrast and Readability" },
      { id: "keyboard",  label: "Keyboard Navigation" },
      { id: "language",  label: "Plain Language" },
      { id: "closing",   label: "Closing" },
    ],
    sections: [
      {
        id: "contrast",
        heading: "Contrast and Readability",
        content:
          "The WCAG 4.5:1 contrast ratio requirement isn't arbitrary. It reflects the actual visual needs of users with low vision or colour blindness — and it turns out that high contrast also makes products easier to read for everyone in bright sunlight or on budget screens.\n\nStart by running your existing colour palette through a contrast checker. Most design systems have at least a few pairings that fail at body text sizes. Fixing these is usually a two-hour task with outsized impact.",
      },
      {
        id: "keyboard",
        heading: "Keyboard Navigation",
        content:
          "Every interactive element on your product should be reachable and operable by keyboard alone. This is a requirement for users with motor disabilities, and it's also exactly what screen readers use to navigate your interface.\n\nThe two most common failures are invisible focus states (elements that are keyboard-reachable but don't visually indicate focus) and tab traps (modals that steal focus and never release it).",
      },
      {
        id: "language",
        heading: "Plain Language",
        content:
          "Accessibility is not just visual. Cognitive accessibility — writing in plain, simple language — matters enormously for users with cognitive disabilities, non-native speakers, and anyone reading quickly.\n\nA useful test: read your error messages and onboarding copy aloud. If they sound like legal disclaimers or engineering tickets, rewrite them.",
      },
      {
        id: "closing",
        heading: "Closing",
        content:
          "Accessible design is better design. The constraints it imposes — clarity, contrast, navigability — are the same constraints that produce great interfaces for everyone. Build for the edges and the middle takes care of itself.",
      },
    ],
  },
  {
    slug:     "the-rise-of-microservices-in-modern-web",
    title:    "The Rise of Microservices in Modern Web",
    excerpt:  "Microservices promise flexibility and scale. Here's what they actually deliver — and when you should and shouldn't reach for them.",
    category: "Engineering",
    author:   "Ashaya Sah",
    date:     "May 5, 2025",
    readTime: "8 min read",
    tags:     ["Engineering", "Architecture", "Backend"],
    gradient: "linear-gradient(145deg, #b8c8c0 0%, #90b0a0 100%)",
    toc: [
      { id: "what-changed",  label: "What Changed" },
      { id: "real-cost",     label: "The Real Cost" },
      { id: "when-to-use",   label: "When to Use Them" },
      { id: "closing",       label: "Closing" },
    ],
    sections: [
      {
        id: "what-changed",
        heading: "What Changed",
        content:
          "Microservices emerged as a response to the failure modes of large monoliths — the kind of codebase where changing a button required a 45-minute deploy pipeline and sign-off from three teams.\n\nContainerisation, orchestration platforms like Kubernetes, and the normalisation of API-first design made microservices operationally viable for smaller teams. What used to require a platform team of 20 can now be managed by 2–3 engineers with the right tooling.",
      },
      {
        id: "real-cost",
        heading: "The Real Cost",
        content:
          "The promise of microservices is organisational: independent deployability, isolated failure domains, and the ability for teams to move without coordination.\n\nThe cost is operational complexity that compounds. Every service boundary is a network call. Every network call can fail. Every failure mode needs graceful handling.",
        list: [
          "Service discovery and load balancing",
          "Distributed tracing and observability",
          "Cross-service authentication",
          "Data consistency without shared databases",
          "Versioning and backward compatibility",
        ],
      },
      {
        id: "when-to-use",
        heading: "When to Use Them",
        content:
          "The honest answer: later than you think. Most products still finding product-market fit will be better served by a well-structured monolith. Speed of iteration matters more than architectural purity at that stage.\n\nReach for microservices when you have distinct scaling requirements per domain, organisational boundaries that map cleanly to service boundaries, and a platform team that can absorb the operational complexity.",
      },
      {
        id: "closing",
        heading: "Closing",
        content:
          "Microservices are a tool, not a goal. The question is not 'should we use microservices' but 'what problem are we solving, and is this the right tool for it.'\n\nFor most teams, the answer is: start with a modular monolith, extract services when the pain is real, and instrument everything from day one so you can see what's actually happening.",
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}

export function getRelatedPosts(slug: string, count = 3): Post[] {
  return posts.filter(p => p.slug !== slug).slice(0, count)
}
