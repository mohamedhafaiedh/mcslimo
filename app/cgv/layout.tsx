import HreflangTags from "@/app/components/HreflangTags";
import type { Metadata } from "next";
import { SITE_URL, getAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Conditions générales de vente - MCS Limo",
  description: "Les présentes conditions générales de vente sont conclues entre la société Mcars Services, immatriculée au RCS de Paris sous le numéro 852 506 948,",
  alternates: getAlternates('cgv'),
  openGraph: {
    title: "Conditions générales de vente - MCS Limo",
    description: "Les présentes conditions générales de vente sont conclues entre la société Mcars Services, immatriculée au RCS de Paris sous le numéro 852 506 948,",
    url: `${SITE_URL}/cgv/`,
    siteName: "MCS Limo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "Conditions générales de vente - MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions générales de vente - MCS Limo",
    description: "Les présentes conditions générales de vente sont conclues entre la société Mcars Services, immatriculée au RCS de Paris sous le numéro 852 506 948,",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
};

export default function CgvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HreflangTags slug="cgv" />
      {children}
    </>
  );
}
