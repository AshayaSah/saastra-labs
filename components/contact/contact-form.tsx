"use client"

import { useActionState } from "react"
import { submitContact, type ContactState } from "@/app/(site)/contact/actions"

const initial: ContactState = { status: "idle" }

const TOPICS = [
  "General enquiry",
  "Start a project",
  "Partnership",
  "Careers",
  "Support",
]

const fieldCls =
  "h-11 w-full rounded-control border border-sl-border bg-white px-4 text-[14px] text-sl-text outline-none transition-colors placeholder:text-sl-subtle focus:border-sl-text"
const labelCls = "mb-2 block text-[13px] font-medium text-sl-body"
const errCls = "mt-1.5 text-[12.5px] text-red-600"

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial)

  if (state.status === "success") {
    return (
      <div className="sl-card items-start gap-4 p-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sl-green-light text-[20px] text-sl-green">
          ✓
        </div>
        <h3 className="m-0 text-h3 text-sl-text">Message sent</h3>
        <p className="m-0 text-body text-sl-muted">{state.message}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-1 text-[13.5px] font-medium text-sl-text underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          Send another message
        </button>
      </div>
    )
  }

  const err = state.errors ?? {}

  return (
    <form action={formAction} className="sl-card gap-5 p-7">
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name <span className="text-sl-accent">*</span>
          </label>
          <input id="name" name="name" autoComplete="name" placeholder="Jane Doe" className={fieldCls} />
          {err.name && <p className={errCls}>{err.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="text-sl-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldCls}
          />
          {err.email && <p className={errCls}>{err.email}</p>}
        </div>

        <div>
          <label htmlFor="company" className={labelCls}>
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Acme Inc."
            className={fieldCls}
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 555 000 1234"
            className={fieldCls}
          />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className={labelCls}>
          What can we help with?
        </label>
        <select id="topic" name="topic" defaultValue={TOPICS[0]} className={fieldCls}>
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Message <span className="text-sl-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your project, timeline, and what success looks like."
          className={`${fieldCls} h-auto resize-y py-3 leading-[1.6]`}
        />
        {err.message && <p className={errCls}>{err.message}</p>}
      </div>

      {state.status === "error" && state.message && (
        <p className="m-0 text-[13px] text-red-600">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 h-12 rounded-control bg-sl-text text-[14px] font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>

      <p className="m-0 text-[12px] leading-[1.5] text-sl-subtle">
        We&apos;ll only use your details to reply. No newsletters, no spam.
      </p>
    </form>
  )
}
