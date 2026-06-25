// Client-safe content-model metadata. No drizzle imports here so this can be
// imported from both server pages and client editor components.

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "select"
  | "tags"
  | "json"
  | "image"

export type Field = {
  /** Must match the drizzle column property name (camelCase). */
  name: string
  label: string
  type: FieldType
  /** Options for `select` fields. */
  options?: { value: string; label: string }[]
  placeholder?: string
  /** Render across the full row width (textarea/json default to true). */
  full?: boolean
}

export type ResourceMeta = {
  key: string
  label: string
  singular: string
  description: string
  /** Field used as the row's headline in the editor list. */
  titleField: string
  fields: Field[]
}

export const RESOURCES: ResourceMeta[] = [
  {
    key: "blog",
    label: "Blog posts",
    singular: "post",
    description: "Articles shown on /blog and their full detail pages.",
    titleField: "title",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "slug", label: "Slug", type: "text", placeholder: "my-post" },
      { name: "category", label: "Category", type: "text" },
      { name: "author", label: "Author", type: "text" },
      { name: "date", label: "Date", type: "text", placeholder: "Jun 10, 2025" },
      { name: "readTime", label: "Read time", type: "text", placeholder: "5 min read" },
      { name: "published", label: "Published", type: "boolean" },
      { name: "excerpt", label: "Excerpt", type: "textarea" },
      { name: "coverImage", label: "Cover image", type: "image", full: true },
      { name: "gradient", label: "Cover gradient (fallback if no image)", type: "text", full: true },
      { name: "tags", label: "Tags", type: "tags" },
      { name: "toc", label: "Table of contents (JSON)", type: "json" },
      { name: "sections", label: "Sections (JSON)", type: "json" },
    ],
  },
  {
    key: "products",
    label: "Products",
    singular: "product",
    description: "Cards shown on the /products grid.",
    titleField: "name",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "badge", label: "Category", type: "text", placeholder: "Web app" },
      { name: "href", label: "Visit link", type: "text", placeholder: "https://… or #" },
      { name: "ctaLabel", label: "Button label", type: "text", placeholder: "Visit" },
      { name: "dark", label: "Dark card", type: "boolean" },
      { name: "image", label: "Image (optional)", type: "image", full: true },
      { name: "preview", label: "Preview gradient (fallback if no image)", type: "text", full: true },
      { name: "description", label: "Description (shown on hover)", type: "textarea" },
    ],
  },
  {
    key: "projects",
    label: "Projects",
    singular: "project",
    description: "Cards in the homepage Projects bento grid.",
    titleField: "title",
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "tag", label: "Tag", type: "text", placeholder: "Web app" },
      { name: "href", label: "Link (View project)", type: "text", placeholder: "https://… or #" },
      { name: "meta", label: "Services", type: "text", placeholder: "Figma Design · Next.js Development" },
      { name: "colSpan", label: "Width — columns (1–6)", type: "number", placeholder: "3" },
      { name: "rowSpan", label: "Height — rows (1–3)", type: "number", placeholder: "2" },
      { name: "dark", label: "Stronger overlay", type: "boolean" },
      { name: "image", label: "Image (shown on the card)", type: "image", full: true },
      { name: "preview", label: "Fallback gradient (CSS)", type: "text", full: true, placeholder: "linear-gradient(160deg,#1d3a30,#0c1c17)" },
      { name: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    key: "pricing",
    label: "Pricing plans",
    singular: "plan",
    description: "Plans on /pricing and the homepage pricing section.",
    titleField: "name",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "tagline", label: "Tagline", type: "text" },
      { name: "monthlyPrice", label: "Monthly price", type: "number" },
      { name: "badge", label: "Badge", type: "text" },
      {
        name: "badgeVariant",
        label: "Badge color",
        type: "select",
        options: [
          { value: "green", label: "Green" },
          { value: "yellow", label: "Yellow" },
        ],
      },
      { name: "dark", label: "Dark card", type: "boolean" },
      { name: "wide", label: "Wide card", type: "boolean" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "features", label: "Features", type: "tags" },
    ],
  },
  {
    key: "testimonials",
    label: "Testimonials",
    singular: "testimonial",
    description: "Quotes in the homepage testimonials carousel.",
    titleField: "name",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "role", label: "Role", type: "text" },
      { name: "company", label: "Company", type: "text" },
      { name: "quote", label: "Quote", type: "textarea" },
    ],
  },
  {
    key: "faqs",
    label: "FAQs",
    singular: "FAQ",
    description: "Questions in the homepage FAQ accordion.",
    titleField: "question",
    fields: [
      { name: "question", label: "Question", type: "text", full: true },
      { name: "answer", label: "Answer", type: "textarea" },
    ],
  },
  {
    key: "insights",
    label: "Insights",
    singular: "insight",
    description: "Cards in the homepage insights carousel.",
    titleField: "name",
    fields: [
      { name: "tag", label: "Tag", type: "text" },
      { name: "name", label: "Name", type: "text" },
      { name: "role", label: "Role", type: "text" },
      { name: "text", label: "Text", type: "textarea" },
    ],
  },
  {
    key: "benefits",
    label: "Benefit cards",
    singular: "benefit",
    description: "The benefit/value cards on the homepage.",
    titleField: "title",
    fields: [
      { name: "icon", label: "Icon", type: "text" },
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    key: "comparison",
    label: "Comparison rows",
    singular: "row",
    description: "Rows in the Saastra-vs-traditional comparison table.",
    titleField: "label",
    fields: [
      { name: "label", label: "Label", type: "text", full: true },
      { name: "saastra", label: "Saastra", type: "text" },
      { name: "traditional", label: "Traditional", type: "text" },
    ],
  },
  {
    key: "nav",
    label: "Nav links",
    singular: "link",
    description: "Links in the top navigation bar.",
    titleField: "label",
    fields: [
      { name: "label", label: "Label", type: "text" },
      { name: "href", label: "Href", type: "text" },
    ],
  },
  {
    key: "footer",
    label: "Footer links",
    singular: "link",
    description: "Links in the footer, grouped by column title.",
    titleField: "label",
    fields: [
      { name: "columnTitle", label: "Column", type: "text" },
      { name: "label", label: "Label", type: "text" },
      { name: "href", label: "Href", type: "text" },
    ],
  },
  {
    key: "marquee",
    label: "Marquee items",
    singular: "item",
    description: "Logo and tech labels in the scrolling marquees.",
    titleField: "label",
    fields: [
      {
        name: "kind",
        label: "Kind",
        type: "select",
        options: [
          { value: "logo", label: "Logo" },
          { value: "tech", label: "Tech" },
        ],
      },
      { name: "label", label: "Label", type: "text" },
    ],
  },
]

export function getResourceMeta(key: string): ResourceMeta | undefined {
  return RESOURCES.find((r) => r.key === key)
}

/** Convert a DB row into the editor's working representation. */
export function toEditableRow(
  meta: ResourceMeta,
  row: Record<string, unknown>,
): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const f of meta.fields) {
    const v = row[f.name]
    if (f.type === "json") {
      out[f.name] = JSON.stringify(v ?? [], null, 2)
    } else if (f.type === "tags") {
      out[f.name] = Array.isArray(v) ? v : []
    } else {
      out[f.name] = v ?? (f.type === "boolean" ? false : f.type === "number" ? 0 : "")
    }
  }
  return out
}

/** A blank row with sensible defaults for every field. */
export function emptyRow(meta: ResourceMeta): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const f of meta.fields) {
    if (f.type === "boolean") out[f.name] = false
    else if (f.type === "number") out[f.name] = 0
    else if (f.type === "tags") out[f.name] = []
    else if (f.type === "json") out[f.name] = "[]"
    else if (f.type === "select") out[f.name] = f.options?.[0]?.value ?? ""
    else out[f.name] = ""
  }
  return out
}
