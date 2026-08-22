import { Skeleton } from "@/components/ui/skeleton"

export default function BlogLoading() {
  return (
    <div className="bg-sl-bg">
      <div className="sl-container sl-page-top pb-section-end">
        <Skeleton className="mb-10 h-16 w-64" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="sl-blog-card flex h-full flex-col">
              <Skeleton className="h-[190px] rounded-none" />
              <div className="flex flex-1 flex-col px-[22px] pt-5 pb-[18px]">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="mt-3 h-5 w-full" />
                <Skeleton className="mt-2 h-5 w-3/4" />
                <Skeleton className="mt-4 h-3 w-full" />
                <Skeleton className="mt-2 h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
