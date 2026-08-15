import { Skeleton } from "@/components/ui/skeleton"

export default function TeamLoading() {
  return (
    <div className="bg-sl-bg">
      <div className="sl-container sl-page-top">
        <Skeleton className="mb-10 h-16 w-64" />
        <div className="grid gap-[14px] py-[14px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-[320px] rounded-card" />
          ))}
        </div>
      </div>
    </div>
  )
}
