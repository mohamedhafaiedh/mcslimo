import React from "react";
import SlashesDivider from "./SlashesDivider";

interface WhyChooseUsSectionProps {
  lang: string;
}

export default function WhyChooseUsSection({ lang }: WhyChooseUsSectionProps) {
  const isAr = lang === "ar";
  const isEn = lang === "en";

  const features = [
    {
      img: "/images/agree.png",
      alt: "Chauffeur privé professionnel en costume à Paris",
      title: isAr ? "سائقون محترفون" : isEn ? "Professional Drivers" : "Chauffeurs professionnels",
      description: isAr
        ? "جميع سائقينا مدربون ومؤهلون لضمان رحلة آمنة ومريحة وسلسة طوال الطريق."
        : isEn
        ? "Our drivers are trained to provide you with a safe, discreet and comfortable ride."
        : "Nos chauffeurs sont formés pour vous assurer une conduite en toute sécurité.",
    },
    {
      img: "/images/service-clients.png",
      alt: "Service client disponible 24h/24 et 7j/7",
      title: isAr ? "خدمات وسيارات راقية وفخمة" : isEn ? "High-end services and cars" : "Services et voitures haut de gamme",
      description: isAr
        ? "نضع تحت تصرفكم أحدث السيارات الفاخرة مع تقديم خدمة عالية الجودة وأقصى درجات الراحة."
        : isEn
        ? "We provide high-end vehicles with quality service and absolute comfort."
        : "Nous mettons à votre disposition des véhicules haut de gamme avec un service de qualité",
    },
    {
      img: "/images/calendrier.png",
      alt: "Réservation de chauffeur privé en ligne",
      title: isAr ? "جاهزية وتوافر 24/7" : isEn ? "24/7 Availability" : "Disponibilité 24/7",
      description: isAr
        ? "نحن متاحون في جميع الأوقات لمعالجة طلباتكم وتلبية كافة احتياجاتكم من التنقل والراحة."
        : isEn
        ? "We are available at all times to process your requests or ensure your transport needs."
        : "Nous sommes disponibles à tout moment pour traiter vos demandes ou assurer vos besoins",
    },
    {
      img: "/images/time-check.png",
      alt: "Ponctualité garantie et suivi en temps réel des vols",
      title: isAr ? "الالتزام التام بالمواعيد" : isEn ? "Punctuality" : "Ponctualité",
      description: isAr
        ? "لأن وقتكم ثمين للغاية، يحرص سائقونا على التواجد قبل 15 دقيقة من موعد انطلاق كل خدمة."
        : isEn
        ? "Because your time is precious, we ensure our drivers arrive 15 minutes before the start of each service."
        : "Parce que votre temps est précieux, nous faisons en sorte que nos chauffeurs arrivent avant 15 minutes du début de chaque prestation",
    },
  ];

  return (
    <section
      className="elementor-element e-flex e-con-boxed e-con e-parent why-choose-us-section-wrapper"
      data-id="8be1ae7"
      data-element_type="container"
      data-e-type="container"
      id="qui-sommes-nous"
      style={{
        backgroundColor: "#f5f5f5",
        background: "#f5f5f5",
        paddingTop: "60px",
        paddingBottom: "60px",
        width: "100%",
        maxWidth: "100%",
        margin: "0",
        display: "block",
        boxSizing: "border-box",
      }}
    >
      <div
        className="e-con-inner"
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: "0 15px",
          width: "100%",
          backgroundColor: "#f5f5f5",
          background: "#f5f5f5",
        }}
      >
        {/* Title Container - Centered */}
        <div
          className="elementor-element elementor-element-61aa1b3 elementor-widget elementor-widget-heading"
          data-id="61aa1b3"
          data-element_type="widget"
          data-widget_type="heading.default"
          style={{ textAlign: "center", width: "100%", marginBottom: "0px", backgroundColor: "#f5f5f5" }}
        >
          <div className="elementor-widget-container" style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
            <h2
              className="elementor-heading-title elementor-size-default"
              style={{
                textAlign: "center",
                color: "var(--e-global-color-primary, #000000)",
                fontSize: "32px",
                fontWeight: "600",
                fontFamily: "var(--e-global-typography-primary-font-family, 'Dosis', sans-serif)",
                margin: "0 0 8px 0",
                backgroundColor: "#f5f5f5",
              }}
            >
              {isAr ? "لماذا تختار MCS Limo ؟" : isEn ? "Why choose MCS Limo?" : "Pourquoi choisir MCS Limo ?"}
            </h2>
          </div>
        </div>

        {/* Golden Slashes Divider - Centered */}
        <SlashesDivider className="elementor-element-292d945" width="80px" color="%23C09E5B" align="center" />

        {/* Features Grid - 4 Columns */}
        <div className="why-choose-us-grid" style={{ marginTop: "30px", width: "100%", backgroundColor: "#f5f5f5" }}>
          {features.map((item, index) => (
            <div
              key={index}
              className="elementor-element e-con-full e-flex e-con e-child why-choose-us-card"
              data-element_type="container"
              data-e-type="container"
              style={{ backgroundColor: "#f5f5f5" }}
            >
              <div
                className="elementor-element elementor-position-top elementor-widget elementor-widget-image-box"
                data-element_type="widget"
                data-widget_type="image-box.default"
                style={{ width: "100%", backgroundColor: "#f5f5f5" }}
              >
                <div className="elementor-widget-container" style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
                  <div
                    className="elementor-image-box-wrapper"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      width: "100%",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <figure
                      className="elementor-image-box-img"
                      style={{
                        marginBottom: "15px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginRight: 0,
                        marginLeft: 0,
                        backgroundColor: "#f5f5f5",
                      }}
                    >
                      <img
                        decoding="async"
                        width="64"
                        height="64"
                        src={item.img}
                        className="attachment-full size-full"
                        alt={item.alt}
                        style={{ objectFit: "contain", backgroundColor: "transparent" }}
                      />
                    </figure>
                    <div
                      className="elementor-image-box-content"
                      style={{ textAlign: "center", width: "100%", backgroundColor: "#f5f5f5" }}
                    >
                      <h3
                        className="elementor-image-box-title"
                        style={{
                          fontSize: "18px",
                          fontWeight: "700",
                          marginBottom: "10px",
                          textAlign: "center",
                          backgroundColor: "#f5f5f5",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="elementor-image-box-description"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.6",
                          textAlign: "center",
                          backgroundColor: "#f5f5f5",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
