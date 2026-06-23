"use client"

import { useState, useEffect, useCallback } from "react"
import { ChatButton } from "@/components/chat-button"
import { Navbar } from "@/components/navbar"

/* ─── DATA (same structure as template, Saastra Labs content) ─────── */

const navLinks = [
  { label: "Work",     href: "/" },
  { label: "Products", href: "#" },
  { label: "Pricing",  href: "/pricing" },
  { label: "Blog",     href: "/blog" },
]

const logos = [
  "Nimbus","Outpost","Hexgrid","Caret","Northwind",
  "Splice","Brink","Loophole","Thrust","Vellum",
]

const insights = [
  {
    tag: "CARET",
    text: "Excellent communication and a genuinely fast turnaround. They felt like part of our team from day one.",
    name: "Marcus Bell",
    role: "Founder, Caret",
  },
  {
    tag: "OUTPOST",
    text: "Quick to respond, very iterative, and shipped a site we love. Looking forward to the next collaboration.",
    name: "Aanya Rao",
    role: "Head of Growth, Outpost",
  },
  {
    tag: "HEXGRID",
    text: "The best engineers I have worked with. They understood the requirements deeply and delivered beyond expectations.",
    name: "John Mowbray",
    role: "CTO, Hexgrid",
  },
  {
    tag: "NIMBUS",
    text: "Exceptional attention to detail. They delivered beyond our expectations and well ahead of schedule.",
    name: "Sarah Jensen",
    role: "Product Lead, Nimbus",
  },
]

const compRows = [
  { label: "Approach",         a: "Design and engineering in sync",        t: "Siloed hand-offs" },
  { label: "Process",          a: "Streamlined, transparent, fast",         t: "Lengthy, opaque, unclear" },
  { label: "Design philosophy",a: "Modern, minimal and purposeful",         t: "Trend-based and cluttered" },
  { label: "Developer stack",  a: "Built with modern frameworks",           t: "Outdated, legacy stacks" },
  { label: "Communication",    a: "Clear updates, daily",                   t: "Multiple middlemen" },
  { label: "Deliverables",     a: "Production-ready clean systems",         t: "Static mockups" },
  { label: "Support",          a: "Long-term partnership mindset",          t: "One-off projects" },
  { label: "Timeline",         a: "Fixed scope, no surprises",              t: "Open-ended timelines" },
]

const smallCards = [
  { icon: "⚡", t: "Instant onboarding",        d: "Get up and running in days, not months. Kick off with a single call." },
  { icon: "◎", t: "High impact, low overhead",  d: "Senior talent without the senior price tag or the hiring risk." },
  { icon: "◆", t: "Stress-free collaboration",  d: "Async-friendly, with clear and consistent updates throughout." },
]

const planA = ["Custom design & build","Component library access","High-velocity output","Unlimited revisions","Direct Slack channel"]
const planB = ["Everything in Foundation","Dedicated project manager","Priority delivery queue","Performance optimization","Quarterly strategy reviews"]
const planC = ["Custom design & build","Multi-page architecture","High-velocity output","Unlimited revisions","SEO & analytics setup","Conversion-focused copy","CMS integration","Dedicated PM"]

const bottomTestimonials = [
  {
    company: "Cal.com",
    text: "\"Working with Saastra Labs has been a masterclass in engineering. They didn’t just build a product — they built a high-performance, thoughtfully crafted system.\"",
    name: "Josh Tucker",
    role: "VP of Engineering",
  },
  {
    company: "Vercel",
    text: "\"Saastra Labs’ team rapidly aligned with our stakeholders and delivered a thoughtful, polished product that exceeded every expectation.\"",
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
  { q: "Do I need to be locked into a monthly fee?",         a: "No. Plans are month-to-month — pause or cancel anytime with no long-term contract." },
  { q: "What’s a typical use case for a fast-moving team?",a: "Shipping a new product, rebuilding a marketing site, or augmenting an in-house team during a crunch." },
  { q: "Can I connect with you during a kickoff call?",      a: "Absolutely. Every engagement starts with a kickoff where we align on goals, scope and timelines." },
  { q: "How does the two-week sprint cycle work?",           a: "We work in focused sprints with a clear deliverable each cycle, plus regular async updates in your Slack." },
  { q: "How do you handle revisions and feedback?",          a: "Revisions are unlimited within your plan. Drop feedback anytime and we fold it into the next cycle." },
  { q: "Do I need to be technical to work with you?",        a: "Not at all. We translate business goals into technical decisions and keep you in the loop in plain language." },
]

const footerCompany = ["About", "Team", "Careers", "Contact"]
const footerLegal   = ["Privacy", "Terms", "Cookies"]

/* ─── COMPONENT ───────────────────────────────────────────────────── */

export default function Page() {
  const [openFaq,      setOpenFaq]      = useState(0)
  const [insightActive, setInsightActive] = useState(0)
  const [peopleActive,  setPeopleActive]  = useState(0)

  /* ── Scroll-reveal IntersectionObserver ── */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("sl-visible") }),
      { threshold: 0.12 },
    )
    document.querySelectorAll(".sl-reveal").forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  /* ── Dot helpers ── */
  const mkDots = useCallback(
    (count: number, active: number, id: string, step: number) =>
      Array.from({ length: count }, (_, i) => ({
        w:  i === active ? "22px" : "7px",
        bg: i === active ? "#0c0c0c" : "#cdcac2",
        onClick: () => document.getElementById(id)?.scrollTo({ left: i * step, behavior: "smooth" }),
      })),
    [],
  )

  const onInsightsScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const i = Math.round(e.currentTarget.scrollLeft / 334)
    if (i !== insightActive) setInsightActive(i)
  }, [insightActive])

  const onPeopleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const i = Math.round(e.currentTarget.scrollLeft / 374)
    if (i !== peopleActive) setPeopleActive(i)
  }, [peopleActive])

  const insightDots = mkDots(4, insightActive, "insights-scroll", 334)
  const peopleDots  = mkDots(3, peopleActive,  "people-scroll",   374)
  const marqueeLogos = [...logos, ...logos]

  /* ── shared style helpers ── */
  const bentoCard = (dark = false): React.CSSProperties => ({
    background:   dark ? "#0b0b0b" : "#fff",
    border:       `1px solid ${dark ? "#1c1c1c" : "#e6e4df"}`,
    borderRadius: 18, padding: 22,
    display: "flex", flexDirection: "column", justifyContent: "space-between",
    boxShadow: "none",
  })

  return (
    <>
      <Navbar activePath="/" />
      <div style={{
        background: "#e9e7e2",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        color: "#0c0c0c", overflowX: "hidden", width: "100%",
        WebkitFontSmoothing: "antialiased",
      }}>

      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section style={{
        position: "relative", background: "#060606", overflow: "hidden",
        padding: 0, minHeight: "100vh", display: "flex", flexDirection: "column",
      }}>
        {/* glows */}
        <div style={{
          position:"absolute", top:-360, left:"50%", transform:"translateX(-50%)",
          width:1100, height:760,
          background:"radial-gradient(50% 50% at 50% 50%, rgba(255,150,50,.55) 0%, rgba(255,110,30,.18) 38%, rgba(255,110,30,0) 68%)",
          filter:"blur(8px)",
          animation:"glowpulse 7s ease-in-out infinite",
          pointerEvents:"none",
        }} />
        <div style={{
          position:"absolute", top:80, left:"50%", transform:"translateX(-50%)",
          width:560, height:360,
          background:"radial-gradient(50% 50% at 50% 50%, rgba(255,190,120,.45) 0%, rgba(255,140,60,0) 70%)",
          pointerEvents:"none",
        }} />
        <div style={{
          position:"absolute", inset:0,
          background:"radial-gradient(120% 80% at 50% -10%, transparent 55%, rgba(0,0,0,.6) 100%)",
          pointerEvents:"none",
        }} />

        {/* HERO CONTENT */}
        <div style={{
          position:"relative", zIndex:4,
          maxWidth:1100, width:"100%", margin:"0 auto",
          padding:"40px 28px 0", flex:1,
          display:"flex", flexDirection:"column", justifyContent:"center",
        }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:9,
            background:"rgba(255,255,255,.06)",
            border:"1px solid rgba(255,255,255,.12)",
            borderRadius:999, padding:"6px 13px 6px 7px", marginBottom:30,
          }}>
            <span style={{
              background:"#f5c518", color:"#0a0a0a",
              fontSize:10, fontWeight:700, padding:"2px 8px",
              borderRadius:999, letterSpacing:".02em",
            }}>NEW</span>
            <span style={{ color:"#cfcfcf", fontSize:12.5 }}>
              Now booking Q3 engineering pods
            </span>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1.35fr 1fr", gap:40, alignItems:"end" }}>
            <h1 style={{
              margin:0, color:"#f4f2ee",
              fontSize:62, lineHeight:1.02,
              fontWeight:600, letterSpacing:"-.035em", maxWidth:640,
            }}>
              The best design and development studio in South Asia.
            </h1>
            <div style={{ paddingBottom:8 }}>
              <p style={{ color:"#a9a9a9", fontSize:15, lineHeight:1.6, margin:"0 0 18px", maxWidth:300 }}>
                We design and build solutions that drive results and help your business grow. No fluff. No BS. Just results.
              </p>
              <div style={{
                display:"inline-flex", alignItems:"center", gap:11,
                background:"#f5c518", borderRadius:13, padding:"11px 14px",
              }}>
                <div style={{
                  width:30, height:30, borderRadius:8, background:"#0a0a0a",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color:"#f5c518", fontSize:15,
                }}>✦</div>
                <div style={{ lineHeight:1.2 }}>
                  <div style={{ fontSize:12.5, fontWeight:700, color:"#1a1400" }}>Book an intro call</div>
                  <div style={{ fontSize:11, color:"#7a6a10" }}>Reply within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WATERMARK */}
        <div style={{ position:"relative", zIndex:3, textAlign:"center", marginTop:38, overflow:"hidden", lineHeight:.8 }}>
          <span style={{
            fontSize:200, fontWeight:800, letterSpacing:"-.04em",
            background:"linear-gradient(180deg,rgba(255,255,255,.13),rgba(255,255,255,0))",
            WebkitBackgroundClip:"text", backgroundClip:"text",
            color:"transparent", display:"inline-block", transform:"translateY(34%)",
          }}>SAASTRA</span>
        </div>
      </section>

      {/* ══ LOGO MARQUEE ═══════════════════════════════════════════ */}
      <section style={{ padding:"64px 0 16px" }}>
        <p style={{
          textAlign:"center", fontFamily:"var(--font-mono), monospace",
          fontSize:11, letterSpacing:".18em", color:"#8a8780",
          textTransform:"uppercase", margin:"0 0 26px",
        }}>Trusted by fast-moving teams at</p>
        <div style={{
          position:"relative", maxWidth:1100, margin:"0 auto", overflow:"hidden",
          WebkitMaskImage:"linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
          maskImage:      "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
        }}>
          <div style={{ display:"flex", gap:56, width:"max-content", animation:"marquee 34s linear infinite" }}>
            {marqueeLogos.map((logo, i) => (
              <span key={i} style={{
                fontSize:22, fontWeight:700, letterSpacing:"-.02em",
                color:"#3f3d39", opacity:.62, whiteSpace:"nowrap",
              }}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENGINEERING BENTO ══════════════════════════════════════ */}
      <section>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"148px 28px 96px" }}>
          <h2 className="sl-reveal" style={{
            fontSize:30, fontWeight:600, letterSpacing:"-.025em",
            margin:"0 0 26px", color:"#0c0c0c",
          }}>Replace your Engineering Team</h2>

          {/* row 1 */}
          <div style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr 1.1fr", gap:14, marginBottom:14 }}>

            {/* design & dev */}
            <div className="sl-reveal sl-d1" style={{ ...bentoCard(), minHeight:240 }}>
              <div style={{
                flex:1, borderRadius:12,
                background:"repeating-linear-gradient(135deg,#f1efea,#f1efea 11px,#e9e7e1 11px,#e9e7e1 22px)",
                display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16,
              }}>
                <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:11, color:"#9a978f" }}>design ↔ dev preview</span>
              </div>
              <div>
                <h3 style={{ margin:"0 0 6px", fontSize:16, fontWeight:600 }}>Design and Development</h3>
                <p style={{ margin:0, fontSize:13, lineHeight:1.5, color:"#6b6862" }}>Designers and builders by your side. We take your dream and ship it — from first concept to production.</p>
              </div>
            </div>

            {/* progress */}
            <div className="sl-reveal sl-d2" style={{ ...bentoCard(), minHeight:240 }}>
              <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>
                <div style={{
                  width:120, height:120, borderRadius:"50%",
                  background:"conic-gradient(#0c0c0c 0deg 264deg,#eceae4 264deg 360deg)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                }}>
                  <div style={{
                    width:88, height:88, borderRadius:"50%", background:"#fff",
                    display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
                  }}>
                    <span style={{ fontSize:22, fontWeight:700 }}>73%</span>
                    <span style={{ fontSize:10, color:"#8a877f" }}>Sprint 4</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ margin:"0 0 6px", fontSize:16, fontWeight:600 }}>Regular updates &amp; progress tracking</h3>
                <p style={{ margin:0, fontSize:13, lineHeight:1.5, color:"#6b6862" }}>Always know where things stand.</p>
              </div>
            </div>

            {/* hosting dark */}
            <div className="sl-reveal sl-d3" style={{ ...bentoCard(true), minHeight:240, color:"#fff", overflow:"hidden" }}>
              <div style={{
                flex:1, borderRadius:12,
                background:"radial-gradient(120% 120% at 30% 20%, #1e1e1e, #0b0b0b)",
                position:"relative", marginBottom:16, overflow:"hidden",
              }}>
                <div style={{ position:"absolute", inset:0, background:"radial-gradient(40% 60% at 70% 60%, rgba(255,150,60,.35), transparent 70%)" }} />
                <span style={{ position:"absolute", left:14, top:12, fontFamily:"var(--font-mono),monospace", fontSize:10, color:"#7a7a7a" }}>▲ deployed · 12 regions</span>
              </div>
              <div>
                <h3 style={{ margin:"0 0 6px", fontSize:16, fontWeight:600 }}>Hosting, Deployment &amp; Maintenance</h3>
                <p style={{ margin:0, fontSize:13, lineHeight:1.5, color:"#9a9a9a" }}>We keep it fast, secure and online.</p>
              </div>
            </div>
          </div>

          {/* row 2 */}
          <div style={{ display:"grid", gridTemplateColumns:"1.1fr 1.4fr", gap:14 }}>

            {/* SEO */}
            <div className="sl-reveal sl-d1" style={{ ...bentoCard(), minHeight:200 }}>
              <div style={{ border:"1px solid #ececec", borderRadius:12, padding:14, marginBottom:16 }}>
                <div style={{
                  display:"flex", alignItems:"center", gap:8,
                  border:"1px solid #e6e6e6", borderRadius:999,
                  padding:"8px 12px", marginBottom:12,
                }}>
                  <span style={{ color:"#888" }}>⌕</span>
                  <span style={{ fontSize:12, color:"#888" }}>saastra labs engineering studio</span>
                </div>
                <div style={{ fontSize:11, color:"#1a7e1a", marginBottom:2 }}>saastralabs.io</div>
                <div style={{ fontSize:13, color:"#1a3dbf", fontWeight:500 }}>Saastra Labs — Design &amp; Engineering Studio</div>
              </div>
              <div>
                <h3 style={{ margin:"0 0 6px", fontSize:16, fontWeight:600 }}>Get found on Google</h3>
                <p style={{ margin:0, fontSize:13, lineHeight:1.5, color:"#6b6862" }}>SEO-ready, fast, accessible builds.</p>
              </div>
            </div>

            {/* components */}
            <div className="sl-reveal sl-d2" style={{ ...bentoCard(), minHeight:200 }}>
              <div style={{ flex:1, display:"flex", gap:10, marginBottom:16 }}>
                <div style={{ flex:1, borderRadius:12, background:"linear-gradient(160deg,#ffb45a,#ff7a1a)" }} />
                <div style={{ flex:1, borderRadius:12, background:"linear-gradient(160deg,#dfe7f5,#aebfe0)" }} />
                <div style={{ flex:1, borderRadius:12, background:"linear-gradient(160deg,#1a1a1a,#3a3a3a)" }} />
                <div style={{ flex:1, borderRadius:12, background:"linear-gradient(160deg,#cfeede,#7fd0a8)" }} />
              </div>
              <div>
                <h3 style={{ margin:"0 0 6px", fontSize:16, fontWeight:600 }}>Components, dashboards and everything else</h3>
                <p style={{ margin:0, fontSize:13, lineHeight:1.5, color:"#6b6862" }}>A full library of building blocks, ready to ship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROJECTS ════════════════════════════════════════════════ */}
      <section style={{ position:"relative", maxWidth:1100, margin:"0 auto", padding:"88px 28px 88px" }}>
        <div style={{ lineHeight:.76, marginBottom:-4, overflow:"hidden" }}>
          <span style={{
            display:"block", whiteSpace:"nowrap",
            fontSize:"clamp(120px,19vw,232px)", fontWeight:800,
            letterSpacing:"-.035em",
            background:"linear-gradient(180deg,#dad7d0 32%,rgba(218,215,208,0) 92%)",
            WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent",
          }}>Projects</span>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1.55fr 1fr", gap:14, marginBottom:14 }}>
          <div className="sl-reveal sl-d1" style={{ height:300, borderRadius:18, background:"repeating-linear-gradient(45deg,#cdcbc5,#cdcbc5 12px,#d6d4ce 12px,#d6d4ce 24px)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:12, color:"#7c7a73" }}>[ web app · product UI ]</span>
          </div>
          <div className="sl-reveal sl-d2" style={{ height:300, borderRadius:18, background:"#101010", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:12, color:"#666" }}>[ mobile app ]</span>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:14, marginBottom:14 }}>
          <div className="sl-reveal sl-d1" style={{ height:220, borderRadius:18, background:"linear-gradient(160deg,#1d3a30,#0c1c17)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:12, color:"#6f8a80" }}>[ dashboard ]</span>
          </div>
          <div className="sl-reveal sl-d2" style={{ height:220, borderRadius:18, background:"repeating-linear-gradient(45deg,#d8cbb8,#d8cbb8 12px,#e0d4c2 12px,#e0d4c2 24px)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:12, color:"#8a7f6c" }}>[ brand site ]</span>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.55fr", gap:14 }}>
          <div className="sl-reveal sl-d1" style={{ height:230, borderRadius:18, background:"linear-gradient(160deg,#3a2a1a,#120c06)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:12, color:"#8a7a66" }}>[ campaign ]</span>
          </div>
          <div className="sl-reveal sl-d2" style={{ height:230, borderRadius:18, background:"linear-gradient(160deg,#e6ecf6,#cdd9ee)", display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:12, color:"#7d8aa6" }}>[ e-commerce platform ]</span>
          </div>
        </div>
      </section>

      {/* ══ INSIGHTS (horizontal scroll) ═══════════════════════════ */}
      <section style={{ padding:"140px 0 32px", overflow:"hidden" }}>
        <h2 className="sl-reveal" style={{
          fontSize:30, fontWeight:600, letterSpacing:"-.025em",
          margin:"0 auto 26px", maxWidth:1100,
          paddingLeft:28, paddingRight:28, color:"#0c0c0c",
        }}>See insights straight from our clients</h2>

        <div
          id="insights-scroll"
          onScroll={onInsightsScroll}
          className="sl-no-sb"
          style={{
            display:"flex", gap:24, overflowX:"auto",
            paddingBottom:8, paddingRight:28,
            paddingLeft:"max(28px,calc(50vw - 522px))",
            scrollSnapType:"x mandatory",
          }}
        >
          {insights.map((t, i) => (
            <div key={i} style={{
              flex:"0 0 320px",
              background:"#fff", border:"1px solid #efedea",
              borderRadius:18, padding:22,
              display:"flex", flexDirection:"column", justifyContent:"space-between",
              minHeight:185, scrollSnapAlign:"start",
                }}>
              <div>
                <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:10, letterSpacing:".1em", color:"#9a978f" }}>{t.tag}</span>
                <p style={{ margin:"12px 0 0", fontSize:14, lineHeight:1.55, color:"#27251f" }}>{t.text}</p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:18 }}>
                <div style={{ width:34, height:34, borderRadius:"50%", background:"linear-gradient(140deg,#c9c6bf,#a8a59d)", flexShrink:0 }} />
                <div style={{ lineHeight:1.25 }}>
                  <div style={{ fontSize:13, fontWeight:600 }}>{t.name}</div>
                  <div style={{ fontSize:11.5, color:"#8a877f" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSIGHT DOTS */}
      <div style={{ display:"flex", justifyContent:"center", margin:"2px 0 0" }}>
        <div style={{
          display:"inline-flex", gap:8, alignItems:"center",
          background:"#fff", borderRadius:999, padding:"9px 13px",
        }}>
          {insightDots.map((d, i) => (
            <button key={i} onClick={d.onClick} style={{
              width:d.w, height:7, borderRadius:999,
              border:"none", padding:0, cursor:"pointer",
              background:d.bg, transition:"width .3s,background .3s",
            }} />
          ))}
        </div>
      </div>

      {/* ══ SCALING BENTO ══════════════════════════════════════════ */}
      <section>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"148px 28px 96px" }}>
          <h2 className="sl-reveal" style={{
            fontSize:30, fontWeight:600, letterSpacing:"-.025em",
            margin:"0 0 26px", color:"#0c0c0c",
          }}>Scaling successful companies</h2>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1.1fr", gap:14 }}>
            {/* team */}
            <div className="sl-reveal sl-d1" style={{ ...bentoCard(), minHeight:250 }}>
              <div style={{ position:"relative", flex:1, marginBottom:14 }}>
                <div style={{ position:"absolute", left:18, top:6,  width:54, height:54, borderRadius:14, background:"linear-gradient(140deg,#cfccc4,#a9a69e)" }} />
                <div style={{ position:"absolute", left:78, top:34, width:54, height:54, borderRadius:14, background:"linear-gradient(140deg,#bcc6c2,#929c97)" }} />
                <div style={{ position:"absolute", left:40, top:74, width:54, height:54, borderRadius:14, background:"linear-gradient(140deg,#d2c6b6,#a99c87)" }} />
                <div style={{ position:"absolute", left:118,top:84, width:54, height:54, borderRadius:14, background:"linear-gradient(140deg,#c4c1cc,#9794a2)" }} />
              </div>
              <div>
                <h3 style={{ margin:"0 0 6px", fontSize:16, fontWeight:600 }}>A senior team on demand</h3>
                <p style={{ margin:0, fontSize:13, lineHeight:1.5, color:"#6b6862" }}>Designers, engineers and PMs, embedded.</p>
              </div>
            </div>

            {/* stat */}
            <div className="sl-reveal sl-d2" style={{ ...bentoCard(), minHeight:250, justifyContent:"center" }}>
              <div style={{ fontSize:64, fontWeight:700, letterSpacing:"-.04em", lineHeight:1 }}>100+</div>
              <div style={{ fontSize:13, color:"#8a877f", margin:"6px 0 18px" }}>Projects delivered</div>
              <p style={{ margin:0, fontSize:13, lineHeight:1.55, color:"#6b6862" }}>
                From seed-stage startups to scaling companies, teams trust Saastra Labs to ship the work that matters.
              </p>
            </div>

            {/* testimonial dark */}
            <div className="sl-reveal sl-d3" style={{ ...bentoCard(true), minHeight:250, color:"#fff" }}>
              <div>
                <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:10, letterSpacing:".12em", color:"#7a7a7a" }}>CARET</span>
                <p style={{ margin:"14px 0 0", fontSize:14, lineHeight:1.6, color:"#e6e6e6" }}>
                  &ldquo;Saastra Labs feels like an extension of our own team. They moved fast, communicated clearly, and the quality was exceptional.&rdquo;
                </p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:18 }}>
                <div style={{ width:34, height:34, borderRadius:"50%", background:"linear-gradient(140deg,#444,#222)", flexShrink:0 }} />
                <div style={{ lineHeight:1.25 }}>
                  <div style={{ fontSize:13, fontWeight:600 }}>Jordan Vale</div>
                  <div style={{ fontSize:11.5, color:"#888" }}>Founder, Caret</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ COMPARISON ══════════════════════════════════════════════ */}
      <section>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"148px 28px 96px" }}>
          <h2 className="sl-reveal" style={{
            fontSize:30, fontWeight:600, letterSpacing:"-.025em",
            margin:"0 0 24px", color:"#0c0c0c",
          }}>Saastra Labs vs traditional service providers</h2>

          <div style={{ background:"#fff", border:"1px solid #e6e4df", borderRadius:20, overflow:"hidden" }}>
            {/* header */}
            <div style={{
              display:"grid", gridTemplateColumns:"1fr 1.2fr 1.2fr",
              background:"#f6f5f2", borderBottom:"1px solid #ececea",
              fontSize:12.5, fontWeight:600, color:"#5a574f",
            }}>
              <div style={{ padding:"15px 22px" }} />
              <div style={{ padding:"15px 18px", display:"flex", alignItems:"center", gap:8, color:"#0c0c0c" }}>
                <span style={{ width:18, height:18, borderRadius:6, background:"#0c0c0c", color:"#fff", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:11 }}>S</span>
                Saastra Labs
              </div>
              <div style={{ padding:"15px 18px" }}>Traditional providers</div>
            </div>

            {/* rows */}
            {compRows.map((row, i) => (
              <div key={i} style={{
                display:"grid", gridTemplateColumns:"1fr 1.2fr 1.2fr",
                borderBottom:"1px solid #f0efec", fontSize:13,
              }}>
                <div style={{ padding:"14px 22px", color:"#6b6862", display:"flex", alignItems:"center" }}>{row.label}</div>
                <div style={{ padding:"14px 18px", display:"flex", alignItems:"center", gap:9, color:"#1a1a1a" }}>
                  <span style={{ flexShrink:0, width:18, height:18, borderRadius:"50%", background:"#e6f4ec", color:"#1f9d57", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:11 }}>✓</span>
                  {row.a}
                </div>
                <div style={{ padding:"14px 18px", display:"flex", alignItems:"center", gap:9, color:"#9a978f" }}>
                  <span style={{ flexShrink:0, width:18, height:18, borderRadius:"50%", background:"#f1efeb", color:"#b3b0a7", display:"inline-flex", alignItems:"center", justifyContent:"center", fontSize:11 }}>✕</span>
                  {row.t}
                </div>
              </div>
            ))}

            {/* CTA row */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1.2fr 1.2fr" }}>
              <div />
              <div style={{ padding:"16px 18px" }}>
                <a href="#" style={{
                  display:"inline-block", background:"#f5c518", color:"#0a0a0a",
                  fontSize:13, fontWeight:600, padding:"9px 16px",
                  borderRadius:9, textDecoration:"none",
                }}>Book a free call</a>
              </div>
              <div style={{ padding:"16px 18px" }}>
                <span style={{ display:"inline-block", background:"#f1efeb", color:"#9a978f", fontSize:13, fontWeight:500, padding:"9px 16px", borderRadius:9 }}>
                  Slow to respond
                </span>
              </div>
            </div>
          </div>

          {/* small cards */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14, marginTop:14 }}>
            {smallCards.map((c, i) => (
              <div key={i} className={`sl-reveal sl-d${i+1}`} style={{ ...bentoCard(), padding:20 }}>
                <div style={{ width:34, height:34, borderRadius:9, background:"#f3f1ec", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, marginBottom:12 }}>{c.icon}</div>
                <h3 style={{ margin:"0 0 6px", fontSize:15, fontWeight:600 }}>{c.t}</h3>
                <p style={{ margin:0, fontSize:13, lineHeight:1.5, color:"#6b6862" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRICING ═════════════════════════════════════════════════ */}
      <section>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"148px 28px 104px" }}>
          <h2 className="sl-reveal" style={{
            fontSize:30, fontWeight:600, letterSpacing:"-.025em",
            margin:"0 0 24px", color:"#0c0c0c",
          }}>Extensive pricing plans</h2>

          {/* row 1 */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
            {/* light */}
            <div className="sl-reveal sl-d1" style={{ ...bentoCard(), padding:26 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                <span style={{ fontSize:13, fontWeight:600 }}>Composable</span>
                <span style={{ background:"#eafaef", color:"#1f9d57", fontSize:10, fontWeight:600, padding:"3px 8px", borderRadius:999 }}>2 spots left</span>
              </div>
              <h3 style={{ margin:"0 0 2px", fontSize:19, fontWeight:600, letterSpacing:"-.01em" }}>Tailored website components</h3>
              <p style={{ margin:"0 0 18px", fontSize:13, color:"#8a877f" }}>for fast-moving brands</p>
              <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:18 }}>
                <span style={{ fontSize:34, fontWeight:700, letterSpacing:"-.03em" }}>$4,995</span>
                <span style={{ fontSize:13, color:"#8a877f" }}>/mo</span>
              </div>
              <a href="#" style={{ display:"block", textAlign:"center", background:"#f5c518", color:"#0a0a0a", fontSize:13, fontWeight:600, padding:11, borderRadius:10, textDecoration:"none", marginBottom:18 }}>Select plan</a>
              {planA.map((f, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:9, fontSize:13, color:"#3a382f", padding:"6px 0", borderTop:"1px solid #f2f1ed" }}>
                  <span style={{ color:"#1f9d57" }}>✓</span>{f}
                </div>
              ))}
            </div>

            {/* dark */}
            <div className="sl-reveal sl-d2" style={{ ...bentoCard(true), padding:26, position:"relative", overflow:"hidden", color:"#fff" }}>
              <div style={{ position:"absolute", top:-80, right:-40, width:240, height:240, background:"radial-gradient(50% 50% at 50% 50%, rgba(255,150,60,.3), transparent 70%)" }} />
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14, position:"relative" }}>
                <span style={{ fontSize:13, fontWeight:600 }}>Scale</span>
                <span style={{ background:"rgba(245,197,24,.16)", color:"#f5c518", fontSize:10, fontWeight:600, padding:"3px 8px", borderRadius:999 }}>Most popular</span>
              </div>
              <h3 style={{ margin:"0 0 2px", fontSize:19, fontWeight:600, letterSpacing:"-.01em", position:"relative" }}>Tailored website components</h3>
              <p style={{ margin:"0 0 18px", fontSize:13, color:"#9a9a9a", position:"relative" }}>for high-growth teams</p>
              <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:18, position:"relative" }}>
                <span style={{ fontSize:34, fontWeight:700, letterSpacing:"-.03em" }}>$6,995</span>
                <span style={{ fontSize:13, color:"#9a9a9a" }}>/mo</span>
              </div>
              <a href="#" style={{ display:"block", textAlign:"center", background:"#f5c518", color:"#0a0a0a", fontSize:13, fontWeight:600, padding:11, borderRadius:10, textDecoration:"none", marginBottom:18, position:"relative" }}>Select plan</a>
              {planB.map((f, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:9, fontSize:13, color:"#cfcfcf", padding:"6px 0", borderTop:"1px solid #1c1c1c", position:"relative" }}>
                  <span style={{ color:"#f5c518" }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>

          {/* wide row */}
          <div className="sl-reveal" style={{ ...bentoCard(), padding:26, display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:30, alignItems:"center" }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                <span style={{ fontSize:13, fontWeight:600 }}>Multi pages</span>
                <span style={{ background:"#eafaef", color:"#1f9d57", fontSize:10, fontWeight:600, padding:"3px 8px", borderRadius:999 }}>Best for scale</span>
              </div>
              <h3 style={{ margin:"0 0 2px", fontSize:19, fontWeight:600, letterSpacing:"-.01em" }}>Tailored multi-page websites</h3>
              <p style={{ margin:"0 0 18px", fontSize:13, color:"#8a877f" }}>for fast conversion rates</p>
              <div style={{ display:"flex", alignItems:"baseline", gap:4, marginBottom:18 }}>
                <span style={{ fontSize:34, fontWeight:700, letterSpacing:"-.03em" }}>$12,499</span>
                <span style={{ fontSize:13, color:"#8a877f" }}>/mo</span>
              </div>
              <a href="#" style={{ display:"inline-block", background:"#f5c518", color:"#0a0a0a", fontSize:13, fontWeight:600, padding:"11px 22px", borderRadius:10, textDecoration:"none" }}>Select plan</a>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px 18px" }}>
              {planC.map((f, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:9, fontSize:13, color:"#3a382f", padding:"6px 0" }}>
                  <span style={{ color:"#1f9d57" }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOUNDER ═════════════════════════════════════════════════ */}
      <section style={{ background:"#060606", color:"#fff", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-200, right:-100, width:600, height:500, background:"radial-gradient(50% 50% at 50% 50%, rgba(255,140,50,.18), transparent 70%)" }} />
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"140px 28px", position:"relative" }}>
          <h2 style={{ fontSize:28, fontWeight:600, letterSpacing:"-.02em", margin:"0 0 30px" }}>The founder&apos;s desk</h2>
          <div style={{ display:"grid", gridTemplateColumns:"300px 1fr", gap:40, alignItems:"start" }}>
            <div style={{
              height:300, borderRadius:18,
              background:"repeating-linear-gradient(45deg,#1a1a1a,#1a1a1a 12px,#161616 12px,#161616 24px)",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <span style={{ fontFamily:"var(--font-mono),monospace", fontSize:11, color:"#555" }}>[ founder photo ]</span>
            </div>
            <div>
              <p style={{ fontSize:15, lineHeight:1.7, color:"#cfcfcf", margin:"0 0 16px" }}>
                For the last few years, we&apos;ve been helping web applications turn ideas into shipped products. We&apos;ve worked with startups, small businesses, and growing enterprises to design and build their digital presence from Kathmandu, Nepal.
              </p>
              <p style={{ fontSize:15, lineHeight:1.7, color:"#cfcfcf", margin:"0 0 16px" }}>
                At Saastra Labs, we treat every project as if it were our own. We obsess over the details, sweat the edge cases, and deliver work we&apos;re genuinely proud of — fast, and without the usual agency drama.
              </p>
              <p style={{ fontSize:15, lineHeight:1.7, color:"#cfcfcf", margin:"0 0 22px" }}>
                If you&apos;re looking for a team that moves quickly and cares deeply, we&apos;d love to build with you.
              </p>
              <div style={{ fontFamily:"var(--font-mono),monospace", fontSize:18, color:"#fff", marginBottom:4, fontStyle:"italic" }}>Ashaya Sah</div>
              <div style={{ fontSize:12.5, color:"#8a8a8a" }}>Founder &amp; CEO, Saastra Labs, Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM TESTIMONIALS (horizontal scroll) ═════════════════ */}
      <section style={{ padding:"140px 0 32px", overflow:"hidden" }}>
        <h2 className="sl-reveal" style={{
          fontSize:30, fontWeight:600, letterSpacing:"-.025em",
          margin:"0 auto 26px", maxWidth:1100,
          paddingLeft:28, paddingRight:28, color:"#0c0c0c",
        }}>What people have been saying</h2>

        <div
          id="people-scroll"
          onScroll={onPeopleScroll}
          className="sl-no-sb"
          style={{
            display:"flex", gap:24, overflowX:"auto",
            paddingBottom:8, paddingRight:28,
            paddingLeft:"max(28px,calc(50vw - 522px))",
            scrollSnapType:"x mandatory",
          }}
        >
          {bottomTestimonials.map((t, i) => (
            <div key={i} style={{
              flex:"0 0 360px",
              background:"#0b0b0b", border:"1px solid #1c1c1c",
              borderRadius:18, padding:24, color:"#fff",
              minHeight:220, scrollSnapAlign:"start",
              display:"flex", flexDirection:"column", justifyContent:"space-between",
            }}>
              <div>
                <div style={{ fontSize:16, fontWeight:700, marginBottom:16, color:"#fff" }}>{t.company}</div>
                <p style={{ margin:0, fontSize:14, lineHeight:1.6, color:"#cfcfcf" }}>{t.text}</p>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginTop:20 }}>
                <div style={{ width:34, height:34, borderRadius:"50%", background:"linear-gradient(140deg,#444,#222)", flexShrink:0 }} />
                <div style={{ lineHeight:1.25 }}>
                  <div style={{ fontSize:13, fontWeight:600 }}>{t.name}</div>
                  <div style={{ fontSize:11.5, color:"#888" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PEOPLE DOTS */}
      <div style={{ display:"flex", justifyContent:"center", margin:"2px 0 0" }}>
        <div style={{
          display:"inline-flex", gap:8, alignItems:"center",
          background:"#fff", borderRadius:999, padding:"9px 13px",
        }}>
          {peopleDots.map((d, i) => (
            <button key={i} onClick={d.onClick} style={{
              width:d.w, height:7, borderRadius:999,
              border:"none", padding:0, cursor:"pointer",
              background:d.bg, transition:"width .3s,background .3s",
            }} />
          ))}
        </div>
      </div>

      {/* ══ FAQ ═════════════════════════════════════════════════════ */}
      <section>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"148px 28px 120px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"0.9fr 1.2fr", gap:48, alignItems:"start" }}>
            <div>
              <h2 className="sl-reveal" style={{
                fontSize:30, fontWeight:600, letterSpacing:"-.025em",
                margin:"0 0 12px", color:"#0c0c0c",
              }}>Frequently asked questions</h2>
              <p style={{ fontSize:14, lineHeight:1.6, color:"#6b6862", margin:"0 0 24px" }}>
                Have more questions? Reach out at{" "}
                <span style={{ color:"#0c0c0c", textDecoration:"underline" }}>hello@saastralabs.io</span>
                {" "}and we&apos;ll get back to you.
              </p>
              <div style={{ background:"#0b0b0b", borderRadius:18, padding:24, color:"#fff" }}>
                <h3 style={{ margin:"0 0 10px", fontSize:17, fontWeight:600, lineHeight:1.3 }}>
                  Need a fast-moving team of engineers for your startup?
                </h3>
                <p style={{ margin:"0 0 18px", fontSize:13, lineHeight:1.5, color:"#9a9a9a" }}>
                  Book an intro call and we&apos;ll map out a plan tailored to your roadmap.
                </p>
                <ChatButton label="Chat with us" href="#" />
              </div>
            </div>

            <div>
              {faqs.map((f, i) => (
                <div key={i} style={{ borderBottom:"1px solid #d9d6cf" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    style={{
                      width:"100%", display:"flex", alignItems:"center",
                      justifyContent:"space-between", gap:16,
                      background:"none", border:"none", padding:"18px 0",
                      cursor:"pointer", textAlign:"left",
                      fontFamily:"var(--font-sans), system-ui, sans-serif",
                    }}
                  >
                    <span style={{ fontSize:15, fontWeight:500, color:"#0c0c0c" }}>{f.q}</span>
                    <span style={{
                      flexShrink:0, fontSize:18, color:"#6b6862",
                      transition:"transform .2s",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}>+</span>
                  </button>
                  <div style={{
                    overflow:"hidden",
                    maxHeight: openFaq === i ? 200 : 0,
                    transition:"max-height .28s ease",
                  }}>
                    <p style={{ margin:"0 0 18px", fontSize:14, lineHeight:1.6, color:"#6b6862", maxWidth:"90%" }}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA FOOTER ══════════════════════════════════════════════ */}
      <section style={{ background:"#060606", color:"#fff", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-160, left:"50%", transform:"translateX(-50%)", width:900, height:600, background:"radial-gradient(50% 50% at 50% 50%, rgba(255,150,60,.22), transparent 65%)" }} />
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"112px 28px 0", position:"relative", textAlign:"center" }}>
          <h2 style={{
            fontSize:46, fontWeight:600, letterSpacing:"-.03em",
            lineHeight:1.05, margin:"0 auto 26px", maxWidth:560,
          }}>Make your website a sales machine</h2>
          <div style={{ marginBottom:64 }}>
            <ChatButton label="Book a free call →" href="#" />
          </div>

          {/* footer links */}
          <div style={{
            textAlign:"left", display:"grid",
            gridTemplateColumns:"2fr 1fr 1fr 1fr",
            gap:30, padding:"0 0 40px",
            borderBottom:"1px solid #1a1a1a",
          }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:9, marginBottom:12 }}>
                <div style={{ width:26, height:26, borderRadius:7, background:"linear-gradient(140deg,#fff,#cfcfcf)", display:"flex", alignItems:"center", justifyContent:"center", color:"#060606", fontWeight:800, fontSize:15 }}>S</div>
                <span style={{ color:"#fff", fontWeight:600, fontSize:16 }}>Saastra Labs</span>
              </div>
              <p style={{ fontSize:13, lineHeight:1.6, color:"#8a8a8a", margin:0, maxWidth:240 }}>
                Design and engineering studio from Kathmandu, Nepal — building for the world.
              </p>
            </div>
            <div>
              <div style={{ fontFamily:"var(--font-mono),monospace", fontSize:12, fontWeight:600, color:"#9a9a9a", marginBottom:12, letterSpacing:".08em" }}>PAGES</div>
              {navLinks.map(l => (
                <a key={l.label} href={l.href} style={{ display:"block", fontSize:13.5, color:"#cfcfcf", textDecoration:"none", padding:"5px 0" }}>{l.label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily:"var(--font-mono),monospace", fontSize:12, fontWeight:600, color:"#9a9a9a", marginBottom:12, letterSpacing:".08em" }}>COMPANY</div>
              {footerCompany.map(l => (
                <a key={l} href="#" style={{ display:"block", fontSize:13.5, color:"#cfcfcf", textDecoration:"none", padding:"5px 0" }}>{l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontFamily:"var(--font-mono),monospace", fontSize:12, fontWeight:600, color:"#9a9a9a", marginBottom:12, letterSpacing:".08em" }}>LEGAL</div>
              {footerLegal.map(l => (
                <a key={l} href="#" style={{ display:"block", fontSize:13.5, color:"#cfcfcf", textDecoration:"none", padding:"5px 0" }}>{l}</a>
              ))}
            </div>
          </div>

          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 0" }}>
            <span style={{ fontSize:12, color:"#6a6a6a" }}>© 2025 Saastra Labs Pvt. Ltd., Kathmandu, Nepal. All rights reserved.</span>
            <div style={{ display:"flex", gap:14 }}>
              <span style={{ fontSize:12, color:"#9a9a9a" }}>X</span>
              <span style={{ fontSize:12, color:"#9a9a9a" }}>in</span>
              <span style={{ fontSize:12, color:"#9a9a9a" }}>GH</span>
            </div>
          </div>

          {/* watermark */}
          <div style={{ overflow:"hidden", lineHeight:.72, marginTop:6 }}>
            <span style={{
              fontSize:210, fontWeight:800, letterSpacing:"-.045em",
              background:"linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,0))",
              WebkitBackgroundClip:"text", backgroundClip:"text",
              color:"transparent", display:"inline-block", transform:"translateY(30%)",
            }}>SAASTRA</span>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}
