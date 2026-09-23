"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HtmlLangSync() {
  const pathname = usePathname() || "";

  useEffect(() => {
    const isAr = pathname === "/ar" || pathname.startsWith("/ar/");
    const isEn = pathname === "/en" || pathname.startsWith("/en/");
    const isEs = pathname === "/es" || pathname.startsWith("/es/");
    const isIt = pathname === "/it" || pathname.startsWith("/it/");
    const html = document.documentElement;

    if (isAr) {
      html.setAttribute("lang", "ar");
      html.setAttribute("dir", "rtl");
    } else if (isEn) {
      html.setAttribute("lang", "en");
      html.setAttribute("dir", "ltr");
    } else if (isEs) {
      html.setAttribute("lang", "es");
      html.setAttribute("dir", "ltr");
    } else if (isIt) {
      html.setAttribute("lang", "it");
      html.setAttribute("dir", "ltr");
    } else {
      html.setAttribute("lang", "fr-FR");
      html.setAttribute("dir", "ltr");
    }
  }, [pathname]);

  return null;
}
