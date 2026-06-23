"use client"

import { useState } from "react"

export function ChatButton({
  label = "Chat with us",
  href = "#",
}: {
  label?: string
  href?: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "6px 20px 6px 6px",
        background: "#0f0f0f",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.12)"}`,
        borderRadius: 999,
        textDecoration: "none",
        overflow: "hidden",
        transform: hovered ? "scale(1.018)" : "scale(1)",
        transition: "border-color 0.2s ease, transform 0.18s ease",
        cursor: "pointer",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        userSelect: "none",
        lineHeight: 1,
      }}
    >
      {/* scanline sweep */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, bottom: 0, left: "-90%",
          width: "55%",
          background:
            "linear-gradient(90deg,transparent 10%,rgba(255,255,255,0.055) 50%,transparent 90%)",
          animation: "sl-chat-scan 4.5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Yellow icon box */}
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 16,
          background: "#f5c518",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          position: "relative",
          zIndex: 1,
          animation: "sl-icon-glow 3s ease-in-out infinite",
          transform: hovered ? "rotate(-8deg) scale(1.06)" : "rotate(0deg) scale(1)",
          transition: "transform 0.22s ease",
        }}
      >
        {/* Arrow icon ↗ */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          aria-hidden="true"
          style={{
            transform: hovered ? "translate(1px,-1px)" : "translate(0,0)",
            transition: "transform 0.22s ease",
          }}
        >
          <path
            d="M2.5 12.5L12.5 2.5"
            stroke="#0a0a0a"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M5.5 2.5H12.5V9.5"
            stroke="#0a0a0a"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      {/* Label */}
      <span
        style={{
          color: "#f0eeea",
          fontSize: 13.5,
          fontWeight: 600,
          whiteSpace: "nowrap",
          letterSpacing: "-0.01em",
          position: "relative",
          zIndex: 1,
        }}
      >
        {label}
      </span>
    </a>
  )
}
