"use client";

import React from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { useTranslation } from "@/lib/useTranslation";

export default function MentionsLegalesPage() {
  const { t, lang, dir, pathname } = useTranslation();

  return (
    <div id="page" className="site" dir={dir}>
      <a className="skip-link screen-reader-text" href="#content">
        {t("common.skipToContent", "Aller au contenu")}
      </a>

      <MainHeader lang={lang} currentPath={pathname} />

      <main id="content" className="site-main">
        <div data-elementor-type="wp-page" data-elementor-id="378" className="elementor elementor-378" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-052ad09 e-flex e-con-boxed e-con e-parent" data-id="052ad09" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-f409666 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="f409666" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {t("mentionsLegales.title", "Mentions légales")}
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
                    <h2><strong>{t("mentionsLegales.companyTitle")}</strong></h2>
                    <p>
                      {t("mentionsLegales.companyName")}<br />
                      {t("mentionsLegales.companyForm")}<br />
                      {t("mentionsLegales.companyCapital")}<br />
                      {t("mentionsLegales.companySiret")}<br />
                      {t("mentionsLegales.companyVat")}<br />
                      {t("mentionsLegales.companyAddress")}<br />
                      {t("mentionsLegales.companyPhone")}<br />
                      {t("mentionsLegales.companyEmail")}
                    </p>
                    <h2><strong>{t("mentionsLegales.hostTitle")}</strong></h2>
                    <p>
                      {t("mentionsLegales.hostName")}<br />
                      {t("mentionsLegales.hostContact")}
                    </p>
                    <h2><strong>{t("mentionsLegales.ipTitle")}</strong></h2>
                    <p>
                      {t("mentionsLegales.ipText")}
                    </p>
                    <h2><strong>{t("mentionsLegales.privacyTitle")}</strong></h2>
                    <p>
                      {t("mentionsLegales.privacyText")}
                    </p>
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
