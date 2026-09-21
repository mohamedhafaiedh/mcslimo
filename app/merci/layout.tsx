import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";
import HreflangTags from "@/app/components/HreflangTags";

export const metadata: Metadata = {
  title: "Merci pour votre demande - MCS Limo",
  description: "Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.",
  alternates: getAlternates('merci'),
  openGraph: {
    title: "Merci pour votre demande - MCS Limo",
    description: "Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.",
    url: `${SITE_URL}/merci/`,
    siteName: "MCS Limo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "MCS Limo",
      },
    ],
  },
};

export default function MerciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HreflangTags slug="merci" />
      {children}
    </>
  );
}
