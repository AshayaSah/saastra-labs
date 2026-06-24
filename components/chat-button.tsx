import Image from "next/image"

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
  href = "#",
  className = "",
}: {
  label?: string
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={`group relative flex w-fit cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-black py-2 pr-4 pl-11 tracking-tight no-underline ${className}`}
    >
      {/* Morphing box: dot-matrix that slides + flips into the logo */}
      <div className="absolute inset-y-0 left-1 z-40 my-auto flex size-8 flex-col items-center justify-center gap-px rounded-[5px] bg-sl-accent transition-all duration-[400ms] ease-out group-hover:left-[calc(100%-2.3rem)] group-hover:rotate-180 group-hover:bg-white">
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
          className="hidden size-8 rotate-180 rounded-[5px] object-cover blur-sm transition-all duration-[400ms] ease-out group-hover:block group-hover:blur-none"
        />
      </div>

      {/* Clip-path reveal bar */}
      <div className="absolute -inset-px rounded-lg bg-white/20 transition-[clip-path] duration-[400ms] ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)]" />

      <span className="inline-block text-white transition-transform duration-[400ms] group-hover:-translate-x-8">
        {label}
      </span>
    </a>
  )
}
