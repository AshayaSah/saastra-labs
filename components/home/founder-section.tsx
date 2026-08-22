import Image from "next/image"
import { GridGlow } from "@/components/shared/grid-glow"

export function FounderSection() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-sl-dark text-sl-text-inv">
      <GridGlow />
      <div className="sl-container sl-section relative flex flex-1 flex-col">
        <div className="grid flex-1 grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-10">
          <div
            className="relative min-h-[360px] overflow-hidden rounded-card md:min-h-[520px] md:rounded-l-none md:rounded-r-card"
            style={{
              marginLeft: "calc(var(--spacing-gutter) * -1)",
              marginTop: "calc(var(--spacing-section) * -1)",
              marginBottom: "calc(var(--spacing-section-end) * -1)",
            }}
          >
            <Image
              src="/team.jpg"
              alt="The Saastra Labs team"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-h2 text-sl-text-inv m-0 mb-6">
              SAASTRA&apos;s <em>Team Desk</em>
            </h2>
            <p className="sl-section-lead-inv mt-0 mb-4">
              For the last few years, we&apos;ve been helping web applications
              turn ideas into shipped products. We&apos;ve worked with startups,
              small businesses, and growing enterprises to design and build
              their digital presence from Kathmandu, Nepal.
            </p>
            <p className="sl-section-lead-inv mt-0 mb-4">
              At Saastra Labs, we treat every project as if it were our own. We
              obsess over the details, sweat the edge cases, and deliver work
              we&apos;re genuinely proud of â€” fast, and without the usual
              agency drama.
            </p>
            <p className="sl-section-lead-inv mt-0 mb-[22px]">
              If you&apos;re looking for a team that moves quickly and cares
              deeply, we&apos;d love to build with you.
            </p>
            <div className="mb-1 font-mono text-[18px] italic text-sl-text-inv">
              The Saastra Labs Team
            </div>
            <div className="text-[12.5px] text-sl-subtle-inv">
              Engineering &amp; Design Â· Kathmandu, Nepal
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
