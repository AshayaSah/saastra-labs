import { getInsights } from "@/lib/db/queries"
import { InsightsCarouselView } from "./insights-carousel-view"

export async function InsightsCarousel() {
  const items = await getInsights()
  return <InsightsCarouselView items={items} />
}
