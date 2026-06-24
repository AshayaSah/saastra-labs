import { ChatButton } from "@/components/chat-button"

const NAV_LINKS = [
  { label: "Work",     href: "/" },
  { label: "Products", href: "#" },
  { label: "Pricing",  href: "/pricing" },
  { label: "Blog",     href: "/blog" },
]

export function Navbar({ activePath }: { activePath?: string }) {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      padding: "10px 20px",
      pointerEvents: "none",
    }}>
      <nav style={{
        maxWidth: 880,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "9px 9px 9px 20px",
        background: "rgba(242,241,237,0.70)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        borderRadius: 999,
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 2px 24px rgba(0,0,0,0.07), inset 0 0 0 0.5px rgba(255,255,255,0.55)",
        pointerEvents: "all",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
          <div style={{
            width: 26, height: 26, borderRadius: 7,
            background: "linear-gradient(140deg,#1a1a1a,#3d3d3d)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 800, fontSize: 15,
          }}>S</div>
          <span style={{ color: "#0c0c0c", fontWeight: 600, fontSize: 16, letterSpacing: "-.01em" }}>
            Saastra Labs
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              color: activePath === l.href ? "#0c0c0c" : "#5a5752",
              fontSize: 14,
              textDecoration: "none",
              fontWeight: activePath === l.href ? 600 : 450,
            }}>{l.label}</a>
          ))}
        </div>

        <ChatButton href="#" />
      </nav>
    </header>
  )
}
