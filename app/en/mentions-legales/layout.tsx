import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Legal Notice - MCS Limo",
  description: "Legal information, corporate identity, and website publishing details for MCS Limo (MCars Services SARL).",
  alternates: getAlternates('mentions-legales', true),
  openGraph: {
    title: "Legal Notice - MCS Limo",
    description: "Legal information, corporate identity, and website publishing details for MCS Limo (MCars Services SARL).",
    url: `${SITE_URL}/en/mentions-legales/`,
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
    title: "Legal Notice - MCS Limo",
    description: "Legal information, corporate identity, and website publishing details for MCS Limo (MCars Services SARL).",
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
      <HreflangTags slug="mentions-legales" />
      {children}
    </>
  );
}
