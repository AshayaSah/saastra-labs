// Server-only: maps resource keys to their drizzle tables and cache tags.
import { type PgTable } from "drizzle-orm/pg-core"
import {
  blogPosts,
  products,
  projects,
  pricingPlans,
  testimonials,
  faqs,
  insights,
  benefitCards,
  comparisonRows,
  navLinks,
  footerLinks,
  marqueeItems,
  pageSections,
  companyStats,
  companyValues,
  teamMembers,
  jobOpenings,
} from "@/lib/db/schema"
import { TAGS } from "@/lib/db/queries"

// Each table here carries `sortOrder` plus the columns described in fields.ts.
export const RESOURCE_TABLES: Record<string, PgTable> = {
  blog: blogPosts,
  products,
  projects,
  pricing: pricingPlans,
  testimonials,
  faqs,
  insights,
  benefits: benefitCards,
  comparison: comparisonRows,
  nav: navLinks,
  footer: footerLinks,
  marquee: marqueeItems,
  pages: pageSections,
  stats: companyStats,
  values: companyValues,
  team: teamMembers,
  jobs: jobOpenings,
}

export const RESOURCE_TAGS: Record<string, string> = {
  blog: TAGS.blog,
  products: TAGS.products,
  projects: TAGS.projects,
  pricing: TAGS.pricing,
  testimonials: TAGS.testimonials,
  faqs: TAGS.faqs,
  insights: TAGS.insights,
  benefits: TAGS.benefits,
  comparison: TAGS.comparison,
  nav: TAGS.nav,
  footer: TAGS.footer,
  marquee: TAGS.marquee,
  pages: TAGS.pages,
  stats: TAGS.stats,
  values: TAGS.values,
  team: TAGS.team,
  jobs: TAGS.jobs,
}
