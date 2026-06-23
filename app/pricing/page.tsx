"use client"

import { useState, useEffect, useCallback } from "react"
import { ChatButton } from "@/components/chat-button"
import { Navbar } from "@/components/navbar"

/* ─── DATA ────────────────────────────────────────────────────── */

const navLinks = [
  { label: "Work",     href: "/" },
  { label: "Products", href: "#" },
  { label: "Pricing",  href: "/pricing" },
  { label: "Blog",     href: "/blog" },
]

const planA = [
  "Custom design & build",
  "Component library access",
  "High-velocity output",
  "Unlimited revisions",
  "Direct Slack channel",
]

const planB = [
  "Everything in Foundation",
  "Dedicated project manager",
  "Priority delivery queue",
  "Performance optimization",
  "Quarterly strategy reviews",
]

const planC = [
  "Custom design & build",
  "Multi-page architecture",
  "High-velocity output",
  "Unlimited revisions",
  "SEO & analytics setup",
  "Conversion-focused copy",
  "CMS integration",
  "Dedicated PM",
]

const techLogos = [
  "Next.js", "Vercel", "Figma", "GitHub", "Linear", "Stripe", "Supabase", "Tailwind CSS",
]

const compRows = [
  { label: "Approach",          a: "Design and engineering in sync",     t: "Siloed hand-offs" },
  { label: "Process",           a: "Streamlined, transparent, fast",     t: "Lengthy, opaque, unclear" },
  { label: "Design philosophy", a: "Modern, minimal and purposeful",     t: "Trend-based and cluttered" },
  { label: "Developer stack",   a: "Built with modern frameworks",       t: "Outdated, legacy stacks" },
  { label: "Communication",     a: "Clear updates, daily",               t: "Multiple middlemen" },
  { label: "Deliverables",      a: "Production-ready clean systems",     t: "Static mockups" },
  { label: "Support",           a: "Long-term partnership mindset",      t: "One-off projects" },
  { label: "Timeline",          a: "Fixed scope, no surprises",          t: "Open-ended timelines" },
]

const smallCards = [
  { icon: "⚡", t: "Instant onboarding",       d: "Get up and running in days, not months. Kick off with a single call." },
  { icon: "◎", t: "High impact, low overhead", d: "Senior talent without the senior price tag or the hiring risk." },
  { icon: "◆", t: "Stress-free collaboration", d: "Async-friendly, with clear and consistent updates throughout." },
]

const testimonials = [
  {
    company: "Cal.com",
    text: "\"Working with Saastra Labs has been a masterclass in engineering. They didn't just build a product — they built a high-performance, thoughtfully crafted system.\"",
    name: "Josh Tucker",
    role: "VP of Engineering",
  },
  {
    company: "Vercel",
    text: "\"Saastra Labs' team rapidly aligned with our stakeholders and delivered a thoughtful, polished product that exceeded every expectation.\"",
    name: "Priya Singh",
    role: "Product Manager",
  },
  {
    company: "GitHub",
    text: "\"Technical excellence paired with strong product sense — highly recommended. They made the whole process effortless from start to finish.\"",
    name: "Lewis Nordstrom",
    role: "Engineering Manager",
  },
]

const faqs = [
  { q: "Do I need to be locked into a monthly fee?",        a: "No. Plans are month-to-month — pause or cancel anytime with no long-term contract." },
  { q: "What's a typical use case for a fast-moving team?", a: "Shipping a new product, rebuilding a marketing site, or augmenting an in-house team during a crunch." },
  { q: "Can I connect with you during a kickoff call?",     a: "Absolutely. Every engagement starts with a kickoff where we align on goals, scope and timelines." },
  { q: "How does the two-week sprint cycle work?",          a: "We work in focused sprints with a clear deliverable each cycle, plus regular async updates in your Slack." },
  { q: "How do you handle revisions and feedback?",         a: "Revisions are unlimited within your plan. Drop feedback anytime and we fold it into the next cycle." },
  { q: "Do I need to be technical to work with you?",       a: "Not at all. We translate business goals into technical decisions and keep you in the loop in plain language." },
]

const footerCompany = ["About", "Team", "Careers", "Contact"]
const footerLegal   = ["Privacy", "Terms", "Cookies"]

/* ─── COMPONENT ───────────────────────────────────────────────── */

export default function PricingPage() {
  const [openFaq,    setOpenFaq]    = useState(0)
  const [testActive, setTestActive] = useState(0)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("sl-visible") }),
      { threshold: 0.12 },
    )
    document.querySelectorAll(".sl-reveal").forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const onTestScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const i = Math.round(e.currentTarget.scrollLeft / 374)
    if (i !== testActive) setTestActive(i)
  }, [testActive])

  const mkDots = useCallback(
    (count: number, active: number, id: string, step: number) =>
      Array.from({ length: count }, (_, i) => ({
        w:  i === active ? "22px" : "7px",
        bg: i === active ? "#0c0c0c" : "#cdcac2",
        onClick: () => document.getElementById(id)?.scrollTo({ left: i * step, behavior: "smooth" }),
      })),
    [],
  )

  const testDots = mkDots(3, testActive, "test-scroll", 374)

  const bentoCard = (dark = false): React.CSSProperties => ({
    background:   dark ? "#0b0b0b" : "#fff",
    border:       `1px solid ${dark ? "#1c1c1c" : "#e6e4df"}`,
    borderRadius: 18, padding: 22,
    display: "flex", flexDirection: "column", justifyContent: "space-between",
    boxShadow: "none",
  })

  return (
    <>
      <Navbar activePath="/pricing" />
      <div style={{
        background: "#e9e7e2",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        color: "#0c0c0c", overflowX: "hidden", width: "100%",
        WebkitFontSmoothing: "antialiased",
      }}>

      {/* ══ PRICING TITLE + CARDS ══════════════════════════════════ */}
      <section style={{ position: "relative", maxWidth: 1100, margin: "0 auto", padding: "88px 28px 0" }}>

        {/* Watermark title — identical to Projects on home */}
        <div style={{ lineHeight: .76, marginBottom: -4, overflow: "hidden" }}>
          <span style={{
            display: "block", whiteSpace: "nowrap",
            fontSize: "clamp(120px,19vw,232px)", fontWeight: 800,
            letterSpacing: "-.035em",
            background: "linear-gradient(180deg,#dad7d0 32%,rgba(218,215,208,0) 92%)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}>Pricing</span>
        </div>

        {/* row 1: Composable + Scale */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14, marginTop: 14 }}>

          {/* Composable — light */}
          <div className="sl-reveal sl-d1" style={{ ...bentoCard(), padding: 26 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Composable</span>
                <span style={{ background: "#eafaef", color: "#1f9d57", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 999 }}>2 spots left</span>
              </div>
              <h3 style={{ margin: "0 0 2px", fontSize: 19, fontWeight: 600, letterSpacing: "-.01em" }}>Tailored website components</h3>
              <p style={{ margin: "0 0 20px", fontSize: 13, color: "#8a877f" }}>for fast-moving brands</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
                <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-.03em" }}>$4,995</span>
                <span style={{ fontSize: 13, color: "#8a877f" }}>/mo</span>
              </div>
            </div>
            <div>
              <a href="#" style={{
                display: "block", textAlign: "center", background: "#f5c518", color: "#0a0a0a",
                fontSize: 13, fontWeight: 600, padding: 11, borderRadius: 10,
                textDecoration: "none", marginBottom: 18,
              }}>Start plan</a>
              {planA.map((f, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 9,
                  fontSize: 13, color: "#3a382f",
                  padding: "7px 0", borderTop: "1px solid #f2f1ed",
                }}>
                  <span style={{ color: "#1f9d57", flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>

          {/* Scale — dark, popular */}
          <div className="sl-reveal sl-d2" style={{ ...bentoCard(true), padding: 26, position: "relative", overflow: "hidden", color: "#fff" }}>
            <div style={{ position: "absolute", top: -80, right: -40, width: 240, height: 240, background: "radial-gradient(50% 50% at 50% 50%, rgba(255,150,60,.28), transparent 70%)", pointerEvents: "none" }} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, position: "relative" }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Scale</span>
                <span style={{ background: "rgba(245,197,24,.16)", color: "#f5c518", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 999 }}>Most popular</span>
              </div>
              <h3 style={{ margin: "0 0 2px", fontSize: 19, fontWeight: 600, letterSpacing: "-.01em", position: "relative" }}>Tailored website components</h3>
              <p style={{ margin: "0 0 20px", fontSize: 13, color: "#9a9a9a", position: "relative" }}>for high-growth teams</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20, position: "relative" }}>
                <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-.03em" }}>$6,995</span>
                <span style={{ fontSize: 13, color: "#9a9a9a" }}>/mo</span>
              </div>
            </div>
            <div>
              <a href="#" style={{
                display: "block", textAlign: "center", background: "#f5c518", color: "#0a0a0a",
                fontSize: 13, fontWeight: 600, padding: 11, borderRadius: 10,
                textDecoration: "none", marginBottom: 18, position: "relative",
              }}>Start plan</a>
              {planB.map((f, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 9,
                  fontSize: 13, color: "#cfcfcf",
                  padding: "7px 0", borderTop: "1px solid #1c1c1c", position: "relative",
                }}>
                  <span style={{ color: "#f5c518", flexShrink: 0 }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* row 2: Multi Page — wide */}
        <div className="sl-reveal" style={{
          ...bentoCard(), padding: 26,
          display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 32, alignItems: "center",
          marginBottom: 14,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 600 }}>Multi pages</span>
              <span style={{ background: "#eafaef", color: "#1f9d57", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 999 }}>Best for scale</span>
            </div>
            <h3 style={{ margin: "0 0 2px", fontSize: 19, fontWeight: 600, letterSpacing: "-.01em" }}>Tailored multi-page websites</h3>
            <p style={{ margin: "0 0 20px", fontSize: 13, color: "#8a877f" }}>for fast conversion rates</p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 20 }}>
              <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-.03em" }}>$12,499</span>
              <span style={{ fontSize: 13, color: "#8a877f" }}>/mo</span>
            </div>
            <a href="#" style={{
              display: "inline-block", background: "#f5c518", color: "#0a0a0a",
              fontSize: 13, fontWeight: 600, padding: "11px 22px",
              borderRadius: 10, textDecoration: "none",
            }}>Start plan</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 18px" }}>
            {planC.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, fontSize: 13, color: "#3a382f", padding: "7px 0" }}>
                <span style={{ color: "#1f9d57", flexShrink: 0 }}>✓</span>{f}
              </div>
            ))}
          </div>
        </div>

        {/* Tech logos strip */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          flexWrap: "wrap", gap: "10px 24px",
          background: "#fff", border: "1px solid #e6e4df", borderRadius: 14,
          padding: "13px 24px", marginBottom: 96,
        }}>
          <span style={{
            fontSize: 10, fontWeight: 600, color: "#9a978f",
            letterSpacing: ".14em", fontFamily: "var(--font-mono),monospace",
            textTransform: "uppercase", whiteSpace: "nowrap",
          }}>Works with</span>
          <div style={{ width: 1, height: 13, background: "#e6e4df", flexShrink: 0 }} />
          {techLogos.map((t, i) => (
            <span key={i} style={{ fontSize: 12.5, fontWeight: 600, color: "#7a7770", letterSpacing: "-.01em", whiteSpace: "nowrap" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* ══ COMPARISON ══════════════════════════════════════════════ */}
      <section>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px 96px" }}>
          <h2 className="sl-reveal" style={{
            fontSize: 30, fontWeight: 600, letterSpacing: "-.025em",
            margin: "0 0 24px", color: "#0c0c0c",
          }}>Saastra Labs vs traditional service providers</h2>

          <div style={{ background: "#fff", border: "1px solid #e6e4df", borderRadius: 20, overflow: "hidden" }}>
            {/* header */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr",
              background: "#f6f5f2", borderBottom: "1px solid #ececea",
              fontSize: 12.5, fontWeight: 600, color: "#5a574f",
            }}>
              <div style={{ padding: "15px 22px" }} />
              <div style={{ padding: "15px 18px", display: "flex", alignItems: "center", gap: 8, color: "#0c0c0c" }}>
                <span style={{
                  width: 18, height: 18, borderRadius: 6, background: "#0c0c0c", color: "#fff",
                  display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11,
                }}>S</span>
                Saastra Labs
              </div>
              <div style={{ padding: "15px 18px" }}>Traditional providers</div>
            </div>

            {/* rows */}
            {compRows.map((row, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr",
                borderBottom: "1px solid #f0efec", fontSize: 13,
              }}>
                <div style={{ padding: "14px 22px", color: "#6b6862", display: "flex", alignItems: "center" }}>{row.label}</div>
                <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 9, color: "#1a1a1a" }}>
                  <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", background: "#e6f4ec", color: "#1f9d57", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>✓</span>
                  {row.a}
                </div>
                <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 9, color: "#9a978f" }}>
                  <span style={{ flexShrink: 0, width: 18, height: 18, borderRadius: "50%", background: "#f1efeb", color: "#b3b0a7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>✕</span>
                  {row.t}
                </div>
              </div>
            ))}

            {/* CTA row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 1.2fr" }}>
              <div />
              <div style={{ padding: "16px 18px" }}>
                <a href="#" style={{
                  display: "inline-block", background: "#f5c518", color: "#0a0a0a",
                  fontSize: 13, fontWeight: 600, padding: "9px 16px",
                  borderRadius: 9, textDecoration: "none",
                }}>Book a free call</a>
              </div>
              <div style={{ padding: "16px 18px" }}>
                <span style={{ display: "inline-block", background: "#f1efeb", color: "#9a978f", fontSize: 13, fontWeight: 500, padding: "9px 16px", borderRadius: 9 }}>
                  Slow to respond
                </span>
              </div>
            </div>
          </div>

          {/* 3 small benefit cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginTop: 14 }}>
            {smallCards.map((c, i) => (
              <div key={i} className={`sl-reveal sl-d${i + 1}`} style={{ ...bentoCard(), padding: 20 }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: "#f3f1ec", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 600 }}>{c.t}</h3>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: "#6b6862" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ════════════════════════════════════════════ */}
      <section style={{ padding: "48px 0 32px", overflow: "hidden" }}>
        <h2 className="sl-reveal" style={{
          fontSize: 30, fontWeight: 600, letterSpacing: "-.025em",
          margin: "0 auto 26px", maxWidth: 1100,
          paddingLeft: 28, paddingRight: 28, color: "#0c0c0c",
        }}>What people have been saying</h2>

        <div
          id="test-scroll"
          onScroll={onTestScroll}
          className="sl-no-sb"
          style={{
            display: "flex", gap: 24, overflowX: "auto",
            paddingBottom: 8, paddingRight: 28,
            paddingLeft: "max(28px,calc(50vw - 522px))",
            scrollSnapType: "x mandatory",
          }}
        >
          {testimonials.map((t, i) => (
            <div key={i} style={{
              flex: "0 0 360px",
              background: "#0b0b0b", border: "1px solid #1c1c1c",
              borderRadius: 18, padding: 24, color: "#fff",
              minHeight: 220, scrollSnapAlign: "start",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#fff" }}>{t.company}</div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "#cfcfcf" }}>{t.text}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20 }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(140deg,#444,#222)", flexShrink: 0 }} />
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 11.5, color: "#888" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div style={{ display: "flex", justifyContent: "center", margin: "18px 0 0" }}>
          <div style={{
            display: "inline-flex", gap: 8, alignItems: "center",
            background: "#fff", borderRadius: 999, padding: "9px 13px",
          }}>
            {testDots.map((d, i) => (
              <button key={i} onClick={d.onClick} style={{
                width: d.w, height: 7, borderRadius: 999,
                border: "none", padding: 0, cursor: "pointer",
                background: d.bg, transition: "width .3s,background .3s",
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════════ */}
      <section>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 28px 120px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.2fr", gap: 48, alignItems: "start" }}>
            <div>
              <h2 className="sl-reveal" style={{
                fontSize: 30, fontWeight: 600, letterSpacing: "-.025em",
                margin: "0 0 12px", color: "#0c0c0c",
              }}>Frequently asked questions</h2>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6b6862", margin: "0 0 24px" }}>
                Have more questions? Reach out at{" "}
                <span style={{ color: "#0c0c0c", textDecoration: "underline" }}>hello@saastralabs.io</span>
                {" "}and we&apos;ll get back to you.
              </p>
              <div style={{ background: "#0b0b0b", borderRadius: 18, padding: 24, color: "#fff" }}>
                <h3 style={{ margin: "0 0 10px", fontSize: 17, fontWeight: 600, lineHeight: 1.3 }}>
                  Need a fast-moving team of engineers for your startup?
                </h3>
                <p style={{ margin: "0 0 18px", fontSize: 13, lineHeight: 1.5, color: "#9a9a9a" }}>
                  Book an intro call and we&apos;ll map out a plan tailored to your roadmap.
                </p>
                <ChatButton label="Chat with us" href="#" />
              </div>
            </div>

            <div>
              {faqs.map((f, i) => (
                <div key={i} style={{ borderBottom: "1px solid #d9d6cf" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center",
                      justifyContent: "space-between", gap: 16,
                      background: "none", border: "none", padding: "18px 0",
                      cursor: "pointer", textAlign: "left",
                      fontFamily: "var(--font-sans), system-ui, sans-serif",
                    }}
                  >
                    <span style={{ fontSize: 15, fontWeight: 500, color: "#0c0c0c" }}>{f.q}</span>
                    <span style={{
                      flexShrink: 0, fontSize: 18, color: "#6b6862",
                      transition: "transform .2s",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}>+</span>
                  </button>
                  <div style={{
                    overflow: "hidden",
                    maxHeight: openFaq === i ? 200 : 0,
                    transition: "max-height .28s ease",
                  }}>
                    <p style={{ margin: "0 0 18px", fontSize: 14, lineHeight: 1.6, color: "#6b6862", maxWidth: "90%" }}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA FOOTER ══════════════════════════════════════════════ */}
      <section style={{ background: "#060606", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 900, height: 600, background: "radial-gradient(50% 50% at 50% 50%, rgba(255,150,60,.22), transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "112px 28px 0", position: "relative", textAlign: "center" }}>
          <h2 style={{
            fontSize: 46, fontWeight: 600, letterSpacing: "-.03em",
            lineHeight: 1.05, margin: "0 auto 26px", maxWidth: 560,
          }}>Make your website a sales machine</h2>
          <div style={{ marginBottom: 64 }}>
            <ChatButton label="Book a free call →" href="#" />
          </div>

          {/* footer links */}
          <div style={{
            textAlign: "left", display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 30, padding: "0 0 40px",
            borderBottom: "1px solid #1a1a1a",
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: "linear-gradient(140deg,#fff,#cfcfcf)", display: "flex", alignItems: "center", justifyContent: "center", color: "#060606", fontWeight: 800, fontSize: 15 }}>S</div>
                <span style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>Saastra Labs</span>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: "#8a8a8a", margin: 0, maxWidth: 240 }}>
                Design and engineering studio from Kathmandu, Nepal — building for the world.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: 12, fontWeight: 600, color: "#9a9a9a", marginBottom: 12, letterSpacing: ".08em" }}>PAGES</div>
              {navLinks.map(l => (
                <a key={l.label} href={l.href} style={{ display: "block", fontSize: 13.5, color: "#cfcfcf", textDecoration: "none", padding: "5px 0" }}>{l.label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: 12, fontWeight: 600, color: "#9a9a9a", marginBottom: 12, letterSpacing: ".08em" }}>COMPANY</div>
              {footerCompany.map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 13.5, color: "#cfcfcf", textDecoration: "none", padding: "5px 0" }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-mono),monospace", fontSize: 12, fontWeight: 600, color: "#9a9a9a", marginBottom: 12, letterSpacing: ".08em" }}>LEGAL</div>
              {footerLegal.map(l => (
                <a key={l} href="#" style={{ display: "block", fontSize: 13.5, color: "#cfcfcf", textDecoration: "none", padding: "5px 0" }}>{l}</a>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0" }}>
            <span style={{ fontSize: 12, color: "#6a6a6a" }}>© 2025 Saastra Labs Pvt. Ltd., Kathmandu, Nepal. All rights reserved.</span>
            <div style={{ display: "flex", gap: 14 }}>
              <span style={{ fontSize: 12, color: "#9a9a9a" }}>X</span>
              <span style={{ fontSize: 12, color: "#9a9a9a" }}>in</span>
              <span style={{ fontSize: 12, color: "#9a9a9a" }}>GH</span>
            </div>
          </div>

          {/* watermark */}
          <div style={{ overflow: "hidden", lineHeight: .72, marginTop: 6 }}>
            <span style={{
              fontSize: 210, fontWeight: 800, letterSpacing: "-.045em",
              background: "linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,0))",
              WebkitBackgroundClip: "text", backgroundClip: "text",
              color: "transparent", display: "inline-block", transform: "translateY(30%)",
            }}>SAASTRA</span>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}
