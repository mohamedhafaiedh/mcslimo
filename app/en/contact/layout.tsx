import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us - MCS Limo",
  description: "Get in touch with our team for your private chauffeur bookings in Paris. 24/7 customer service and assistance.",
  alternates: getAlternates('contact', true),
  openGraph: {
    title: "Contact Us - MCS Limo",
    description: "Get in touch with our team for your private chauffeur bookings in Paris. 24/7 customer service and assistance.",
    url: `${SITE_URL}/en/contact/`,
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
    title: "Contact Us - MCS Limo",
    description: "Get in touch with our team for your private chauffeur bookings in Paris. 24/7 customer service and assistance.",
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
