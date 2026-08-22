"use client"

import { useState } from "react"
import { ChatButton } from "@/components/chat-button"
import { GridGlow } from "@/components/shared/grid-glow"
import type { FaqRow } from "@/lib/db/queries"

export function FAQAccordionView({ items }: { items: FaqRow[] }) {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section className="relative overflow-hidden bg-sl-accent">
      <GridGlow />
      <div className="sl-container sl-section relative">
        <div className="grid grid-cols-1 gap-8 items-start md:gap-12 md:grid-cols-[0.9fr_1.2fr]">
          {/* Left: heading + CTA card */}
          <div>
            <h2 className="sl-reveal sl-section-heading mb-3 text-sl-text-inv">
              Frequently <em>asked questions</em>
            </h2>
            <p className="sl-section-lead-inv mt-0 mb-6">
              Have more questions? Reach out at{" "}
              <span className="text-sl-text-inv underline">hello@saastralabs.io</span>
              {" "}and we&apos;ll get back to you.
            </p>
            <div className="rounded-card border border-sl-border bg-sl-surface-2 p-6">
              <h3 className="m-0 mb-2.5 text-[17px] font-medium leading-[1.3] text-sl-text">
                Need a fast-moving team of engineers for your startup?
              </h3>
              <p className="mt-0 mb-4.5 text-[13px] leading-[1.5] text-sl-muted">
                Book an intro call and we&apos;ll map out a plan tailored to your roadmap.
              </p>
              <ChatButton href="/contact" variant="cta" />
            </div>
          </div>

          {/* Right: accordion */}
          <div>
            {items.map((f, i) => (
              <div key={i} className="border-b border-sl-text-inv/15">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="sl-focus-ring w-full flex items-center justify-between gap-4 bg-transparent border-none py-4.5 cursor-pointer text-left font-sans"
                >
                  <span className="text-[15px] font-medium text-sl-text-inv">{f.question}</span>
                  <span
                    className="flex-shrink-0 text-[18px] text-sl-text-inv/60 transition-transform duration-200"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
                    openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="mt-0 mb-4.5 text-[14px] leading-[1.6] text-sl-text-inv/70 max-w-[90%]">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
