import 'server-only';

export type Locale = 'fr' | 'en';

const dictionaries = {
  fr: () => import('@/messages/fr.json').then((module) => module.default),
  en: () => import('@/messages/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale = 'fr') => {
  if (locale in dictionaries) {
    return dictionaries[locale]();
  }
  return dictionaries.fr();
};
