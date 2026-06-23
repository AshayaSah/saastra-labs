import { notFound } from "next/navigation"
import { ChatButton } from "@/components/chat-button"
import { Navbar } from "@/components/navbar"
import { getPost, getRelatedPosts, posts } from "@/lib/blog"

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

const FOOTER_COLS = [
  { title: "Pages",   links: ["Work", "Products", "Pricing", "Blog"] },
  { title: "Company", links: ["About", "Team", "Careers", "Contact"] },
  { title: "Legal",   links: ["Privacy", "Terms", "Cookies"] },
]

const MONO = "var(--font-mono), ui-monospace, monospace"
const SANS = "var(--font-sans), system-ui, sans-serif"

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug)

  return (
    <>
      <Navbar activePath="/blog" />
      <div style={{
        background: "#e9e7e2",
        fontFamily: SANS,
        color: "#0c0c0c",
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}>

      {/* ── ARTICLE AREA ────────────────────────────────────────── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 28px 0" }}>

        {/* Breadcrumb */}
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          fontFamily: MONO, fontSize: 11, letterSpacing: ".1em",
          color: "#8a877f", textTransform: "uppercase",
          marginBottom: 40,
        }}>
          <a href="/blog" style={{ color: "#8a877f", textDecoration: "none" }}>Blog</a>
          <span>/</span>
          <span style={{ color: "#6b6862" }}>{post.category}</span>
          <span>/</span>
          <span style={{ color: "#3a382f" }}>{post.title}</span>
        </div>

        {/* Hero — two columns */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 52, alignItems: "start", marginBottom: 52,
        }}>
          {/* Left: title + author */}
          <div>
            <span style={{
              fontFamily: MONO, fontSize: 10, letterSpacing: ".14em",
              color: "#9a978f", textTransform: "uppercase",
              display: "block", marginBottom: 14,
            }}>{post.category}</span>
            <h1 style={{
              fontSize: "clamp(28px, 3.8vw, 44px)",
              fontWeight: 700, letterSpacing: "-.03em",
              lineHeight: 1.1, margin: "0 0 22px",
            }}>{post.title}</h1>
            <p style={{ fontSize: 15, color: "#6b6862", lineHeight: 1.6, margin: "0 0 28px" }}>
              {post.excerpt}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: "50%",
                background: "linear-gradient(140deg,#c9c6bf,#a8a59d)",
                flexShrink: 0,
              }} />
              <div style={{ lineHeight: 1.3 }}>
                <div style={{ fontSize: 13.5, fontWeight: 600 }}>{post.author}</div>
                <div style={{ fontSize: 12, color: "#8a877f" }}>{post.date} · {post.readTime}</div>
              </div>
            </div>
          </div>

          {/* Right: cover image */}
          <div style={{
            height: 320, borderRadius: 18,
            background: post.gradient,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.08) 100%)",
            }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #d5d2cb", marginBottom: 52 }} />

        {/* Body — sidebar + content */}
        <div style={{
          display: "grid", gridTemplateColumns: "210px 1fr",
          gap: 52, marginBottom: 96,
        }}>

          {/* Sidebar */}
          <aside style={{ position: "sticky", top: 88, alignSelf: "start" }}>
            <div style={{
              fontFamily: MONO, fontSize: 10, letterSpacing: ".14em",
              color: "#9a978f", textTransform: "uppercase", marginBottom: 14,
            }}>On this page</div>
            <nav>
              {post.toc.map(item => (
                <a key={item.id} href={`#${item.id}`} className="sl-toc-link">
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Sidebar CTA */}
            <div style={{
              marginTop: 36,
              background: "#0b0b0b",
              borderRadius: 16, padding: "20px 18px",
              border: "1px solid rgba(255,255,255,.06)",
            }}>
              <h3 style={{
                margin: "0 0 9px", fontSize: 14.5, fontWeight: 600,
                lineHeight: 1.35, color: "#f0eeea",
              }}>Need a fast-moving engineering team?</h3>
              <p style={{ margin: "0 0 16px", fontSize: 12.5, lineHeight: 1.55, color: "#6b6b6b" }}>
                Book a call and we&apos;ll map out a plan tailored to your roadmap.
              </p>
              <ChatButton label="Get in touch" href="#" />
            </div>
          </aside>

          {/* Article body */}
          <article>
            {post.sections.map(section => (
              <section key={section.id} id={section.id} style={{ marginBottom: 44 }}>
                <h2 style={{
                  fontSize: "clamp(19px, 2vw, 23px)",
                  fontWeight: 700, letterSpacing: "-.02em",
                  margin: "0 0 14px", color: "#0c0c0c",
                }}>{section.heading}</h2>
                {section.content.split("\n\n").map((para, i) => (
                  <p key={i} style={{
                    fontSize: 15.5, lineHeight: 1.72,
                    color: "#3a382f", margin: "0 0 14px",
                  }}>{para}</p>
                ))}
                {section.list && (
                  <ul style={{ margin: "6px 0 0", paddingLeft: 18 }}>
                    {section.list.map((item, i) => (
                      <li key={i} style={{
                        fontSize: 15, lineHeight: 1.65,
                        color: "#3a382f", marginBottom: 6,
                      }}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
              {post.tags.map(tag => (
                <span key={tag} style={{
                  background: "#f3f1ec", border: "1px solid #e6e4df",
                  borderRadius: 999, padding: "4px 13px",
                  fontSize: 12, fontWeight: 500, color: "#6b6862",
                }}>{tag}</span>
              ))}
            </div>
          </article>
        </div>

        {/* Related posts */}
        <div style={{ marginBottom: 96 }}>
          <h2 style={{
            fontSize: 24, fontWeight: 700, letterSpacing: "-.025em",
            margin: "0 0 28px",
          }}>Related posts</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
            {related.map(rel => (
              <a key={rel.slug} href={`/blog/${rel.slug}`} className="sl-blog-card-link">
                <article className="sl-blog-card">
                  <div style={{ height: 160, background: rel.gradient }} />
                  <div style={{ padding: "16px 18px 20px" }}>
                    <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".12em", color: "#9a978f", textTransform: "uppercase" }}>{rel.category}</span>
                    <h3 style={{ fontSize: 15, fontWeight: 600, margin: "8px 0 6px", lineHeight: 1.25, color: "#0c0c0c" }}>{rel.title}</h3>
                    <div style={{ fontSize: 11.5, color: "#8a877f" }}>{rel.author} · {rel.readTime}</div>
                    <span className="sl-read-more" style={{ marginTop: 12 }}>Read post <span>→</span></span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── DARK FOOTER ─────────────────────────────────────────── */}
      <section style={{ background: "#060606", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 900, height: 600, background: "radial-gradient(50% 50% at 50% 50%, rgba(255,150,60,.22), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "112px 28px 0", position: "relative", textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(34px, 5.5vw, 58px)", fontWeight: 700,
            letterSpacing: "-.033em", lineHeight: 1.05,
            margin: "0 auto 26px", maxWidth: 540, color: "#f0eeea",
          }}>Make your website a sales machine</h2>
          <div style={{ marginBottom: 64 }}>
            <ChatButton label="Book a free call →" href="#" />
          </div>

          <div style={{
            textAlign: "left", display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32,
            padding: "0 0 36px", borderBottom: "1px solid rgba(255,255,255,.06)",
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: "linear-gradient(140deg,#fff,#cfcfcf)", display: "flex", alignItems: "center", justifyContent: "center", color: "#060606", fontWeight: 800, fontSize: 14 }}>S</div>
                <span style={{ fontWeight: 700, fontSize: 15 }}>Saastra Labs</span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#5a5a5a", margin: 0, maxWidth: 240 }}>
                Engineering studio from Kathmandu, Nepal — building digital products for the world.
              </p>
            </div>
            {FOOTER_COLS.map(col => (
              <div key={col.title}>
                <div style={{ fontFamily: MONO, fontSize: 12, fontWeight: 600, color: "#9a9a9a", marginBottom: 12, letterSpacing: ".08em" }}>{col.title.toUpperCase()}</div>
                {col.links.map(l => (
                  <a key={l} href="#" style={{ display: "block", fontSize: 13.5, color: "#6b6b6b", textDecoration: "none", padding: "4px 0" }}>{l}</a>
                ))}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 0" }}>
            <span style={{ fontSize: 12, color: "#3a3a3a" }}>© 2025 Saastra Labs Pvt. Ltd., Kathmandu, Nepal.</span>
            <div style={{ display: "flex", gap: 14 }}>
              {["X", "in", "GH"].map(s => <span key={s} style={{ fontSize: 12, color: "#3a3a3a", cursor: "pointer" }}>{s}</span>)}
            </div>
          </div>

          <div style={{ overflow: "hidden", lineHeight: 0.7, marginTop: 4 }}>
            <span style={{
              fontSize: "clamp(78px, 15vw, 196px)",
              fontWeight: 800, letterSpacing: "-.04em",
              background: "linear-gradient(180deg, rgba(255,255,255,.07), transparent)",
              WebkitBackgroundClip: "text", backgroundClip: "text",
              color: "transparent", display: "inline-block", transform: "translateY(34%)",
              userSelect: "none",
            }}>SAASTRA</span>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
