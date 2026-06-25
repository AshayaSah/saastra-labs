import type { CSSProperties } from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Cover background: use the uploaded image when present, else the gradient. */
export function coverStyle(image: string, gradient: string): CSSProperties {
  return image
    ? {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : { background: gradient }
}
