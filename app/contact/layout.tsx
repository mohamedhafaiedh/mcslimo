import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous contacter - MCS Limo",
  description: "Notre équipe sera heureuse de pouvoir vous aider. Renseignez le formulaire et nous reviendrons vers vous dès que possible",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Nous contacter - MCS Limo",
    description: "Notre équipe sera heureuse de pouvoir vous aider. Renseignez le formulaire et nous reviendrons vers vous dès que possible",
    url: "https://mcslimo.fr/contact",
    siteName: "MCS Limo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Nous contacter - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nous contacter - MCS Limo",
    description: "Notre équipe sera heureuse de pouvoir vous aider. Renseignez le formulaire et nous reviendrons vers vous dès que possible",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
