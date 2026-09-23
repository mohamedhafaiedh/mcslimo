"use client";

import React from "react";
import { SupportedLang } from "./LanguageSwitcher";
import { useTranslation } from "@/lib/useTranslation";

interface MainFooterProps {
  lang?: SupportedLang;
}

export default function MainFooter({ lang }: MainFooterProps) {
  const { t, localizeUrl } = useTranslation(lang);

  return (
    <footer
      data-elementor-type="footer"
      data-elementor-id="524"
      className="elementor elementor-524 elementor-location-footer"
      data-elementor-post-type="elementor_library"
    >
      <div
        className="elementor-element elementor-element-7bea1cc e-flex e-con-boxed e-con e-parent"
        data-id="7bea1cc"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-02eddeb elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
            data-id="02eddeb"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="text-editor.default"
          >
            <div className="elementor-widget-container">
              <div className="container">
                <div className="block-table">
                  <div className="block-table-cell">
                    <h5>{t("footer.ctaTitle")}</h5>
                    <h3>{t("footer.ctaSubtitle")}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-322c389 elementor-align-center elementor-widget elementor-widget-button"
            data-id="322c389"
            data-element_type="widget"
            data-e-type="widget"
            data-widget_type="button.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-button-wrapper">
                <a
                  className="elementor-button elementor-button-link elementor-size-md"
                  href={localizeUrl("/contact")}
                >
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">{t("footer.ctaButton")}</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="elementor-element elementor-element-b7c3d2e e-flex e-con-boxed e-con e-parent"
        data-id="b7c3d2e"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-1cbe6de e-con-full e-flex e-con e-child"
            data-id="1cbe6de"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-5f462c5 elementor-widget__width-inherit elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
              data-id="5f462c5"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="theme-site-logo.default"
            >
              <div className="elementor-widget-container">
                <a href={localizeUrl("/")}>
                  <img
                    width="1000"
                    height="450"
                    src="/images/MCS-Limo-logo-1000x450-1.png"
                    className="attachment-full size-full wp-image-2464"
                    alt={t("footer.logoAlt", "MCS Limo")}
                    sizes="(max-width: 1000px) 100vw, 1000px"
                  />
                </a>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-0dcc8f2 elementor-widget elementor-widget-text-editor"
              data-id="0dcc8f2"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>{t("footer.description")}</p>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-dfbf32e e-con-full e-flex e-con e-child"
            data-id="dfbf32e"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-5bc741d elementor-widget elementor-widget-heading"
              data-id="5bc741d"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{t("footer.menuTitle")}</h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-6542aad elementor-nav-menu__align-start elementor-nav-menu--dropdown-none ftrmn elementor-widget elementor-widget-nav-menu"
              data-id="6542aad"
              data-element_type="widget"
              data-e-type="widget"
              data-settings='{"layout":"vertical","submenu_icon":{"value":"<i aria-hidden=\"true\" class=\"\"></i>","library":""}}'
              data-widget_type="nav-menu.default"
            >
              <div className="elementor-widget-container">
                <nav
                  aria-label="Menu"
                  className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-none"
                >
                  <ul id="menu-1-6542aad" className="elementor-nav-menu sm-vertical">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1176">
                      <a href={localizeUrl("/qui-sommes-nous")} className="elementor-item">
                        {t("footer.whoWeAre")}
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1178">
                      <a href={localizeUrl("/services")} className="elementor-item">
                        {t("footer.services")}
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1177">
                      <a href={localizeUrl("/flotte")} className="elementor-item">
                        {t("footer.fleet")}
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1179">
                      <a href={localizeUrl("/contact")} className="elementor-item">
                        {t("footer.contactTitle")}
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-428">
                      <a href={localizeUrl("/reservation")} className="elementor-item">
                        {t("footer.onlineBooking")}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-e1a08ed e-con-full e-flex e-con e-child"
            data-id="e1a08ed"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-cafce5b elementor-widget elementor-widget-heading"
              data-id="cafce5b"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">{t("footer.contactTitle")}</h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-6cd13eb und elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="6cd13eb"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon">
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-home" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                      </svg>
                    </span>
                    <span className="elementor-icon-list-text" dir="ltr">{t("footer.address", "10 Place Lucien Boilleau, 91420 Morangis")}</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a href={`mailto:${t("footer.email", "contact@mcslimo.fr")}`}>
                      <span className="elementor-icon-list-icon">
                        <svg aria-hidden="true" className="e-font-icon-svg e-far-envelope" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text" dir="ltr">{t("footer.email", "contact@mcslimo.fr")}</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a href={`tel:${t("footer.phone", "+33 1 89 48 02 96").replace(/\s+/g, "")}`}>
                      <span className="elementor-icon-list-icon">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-phone-square-alt" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text" dir="ltr">{t("footer.phone", "+33 1 89 48 02 96")}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-036edaf elementor-widget elementor-widget-image"
              data-id="036edaf"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width="268"
                  height="20"
                  src="/images/pay.png"
                  className="attachment-large size-large wp-image-238"
                  alt={t("footer.securePayment", "Secure Online Payments")}
                />
              </div>
            </div>
            <div
              className="elementor-element elementor-element-2455f23 elementor-widget elementor-widget-text-editor"
              data-id="2455f23"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>{t("footer.securePayment")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="elementor-element elementor-element-15358b0 e-flex e-con-boxed e-con e-parent"
        data-id="15358b0"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-8a3fc7e e-con-full e-flex e-con e-child"
            data-id="8a3fc7e"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-ee97747 elementor-widget elementor-widget-text-editor"
              data-id="ee97747"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                {t("footer.copyright")}
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-73bbe7a e-con-full e-flex e-con e-child"
            data-id="73bbe7a"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-d9c42a0 elementor-nav-menu__align-center elementor-nav-menu--dropdown-none ftrmn elementor-widget elementor-widget-nav-menu"
              data-id="d9c42a0"
              data-element_type="widget"
              data-e-type="widget"
              data-settings='{"submenu_icon":{"value":"<i aria-hidden=\"true\" class=\"\"></i>","library":""},"layout":"horizontal"}'
              data-widget_type="nav-menu.default"
            >
              <div className="elementor-widget-container">
                <nav
                  aria-label="Menu"
                  className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
                >
                  <ul id="menu-1-d9c42a0" className="elementor-nav-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-431">
                      <a href={localizeUrl("/mentions-legales")} className="elementor-item">
                        {t("footer.legal")}
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-879">
                      <a href={localizeUrl("/cgv")} className="elementor-item">
                        {t("footer.cgv")}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
