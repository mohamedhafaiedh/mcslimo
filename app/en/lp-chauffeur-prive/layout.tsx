import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
  description: "Nous mettons à votre disposition des voitures de luxe avec chauffeur pour répondre à vos besoins",
  alternates: getAlternates('lp-chauffeur-prive', true),
  openGraph: {
    title: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
    description: "Nous mettons à votre disposition des voitures de luxe avec chauffeur pour répondre à vos besoins",
    url: `${SITE_URL}/en/lp-chauffeur-prive/`,
    siteName: "MCS Limo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
    description: "Nous mettons à votre disposition des voitures de luxe avec chauffeur pour répondre à vos besoins",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function EnLpChauffeurPriveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HreflangTags slug="lp-chauffeur-prive" />
      {children}
    </>
  );
}
