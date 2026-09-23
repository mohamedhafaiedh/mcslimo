import 'server-only';
import type { Locale } from './i18n';

export type { Locale };

const dictionaries = {
  fr: () => import('@/messages/fr.json').then((module) => module.default),
  en: () => import('@/messages/en.json').then((module) => module.default),
  ar: () => import('@/messages/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale = 'fr') => {
  if (locale in dictionaries) {
    return dictionaries[locale]();
  }
  return dictionaries.fr();
};
