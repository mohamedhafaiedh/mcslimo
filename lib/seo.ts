export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mcslimo.fr';

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

export function getAlternates(slug: string = '', langOrIsEn: string | boolean = 'fr') {
  const cleanSlug = slug.replace(/^\/|\/$/g, '');
  const frPath = cleanSlug ? `/${cleanSlug}/` : '/';
  const enPath = cleanSlug ? `/en/${cleanSlug}/` : '/en/';
  const arPath = cleanSlug ? `/ar/${cleanSlug}/` : '/ar/';

  let activeLocale = 'fr';
  if (typeof langOrIsEn === 'boolean') {
    activeLocale = langOrIsEn ? 'en' : 'fr';
  } else if (langOrIsEn === 'ar' || langOrIsEn === 'en') {
    activeLocale = langOrIsEn;
  }

  const canonicalPath = activeLocale === 'ar' ? arPath : activeLocale === 'en' ? enPath : frPath;

  return {
    canonical: `${SITE_URL}${canonicalPath}`,
    languages: {
      'fr-FR': `${SITE_URL}${frPath}`,
      'en-US': `${SITE_URL}${enPath}`,
      'ar-SA': `${SITE_URL}${arPath}`,
      'x-default': `${SITE_URL}${frPath}`,
    },
  };
}
