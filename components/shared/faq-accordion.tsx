import { getFaqs } from "@/lib/db/queries"
import { FAQAccordionView } from "./faq-accordion-view"

export async function FAQAccordion() {
  const items = await getFaqs()
  return <FAQAccordionView items={items} />
}
