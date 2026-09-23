"use client";

import { usePathname } from "next/navigation";
import {
  Locale,
  DEFAULT_LOCALE,
  getTranslation,
  getMessages,
  localizeUrl,
  getDir,
  getFormattedTimestamp,
} from "./i18n";

export {
  getTranslation,
  getMessages,
  localizeUrl,
  getDir,
  getFormattedTimestamp,
  DEFAULT_LOCALE,
};
export type { Locale };

/**
 * Hook React pour composants clients (`'use client'`).
 * Détecte automatiquement la langue courante à partir de l'URL
 * et fournit `t`, `localizeUrl`, `lang`, `dir`, etc.
 */
export function useTranslation(overrideLocale?: Locale) {
  const pathname = usePathname() || "";

  let detectedLocale: Locale = DEFAULT_LOCALE;
  if (pathname === "/ar" || pathname.startsWith("/ar/")) {
    detectedLocale = "ar";
  } else if (pathname === "/en" || pathname.startsWith("/en/")) {
    detectedLocale = "en";
  }

  const locale = overrideLocale || detectedLocale;
  const t = getTranslation(locale);
  const messages = getMessages(locale);

  return {
    locale,
    lang: locale,
    t,
    messages,
    pathname,
    isAr: locale === "ar",
    isEn: locale === "en",
    isFr: locale === "fr",
    dir: getDir(locale),
    localizeUrl: (url: string) => localizeUrl(url, locale),
  };
}
