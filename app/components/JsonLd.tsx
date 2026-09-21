import React from "react";
import { SITE_URL } from "@/lib/seo";

interface JsonLdProps {
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  isEn?: boolean;
}

export default function JsonLd({
  pageUrl = SITE_URL + "/",
  pageTitle = "Chauffeur privé Haut de gamme à Paris - MCS Limo",
  pageDescription = "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris",
  isEn = false,
}: JsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "MCS Limo",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/images/MCS-Limo-logo-1000x450-1.png`,
          contentUrl: `${SITE_URL}/images/MCS-Limo-logo-1000x450-1.png`,
          caption: "MCS Limo",
          width: 1000,
          height: 450,
        },
        image: {
          "@id": `${SITE_URL}/#logo`,
        },
        telephone: "+33189480296",
        email: "contact@mcslimo.fr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "10 Place Lucien Boilleau",
          addressLocality: "Morangis",
          postalCode: "91420",
          addressCountry: "FR",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "MCS Limo",
        description: isEn
          ? "High-end Private Chauffeur Service in Paris"
          : "Chauffeur privé Haut de gamme à Paris - MCS Limo",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: isEn ? "en-US" : "fr-FR",
      },
      {
        "@type": ["LimousineService", "LocalBusiness"],
        "@id": `${SITE_URL}/#localbusiness`,
        name: "MCS Limo",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/images/MCS-Limo-logo-1000x450-1.png`,
        image: `${SITE_URL}/images/MCS-Limo-logo-1000x450-1.png`,
        telephone: "+33189480296",
        email: "contact@mcslimo.fr",
        priceRange: "€€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: "10 Place Lucien Boilleau",
          addressLocality: "Morangis",
          postalCode: "91420",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.7042,
          longitude: 2.3339,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Paris",
          },
          {
            "@type": "AdministrativeArea",
            name: "Île-de-France",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "4",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Corinne Maruzzi",
            },
            datePublished: "2023-01-24",
            reviewBody:
              "Prestations de grandes qualités. À l'écoute de leur client, toujours disponible. Savent anticiper vos demandes. Je garde précieusement leurs coordonnées.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Abdoul Sock",
            },
            datePublished: "2023-01-23",
            reviewBody:
              "Une très belle équipe, très professionnelle, ponctuelle. Je recommande fortement.",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Moi 75015",
            },
            datePublished: "2022-11-28",
            reviewBody:
              "Excellent !!!! Je recommande vivement pour tous vos mariages !!! Ils sont vraiment au top !!!!",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
          },
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Latifa Moussa",
            },
            datePublished: "2022-11-28",
            reviewBody:
              "Chauffeur haut de gamme véhicule super propre conduite agréable !! Dommage qu'il y ait trop de bouchons sur Paris !!!",
            reviewRating: {
              "@type": "Rating",
              ratingValue: "5",
              bestRating: "5",
              worstRating: "1",
            },
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        inLanguage: isEn ? "en-US" : "fr-FR",
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#localbusiness`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
