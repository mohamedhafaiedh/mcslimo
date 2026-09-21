import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us - MCS Limo",
  description: "Discover MCS Limo, your premium private chauffeur company in Paris, offering tailor-made luxury transport with discretion and punctuality.",
  alternates: getAlternates('qui-sommes-nous', true),
  openGraph: {
    title: "About Us - MCS Limo",
    description: "Discover MCS Limo, your premium private chauffeur company in Paris, offering tailor-made luxury transport with discretion and punctuality.",
    url: `${SITE_URL}/en/qui-sommes-nous/`,
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
    title: "About Us - MCS Limo",
    description: "Discover MCS Limo, your premium private chauffeur company in Paris, offering tailor-made luxury transport with discretion and punctuality.",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HreflangTags slug="qui-sommes-nous" />
      {children}
    </>
  );
}
