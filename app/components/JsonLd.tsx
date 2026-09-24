import { SITE_URL, LOCALES, Lang } from "@/lib/seo";
import { Locale } from "@/lib/i18n";

interface JsonLdProps {
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  lang?: Lang | Locale;
  isEn?: boolean;
}

export default function JsonLd({
  pageUrl = SITE_URL + "/",
  pageTitle = "Chauffeur privé Haut de gamme à Paris - MCS Limo",
  pageDescription = "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris",
  lang = "fr",
  isEn,
}: JsonLdProps) {
  const currentLang = (isEn ? "en" : lang) as Lang;
  const inLanguage = LOCALES[currentLang]?.code || "fr-FR";
  const siteDescription =
    currentLang === "en"
      ? "High-end Private Chauffeur Service in Paris"
      : currentLang === "es"
      ? "Servicio de chófer privado de alta gama en París"
      : currentLang === "it"
      ? "Servizio di autista privato di lusso a Parigi"
      : currentLang === "ar"
      ? "خدمة سائق خاص فاخر في باريس - MCS Limo"
      : "Chauffeur privé Haut de gamme à Paris - MCS Limo";

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
        description: siteDescription,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage,
      },
      {
        "@type": ["LimousineService", "LocalBusiness"],
        "@id": `${SITE_URL}/#localbusiness`,
        name: "MCS Limo",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/images/MCS-Limo-logo-1000x450-1.png`,
        image: `${SITE_URL}/images/chauffeur-prive-paris.webp`,
        description:
          "Service de chauffeur privé VTC haut de gamme à Paris et en Île-de-France. Transferts aéroports CDG, Orly, Le Bourget, gares parisiennes, mise à disposition et accueil VIP.",
        telephone: "+33189480296",
        email: "contact@mcslimo.fr",
        priceRange: "€€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          streetAddress: "10 Place Lucien Boilleau",
          addressLocality: "Morangis",
          postalCode: "91420",
          addressRegion: "Île-de-France",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 48.7056,
          longitude: 2.3328,
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de chauffeur privé",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Transfert Aéroport Charles de Gaulle (CDG)",
                description: "Transfert privé avec chauffeur vers ou depuis l'aéroport Paris-Charles de Gaulle.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Transfert Aéroport d'Orly (ORY)",
                description: "Transfert privé avec chauffeur vers ou depuis l'aéroport Paris-Orly.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Transfert Aéroport Le Bourget (LFPB)",
                description: "Transfert aviation d'affaires VIP vers ou depuis l'aéroport Paris-Le Bourget.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mise à disposition avec chauffeur",
                description: "Chauffeur privé à disposition à l'heure, à la journée ou à l'année.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Accueil VIP & Fast-track",
                description: "Accueil personnalisé en porte d'avion et accompagnement prioritaire.",
              },
            },
          ],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "48",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: "Patrick B.",
            },
            datePublished: "2023-01-15",
            reviewBody:
              "Chauffeur très pro, ponctuel et arrangeant. Trajet très fluide, je recommande.",
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
              name: "Laurent S.",
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
        inLanguage,
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
