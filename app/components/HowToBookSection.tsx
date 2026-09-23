"use client";

import React from "react";
import SlashesDivider from "./SlashesDivider";
import { useTranslation, Locale } from "@/lib/useTranslation";

interface HowToBookSectionProps {
  lang?: string;
}

export default function HowToBookSection({ lang }: HowToBookSectionProps) {
  const { t } = useTranslation(lang as Locale | undefined);

  const steps = [
    {
      num: "1",
      img: "/images/communiquer.png",
      alt: "1. Contactez votre agence de chauffeur privé",
      title: t("home.howToBook.step1Title", "1. Contact"),
      description: t(
        "home.howToBook.step1Desc",
        "E-mail, téléphone, formulaire de contact ou formulaire de réservation en ligne"
      ),
    },
    {
      num: "2",
      img: "/images/check.png",
      alt: "2. Réservation et devis sur-mesure",
      title: t("home.howToBook.step2Title", "2. Réservation"),
      description: t(
        "home.howToBook.step2Desc",
        "Décrivez-nous votre besoin détaillé et nous vous conseillerons la meilleure prestation qui s'adapte le mieux à votre situation"
      ),
    },
    {
      num: "3",
      img: "/images/mobile-phone.png",
      alt: "3. Votre chauffeur est présent 15 minutes avant le trajet",
      title: t("home.howToBook.step3Title", "3. Notre chauffeur sera là 15mn avant la prestation"),
      description: t(
        "home.howToBook.step3Desc",
        "Notre chauffeur sera présent 15 minutes avant le début de votre prestation avec le véhicule prêt."
      ),
    },
  ];

  return (
    <section
      className="how-to-book-section"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "60px",
        paddingBottom: "60px",
        width: "100%",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 20px", boxSizing: "border-box" }}>
        {/* Title */}
        <div
          className="elementor-element elementor-element-37c3103 elementor-widget elementor-widget-heading"
          style={{ textAlign: "center", width: "100%", marginBottom: "10px" }}
        >
          <div className="elementor-widget-container" style={{ textAlign: "center" }}>
            <h2
              className="elementor-heading-title elementor-size-default"
              style={{
                textAlign: "center",
                color: "var(--e-global-color-primary, #000000)",
                fontSize: "32px",
                fontWeight: "600",
                fontFamily: "var(--e-global-typography-primary-font-family, 'Dosis', sans-serif)",
                margin: "0 0 10px 0",
              }}
            >
              {t("home.howToBook.title", "Comment réserver mon chauffeur ?")}
            </h2>
          </div>
        </div>

        {/* Golden Slashes Divider */}
        <SlashesDivider className="elementor-element-e2b86ea" width="80px" color="%23C09E5B" align="center" />

        {/* 3 Rows / Lines (Affichage en 3 lignes) */}
        <div
          className="how-to-book-lines"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "960px",
            margin: "40px auto 0 auto",
            width: "100%",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="how-to-book-line-item"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fbfbfb",
                border: "1px solid #eeeeee",
                borderRadius: "8px",
                padding: "24px 30px",
                gap: "24px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                boxSizing: "border-box",
              }}
            >
              {/* Icon Container */}
              <div
                className="how-to-book-icon-wrapper"
                style={{
                  width: "64px",
                  height: "64px",
                  minWidth: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  padding: "10px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  decoding="async"
                  width="48"
                  height="48"
                  src={step.img}
                  alt={step.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

              {/* Text content */}
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <h3
                  style={{
                    color: "var(--e-global-color-primary, #000000)",
                    fontSize: "19px",
                    fontWeight: "700",
                    fontFamily: "var(--e-global-typography-primary-font-family, 'Dosis', sans-serif)",
                    margin: "0 0 6px 0",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "var(--e-global-color-text, #666666)",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    fontFamily: "var(--e-global-typography-text-font-family, 'Open Sans', sans-serif)",
                    margin: "0",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
