"use server"

import { db } from "@/lib/db"
import { contactSubmissions } from "@/lib/db/schema"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  /** Field-level errors keyed by input name. */
  errors?: Record<string, string>
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const company = String(formData.get("company") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const topic = String(formData.get("topic") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  const errors: Record<string, string> = {}
  if (!name) errors.name = "Please enter your name."
  if (!email) errors.email = "Please enter your email."
  else if (!EMAIL.test(email)) errors.email = "That email doesn't look right."
  if (!message) errors.message = "Tell us a little about what you need."
  else if (message.length < 10) errors.message = "A few more words would help us help you."

  if (Object.keys(errors).length > 0) {
    return { status: "error", errors }
  }

  try {
    await db.insert(contactSubmissions).values({
      name,
      email,
      company,
      phone,
      topic,
      message,
    })
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    }
  }

  return {
    status: "success",
    message: "Thanks for reaching out — we'll get back to you within one business day.",
  }
}
