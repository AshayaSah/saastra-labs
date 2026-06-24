import { ProductsGrid } from "@/components/products/products-grid"
import { FAQAccordion } from "@/components/shared/faq-accordion"

export default function ProductsPage() {
  return (
    <div className="overflow-x-hidden bg-sl-bg font-sans antialiased">
      <div className="pt-[62px]">
        <ProductsGrid />
      </div>
      <FAQAccordion />
    </div>
  )
}
