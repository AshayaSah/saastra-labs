import { getProjects } from "@/lib/db/queries"
import { ProjectDeck } from "@/components/home/project-deck"
import { GridGlow } from "@/components/shared/grid-glow"
import { ChatButton } from "@/components/chat-button"

export async function ProjectsGrid() {
  const PROJECTS = await getProjects()

  return (
    <section className="relative overflow-x-clip bg-sl-accent">
      <GridGlow />
      {/* Heading — on the same solid accent as the deck */}
      <div className="relative px-4 pt-16 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1560px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <div>
              <h2 className="sl-section-heading text-sl-text-inv">Projects</h2>
              <p className="whitespace-nowrap sl-section-lead-inv">
                A selection of products, platforms, and brands we have designed
                and engineered end-to-end — from first sketch to production.
              </p>
            </div>
            <ChatButton
              href="/work"
              label="Know more"
              logo={false}
              className="self-start"
            />
          </div>
        </div>
      </div>

      {/* Deck — cream cards on the solid accent field */}
      <ProjectDeck projects={PROJECTS} />
    </section>
  )
}
