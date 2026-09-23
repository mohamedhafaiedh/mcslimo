import React from "react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import LandingHeader from "@/app/components/LandingHeader";
import MainFooter from "@/app/components/MainFooter";
import BackButton from "@/app/components/BackButton";
import { getTranslation, localizeUrl, getDir, Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Réservation confirmée - MCS Limo",
  description: "Merci pour votre réservation via notre service exclusif de chauffeur privé MCS Limo.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function MerciLpReservationPage() {
  const headersList = await headers();
  const rawLocale = headersList.get("x-locale");
  const locale: Locale = (["ar", "en", "es", "it"].includes(rawLocale || "") ? rawLocale : "fr") as Locale;
  const dir = getDir(locale);
  const t = getTranslation(locale);

  return (
    <div id="page" className="site" dir={dir}>
      <a className="skip-link screen-reader-text" href="#content">
        {t("common.skipToContent", "Aller au contenu")}
      </a>

      <LandingHeader lang={locale} currentPath={localizeUrl("/merci-lp-reservation", locale)} />

      <main
        id="content"
        className="site-main"
        style={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "70px 20px",
          background: "#f9f9f9",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            width: "100%",
            textAlign: "center",
            background: "#ffffff",
            padding: "50px 32px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #ebebeb",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              margin: "0 auto 24px",
              background: "#e8f7ee",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1bb35a",
            }}
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h1
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "16px",
              color: "#111111",
              lineHeight: 1.3,
            }}
          >
            {t("thankYou.reservationTitle", "Merci pour votre demande de devis !")}
          </h1>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.65",
              color: "#555555",
              marginBottom: "32px",
              maxWidth: "540px",
              margin: "0 auto 32px",
            }}
          >
            {t("thankYou.reservationDesc", "Merci d'avoir soumis votre demande de devis. Notre équipe va étudier les détails de votre trajet et vous envoyer une proposition personnalisée dans les plus brefs délais.")}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <BackButton
              label={t("thankYou.backHome", "Retour à l'accueil")}
              fallbackUrl={localizeUrl("/lp-chauffeur-prive", locale)}
            />
          </div>
        </div>
      </main>

      <MainFooter lang={locale} />
    </div>
  );
}
