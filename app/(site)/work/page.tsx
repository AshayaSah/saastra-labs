import { SiteHero } from "@/components/site-hero"
import { ProjectCard } from "@/components/projects/project-card"
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel"
import { InsightsCarousel } from "@/components/home/insights-carousel"
import { FAQAccordion } from "@/components/shared/faq-accordion"
import { getProjects } from "@/lib/db/queries"

export const metadata = {
  title: "Work",
  description:
    "Selected projects from the studio, pulled directly from the admin project collection.",
}

export default async function WorkPage() {
  const projects = await getProjects()

  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans antialiased">
      <SiteHero
        title={<>Work</>}
        description={
          <>
            A curated view of the work we&apos;ve shipped, the problems it
            solved, and the kind of systems we build for teams that want
            design and engineering to move together.
          </>
        }
      />

      <section className="sl-container sl-section-sm pb-section-end">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <div key={project.id} className={`sl-reveal sl-d${(i % 4) + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <TestimonialsCarousel />
      <InsightsCarousel />
      <FAQAccordion />
    </div>
  )
}
