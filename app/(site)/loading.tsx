import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <div className="bg-sl-bg min-h-screen">
      {/* Hero stand-in */}
      <div className="bg-sl-dark min-h-[70vh] flex items-center">
        <div className="sl-container w-full pt-40">
          <Skeleton className="h-6 w-44 rounded-pill bg-white/10" />
          <Skeleton className="mt-8 h-12 w-3/4 bg-white/10" />
          <Skeleton className="mt-4 h-12 w-2/3 bg-white/10" />
          <Skeleton className="mt-8 h-11 w-48 rounded-lg bg-white/10" />
        </div>
      </div>

      {/* Sections stand-in */}
      <div className="sl-container sl-section space-y-16">
        <div>
          <Skeleton className="h-9 w-80" />
          <div className="mt-8 grid grid-cols-2 gap-[14px]">
            <Skeleton className="h-72 rounded-card" />
            <Skeleton className="h-72 rounded-card" />
          </div>
        </div>
        <div>
          <Skeleton className="h-9 w-96" />
          <div className="mt-8 grid grid-cols-3 gap-[14px]">
            <Skeleton className="h-44 rounded-card" />
            <Skeleton className="h-44 rounded-card" />
            <Skeleton className="h-44 rounded-card" />
          </div>
        </div>
      </div>
    </div>
  )
}
