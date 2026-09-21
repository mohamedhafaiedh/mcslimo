import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
    template: "%s",
  },
  description: "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris",
  alternates: getAlternates(""),
  openGraph: {
    title: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
    description: "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris",
    url: `${SITE_URL}/`,
    siteName: "MCS Limo",
    locale: "fr_FR",
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
    title: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
    description: "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="home page-template-default page page-id-915 wp-custom-logo wp-embed-responsive ehf-header ehf-footer ehf-template-hello-elementor ehf-stylesheet-hello-elementor elementor-default elementor-kit-6 elementor-page elementor-page-915">
        <HreflangTags slug="" />
        {children}
      </body>
    </html>
  );
}
