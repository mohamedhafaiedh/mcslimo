"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default function CgvPage() {
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
        <div data-elementor-type="wp-page" data-elementor-id="837" className="elementor elementor-837" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-9dbe79e e-flex e-con-boxed e-con e-parent" data-id="9dbe79e" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-c6886e8 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="c6886e8" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {isAr ? "الشروط العامة للبيع" : isEn ? "Terms & Conditions" : "Conditions générales de vente"}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="elementor-element elementor-element-2ddf322 e-flex e-con-boxed e-con e-parent" data-id="2ddf322" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-1e2d938 elementor-widget elementor-widget-text-editor" data-id="1e2d938" data-element_type="widget" data-e-type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  {isAr ? (
                    <div>
                      <p>
                        تحكم هذه الشروط العامة للبيع خدمات نقل الركاب التي تقدمها شركة MCars Services (MCS Limo)، المسجلة في السجل التجاري والشركات في باريس برقم 852 506 948، والمسجلة في السجل الرسمي لمشغلي سيارات النقل السياحي مع سائق (VTC).
                      </p>
                      <h3><strong>1 / الحجز والتأكيد</strong></h3>
                      <p>
                        يمكن تقديم طلب الحجز عبر موقعنا الإلكتروني، أو عبر البريد الإلكتروني contact@mcslimo.fr، أو عبر الهاتف على الرقم +33 1 89 48 02 96. يصبح الحجز نهائياً بمجرد استلام العميل للتأكيد المكتوب من MCS Limo.
                      </p>
                      <h3><strong>2 / الأسعار وطرق الدفع</strong></h3>
                      <p>
                        تشمل أسعارنا توفير السيارة مع سائق خاص، وتأمين الركاب، والوقود، ورسوم الطرق السريعة، وضريبة القيمة المضافة. يتم الدفع عن طريق بطاقات الائتمان (Visa, Mastercard, American Express)، أو التحويل البنكي، أو الحسابات المؤسسية.
                      </p>
                      <h3><strong>3 / شروط الخدمة والراحة</strong></h3>
                      <p>
                        ارتداء حزام الأمان إلزامي على متن السيارة وفقاً للقوانين الفرنسية. يُمنع التدخين منعاً باتاً داخل جميع مركباتنا. تتوفر المشروبات المنعشة، وشبكة Wi-Fi، ومقاعد الأطفال مجاناً عند الطلب.
                      </p>
                      <h3><strong>4 / الإلغاء والتعديل</strong></h3>
                      <p>
                        الإلغاء مجاني حتى 24 ساعة قبل الموعد المحدد. في حال الإلغاء المتأخر (أقل من 24 ساعة) أو عدم حضور العميل، قد يتم تحصيل قيمة الخدمة كاملة.
                      </p>
                      <h3><strong>5 / القانون المعمول به</strong></h3>
                      <p>
                        تخضع هذه الشروط العامة وتُفسر وفقاً للقانون الفرنسي.
                      </p>
                    </div>
                  ) : isEn ? (
                    <div>
                      <p>
                        These general terms and conditions of sale govern the passenger transportation services provided by MCars Services (MCS Limo), registered with the Paris Trade and Companies Register under number 852 506 948, and registered on the official register of passenger car operators with driver (VTC).
                      </p>
                      <h3><strong>1 / Booking & Confirmation</strong></h3>
                      <p>
                        Bookings can be made online via our website, by email at contact@mcslimo.fr, or by phone at +33 1 89 48 02 96. A reservation becomes definitive upon written confirmation issued by MCS Limo.
                      </p>
                      <h3><strong>2 / Pricing & Payment</strong></h3>
                      <p>
                        Our rates include vehicle rental with a private chauffeur, passenger insurance, fuel, toll charges, and VAT at prevailing rates. Payment is accepted via major credit cards (Visa, Mastercard, American Express), bank transfer, or corporate billing.
                      </p>
                      <h3><strong>3 / Terms of Service & Amenities</strong></h3>
                      <p>
                        Passengers must wear seat belts in accordance with French road regulations. All vehicles are strictly non-smoking. Complimentary Wi-Fi, refreshments, and child seats are available upon request.
                      </p>
                      <h3><strong>4 / Cancellation & Modifications</strong></h3>
                      <p>
                        Cancellations made at least 24 hours prior to the scheduled pickup time are free of charge. For cancellations made less than 24 hours in advance or in the event of a client no-show, the full rate or standby fee may apply.
                      </p>
                      <h3><strong>5 / Applicable Law</strong></h3>
                      <p>
                        These terms and conditions are governed by and construed in accordance with French law.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>
                        Les présentes conditions générales de vente sont conclues entre la société Mcars Services (MCS Limo), immatriculée au RCS de Paris sous le numéro 852 506 948, enregistrée au registre des exploitants de voiture de tourisme avec chauffeur (VTC), et toute personne désirant réserver un service de transport de personnes avec chauffeur.
                      </p>
                      <h3><strong>1 / Réservation et Confirmation</strong></h3>
                      <p>
                        La demande de réservation d’un Service peut être effectuée sur notre site internet, par mail à contact@mcslimo.fr ou par téléphone au +33 1 89 48 02 96. La réservation devient ferme et définitive dès réception par le Client de la confirmation écrite de MCS Limo.
                      </p>
                      <h3><strong>2 / Tarifs et Modalités de Paiement</strong></h3>
                      <p>
                        Nos tarifs sont indiqués TTC et comprennent la mise à disposition du véhicule avec chauffeur privé, l'assurance des personnes transportées, le carburant, les péages et la TVA au taux légal. Le règlement s'effectue par carte bancaire (Visa, Mastercard, American Express), virement ou compte entreprise.
                      </p>
                      <h3><strong>3 / Conditions d'exécution et Prestations</strong></h3>
                      <p>
                        Le port de la ceinture de sécurité est obligatoire à bord. Tous nos véhicules sont strictement non-fumeurs. Des rafraîchissements, une connexion Wi-Fi et des sièges enfants sont mis à disposition sur demande.
                      </p>
                      <h3><strong>4 / Annulation et Modification</strong></h3>
                      <p>
                        Toute annulation effectuée au moins 24 heures avant l'heure convenue est sans frais. En cas d'annulation tardive (moins de 24 heures) ou de non-présentation du client, la prestation pourra être facturée.
                      </p>
                      <h3><strong>5 / Droit Applicable</strong></h3>
                      <p>
                        Les présentes conditions générales sont régies et interprétées conformément au droit français.
                      </p>
                    </div>
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
