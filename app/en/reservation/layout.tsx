import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Devis et réservation en ligne - MCS Limo",
  description: "Renseignez vos informations pour obtenir le prix de votre prestation avant de procéder à la confirmation",
  alternates: getAlternates('reservation', true),
  openGraph: {
    title: "Devis et réservation en ligne - MCS Limo",
    description: "Renseignez vos informations pour obtenir le prix de votre prestation avant de procéder à la confirmation",
    url: `${SITE_URL}/en/reservation/`,
    siteName: "MCS Limo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Devis et réservation en ligne - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devis et réservation en ligne - MCS Limo",
    description: "Renseignez vos informations pour obtenir le prix de votre prestation avant de procéder à la confirmation",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function EnReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HreflangTags slug="reservation" />
      {children}
    </>
  );
}
