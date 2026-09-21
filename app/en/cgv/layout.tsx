import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms and Conditions of Sale - MCS Limo",
  description: "General terms and conditions of sale and private chauffeur transportation services of MCars Services / MCS Limo.",
  alternates: getAlternates('cgv', true),
  openGraph: {
    title: "Terms and Conditions of Sale - MCS Limo",
    description: "General terms and conditions of sale and private chauffeur transportation services of MCars Services / MCS Limo.",
    url: `${SITE_URL}/en/cgv/`,
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
    title: "Terms and Conditions of Sale - MCS Limo",
    description: "General terms and conditions of sale and private chauffeur transportation services of MCars Services / MCS Limo.",
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
