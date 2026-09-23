import React from "react";
import SlashesDivider from "./SlashesDivider";

interface HowToBookSectionProps {
  lang: string;
}

export default function HowToBookSection({ lang }: HowToBookSectionProps) {
  const isAr = lang === "ar";
  const isEn = lang === "en";

  const steps = [
    {
      img: "/images/communiquer.png",
      alt: "1. Contactez votre agence de chauffeur privé",
      title: isAr ? "1. التواصل" : "1. Contact",
      description: isAr
        ? "عبر البريد الإلكتروني، الهاتف، استمارة الاتصال أو استمارة الحجز المباشر عبر الإنترنت."
        : isEn
        ? "Email, telephone, contact form or online booking form."
        : "E-mail, téléphone, formulaire de contact ou formulaire de réservation en ligne",
    },
    {
      img: "/images/check.png",
      alt: "2. Réservation et devis sur-mesure",
      title: isAr ? "2. الحجز" : isEn ? "2. Booking" : "2. Réservation",
      description: isAr
        ? "حددوا لنا تفاصيل طلبكم وسنرشدكم إلى أفضل خدمة تناسب احتياجاتكم."
        : isEn
        ? "Describe your detailed needs and we will advise you on the best service tailored to your situation."
        : "Décrivez-nous votre besoin détaillé et nous vous conseillerons la meilleure prestation qui s'adapte le mieux à votre situation",
    },
    {
      img: "/images/mobile-phone.png",
      alt: "3. Votre chauffeur est présent 15 minutes avant le trajet",
      title: isAr
        ? "3. سيكون سائقنا متواجداً قبل 15 دقيقة من الموعد"
        : isEn
        ? "3. Our chauffeur will be there 15 minutes before the service"
        : "3. Notre chauffeur sera là 15mn avant la prestation",
      description: isAr
        ? "سيتصل بك سائقك عند وصوله ويهتم بأمتعتك لضمان راحتك التامة."
        : isEn
        ? "Your driver will contact you upon arrival and take care of your luggage."
        : "Votre chauffeur prendra contact avec vous dès son arrivée et prendra en charge vos bagages",
    },
  ];

  return (
    <>
      {/* Title */}
      <div
        className="elementor-element elementor-element-37c3103 e-flex e-con-boxed e-con e-parent"
        data-id="37c3103"
        data-element_type="container"
        data-e-type="container"
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-1aba894 elementor-widget elementor-widget-heading"
            data-id="1aba894"
            data-element_type="widget"
            data-widget_type="heading.default"
            style={{ textAlign: "center", width: "100%" }}
          >
            <div className="elementor-widget-container" style={{ textAlign: "center" }}>
              <h2 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center" }}>
                {isAr ? "كيف أحجز سائقي الخاص؟" : isEn ? "How to book my chauffeur?" : "Comment réserver mon chauffeur ?"}
              </h2>
            </div>
          </div>
          <SlashesDivider className="elementor-element-f3a75fb" width="80px" color="%23C09E5B" align="center" />
          <div
            className="elementor-element elementor-element-980bf8e elementor-widget elementor-widget-text-editor"
            data-id="980bf8e"
            data-element_type="widget"
            data-widget_type="text-editor.default"
            style={{ textAlign: "center", width: "100%" }}
          >
            <div className="elementor-widget-container" style={{ textAlign: "center" }}>
              {isAr
                ? "لحجز سيارة فاخرة مع سائق، الأمر في غاية البساطة"
                : isEn
                ? "To book a luxury car with chauffeur, nothing could be simpler"
                : "Pour réserver une voiture de luxe avec chauffeur, rien de plus simple"}
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div
        className="elementor-element elementor-element-01da488 e-flex e-con-boxed e-con e-parent"
        data-id="01da488"
        data-element_type="container"
        data-e-type="container"
      >
        <div className="e-con-inner" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="elementor-element elementor-widget__width-inherit elementor-vertical-align-middle elementor-widget elementor-widget-image-box"
              data-element_type="widget"
              data-widget_type="image-box.default"
            >
              <div className="elementor-widget-container">
                <div
                  className="elementor-image-box-wrapper"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                    textAlign: isAr ? "right" : "left",
                  }}
                >
                  <figure
                    className="elementor-image-box-img"
                    style={{
                      flexShrink: 0,
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      decoding="async"
                      width="64"
                      height="64"
                      src={step.img}
                      className="attachment-full size-full"
                      alt={step.alt}
                    />
                  </figure>
                  <div className="elementor-image-box-content" style={{ flexGrow: 1 }}>
                    <h3 className="elementor-image-box-title" style={{ fontSize: "18px", fontWeight: "700", marginBottom: "6px" }}>
                      {step.title}
                    </h3>
                    <p className="elementor-image-box-description" style={{ fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
