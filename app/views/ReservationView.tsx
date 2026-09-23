"use client";

import React, { useEffect } from "react";
import ReservationForm from "@/app/components/ReservationForm";
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";
import { useTranslation } from "@/lib/useTranslation";

export default function ReservationView({ lang: propLang }: { lang?: any }) {
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
        <div data-elementor-type="wp-page" data-elementor-id="415" className="elementor elementor-415" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-f96c89a e-flex e-con-boxed e-con e-parent" data-id="f96c89a" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-e466583 elementor-widget__width-inherit elementor-widget elementor-widget-heading" data-id="e466583" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {t("reservation.pageTitle", "Devis et réservation en ligne")}
                  </h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-567d15e elementor-widget elementor-widget-text-editor" data-id="567d15e" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>
                    {t("reservation.pageSubtitle", "Renseignez vos informations pour obtenir le prix de votre prestation avant de procéder à la confirmation")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-ed6b3f1 e-flex e-con-boxed e-con e-parent" data-id="ed6b3f1" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-90b897b elementor-button-align-stretch elementor-widget elementor-widget-global elementor-global-2367 elementor-widget-form" data-id="90b897b" data-element_type="widget" data-e-type="widget" data-settings='{"step_next_label":"Suivant","step_previous_label":"Précédent","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}' data-widget_type="form.default">
                <div className="elementor-widget-container">
                  <ReservationForm lang={lang} />
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-697e255 e-flex e-con-boxed e-con e-parent" data-id="697e255" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-fca50ad e-con-full e-flex e-con e-child" data-id="fca50ad" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-258db0a elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="258db0a" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <span className="elementor-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h6 className="elementor-icon-box-title">
                          <span>
                            {t("reservation.guarantee1", "Annulation gratuite jusqu'à 24h avant la réservation")}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-element elementor-element-3bad119 e-con-full e-flex e-con e-child" data-id="3bad119" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-c60bbbb elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="c60bbbb" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <span className="elementor-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h6 className="elementor-icon-box-title">
                          <span>
                            {t("reservation.guarantee2", "Service client disponible 24/7")}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-element elementor-element-655f3a7 e-con-full e-flex e-con e-child" data-id="655f3a7" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-79fe342 elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="79fe342" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <span className="elementor-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h6 className="elementor-icon-box-title">
                          <span>
                            {t("reservation.guarantee3", "Attente gratuite de 1h après atterrissage sur les arrivées en aéroport")}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="elementor-element elementor-element-7516840 e-con-full e-flex e-con e-child" data-id="7516840" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-7b155dc elementor-view-default elementor-position-block-start elementor-mobile-position-block-start elementor-widget elementor-widget-icon-box" data-id="7b155dc" data-element_type="widget" data-e-type="widget" data-widget_type="icon-box.default">
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <span className="elementor-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h6 className="elementor-icon-box-title">
                          <span>
                            {t("reservation.guarantee4", "Accueil avec pancarte nominative aux aéroports et gares")}
                          </span>
                        </h6>
                      </div>
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
