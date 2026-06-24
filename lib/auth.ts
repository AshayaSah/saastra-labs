// Edge-safe signed-session helpers (Web Crypto HMAC-SHA256).
// Usable from both middleware (edge) and server actions (node).

export const SESSION_COOKIE = "sl_admin_session"
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7 // 7 days

function getSecret(): string {
  const secret = process.env.SESSION_SECRET
  if (!secret) throw new Error("SESSION_SECRET is not set")
  return secret
}

const encoder = new TextEncoder()

function toBase64Url(bytes: ArrayBuffer | Uint8Array): string {
  const arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes)
  let str = ""
  for (const b of arr) str += String.fromCharCode(b)
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

async function hmac(data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(data))
  return toBase64Url(sig)
}

// Token format: "<expiryEpochSeconds>.<signature>"
export async function createSessionToken(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
  const payload = String(exp)
  const sig = await hmac(payload)
  return `${payload}.${sig}`
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false
  const dot = token.indexOf(".")
  if (dot === -1) return false
  const payload = token.slice(0, dot)
  const sig = token.slice(dot + 1)

  const expected = await hmac(payload)
  if (sig !== expected) return false

  const exp = Number(payload)
  if (!Number.isFinite(exp)) return false
  return exp > Math.floor(Date.now() / 1000)
}

export const SESSION_MAX_AGE = SESSION_TTL_SECONDS
