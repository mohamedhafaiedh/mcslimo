"use client";

import React, { useEffect } from "react";
import MainHeader from "@/app/components/MainHeader";
import MainFooter from "@/app/components/MainFooter";
import { useTranslation } from "@/lib/useTranslation";

export default function PrivacyView({ lang: propLang }: { lang?: any }) {
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
        <div data-elementor-type="wp-page" data-elementor-id="3" className="elementor elementor-3" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-a7e2631 e-flex e-con-boxed e-con e-parent" data-id="a7e2631" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-ef352e7 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="ef352e7" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {t("privacy.title", "Politique de confidentialité")}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-2ddf322 e-flex e-con-boxed e-con e-parent" data-id="2ddf322" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-1e2d938 elementor-widget elementor-widget-text-editor" data-id="1e2d938" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <div>
                    <h3><strong>{t("privacy.cookiesTitle")}</strong></h3>
                    <p>{t("privacy.cookiesText")}</p>
                    <h3><strong>{t("privacy.browserTitle")}</strong></h3>
                    <p>{t("privacy.browserText")}</p>
                    <h3><strong>{t("privacy.dataTitle")}</strong></h3>
                    <p>{t("privacy.dataText")}</p>
                    <h3><strong>{t("privacy.rightsTitle")}</strong></h3>
                    <p>{t("privacy.rightsText")}</p>
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
