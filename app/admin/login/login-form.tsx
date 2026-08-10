"use client"

import { useActionState } from "react"
import { login, type LoginState } from "./actions"

const initial: LoginState = {}

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initial)

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="flex flex-col gap-2">
        <span className="text-[13px] font-medium text-sl-body">Password</span>
        <input
          type="password"
          name="password"
          autoFocus
          required
          placeholder="Enter admin password"
          className="sl-focus-ring h-11 rounded-control border border-sl-border bg-sl-surface px-4 text-[14px] text-sl-text outline-none transition-colors focus:border-sl-text"
        />
      </label>

      {state.error && (
        <p className="m-0 text-[13px] text-sl-danger">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="sl-focus-ring mt-1 h-11 rounded-control bg-sl-text text-[14px] font-semibold text-sl-text-inv transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  )
}
