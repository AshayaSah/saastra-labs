export function PricingHeader() {
  return (
    <div className="leading-[0.76] mb-[-4px] overflow-hidden">
      <span
        className="block whitespace-nowrap font-extrabold tracking-[-0.035em] select-none"
        style={{
          fontSize: "clamp(120px,19vw,232px)",
          background: "linear-gradient(180deg,#dad7d0 32%,rgba(218,215,208,0) 92%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Pricing
      </span>
    </div>
  )
}
