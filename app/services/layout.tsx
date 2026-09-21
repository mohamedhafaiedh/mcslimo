import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Nos Services - MCS Limo",
  description: "Découvrez tous les services que vous offre MCS Limo",
  alternates: getAlternates('services'),
  openGraph: {
    title: "Nos Services - MCS Limo",
    description: "Découvrez tous les services que vous offre MCS Limo",
    url: `${SITE_URL}/services/`,
    siteName: "MCS Limo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Nos Services - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services - MCS Limo",
    description: "Découvrez tous les services que vous offre MCS Limo",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="alternate" {...{ hreflang: "fr-FR" }} href={`${SITE_URL}/services/`} />
      <link rel="alternate" {...{ hreflang: "en-US" }} href={`${SITE_URL}/en/services/`} />
      <link rel="alternate" {...{ hreflang: "x-default" }} href={`${SITE_URL}/services/`} />
      {children}
    </>
  );
}
