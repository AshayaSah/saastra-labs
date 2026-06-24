import { Skeleton } from "@/components/ui/skeleton"

export default function ContactLoading() {
  return (
    <div className="bg-sl-bg">
      <div className="sl-container sl-page-top pb-section-end">
        <Skeleton className="mb-10 h-16 w-72" />
        <div className="grid grid-cols-[0.9fr_1.1fr] items-start gap-13">
          <div className="flex flex-col gap-4 pt-2">
            <Skeleton className="h-9 w-64" />
            <Skeleton className="h-20 w-full max-w-[380px]" />
            <Skeleton className="mt-4 h-14 w-full" />
            <Skeleton className="h-14 w-full" />
          </div>
          <Skeleton className="h-[520px] rounded-card" />
        </div>
      </div>
    </div>
  )
}
