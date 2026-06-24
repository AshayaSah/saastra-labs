import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPostLoading() {
  return (
    <div className="bg-sl-bg">
      <div className="sl-container sl-page-top pb-section-end">
        <Skeleton className="mb-10 h-3 w-72" />
        <div className="mb-13 grid grid-cols-2 items-start gap-13">
          <div>
            <Skeleton className="mb-4 h-3 w-24" />
            <Skeleton className="mb-3 h-9 w-full" />
            <Skeleton className="mb-6 h-9 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-5/6" />
          </div>
          <Skeleton className="h-80 rounded-card" />
        </div>
        <div className="grid grid-cols-[210px_1fr] gap-13">
          <Skeleton className="h-40" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="mt-8 h-6 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </div>
  )
}
