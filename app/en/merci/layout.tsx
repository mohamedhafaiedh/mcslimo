import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";
import HreflangTags from "@/app/components/HreflangTags";

export const metadata: Metadata = {
  title: "Thank you for your request - MCS Limo",
  description: "We have received your request and will get back to you as soon as possible.",
  alternates: getAlternates('merci', true),
  openGraph: {
    title: "Thank you for your request - MCS Limo",
    description: "We have received your request and will get back to you as soon as possible.",
    url: `${SITE_URL}/en/merci/`,
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
};

export default function EnMerciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HreflangTags slug="merci" />
      {children}
    </>
  );
}
