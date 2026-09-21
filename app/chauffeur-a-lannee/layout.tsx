import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Chauffeur à l'année - MCS Limo",
  description: "Votre chauffeur au quotidien pour un maximum de flexibilité",
  alternates: getAlternates('chauffeur-a-lannee'),
  openGraph: {
    title: "Chauffeur à l'année - MCS Limo",
    description: "Votre chauffeur au quotidien pour un maximum de flexibilité",
    url: `${SITE_URL}/chauffeur-a-lannee/`,
    siteName: "MCS Limo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Chauffeur à l'année - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffeur à l'année - MCS Limo",
    description: "Votre chauffeur au quotidien pour un maximum de flexibilité",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function ChauffeurALanneeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HreflangTags slug="chauffeur-a-lannee" />
      {children}
    </>
  );
}
