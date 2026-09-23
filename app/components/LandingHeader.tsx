"use client";

import React from "react";
import Link from "next/link";
import LanguageSwitcher, { SupportedLang } from "./LanguageSwitcher";
import { useTranslation, Locale } from "@/lib/useTranslation";

interface LandingHeaderProps {
  lang?: SupportedLang;
  currentPath?: string;
}

export default function LandingHeader({ lang: propLang, currentPath }: LandingHeaderProps) {
  const { lang: contextLang, pathname, localizeUrl } = useTranslation();
  const currentLang = (propLang || contextLang) as Locale;
  const activePath = currentPath || pathname || "/lp-chauffeur-prive";

  const logoAlt =
    currentLang === "ar"
      ? "MCS Limo - سائق خاص فاخر في باريس"
      : currentLang === "en"
      ? "MCS Limo - High-end Private Chauffeur in Paris"
      : "MCS Limo - Chauffeur privé de prestige à Paris";

  return (
    <header
      data-elementor-type="header"
      data-elementor-id="1222"
      className="elementor elementor-1222 elementor-location-header"
      data-elementor-post-type="elementor_library"
    >
      <div
        className="elementor-element elementor-element-6ae0ca6 e-flex e-con-boxed e-con e-parent"
        data-id="6ae0ca6"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-53ef584 e-con-full e-flex e-con e-child"
            data-id="53ef584"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-d28c7bd elementor-widget__width-auto elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
              data-id="d28c7bd"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="theme-site-logo.default"
            >
              <div className="elementor-widget-container">
                <Link href={localizeUrl("/")}>
                  <img
                    fetchPriority="high"
                    width="1000"
                    height="450"
                    src="/images/MCS-Limo-logo-1000x450-1.png"
                    className="attachment-full size-full wp-image-2464"
                    alt={logoAlt}
                    sizes="(max-width: 1000px) 100vw, 1000px"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-bdc4ec7 e-con-full elementor-hidden-mobile e-flex e-con e-child"
            data-id="bdc4ec7"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-1269cef elementor-nav-menu__align-end elementor-nav-menu--dropdown-none elementor-widget elementor-widget-nav-menu"
              data-id="1269cef"
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
                  <ul id="menu-1-1269cef" className="elementor-nav-menu">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-456">
                      <a href="tel:+33189480296" className="elementor-item phone-number" dir="ltr">
                        +33 1 89 48 02 96
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav
                  className="elementor-nav-menu--dropdown elementor-nav-menu__container"
                  aria-hidden="true"
                >
                  <ul id="menu-2-1269cef" className="elementor-nav-menu">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-456">
                      <a href="tel:+33189480296" className="elementor-item phone-number" tabIndex={-1} dir="ltr">
                        +33 1 89 48 02 96
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-2b3b4e7 e-con-full e-flex e-con e-child"
            data-id="2b3b4e7"
            data-element_type="container"
            data-e-type="container"
          >
            <LanguageSwitcher
              lang={currentLang}
              currentPath={activePath}
              className="elementor-element-c40a396 elementor-nav-menu__align-end"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
