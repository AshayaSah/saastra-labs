export function CTAButton({
  label = "Get in touch",
  href = "#",
}: {
  label?: string
  href?: string
}) {
  return (
    <a href={href} className="sl-cta-btn">
      <span className="sl-cta-dot" />
      {label}
    </a>
  )
}
