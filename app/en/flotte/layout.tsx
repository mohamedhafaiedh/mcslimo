import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Fleet - Luxury Vehicles in Paris - MCS Limo",
  description: "Explore our prestigious fleet of vehicles (Mercedes E-Class, V-Class, S-Class) for your private chauffeur service in Paris.",
  alternates: getAlternates('flotte', true),
  openGraph: {
    title: "Our Fleet - Luxury Vehicles in Paris - MCS Limo",
    description: "Explore our prestigious fleet of vehicles (Mercedes E-Class, V-Class, S-Class) for your private chauffeur service in Paris.",
    url: `${SITE_URL}/en/flotte/`,
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
    title: "Our Fleet - Luxury Vehicles in Paris - MCS Limo",
    description: "Explore our prestigious fleet of vehicles (Mercedes E-Class, V-Class, S-Class) for your private chauffeur service in Paris.",
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
