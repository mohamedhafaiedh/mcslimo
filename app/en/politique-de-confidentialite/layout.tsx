import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy - MCS Limo",
  description: "Privacy policy, personal data protection, and cookie usage guidelines for MCS Limo website.",
  alternates: getAlternates('politique-de-confidentialite', true),
  openGraph: {
    title: "Privacy Policy - MCS Limo",
    description: "Privacy policy, personal data protection, and cookie usage guidelines for MCS Limo website.",
    url: `${SITE_URL}/en/politique-de-confidentialite/`,
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
    title: "Privacy Policy - MCS Limo",
    description: "Privacy policy, personal data protection, and cookie usage guidelines for MCS Limo website.",
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
