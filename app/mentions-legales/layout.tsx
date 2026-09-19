import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - MCS Limo",
  description: "Dénomination : MCars ServicesForme juridique : SARLCapital social : 1.000 €Numéro de SIRET : 85250694800011Numéro de TVA : FR38852506948Siège social : 10",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales - MCS Limo",
    description: "Dénomination : MCars ServicesForme juridique : SARLCapital social : 1.000 €Numéro de SIRET : 85250694800011Numéro de TVA : FR38852506948Siège social : 10",
    url: "https://mcslimo.fr/mentions-legales",
    siteName: "MCS Limo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Mentions légales - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions légales - MCS Limo",
    description: "Dénomination : MCars ServicesForme juridique : SARLCapital social : 1.000 €Numéro de SIRET : 85250694800011Numéro de TVA : FR38852506948Siège social : 10",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
