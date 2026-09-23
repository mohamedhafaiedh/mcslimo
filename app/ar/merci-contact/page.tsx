import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { headers } from "next/headers";
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";
import { getTranslation, localizeUrl, getDir, Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Demande de contact envoyée - MCS Limo",
  description: "Merci de nous avoir contactés. L'équipe MCS Limo reviendra vers vous très rapidement.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function MerciContactPage() {
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

      <MainHeader lang={locale} currentPath={localizeUrl("/merci-contact", locale)} />

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
            {t("thankYou.contactTitle", "Merci pour votre message !")}
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
            {t("thankYou.contactDesc", "Votre message a bien été transmis à notre équipe. Nous allons revenir vers vous très rapidement.")}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              href={localizeUrl("/", locale)}
              className="elementor-button elementor-size-md"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              <span className="elementor-button-text">
                {t("thankYou.backHome", "Retour à l'accueil")}
              </span>
            </Link>
          </div>
        </div>
      </main>

      <MainFooter lang={locale} />
    </div>
  );
}
