import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chauffeur à l'année - MCS Limo",
  description: "Votre chauffeur au quotidien pour un maximum de flexibilité",
  alternates: {
    canonical: "/en/chauffeur-a-lannee",
  },
  openGraph: {
    title: "Chauffeur à l'année - MCS Limo",
    description: "Votre chauffeur au quotidien pour un maximum de flexibilité",
    url: "https://mcslimo.fr/en/chauffeur-a-lannee",
    siteName: "MCS Limo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Chauffeur à l'année - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffeur à l'année - MCS Limo",
    description: "Votre chauffeur au quotidien pour un maximum de flexibilité",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function EnChauffeurALanneeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
