import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  jsonb,
  timestamp,
} from "drizzle-orm/pg-core"

import type { TocItem, Section } from "@/lib/blog"

// ── Blog posts ───────────────────────────────────────────────
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull().default(""),
  category: text("category").notNull().default(""),
  author: text("author").notNull().default(""),
  date: text("date").notNull().default(""),
  readTime: text("read_time").notNull().default(""),
  tags: jsonb("tags").$type<string[]>().notNull().default([]),
  gradient: text("gradient").notNull().default(""),
  coverImage: text("cover_image").notNull().default(""),
  toc: jsonb("toc").$type<TocItem[]>().notNull().default([]),
  sections: jsonb("sections").$type<Section[]>().notNull().default([]),
  published: boolean("published").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

// ── Products ─────────────────────────────────────────────────
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  badge: text("badge").notNull().default(""),
  description: text("description").notNull().default(""),
  image: text("image").notNull().default(""),
  preview: text("preview").notNull().default(""),
  href: text("href").notNull().default("#"),
  ctaLabel: text("cta_label").notNull().default("Visit"),
  dark: boolean("dark").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Projects (homepage work grid) ────────────────────────────
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull().default(""),
  tag: text("tag").notNull().default(""),
  meta: text("meta").notNull().default(""),
  description: text("description").notNull().default(""),
  image: text("image").notNull().default(""),
  preview: text("preview").notNull().default(""),
  href: text("href").notNull().default("#"),
  dark: boolean("dark").notNull().default(false),
  colSpan: integer("col_span").notNull().default(2),
  rowSpan: integer("row_span").notNull().default(2),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Pricing plans ────────────────────────────────────────────
export const pricingPlans = pgTable("pricing_plans", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  tagline: text("tagline").notNull().default(""),
  description: text("description").notNull().default(""),
  monthlyPrice: integer("monthly_price").notNull().default(0),
  badge: text("badge").notNull().default(""),
  badgeVariant: text("badge_variant").$type<"green" | "yellow">().notNull().default("green"),
  features: jsonb("features").$type<string[]>().notNull().default([]),
  dark: boolean("dark").notNull().default(false),
  wide: boolean("wide").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Testimonials ─────────────────────────────────────────────
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  company: text("company").notNull().default(""),
  quote: text("quote").notNull().default(""),
  name: text("name").notNull().default(""),
  role: text("role").notNull().default(""),
  avatar: text("avatar").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── FAQs ─────────────────────────────────────────────────────
export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  question: text("question").notNull().default(""),
  answer: text("answer").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Insights (testimonial-style cards on home) ───────────────
export const insights = pgTable("insights", {
  id: serial("id").primaryKey(),
  tag: text("tag").notNull().default(""),
  text: text("text").notNull().default(""),
  name: text("name").notNull().default(""),
  role: text("role").notNull().default(""),
  avatar: text("avatar").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Benefit cards ────────────────────────────────────────────
export const benefitCards = pgTable("benefit_cards", {
  id: serial("id").primaryKey(),
  icon: text("icon").notNull().default(""),
  title: text("title").notNull().default(""),
  description: text("description").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Comparison table rows ────────────────────────────────────
export const comparisonRows = pgTable("comparison_rows", {
  id: serial("id").primaryKey(),
  label: text("label").notNull().default(""),
  saastra: text("saastra").notNull().default(""),
  traditional: text("traditional").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Nav links ────────────────────────────────────────────────
export const navLinks = pgTable("nav_links", {
  id: serial("id").primaryKey(),
  label: text("label").notNull().default(""),
  href: text("href").notNull().default("#"),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Footer links (grouped by column title) ───────────────────
export const footerLinks = pgTable("footer_links", {
  id: serial("id").primaryKey(),
  columnTitle: text("column_title").notNull().default(""),
  label: text("label").notNull().default(""),
  href: text("href").notNull().default("#"),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Marquee items (logo & tech rows) ─────────────────────────
export const marqueeItems = pgTable("marquee_items", {
  id: serial("id").primaryKey(),
  kind: text("kind").$type<"logo" | "tech">().notNull().default("logo"),
  label: text("label").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Company page sections (About / Team / Careers heroes + prose) ──
export const pageSections = pgTable("page_sections", {
  id: serial("id").primaryKey(),
  page: text("page")
    .$type<"about" | "team" | "careers">()
    .notNull()
    .default("about"),
  eyebrow: text("eyebrow").notNull().default(""),
  heading: text("heading").notNull().default(""),
  body: text("body").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Company stats (About) ────────────────────────────────────
export const companyStats = pgTable("company_stats", {
  id: serial("id").primaryKey(),
  value: text("value").notNull().default(""),
  label: text("label").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Company values (About / Careers) ─────────────────────────
export const companyValues = pgTable("company_values", {
  id: serial("id").primaryKey(),
  icon: text("icon").notNull().default(""),
  title: text("title").notNull().default(""),
  description: text("description").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Team members (Team) ──────────────────────────────────────
export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().default(""),
  role: text("role").notNull().default(""),
  bio: text("bio").notNull().default(""),
  avatar: text("avatar").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Job openings (Careers) ───────────────────────────────────
export const jobOpenings = pgTable("job_openings", {
  id: serial("id").primaryKey(),
  title: text("title").notNull().default(""),
  department: text("department").notNull().default(""),
  location: text("location").notNull().default(""),
  type: text("type").notNull().default("Full-time"),
  description: text("description").notNull().default(""),
  applyHref: text("apply_href").notNull().default("#"),
  sortOrder: integer("sort_order").notNull().default(0),
})

// ── Contact form submissions ─────────────────────────────────
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company").notNull().default(""),
  phone: text("phone").notNull().default(""),
  topic: text("topic").notNull().default(""),
  message: text("message").notNull(),
  handled: boolean("handled").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
})
