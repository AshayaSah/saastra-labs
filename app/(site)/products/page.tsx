import { SiteHero } from "@/components/site-hero"
import { ProductsGrid } from "@/components/products/products-grid"
import { FAQAccordion } from "@/components/shared/faq-accordion"

export default function ProductsPage() {
  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans antialiased">
      <SiteHero
        title={<>Products</>}
        description={
          <>
            A closer look at the product offerings, what they include, and how
            each one is meant to support a different stage of growth.
          </>
        }
      />
      <ProductsGrid />
      <FAQAccordion />
    </div>
  )
}
