import React from "react";
import SlashesDivider from "./SlashesDivider";

interface TestimonialsSectionProps {
  lang: string;
}

export default function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  const isAr = lang === "ar";
  const isEn = lang === "en";

  const reviews = [
    {
      avatar: "A",
      author: "Abdoul Sock",
      date: isAr ? "23 يناير 2023" : isEn ? "January 23, 2023" : "23 Janvier 2023",
      stars: "★★★★★",
      body: isAr
        ? "« فريق رائع جداً، محترف للغاية، وملتزم بالمواعيد بدقة. أوصي بهم بشدة. »"
        : isEn
        ? "« A great team, very professional, punctual. I highly recommend. »"
        : "« Une très belle équipe, très professionnelle, ponctuelle. Je recommande fortement. »",
      verified: isAr ? "تقييم موثق من Google" : isEn ? "Google Verified Review" : "Avis vérifié Google",
    },
    {
      avatar: "M",
      author: "Moi 75015",
      date: isAr ? "28 نوفمبر 2022" : isEn ? "November 28, 2022" : "28 Novembre 2022",
      stars: "★★★★★",
      body: isAr
        ? "« ممتاز جداً !!!! أوصي بهم بشدة لجميع حفلات الزفاف والمناسبات الخاصة !!! إنهم حقاً في القمة !!!! »"
        : isEn
        ? "« Excellent !!!! I highly recommend for all your weddings !!! They are really at the top !!!! »"
        : "« Excellent !!!! Je recommande vivement pour tous vos mariages !!! Ils sont vraiment au top !!!! »",
      verified: isAr ? "تقييم موثق من Google" : isEn ? "Google Verified Review" : "Avis vérifié Google",
    },
    {
      avatar: "L",
      author: "Latifa Moussa",
      date: isAr ? "28 نوفمبر 2022" : isEn ? "November 28, 2022" : "28 Novembre 2022",
      stars: "★★★★★",
      body: isAr
        ? "« سائق راقٍ، سيارة نظيفة للغاية وقيادة مريحة وممتعة !! مؤسف فقط وجود الكثير من الازدحام المروري في باريس !!! »"
        : isEn
        ? "« High-end driver, super clean vehicle, pleasant drive !! Too bad there are too many traffic jams in Paris !!! »"
        : "« Chauffeur haut de gamme véhicule super propre conduite agréable !! Dommage qu'il y ait trop de bouchons sur Paris !!! »",
      verified: isAr ? "تقييم موثق من Google" : isEn ? "Google Verified Review" : "Avis vérifié Google",
    },
  ];

  return (
    <section
      className="elementor-element elementor-element-c12aaea elementor-element-3141ba5 e-flex e-con-boxed e-con e-parent testimonials-section-wrapper"
      data-id="c12aaea"
      data-element_type="container"
      data-e-type="container"
      style={{
        backgroundColor: "var(--e-global-color-44c34ae, #F5F5F5)",
        paddingTop: "60px",
        paddingBottom: "60px",
        width: "100%",
      }}
    >
      <div className="e-con-inner" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 15px", width: "100%" }}>
        {/* Title */}
        <div
          className="elementor-element elementor-element-9b16b6b elementor-widget elementor-widget-heading"
          data-id="9b16b6b"
          data-element_type="widget"
          data-widget_type="heading.default"
          style={{ textAlign: "center", width: "100%", marginBottom: "0px" }}
        >
          <div className="elementor-widget-container" style={{ width: "100%" }}>
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
              {isAr ? "آراء عملائنا وشهاداتهم" : isEn ? "What our clients say about us" : "Ce que nos clients disent de nous"}
            </h2>
          </div>
        </div>

        {/* Golden Slashes Divider */}
        <SlashesDivider className="elementor-element-ea285f2" width="80px" color="%23C09E5B" align="center" />

        {/* Reviews Grid */}
        <div className="reviews-carousel" style={{ marginTop: "30px" }}>
          {reviews.map((rev, index) => (
            <div key={index} className="review-card">
              <div>
                <div className="review-header" style={{ flexDirection: isAr ? "row-reverse" : "row" }}>
                  <div className="review-avatar">{rev.avatar}</div>
                  <div style={{ textAlign: isAr ? "right" : "left" }}>
                    <div className="review-author">{rev.author}</div>
                    <div className="review-date">{rev.date}</div>
                  </div>
                </div>
                <div className="review-stars" style={{ textAlign: isAr ? "right" : "left" }}>{rev.stars}</div>
                <div className="review-body" style={{ textAlign: isAr ? "right" : "left", direction: isAr ? "rtl" : "ltr" }}>
                  {rev.body}
                </div>
              </div>
              <div className="review-source" style={{ textAlign: isAr ? "right" : "left" }}>
                {rev.verified}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
