import { LoginForm } from "./login-form"

export const metadata = { title: "Admin · Sign in" }

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sl-bg px-6">
      <div className="w-full max-w-[var(--sl-container-narrow)]">
        <div className="mb-7 text-center">
          <h1 className="m-0 text-[20px] font-semibold tracking-[-0.01em] text-sl-text">
            Saastra Labs
          </h1>
          <p className="mt-1.5 mb-0 text-[13.5px] text-sl-muted">
            Sign in to the content admin.
          </p>
        </div>
        <div className="rounded-card border border-sl-border bg-sl-surface p-6 shadow-card">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
