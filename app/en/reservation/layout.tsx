import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Online Quote & Booking - MCS Limo",
  description: "Enter your journey details to get an instant quote and book your private chauffeur in Paris with MCS Limo.",
  alternates: getAlternates('reservation', true),
  openGraph: {
    title: "Online Quote & Booking - MCS Limo",
    description: "Enter your journey details to get an instant quote and book your private chauffeur in Paris with MCS Limo.",
    url: `${SITE_URL}/en/reservation/`,
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
    title: "Online Quote & Booking - MCS Limo",
    description: "Enter your journey details to get an instant quote and book your private chauffeur in Paris with MCS Limo.",
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
