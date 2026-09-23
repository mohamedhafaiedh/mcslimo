"use client";

import React from "react";
import Link from "next/link";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import VehicleCards from "./components/VehicleCards";
import TestimonialsSection from "./components/TestimonialsSection";
import HowToBookSection from "./components/HowToBookSection";
import SlashesDivider from "./components/SlashesDivider";
import { useTranslation } from "@/lib/useTranslation";

export default function HomePage() {
  const { t, lang, dir, pathname, localizeUrl } = useTranslation();

  return (
    <div id="page" className="site" dir={dir}>
      <a className="skip-link screen-reader-text" href="#content">
        {t("common.skipToContent", "Aller au contenu")}
      </a>

      <MainHeader lang={lang} currentPath={pathname} />

      <main id="content" className="site-main">
        <div
          data-elementor-type="wp-post"
          data-elementor-id="915"
          className="elementor elementor-915"
          data-elementor-post-type="page"
        >
          {/* HERO SECTION */}
          <div
            className="elementor-element elementor-element-b9138e8 e-flex e-con-boxed e-con e-parent"
            data-id="b9138e8"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-c0fb283 e-con-full e-flex e-con e-child"
                data-id="c0fb283"
                data-element_type="container"
                data-e-type="container"
              >
                <div
                  className="elementor-element elementor-element-ffa4b96 elementor-widget elementor-widget-heading"
                  data-id="ffa4b96"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h1 className="elementor-heading-title elementor-size-default">
                      {t("home.hero.title", "Chauffeurs privés à Paris pour une clientèle exigeante")}
                    </h1>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-266ea7a elementor-widget elementor-widget-text-editor"
                  data-id="266ea7a"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    {t("home.hero.subtitle", "Nous mettons à votre disposition des voitures de luxe avec chauffeur pour répondre à vos besoins")}
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-40029bd elementor-widget elementor-widget-button"
                  data-id="40029bd"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <Link
                        className="elementor-button elementor-button-link elementor-size-md"
                        href={localizeUrl("/reservation")}
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            {t("home.hero.cta", "Obtenir un devis et réserver")}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-4ccdb49 e-con-full e-flex e-con e-child"
                data-id="4ccdb49"
                data-element_type="container"
                data-e-type="container"
              ></div>
            </div>
          </div>

          {/* CLIENT TRUST STRIP */}
          <div
            className="elementor-element elementor-element-b55f6ee e-flex e-con-boxed e-con e-parent"
            data-id="b55f6ee"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-940308a e-flex e-con-boxed e-con e-child"
                data-id="940308a"
                data-element_type="container"
                data-e-type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-0b33589 elementor-widget elementor-widget-heading"
                    data-id="0b33589"
                    data-element_type="widget"
                    data-e-type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h4 className="elementor-heading-title elementor-size-default">
                        {t("home.trust.title", "Des dizaines de professionnels et particuliers nous font confiance chaque jour...")}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PARTNER LOGOS */}
          <div
            className="elementor-element elementor-element-64388fb e-flex e-con-boxed e-con e-parent"
            data-id="64388fb"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-cdea823 e-con-full e-flex e-con e-child" data-id="cdea823" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-2edfe16 elementor-widget elementor-widget-image" data-id="2edfe16" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img loading="lazy" decoding="async" width="500" height="111" src="/images/uniformation.png" className="attachment-large size-large wp-image-321" alt="Partenaire Uniformation - MCS Limo" sizes="(max-width: 500px) 100vw, 500px" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-a405af5 e-con-full e-flex e-con e-child" data-id="a405af5" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-a42efd7 elementor-widget elementor-widget-image" data-id="a42efd7" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img loading="lazy" decoding="async" width="800" height="124" src="/images/2560px-Prada-Logo.svg-1024x159-1.webp" className="attachment-large size-large wp-image-197" alt="Client de prestige Prada - MCS Limo" sizes="(max-width: 800px) 100vw, 800px" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-55a2cba e-con-full e-flex e-con e-child" data-id="55a2cba" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-b1cdc49 elementor-widget elementor-widget-image" data-id="b1cdc49" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img loading="lazy" decoding="async" width="800" height="219" src="/images/1200px-Vaisala_logo.svg.png" className="attachment-large size-large wp-image-196" alt="Client entreprise Vaisala - MCS Limo" sizes="(max-width: 800px) 100vw, 800px" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-c09c0da e-con-full e-flex e-con e-child" data-id="c09c0da" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-abab67b elementor-widget elementor-widget-image" data-id="abab67b" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img loading="lazy" decoding="async" width="800" height="134" src="/images/ETSGlobal_logo.a83452a9.png" className="attachment-large size-large wp-image-199" alt="Client entreprise ETS Global - MCS Limo" sizes="(max-width: 800px) 100vw, 800px" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-247deb8 e-con-full e-flex e-con e-child" data-id="247deb8" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-89bd1dc elementor-widget elementor-widget-image" data-id="89bd1dc" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img loading="lazy" decoding="async" width="209" height="64" src="/images/cq5dam.web_.1280.1280.webp" className="attachment-large size-large wp-image-198" alt="Partenaire entreprise de prestige - MCS Limo" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES SECTION */}
          <section style={{ backgroundColor: "#ffffff", padding: "60px 0" }}>
            <div
              className="elementor-element elementor-element-250e189 e-flex e-con-boxed e-con e-parent"
              data-id="250e189"
              data-element_type="container"
              data-e-type="container"
              data-settings='{"background_background":"classic"}'
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="e-con-inner" style={{ textAlign: "center", width: "100%", backgroundColor: "#ffffff" }}>
                <div
                  className="elementor-element elementor-element-74971c6 elementor-widget elementor-widget-heading"
                  data-id="74971c6"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="heading.default"
                  style={{ textAlign: "center", width: "100%", backgroundColor: "#ffffff" }}
                >
                  <div className="elementor-widget-container" style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
                    <h2 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
                      {t("home.services.title", "Nos Services")}
                    </h2>
                  </div>
                </div>

                <SlashesDivider className="elementor-element-292d945" align="center" width="80px" color="%23C09E5B" />

                <div
                  className="elementor-element elementor-element-8720de5 elementor-widget elementor-widget-text-editor"
                  data-id="8720de5"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="text-editor.default"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    {t("home.services.subtitle", "Nous vous offrons des services sur-mesure qui s’adaptent à vos besoins")}
                  </div>
                </div>
              </div>
            </div>

            {/* 3 SERVICES CARDS */}
            <div
              className="elementor-element elementor-element-34308d5 e-flex e-con-boxed e-con e-parent"
              data-id="34308d5"
              data-element_type="container"
              data-e-type="container"
              style={{ backgroundColor: "#ffffff", width: "100%" }}
            >
              <div className="e-con-inner" style={{ backgroundColor: "#ffffff" }}>
                {/* Transferts */}
                <div
                  className="elementor-element elementor-element-2aaa3e1 e-con-full e-flex e-con e-child"
                  data-id="2aaa3e1"
                  data-element_type="container"
                  data-e-type="container"
                  id="transferts"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="elementor-element elementor-element-7d637c0 elementor-widget elementor-widget-image" data-id="7d637c0" data-element_type="widget" data-e-type="widget" data-widget_type="image.default" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                      <img decoding="async" width="450" height="300" src="/images/MCS-Services-5.jpg" className="attachment-large size-large wp-image-2454" alt="Transfert aéroport et gare avec chauffeur privé à Paris" sizes="(max-width: 450px) 100vw, 450px" />
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-044593b elementor-widget elementor-widget-heading" data-id="044593b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                      <h3 className="elementor-heading-title elementor-size-default" style={{ backgroundColor: "#ffffff" }}>
                        {t("home.services.transfersTitle", "Transferts")}
                      </h3>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ddb7642 elementor-widget elementor-widget-text-editor" data-id="ddb7642" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                      <p style={{ backgroundColor: "#ffffff" }}>
                        {t("home.services.transfersDesc", "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mises a disposition / Hourly car rental */}
                <div
                  className="elementor-element elementor-element-0b98ee2 e-con-full e-flex e-con e-child"
                  data-id="0b98ee2"
                  data-element_type="container"
                  data-e-type="container"
                  id="mad"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="elementor-element elementor-element-4a2026d elementor-widget elementor-widget-image" data-id="4a2026d" data-element_type="widget" data-e-type="widget" data-widget_type="image.default" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                      <img decoding="async" width="450" height="300" src="/images/MCS-Services-4.jpg" className="attachment-large size-large wp-image-2453" alt="Mise à disposition de véhicule avec chauffeur à Paris" sizes="(max-width: 450px) 100vw, 450px" />
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-035a507 elementor-widget elementor-widget-heading" data-id="035a507" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                      <h3 className="elementor-heading-title elementor-size-default" style={{ backgroundColor: "#ffffff" }}>
                        {t("home.services.madTitle", "Mises à disposition")}
                      </h3>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-fd9663b elementor-widget elementor-widget-text-editor" data-id="fd9663b" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                      {t("home.services.madDesc", "Réservez votre chauffeur pour la durée qui vous convient et notre véhicule restera mobilisé pour vous conduire vers vos destinations")}
                    </div>
                  </div>
                </div>

                {/* VIP Greeter */}
                <div
                  className="elementor-element elementor-element-a4cf959 e-con-full e-flex e-con e-child"
                  data-id="a4cf959"
                  data-element_type="container"
                  data-e-type="container"
                  id="vip"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="elementor-element elementor-element-468d8d6 elementor-widget elementor-widget-image" data-id="468d8d6" data-element_type="widget" data-e-type="widget" data-widget_type="image.default" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                      <img decoding="async" width="450" height="300" src="/images/MCS-Services-8.jpg" className="attachment-large size-large wp-image-2457" alt="Accueil VIP et service greeter personnalisé à Paris" sizes="(max-width: 450px) 100vw, 450px" />
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-a926567 elementor-widget elementor-widget-heading" data-id="a926567" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                      <h3 className="elementor-heading-title elementor-size-default" style={{ backgroundColor: "#ffffff" }}>
                        {t("home.services.vipTitle", "Accueil VIP")}
                      </h3>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-7292a37 elementor-widget elementor-widget-text-editor" data-id="7292a37" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                      {t("home.services.vipDesc", "Pour vous accompagner le long de votre trajet entre la porte de l’avion et celle de votre véhicule et vous accorder un passage prioritaire")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DISCOVER SERVICES BUTTON */}
            <div
              className="elementor-element elementor-element-9666335 e-flex e-con-boxed e-con e-parent"
              data-id="9666335"
              data-element_type="container"
              data-e-type="container"
              style={{ backgroundColor: "#ffffff", width: "100%" }}
            >
              <div className="e-con-inner" style={{ backgroundColor: "#ffffff" }}>
                <div
                  className="elementor-element elementor-element-ac7b56c elementor-align-center elementor-widget elementor-widget-button"
                  data-id="ac7b56c"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="button.default"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-button-wrapper" style={{ backgroundColor: "#ffffff" }}>
                      <Link
                        className="elementor-button elementor-button-link elementor-size-md"
                        href={localizeUrl("/services")}
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            {t("home.services.cta", "Découvrir nos services")}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <WhyChooseUsSection lang={lang} />

          {/* FLEET SECTION */}
          <section style={{ backgroundColor: "#ffffff", padding: "60px 0" }}>
            <div
              className="elementor-element elementor-element-a0c5c36 e-flex e-con-boxed e-con e-parent"
              data-id="a0c5c36"
              data-element_type="container"
              data-e-type="container"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div className="e-con-inner" style={{ textAlign: "center", width: "100%", backgroundColor: "#ffffff" }}>
                <div
                  className="elementor-element elementor-element-42adbb2 elementor-widget elementor-widget-heading"
                  data-id="42adbb2"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="heading.default"
                  style={{ textAlign: "center", width: "100%", backgroundColor: "#ffffff" }}
                >
                  <div className="elementor-widget-container" style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
                    <h2
                      className="elementor-heading-title elementor-size-default"
                      style={{
                        textAlign: "center",
                        color: "var(--e-global-color-primary, #000000)",
                        fontSize: "32px",
                        fontWeight: "600",
                        fontFamily: "var(--e-global-typography-primary-font-family, 'Dosis', sans-serif)",
                        margin: "0 0 8px 0",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      {t("home.fleet.title", "Nos Véhicules")}
                    </h2>
                  </div>
                </div>
                <SlashesDivider align="center" width="80px" color="%23C09E5B" />
                <div
                  className="elementor-element elementor-element-d74bea7 elementor-widget elementor-widget-text-editor"
                  data-id="d74bea7"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="text-editor.default"
                  style={{ textAlign: "center", width: "100%", backgroundColor: "#ffffff" }}
                >
                  <div className="elementor-widget-container" style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
                    {t("home.fleet.subtitle", "Nous choisissons scrupuleusement nos véhicules afin de pouvoir vous offrir un maximum de confort")}
                  </div>
                </div>
              </div>
            </div>

            {/* FLEET CARDS: E-Class, V-Class, S-Class, S 580e */}
            <div style={{ backgroundColor: "#ffffff", width: "100%" }}>
              <VehicleCards lang={lang} showPrices={false} />
            </div>

            {/* DISCOVER FLEET BUTTON */}
            <div
              className="elementor-element elementor-element-ccc2142 e-flex e-con-boxed e-con e-parent"
              data-id="ccc2142"
              data-element_type="container"
              data-e-type="container"
              style={{ backgroundColor: "#ffffff", width: "100%" }}
            >
              <div className="e-con-inner" style={{ backgroundColor: "#ffffff" }}>
                <div
                  className="elementor-element elementor-element-0687468 elementor-align-center elementor-widget elementor-widget-button"
                  data-id="0687468"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="button.default"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    <div className="elementor-button-wrapper" style={{ backgroundColor: "#ffffff" }}>
                      <Link
                        className="elementor-button elementor-button-link elementor-size-md"
                        href={localizeUrl("/flotte")}
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            {t("home.fleet.cta", "Découvrir notre flotte")}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* REVIEWS SECTION */}
          <TestimonialsSection lang={lang} />

          {/* HOW TO BOOK */}
          <HowToBookSection lang={lang} />

          {/* GALLERY TITLE */}
          <div
            className="elementor-element elementor-element-946a7c3 e-flex e-con-boxed e-con e-parent"
            data-id="946a7c3"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner" style={{ textAlign: "center", width: "100%" }}>
              <div
                className="elementor-element elementor-element-cc61df9 elementor-widget elementor-widget-heading"
                data-id="cc61df9"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="heading.default"
                style={{ textAlign: "center", width: "100%" }}
              >
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <h2 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center" }}>
                    {t("home.gallery.title", "Découvrez notre flotte de véhicule")}
                  </h2>
                </div>
              </div>
              <SlashesDivider className="elementor-element-e59e2d7" align="center" width="80px" color="%23C09E5B" />
            </div>
          </div>

          {/* GALLERY GRID */}
          <div
            className="elementor-element elementor-element-b8e7d11 e-flex e-con-boxed e-con e-parent"
            data-id="b8e7d11"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-0ce04b3 e-con-full e-flex e-con e-child" data-id="0ce04b3" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-6b3ba13 elementor-widget elementor-widget-gallery" data-id="6b3ba13" data-element_type="widget" data-e-type="widget">
                  <div className="elementor-widget-container">
                    <div className="elementor-gallery__container">
                      <a className="e-gallery-item elementor-gallery-item elementor-animated-content" href="/images/Gallerie-1.jpg">
                        <div className="e-gallery-image elementor-gallery-item__image" style={{ backgroundImage: "url('/images/Gallerie-1.jpg')" }} aria-label="Mercedes Classe S limousine de prestige MCS Limo" role="img"></div>
                        <div className="elementor-gallery-item__overlay"></div>
                      </a>
                      <a className="e-gallery-item elementor-gallery-item elementor-animated-content" href="/images/Gallerie-2.jpg">
                        <div className="e-gallery-image elementor-gallery-item__image" style={{ backgroundImage: "url('/images/Gallerie-2.jpg')" }} aria-label="Intérieur cuir grand confort Mercedes avec chauffeur privé" role="img"></div>
                        <div className="elementor-gallery-item__overlay"></div>
                      </a>
                      <a className="e-gallery-item elementor-gallery-item elementor-animated-content" href="/images/missionm1.png">
                        <div className="e-gallery-image elementor-gallery-item__image" style={{ backgroundImage: "url('/images/missionm1-768x512.png')" }} aria-label="Chauffeur privé en costume devant véhicule haut de gamme" role="img"></div>
                        <div className="elementor-gallery-item__overlay"></div>
                      </a>
                      <a className="e-gallery-item elementor-gallery-item elementor-animated-content" href="/images/Gallerie-4.jpg">
                        <div className="e-gallery-image elementor-gallery-item__image" style={{ backgroundImage: "url('/images/Gallerie-4.jpg')" }} aria-label="Flotte de véhicules avec chauffeur pour événements à Paris" role="img"></div>
                        <div className="elementor-gallery-item__overlay"></div>
                      </a>
                      <a className="e-gallery-item elementor-gallery-item elementor-animated-content" href="/images/Gallerie-5.jpg">
                        <div className="e-gallery-image elementor-gallery-item__image" style={{ backgroundImage: "url('/images/Gallerie-5.jpg')" }} aria-label="Berline de luxe avec chauffeur privé à l'aéroport de Paris" role="img"></div>
                        <div className="elementor-gallery-item__overlay"></div>
                      </a>
                      <a className="e-gallery-item elementor-gallery-item elementor-animated-content" href="/images/Gallerie-6.jpg">
                        <div className="e-gallery-image elementor-gallery-item__image" style={{ backgroundImage: "url('/images/Gallerie-6.jpg')" }} aria-label="Service de transport haut de gamme en van Mercedes Classe V" role="img"></div>
                        <div className="elementor-gallery-item__overlay"></div>
                      </a>
                      <a className="e-gallery-item elementor-gallery-item elementor-animated-content" href="/images/Gallerie-7.jpg">
                        <div className="e-gallery-image elementor-gallery-item__image" style={{ backgroundImage: "url('/images/Gallerie-7.jpg')" }} aria-label="Chauffeur privé pour mariages et cérémonies officielles à Paris" role="img"></div>
                        <div className="elementor-gallery-item__overlay"></div>
                      </a>
                      <a className="e-gallery-item elementor-gallery-item elementor-animated-content" href="/images/Gallerie-9.jpg">
                        <div className="e-gallery-image elementor-gallery-item__image" style={{ backgroundImage: "url('/images/Gallerie-9.jpg')" }} aria-label="Transfert VIP et mise à disposition prestige MCS Limo Paris" role="img"></div>
                        <div className="elementor-gallery-item__overlay"></div>
                      </a>
                      <a className="e-gallery-item elementor-gallery-item elementor-animated-content" href="/images/missionm2.png">
                        <div className="e-gallery-image elementor-gallery-item__image" style={{ backgroundImage: "url('/images/missionm2-768x512.png')" }} aria-label="Accueil VIP et transfert haut de gamme avec chauffeur à Paris" role="img"></div>
                        <div className="elementor-gallery-item__overlay"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div
            className="elementor-element elementor-element-03ca178 e-flex e-con-boxed e-con e-parent"
            data-id="03ca178"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner" style={{ textAlign: "center", width: "100%" }}>
              <div
                className="elementor-element elementor-element-f96d009 elementor-widget elementor-widget-heading"
                data-id="f96d009"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="heading.default"
                style={{ textAlign: "center", width: "100%" }}
              >
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <h2 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center" }}>
                    {t("home.aboutSection.title", "A propos de MCS Limo")}
                  </h2>
                </div>
              </div>
              <SlashesDivider className="elementor-element-f25c321" align="center" width="80px" color="%23C09E5B" />
            </div>
          </div>

          <div
            className="elementor-element elementor-element-000a157 e-flex e-con-boxed e-con e-parent"
            data-id="000a157"
            data-element_type="container"
            data-e-type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-b0e677f e-con-full e-flex e-con e-child"
                data-id="b0e677f"
                data-element_type="container"
                data-e-type="container"
              >
                <div
                  className="elementor-element elementor-element-26187f2 elementor-widget elementor-widget-text-editor"
                  data-id="26187f2"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      {t("home.aboutSection.p1", "MCS Limo est une entreprise de transport de personnes offrant un service sur-mesure et haut de gamme en mettant à disposition de sa clientèle des chauffeurs privés professionnels avec des voitures de luxe.")}
                    </p>
                    <p>
                      {t("home.aboutSection.p2", "MCS Limo est présente aussi bien en France que dans les plus grandes villes du monde (Berlin, Francfort, Madrid, Barcelone, New York, Washington, Miami, Tokyo, Sydney…) pour accompagner sa clientèle de professionnels et particuliers lors de ses déplacements pour lui offrir le même standard de qualité là où elle se déplace.")}
                    </p>
                  </div>
                </div>

                <div
                  className="elementor-element elementor-element-19c88b1 elementor-align-left elementor-widget elementor-widget-button"
                  data-id="19c88b1"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <Link
                        className="elementor-button elementor-button-link elementor-size-md"
                        href={localizeUrl("/qui-sommes-nous")}
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            {t("home.aboutSection.cta", "A propos de nous")}
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-735d809 e-con-full e-flex e-con e-child"
                data-id="735d809"
                data-element_type="container"
                data-e-type="container"
              >
                <div
                  className="elementor-element elementor-element-d492d97 elementor-widget elementor-widget-image"
                  data-id="d492d97"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      decoding="async"
                      width="450"
                      height="300"
                      src="/images/MCS-Services-7.jpg"
                      className="attachment-large size-large wp-image-2456"
                      alt="Flotte de berlines et vans de luxe avec chauffeur privé - MCS Limo"
                      sizes="(max-width: 450px) 100vw, 450px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MainFooter lang={lang} />
    </div>
  );
}
