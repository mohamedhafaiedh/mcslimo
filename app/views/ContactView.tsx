"use client";

import React, { useEffect } from "react";
import ContactForm from "@/app/components/ContactForm";
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";
import SlashesDivider from "@/app/components/SlashesDivider";
import { useTranslation } from "@/lib/useTranslation";

export default function ContactView({ lang: propLang }: { lang?: any }) {
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
        <div data-elementor-type="wp-page" data-elementor-id="932" className="elementor elementor-932" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-ba9b5e6 e-flex e-con-boxed e-con e-parent" data-id="ba9b5e6" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-937d096 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="937d096" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {t("contact.title", "Nous contacter")}
                  </h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-37db313 elementor-widget elementor-widget-text-editor" data-id="37db313" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>
                    {t("contact.subtitle", "Notre équipe sera heureuse de pouvoir vous aider. Renseignez le formulaire et nous reviendrons vers vous dès que possible.")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-a03b0ce e-flex e-con-boxed e-con e-parent" data-id="a03b0ce" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-27873c1 e-con-full e-flex e-con e-child" data-id="27873c1" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-2d3b7fb elementor-widget elementor-widget-heading" data-id="2d3b7fb" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {t("contact.formTitle", "Formulaire de contact")}
                    </h2>
                  </div>
                </div>
                <SlashesDivider width="80px" color="%23C09E5B" />
                <div className="elementor-element elementor-element-8f67ed9 elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="8f67ed9" data-element_type="widget" data-e-type="widget" data-settings='{"step_next_label":"Suivant","step_previous_label":"Précédent","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}' data-widget_type="form.default">
                  <div className="elementor-widget-container">
                    <ContactForm lang={lang} />
                  </div>
                </div>
              </div>

              <div className="elementor-element elementor-element-d59881d e-con-full e-flex e-con e-child" data-id="d59881d" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-c78bb41 elementor-widget elementor-widget-heading" data-id="c78bb41" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {t("contact.infoTitle", "Coordonnées")}
                    </h2>
                  </div>
                </div>
                <SlashesDivider width="80px" color="%23C09E5B" />
                <div className="elementor-element elementor-element-c02d8a1 und elementor-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="c02d8a1" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <svg aria-hidden="true" className="e-font-icon-svg e-fas-home" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                          </svg>
                        </span>
                        <span className="elementor-icon-list-text">10 Place Lucien Boilleau, 91420 Morangis</span>
                      </li>
                      <li className="elementor-icon-list-item">
                        <a href="mailto:contact@mcslimo.fr">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                            </svg>
                          </span>
                          <span className="elementor-icon-list-text">contact@mcslimo.fr</span>
                        </a>
                      </li>
                      <li className="elementor-icon-list-item">
                        <a href="tel:+33189480296">
                          <span className="elementor-icon-list-icon">
                            <svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-square-alt" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"></path>
                            </svg>
                          </span>
                          <span className="elementor-icon-list-text" dir="ltr">+33 1 89 48 02 96</span>
                        </a>
                      </li>
                    </ul>
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
