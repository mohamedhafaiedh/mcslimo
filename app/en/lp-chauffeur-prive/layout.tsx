import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "High-end Private Chauffeur in Paris - MCS Limo",
  description: "We provide luxury vehicles with professional chauffeurs in Paris for airport transfers, business travel, and VIP hospitality.",
  alternates: getAlternates('lp-chauffeur-prive', true),
  openGraph: {
    title: "High-end Private Chauffeur in Paris - MCS Limo",
    description: "We provide luxury vehicles with professional chauffeurs in Paris for airport transfers, business travel, and VIP hospitality.",
    url: `${SITE_URL}/en/lp-chauffeur-prive/`,
    siteName: "MCS Limo",
    locale: "en_US",
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
  twitter: {
    card: "summary_large_image",
    title: "High-end Private Chauffeur in Paris - MCS Limo",
    description: "We provide luxury vehicles with professional chauffeurs in Paris for airport transfers, business travel, and VIP hospitality.",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
