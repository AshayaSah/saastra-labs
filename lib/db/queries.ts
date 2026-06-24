import { unstable_cache } from "next/cache"
import { asc, eq } from "drizzle-orm"
import { db } from "./index"
import {
  blogPosts,
  products,
  pricingPlans,
  testimonials,
  faqs,
  insights,
  benefitCards,
  comparisonRows,
  navLinks,
  footerLinks,
  marqueeItems,
} from "./schema"

// Cache tags — revalidated from admin server actions on save.
export const TAGS = {
  blog: "blog",
  products: "products",
  pricing: "pricing",
  testimonials: "testimonials",
  faqs: "faqs",
  insights: "insights",
  benefits: "benefits",
  comparison: "comparison",
  nav: "nav",
  footer: "footer",
  marquee: "marquee",
} as const

// Inferred row types, re-exported for components.
export type BlogPostRow = typeof blogPosts.$inferSelect
export type ProductRow = typeof products.$inferSelect
export type PricingPlanRow = typeof pricingPlans.$inferSelect
export type TestimonialRow = typeof testimonials.$inferSelect
export type FaqRow = typeof faqs.$inferSelect
export type InsightRow = typeof insights.$inferSelect
export type BenefitCardRow = typeof benefitCards.$inferSelect
export type ComparisonRowRow = typeof comparisonRows.$inferSelect
export type NavLinkRow = typeof navLinks.$inferSelect
export type FooterLinkRow = typeof footerLinks.$inferSelect
export type MarqueeItemRow = typeof marqueeItems.$inferSelect

export type FooterColumnData = {
  title: string
  links: { label: string; href: string }[]
}

export const getBlogPosts = unstable_cache(
  async (): Promise<BlogPostRow[]> => {
    return db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(asc(blogPosts.sortOrder))
  },
  ["blog-posts"],
  { tags: [TAGS.blog] },
)

export const getBlogPost = unstable_cache(
  async (slug: string): Promise<BlogPostRow | undefined> => {
    const rows = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1)
    return rows[0]
  },
  ["blog-post"],
  { tags: [TAGS.blog] },
)

export const getRelatedBlogPosts = unstable_cache(
  async (slug: string, count = 3): Promise<BlogPostRow[]> => {
    const all = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.published, true))
      .orderBy(asc(blogPosts.sortOrder))
    return all.filter((p) => p.slug !== slug).slice(0, count)
  },
  ["related-blog-posts"],
  { tags: [TAGS.blog] },
)

export const getProducts = unstable_cache(
  async (): Promise<ProductRow[]> => {
    return db.select().from(products).orderBy(asc(products.sortOrder))
  },
  ["products"],
  { tags: [TAGS.products] },
)

export const getPricingPlans = unstable_cache(
  async (): Promise<PricingPlanRow[]> => {
    return db.select().from(pricingPlans).orderBy(asc(pricingPlans.sortOrder))
  },
  ["pricing-plans"],
  { tags: [TAGS.pricing] },
)

export const getTestimonials = unstable_cache(
  async (): Promise<TestimonialRow[]> => {
    return db.select().from(testimonials).orderBy(asc(testimonials.sortOrder))
  },
  ["testimonials"],
  { tags: [TAGS.testimonials] },
)

export const getFaqs = unstable_cache(
  async (): Promise<FaqRow[]> => {
    return db.select().from(faqs).orderBy(asc(faqs.sortOrder))
  },
  ["faqs"],
  { tags: [TAGS.faqs] },
)

export const getInsights = unstable_cache(
  async (): Promise<InsightRow[]> => {
    return db.select().from(insights).orderBy(asc(insights.sortOrder))
  },
  ["insights"],
  { tags: [TAGS.insights] },
)

export const getBenefitCards = unstable_cache(
  async (): Promise<BenefitCardRow[]> => {
    return db.select().from(benefitCards).orderBy(asc(benefitCards.sortOrder))
  },
  ["benefit-cards"],
  { tags: [TAGS.benefits] },
)

export const getComparisonRows = unstable_cache(
  async (): Promise<ComparisonRowRow[]> => {
    return db.select().from(comparisonRows).orderBy(asc(comparisonRows.sortOrder))
  },
  ["comparison-rows"],
  { tags: [TAGS.comparison] },
)

export const getNavLinks = unstable_cache(
  async (): Promise<NavLinkRow[]> => {
    return db.select().from(navLinks).orderBy(asc(navLinks.sortOrder))
  },
  ["nav-links"],
  { tags: [TAGS.nav] },
)

export const getFooterColumns = unstable_cache(
  async (): Promise<FooterColumnData[]> => {
    const rows = await db.select().from(footerLinks).orderBy(asc(footerLinks.sortOrder))
    const map = new Map<string, FooterColumnData>()
    for (const r of rows) {
      if (!map.has(r.columnTitle)) map.set(r.columnTitle, { title: r.columnTitle, links: [] })
      map.get(r.columnTitle)!.links.push({ label: r.label, href: r.href })
    }
    return [...map.values()]
  },
  ["footer-columns"],
  { tags: [TAGS.footer] },
)

export const getMarquee = unstable_cache(
  async (kind: "logo" | "tech"): Promise<string[]> => {
    const rows = await db
      .select()
      .from(marqueeItems)
      .where(eq(marqueeItems.kind, kind))
      .orderBy(asc(marqueeItems.sortOrder))
    return rows.map((r) => r.label)
  },
  ["marquee"],
  { tags: [TAGS.marquee] },
)
