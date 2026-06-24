import Link from "next/link"
import { RESOURCES } from "@/lib/admin/fields"
import { logout } from "../login/actions"

export const metadata = { title: "Admin · Saastra Labs" }

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sl-bg text-sl-text">
      <div className="mx-auto flex max-w-[1300px] gap-8 px-6 py-8">
        {/* Sidebar */}
        <aside className="sticky top-8 h-fit w-[220px] flex-shrink-0">
          <Link
            href="/admin"
            className="mb-5 block text-[15px] font-semibold tracking-[-0.01em] text-sl-text"
          >
            Saastra Admin
          </Link>

          <nav className="flex flex-col gap-0.5">
            <Link
              href="/admin/contact"
              className="rounded-control px-3 py-2 text-[13.5px] font-medium text-sl-text transition-colors hover:bg-sl-surface"
            >
              Messages
            </Link>

            <div className="my-2 border-t border-sl-border" />

            {RESOURCES.map((r) => (
              <Link
                key={r.key}
                href={`/admin/${r.key}`}
                className="rounded-control px-3 py-2 text-[13.5px] text-sl-body transition-colors hover:bg-sl-surface"
              >
                {r.label}
              </Link>
            ))}
          </nav>

          <form action={logout} className="mt-6 border-t border-sl-border pt-4">
            <button
              type="submit"
              className="rounded-control px-3 py-2 text-[13px] text-sl-muted transition-colors hover:text-sl-text"
            >
              Sign out
            </button>
          </form>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1 pb-16">{children}</main>
      </div>
    </div>
  )
}
