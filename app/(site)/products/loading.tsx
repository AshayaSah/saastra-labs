import { Skeleton } from "@/components/ui/skeleton"

export default function ProductsLoading() {
  return (
    <div className="bg-sl-bg">
      <div className="sl-container sl-section">
        <Skeleton className="mb-10 h-16 w-80" />
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[300px] rounded-card" />
          ))}
        </div>
      </div>
    </div>
  )
}
