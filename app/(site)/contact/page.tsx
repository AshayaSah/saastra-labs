import { ContactForm } from "@/components/contact/contact-form"

export const metadata = {
  title: "Contact · Saastra Labs",
  description: "Tell us about your project and we'll get back within a business day.",
}

const DETAILS = [
  { label: "Email", value: "hello@saastralabs.io", href: "mailto:hello@saastralabs.io" },
  { label: "Response time", value: "Within one business day" },
  { label: "Studio", value: "Kathmandu, Nepal · working worldwide" },
]

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans text-sl-text antialiased">
      <div className="sl-container sl-page-top pb-section-end">
        {/* Watermark heading — shared with Products / Pricing / Blog */}
        <div className="sl-display">
          <span className="sl-display-title">Contact</span>
        </div>

        <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-13">
          {/* Left — intro + details */}
          <div className="sl-reveal pt-2">
            <span className="sl-mono-label mb-3.5 block">Let&apos;s talk</span>
            <h1 className="mb-5 text-h1 text-sl-text">
              Tell us what you&apos;re <em>building</em>.
            </h1>
            <p className="mb-9 max-w-[380px] sl-section-lead">
              Whether it&apos;s a brand-new product or a team that needs to ship
              faster, send us the details and we&apos;ll map out the next step
              together.
            </p>

            <dl className="m-0 flex flex-col gap-5">
              {DETAILS.map((d) => (
                <div key={d.label} className="border-t border-sl-border pt-4">
                  <dt className="sl-mono-label mb-1.5">{d.label}</dt>
                  <dd className="m-0 text-[15px] text-sl-text">
                    {d.href ? (
                      <a
                        href={d.href}
                        className="underline decoration-sl-border-strong underline-offset-4 transition-colors hover:decoration-sl-text"
                      >
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — form */}
          <div className="sl-reveal sl-d1">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
