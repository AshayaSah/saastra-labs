import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { getBlogPosts } from "@/lib/db/queries"

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  let postEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await getBlogPosts()
    postEntries = posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.updatedAt ?? now,
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  } catch {
    // DB unreachable (e.g. at build time) — still emit the static sitemap.
  }

  return [...staticEntries, ...postEntries]
}
