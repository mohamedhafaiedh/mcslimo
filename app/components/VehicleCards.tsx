"use client";

import React from "react";
import { useTranslation, Locale } from "@/lib/useTranslation";

interface VehicleCardsProps {
  lang?: string;
  showPrices?: boolean;
}

export default function VehicleCards({ lang, showPrices = false }: VehicleCardsProps) {
  const { t } = useTranslation(lang as Locale | undefined);

  const vehicles = [
    {
      category: t("vehicles.business.category", "Business"),
      name: t("vehicles.business.name", "Mercedes Classe E"),
      price: t("vehicles.business.price", "A partir de 80€"),
      img: "/images/eclass.png",
      alt: t("vehicles.business.alt", "Mercedes Classe E berline avec chauffeur privé - MCS Limo"),
      passengers: t("vehicles.business.passengers", "Jusqu'à 3 passagers"),
      luggage: t("vehicles.business.luggage", "Jusqu'à 3 bagages"),
      wifi: t("vehicles.features.wifi", "Wi-Fi"),
      refreshment: t("vehicles.features.refreshment", "Rafraichissement"),
      childSeats: t("vehicles.features.childSeats", "Sièges enfants"),
    },
    {
      category: t("vehicles.van.category", "VAN"),
      name: t("vehicles.van.name", "Mercedes Classe V"),
      price: t("vehicles.van.price", "A partir de 90€"),
      img: "/images/vclass.png",
      alt: t("vehicles.van.alt", "Mercedes Classe V van spacieux avec chauffeur - MCS Limo"),
      passengers: t("vehicles.van.passengers", "Jusqu'à 7 passagers"),
      luggage: t("vehicles.van.luggage", "Jusqu'à 7 bagages"),
      wifi: t("vehicles.features.wifi", "Wi-Fi"),
      refreshment: t("vehicles.features.refreshment", "Rafraichissement"),
      childSeats: t("vehicles.features.childSeats", "Sièges enfants"),
    },
    {
      category: t("vehicles.luxe.category", "Luxe"),
      name: t("vehicles.luxe.name", "Mercedes Classe S"),
      price: t("vehicles.luxe.price", "A partir de 110€"),
      img: "/images/sclass.png",
      alt: t("vehicles.luxe.alt", "Mercedes Classe S limousine de prestige avec chauffeur - MCS Limo"),
      passengers: t("vehicles.luxe.passengers", "Jusqu'à 3 passagers"),
      luggage: t("vehicles.luxe.luggage", "Jusqu'à 3 bagages"),
      wifi: t("vehicles.features.wifi", "Wi-Fi"),
      refreshment: t("vehicles.features.refreshment", "Rafraichissement"),
      childSeats: t("vehicles.features.childSeats", "Sièges enfants"),
    },
    {
      category: t("vehicles.hybrid.category", "Luxe"),
      name: t("vehicles.hybrid.name", "Mercedes Classe S 580e"),
      price: t("vehicles.hybrid.price", "A partir de 130€"),
      img: "/images/sclass.png",
      alt: t("vehicles.hybrid.alt", "Mercedes Classe S 580e limousine de prestige avec chauffeur - MCS Limo"),
      passengers: t("vehicles.hybrid.passengers", "Jusqu'à 3 passagers"),
      luggage: t("vehicles.hybrid.luggage", "Jusqu'à 3 bagages"),
      wifi: t("vehicles.features.wifi", "Wi-Fi"),
      refreshment: t("vehicles.features.refreshment", "Rafraichissement"),
      childSeats: t("vehicles.features.childSeats", "Sièges enfants"),
    },
  ];

  return (
    <div
      className="elementor-element elementor-element-d31aa11 e-flex e-con-boxed e-con e-parent"
      data-id="d31aa11"
      data-element_type="container"
      data-e-type="container"
    >
      <div className="e-con-inner fleet-grid">
        {vehicles.map((v, i) => (
          <div
            key={i}
            className="elementor-element e-con-full e-flex e-con e-child vehicle-box-card"
            data-element_type="container"
            data-e-type="container"
          >
            {/* Category */}
            <div className="elementor-element elementor-widget elementor-widget-heading" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h4 className="elementor-heading-title elementor-size-default">{v.category}</h4>
              </div>
            </div>

            {/* Vehicle Name */}
            <div className="elementor-element elementor-widget elementor-widget-heading" data-element_type="widget" data-widget_type="heading.default">
              <div className="elementor-widget-container">
                <h6 className="elementor-heading-title elementor-size-default">{v.name}</h6>
              </div>
            </div>

            {/* Price (if showPrices is true) */}
            {showPrices && (
              <div className="elementor-element elementor-widget elementor-widget-heading" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default" style={{ color: "#d90429", fontWeight: "700" }}>
                    {v.price}
                  </h6>
                </div>
              </div>
            )}

            {/* Image */}
            <div className="elementor-element elementor-widget elementor-widget-image" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-widget-container">
                <img
                  decoding="async"
                  width="300"
                  height="232"
                  src={v.img}
                  className="attachment-medium size-medium"
                  alt={v.alt}
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </div>
            </div>

            {/* Features List with Icons */}
            <div
              className="elementor-element elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-element_type="widget"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  {/* Passengers */}
                  <li className="elementor-icon-list-item" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="elementor-icon-list-icon" style={{ color: "var(--e-global-color-accent, #C09E5B)", display: "inline-flex", alignItems: "center" }}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-users" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" style={{ width: "16px", height: "16px", fill: "currentColor" }}>
                        <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                      </svg>
                    </span>
                    <span className="elementor-icon-list-text">{v.passengers}</span>
                  </li>

                  {/* Luggage */}
                  <li className="elementor-icon-list-item" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="elementor-icon-list-icon" style={{ color: "var(--e-global-color-accent, #C09E5B)", display: "inline-flex", alignItems: "center" }}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-suitcase" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{ width: "16px", height: "16px", fill: "currentColor" }}>
                        <path d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z" />
                      </svg>
                    </span>
                    <span className="elementor-icon-list-text">{v.luggage}</span>
                  </li>

                  {/* Wi-Fi */}
                  <li className="elementor-icon-list-item" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="elementor-icon-list-icon" style={{ color: "var(--e-global-color-accent, #C09E5B)", display: "inline-flex", alignItems: "center" }}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-wifi" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" style={{ width: "16px", height: "16px", fill: "currentColor" }}>
                        <path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z" />
                      </svg>
                    </span>
                    <span className="elementor-icon-list-text">{v.wifi}</span>
                  </li>

                  {/* Refreshments */}
                  <li className="elementor-icon-list-item" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="elementor-icon-list-icon" style={{ color: "var(--e-global-color-accent, #C09E5B)", display: "inline-flex", alignItems: "center" }}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-water" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" style={{ width: "16px", height: "16px", fill: "currentColor" }}>
                        <path d="M562.1 383.9c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144c-21.5-2.4-42.1-10.5-57.9-22.9-14.1-11.1-34.2-11.3-48.2 0-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3zm0-144C540.6 93.4 520 85.4 504.2 73 490.1 61.9 470 61.7 456 73c-37.9 30.4-107.2 30.4-145.7-1.5-13.5-11.2-33-9.1-46.7 1.8-38 30.1-106.9 30-145.2-1.7-13.5-11.2-33.3-8.9-47.1 2-15.5 12.2-36 20.1-57.7 22.4-7.9.8-13.6 7.8-13.6 15.7v32.2c0 9.1 7.6 16.8 16.7 16 28.8-2.5 56.1-11.4 79.4-25.9 56.5 34.6 137 34.1 192 0 56.5 34.6 137 34.1 192 0 23.3 14.2 50.9 23.3 79.1 25.8 9.1.8 16.7-6.9 16.7-16v-31.6c.1-8-5.7-15.4-13.8-16.3z" />
                      </svg>
                    </span>
                    <span className="elementor-icon-list-text">{v.refreshment}</span>
                  </li>

                  {/* Child Seats */}
                  <li className="elementor-icon-list-item" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span className="elementor-icon-list-icon" style={{ color: "var(--e-global-color-accent, #C09E5B)", display: "inline-flex", alignItems: "center" }}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-baby" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" style={{ width: "16px", height: "16px", fill: "currentColor" }}>
                        <path d="M192 160c44.2 0 80-35.8 80-80S236.2 0 192 0s-80 35.8-80 80 35.8 80 80 80zm-53.4 248.8l25.6-32-61.5-51.2L56.8 383c-11.4 14.2-11.7 34.4-.8 49l48 64c7.9 10.5 19.9 16 32 16 8.3 0 16.8-2.6 24-8 17.7-13.2 21.2-38.3 8-56l-29.4-39.2zm142.7-83.2l-61.5 51.2 25.6 32L216 448c-13.2 17.7-9.7 42.8 8 56 7.2 5.4 15.6 8 24 8 12.2 0 24.2-5.5 32-16l48-64c10.9-14.6 10.6-34.8-.8-49l-45.9-57.4zM376.7 145c-12.7-18.1-37.6-22.4-55.7-9.8l-40.6 28.5c-52.7 37-124.2 37-176.8 0L63 135.3C44.9 122.6 20 127 7.3 145-5.4 163.1-1 188 17 200.7l40.6 28.5c17 11.9 35.4 20.9 54.4 27.9V288h160v-30.8c19-7 37.4-16 54.4-27.9l40.6-28.5c18.1-12.8 22.4-37.7 9.7-55.8z" />
                      </svg>
                    </span>
                    <span className="elementor-icon-list-text">{v.childSeats}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
