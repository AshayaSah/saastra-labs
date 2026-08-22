import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <div className="bg-sl-bg">
      <div className="sl-container sl-page-top">
        <Skeleton className="mb-6 h-16 w-72" />
        <Skeleton className="mt-[14px] mb-3 h-9 w-[80%] max-w-[640px]" />
        <Skeleton className="mb-12 h-5 w-[60%] max-w-[520px]" />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-16 rounded-card" />
          ))}
        </div>

        {/* Values */}
        <div className="grid gap-[14px] py-16 sm:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-[180px] rounded-card" />
          ))}
        </div>
      </div>
    </div>
  )
}
