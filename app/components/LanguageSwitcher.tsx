"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SupportedLang = "fr" | "en" | "ar";

interface LanguageSwitcherProps {
  lang: SupportedLang;
  currentPath?: string;
  className?: string;
}

const LANGUAGES: { code: SupportedLang; label: string; name: string }[] = [
  { code: "fr", label: "FR", name: "Français" },
  { code: "en", label: "EN", name: "English" },
  { code: "ar", label: "AR", name: "العربية" },
];

function FlagIcon({ code }: { code: SupportedLang }) {
  if (code === "fr") {
    return (
      <img
        className="trp-flag-image"
        src="/images/fr_FR.png"
        width="18"
        height="12"
        alt="FR"
        title="Français"
      />
    );
  }
  if (code === "en") {
    return (
      <img
        className="trp-flag-image"
        src="/images/en_US.png"
        width="18"
        height="12"
        alt="EN"
        title="English"
      />
    );
  }
  return (
    <svg
      className="trp-flag-image"
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", borderRadius: "1px" }}
      aria-label="العربية"
    >
      <rect width="18" height="12" fill="#007A3D" />
      <rect y="4" width="18" height="4" fill="#FFFFFF" />
      <rect y="8" width="18" height="4" fill="#000000" />
      <polygon points="0,0 6,6 0,12" fill="#CE1126" />
    </svg>
  );
}

export default function LanguageSwitcher({
  lang,
  currentPath,
  className = "",
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);

  const rawPath = currentPath || pathname || (lang === "fr" ? "/" : lang === "en" ? "/en" : "/ar");

  // Extract clean base path without locale prefix
  let basePath = rawPath;
  if (basePath.startsWith("/en")) {
    basePath = basePath.replace(/^\/en/, "") || "/";
  } else if (basePath.startsWith("/ar")) {
    basePath = basePath.replace(/^\/ar/, "") || "/";
  }
  if (!basePath.startsWith("/")) {
    basePath = "/" + basePath;
  }

  const getTargetForLang = (targetLang: SupportedLang) => {
    if (targetLang === "fr") {
      return basePath === "" ? "/" : basePath;
    }
    if (targetLang === "en") {
      return basePath === "/" ? "/en" : `/en${basePath}`;
    }
    return basePath === "/" ? "/ar" : `/ar${basePath}`;
  };

  // Other languages to show in dropdown
  const otherLanguages = LANGUAGES.filter((l) => l.code !== lang);

  // Handle outside click to close dropdown
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

  const currentLangObj = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

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
          aria-label={
            lang === "fr"
              ? "Sélection de la langue"
              : lang === "en"
              ? "Language selection"
              : "اختيار اللغة"
          }
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
                aria-label={`Langue : ${currentLangObj.name}`}
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
              >
                <FlagIcon code={lang} />
                <span className="trp-ls-language-name ml-1.5">
                  {currentLangObj.label}
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
                className={`sub-menu elementor-nav-menu--dropdown trp-dropdown-menu text-left ${
                  isOpen ? "trp-dropdown-visible" : ""
                }`}
                style={{
                  direction: "ltr",
                  textAlign: "left",
                  width: "max-content",
                  minWidth: "max-content",
                  padding: "6px 0",
                }}
              >
                {otherLanguages.map((other) => (
                  <li key={other.code} className="menu-item w-full text-left" style={{ width: "100%" }}>
                    <Link
                      href={getTargetForLang(other.code)}
                      className="elementor-sub-item flex items-center justify-start text-left gap-2 w-full whitespace-nowrap"
                      onClick={() => setIsOpen(false)}
                      style={{
                        direction: "ltr",
                        textAlign: "left",
                        justifyContent: "flex-start",
                        padding: "10px 16px",
                        width: "100%",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <FlagIcon code={other.code} />
                      <span className="trp-ls-language-name text-left whitespace-nowrap">
                        {other.label} - {other.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
