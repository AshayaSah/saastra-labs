// Single source of truth for site-wide identity + canonical URL.
// Override the domain in production via NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://saastralabs.io"
).replace(/\/+$/, "")

export const SITE_NAME = "Saastra Labs"

export const SITE_DESCRIPTION =
  "Saastra Labs is an engineering studio that designs and ships fast, modern web products for startups and growing teams."
