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

export function getAlternates(slug: string = '', isEn: boolean = false) {
  const cleanSlug = slug.replace(/^\/|\/$/g, '');
  const frPath = cleanSlug ? `/${cleanSlug}/` : '/';
  const enPath = cleanSlug ? `/en/${cleanSlug}/` : '/en/';

  return {
    canonical: isEn ? `${SITE_URL}${enPath}` : `${SITE_URL}${frPath}`,
    languages: {
      'fr-FR': `${SITE_URL}${frPath}`,
      'en-US': `${SITE_URL}${enPath}`,
      'x-default': `${SITE_URL}${frPath}`,
    },
  };
}
