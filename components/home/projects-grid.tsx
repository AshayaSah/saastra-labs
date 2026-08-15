import { getProjects } from "@/lib/db/queries"
import { ProjectDeck } from "@/components/home/project-deck"

export async function ProjectsGrid() {
  const PROJECTS = await getProjects()

  return (
    <section className="relative overflow-x-clip bg-sl-surface">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Right column (25%) — maroon, frozen/sticky */}
        <div className="flex flex-col justify-center bg-sl-accent px-6 py-16 md:sticky md:top-0 md:order-2 md:col-span-1 md:h-dvh md:px-8 lg:px-12">
          <h2 className="sl-section-heading text-sl-text-inv">Projects</h2>
          <p className="max-w-md text-sm font-normal text-balance text-sl-muted-inv sm:text-base lg:text-lg">
            A selection of products, platforms, and brands we have designed and
            engineered end-to-end — from first sketch to production.
          </p>
        </div>

        {/* Left column (75%) — cream, scroll-scrubbed card deck */}
        <div className="bg-sl-surface md:order-1 md:col-span-3">
          <ProjectDeck projects={PROJECTS} />
        </div>
      </div>
    </section>
  )
}