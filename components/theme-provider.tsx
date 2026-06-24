"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// The site is a fixed light design — dark sections are hand-built with their own
// tokens (`*-inv` / `bg-sl-dark`). It is NOT a theme-switchable layout, so we
// force the light theme. Without this, OS dark mode adds `.dark`, which flips
// `--foreground` to near-white and makes any text that inherits the body color
// invisible on the light sections.
function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      forcedTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }
