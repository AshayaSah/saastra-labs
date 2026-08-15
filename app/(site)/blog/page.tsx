import { getBlogPosts } from "@/lib/db/queries"
import { coverStyle } from "@/lib/utils"

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans text-sl-text antialiased">
      {/* ── BLOG LISTING ────────────────────────────────────────── */}
      <div className="sl-container sl-page-top pb-section-end">
        <div className="sl-display">
          <h1 className="sl-display-title">Blog</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {posts.map((post, i) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`sl-focus-ring sl-blog-card-link sl-reveal sl-d${(i % 3) + 1}`}
            >
              <article className="sl-blog-card flex h-full flex-col">
                {/* Cover image */}
                <div
                  className="relative h-[190px]"
                  style={coverStyle(post.coverImage, post.gradient)}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 55%, rgb(var(--sl-dark-rgb) / 0.06) 100%)",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-5.5 pt-5 pb-4.5">
                  <span className="sl-mono-label">{post.category}</span>

                  <h2 className="mt-2.5 mb-2 text-[17px] leading-[1.28] font-medium tracking-[-0.012em] text-sl-text">
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
                  <div className="mt-auto flex items-center justify-between border-t border-sl-border pt-3.5">
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
