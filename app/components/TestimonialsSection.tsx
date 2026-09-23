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
      avatar: "C",
      author: t("home.reviews.review0Author", "Corinne Maruzzi"),
      date: t("home.reviews.review0Date", "24 Janvier 2023"),
      body: t(
        "home.reviews.review0Text",
        "« Prestations de grandes qualités. À l'écoute de leur client, toujours disponible. Savent anticiper vos demandes. Je garde précieusement leurs coordonnées. »"
      ),
    },
    {
      avatar: "A",
      author: t("home.reviews.review1Author", "Abdoul Sock"),
      date: t("home.reviews.review1Date", "23 Janvier 2023"),
      body: t(
        "home.reviews.review1Text",
        "« Une très belle équipe, très professionnelle, ponctuelle. Je recommande fortement. »"
      ),
    },
    {
      avatar: "L",
      author: t("home.reviews.review3Author", "Latifa Moussa"),
      date: t("home.reviews.review3Date", "28 Novembre 2022"),
      body: t(
        "home.reviews.review3Text",
        "« Chauffeur haut de gamme véhicule super propre conduite agréable !! Dommage qu'il y ait trop de bouchons sur Paris !!! »"
      ),
    },
  ];

  return (
    <div
      className="elementor-element elementor-element-c12aaea e-flex e-con-boxed e-con e-parent"
      data-id="c12aaea"
      data-element_type="container"
      data-e-type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-9b16b6b elementor-widget elementor-widget-heading"
          data-id="9b16b6b"
          data-element_type="widget"
          data-e-type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              {t("home.reviews.title", "Ce que pensent nos clients")}
            </h2>
          </div>
        </div>

        <SlashesDivider className="elementor-element-957be19" align="center" width="80px" color="%23C09E5B" />

        <div
          className="elementor-element elementor-element-065984a elementor-widget elementor-widget-text-editor"
          data-id="065984a"
          data-element_type="widget"
          data-e-type="widget"
          data-widget_type="text-editor.default"
        >
          <div className="elementor-widget-container">
            <p>
              {t(
                "home.reviews.subtitle",
                "Notre clientèle est exigeante et nous faisons de notre mieux pour toujours la satisfaire"
              )}
            </p>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div>
                <div className="review-header">
                  <div className="review-avatar">{r.avatar}</div>
                  <div>
                    <div className="review-author">{r.author}</div>
                    <div className="review-date">{r.date}</div>
                  </div>
                </div>
                <div className="review-stars">★★★★★</div>
                <div className="review-body">{r.body}</div>
              </div>
              <div className="review-source">
                <svg width="14" height="14" viewBox="0 0 24 24">
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
                {t("home.reviews.googleVerified", "Avis vérifié Google")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
