"use client";

import React from "react";
import SlashesDivider from "./SlashesDivider";
import { useTranslation, Locale } from "@/lib/useTranslation";

interface WhyChooseUsSectionProps {
  lang?: string;
}

export default function WhyChooseUsSection({ lang }: WhyChooseUsSectionProps) {
  const { t } = useTranslation(lang as Locale | undefined);

  return (
    <>
      <div
        className="elementor-element elementor-element-3897279 e-flex e-con-boxed e-con e-parent"
        data-id="3897279"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
        id="qui-sommes-nous"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-277bb3a elementor-widget elementor-widget-heading"
            data-id="277bb3a"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="heading.default"
          >
            <div className="elementor-widget-container">
              <h2 className="elementor-heading-title elementor-size-default">
                {t("home.whyUs.title", "Pourquoi choisir MCS Limo ?")}
              </h2>
            </div>
          </div>
          <SlashesDivider className="elementor-element-0c584e2" align="center" width="80px" color="%23C09E5B" />
        </div>
      </div>

      <div
        className="elementor-element elementor-element-3bae5d2 e-flex e-con-boxed e-con e-parent"
        data-id="3bae5d2"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          {/* Card 1 */}
          <div
            className="elementor-element elementor-element-2c27979 e-con-full e-flex e-con e-child"
            data-id="2c27979"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-d9b5997 elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="d9b5997"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-image-box-wrapper">
                  <figure className="elementor-image-box-img">
                    <img
                      decoding="async"
                      width="64"
                      height="64"
                      src="/images/agree.png"
                      className="attachment-full size-full wp-image-138"
                      alt="Chauffeurs professionnels agréés VTC"
                    />
                  </figure>
                  <div className="elementor-image-box-content">
                    <h3 className="elementor-image-box-title">
                      {t("home.whyUs.feature1Title", "Chauffeurs expérimentés")}
                    </h3>
                    <p className="elementor-image-box-description">
                      {t(
                        "home.whyUs.feature1Desc",
                        "Nos chauffeurs ont plus de 10 ans d'expérience. Ils sont tous discrets, multilingues et ont le sens du service"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="elementor-element elementor-element-4565f2a e-con-full e-flex e-con e-child"
            data-id="4565f2a"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-ff74ddd elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="ff74ddd"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-image-box-wrapper">
                  <figure className="elementor-image-box-img">
                    <img
                      decoding="async"
                      width="64"
                      height="64"
                      src="/images/service-clients.png"
                      className="attachment-full size-full wp-image-152"
                      alt="Service client disponible 24h/24 et 7j/7"
                    />
                  </figure>
                  <div className="elementor-image-box-content">
                    <h3 className="elementor-image-box-title">
                      {t("home.whyUs.feature2Title", "Services et voitures haut de gamme")}
                    </h3>
                    <p className="elementor-image-box-description">
                      {t(
                        "home.whyUs.feature2Desc",
                        "Nous mettons à votre disposition des véhicules haut de gamme avec un service de qualité"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="elementor-element elementor-element-2b83088 e-con-full e-flex e-con e-child"
            data-id="2b83088"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-54ceb07 elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="54ceb07"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-image-box-wrapper">
                  <figure className="elementor-image-box-img">
                    <img
                      decoding="async"
                      width="64"
                      height="64"
                      src="/images/calendrier.png"
                      className="attachment-full size-full wp-image-140"
                      alt="Réservation de chauffeur privé en ligne"
                    />
                  </figure>
                  <div className="elementor-image-box-content">
                    <h3 className="elementor-image-box-title">
                      {t("home.whyUs.feature3Title", "Disponibilité 24/7")}
                    </h3>
                    <p className="elementor-image-box-description">
                      {t(
                        "home.whyUs.feature3Desc",
                        "Nous sommes disponibles à tout moment pour traiter vos demandes ou assurer vos besoins"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="elementor-element elementor-element-1f0690e e-con-full e-flex e-con e-child"
            data-id="1f0690e"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-e589c68 elementor-position-top elementor-widget elementor-widget-image-box"
              data-id="e589c68"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-image-box-wrapper">
                  <figure className="elementor-image-box-img">
                    <img
                      decoding="async"
                      width="64"
                      height="64"
                      src="/images/time-check.png"
                      className="attachment-full size-full wp-image-153"
                      alt="Ponctualité garantie et suivi en temps réel des vols"
                    />
                  </figure>
                  <div className="elementor-image-box-content">
                    <h3 className="elementor-image-box-title">
                      {t("home.whyUs.feature4Title", "Ponctualité")}
                    </h3>
                    <p className="elementor-image-box-description">
                      {t(
                        "home.whyUs.feature4Desc",
                        "Parce que votre temps est précieux, nous faisons en sorte que nos chauffeurs arrivent avant 15 minutes du début de chaque prestation"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
