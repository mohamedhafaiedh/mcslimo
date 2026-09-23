"use client";

import React from "react";
import SlashesDivider from "./SlashesDivider";
import { useTranslation, Locale } from "@/lib/useTranslation";

interface WhyChooseUsSectionProps {
  lang?: string;
}

export default function WhyChooseUsSection({ lang }: WhyChooseUsSectionProps) {
  const { t } = useTranslation(lang as Locale | undefined);

  const features = [
    {
      img: "/images/agree.png",
      alt: "Chauffeur privé professionnel en costume à Paris",
      title: t("home.whyUs.feature1Title", "Chauffeurs professionnels"),
      description: t(
        "home.whyUs.feature1Desc",
        "Nos chauffeurs sont formés pour vous assurer une conduite en toute sécurité."
      ),
    },
    {
      img: "/images/service-clients.png",
      alt: "Service client disponible 24h/24 et 7j/7",
      title: t("home.whyUs.feature2Title", "Services et voitures haut de gamme"),
      description: t(
        "home.whyUs.feature2Desc",
        "Nous mettons à votre disposition des véhicules haut de gamme avec un service de qualité"
      ),
    },
    {
      img: "/images/calendrier.png",
      alt: "Réservation de chauffeur privé en ligne",
      title: t("home.whyUs.feature3Title", "Disponibilité 24/7"),
      description: t(
        "home.whyUs.feature3Desc",
        "Nous sommes disponibles à tout moment pour traiter vos demandes ou assurer vos besoins"
      ),
    },
    {
      img: "/images/time-check.png",
      alt: "Ponctualité garantie et suivi en temps réel des vols",
      title: t("home.whyUs.feature4Title", "Ponctualité"),
      description: t(
        "home.whyUs.feature4Desc",
        "Parce que votre temps est précieux, nous faisons en sorte que nos chauffeurs arrivent avant 15 minutes du début de chaque prestation"
      ),
    },
  ];

  return (
    <section
      className="elementor-element e-flex e-con-boxed e-con e-parent why-choose-us-section-wrapper"
      data-id="8be1ae7"
      data-element_type="container"
      data-e-type="container"
      id="qui-sommes-nous"
      style={{
        backgroundColor: "#f5f5f5",
        background: "#f5f5f5",
        paddingTop: "60px",
        paddingBottom: "60px",
        width: "100%",
        maxWidth: "100%",
        margin: "0",
        display: "block",
        boxSizing: "border-box",
      }}
    >
      <div
        className="e-con-inner"
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 15px",
          width: "100%",
          backgroundColor: "#f5f5f5",
          background: "#f5f5f5",
        }}
      >
        {/* Title Container - Centered */}
        <div
          className="elementor-element elementor-element-61aa1b3 elementor-widget elementor-widget-heading"
          data-id="61aa1b3"
          data-element_type="widget"
          data-widget_type="heading.default"
          style={{ textAlign: "center", width: "100%", marginBottom: "0px", backgroundColor: "#f5f5f5" }}
        >
          <div className="elementor-widget-container" style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
            <h2
              className="elementor-heading-title elementor-size-default"
              style={{
                textAlign: "center",
                color: "var(--e-global-color-primary, #000000)",
                fontSize: "32px",
                fontWeight: "600",
                fontFamily: "var(--e-global-typography-primary-font-family, 'Dosis', sans-serif)",
                margin: "0 0 8px 0",
                backgroundColor: "#f5f5f5",
              }}
            >
              {t("home.whyUs.title", "Pourquoi choisir MCS Limo ?")}
            </h2>
          </div>
        </div>

        {/* Golden Slashes Divider - Centered */}
        <SlashesDivider className="elementor-element-292d945" width="80px" color="%23C09E5B" align="center" />

        {/* Features Grid - 4 Columns */}
        <div className="why-choose-us-grid" style={{ marginTop: "30px", width: "100%", backgroundColor: "#f5f5f5" }}>
          {features.map((item, index) => (
            <div
              key={index}
              className="elementor-element e-con-full e-flex e-con e-child why-choose-us-card"
              data-element_type="container"
              data-e-type="container"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <div
                className="elementor-element elementor-position-top elementor-widget elementor-widget-image-box"
                data-element_type="widget"
                data-widget_type="image-box.default"
                style={{ width: "100%", backgroundColor: "#f5f5f5" }}
              >
                <div className="elementor-widget-container" style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                  <div
                    className="elementor-image-box-wrapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      width: "100%",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <figure
                      className="elementor-image-box-img"
                      style={{
                        margin: "0 auto 20px auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <img
                        decoding="async"
                        width="80"
                        height="80"
                        src={item.img}
                        className="attachment-full size-full wp-image-384"
                        alt={item.alt}
                        style={{
                          objectFit: "contain",
                          display: "block",
                          margin: "0 auto",
                          backgroundColor: "transparent",
                        }}
                      />
                    </figure>
                    <div
                      className="elementor-image-box-content"
                      style={{
                        textAlign: "center",
                        width: "100%",
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <h4
                        className="elementor-image-box-title"
                        style={{
                          textAlign: "center",
                          color: "var(--e-global-color-primary, #000000)",
                          fontSize: "18px",
                          fontWeight: "600",
                          fontFamily: "var(--e-global-typography-primary-font-family, 'Dosis', sans-serif)",
                          marginBottom: "12px",
                          lineHeight: "1.3",
                          backgroundColor: "#f5f5f5",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="elementor-image-box-description"
                        style={{
                          textAlign: "center",
                          color: "var(--e-global-color-text, #666666)",
                          fontSize: "14px",
                          lineHeight: "1.6",
                          fontFamily: "var(--e-global-typography-text-font-family, 'Open Sans', sans-serif)",
                          margin: "0",
                          backgroundColor: "#f5f5f5",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
