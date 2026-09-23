"use client";

import React, { useEffect } from "react";
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";
import { useTranslation } from "@/lib/useTranslation";

export default function AboutView({ lang: propLang }: { lang?: any }) {
  const { t, lang, dir, pathname } = useTranslation(propLang);

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
        <div data-elementor-type="wp-page" data-elementor-id="1086" className="elementor elementor-1086" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-e37afbf e-flex e-con-boxed e-con e-parent" data-id="e37afbf" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-02a6e01 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="02a6e01" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {t("about.title", "Qui sommes-nous")}
                  </h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-14f0c1e elementor-widget elementor-widget-text-editor" data-id="14f0c1e" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>
                    {t("about.pageSubtitle", "Pour vous faire découvrir qui est MCS Limo")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-0f6d82d e-flex e-con-boxed e-con e-parent" data-id="0f6d82d" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-7c99943 e-con-full e-flex e-con e-child" data-id="7c99943" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-1e2d938 elementor-widget elementor-widget-text-editor" data-id="1e2d938" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <p>{t("about.missionP1", "MCS Limo a été créée dans l’unique but d’offrir à sa clientèle une expérience de transport haut de gamme auprès d’une clientèle exigeante.")}</p>
                    <p>{t("about.missionP2", "Nous œuvrons chaque jour pour satisfaire une demande sans cesse croissante dans le domaine du transport en voitures de luxe avec chauffeur, en offrant à nos clients une expérience unique depuis le premier contact jusqu’au lieu de dépose convenu, et au-delà. En effet, nous sommes à l’écoute de nos clients afin de rendre nos prestations meilleures, de jour en jour.")}</p>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-edd3e33 e-con-full e-flex e-con e-child" data-id="edd3e33" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-13a6d6c elementor-widget elementor-widget-video" data-id="13a6d6c" data-element_type="widget" data-e-type="widget" data-settings='{"video_type":"hosted","controls":"yes"}' data-widget_type="video.default">
                  <div className="elementor-widget-container">
                    <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                      <video className="elementor-video" src="/images/WhatsApp-Video-2023-02-06-a-22.23.05.mp4" controls={true} preload="metadata" controlsList="nodownload" poster="/images/WhatsApp-Video-2023-02-06-a-22.23.05-frame-at-0m3s.jpg"></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-2ddf322 e-flex e-con-boxed e-con e-parent" data-id="2ddf322" data-element_type="container" data-e-type="container">
            <div className="e-con-inner" style={{ textAlign: "center", width: "100%" }}>
              <div className="elementor-element elementor-element-f7822c7 elementor-widget elementor-widget-heading" data-id="f7822c7" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ textAlign: "center", width: "100%" }}>
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <h3 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center" }}>
                    {t("about.qualityTitle", "Hauts standards de qualité")}
                  </h3>
                </div>
              </div>
              <div className="elementor-element elementor-element-d981ab6 elementor-widget elementor-widget-text-editor" data-id="d981ab6" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ textAlign: "center", width: "100%" }}>
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <p>{t("about.qualityP1", "Chez MCS Limo, chaque détail compte. Nos véhicules sont minutieusement choisis et entretenus. Et nos chauffeurs sont choisis pour leur expérience et leur sens du service.")}</p>
                  <p>{t("about.qualityP2", "Luxe, confort, courtoisie, discretion et sens du service sont les maîtres-mots qui vous accompagneront inéluctablement lors de chacune de vos réservations.")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-517e7bd e-flex e-con-boxed e-con e-parent" data-id="517e7bd" data-element_type="container" data-e-type="container">
            <div className="e-con-inner" style={{ textAlign: "center", width: "100%" }}>
              <div className="elementor-element elementor-element-3668aa4 elementor-widget elementor-widget-heading" data-id="3668aa4" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ textAlign: "center", width: "100%" }}>
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <h3 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center" }}>
                    {t("about.presenceTitle", "Nous sommes présents partout en France, et au-delà !")}
                  </h3>
                </div>
              </div>
              <div className="elementor-element elementor-element-c1c835b elementor-widget elementor-widget-text-editor" data-id="c1c835b" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ textAlign: "center", width: "100%" }}>
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <p>{t("about.presenceP1", "MCS Limo est basée à Paris, mais se charge de répondre aux besoins de sa clientèle sur toute la France, et partout ailleurs : Londres, Berlin, Rome, Bruxelles, New York, Tokyo, etc.")}</p>
                  <p>{t("about.presenceP2", "Où que vous soyez, nous serons là pour vous accompagner et vous présenter l’offre adaptée à votre besoin.")}</p>
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
