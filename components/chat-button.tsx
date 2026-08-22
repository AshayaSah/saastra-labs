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
  logo = true,
}: {
  label?: string
  href?: string
  className?: string
  /** "cream" — ivory fill for dark surfaces; "bordeaux" — charcoal fill for light surfaces. */
  variant?: "cream" | "bordeaux" | "cta"
  /** When false, keeps the dot-matrix arrow glyph instead of morphing into the logo. */
  logo?: boolean
}) {
  const dark = variant === "bordeaux"
  const cta = variant === "cta"

  return (
    <Link
      href={href}
      className={cn(
        "sl-focus-ring group relative flex w-fit cursor-pointer items-center gap-2 rounded-full py-2 pr-4 pl-11 tracking-tight no-underline transition-colors duration-300",
          cta
            ? "border border-sl-border bg-sl-cta-bg text-sl-accent hover:bg-[#cf7f1f]"
            : dark
          ? "border border-sl-border-dark bg-sl-accent text-sl-text-inv hover:bg-sl-dark"
          : "border border-sl-border bg-sl-cta-bg text-sl-text hover:bg-[#cf7f1f]",
        className,
      )}
    >
      {/* Morphing box: dot-matrix that swipes + crossfades into the logo */}
      <div
        className={cn(
          "absolute inset-y-0 left-1 z-[var(--z-fixed)] my-auto flex size-8 items-center justify-center rounded-full bg-sl-accent transition-all duration-[400ms] ease-out motion-reduce:transition-none group-hover:left-[calc(100%-2.3rem)]",
          cta ? "group-hover:bg-sl-accent" : dark ? "group-hover:bg-sl-cta-bg" : "group-hover:bg-sl-dark",
        )}
      >
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-px transition-opacity duration-[400ms] ease-out motion-reduce:transition-none ${
            logo ? "group-hover:opacity-0" : ""
          }`}
        >
          {CHAT_DOTS.map((row, r) => (
            <div key={r} className="flex gap-px">
              {row.map((on, c) => (
                <span
                  key={c}
                  className={`inline-block size-0.75 shrink-0 rounded-full ${on ? "bg-sl-cta-ink" : "bg-sl-cta-ink/25"}`}
                />
              ))}
            </div>
          ))}
        </div>
        {logo && (
          <Image
            src="/logonewbg.png"
            alt="SAASTRA Logo"
            width={32}
            height={32}
            className="absolute inset-0 m-auto size-8 rounded-full object-cover opacity-0 blur-sm transition-all duration-[400ms] ease-out motion-reduce:transition-none group-hover:opacity-100 group-hover:blur-none"
          />
        )}
      </div>

      {/* Clip-path reveal bar */}
      <div
        className={cn(
          "absolute -inset-px rounded-full transition-[clip-path] duration-[400ms] ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)]",
          cta ? "bg-sl-text/[0.08]" : dark ? "bg-sl-cta-bg/20" : "bg-sl-text/[0.08]",
        )}
      />

      <span className="inline-block text-inherit transition-transform duration-[400ms] group-hover:-translate-x-8">
        {label}
      </span>
    </Link>
  )
}
