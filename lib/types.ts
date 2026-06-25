export interface NavLink {
  label: string
  href: string
}

export interface Product {
  id: string
  name: string
  badge: string
  description: string
  preview: string
  previewLabel: string
  dark?: boolean
}

export interface ProjectItem {
  id: string
  title: string
  tag: string
  meta: string
  description: string
  image?: string
  preview: string
  href: string
  dark?: boolean
  /** Columns the card spans in the 6-col bento (1–6). */
  colSpan: number
  /** Rows the card spans — controls height (1–3). */
  rowSpan: number
}

export interface InsightItem {
  tag: string
  text: string
  name: string
  role: string
}

export interface ComparisonRow {
  label: string
  saastra: string
  traditional: string
}

export interface BenefitCard {
  icon: string
  title: string
  description: string
}

export interface PricingPlan {
  id: string
  name: string
  tagline: string
  description: string
  monthlyPrice: number
  badge: string
  badgeVariant: "green" | "yellow"
  features: string[]
  dark?: boolean
  wide?: boolean
}

export interface TestimonialItem {
  company: string
  quote: string
  name: string
  role: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}
