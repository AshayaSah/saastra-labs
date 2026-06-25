import { ChatButton } from "@/components/chat-button"

export function CtaBand({
  heading = "Have a project in mind?",
  text = "Tell us what you're building. We'll come back with a plan, a timeline and a price — no decks, no runaround.",
}: {
  heading?: string
  text?: string
}) {
  return (
    <section className="sl-container sl-section-sm">
      <div className="sl-reveal rounded-card bg-sl-dark px-8 py-16 text-center sm:px-14">
        <h2 className="mx-auto mb-3 max-w-[560px] text-h2 text-sl-text-inv">
          {heading}
        </h2>
        <p className="mx-auto mb-8 max-w-[460px] text-body text-sl-muted-inv">
          {text}
        </p>
        <div className="flex justify-center">
          <ChatButton href="/contact" />
        </div>
      </div>
    </section>
  )
}
