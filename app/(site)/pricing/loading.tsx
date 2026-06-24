import { Skeleton } from "@/components/ui/skeleton"

export default function PricingLoading() {
  return (
    <div className="bg-sl-bg">
      <div className="sl-container sl-page-top">
        <Skeleton className="mb-10 h-16 w-72" />
        <div className="mt-[14px] grid grid-cols-2 gap-[14px]">
          <Skeleton className="h-[420px] rounded-card" />
          <Skeleton className="h-[420px] rounded-card" />
        </div>
        <Skeleton className="mt-[14px] h-56 rounded-card" />
      </div>
    </div>
  )
}
