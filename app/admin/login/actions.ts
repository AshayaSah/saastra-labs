"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createSessionToken, SESSION_COOKIE, SESSION_MAX_AGE } from "@/lib/auth"

export type LoginState = { error?: string }

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "")
  const expected = process.env.ADMIN_PASSWORD

  if (!expected) {
    return { error: "ADMIN_PASSWORD is not configured on the server." }
  }
  if (password !== expected) {
    return { error: "Incorrect password. Try again." }
  }

  const token = await createSessionToken()
  const store = await cookies()
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  })

  redirect("/admin")
}

export async function logout() {
  const store = await cookies()
  store.delete(SESSION_COOKIE)
  redirect("/admin/login")
}
