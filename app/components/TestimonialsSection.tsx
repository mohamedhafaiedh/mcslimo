"use client";

import React from "react";
import SlashesDivider from "./SlashesDivider";
import { useTranslation, Locale } from "@/lib/useTranslation";

interface TestimonialsSectionProps {
  lang?: string;
}

export default function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  const { t } = useTranslation(lang as Locale | undefined);

  const reviews = [
    {
      avatar: "A",
      author: t("home.reviews.review1Author", "Abdoul Sock"),
      date: t("home.reviews.review1Date", "23 Janvier 2023"),
      stars: "★★★★★",
      body: t(
        "home.reviews.review1Text",
        "« Une très belle équipe, très professionnelle, ponctuelle. Je recommande fortement. »"
      ),
      verified: t("home.reviews.googleVerified", "Avis vérifié Google"),
    },
    {
      avatar: "M",
      author: t("home.reviews.review2Author", "Moi 75015"),
      date: t("home.reviews.review2Date", "28 Novembre 2022"),
      stars: "★★★★★",
      body: t(
        "home.reviews.review2Text",
        "« Excellent !!!! Je recommande vivement pour tous vos mariages !!! Ils sont vraiment au top !!!! »"
      ),
      verified: t("home.reviews.googleVerified", "Avis vérifié Google"),
    },
    {
      avatar: "L",
      author: t("home.reviews.review3Author", "Latifa Moussa"),
      date: t("home.reviews.review3Date", "28 Novembre 2022"),
      stars: "★★★★★",
      body: t(
        "home.reviews.review3Text",
        "« Chauffeur haut de gamme véhicule super propre conduite agréable !! Dommage qu'il y ait trop de bouchons sur Paris !!! »"
      ),
      verified: t("home.reviews.googleVerified", "Avis vérifié Google"),
    },
  ];

  return (
    <section
      className="testimonials-section-wrapper"
      style={{
        backgroundColor: "var(--e-global-color-44c34ae, #F5F5F5)",
        paddingTop: "60px",
        paddingBottom: "60px",
        width: "100%",
        display: "block",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 20px", boxSizing: "border-box" }}>
        {/* Section Title */}
        <div
          className="elementor-element elementor-element-59cbe7c elementor-widget elementor-widget-heading"
          style={{ textAlign: "center", marginBottom: "0px" }}
        >
          <div className="elementor-widget-container">
            <h2
              className="elementor-heading-title elementor-size-default"
              style={{
                textAlign: "center",
                color: "var(--e-global-color-primary, #000000)",
                fontSize: "32px",
                fontWeight: "600",
                fontFamily: "var(--e-global-typography-primary-font-family, 'Dosis', sans-serif)",
                margin: "0 0 8px 0",
              }}
            >
              {t("home.reviews.title", "Ce que nos clients disent de nous")}
            </h2>
          </div>
        </div>

        {/* Golden Slashes Divider */}
        <SlashesDivider className="elementor-element-d39dcba" width="80px" color="%23C09E5B" align="center" />

        {/* Reviews 3-Column Grid */}
        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginTop: "35px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="testimonial-card-box"
              style={{
                backgroundColor: "#ffffff",
                padding: "30px 25px",
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                height: "100%",
              }}
            >
              <div>
                {/* Header: Avatar, Name, Date, Google Badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "15px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "var(--e-global-color-accent, #C09E5B)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "700",
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {r.avatar}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        fontWeight: "700",
                        color: "var(--e-global-color-primary, #000000)",
                        fontFamily: "var(--e-global-typography-primary-font-family, 'Dosis', sans-serif)",
                      }}
                    >
                      {r.author}
                    </h4>
                    <span style={{ fontSize: "12px", color: "#888888" }}>{r.date}</span>
                  </div>
                  {/* Google Icon SVG */}
                  <div style={{ flexShrink: 0 }} title={r.verified}>
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div style={{ color: "#fbbc04", fontSize: "16px", marginBottom: "12px", letterSpacing: "2px" }}>
                  {r.stars}
                </div>

                {/* Review text */}
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "var(--e-global-color-text, #555555)",
                    fontFamily: "var(--e-global-typography-text-font-family, 'Open Sans', sans-serif)",
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  {r.body}
                </p>
              </div>

              {/* Verified badge */}
              <div
                style={{
                  marginTop: "18px",
                  paddingTop: "12px",
                  borderTop: "1px solid #eeeeee",
                  fontSize: "12px",
                  color: "#28a745",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>✓</span>
                <span>{r.verified}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
