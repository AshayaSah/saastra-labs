import { ChatButton } from "@/components/chat-button"
import { Navbar } from "@/components/navbar"
import { posts } from "@/lib/blog"

const FOOTER_COLS = [
  { title: "Pages", links: ["Work", "Products", "Pricing", "Blog"] },
  { title: "Company", links: ["About", "Team", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
]

/* shared inline styles */
const MONO = "var(--font-mono), ui-monospace, monospace"
const SANS = "var(--font-sans), system-ui, sans-serif"

export default function BlogPage() {
  return (
    <>
      <Navbar activePath="/blog" />
      <div
        style={{
          background: "#e9e7e2",
          fontFamily: SANS,
          color: "#0c0c0c",
          overflowX: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
      {/* ── BLOG LISTING ────────────────────────────────────────── */}
      <div
        style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 28px 108px" }}
      >
        <h1
          style={{
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "-.035em",
            margin: "0 0 48px",
            color: "#0c0c0c",
          }}
        >
          Blog
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 24,
          }}
        >
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="sl-blog-card-link"
            >
              <article className="sl-blog-card">
                {/* cover image */}
                <div
                  style={{
                    height: 204,
                    background: post.gradient,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.06) 100%)",
                    }}
                  />
                </div>

                {/* content */}
                <div style={{ padding: "20px 22px 24px" }}>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      letterSpacing: ".12em",
                      color: "#9a978f",
                      textTransform: "uppercase",
                    }}
                  >
                    {post.category}
                  </span>

                  <h2
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      margin: "9px 0 8px",
                      color: "#0c0c0c",
                      lineHeight: 1.25,
                      letterSpacing: "-.012em",
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    style={{
                      fontSize: 13.5,
                      color: "#6b6862",
                      lineHeight: 1.57,
                      margin: "0 0 18px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>

                  {/* author row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "linear-gradient(140deg,#c9c6bf,#a8a59d)",
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ lineHeight: 1.25 }}>
                      <div
                        style={{
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: "#0c0c0c",
                        }}
                      >
                        {post.author}
                      </div>
                      <div style={{ fontSize: 11.5, color: "#8a877f" }}>
                        {post.date} · {post.readTime}
                      </div>
                    </div>
                  </div>

                  <span className="sl-read-more">
                    Read post <span>→</span>
                  </span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>

      {/* ── DARK FOOTER ─────────────────────────────────────────── */}
      <section
        style={{
          background: "#060606",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 600,
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255,150,60,.22), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "112px 28px 0",
            position: "relative",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(34px, 5.5vw, 58px)",
              fontWeight: 700,
              letterSpacing: "-.033em",
              lineHeight: 1.05,
              margin: "0 auto 26px",
              maxWidth: 540,
              color: "#f0eeea",
            }}
          >
            Make your website a sales machine
          </h2>
          <div style={{ marginBottom: 64 }}>
            <ChatButton label="Book a free call →" href="#" />
          </div>

          <div
            style={{
              textAlign: "left",
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: 32,
              padding: "0 0 36px",
              borderBottom: "1px solid rgba(255,255,255,.06)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 7,
                    background: "linear-gradient(140deg,#fff,#cfcfcf)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#060606",
                    fontWeight: 800,
                    fontSize: 14,
                  }}
                >
                  S
                </div>
                <span style={{ fontWeight: 700, fontSize: 15 }}>
                  Saastra Labs
                </span>
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "#5a5a5a",
                  margin: 0,
                  maxWidth: 240,
                }}
              >
                Engineering studio from Kathmandu, Nepal — building digital
                products for the world.
              </p>
            </div>
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#9a9a9a",
                    marginBottom: 12,
                    letterSpacing: ".08em",
                  }}
                >
                  {col.title.toUpperCase()}
                </div>
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    style={{
                      display: "block",
                      fontSize: 13.5,
                      color: "#6b6b6b",
                      textDecoration: "none",
                      padding: "4px 0",
                    }}
                  >
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 0",
            }}
          >
            <span style={{ fontSize: 12, color: "#3a3a3a" }}>
              © 2025 Saastra Labs Pvt. Ltd., Kathmandu, Nepal.
            </span>
            <div style={{ display: "flex", gap: 14 }}>
              {["X", "in", "GH"].map((s) => (
                <span
                  key={s}
                  style={{ fontSize: 12, color: "#3a3a3a", cursor: "pointer" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div style={{ overflow: "hidden", lineHeight: 0.7, marginTop: 4 }}>
            <span
              style={{
                fontSize: "clamp(78px, 15vw, 196px)",
                fontWeight: 800,
                letterSpacing: "-.04em",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,.07), transparent)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
                transform: "translateY(34%)",
                userSelect: "none",
              }}
            >
              SAASTRA
            </span>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
