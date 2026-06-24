"use client"

import { useState } from "react"
import { ChatButton } from "@/components/chat-button"
import type { FaqRow } from "@/lib/db/queries"

export function FAQAccordionView({ items }: { items: FaqRow[] }) {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section>
      <div className="sl-container sl-section">
        <div className="grid gap-12 items-start" style={{ gridTemplateColumns: "0.9fr 1.2fr" }}>
          {/* Left: heading + CTA card */}
          <div>
            <h2 className="sl-reveal sl-section-heading mb-3">
              Frequently asked questions
            </h2>
            <p className="text-[14px] leading-[1.6] text-sl-muted mt-0 mb-6">
              Have more questions? Reach out at{" "}
              <span className="text-sl-text underline">hello@saastralabs.io</span>
              {" "}and we&apos;ll get back to you.
            </p>
            <div className="bg-sl-card-dark rounded-[18px] p-6 text-white">
              <h3 className="m-0 mb-[10px] text-[17px] font-semibold leading-[1.3]">
                Need a fast-moving team of engineers for your startup?
              </h3>
              <p className="mt-0 mb-[18px] text-[13px] leading-[1.5] text-[#9a9a9a]">
                Book an intro call and we&apos;ll map out a plan tailored to your roadmap.
              </p>
              <ChatButton href="/contact" />
            </div>
          </div>

          {/* Right: accordion */}
          <div>
            {items.map((f, i) => (
              <div key={i} className="border-b border-[#d9d6cf]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 bg-transparent border-none py-[18px] cursor-pointer text-left font-sans"
                >
                  <span className="text-[15px] font-medium text-sl-text">{f.question}</span>
                  <span
                    className="flex-shrink-0 text-[18px] text-sl-muted transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-[280ms] ease-in-out"
                  style={{ maxHeight: openFaq === i ? 200 : 0 }}
                >
                  <p className="mt-0 mb-[18px] text-[14px] leading-[1.6] text-sl-muted max-w-[90%]">
                    {f.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
