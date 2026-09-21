"use client";

import { useEffect } from "react";

export default function MobileMenuScript() {
  useEffect(() => {
    const handleToggle = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const toggleBtn = target?.closest(".elementor-menu-toggle");
      if (toggleBtn) {
        const parent = toggleBtn.closest(".elementor-widget-nav-menu") || document;
        const dropdown = parent.querySelector(".elementor-nav-menu--dropdown");
        if (dropdown) {
          dropdown.classList.toggle("is-open");
          toggleBtn.classList.toggle("elementor-active");
        }
      }
    };

    document.addEventListener("click", handleToggle);
    return () => document.removeEventListener("click", handleToggle);
  }, []);

  return null;
}
