import { SiteHero } from "@/components/site-hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { ComparisonTable } from "@/components/shared/comparison-table"
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel"
import { FAQAccordion } from "@/components/shared/faq-accordion"

export default function PricingPage() {
  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans antialiased">
      <SiteHero
        title={<>Pricing</>}
        description={
          <>
            Clear plans, scope, and tradeoffs for teams that want to budget
            with confidence before the work begins.
          </>
        }
      />
      <section className="sl-container sl-section-sm pb-section-end">
        <PricingCards />
      </section>
      <ComparisonTable />
      <TestimonialsCarousel />
      <FAQAccordion />
    </div>
  )
}
