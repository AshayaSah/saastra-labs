import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Dot-matrix glyph shown inside the button (morphs to the logo on hover)
const CHAT_DOTS = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0],
]

export function ChatButton({
  label = "Chat with SAASTRA",
  href = "/contact",
  className = "",
  variant = "cream",
}: {
  label?: string
  href?: string
  className?: string
  /** "cream" — warm cream fill for dark surfaces; "bordeaux" — deep bordeaux fill for light surfaces. */
  variant?: "cream" | "bordeaux"
}) {
  const dark = variant === "bordeaux"

  return (
    <Link
      href={href}
      className={cn(
        "sl-focus-ring group relative flex w-fit cursor-pointer items-center gap-2 rounded-full py-2 pr-4 pl-11 tracking-tight no-underline transition-colors duration-300",
        dark
          ? "border border-sl-border-dark bg-sl-accent text-sl-text-inv hover:bg-sl-dark"
          : "border border-sl-border bg-sl-text-inv text-sl-text hover:bg-sl-surface-2",
        className,
      )}
    >
      {/* Morphing box: dot-matrix that slides + flips into the logo */}
      <div
        className={cn(
          "absolute inset-y-0 left-1 z-[var(--z-fixed)] my-auto flex size-8 flex-col items-center justify-center gap-px rounded-full bg-sl-accent transition-all duration-[400ms] ease-out motion-reduce:transition-none group-hover:left-[calc(100%-2.3rem)] group-hover:rotate-180",
          dark ? "group-hover:bg-sl-text-inv" : "group-hover:bg-sl-dark",
        )}
      >
        <div className="flex flex-col gap-px group-hover:hidden">
          {CHAT_DOTS.map((row, r) => (
            <div key={r} className="flex gap-px">
              {row.map((on, c) => (
                <span
                  key={c}
                  className={`inline-block size-0.75 shrink-0 rounded-full ${on ? "bg-sl-accent-ink" : "bg-sl-accent-ink/25"}`}
                />
              ))}
            </div>
          ))}
        </div>
        <Image
          src="/logo.png"
          alt="SAASTRA Logo"
          width={32}
          height={32}
          className="hidden size-8 rotate-180 rounded-full object-cover blur-sm transition-all duration-[400ms] ease-out group-hover:block group-hover:blur-none"
        />
      </div>

      {/* Clip-path reveal bar */}
      <div
        className={cn(
          "absolute -inset-px rounded-full transition-[clip-path] duration-[400ms] ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)]",
          dark ? "bg-sl-text-inv/20" : "bg-sl-text/[0.08]",
        )}
      />

      <span className="inline-block text-inherit transition-transform duration-[400ms] group-hover:-translate-x-8">
        {label}
      </span>
    </Link>
  )
}
