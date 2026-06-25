import { config } from "dotenv"
config({ path: ".env.local" })

import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import * as schema from "../lib/db/schema"
import {
  NAV_LINKS,
  PRODUCTS,
  PROJECTS,
  LOGO_MARQUEE,
  INSIGHTS,
  COMP_ROWS,
  BENEFIT_CARDS,
  PRICING_PLANS,
  TESTIMONIALS,
  FAQS,
  TECH_LOGOS,
  FOOTER_COLUMNS,
  PAGE_SECTIONS,
  COMPANY_STATS,
  COMPANY_VALUES,
  TEAM_MEMBERS,
  JOB_OPENINGS,
} from "../lib/constants"
import { posts } from "../lib/blog"

const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql, { schema })

async function main() {
  console.log("Seeding database…")

  // Wipe existing rows so the seed is idempotent
  await Promise.all([
    db.delete(schema.blogPosts),
    db.delete(schema.products),
    db.delete(schema.projects),
    db.delete(schema.pricingPlans),
    db.delete(schema.testimonials),
    db.delete(schema.faqs),
    db.delete(schema.insights),
    db.delete(schema.benefitCards),
    db.delete(schema.comparisonRows),
    db.delete(schema.navLinks),
    db.delete(schema.footerLinks),
    db.delete(schema.marqueeItems),
    db.delete(schema.pageSections),
    db.delete(schema.companyStats),
    db.delete(schema.companyValues),
    db.delete(schema.teamMembers),
    db.delete(schema.jobOpenings),
  ])

  await db.insert(schema.blogPosts).values(
    posts.map((p, i) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      category: p.category,
      author: p.author,
      date: p.date,
      readTime: p.readTime,
      tags: p.tags,
      gradient: p.gradient,
      toc: p.toc,
      sections: p.sections,
      published: true,
      sortOrder: i,
    })),
  )

  await db.insert(schema.products).values(
    PRODUCTS.map((p, i) => ({
      name: p.name,
      badge: p.badge,
      description: p.description,
      image: p.image ?? "",
      preview: p.preview,
      href: p.href,
      ctaLabel: p.ctaLabel,
      dark: p.dark ?? false,
      sortOrder: i,
    })),
  )

  await db.insert(schema.projects).values(
    PROJECTS.map((p, i) => ({
      title: p.title,
      tag: p.tag,
      meta: p.meta,
      description: p.description,
      image: p.image ?? "",
      preview: p.preview,
      href: p.href,
      dark: p.dark ?? false,
      colSpan: p.colSpan,
      rowSpan: p.rowSpan,
      sortOrder: i,
    })),
  )

  await db.insert(schema.pricingPlans).values(
    PRICING_PLANS.map((p, i) => ({
      name: p.name,
      tagline: p.tagline,
      description: p.description,
      monthlyPrice: p.monthlyPrice,
      badge: p.badge,
      badgeVariant: p.badgeVariant,
      features: p.features,
      dark: p.dark ?? false,
      wide: p.wide ?? false,
      sortOrder: i,
    })),
  )

  await db.insert(schema.testimonials).values(
    TESTIMONIALS.map((t, i) => ({
      company: t.company,
      quote: t.quote,
      name: t.name,
      role: t.role,
      sortOrder: i,
    })),
  )

  await db.insert(schema.faqs).values(
    FAQS.map((f, i) => ({ question: f.question, answer: f.answer, sortOrder: i })),
  )

  await db.insert(schema.insights).values(
    INSIGHTS.map((x, i) => ({
      tag: x.tag,
      text: x.text,
      name: x.name,
      role: x.role,
      sortOrder: i,
    })),
  )

  await db.insert(schema.benefitCards).values(
    BENEFIT_CARDS.map((b, i) => ({
      icon: b.icon,
      title: b.title,
      description: b.description,
      sortOrder: i,
    })),
  )

  await db.insert(schema.comparisonRows).values(
    COMP_ROWS.map((c, i) => ({
      label: c.label,
      saastra: c.saastra,
      traditional: c.traditional,
      sortOrder: i,
    })),
  )

  await db.insert(schema.navLinks).values(
    NAV_LINKS.map((n, i) => ({ label: n.label, href: n.href, sortOrder: i })),
  )

  const footerRows = FOOTER_COLUMNS.flatMap((col, ci) =>
    col.links.map((l, li) => ({
      columnTitle: col.title,
      label: l.label,
      href: l.href,
      sortOrder: ci * 100 + li,
    })),
  )
  await db.insert(schema.footerLinks).values(footerRows)

  const marqueeRows = [
    ...LOGO_MARQUEE.map((label, i) => ({ kind: "logo" as const, label, sortOrder: i })),
    ...TECH_LOGOS.map((label, i) => ({ kind: "tech" as const, label, sortOrder: i })),
  ]
  await db.insert(schema.marqueeItems).values(marqueeRows)

  await db.insert(schema.pageSections).values(
    PAGE_SECTIONS.map((s, i) => ({
      page: s.page,
      eyebrow: s.eyebrow,
      heading: s.heading,
      body: s.body,
      sortOrder: i,
    })),
  )

  await db.insert(schema.companyStats).values(
    COMPANY_STATS.map((s, i) => ({ value: s.value, label: s.label, sortOrder: i })),
  )

  await db.insert(schema.companyValues).values(
    COMPANY_VALUES.map((v, i) => ({
      icon: v.icon,
      title: v.title,
      description: v.description,
      sortOrder: i,
    })),
  )

  await db.insert(schema.teamMembers).values(
    TEAM_MEMBERS.map((m, i) => ({
      name: m.name,
      role: m.role,
      bio: m.bio,
      avatar: m.avatar ?? "",
      sortOrder: i,
    })),
  )

  await db.insert(schema.jobOpenings).values(
    JOB_OPENINGS.map((j, i) => ({
      title: j.title,
      department: j.department,
      location: j.location,
      type: j.type,
      description: j.description,
      applyHref: j.applyHref,
      sortOrder: i,
    })),
  )

  console.log("✓ Seed complete")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
