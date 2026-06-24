import { ProjectsGrid } from "@/components/home/projects-grid"
import { ServicesBento } from "@/components/home/services-bento"
import { InsightsCarousel } from "@/components/home/insights-carousel"
import { FAQAccordion } from "@/components/shared/faq-accordion"

export default function WorkPage() {
  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans antialiased">
      <ProjectsGrid />
      <ServicesBento />
      <InsightsCarousel />
      <FAQAccordion />
    </div>
  )
}
