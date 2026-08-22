import type { Metadata } from "next"

import "lenis/dist/lenis.css"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider"
import { cn } from "@/lib/utils"
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site"
import { display } from "@/lib/fonts/display"
import { inter } from "@/lib/fonts/sans"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Engineering studio for modern web products`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", display.variable, inter.variable)}
    >
<body>
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
