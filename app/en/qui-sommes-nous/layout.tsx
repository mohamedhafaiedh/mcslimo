import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Qui sommes-nous - MCS Limo",
  description: "Pour vous faire découvrir qui est MCS Limo",
  alternates: getAlternates('qui-sommes-nous', true),
  openGraph: {
    title: "Qui sommes-nous - MCS Limo",
    description: "Pour vous faire découvrir qui est MCS Limo",
    url: `${SITE_URL}/en/qui-sommes-nous/`,
    siteName: "MCS Limo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Qui sommes-nous - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qui sommes-nous - MCS Limo",
    description: "Pour vous faire découvrir qui est MCS Limo",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function EnQuiSommesNousLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
