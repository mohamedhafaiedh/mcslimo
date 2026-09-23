@AGENTS.md

# Instructions du Projet & Règles d'Architecture

## 1. Système Internationalisation (i18n) & Gestion des Textes

### A. Règle d'or
- **AUCUN TEXTE EN DUR DANS LE CODE JSX / TSX.**
- **INTERDICTION STRICTE des ternaires de langue** dans les composants (ex: `isAr ? "..." : isEn ? "..." : "..."`).
- Toute chaîne de texte destinée à l'utilisateur doit impérativement provenir des dictionnaires situés dans le dossier `messages/`.

### B. Emplacement des fichiers de traduction
- Français (langue de référence) : `messages/fr.json`
- Anglais : `messages/en.json`
- Arabe : `messages/ar.json`

**Parité stricte** : Toute clé ajoutée dans `messages/fr.json` DOIT être répercutée à l'identique dans `messages/en.json` et `messages/ar.json` (même arborescence, mêmes clés).

### C. Comment ajouter ou consommer une traduction ?

1. **Ajouter la clé** dans `messages/fr.json`, `messages/en.json` et `messages/ar.json`.
2. **Dans un composant client React (`'use client'`)** :
   ```tsx
   "use client";

   import { useTranslation } from "@/lib/useTranslation";
   import Link from "next/link";

   export default function MonComposant() {
     const { t, lang, dir, pathname, localizeUrl } = useTranslation();

     return (
       <div dir={dir}>
         <h2>{t("services.transfers.title")}</h2>
         <Link href={localizeUrl("/reservation")}>
           {t("common.book")}
         </Link>
       </div>
     );
   }
   ```
   *Note : `useTranslation` fournit directement `t`, `lang`, `dir` (`"rtl"` ou `"ltr"`), `pathname`, et `localizeUrl` sans avoir à passer la langue manuellement.*

3. **Dans un Server Component (ex: pages avec metadata serveur)** :
   ```tsx
   import { getTranslation, localizeUrl, getDir, Locale } from "@/lib/i18n";

   export default async function PageServeur() {
     const locale: Locale = "fr"; // ou détecté via headers / params
     const t = getTranslation(locale);
     const dir = getDir(locale);

     return (
       <div dir={dir}>
         <h1>{t("thankYou.title")}</h1>
         <Link href={localizeUrl("/", locale)}>
           {t("thankYou.backHome")}
         </Link>
       </div>
     );
   }
   ```

### D. Gestion des URLs et liens internes
- Ne jamais coder d'URL multilingue avec des conditions manuelles ou ternaires.
- Dans les composants clients : toujours utiliser `localizeUrl(path)` (déjà contextualisé).
- Dans les composants serveurs : utiliser `localizeUrl(path, locale)`.
- Préserve automatiquement les ancres `#` (ex: `#cntct`) et query params `?`.

### E. Direction du texte (RTL / LTR)
- L'arabe (`ar`) utilise la direction de droite à gauche (`dir="rtl"`).
- Utiliser la variable `dir` retournée par `useTranslation()` sur le conteneur principal (`<div dir={dir}>`).

## 2. Préservation Absolue des Images
- **RÈGLE ABSOLUE** : Ne jamais modifier, remplacer, altérer ou supprimer les images existantes ni leurs chemins (`/images/...`).
