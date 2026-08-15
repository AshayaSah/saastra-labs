import { Skeleton } from "@/components/ui/skeleton"

export default function CareersLoading() {
  return (
    <div className="bg-sl-bg">
      <div className="sl-container sl-page-top">
        <Skeleton className="mb-6 h-16 w-72" />
        <Skeleton className="mt-[14px] mb-3 h-9 w-[70%] max-w-[600px]" />
        <Skeleton className="mb-12 h-5 w-[55%] max-w-[480px]" />

        {/* Values */}
        <div className="grid gap-[14px] sm:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-[180px] rounded-card" />
          ))}
        </div>

        {/* Open roles */}
        <div className="flex flex-col gap-[14px] py-16">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-card" />
          ))}
        </div>
      </div>
    </div>
  )
}
