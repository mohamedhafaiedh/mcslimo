import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - MCS Limo",
  description: "Le « cookie » est un fichier installé sur votre terminal, permettant de stocker des informations relatives à votre navigation sur notre site internet et nos",
  alternates: {
    canonical: "/en/politique-de-confidentialite",
  },
  openGraph: {
    title: "Politique de confidentialité - MCS Limo",
    description: "Le « cookie » est un fichier installé sur votre terminal, permettant de stocker des informations relatives à votre navigation sur notre site internet et nos",
    url: "https://mcslimo.fr/en/politique-de-confidentialite",
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
  return <>{children}</>;
}
