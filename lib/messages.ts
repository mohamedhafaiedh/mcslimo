import fr from "../messages/fr.json";
import en from "../messages/en.json";
import ar from "../messages/ar.json";
import { SupportedLang } from "../app/components/LanguageSwitcher";

export type Messages = typeof fr;

const messagesMap: Record<SupportedLang, Messages> = {
  fr: fr as Messages,
  en: en as Messages,
  ar: ar as Messages,
};

export function getMessages(lang: SupportedLang): Messages {
  return messagesMap[lang] || messagesMap.fr;
}
