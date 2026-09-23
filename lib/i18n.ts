import fr from "../messages/fr.json";
import en from "../messages/en.json";
import ar from "../messages/ar.json";
import es from "../messages/es.json";
import it from "../messages/it.json";

export type Locale = "fr" | "en" | "ar" | "es" | "it";

export const SUPPORTED_LOCALES: Locale[] = ["fr", "en", "ar", "es", "it"];
export const DEFAULT_LOCALE: Locale = "fr";

export type Messages = typeof fr;

const messagesMap: Record<Locale, Messages> = {
  fr: fr as Messages,
  en: en as Messages,
  ar: ar as Messages,
  es: es as Messages,
  it: it as Messages,
};

/**
 * Charge l'ensemble des messages pour une langue donnée (côté serveur ou client)
 */
export function getMessages(locale: Locale = DEFAULT_LOCALE): Messages {
  return messagesMap[locale] || messagesMap[DEFAULT_LOCALE];
}

/**
 * Résout une clé imbriquée de type "home.services.title" dans un objet
 */
function getNestedValue(obj: unknown, keyPath: string): string | undefined {
  if (!obj || typeof obj !== "object") return undefined;
  const parts = keyPath.split(".");
  let current: unknown = obj;

  for (const part of parts) {
    if (current && typeof current === "object" && part in (current as Record<string, unknown>)) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return undefined;
    }
  }

  if (typeof current === "string") {
    return current;
  }
  return undefined;
}

/**
 * Crée une fonction de traduction `t(key, fallback)` pour une langue donnée.
 * Si la clé est introuvable dans la langue demandée, elle se rabat sur le français,
 * puis sur le fallback fourni ou la clé brute.
 */
export function getTranslation(locale: Locale = DEFAULT_LOCALE) {
  const currentMessages = getMessages(locale);
  const fallbackMessages = getMessages(DEFAULT_LOCALE);

  return function t(key: string, fallback?: string): string {
    const currentYear = String(new Date().getFullYear());
    const val = getNestedValue(currentMessages, key);
    if (val !== undefined) return val.replace(/\{year\}/g, currentYear);

    const fallbackVal = getNestedValue(fallbackMessages, key);
    if (fallbackVal !== undefined) return fallbackVal.replace(/\{year\}/g, currentYear);

    const result = fallback !== undefined ? fallback : key;
    return result.replace(/\{year\}/g, currentYear);
  };
}

/**
 * Génère une URL localisée respectant les règles du site :
 * - '/' pour le français
 * - '/en/...' pour l'anglais
 * - '/ar/...' pour l'arabe
 * - '/es/...' pour l'espagnol
 * - '/it/...' pour l'italien
 * Préserve les ancres (#) et query parameters (?).
 * Laisse intactes les URLs externes (http, mailto, tel).
 */
export function localizeUrl(path: string, locale: Locale = DEFAULT_LOCALE): string {
  if (!path) {
    return locale === "fr" ? "/" : `/${locale}`;
  }

  // URLs externes ou spéciales
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("tel:") ||
    path.startsWith("mailto:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  // Isoler query params et hash
  let base = path;
  let suffix = "";

  const queryIndex = base.indexOf("?");
  if (queryIndex !== -1) {
    suffix = base.slice(queryIndex);
    base = base.slice(0, queryIndex);
  }

  const hashIndex = base.indexOf("#");
  if (hashIndex !== -1) {
    suffix = base.slice(hashIndex) + suffix;
    base = base.slice(0, hashIndex);
  }

  // Nettoyer les préfixes existants /en, /ar, /es ou /it
  if (base === "/ar" || base.startsWith("/ar/")) {
    base = base.slice(3) || "/";
  } else if (base === "/en" || base.startsWith("/en/")) {
    base = base.slice(3) || "/";
  } else if (base === "/es" || base.startsWith("/es/")) {
    base = base.slice(3) || "/";
  } else if (base === "/it" || base.startsWith("/it/")) {
    base = base.slice(3) || "/";
  }

  if (!base.startsWith("/")) {
    base = "/" + base;
  }

  let localizedPath = base;
  if (locale === "fr") {
    localizedPath = base;
  } else {
    localizedPath = base === "/" ? `/${locale}` : `/${locale}${base}`;
  }

  return localizedPath + suffix;
}

export function getDir(locale: Locale = DEFAULT_LOCALE): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Formate un timestamp avec le fuseau horaire de Paris selon la langue.
 */
export function getFormattedTimestamp(lang: Locale = "fr"): string {
  const now = new Date();
  if (lang === "ar") {
    const dateStr = now.toLocaleDateString("fr-FR", {
      timeZone: "Europe/Paris",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("fr-FR", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return `${dateStr} à ${timeStr} (توقيت باريس)`;
  } else if (lang === "fr") {
    const dateStr = now.toLocaleDateString("fr-FR", {
      timeZone: "Europe/Paris",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("fr-FR", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return `${dateStr} à ${timeStr} (heure de Paris)`;
  } else if (lang === "es") {
    const dateStr = now.toLocaleDateString("es-ES", {
      timeZone: "Europe/Paris",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("es-ES", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    return `${dateStr} a las ${timeStr} (hora de París)`;
  } else if (lang === "it") {
    const dateStr = now.toLocaleDateString("it-IT", {
      timeZone: "Europe/Paris",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("it-IT", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    return `${dateStr} alle ${timeStr} (ora di Parigi)`;
  } else {
    const dateStr = now.toLocaleDateString("en-US", {
      timeZone: "Europe/Paris",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("en-US", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    return `${dateStr}, ${timeStr} (Paris time)`;
  }
}


