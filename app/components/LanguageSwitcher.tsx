"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LanguageSwitcherProps {
  lang: "fr" | "en";
  currentPath?: string;
  className?: string;
}

export default function LanguageSwitcher({
  lang,
  currentPath,
  className = "",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);

  const effectivePath = currentPath || pathname || (lang === "fr" ? "/" : "/en");

  // Compute the target route when switching language
  const switchTarget =
    lang === "fr"
      ? effectivePath.startsWith("/en")
        ? effectivePath
        : `/en${effectivePath === "/" ? "" : effectivePath}`
      : effectivePath.startsWith("/en")
      ? effectivePath.replace(/^\/en/, "") || "/"
      : effectivePath;

  // Handle outside click to close dropdown on touch / mobile devices
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleDropdown(e);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`elementor-element elementor-element-6acbd4f elementor-widget elementor-widget-nav-menu ${className}`}
      data-id="6acbd4f"
      data-element_type="widget"
      data-e-type="widget"
      data-widget_type="nav-menu.default"
    >
      <div className="elementor-widget-container">
        <nav
          aria-label={lang === "fr" ? "Sélection de la langue" : "Language selection"}
          className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"
        >
          <ul id="menu-lang-switcher" className="elementor-nav-menu">
            <li
              ref={containerRef}
              className={`menu-item menu-item-has-children trp-language-switcher-container ${
                isOpen ? "trp-ls-open" : ""
              }`}
            >
              <div
                className="elementor-item trp-ls-current-link"
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                aria-label={lang === "fr" ? "Langue actuelle : Français" : "Current language: English"}
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
              >
                <img
                  className="trp-flag-image"
                  src={lang === "fr" ? "/images/fr_FR.png" : "/images/en_US.png"}
                  width="18"
                  height="12"
                  alt={lang === "fr" ? "FR" : "EN"}
                  title={lang === "fr" ? "Français" : "English"}
                />
                <span className="trp-ls-language-name">
                  {lang === "fr" ? "FR" : "EN"}
                </span>
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
              </div>

              <ul
                className={`sub-menu elementor-nav-menu--dropdown trp-dropdown-menu ${
                  isOpen ? "trp-dropdown-visible" : ""
                }`}
              >
                <li className="menu-item">
                  <Link
                    href={switchTarget}
                    className="elementor-sub-item"
                    onClick={() => setIsOpen(false)}
                  >
                    <img
                      className="trp-flag-image"
                      src={lang === "fr" ? "/images/en_US.png" : "/images/fr_FR.png"}
                      width="18"
                      height="12"
                      alt={lang === "fr" ? "EN" : "FR"}
                      title={lang === "fr" ? "English" : "Français"}
                    />
                    <span className="trp-ls-language-name">
                      {lang === "fr" ? "EN" : "FR"}
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
