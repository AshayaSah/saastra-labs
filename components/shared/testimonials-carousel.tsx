import { getTestimonials } from "@/lib/db/queries"
import { TestimonialsCarouselView } from "./testimonials-carousel-view"

export async function TestimonialsCarousel() {
  const items = await getTestimonials()
  return <TestimonialsCarouselView items={items} />
}
