import { BentoCard } from "@/components/ui/bento-card"

const stats = [
  {
    value: "100+",
    label: "Projects delivered",
    description: "Work shipped across product, design, and engineering.",
    accent: "linear-gradient(140deg,#323733,#1c2021)",
  },
  {
    value: "50+",
    label: "Clients partnered",
    description: "Teams that needed a small crew that moves with focus.",
    accent: "linear-gradient(140deg,#e7e3d7,#f1eee5)",
  },
  {
    value: "12+",
    label: "Employees on call",
    description: "A compact group that can flex into the work when needed.",
    accent: "linear-gradient(140deg,#323733,#1c2021)",
  },
]

export function SmallTeamBento() {
  return (
    <section>
      <div className="sl-container sl-section">
        <h2 className="sl-reveal sl-section-heading">Small team. Real work.</h2>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <BentoCard
              key={stat.label}
              className={`sl-reveal sl-d${index + 1} min-h-[250px] justify-center`}
            >
              <div className="mb-4 flex-1">
                <div
                  className="mb-3 h-[64px] w-[64px] rounded-tile-lg"
                  style={{ background: stat.accent }}
                />
              </div>

              <div>
                <div className="text-[64px] font-bold leading-none tracking-[-0.04em]">
                  {stat.value}
                </div>
                <div className="mt-1.5 mb-4.5 text-[13px] text-sl-subtle">{stat.label}</div>
                <p className="m-0 text-[13px] leading-[1.55] text-sl-muted">{stat.description}</p>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
