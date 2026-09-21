import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "High-end Private Chauffeur in Paris - MCS Limo",
  description: "For all your journeys in Paris from or to Parisian train stations or airports, or long distance trips from/to Paris",
  alternates: getAlternates("", true),
  openGraph: {
    title: "High-end Private Chauffeur in Paris - MCS Limo",
    description: "For all your journeys in Paris from or to Parisian train stations or airports, or long distance trips from/to Paris",
    url: `${SITE_URL}/en/`,
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
    description: "For all your journeys in Paris from or to Parisian train stations or airports, or long distance trips from/to Paris",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function EnHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HreflangTags slug="" />
      {children}
    </>
  );
}
