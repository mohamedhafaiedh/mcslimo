import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flotte - MCS Limo",
  description: "Découvrez notre flotte de véhicules pour mieux choisir la voiture qui répond à vos besoins",
  alternates: {
    canonical: "/en/flotte",
  },
  openGraph: {
    title: "Flotte - MCS Limo",
    description: "Découvrez notre flotte de véhicules pour mieux choisir la voiture qui répond à vos besoins",
    url: "https://mcslimo.fr/en/flotte",
    siteName: "MCS Limo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Flotte - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flotte - MCS Limo",
    description: "Découvrez notre flotte de véhicules pour mieux choisir la voiture qui répond à vos besoins",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function EnFlotteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
