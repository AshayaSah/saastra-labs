import { PricingHeader } from "@/components/pricing/pricing-header"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { ComparisonTable } from "@/components/shared/comparison-table"
import { TestimonialsCarousel } from "@/components/shared/testimonials-carousel"
import { FAQAccordion } from "@/components/shared/faq-accordion"

export default function PricingPage() {
  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans antialiased">
      <section className="relative mx-auto max-w-[1100px] px-7 pt-[150px]">
        <PricingHeader />
        <PricingCards />
      </section>
      <ComparisonTable />
      <TestimonialsCarousel />
      <FAQAccordion />
    </div>
  )
}
