import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { headers } from "next/headers";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

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
  const locale: "fr" | "en" | "ar" = rawLocale === "ar" ? "ar" : rawLocale === "en" ? "en" : "fr";
  const isAr = locale === "ar";
  const isEn = locale === "en";

  return (
    <div id="page" className="site" dir={isAr ? "rtl" : "ltr"}>
      <a className="skip-link screen-reader-text" href="#content">
        {isAr ? "الانتقال إلى المحتوى" : isEn ? "Skip to content" : "Aller au contenu"}
      </a>

      <MainHeader lang={locale} currentPath={isAr ? "/ar/merci-contact" : isEn ? "/en/merci-contact" : "/merci-contact"} />

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
            {isAr ? "شكراً لتواصلك معنا!" : isEn ? "Thank you for reaching out!" : "Merci pour votre message !"}
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
            {isAr
              ? "تم إرسال رسالتك بنجاح إلى فريقنا. سنتواصل معك في أقرب وقت ممكن."
              : isEn
              ? "Your message has been successfully sent. Our team will get back to you shortly."
              : "Votre message a bien été transmis à notre équipe. Nous allons revenir vers vous très rapidement."}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              href={isAr ? "/ar" : isEn ? "/en" : "/"}
              className="elementor-button elementor-size-md"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              <span className="elementor-button-text">
                {isAr ? "العودة إلى الصفحة الرئيسية" : isEn ? "Back to Homepage" : "Retour à l'accueil"}
              </span>
            </Link>
          </div>
        </div>
      </main>

      <MainFooter lang={locale} />
    </div>
  );
}

