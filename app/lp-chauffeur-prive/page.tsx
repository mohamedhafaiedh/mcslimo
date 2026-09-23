"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ReservationForm from "../components/ReservationForm";
import LandingHeader from "../components/LandingHeader";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import VehicleCards from "../components/VehicleCards";
import TestimonialsSection from "../components/TestimonialsSection";
import HowToBookSection from "../components/HowToBookSection";
import SlashesDivider from "../components/SlashesDivider";

export default function LpChauffeurPrivePage() {
  const pathname = usePathname() || "";
  const isAr = pathname === "/ar" || pathname.startsWith("/ar/");
  const isEn = !isAr && pathname.startsWith("/en");
  const lang: "fr" | "en" | "ar" = isAr ? "ar" : isEn ? "en" : "fr";

  const redirectUrl = isAr
    ? "/ar/merci-lp-reservation"
    : isEn
    ? "/en/merci-lp-reservation"
    : "/merci-lp-reservation";

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
    <div id="page" className="site" dir={isAr ? "rtl" : "ltr"}>
      <a className="skip-link screen-reader-text" href="#content">
        {isAr ? "الانتقال إلى المحتوى" : isEn ? "Skip to content" : "Aller au contenu"}
      </a>
      <LandingHeader lang={lang} currentPath={pathname || "/lp-chauffeur-prive"} />

      <div
        data-elementor-type="wp-post"
        data-elementor-id="1634"
        className="elementor elementor-1634"
        data-elementor-post-type="page"
      >
        {/* HERO + FORM SECTION */}
        <div
          className="elementor-element elementor-element-b9138e8 e-flex e-con-boxed e-con e-parent"
          data-id="b9138e8"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-c0fb283 e-con-full e-flex e-con e-child"
              data-id="c0fb283"
              data-element_type="container"
              data-e-type="container"
            >
              <div
                className="elementor-element elementor-element-ffa4b96 elementor-widget elementor-widget-heading"
                data-id="ffa4b96"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {isAr
                      ? "أخصائي النقل الفاخر في باريس"
                      : isEn
                      ? "Your luxury transport specialist in Paris"
                      : "Votre spécialiste du transport de luxe à Paris"}
                  </h1>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-266ea7a elementor-widget elementor-widget-text-editor"
                data-id="266ea7a"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  {isAr
                    ? "نضع تحت تصرفكم سيارات فاخرة مع سائق لتلبية كافة احتياجاتكم"
                    : isEn
                    ? "We provide luxury cars with driver to meet your needs"
                    : "Nous mettons à votre disposition des voitures de luxe avec chauffeur pour répondre à vos besoins"}
                </div>
              </div>

              <div
                className="elementor-element elementor-element-dd021f8 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                data-id="dd021f8"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="icon-list.default"
              >
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">
                        {isAr ? "سيارات استثنائية" : isEn ? "Exceptional vehicles" : "Véhicules d’exception"}
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">
                        {isAr ? "نخبة من السائقين المحترفين" : isEn ? "Elite chauffeurs" : "Chauffeurs d’élite"}
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">
                        {isAr ? "تجربة مصممة حسب الطلب" : isEn ? "Tailor-made experience" : "Expérience sur-mesure"}
                      </span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">
                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-check" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                        </svg>
                      </span>
                      <span className="elementor-icon-list-text">
                        {isAr ? "خصوصية وهيبة" : isEn ? "Discretion & prestige" : "Discrétion & prestige"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-4ccdb49 e-con-full e-flex e-con e-child"
              data-id="4ccdb49"
              data-element_type="container"
              data-e-type="container"
              id="cntct"
              data-settings='{"background_background":"classic"}'
            >
              <div
                className="elementor-element elementor-element-3c4b535 elementor-widget elementor-widget-heading"
                data-id="3c4b535"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">
                    {isAr
                      ? "يرجى ملء النموذج للحصول على عرض أسعار مجاني عبر الإنترنت في دقائق معدودة"
                      : isEn
                      ? "Please fill out the form to get a free online quote in a few minutes"
                      : "Veuillez remplir le formulaire pour obtenir un devis gratuit en ligne en quelques minutes"}
                  </h4>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-a42d1c2 elementor-button-align-stretch elementor-widget elementor-widget-global elementor-global-2367 elementor-widget-form"
                data-id="a42d1c2"
                data-element_type="widget"
                data-e-type="widget"
                data-settings='{"step_next_label":"Suivant","step_previous_label":"Précédent","button_width":"100","step_type":"number_text","step_icon_shape":"circle"}'
                data-widget_type="form.default"
              >
                <div className="elementor-widget-container">
                  <ReservationForm lang={lang} redirectUrl={redirectUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST BANNER */}
        <div
          className="elementor-element elementor-element-b55f6ee e-flex e-con-boxed e-con e-parent"
          data-id="b55f6ee"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-940308a e-flex e-con-boxed e-con e-child"
              data-id="940308a"
              data-element_type="container"
              data-e-type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-0b33589 elementor-widget elementor-widget-heading"
                  data-id="0b33589"
                  data-element_type="widget"
                  data-e-type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h4 className="elementor-heading-title elementor-size-default">
                      {isAr
                        ? "عشرات المحترفين والأفراد يضعون ثقتهم بنا كل يوم..."
                        : isEn
                        ? "Dozens of professionals and individuals trust us every day..."
                        : "Des dizaines de professionnels et particuliers nous font confiance chaque jour..."}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PARTNER LOGOS */}
        <div
          className="elementor-element elementor-element-64388fb e-flex e-con-boxed e-con e-parent"
          data-id="64388fb"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-cdea823 e-con-full e-flex e-con e-child" data-id="cdea823" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-2edfe16 elementor-widget elementor-widget-image" data-id="2edfe16" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" width="500" height="111" src="/images/uniformation.png" className="attachment-large size-large wp-image-321" alt="Partenaire Uniformation - MCS Limo" sizes="(max-width: 500px) 100vw, 500px" />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-a405af5 e-con-full e-flex e-con e-child" data-id="a405af5" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-a42efd7 elementor-widget elementor-widget-image" data-id="a42efd7" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" width="800" height="124" src="/images/2560px-Prada-Logo.svg-1024x159-1.webp" className="attachment-large size-large wp-image-197" alt="Client de prestige Prada - MCS Limo" sizes="(max-width: 800px) 100vw, 800px" />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-55a2cba e-con-full e-flex e-con e-child" data-id="55a2cba" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-b1cdc49 elementor-widget elementor-widget-image" data-id="b1cdc49" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" width="800" height="219" src="/images/1200px-Vaisala_logo.svg.png" className="attachment-large size-large wp-image-196" alt="Client entreprise Vaisala - MCS Limo" sizes="(max-width: 800px) 100vw, 800px" />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-c09c0da e-con-full e-flex e-con e-child" data-id="c09c0da" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-abab67b elementor-widget elementor-widget-image" data-id="abab67b" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" width="800" height="134" src="/images/ETSGlobal_logo.a83452a9.png" className="attachment-large size-large wp-image-199" alt="Client entreprise ETS Global - MCS Limo" sizes="(max-width: 800px) 100vw, 800px" />
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-247deb8 e-con-full e-flex e-con e-child" data-id="247deb8" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-89bd1dc elementor-widget elementor-widget-image" data-id="89bd1dc" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" width="209" height="64" src="/images/cq5dam.web_.1280.1280.webp" className="attachment-large size-large wp-image-198" alt="Partenaire entreprise de prestige - MCS Limo" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <section className="services-section-wrapper" id="services" style={{ backgroundColor: "#ffffff", width: "100%" }}>
          <div
            className="elementor-element elementor-element-90115f2 e-flex e-con-boxed e-con e-parent"
            data-id="90115f2"
            data-element_type="container"
            data-e-type="container"
            style={{ backgroundColor: "#ffffff", width: "100%" }}
          >
            <div className="e-con-inner" style={{ textAlign: "center", width: "100%", backgroundColor: "#ffffff" }}>
              <div
                className="elementor-element elementor-element-4f948e4 elementor-widget elementor-widget-heading"
                data-id="4f948e4"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="heading.default"
                style={{ textAlign: "center", width: "100%", backgroundColor: "#ffffff" }}
              >
                <div className="elementor-widget-container" style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
                  <h2 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center", backgroundColor: "#ffffff" }}>
                    {isAr ? "خدماتنا" : isEn ? "Our Services" : "Nos Services"}
                  </h2>
                </div>
              </div>

              <SlashesDivider className="elementor-element-292d945" align="center" width="80px" color="%23C09E5B" />

              <div
                className="elementor-element elementor-element-8720de5 elementor-widget elementor-widget-text-editor"
                data-id="8720de5"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="text-editor.default"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                  {isAr
                    ? "نقدم لكم خدمات مخصصة تلبي كافة احتياجاتكم"
                    : isEn
                    ? "We offer bespoke services tailored to your needs"
                    : "Nous vous offrons des services sur-mesure qui s’adaptent à vos besoins"}
                </div>
              </div>
            </div>
          </div>

          {/* 3 SERVICES CARDS */}
          <div
            className="elementor-element elementor-element-34308d5 e-flex e-con-boxed e-con e-parent"
            data-id="34308d5"
            data-element_type="container"
            data-e-type="container"
            style={{ backgroundColor: "#ffffff", width: "100%" }}
          >
            <div className="e-con-inner" style={{ backgroundColor: "#ffffff" }}>
              {/* Transferts */}
              <div
                className="elementor-element elementor-element-2aaa3e1 e-con-full e-flex e-con e-child"
                data-id="2aaa3e1"
                data-element_type="container"
                data-e-type="container"
                id="transferts"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="elementor-element elementor-element-7d637c0 elementor-widget elementor-widget-image" data-id="7d637c0" data-element_type="widget" data-e-type="widget" data-widget_type="image.default" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    <img decoding="async" width="450" height="300" src="/images/MCS-Services-5.jpg" className="attachment-large size-large wp-image-2454" alt="Transfert aéroport et gare avec chauffeur privé à Paris" sizes="(max-width: 450px) 100vw, 450px" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-044593b elementor-widget elementor-widget-heading" data-id="044593b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    <h3 className="elementor-heading-title elementor-size-default" style={{ backgroundColor: "#ffffff" }}>
                      {isAr ? "التنقلات" : isEn ? "Transfers" : "Transferts"}
                    </h3>
                  </div>
                </div>
                <div className="elementor-element elementor-element-ddb7642 elementor-widget elementor-widget-text-editor" data-id="ddb7642" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    <p style={{ backgroundColor: "#ffffff" }}>
                      {isAr
                        ? "لجميع رحلاتكم في باريس من أو إلى محطات القطار والمطارات الباريسية، أو الرحلات الطويلة من وإلى باريس"
                        : isEn
                        ? "For all your journeys in Paris to or from Parisian train stations or airports, as well as long-distance journeys to/from Paris"
                        : "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mises à disposition */}
              <div
                className="elementor-element elementor-element-0b98ee2 e-con-full e-flex e-con e-child"
                data-id="0b98ee2"
                data-element_type="container"
                data-e-type="container"
                id="mad"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="elementor-element elementor-element-4a2026d elementor-widget elementor-widget-image" data-id="4a2026d" data-element_type="widget" data-e-type="widget" data-widget_type="image.default" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    <img decoding="async" width="450" height="300" src="/images/MCS-Services-4.jpg" className="attachment-large size-large wp-image-2453" alt="Mise à disposition de véhicule avec chauffeur à Paris" sizes="(max-width: 450px) 100vw, 450px" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-035a507 elementor-widget elementor-widget-heading" data-id="035a507" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    <h3 className="elementor-heading-title elementor-size-default" style={{ backgroundColor: "#ffffff" }}>
                      {isAr ? "تحت الطلب بالساعة" : isEn ? "Hourly As Directed" : "Mises à disposition"}
                    </h3>
                  </div>
                </div>
                <div className="elementor-element elementor-element-fd9663b elementor-widget elementor-widget-text-editor" data-id="fd9663b" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    {isAr
                      ? "احجز سائقك للمدة التي تناسبك وستظل سيارتنا جاهزة لمرافقتك إلى جميع وجهاتك"
                      : isEn
                      ? "Book your chauffeur for the duration that suits you and our vehicle will remain at your disposal to take you to your destinations"
                      : "Réservez votre chauffeur pour la durée qui vous convient et notre véhicule restera mobilisé pour vous conduire vers vos destinations"}
                  </div>
                </div>
              </div>

              {/* Accueil VIP */}
              <div
                className="elementor-element elementor-element-a4cf959 e-con-full e-flex e-con e-child"
                data-id="a4cf959"
                data-element_type="container"
                data-e-type="container"
                id="vip"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="elementor-element elementor-element-468d8d6 elementor-widget elementor-widget-image" data-id="468d8d6" data-element_type="widget" data-e-type="widget" data-widget_type="image.default" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    <img decoding="async" width="450" height="300" src="/images/MCS-Services-8.jpg" className="attachment-large size-large wp-image-2457" alt="Accueil VIP et service greeter personnalisé à Paris" sizes="(max-width: 450px) 100vw, 450px" />
                  </div>
                </div>
                <div className="elementor-element elementor-element-a926567 elementor-widget elementor-widget-heading" data-id="a926567" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    <h3 className="elementor-heading-title elementor-size-default" style={{ backgroundColor: "#ffffff" }}>
                      {isAr ? "الاستقبال الخاص (VIP)" : isEn ? "VIP Welcome" : "Accueil VIP"}
                    </h3>
                  </div>
                </div>
                <div className="elementor-element elementor-element-7292a37 elementor-widget elementor-widget-text-editor" data-id="7292a37" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                    {isAr
                      ? "لمرافقتكم طوال مساركم بين باب الطائرة وباب سيارتكم مع ضمان مرور ذي أولوية"
                      : isEn
                      ? "To escort you throughout your journey between the aircraft door and your vehicle, providing you with priority fast-track access"
                      : "Pour vous accompagner le long de votre trajet entre la porte de l’avion et celle de votre véhicule et vous accorder un passage prioritaire"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BUTTON CTA */}
          <div
            className="elementor-element elementor-element-9666335 e-flex e-con-boxed e-con e-parent"
            data-id="9666335"
            data-element_type="container"
            data-e-type="container"
            style={{ backgroundColor: "#ffffff", width: "100%" }}
          >
            <div className="e-con-inner" style={{ backgroundColor: "#ffffff" }}>
              <div
                className="elementor-element elementor-element-521fa7b elementor-align-center elementor-widget elementor-widget-button"
                data-id="521fa7b"
                data-element_type="widget"
                data-e-type="widget"
                data-widget_type="button.default"
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="elementor-widget-container" style={{ backgroundColor: "#ffffff" }}>
                  <div className="elementor-button-wrapper" style={{ backgroundColor: "#ffffff" }}>
                    <a className="elementor-button elementor-button-link elementor-size-md" href="#cntct">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          {isAr
                            ? "الحصول على عرض أسعار مجاني عبر الإنترنت"
                            : isEn
                            ? "Get a free quote online"
                            : "Obtenir un devis gratuit en ligne"}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SECTION */}
        <WhyChooseUsSection lang={lang} />

        {/* BUTTON CTA */}
        <div
          className="elementor-element elementor-element-6a91991 e-flex e-con-boxed e-con e-parent"
          data-id="6a91991"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
          style={{ backgroundColor: "#f5f5f5", background: "#f5f5f5", width: "100%", margin: "0", paddingBottom: "60px" }}
        >
          <div className="e-con-inner" style={{ backgroundColor: "#f5f5f5", background: "#f5f5f5" }}>
            <div
              className="elementor-element elementor-element-286091f elementor-align-center elementor-widget elementor-widget-button"
              data-id="286091f"
              data-element_type="widget"
              data-e-type="widget"
              data-widget_type="button.default"
              style={{ backgroundColor: "#f5f5f5", background: "#f5f5f5" }}
            >
              <div className="elementor-widget-container" style={{ backgroundColor: "#f5f5f5", background: "#f5f5f5" }}>
                <div className="elementor-button-wrapper" style={{ backgroundColor: "#f5f5f5", background: "#f5f5f5" }}>
                  <a className="elementor-button elementor-button-link elementor-size-md" href="#cntct">
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">
                        {isAr
                          ? "الحصول على عرض أسعار مجاني عبر الإنترنت"
                          : isEn
                          ? "Get a free quote online"
                          : "Obtenir un devis gratuit en ligne"}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FLEET SECTION */}
        <section
          className="vehicles-section-wrapper"
          id="flotte"
          style={{
            backgroundColor: "#ffffff",
            background: "#ffffff",
            width: "100%",
            maxWidth: "100%",
            margin: "0",
            padding: "60px 0",
            display: "block",
          }}
        >
          <VehicleCards lang={lang} showPrices={true} />
        </section>

        {/* REVIEWS SECTION */}
        <TestimonialsSection lang={lang} />

        {/* HOW TO BOOK */}
        <HowToBookSection lang={lang} />

        {/* ABOUT SECTION */}
        <div
          className="elementor-element elementor-element-196139f e-flex e-con-boxed e-con e-parent"
          data-id="196139f"
          data-element_type="container"
          data-e-type="container"
          id="apropos"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner" style={{ textAlign: "center", width: "100%" }}>
            <div className="elementor-element elementor-element-685a191 elementor-widget elementor-widget-heading" data-id="685a191" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ textAlign: "center", width: "100%" }}>
              <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                <h2 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center" }}>
                  {isAr ? "عن شركة MCS Limo" : isEn ? "About MCS Limo" : "A propos de MCS Limo"}
                </h2>
              </div>
            </div>
            <SlashesDivider className="elementor-element-1e9ec22" align="center" width="80px" color="%23C09E5B" />
          </div>
        </div>

        {/* ABOUT CONTENT */}
        <div
          className="elementor-element elementor-element-775267c e-flex e-con-boxed e-con e-parent"
          data-id="775267c"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-57023d5 e-con-full e-flex e-con e-child" data-id="57023d5" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-a8972d1 elementor-widget elementor-widget-text-editor" data-id="a8972d1" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  {isAr ? (
                    <>
                      <p>شركة MCS Limo هي شركة نقل ركاب متخصصة تقدم خدمة راقية ومصممة حسب الطلب، من خلال وضع نخبة من السائقين الخاصين المحترفين مع أحدث السيارات الفاخرة تحت تصرف عملائها.</p>
                      <p>تتواجد MCS Limo في فرنسا وكذلك في كبرى مدن العالم (برلين، فرانكفورت، مدريد، برشلونة، نيويورك، واشنطن، ميامي، طوكيو، سيدني...) لمرافقة عملائها من الشركات والأفراد في تنقلاتهم وتقديم نفس المعايير العالية من الجودة والتميز أينما ذهبوا.</p>
                    </>
                  ) : isEn ? (
                    <>
                      <p>MCS Limo is a passenger transport company offering a tailor-made, high-end service by providing its clients with professional private chauffeurs and luxury vehicles.</p>
                      <p>MCS Limo operates in France as well as in major cities worldwide (Berlin, Frankfurt, Madrid, Barcelona, New York, Washington, Miami, Tokyo, Sydney…) to assist business and leisure clients with the same uncompromising standard of quality wherever they travel.</p>
                    </>
                  ) : (
                    <>
                      <p>MCS Limo est une entreprise de transport de personnes offrant un service sur-mesure et haut de gamme en mettant à disposition de sa clientèle des chauffeurs privés professionnels avec des voitures de luxe.</p>
                      <p>MCS Limo est présente aussi bien en France que dans les plus grandes villes du monde (Berlin, Francfort, Madrid, Barcelone, New York, Washington, Miami, Tokyo, Sydney…) pour accompagner sa clientèle de professionnels et particuliers lors de ses déplacements pour lui offrir le même standard de qualité là où elle se déplace.</p>
                    </>
                  )}
                </div>
              </div>
              <div className="elementor-element elementor-element-3054734 elementor-align-center elementor-widget elementor-widget-button" data-id="3054734" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a className="elementor-button elementor-button-link elementor-size-md" href="#cntct">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          {isAr
                            ? "الحصول على عرض أسعار مجاني عبر الإنترنت"
                            : isEn
                            ? "Get a free quote online"
                            : "Obtenir un devis gratuit en ligne"}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-c4cf562 e-con-full e-flex e-con e-child" data-id="c4cf562" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-f548b89 elementor-widget elementor-widget-image" data-id="f548b89" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img decoding="async" width="450" height="300" src="/images/MCS-Services-7.jpg" className="attachment-large size-large wp-image-2456" alt="Flotte de berlines et vans de luxe avec chauffeur privé - MCS Limo" sizes="(max-width: 450px) 100vw, 450px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        data-elementor-type="footer"
        data-elementor-id="1218"
        className="elementor elementor-1218 elementor-location-footer"
        data-elementor-post-type="elementor_library"
      >
        <div
          className="elementor-element elementor-element-b7c3d2e e-flex e-con-boxed e-con e-parent"
          data-id="b7c3d2e"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-1cbe6de e-con-full e-flex e-con e-child" data-id="1cbe6de" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-5f462c5 elementor-widget__width-auto elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="5f462c5" data-element_type="widget" data-e-type="widget" data-widget_type="theme-site-logo.default">
                <div className="elementor-widget-container">
                  <Link href={isAr ? "/ar" : isEn ? "/en" : "/"}>
                    <img width="1000" height="450" src="/images/MCS-Limo-logo-1000x450-1.png" className="attachment-full size-full wp-image-2464" alt="MCS Limo - Chauffeur privé de prestige à Paris" sizes="(max-width: 1000px) 100vw, 1000px" />
                  </Link>
                </div>
              </div>
              <div className="elementor-element elementor-element-0dcc8f2 elementor-widget elementor-widget-text-editor" data-id="0dcc8f2" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  {isAr
                    ? "شركة سائق خاص في باريس وحول العالم تقدم لكم خدمات نقل فاخرة ومصممة خصيصاً لتلبية تطلعاتكم"
                    : isEn
                    ? "Private chauffeur company in Paris and worldwide offering high-end and bespoke transportation services"
                    : "Société de chauffeur privé à Paris et partout dans le monde qui vous offre un service de transport haut de gamme et sur mesure"}
                </div>
              </div>
            </div>

            {/* Menu column */}
            <div className="elementor-element elementor-element-dfbf32e e-con-full e-flex e-con e-child" data-id="dfbf32e" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-5bc741d elementor-widget elementor-widget-heading" data-id="5bc741d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    {isAr ? "القائمة" : isEn ? "Menu" : "Menu"}
                  </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-6542aad elementor-nav-menu__align-start elementor-nav-menu--dropdown-none ftrmn elementor-widget elementor-widget-nav-menu" data-id="6542aad" data-element_type="widget" data-e-type="widget" data-widget_type="nav-menu.default">
                <div className="elementor-widget-container">
                  <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-none">
                    <ul id="menu-1-6542aad" className="elementor-nav-menu sm-vertical">
                      <li className="menu-item">
                        <Link href={isAr ? "/ar/qui-sommes-nous" : isEn ? "/en/qui-sommes-nous" : "/qui-sommes-nous"} className="elementor-item">
                          {isAr ? "من نحن" : isEn ? "About Us" : "Qui sommes-nous"}
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href={isAr ? "/ar/services" : isEn ? "/en/services" : "/services"} className="elementor-item">
                          {isAr ? "خدماتنا" : isEn ? "Our Services" : "Nos Services"}
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href={isAr ? "/ar/flotte" : isEn ? "/en/flotte" : "/flotte"} className="elementor-item">
                          {isAr ? "أسطولنا" : isEn ? "Our Fleet" : "Notre flotte"}
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href={isAr ? "/ar/contact" : isEn ? "/en/contact" : "/contact"} className="elementor-item">
                          {isAr ? "اتصل بنا" : isEn ? "Contact Us" : "Nous contacter"}
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href={isAr ? "/ar/reservation" : isEn ? "/en/reservation" : "/reservation"} className="elementor-item">
                          {isAr ? "الحجز عبر الإنترنت" : isEn ? "Online Booking" : "Réservation en ligne"}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Contact column */}
            <div className="elementor-element elementor-element-e1a08ed e-con-full e-flex e-con e-child" data-id="e1a08ed" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-cafce5b elementor-widget elementor-widget-heading" data-id="cafce5b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    {isAr ? "اتصل بنا" : isEn ? "Contact Us" : "Nous contacter"}
                  </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-6cd13eb und elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="6cd13eb" data-element_type="widget" data-e-type="widget" data-widget_type="icon-list.default">
                <div className="elementor-widget-container">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-text">10 Place Lucien Boilleau, 91420 Morangis</span>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="mailto:contact@mcslimo.fr">
                        <span className="elementor-icon-list-text">contact@mcslimo.fr</span>
                      </a>
                    </li>
                    <li className="elementor-icon-list-item">
                      <a href="tel:+33189480296">
                        <span className="elementor-icon-list-text">+33 1 89 48 02 96</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="elementor-element elementor-element-036edaf elementor-widget elementor-widget-image" data-id="036edaf" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <img width="268" height="20" src="/images/pay.png" className="attachment-large size-large wp-image-238" alt="Moyens de paiement sécurisés Visa, Mastercard, American Express" />
                </div>
              </div>
              <div className="elementor-element elementor-element-2455f23 elementor-widget elementor-widget-text-editor" data-id="2455f23" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>{isAr ? "جميع المدفوعات آمنة ومحمية" : isEn ? "All payments are secure" : "Tous les paiements sont sécurisés"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT & LEGAL */}
        <div
          className="elementor-element elementor-element-15358b0 e-flex e-con-boxed e-con e-parent"
          data-id="15358b0"
          data-element_type="container"
          data-e-type="container"
          data-settings='{"background_background":"classic"}'
        >
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-8a3fc7e e-con-full e-flex e-con e-child" data-id="8a3fc7e" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-749e5b2 elementor-widget elementor-widget-text-editor" data-id="749e5b2" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  {isAr
                    ? "MCS Limo 2026 © جميع الحقوق محفوظة."
                    : isEn
                    ? "MCS Limo 2026 © All rights reserved."
                    : "MCS Limo 2026 © Tous droits réservés."}
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-73bbe7a e-con-full e-flex e-con e-child" data-id="73bbe7a" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-d9c42a0 elementor-nav-menu__align-start elementor-nav-menu--dropdown-none ftrmn elementor-widget elementor-widget-nav-menu" data-id="d9c42a0" data-element_type="widget" data-e-type="widget" data-widget_type="nav-menu.default">
                <div className="elementor-widget-container">
                  <nav aria-label="Menu" className="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none">
                    <ul id="menu-1-d9c42a0" className="elementor-nav-menu">
                      <li className="menu-item">
                        <Link href={isAr ? "/ar/mentions-legales" : isEn ? "/en/mentions-legales" : "/mentions-legales"} className="elementor-item">
                          {isAr ? "إشعار قانوني" : isEn ? "Legal Notice" : "Mentions légales"}
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href={isAr ? "/ar/cgv" : isEn ? "/en/cgv" : "/cgv"} className="elementor-item">
                          {isAr ? "الشروط العامة للخدمة" : isEn ? "Terms & Conditions" : "CGV"}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
