import { ChatButton } from "@/components/chat-button"
import { GridGlow } from "@/components/shared/grid-glow"

export function CtaBand({
  heading = "Have a project in mind?",
  text = "Tell us what you're building. We'll come back with a plan, a timeline and a price — no decks, no runaround.",
}: {
  heading?: string
  text?: string
}) {
  return (
    <section className="relative overflow-hidden bg-sl-accent">
      <GridGlow />
      <div className="sl-container sl-section-sm relative">
        <div className="sl-reveal rounded-card border border-sl-border bg-sl-surface px-8 py-16 text-center sm:px-14">
          <h2 className="mx-auto mb-3 max-w-[560px] text-h2 text-sl-text">
            {heading}
          </h2>
          <p className="mx-auto mb-8 max-w-[460px] sl-section-lead">
            {text}
          </p>
          <div className="flex justify-center">
            <ChatButton href="/contact" variant="bordeaux" />
          </div>
        </div>
      </div>
    </section>
  )
}