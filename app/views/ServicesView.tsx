"use client";

import React, { useEffect } from "react";
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";
import { useTranslation } from "@/lib/useTranslation";

export default function ServicesView({ lang: propLang }: { lang?: any }) {
  const { t, lang, dir, pathname, localizeUrl } = useTranslation(propLang);

  const reservationHref = localizeUrl("/reservation");

  useEffect(() => {
    const toggleBtn = document.querySelector(".elementor-menu-toggle");
    const dropdown = document.querySelector(".elementor-nav-menu--dropdown");
    
    if (toggleBtn && dropdown) {
      const handleClick = () => {
        dropdown.classList.toggle("is-open");
        toggleBtn.classList.toggle("elementor-active");
      };
      toggleBtn.addEventListener("click", handleClick);
      return () => toggleBtn.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <div id="page" className="site" dir={dir}>
      <a className="skip-link screen-reader-text" href="#content">
        {t("common.skipToContent", "Aller au contenu")}
      </a>

      <MainHeader lang={lang} currentPath={pathname} />

      <main id="content" className="site-main">
        <div data-elementor-type="wp-page" data-elementor-id="928" className="elementor elementor-928" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-4be4a22 e-flex e-con-boxed e-con e-parent" data-id="4be4a22" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-f5245ee elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="f5245ee" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {t("servicesPage.title", "Nos Services")}
                  </h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-4e8f9de elementor-widget elementor-widget-text-editor" data-id="4e8f9de" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>
                    {t("servicesPage.subtitle", "Découvrez tous les services que vous offre MCS Limo")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Transfers Section */}
          <div className="elementor-element elementor-element-53e6291 e-flex e-con-boxed e-con e-parent" data-id="53e6291" data-element_type="container" data-e-type="container" id="transferts">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-d8f967d e-con-full e-flex e-con e-child" data-id="d8f967d" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-36c06d7 elementor-widget elementor-widget-image" data-id="36c06d7" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" width="450" height="300" src="/images/MCS-Services-5.jpg" className="attachment-large size-large wp-image-2454" alt="Transfert aéroport et gare avec chauffeur privé à Paris" sizes="(max-width: 450px) 100vw, 450px" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-aea3348 e-con-full e-flex e-con e-child" data-id="aea3348" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-af48646 elementor-widget elementor-widget-heading" data-id="af48646" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {t("servicesPage.transfers.title", "Transferts")}
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-247ca84 elementor-widget elementor-widget-text-editor" data-id="247ca84" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>
                      {t("servicesPage.transfers.desc", "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris, vous serez accompagné à votre destination avec ponctualité et discrétion à bord de l’un de nos luxueux véhicules")}
                    </p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-4dc5370 elementor-align-left elementor-widget elementor-widget-button" data-id="4dc5370" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-md" href={reservationHref}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            {t("common.quoteAndBook", "Obtenir un devis et réserver")}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MAD / Hourly Section */}
          <div className="elementor-element elementor-element-effec95 e-flex e-con-boxed e-con e-parent" data-id="effec95" data-element_type="container" data-e-type="container" id="mad">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-f626ad5 e-con-full e-flex e-con e-child" data-id="f626ad5" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-f422fdf elementor-widget elementor-widget-heading" data-id="f422fdf" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {t("servicesPage.mad.title", "Mises à disposition")}
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2e6e165 elementor-widget elementor-widget-text-editor" data-id="2e6e165" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>
                      {t("servicesPage.mad.desc", "Le service idéal pour vos journées chargées. Nous mettons à votre disposition nos voitures avec chauffeur. Le véhicule restera mobilisé pour la durée qui vous convient et notre chauffeur vous conduira en toute discrétion.")}
                    </p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-4e3b792 elementor-align-left elementor-widget elementor-widget-button" data-id="4e3b792" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-md" href={reservationHref}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            {t("common.quoteAndBook", "Obtenir un devis et réserver")}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-a28e2b4 e-con-full e-flex e-con e-child" data-id="a28e2b4" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-fd3fcd6 elementor-widget elementor-widget-image" data-id="fd3fcd6" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" width="450" height="300" src="/images/MCS-Services-4.jpg" className="attachment-large size-large wp-image-2453" alt="Mise à disposition de véhicule avec chauffeur à Paris" sizes="(max-width: 450px) 100vw, 450px" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VIP Greeter Section */}
          <div className="elementor-element elementor-element-74e274f e-flex e-con-boxed e-con e-parent" data-id="74e274f" data-element_type="container" data-e-type="container" id="vip">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-6e4c591 e-con-full e-flex e-con e-child" data-id="6e4c591" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-977bf51 elementor-widget elementor-widget-image" data-id="977bf51" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" width="450" height="300" src="/images/MCS-Services-8.jpg" className="attachment-large size-large wp-image-2457" alt="Accueil VIP et service greeter personnalisé à Paris" sizes="(max-width: 450px) 100vw, 450px" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-922350d e-con-full e-flex e-con e-child" data-id="922350d" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-eb0889d elementor-widget elementor-widget-heading" data-id="eb0889d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {t("servicesPage.vip.title", "Accueil VIP")}
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-ff38730 elementor-widget elementor-widget-text-editor" data-id="ff38730" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>
                      {t("servicesPage.vip.desc", "Pour optimiser votre temps et gagner en sérénité, nos agents d’accueil vous accompagneront le long de votre trajet entre la porte de l’avion et celle de votre véhicule pour vous accorder un passage prioritaire et vous libérer de toutes formalités (récupération de bagages ou contrôle police à l’arrivée, enregistrement ou détaxe sur achats au départ, etc.).")}
                    </p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-a17b7b6 elementor-align-left elementor-widget elementor-widget-button" data-id="a17b7b6" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-md" href={reservationHref}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            {t("common.quoteAndBook", "Obtenir un devis et réserver")}
                          </span>
                        </span>
                      </a>
                    </div>
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
