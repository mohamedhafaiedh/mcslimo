import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Year-Round Private Chauffeur Service - MCS Limo",
  description: "Dedicated daily private chauffeur in Paris for executives and individuals seeking complete flexibility and peace of mind.",
  alternates: getAlternates('chauffeur-a-lannee', true),
  openGraph: {
    title: "Year-Round Private Chauffeur Service - MCS Limo",
    description: "Dedicated daily private chauffeur in Paris for executives and individuals seeking complete flexibility and peace of mind.",
    url: `${SITE_URL}/en/chauffeur-a-lannee/`,
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
    title: "Year-Round Private Chauffeur Service - MCS Limo",
    description: "Dedicated daily private chauffeur in Paris for executives and individuals seeking complete flexibility and peace of mind.",
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
