import { getProjects } from "@/lib/db/queries"
import { ProjectCard } from "@/components/projects/project-card"

export async function WhoIsBehindAlgora() {
  const projects = (await getProjects()).slice(0, 3)

  return (
    <section className="relative overflow-x-clip">
      <div className="px-4 pt-16 pb-10 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1560px]">
          <h2 className="sl-section-heading text-sl-text">Who Is Behind Algora.</h2>
        </div>
      </div>

      <div className="px-4 pb-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-5">
          {projects.map((project) => (
            <div key={project.id} className="origin-top scale-[0.88] sm:scale-[0.94] lg:scale-[0.82] 2xl:scale-100">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
