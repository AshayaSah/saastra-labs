import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ScrollRevealProvider } from "@/components/ui/scroll-reveal"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <ScrollRevealProvider>
        <main>{children}</main>
      </ScrollRevealProvider>
      <Footer />
    </>
  )
}
