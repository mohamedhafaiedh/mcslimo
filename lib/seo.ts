export const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://mcslimo.fr';
export const SITE_URL = BASE;

export const LOCALES = {
  fr: { code: 'fr-FR', prefix: '',     dir: 'ltr' },
  en: { code: 'en-US', prefix: '/en',  dir: 'ltr' },
  es: { code: 'es-ES', prefix: '/es',  dir: 'ltr' },
  it: { code: 'it-IT', prefix: '/it',  dir: 'ltr' },
  ar: { code: 'ar-SA', prefix: '/ar',  dir: 'rtl' },
} as const;

export type Lang = keyof typeof LOCALES;

export const SITE_ROUTES = [
  '',
  'services',
  'flotte',
  'reservation',
  'contact',
  'qui-sommes-nous',
  'chauffeur-a-lannee',
  'lp-chauffeur-prive',
  'mentions-legales',
  'politique-de-confidentialite',
  'cgv',
] as const;

/** slug: '' pour l'accueil, 'services' pour /services/, etc. */
export function buildAlternates(slug: string, lang: Lang) {
  const cleanSlug = slug.replace(/^\/|\/$/g, '');
  const path = cleanSlug ? `${cleanSlug}/` : '';
  const url = (l: Lang) => `${BASE}${LOCALES[l].prefix}/${path}`;

  const languages: Record<string, string> = {};
  for (const l of Object.keys(LOCALES) as Lang[]) {
    languages[LOCALES[l].code] = url(l);
  }
  languages['x-default'] = url('fr');

  return { canonical: url(lang), languages };
}

/** Fallback helper for legacy compatibility */
export function getAlternates(slug: string = '', langOrIsEn: string | boolean = 'fr') {
  let lang: Lang = 'fr';
  if (typeof langOrIsEn === 'boolean') {
    lang = langOrIsEn ? 'en' : 'fr';
  } else if (langOrIsEn in LOCALES) {
    lang = langOrIsEn as Lang;
  }
  return buildAlternates(slug, lang);
}
