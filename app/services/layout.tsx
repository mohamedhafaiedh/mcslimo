import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Services - MCS Limo",
  description: "Découvrez tous les services que vous offre MCS Limo",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Nos Services - MCS Limo",
    description: "Découvrez tous les services que vous offre MCS Limo",
    url: "https://mcslimo.fr/services",
    siteName: "MCS Limo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Nos Services - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services - MCS Limo",
    description: "Découvrez tous les services que vous offre MCS Limo",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
