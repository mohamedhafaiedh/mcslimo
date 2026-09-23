import type { Metadata } from "next";
import { BASE, LOCALES, Lang, buildAlternates } from "./seo";

interface PageMeta {
  title: string;
  description: string;
}

const PAGE_META: Record<string, Record<Lang, PageMeta>> = {
  "": {
    fr: {
      title: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
      description: "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris",
    },
    en: {
      title: "High-end Private Chauffeur in Paris - MCS Limo",
      description: "For all your journeys in Paris from or to Parisian train stations or airports, or long distance trips from/to Paris",
    },
    es: {
      title: "Chófer privado de alta gama en París - MCS Limo",
      description: "Para todos sus traslados en París desde o hacia las estaciones de tren o aeropuertos parisinos, o viajes de larga distancia.",
    },
    it: {
      title: "Autista privato di lusso a Parigi - MCS Limo",
      description: "Per tutti i vostri viaggi a Parigi da o verso le stazioni ferroviarie o gli aeroporti parigini e viaggi a lunga distanza.",
    },
    ar: {
      title: "سائق خاص فاخر في باريس - MCS Limo",
      description: "لجميع تنقلاتكم في باريس من وإلى المطارات ومحطات القطار والرحلات الطويلة بسيارات فاخرة مع سائق خاص.",
    },
  },
  services: {
    fr: {
      title: "Nos Services - MCS Limo",
      description: "Découvrez tous les services que vous offre MCS Limo",
    },
    en: {
      title: "Our Services - MCS Limo",
      description: "Discover all luxury chauffeur and high-end transportation services offered by MCS Limo in Paris and worldwide.",
    },
    es: {
      title: "Nuestros Servicios - MCS Limo",
      description: "Descubra todos los servicios de chófer de lujo y transporte de alta gama que le ofrece MCS Limo en París.",
    },
    it: {
      title: "I Nostri Servizi - MCS Limo",
      description: "Scoprite tutti i servizi di autista di lusso e trasporto di alta classe offerti da MCS Limo a Parigi.",
    },
    ar: {
      title: "خدماتنا - MCS Limo",
      description: "اكتشف جميع خدمات النقل الفاخر والسائق الخاص التي تقدمها MCS Limo في باريس وجميع أنحاء العالم.",
    },
  },
  flotte: {
    fr: {
      title: "Notre flotte de véhicules - MCS Limo",
      description: "Découvrez notre flotte de véhicules pour mieux choisir la voiture qui répond à vos besoins",
    },
    en: {
      title: "Our Fleet - Luxury Vehicles in Paris - MCS Limo",
      description: "Explore our prestigious fleet of vehicles (Mercedes E-Class, V-Class, S-Class) for your private chauffeur service in Paris.",
    },
    es: {
      title: "Nuestra Flota de Vehículos de Lujo - MCS Limo",
      description: "Descubra nuestra flota de vehículos de lujo (Mercedes Clase E, Clase V, Clase S) para su servicio de chófer privado en París.",
    },
    it: {
      title: "La Nostra Flotta di Veicoli - MCS Limo",
      description: "Scoprite la nostra flotta di veicoli di prestigio (Mercedes Classe E, Classe V, Classe S) con autista privato a Parigi.",
    },
    ar: {
      title: "أسطول سياراتنا الفاخرة - MCS Limo",
      description: "اكتشف أسطول سياراتنا الفاخرة (مرسيدس الفئة E، الفئة V، الفئة S) لخدمات السائق الخاص في باريس.",
    },
  },
  reservation: {
    fr: {
      title: "Devis et réservation en ligne - MCS Limo",
      description: "Obtenez un devis en ligne et réservez votre chauffeur privé à Paris",
    },
    en: {
      title: "Online Quote & Booking - MCS Limo",
      description: "Enter your journey details to get an instant quote and book your private chauffeur in Paris with MCS Limo.",
    },
    es: {
      title: "Presupuesto y reserva online - MCS Limo",
      description: "Obtenga un presupuesto online y reserve su chófer privado de lujo en París con MCS Limo.",
    },
    it: {
      title: "Preventivo e prenotazione online - MCS Limo",
      description: "Richiedete un preventivo online e prenotate il vostro autista privato di lusso a Parigi con MCS Limo.",
    },
    ar: {
      title: "طلب عرض سعر وحجز عبر الإنترنت - MCS Limo",
      description: "احصل على عرض سعر فوري واحجز سائقك الخاص الفاخر في باريس بكل سهولة عبر الإنترنت.",
    },
  },
  contact: {
    fr: {
      title: "Nous contacter - MCS Limo",
      description: "Contactez notre équipe de chauffeurs privés à Paris. Service client et assistance 24/7.",
    },
    en: {
      title: "Contact Us - MCS Limo",
      description: "Get in touch with our team for your private chauffeur bookings in Paris. 24/7 customer service and assistance.",
    },
    es: {
      title: "Contáctenos - MCS Limo",
      description: "Contacte a nuestro equipo de chóferes privados en París. Servicio al cliente y asistencia 24/7.",
    },
    it: {
      title: "Contattaci - MCS Limo",
      description: "Contatta il nostro team per prenotare il tuo autista privato a Parigi. Servizio clienti e assistenza 24/7.",
    },
    ar: {
      title: "اتصل بنا - MCS Limo",
      description: "تواصل مع فريقنا لحجز سائقك الخاص في باريس. خدمة عملاء ومساعدة على مدار الساعة 24/7.",
    },
  },
  "qui-sommes-nous": {
    fr: {
      title: "À propos de nous - MCS Limo",
      description: "MCS Limo vous accompagne dans tous vos déplacements privés ou professionnels à Paris et en Île-de-France.",
    },
    en: {
      title: "About Us - MCS Limo",
      description: "Discover MCS Limo, your premium private chauffeur company in Paris, offering tailor-made luxury transport with discretion and punctuality.",
    },
    es: {
      title: "Sobre Nosotros - MCS Limo",
      description: "MCS Limo le acompaña en todos sus traslados privados o corporativos en París con discreción y puntualidad.",
    },
    it: {
      title: "Chi Siamo - MCS Limo",
      description: "MCS Limo vi accompagna in tutti i vostri viaggi privati o aziendali a Parigi con discrezione e puntualità.",
    },
    ar: {
      title: "من نحن - MCS Limo",
      description: "شركة MCS Limo لخدمات السائق الخاص الفاخر في باريس، نوفر لك تنقلات راقية بكل سرية ودقة في المواعيد.",
    },
  },
  "chauffeur-a-lannee": {
    fr: {
      title: "Chauffeur à l'année - MCS Limo",
      description: "Service de chauffeur privé dédié à l'année pour les particuliers et les entreprises.",
    },
    en: {
      title: "Year-Round Private Chauffeur Service - MCS Limo",
      description: "Dedicated daily private chauffeur in Paris for executives and individuals seeking complete flexibility and peace of mind.",
    },
    es: {
      title: "Chófer privado anual - MCS Limo",
      description: "Servicio de chófer privado dedicado durante todo el año para particulares y empresas en París.",
    },
    it: {
      title: "Autista dedicato per tutto l'anno - MCS Limo",
      description: "Servizio di autista privato dedicato tutto l'anno per privati e aziende a Parigi.",
    },
    ar: {
      title: "سائق خاص على مدار العام - MCS Limo",
      description: "خدمة سائق خاص مخصصة على مدار العام للأفراد وكبار المسؤولين والشركات في باريس.",
    },
  },
  "lp-chauffeur-prive": {
    fr: {
      title: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
      description: "Service de Chauffeur Privé VTC Haut de Gamme à Paris pour vos transferts aéroports et événements.",
    },
    en: {
      title: "High-end Private Chauffeur in Paris - MCS Limo",
      description: "We provide luxury vehicles with professional chauffeurs in Paris for airport transfers, business travel, and VIP hospitality.",
    },
    es: {
      title: "Chófer privado de alta gama en París - MCS Limo",
      description: "Servicio de chófer privado VTC de lujo en París para traslados al aeropuerto, viajes de negocios y eventos VIP.",
    },
    it: {
      title: "Autista privato di alta gamma a Parigi - MCS Limo",
      description: "Servizio di autista privato NCC di lusso a Parigi per transfer aeroportuali ed eventi di prestigio.",
    },
    ar: {
      title: "سائق خاص راقٍ في باريس - MCS Limo",
      description: "سيارات فخمة وسائقون محترفون في باريس لنقل المطارات والفعاليات والزيارات الدبلوماسية ورجال الأعمال.",
    },
  },
  "mentions-legales": {
    fr: {
      title: "Mentions légales - MCS Limo",
      description: "Mentions légales et informations juridiques de la société MCars Services SARL / MCS Limo.",
    },
    en: {
      title: "Legal Notice - MCS Limo",
      description: "Legal information, corporate identity, and website publishing details for MCS Limo (MCars Services SARL).",
    },
    es: {
      title: "Aviso legal - MCS Limo",
      description: "Información legal y datos corporativos de la empresa MCars Services SARL / MCS Limo.",
    },
    it: {
      title: "Note legali - MCS Limo",
      description: "Informazioni legali e dati societari di MCars Services SARL / MCS Limo.",
    },
    ar: {
      title: "الشروط القانونية - MCS Limo",
      description: "المعلومات القانونية وبيانات النشر الخاصة بشركة MCars Services SARL / MCS Limo.",
    },
  },
  cgv: {
    fr: {
      title: "Conditions Générales de Vente (CGV) - MCS Limo",
      description: "Conditions générales de vente et d'utilisation des services de chauffeur privé MCS Limo.",
    },
    en: {
      title: "Terms and Conditions of Sale - MCS Limo",
      description: "General terms and conditions of sale and private chauffeur transportation services of MCars Services / MCS Limo.",
    },
    es: {
      title: "Condiciones Generales de Venta - MCS Limo",
      description: "Condiciones generales de venta y prestación de servicios de transporte con chófer privado de MCS Limo.",
    },
    it: {
      title: "Condizioni Generali di Vendita - MCS Limo",
      description: "Condizioni generali di vendita e fornitura dei servizi di trasporto con autista di MCS Limo.",
    },
    ar: {
      title: "الشروط العامة للخدمة - MCS Limo",
      description: "الشروط العامة لبيع وتقديم خدمات النقل بالسائق الخاص لشركة MCS Limo.",
    },
  },
  "politique-de-confidentialite": {
    fr: {
      title: "Politique de confidentialité - MCS Limo",
      description: "Politique de protection des données personnelles et d'utilisation des cookies du site MCS Limo.",
    },
    en: {
      title: "Privacy Policy - MCS Limo",
      description: "Privacy policy, personal data protection, and cookie usage guidelines for MCS Limo website.",
    },
    es: {
      title: "Política de privacidad - MCS Limo",
      description: "Política de privacidad, protección de datos personales y uso de cookies del sitio web de MCS Limo.",
    },
    it: {
      title: "Informativa sulla privacy - MCS Limo",
      description: "Informativa sulla privacy, protezione dei dati personali e cookie policy di MCS Limo.",
    },
    ar: {
      title: "سياسة الخصوصية - MCS Limo",
      description: "سياسة حماية البيانات الشخصية وملفات تعريف الارتباط الخاصة بموقع MCS Limo.",
    },
  },
};

export function getPageMetadata(slug: string, lang: Lang): Metadata {
  const cleanSlug = slug.replace(/^\/|\/$/g, "");
  const meta = PAGE_META[cleanSlug]?.[lang] || PAGE_META[""][lang];
  const alternates = buildAlternates(cleanSlug, lang);
  const localeInfo = LOCALES[lang];
  const url = alternates.canonical;

  return {
    metadataBase: new URL(BASE),
    title: meta.title,
    description: meta.description,
    alternates,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "MCS Limo",
      locale: localeInfo.code.replace("-", "_"),
      type: "website",
      images: [
        {
          url: "/images/MCS-Limo-logo-1000x450-1.png",
          width: 1000,
          height: 450,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/MCS-Limo-logo-1000x450-1.png"],
    },
  };
}
