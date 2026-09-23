"use client";

import React, { useEffect } from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { useTranslation } from "@/lib/useTranslation";

export default function CgvPage() {
  const { t, lang, dir, pathname } = useTranslation();

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
        <div data-elementor-type="wp-page" data-elementor-id="837" className="elementor elementor-837" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-9dbe79e e-flex e-con-boxed e-con e-parent" data-id="9dbe79e" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-c6886e8 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="c6886e8" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {t("cgv.title", "Conditions générales de vente")}
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
                    <p>{t("cgv.intro")}</p>
                    <h3><strong>{t("cgv.sec1Title")}</strong></h3>
                    <p>{t("cgv.sec1Text")}</p>
                    <h3><strong>{t("cgv.sec2Title")}</strong></h3>
                    <p>{t("cgv.sec2Text")}</p>
                    <h3><strong>{t("cgv.sec3Title")}</strong></h3>
                    <p>{t("cgv.sec3Text")}</p>
                    <h3><strong>{t("cgv.sec4Title")}</strong></h3>
                    <p>{t("cgv.sec4Text")}</p>
                    <h3><strong>{t("cgv.sec5Title")}</strong></h3>
                    <p>{t("cgv.sec5Text")}</p>
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
