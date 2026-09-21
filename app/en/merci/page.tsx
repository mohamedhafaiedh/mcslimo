"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function MerciPageEn() {
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
    <div id="page" className="site">
      <a className="skip-link screen-reader-text" href="#content">Skip to content</a>
      <header data-elementor-type="header" data-elementor-id="25" className="elementor elementor-25 elementor-location-header" data-elementor-post-type="elementor_library">
        <div className="elementor-element elementor-element-1e8d965 e-flex e-con-boxed e-con e-parent" data-id="1e8d965" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-14377af e-con-full e-flex e-con e-child" data-id="14377af" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-9ee1763 elementor-widget__width-auto elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="9ee1763" data-element_type="widget" data-e-type="widget" data-widget_type="theme-site-logo.default">
                <div className="elementor-widget-container">
                  <Link href="/en"><img fetchPriority="high" width="1000" height="450" src="/images/MCS-Limo-logo-1000x450-1.png" className="attachment-full size-full wp-image-2464" alt="MCS Limo" sizes="(max-width: 1000px) 100vw, 1000px" /></Link>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-05ed421 e-con-full e-flex e-con e-child" data-id="05ed421" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-8d9ea35 elementor-nav-menu--dropdown-mobile elementor-nav-menu--stretch elementor-nav-menu__align-center elementor-nav-menu__text-align-aside elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="8d9ea35" data-element_type="widget" data-e-type="widget" data-widget_type="nav-menu.default">
                <div className="elementor-widget-container">
                  <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                    <ul id="menu-1-8d9ea35" className="elementor-nav-menu">
                      <li className="menu-item"><Link href="/en" className="elementor-item">Home</Link></li>
                      <li className="menu-item"><Link href="/en/qui-sommes-nous" className="elementor-item">About</Link></li>
                      <li className="menu-item"><Link href="/en/services" className="elementor-item">Our Services</Link></li>
                      <li className="menu-item"><Link href="/en/flotte" className="elementor-item">Fleet</Link></li>
                      <li className="menu-item"><Link href="/en/contact" className="elementor-item">Contact Us</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-103e5a1 e-con-full elementor-hidden-mobile elementor-hidden-tablet e-flex e-con e-child" data-id="103e5a1" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-6b3c9b9 elementor-widget elementor-widget-button" data-id="6b3c9b9" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link className="elementor-button elementor-button-link elementor-size-md" href="/en/reservation">
                      <span className="elementor-button-content-wrapper"><span className="elementor-button-text">Quote & Booking</span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="content" className="site-main" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px" }}>
        <div style={{ maxWidth: "680px", width: "100%", textAlign: "center", background: "#ffffff", padding: "50px 30px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)", border: "1px solid #f0f0f0" }}>
          <div style={{ width: "80px", height: "80px", margin: "0 auto 24px", background: "#e8f7ee", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#1bb35a" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px", color: "#111111" }}>Thank you for your inquiry!</h1>
          <p style={{ fontSize: "17px", lineHeight: "1.6", color: "#555555", marginBottom: "32px" }}>
            Your request has been successfully submitted. The MCS Limo team will review your details and get back to you promptly.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/en" className="elementor-button elementor-size-md" style={{ display: "inline-block", padding: "14px 28px", textDecoration: "none" }}>
              <span className="elementor-button-text">Back to Home</span>
            </Link>
            <Link href="/en/reservation" className="elementor-button elementor-size-md" style={{ display: "inline-block", padding: "14px 28px", textDecoration: "none", background: "#333333" }}>
              <span className="elementor-button-text">New Booking</span>
            </Link>
          </div>
        </div>
      </main>

      <footer data-elementor-type="footer" data-elementor-id="1218" className="elementor elementor-1218 elementor-location-footer" data-elementor-post-type="elementor_library">
        <div className="elementor-element elementor-element-15358b0 e-flex e-con-boxed e-con e-parent" data-id="15358b0" data-element_type="container" data-e-type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-8a3fc7e e-con-full e-flex e-con e-child" data-id="8a3fc7e" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-749e5b2 elementor-widget elementor-widget-text-editor" data-id="749e5b2" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">MCS Limo 2026 © All rights reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
