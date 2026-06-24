import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ChatButton } from "@/components/chat-button"
import { getBlogPost, getRelatedBlogPosts } from "@/lib/db/queries"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post || !post.published) return { title: "Post not found" }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post || !post.published) notFound()

  const related = await getRelatedBlogPosts(slug)

  return (
    <div className="bg-sl-bg font-sans text-sl-text antialiased">
      {/* ── ARTICLE AREA ────────────────────────────────────────── */}
      <div className="sl-container sl-page-top pb-section-end">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] text-sl-subtle uppercase">
          <a href="/blog" className="text-sl-subtle no-underline">
            Blog
          </a>
          <span>/</span>
          <span className="text-sl-muted">{post.category}</span>
          <span>/</span>
          <span className="text-sl-body">{post.title}</span>
        </div>

        {/* Hero — two columns */}
        <div className="sl-reveal mb-13 grid grid-cols-2 items-start gap-13">
          {/* Left: title + author */}
          <div>
            <span className="sl-mono-label mb-3.5 block">{post.category}</span>
            <h1 className="mb-5.5 text-h1 text-sl-text">{post.title}</h1>
            <p className="mb-7 text-body text-sl-muted">{post.excerpt}</p>
            <div className="flex items-center gap-2.5">
              <div
                className="h-[34px] w-[34px] shrink-0 rounded-full"
                style={{
                  background: "linear-gradient(140deg,#c9c6bf,#a8a59d)",
                }}
              />
              <div className="leading-[1.3]">
                <div className="text-meta font-semibold">{post.author}</div>
                <div className="text-[12px] text-sl-subtle">
                  {post.date} · {post.readTime}
                </div>
              </div>
            </div>
          </div>

          {/* Right: cover image */}
          <div
            className="relative h-80 overflow-hidden rounded-card"
            style={{ background: post.gradient }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.08) 100%)",
              }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mb-13 border-t border-sl-border-strong" />

        {/* Body — sidebar + content */}
        <div className="mb-24 grid grid-cols-[210px_1fr] gap-13">
          {/* Sidebar */}
          <aside className="sticky top-22 self-start">
            <div className="sl-mono-label mb-3.5">On this page</div>
            <nav>
              {post.toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="sl-toc-link">
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Sidebar CTA */}
            <div className="mt-9 rounded-card border border-white/[0.06] bg-sl-surface-dark px-[18px] py-5">
              <h3 className="mb-[9px] text-[14.5px] leading-[1.35] font-semibold text-sl-text-inv">
                Need a fast-moving engineering team?
              </h3>
              <p className="mb-4 text-[12.5px] leading-[1.55] text-sl-subtle-inv">
                Book a call and we&apos;ll map out a plan tailored to your
                roadmap.
              </p>
              <ChatButton href="/contact" />
            </div>
          </aside>

          {/* Article body */}
          <article>
            {post.sections.map((section, i) => (
              <section
                key={section.id}
                id={section.id}
                className={`sl-reveal sl-d${(i % 3) + 1} mb-11`}
              >
                <h2 className="mb-3.5 text-[clamp(19px,2vw,23px)] font-bold tracking-[-0.02em] text-sl-text">
                  {section.heading}
                </h2>
                {section.content.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="mb-3.5 text-[15.5px] leading-[1.72] text-sl-body"
                  >
                    {para}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-1.5 list-disc pl-[18px]">
                    {section.list.map((item, i) => (
                      <li
                        key={i}
                        className="mb-1.5 text-body leading-[1.65] text-sl-body"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Tags */}
            <div className="mt-2 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-pill border border-sl-border bg-sl-surface-2 px-[13px] py-1 text-[12px] font-medium text-sl-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        {/* Related posts */}
        <div className="mb-24">
          <h2 className="mb-7 text-[24px] font-bold tracking-[-0.025em] text-sl-text">
            Related posts
          </h2>
          <div className="grid grid-cols-3 gap-5">
            {related.map((rel, i) => (
              <a
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className={`sl-blog-card-link sl-reveal sl-d${(i % 3) + 1}`}
              >
                <article className="sl-blog-card">
                  <div className="h-40" style={{ background: rel.gradient }} />
                  <div className="px-[18px] pt-4 pb-5">
                    <span className="sl-mono-label">{rel.category}</span>
                    <h3 className="mt-2 mb-1.5 text-[15px] leading-[1.25] font-semibold text-sl-text">
                      {rel.title}
                    </h3>
                    <div className="text-[11.5px] text-sl-subtle">
                      {rel.author} · {rel.readTime}
                    </div>
                    <span className="sl-read-more mt-3">
                      Read post <span>→</span>
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
