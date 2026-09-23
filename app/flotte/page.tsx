"use client";

import React from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { useTranslation } from "@/lib/useTranslation";

export default function FlottePage() {
  const { t, lang, dir, pathname, localizeUrl } = useTranslation();

  const quoteUrl = localizeUrl("/reservation");
  const btnText = t("common.quoteAndBook", "Obtenir un devis et réserver");
  const passengersText3 = t("vehicles.business.passengers", "Jusqu'à 3 passagers");
  const luggageText3 = t("vehicles.business.luggage", "Jusqu'à 3 bagages");
  const passengersText7 = t("vehicles.van.passengers", "Jusqu'à 7 passagers");
  const luggageText7 = t("vehicles.van.luggage", "Jusqu'à 7 bagages");
  const refreshmentText = t("vehicles.features.refreshment", "Rafraichissement");
  const childSeatsText = t("vehicles.features.childSeats", "Sièges enfants");

  return (
    <div id="page" className="site" dir={dir}>
      <a className="skip-link screen-reader-text" href="#content">
        {t("common.skipToContent", "Aller au contenu")}
      </a>

      <MainHeader lang={lang} currentPath={pathname} />

      <main id="content" className="site-main">
        <div data-elementor-type="wp-page" data-elementor-id="926" className="elementor elementor-926" data-elementor-post-type="page">
          
          {/* Header Banner */}
          <div className="elementor-element elementor-element-56a53d9 e-flex e-con-boxed e-con e-parent" data-id="56a53d9" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-595e20e elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="595e20e" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {t("fleetPage.title", "Flotte")}
                  </h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-f5c5a9f elementor-widget elementor-widget-text-editor" data-id="f5c5a9f" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>
                    {t("fleetPage.subtitle", "Découvrez notre flotte de véhicules pour mieux choisir la voiture qui répond à vos besoins")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle 1: Mercedes Classe E */}
          <div className="elementor-element elementor-element-76f5ccd e-flex e-con-boxed e-con e-parent" data-id="76f5ccd" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-5e0910f e-con-full e-flex e-con e-parent" data-id="5e0910f" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-d5091a2 elementor-widget elementor-widget-image" data-id="d5091a2" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" width="439" height="340" src="/images/eclass.png" className="attachment-large size-large wp-image-276" alt="Mercedes Classe E berline avec chauffeur privé - MCS Limo" sizes="(max-width: 439px) 100vw, 439px" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-be70532 e-con-full e-flex e-con e-parent" data-id="be70532" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-01aad55 elementor-widget elementor-widget-heading" data-id="01aad55" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {t("vehicles.business.category", "Berline Business")}
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2439516 elementor-widget elementor-widget-text-editor" data-id="2439516" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">{t("vehicles.business.name", "Mercedes Classe E")}</h6>
                  </div>
                </div>
                <div className="elementor-element elementor-element-74dbeac elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="74dbeac" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items elementor-inline-items" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "12px 20px" }}>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: 0 }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-users" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{passengersText3}</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: 0 }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-suitcase" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{luggageText3}</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: 0 }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-wifi" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">Wi-Fi</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: 0 }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-water" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{refreshmentText}</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: 0 }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-baby" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M192 160c44.2 0 80-35.8 80-80S236.2 0 192 0s-80 35.8-80 80 35.8 80 80 80zm-53.4 248.8l25.6-32-61.5-51.2L56.8 383c-11.4 14.2-11.7 34.4-.8 49l48 64c7.9 10.5 19.9 16 32 16 8.3 0 16.8-2.6 24-8 17.7-13.2 21.2-38.3 8-56l-29.4-39.2zm142.7-83.2l-61.5 51.2 25.6 32L216 448c-13.2 17.7-9.7 42.8 8 56 7.2 5.4 15.6 8 24 8 12.2 0 24.2-5.5 32-16l48-64c10.9-14.6 10.6-34.8-.8-49l-45.9-57.4zM376.7 145c-12.7-18.1-37.6-22.4-55.7-9.8l-40.6 28.5c-52.7 37-124.2 37-176.8 0L63 135.3C44.9 122.6 20 127 7.3 145-5.4 163.1-1 188 17 200.7l40.6 28.5c17 11.9 35.4 20.9 54.4 27.9V288h160v-30.8c19-7 37.4-16 54.4-27.9l40.6-28.5c18.1-12.8 22.4-37.7 9.7-55.8z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{childSeatsText}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="elementor-element elementor-element-96e79b2 elementor-align-center elementor-widget elementor-widget-button" data-id="96e79b2" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-md" href={quoteUrl}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">{btnText}</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle 2: Mercedes Classe V */}
          <div className="elementor-element elementor-element-c92e739 e-flex e-con-boxed e-con e-parent" data-id="c92e739" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-7f725e4 e-con-full e-flex e-con e-parent" data-id="7f725e4" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-08c849c elementor-widget elementor-widget-heading" data-id="08c849c" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {t("vehicles.van.category", "Van")}
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-6ef6e83 elementor-widget elementor-widget-text-editor" data-id="6ef6e83" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">{t("vehicles.van.name", "Mercedes Classe V")}</h6>
                  </div>
                </div>
                <div className="elementor-element elementor-element-0cf5ccd elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="0cf5ccd" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items elementor-inline-items">
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-users" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{passengersText7}</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-suitcase" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{luggageText7}</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-wifi" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">Wi-Fi</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-water" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{refreshmentText}</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-baby" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M192 160c44.2 0 80-35.8 80-80S236.2 0 192 0s-80 35.8-80 80 35.8 80 80 80zm-53.4 248.8l25.6-32-61.5-51.2L56.8 383c-11.4 14.2-11.7 34.4-.8 49l48 64c7.9 10.5 19.9 16 32 16 8.3 0 16.8-2.6 24-8 17.7-13.2 21.2-38.3 8-56l-29.4-39.2zm142.7-83.2l-61.5 51.2 25.6 32L216 448c-13.2 17.7-9.7 42.8 8 56 7.2 5.4 15.6 8 24 8 12.2 0 24.2-5.5 32-16l48-64c10.9-14.6 10.6-34.8-.8-49l-45.9-57.4zM376.7 145c-12.7-18.1-37.6-22.4-55.7-9.8l-40.6 28.5c-52.7 37-124.2 37-176.8 0L63 135.3C44.9 122.6 20 127 7.3 145-5.4 163.1-1 188 17 200.7l40.6 28.5c17 11.9 35.4 20.9 54.4 27.9V288h160v-30.8c19-7 37.4-16 54.4-27.9l40.6-28.5c18.1-12.8 22.4-37.7 9.7-55.8z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{childSeatsText}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="elementor-element elementor-element-70b6f6f elementor-align-center elementor-widget elementor-widget-button" data-id="70b6f6f" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-md" href={quoteUrl}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">{btnText}</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-cacbc8b e-con-full e-flex e-con e-parent" data-id="cacbc8b" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-9408592 elementor-widget elementor-widget-image" data-id="9408592" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" width="439" height="340" src="/images/vclass.png" className="attachment-large size-large wp-image-278" alt="Mercedes Classe V van spacieux avec chauffeur - MCS Limo" sizes="(max-width: 439px) 100vw, 439px" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle 3: Mercedes Classe S */}
          <div className="elementor-element elementor-element-645c4ee e-flex e-con-boxed e-con e-parent" data-id="645c4ee" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-028e6c6 e-con-full e-flex e-con e-parent" data-id="028e6c6" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-91cde5e elementor-widget elementor-widget-image" data-id="91cde5e" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                  <div className="elementor-widget-container">
                    <img decoding="async" width="439" height="340" src="/images/sclass.png" className="attachment-large size-large wp-image-277" alt="Mercedes Classe S limousine de prestige avec chauffeur - MCS Limo" sizes="(max-width: 439px) 100vw, 439px" />
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-550b7f8 e-con-full e-flex e-con e-parent" data-id="550b7f8" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-cdea8e8 elementor-widget elementor-widget-heading" data-id="cdea8e8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {t("vehicles.luxe.category", "Berline Luxe")}
                    </h2>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f12e96b elementor-widget elementor-widget-text-editor" data-id="f12e96b" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    <h6 className="elementor-heading-title elementor-size-default">{t("vehicles.luxe.name", "Mercedes Classe S")}</h6>
                    <h6 className="elementor-heading-title elementor-size-default">{t("vehicles.hybrid.name", "Mercedes Classe S 580e")}</h6>
                  </div>
                </div>
                <div className="elementor-element elementor-element-f9d2df8 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="f9d2df8" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items elementor-inline-items">
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-users" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{passengersText3}</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-suitcase" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{luggageText3}</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-wifi" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">Wi-Fi</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-water" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{refreshmentText}</span>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item" style={{ display: "inline-flex", alignItems: "center", gap: "6px", margin: "4px 12px" }}>
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-baby" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M192 160c44.2 0 80-35.8 80-80S236.2 0 192 0s-80 35.8-80 80 35.8 80 80 80zm-53.4 248.8l25.6-32-61.5-51.2L56.8 383c-11.4 14.2-11.7 34.4-.8 49l48 64c7.9 10.5 19.9 16 32 16 8.3 0 16.8-2.6 24-8 17.7-13.2 21.2-38.3 8-56l-29.4-39.2zm142.7-83.2l-61.5 51.2 25.6 32L216 448c-13.2 17.7-9.7 42.8 8 56 7.2 5.4 15.6 8 24 8 12.2 0 24.2-5.5 32-16l48-64c10.9-14.6 10.6-34.8-.8-49l-45.9-57.4zM376.7 145c-12.7-18.1-37.6-22.4-55.7-9.8l-40.6 28.5c-52.7 37-124.2 37-176.8 0L63 135.3C44.9 122.6 20 127 7.3 145-5.4 163.1-1 188 17 200.7l40.6 28.5c17 11.9 35.4 20.9 54.4 27.9V288h160v-30.8c19-7 37.4-16 54.4-27.9l40.6-28.5c18.1-12.8 22.4-37.7 9.7-55.8z"></path></svg>
                        </span>
                        <span className="elementor-icon-list-text">{childSeatsText}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2b8aa58 elementor-align-center elementor-widget elementor-widget-button" data-id="2b8aa58" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a className="elementor-button elementor-button-link elementor-size-md" href={quoteUrl}>
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">{btnText}</span>
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
