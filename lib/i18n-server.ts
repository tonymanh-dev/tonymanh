import "server-only";
import { headers } from "next/headers";
import { defaultLocale, type Locale } from "./i18n";

export const getLocale = (): Locale => {
  const acceptLanguage = headers().get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  const lower = acceptLanguage.toLowerCase();
  if (lower.includes("ja")) return "ja";

  return defaultLocale;
};
