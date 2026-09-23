"use client";

import React from "react";
import SlashesDivider from "./SlashesDivider";
import { useTranslation, Locale } from "@/lib/useTranslation";

interface HowToBookSectionProps {
  lang?: string;
}

export default function HowToBookSection({ lang }: HowToBookSectionProps) {
  const { t } = useTranslation(lang as Locale | undefined);

  return (
    <>
      <div
        className="elementor-element elementor-element-37c3103 e-flex e-con-boxed e-con e-parent"
        data-id="37c3103"
        data-element_type="container"
        data-e-type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-1aba894 elementor-widget elementor-widget-heading"
            data-id="1aba894"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                {t("home.howToBook.title", "Comment réserver mon chauffeur ?")}
              </h2>
            </div>
          </div>

          <SlashesDivider className="elementor-element-f3a75fb" align="center" width="80px" color="%23C09E5B" />

          <div
            className="elementor-element elementor-element-980bf8e elementor-widget elementor-widget-text-editor"
            data-id="980bf8e"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              {t(
                "home.howToBook.subtitle",
                "Pour réserver une voiture de luxe avec chauffeur, rien de plus simple"
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="elementor-element elementor-element-01da488 e-flex e-con-boxed e-con e-parent"
        data-id="01da488"
        data-element_type="container"
        data-e-type="container"
      >
        <div className="e-con-inner">
          {/* Step 1 */}
          <div
            className="elementor-element elementor-element-b51b06b elementor-position-left elementor-widget__width-inherit elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
            data-id="b51b06b"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="image-box.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-image-box-wrapper">
                <figure className="elementor-image-box-img">
                  <img
                    decoding="async"
                    width="64"
                    height="64"
                    src="/images/communiquer.png"
                    className="attachment-full size-full wp-image-144"
                    alt="1. Contactez votre agence de chauffeur privé"
                  />
                </figure>
                <div className="elementor-image-box-content">
                  <h3 className="elementor-image-box-title">
                    {t("home.howToBook.step1Title", "1. Contact")}
                  </h3>
                  <p className="elementor-image-box-description">
                    {t(
                      "home.howToBook.step1Desc",
                      "E-mail, téléphone, formulaire de contact ou formulaire de réservation en ligne"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="elementor-element elementor-element-1204501 elementor-position-left elementor-widget__width-inherit elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
            data-id="1204501"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="image-box.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-image-box-wrapper">
                <figure className="elementor-image-box-img">
                  <img
                    decoding="async"
                    width="64"
                    height="64"
                    src="/images/check.png"
                    className="attachment-full size-full wp-image-142"
                    alt="2. Réservation et devis sur-mesure"
                  />
                </figure>
                <div className="elementor-image-box-content">
                  <h3 className="elementor-image-box-title">
                    {t("home.howToBook.step2Title", "2. Réservation")}
                  </h3>
                  <p className="elementor-image-box-description">
                    {t(
                      "home.howToBook.step2Desc",
                      "Décrivez-nous votre besoin détaillé et nous vous conseillerons la meilleure prestation qui s'adapte le mieux à votre situation"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="elementor-element elementor-element-8a08376 elementor-position-left elementor-widget__width-inherit elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
            data-id="8a08376"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="image-box.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-image-box-wrapper">
                <figure className="elementor-image-box-img">
                  <img
                    decoding="async"
                    width="64"
                    height="64"
                    src="/images/mobile-phone.png"
                    className="attachment-full size-full wp-image-149"
                    alt="3. Votre chauffeur est présent 15 minutes avant le trajet"
                  />
                </figure>
                <div className="elementor-image-box-content">
                  <h3 className="elementor-image-box-title">
                    {t("home.howToBook.step3Title", "3. Notre chauffeur sera là 15mn avant la prestation")}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
