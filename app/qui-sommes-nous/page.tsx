"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default function QuiSommesNousPage() {
  const pathname = usePathname() || "";
  const isAr = pathname === "/ar" || pathname.startsWith("/ar/");
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const lang: "fr" | "en" | "ar" = isAr ? "ar" : isEn ? "en" : "fr";

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

      <MainHeader lang={lang} currentPath={pathname} />

      <main id="content" className="site-main">
        <div data-elementor-type="wp-page" data-elementor-id="1086" className="elementor elementor-1086" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-e37afbf e-flex e-con-boxed e-con e-parent" data-id="e37afbf" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-02a6e01 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="02a6e01" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {isAr ? "من نحن" : isEn ? "About Us" : "Qui sommes-nous"}
                  </h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-14f0c1e elementor-widget elementor-widget-text-editor" data-id="14f0c1e" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>
                    {isAr
                      ? "تعرف عن قرب على شركة MCS Limo ورؤيتنا المتميزة"
                      : isEn
                      ? "To make you discover who MCS Limo is"
                      : "Pour vous faire découvrir qui est MCS Limo"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-0f6d82d e-flex e-con-boxed e-con e-parent" data-id="0f6d82d" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-7c99943 e-con-full e-flex e-con e-child" data-id="7c99943" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-1e2d938 elementor-widget elementor-widget-text-editor" data-id="1e2d938" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                  <div className="elementor-widget-container">
                    {isAr ? (
                      <>
                        <p>تأسست شركة MCS Limo بهدف أساسي وهو تقديم أرقى تجارب النقل الفاخر لعملائنا المميزين وأصحاب الذوق الرفيع.</p>
                        <p>نعمل يومياً على تلبية الطلب المتزايد في مجال النقل بالسيارات الفاخرة مع سائق خاص، من خلال توفير تجربة استثنائية فريدة تبدأ من أول اتصال وحتى وصولكم إلى وجهتكم المنشودة، وما بعدها. نحن نصغي دائماً لعملائنا لكي نطور خدماتنا ونرتقي بها يوماً بعد يوم.</p>
                      </>
                    ) : isEn ? (
                      <>
                        <p>MCS Limo was created with the sole aim of offering its customers a high-end transport experience to a demanding clientele.</p>
                        <p>We work every day to satisfy an ever-increasing demand in the field of transport in luxury cars with driver, offering our customers a unique experience from the first contact to the agreed drop-off location, and beyond. Indeed, we are attentive to our customers in order to make our services better, day by day.</p>
                      </>
                    ) : (
                      <>
                        <p>MCS Limo a été créée dans l’unique but d’offrir à sa clientèle une expérience de transport haut de gamme auprès d’une clientèle exigeante.</p>
                        <p>Nous œuvrons chaque jour pour satisfaire une demande sans cesse croissante dans le domaine du transport en voitures de luxe avec chauffeur, en offrant à nos clients une expérience unique depuis le premier contact jusqu’au lieu de dépose convenu, et au-delà. En effet, nous sommes à l’écoute de nos clients afin de rendre nos prestations meilleures, de jour en jour.</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-edd3e33 e-con-full e-flex e-con e-child" data-id="edd3e33" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-13a6d6c elementor-widget elementor-widget-video" data-id="13a6d6c" data-element_type="widget" data-e-type="widget" data-settings='{"video_type":"hosted","controls":"yes"}' data-widget_type="video.default">
                  <div className="elementor-widget-container">
                    <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                      <video className="elementor-video" src="/images/WhatsApp-Video-2023-02-06-a-22.23.05.mp4" controls={true} preload="metadata" controlsList="nodownload" poster="/images/WhatsApp-Video-2023-02-06-a-22.23.05-frame-at-0m3s.jpg"></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-2ddf322 e-flex e-con-boxed e-con e-parent" data-id="2ddf322" data-element_type="container" data-e-type="container">
            <div className="e-con-inner" style={{ textAlign: "center", width: "100%" }}>
              <div className="elementor-element elementor-element-f7822c7 elementor-widget elementor-widget-heading" data-id="f7822c7" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ textAlign: "center", width: "100%" }}>
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <h3 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center" }}>
                    {isAr ? "أعلى معايير الجودة والكمال" : isEn ? "High quality standards" : "Hauts standards de qualité"}
                  </h3>
                </div>
              </div>
              <div className="elementor-element elementor-element-d981ab6 elementor-widget elementor-widget-text-editor" data-id="d981ab6" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ textAlign: "center", width: "100%" }}>
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  {isAr ? (
                    <>
                      <p>في MCS Limo، كل تفصيل يصنع الفارق. يتم اختيار وصيانة سياراتنا بأقصى درجات العناية، ويتم اختيار سائقينا بناءً على خبرتهم واحترافيتهم العالية وحس الخدمة الراقي لديهم.</p>
                      <p>الفخامة، والراحة، واللباقة، والسرية التامة، والتفاني في الخدمة هي القيم الراسخة التي ترافقكم في كل رحلة وحجز معنا.</p>
                    </>
                  ) : isEn ? (
                    <>
                      <p>At MCS Limo, every detail counts. Our vehicles are meticulously chosen and maintained. And our drivers are chosen for their experience and sense of service.</p>
                      <p>Luxury, comfort, courtesy, discretion and sense of service are the key words that will inevitably accompany you during each of your bookings.</p>
                    </>
                  ) : (
                    <>
                      <p>Chez MCS Limo, chaque détail compte. Nos véhicules sont minutieusement choisis et entretenus. Et nos chauffeurs sont choisis pour leur expérience et leur sens du service.</p>
                      <p>Luxe, confort, courtoisie, discretion et sens du service sont les maîtres-mots qui vous accompagneront inéluctablement lors de chacune de vos réservations.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-517e7bd e-flex e-con-boxed e-con e-parent" data-id="517e7bd" data-element_type="container" data-e-type="container">
            <div className="e-con-inner" style={{ textAlign: "center", width: "100%" }}>
              <div className="elementor-element elementor-element-3668aa4 elementor-widget elementor-widget-heading" data-id="3668aa4" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default" style={{ textAlign: "center", width: "100%" }}>
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  <h3 className="elementor-heading-title elementor-size-default" style={{ textAlign: "center" }}>
                    {isAr
                      ? "متواجدون في كافة أنحاء فرنسا، وحول العالم!"
                      : isEn
                      ? "We are present throughout France, and beyond!"
                      : "Nous sommes présents partout en France, et au-delà !"}
                  </h3>
                </div>
              </div>
              <div className="elementor-element elementor-element-c1c835b elementor-widget elementor-widget-text-editor" data-id="c1c835b" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default" style={{ textAlign: "center", width: "100%" }}>
                <div className="elementor-widget-container" style={{ textAlign: "center" }}>
                  {isAr ? (
                    <>
                      <p>يقع المقر الرئيسي لـ MCS Limo في باريس، ولكننا نلبي تطلعات وتنقلات عملائنا في جميع أنحاء فرنسا وفي كبرى العواصم العالمية: لندن، برلين، روما، بروكسل، نيويورك، طوكيو، وغيرها.</p>
                      <p>أينما كنتم، سنكون بجانبكم لنرافقكم ونقدم لكم العرض المثالي المتوافق تماماً مع متطلباتكم.</p>
                    </>
                  ) : isEn ? (
                    <>
                      <p>MCS Limo is based in Paris, but takes care of meeting the needs of its customers throughout France, and everywhere else: London, Berlin, Rome, Brussels, New York, Tokyo, etc.</p>
                      <p>Wherever you are, we will be there to accompany you and present you with the offer adapted to your need.</p>
                    </>
                  ) : (
                    <>
                      <p>MCS Limo est basée à Paris, mais se charge de répondre aux besoins de sa clientèle sur toute la France, et partout ailleurs : Londres, Berlin, Rome, Bruxelles, New York, Tokyo, etc.</p>
                      <p>Où que vous soyez, nous serons là pour vous accompagner et vous présenter l’offre adaptée à votre besoin.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MainFooter lang={lang} />
    </div>
  );
}
