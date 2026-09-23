"use client";

import React, { useState, useEffect, useRef } from "react";
import LanguageSwitcher, { SupportedLang } from "./LanguageSwitcher";
import { useTranslation, Locale } from "@/lib/useTranslation";

interface MainHeaderProps {
  lang?: SupportedLang;
  currentPath?: string;
}

export default function MainHeader({ lang = "fr", currentPath = "" }: MainHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevPath, setPrevPath] = useState(currentPath);
  const headerRef = useRef<HTMLElement>(null);
  const { t, localizeUrl, dir } = useTranslation(lang as Locale);

  // Close menu on route/path change (React pattern: adjusting state when props change)
  if (prevPath !== currentPath) {
    setPrevPath(currentPath);
    setIsMobileMenuOpen(false);
  }

  // Close menu when clicking outside header
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const homeHref = localizeUrl("/");
  const aboutHref = localizeUrl("/qui-sommes-nous");
  const servicesHref = localizeUrl("/services");
  const transfersHref = localizeUrl("/services#transferts");
  const madHref = localizeUrl("/services#mad");
  const vipHref = localizeUrl("/services#vip");
  const fleetHref = localizeUrl("/flotte");
  const contactHref = localizeUrl("/contact");
  const reservationHref = localizeUrl("/reservation");

  const menuItems = [
    {
      id: "home",
      className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-919",
      href: homeHref,
      label: t("nav.home", "Accueil"),
      hasChildren: false,
      children: [],
    },
    {
      id: "about",
      className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-1097",
      href: aboutHref,
      label: t("nav.about", "À propos"),
      hasChildren: false,
      children: [],
    },
    {
      id: "services",
      className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-936",
      href: servicesHref,
      label: t("nav.services", "Services"),
      hasChildren: true,
      children: [
        { href: transfersHref, label: t("nav.transfers", "Transferts"), className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-1138" },
        { href: madHref, label: t("nav.mad", "Mises à disposition"), className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-1139" },
        { href: vipHref, label: t("nav.vip", "Accueil VIP"), className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-1140" },
      ],
    },
    {
      id: "fleet",
      className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-937",
      href: fleetHref,
      label: t("nav.fleet", "Flotte"),
      hasChildren: false,
      children: [],
    },
    {
      id: "contact",
      className: "menu-item menu-item-type-post_type menu-item-object-page menu-item-935",
      href: contactHref,
      label: t("nav.contact", "Contact"),
      hasChildren: false,
      children: [],
    },
  ];

  return (
    <header
      ref={headerRef}
      data-elementor-type="header"
      data-elementor-id="25"
      className="elementor elementor-25 elementor-location-header"
      data-elementor-post-type="elementor_library"
      dir={dir}
    >
      <div
        className="elementor-element elementor-element-1e8d965 e-flex e-con-boxed e-con e-parent"
        data-id="1e8d965"
        data-element_type="container"
        data-e-type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-14377af e-con-full e-flex e-con e-child"
            data-id="14377af"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-9ee1763 elementor-widget__width-auto elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
              data-id="9ee1763"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="theme-site-logo.default"
            >
              <div className="elementor-widget-container">
                <a href={homeHref}>
                  <img
                    fetchPriority="high"
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
          </div>

          <div
            className="elementor-element elementor-element-05ed421 e-con-full e-flex e-con e-child"
            data-id="05ed421"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-8d9ea35 elementor-nav-menu--dropdown-mobile elementor-nav-menu--stretch elementor-nav-menu__align-center elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu"
              data-id="8d9ea35"
              data-element_type="widget"
              data-e-type="widget"
              data-settings='{"full_width":"stretch","layout":"horizontal","submenu_icon":{"value":"<svg aria-hidden=\"true\" class=\"e-font-icon-svg e-fas-caret-down\" viewBox=\"0 0 320 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z\"></path></svg>","library":"fa-solid"},"toggle":"burger"}'
              data-widget_type="nav-menu.default"
            >
              <div className="elementor-widget-container">
                <nav
                  aria-label="Menu"
                  className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
                >
                  <ul id="menu-1-8d9ea35" className="elementor-nav-menu">
                    {menuItems.map((item) => (
                      <li key={item.id} className={item.className}>
                        <a href={item.href} className="elementor-item">
                          {item.label}
                          {item.hasChildren && (
                            <span className="sub-arrow">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-caret-down"
                                viewBox="0 0 320 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                              </svg>
                            </span>
                          )}
                        </a>
                        {item.hasChildren && (
                          <ul className="sub-menu elementor-nav-menu--dropdown">
                            {item.children.map((subItem, idx) => (
                              <li key={idx} className={subItem.className}>
                                <a href={subItem.href} className="elementor-sub-item elementor-item-anchor">
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                <div
                  className={`elementor-menu-toggle ${isMobileMenuOpen ? "elementor-active" : ""}`}
                  role="button"
                  tabIndex={0}
                  aria-label={t("nav.toggleMenu", "Permuter le menu")}
                  aria-expanded={isMobileMenuOpen ? "true" : "false"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen((prev) => !prev);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsMobileMenuOpen((prev) => !prev);
                    }
                  }}
                >
                  <svg
                    aria-hidden="true"
                    role="presentation"
                    className="elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    role="presentation"
                    className="elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close"
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
                  </svg>
                </div>
                <nav
                  className={`elementor-nav-menu--dropdown elementor-nav-menu__container ${isMobileMenuOpen ? "is-open" : ""}`}
                  aria-hidden={!isMobileMenuOpen}
                >
                  <ul id="menu-2-8d9ea35" className="elementor-nav-menu">
                    {menuItems.map((item) => (
                      <li key={item.id} className={item.className}>
                        <a
                          href={item.href}
                          className="elementor-item"
                          tabIndex={isMobileMenuOpen ? 0 : -1}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                          {item.hasChildren && (
                            <span className="sub-arrow">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-caret-down"
                                viewBox="0 0 320 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                              </svg>
                            </span>
                          )}
                        </a>
                        {item.hasChildren && (
                          <ul className="sub-menu elementor-nav-menu--dropdown">
                            {item.children.map((subItem, idx) => (
                              <li key={idx} className={subItem.className}>
                                <a
                                  href={subItem.href}
                                  className="elementor-sub-item elementor-item-anchor"
                                  tabIndex={isMobileMenuOpen ? 0 : -1}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="mobile-menu-cta">
                    <a
                      href={reservationHref}
                      className="mobile-menu-cta-btn"
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t("common.bookNow", "Devis et réservation")}
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div
            className="elementor-element elementor-element-f12c8e6 e-con-full e-flex e-con e-child"
            data-id="f12c8e6"
            data-element_type="container"
            data-e-type="container"
          >
            <LanguageSwitcher lang={lang} currentPath={currentPath} />
          </div>

          <div
            className="elementor-element elementor-element-103e5a1 e-con-full elementor-hidden-mobile elementor-hidden-tablet e-flex e-con e-child"
            data-id="103e5a1"
            data-element_type="container"
            data-e-type="container"
          >
            <div
              className="elementor-element elementor-element-6b3c9b9 elementor-widget elementor-widget-button"
              data-id="6b3c9b9"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-md"
                    href={reservationHref}
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">{t("common.bookNow", "Devis et réservation")}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
