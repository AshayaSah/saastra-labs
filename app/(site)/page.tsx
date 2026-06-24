import { HeroSection } from "@/components/home/hero"
import { LogoMarquee } from "@/components/home/logo-marquee"
import { ServicesBento } from "@/components/home/services-bento"
import { ProjectsGrid } from "@/components/home/projects-grid"
import { InsightsCarousel } from "@/components/home/insights-carousel"
import { ScalingBento } from "@/components/home/scaling-bento"
import { ComparisonTable } from "@/components/shared/comparison-table"
import { HomePricing } from "@/components/home/home-pricing"
import { FounderSection } from "@/components/home/founder-section"
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel"
import { FAQAccordion } from "@/components/shared/faq-accordion"

export default function HomePage() {
  return (
    <div className="bg-sl-bg overflow-x-hidden antialiased font-sans">
      <HeroSection />
      <LogoMarquee />
      <ServicesBento />
      <ProjectsGrid />
      <InsightsCarousel />
      <ScalingBento />
      <ComparisonTable />
      <HomePricing />
      <FounderSection />
      <TestimonialsCarousel />
      <FAQAccordion />
    </div>
  )
}
