import { CtaBand } from "@/components/company/cta-band"
import { getTeamMembers } from "@/lib/db/queries"
import { coverStyle } from "@/lib/utils"

export const metadata = {
  title: "Team",
  description:
    "Meet the designers, engineers and product people behind Saastra Labs.",
}

export default async function TeamPage() {
  const members = await getTeamMembers()

  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans antialiased">
      <div className="sl-container sl-page-top pb-section-end">
        <div className="sl-display">
          <span className="sl-display-title">Team</span>
        </div>

        {members.length > 0 && (
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {members.map((m, i) => (
              <div
                key={m.id}
                className={`sl-reveal sl-d${(i % 3) + 1} sl-card`}
              >
                <div
                  className="mb-4 h-[200px] rounded-tile"
                  style={coverStyle(
                    m.avatar,
                    "linear-gradient(140deg,#323733,#1c2021)"
                  )}
                />
                <h3 className="m-0 text-[16px] font-medium text-sl-text">
                  {m.name}
                </h3>
                <div className="mt-0.5 text-meta text-sl-subtle">{m.role}</div>
                {m.bio && (
                  <p className="mt-2.5 mb-0 text-[13.5px] leading-[1.55] text-sl-muted">
                    {m.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <CtaBand
        heading="Want to build with us?"
        text="We're always glad to meet sharp designers and engineers. See open roles, or just say hello."
      />
    </div>
  )
}
