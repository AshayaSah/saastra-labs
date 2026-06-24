import { getBlogPosts } from "@/lib/db/queries"

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans text-sl-text antialiased">
      {/* ── BLOG LISTING ────────────────────────────────────────── */}
      <div className="sl-container sl-page-top pb-section-end">
        <div className="sl-display">
          <span className="sl-display-title">Blog</span>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="sl-blog-card-link"
            >
              <article className="sl-blog-card flex h-full flex-col">
                {/* Cover image */}
                <div
                  className="relative h-[190px]"
                  style={{ background: post.gradient }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.06) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-[22px] pt-5 pb-[18px]">
                  <span className="sl-mono-label">{post.category}</span>

                  <h2 className="mt-[10px] mb-2 text-[17px] leading-[1.28] font-semibold tracking-[-0.012em] text-sl-text">
                    {post.title}
                  </h2>

                  <p
                    className="mt-0 mb-5 overflow-hidden text-[13.5px] leading-[1.57] text-sl-muted"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Read more + read time */}
                  <div className="mt-auto flex items-center justify-between border-t border-sl-border pt-[14px]">
                    <span className="sl-read-more">
                      Read post <span>→</span>
                    </span>
                    <span className="text-[12px] text-sl-subtle">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
