import { getNavLinks } from "@/lib/db/queries"
import { NavbarView } from "./navbar-view"

export async function Navbar({ activePath }: { activePath?: string }) {
  const links = await getNavLinks()
  return <NavbarView links={links} activePath={activePath} />
}
