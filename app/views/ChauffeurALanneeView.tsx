"use client";

import React from "react";
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";
import { useTranslation } from "@/lib/useTranslation";

export default function ChauffeurALanneeView({ lang: propLang }: { lang?: any }) {
  const { t, lang, dir, pathname, localizeUrl } = useTranslation(propLang);

  return (
    <div id="page" className="site" dir={dir}>
      <a className="skip-link screen-reader-text" href="#content">
        {t("common.skipToContent", "Aller au contenu")}
      </a>

      <MainHeader lang={lang} currentPath={pathname} />

      <main id="content" className="site-main">
        <div data-elementor-type="wp-page" data-elementor-id="2598" className="elementor elementor-2598" data-elementor-post-type="page">
          
          {/* Header Title */}
          <div className="elementor-element elementor-element-e37afbf e-flex e-con-boxed e-con e-parent" data-id="e37afbf" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-02a6e01 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="02a6e01" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {t("yearlyChauffeur.title", "Chauffeur à l’année")}
                  </h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-14f0c1e elementor-widget elementor-widget-text-editor" data-id="14f0c1e" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>
                    {t("yearlyChauffeur.subtitle", "Votre chauffeur au quotidien pour un maximum de flexibilité")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <div className="elementor-element elementor-element-b871911 e-flex e-con-boxed e-con e-parent" data-id="b871911" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-a3d7e1d e-con-full e-flex e-con e-child" data-id="a3d7e1d" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-ec5350d elementor-widget elementor-widget-heading" data-id="ec5350d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      {t("yearlyChauffeur.sec1Heading", "Une seule réservation, et un chauffeur à disposition toute l'année.")}
                    </h3>
                  </div>
                </div>
                <div className="elementor-element elementor-element-d05a440 elementor-widget elementor-widget-text-editor" data-id="d05a440" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    {t("yearlyChauffeur.sec1Text", "Fini les réservations de dernière minute et l’aléa des VTC de passage. Avec l’offre Chauffeur à l’année de MCS Limo, votre véhicule et votre chauffeur sont à votre disposition quand vous en avez besoin, du lundi au vendredi, voire même le week-end. Vous profitez d’un service sur mesure, parfaitement adapté à votre rythme professionnel et personnel.")}
                  </div>
                </div>
                <div className="elementor-element elementor-element-697faff elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="697faff" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">
                          {t("yearlyChauffeur.sec1Point1", "Votre chauffeur vous attend chaque jour, sans aucune réservation à effectuer")}
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">
                          {t("yearlyChauffeur.sec1Point2", "Disponibilité quotidienne du lundi au vendredi, et le week-end si besoin")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-5a54551 e-con-full e-flex e-con e-child" data-id="5a54551" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-5244f24 elementor-widget elementor-widget-image" data-id="5244f24" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" width="800" height="534" src="/images/paris1.jpg" className="attachment-large size-large wp-image-2634" alt="Chauffeur privé haut de gamme à Paris - MCS Limo" sizes="(max-width: 800px) 100vw, 800px" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="elementor-element elementor-element-2634c18 e-flex e-con-boxed e-con e-parent" data-id="2634c18" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-65cbc7c e-con-full e-flex e-con e-child" data-id="65cbc7c" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-71bbf92 elementor-widget elementor-widget-image" data-id="71bbf92" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" width="800" height="534" src="/images/paris2.jpg" className="attachment-large size-large wp-image-2635" alt="Service de transport avec chauffeur à Paris et en Île-de-France" sizes="(max-width: 800px) 100vw, 800px" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-17e6592 e-con-full e-flex e-con e-child" data-id="17e6592" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-373ffb9 elementor-widget elementor-widget-heading" data-id="373ffb9" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      {t("yearlyChauffeur.sec2Heading", "Un budget optimisé, un service premium")}
                    </h3>
                  </div>
                </div>
                <div className="elementor-element elementor-element-d832869 elementor-widget elementor-widget-text-editor" data-id="d832869" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    {t("yearlyChauffeur.sec2Text", "Disposer de son propre chauffeur privé à l’année est plus accessible qu’on ne le pense. Grâce à une tarification dédiée et prévisible, vous maîtrisez votre budget transport tout en accédant au meilleur du haut de gamme : les derniers modèles de véhicules, chauffeurs expérimentés et attentionnés, service irréprochable à chaque trajet.")}
                  </div>
                </div>
                <div className="elementor-element elementor-element-ddf0a3e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="ddf0a3e" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">
                          {t("yearlyChauffeur.sec2Point1", "Tarification claire et avantageuse, sans les surcoûts des réservations ponctuelles")}
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">
                          {t("yearlyChauffeur.sec2Point2", "Véhicules premium minutieusement entretenus (Mercedes Classe E, Classe S, Classe V)")}
                        </span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">
                          {t("yearlyChauffeur.sec2Point3", "Discrétion, courtoisie et continuité de service garanties — deux chauffeurs dédiés en rotation pour une disponibilité sans faille")}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="elementor-element elementor-element-eac11fb e-flex e-con-boxed e-con e-parent" data-id="eac11fb" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-ef70164 e-con-full e-flex e-con e-child" data-id="ef70164" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-ddfacf1 elementor-align-center elementor-widget__width-inherit elementor-widget elementor-widget-button" data-id="ddfacf1" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-md" href={localizeUrl("/reservation")}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            {t("yearlyChauffeur.quoteBtn", "J'obtiens mon devis pour un chauffeur à l'année")}
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
