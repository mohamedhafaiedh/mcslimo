import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Services - MCS Limo",
  description: "Discover all luxury chauffeur and high-end transportation services offered by MCS Limo in Paris and worldwide.",
  alternates: getAlternates('services', true),
  openGraph: {
    title: "Our Services - MCS Limo",
    description: "Discover all luxury chauffeur and high-end transportation services offered by MCS Limo in Paris and worldwide.",
    url: `${SITE_URL}/en/services/`,
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
    title: "Our Services - MCS Limo",
    description: "Discover all luxury chauffeur and high-end transportation services offered by MCS Limo in Paris and worldwide.",
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
