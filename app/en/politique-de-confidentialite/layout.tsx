import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Politique de confidentialité - MCS Limo",
  description: "Le « cookie » est un fichier installé sur votre terminal, permettant de stocker des informations relatives à votre navigation sur notre site internet et nos",
  alternates: getAlternates('politique-de-confidentialite', true),
  openGraph: {
    title: "Politique de confidentialité - MCS Limo",
    description: "Le « cookie » est un fichier installé sur votre terminal, permettant de stocker des informations relatives à votre navigation sur notre site internet et nos",
    url: `${SITE_URL}/en/politique-de-confidentialite/`,
    siteName: "MCS Limo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Politique de confidentialité - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de confidentialité - MCS Limo",
    description: "Le « cookie » est un fichier installé sur votre terminal, permettant de stocker des informations relatives à votre navigation sur notre site internet et nos",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function EnPolitiqueDeConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HreflangTags slug="politique-de-confidentialite" />
      {children}
    </>
  );
}
