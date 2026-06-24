import { cn } from "@/lib/utils"

interface BentoCardProps {
  dark?: boolean
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

export function BentoCard({ dark = false, className, children, style }: BentoCardProps) {
  return (
    <div
      className={cn(dark ? "sl-card-dark" : "sl-card", className)}
      style={style}
    >
      {children}
    </div>
  )
}
