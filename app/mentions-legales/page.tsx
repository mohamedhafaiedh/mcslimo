"use client";

import React from "react";
import { usePathname } from "next/navigation";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default function MentionsLegalesPage() {
  const pathname = usePathname() || "";
  const isAr = pathname === "/ar" || pathname.startsWith("/ar/");
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const lang: "fr" | "en" | "ar" = isAr ? "ar" : isEn ? "en" : "fr";

  return (
    <div id="page" className="site" dir={isAr ? "rtl" : "ltr"}>
      <a className="skip-link screen-reader-text" href="#content">
        {isAr ? "الانتقال إلى المحتوى" : isEn ? "Skip to content" : "Aller au contenu"}
      </a>

      <MainHeader lang={lang} currentPath={pathname} />

      <main id="content" className="site-main">
        <div data-elementor-type="wp-page" data-elementor-id="378" className="elementor elementor-378" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-052ad09 e-flex e-con-boxed e-con e-parent" data-id="052ad09" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-f409666 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="f409666" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {isAr ? "الإشعارات القانونية" : isEn ? "Legal Notices" : "Mentions légales"}
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
                      <h2><strong>معلومات عامة</strong></h2>
                      <p>
                        <strong>اسم الشركة</strong>: MCars Services (MCS Limo)<br />
                        <strong>الشكل القانوني</strong>: SARL<br />
                        <strong>رأس المال</strong>: 1,000 يورو<br />
                        <strong>رقم السجل التجاري (SIRET)</strong>: 85250694800011<br />
                        <strong>رقم ضريبة القيمة المضافة</strong>: FR38852506948<br />
                        <strong>المقر الرئيسي</strong>: 10 Place Lucien Boilleau, 91420 Morangis, France<br />
                        <strong>الهاتف</strong>: +33 1 89 48 02 96<br />
                        <strong>البريد الإلكتروني</strong>: contact@mcslimo.fr
                      </p>
                      <h2><strong>الاستضافة</strong></h2>
                      <p>
                        <strong>المستضيف</strong>: Hostinger<br />
                        <strong>الاتصال</strong>: contact@hostinger.com
                      </p>
                      <h2><strong>الملكية الفكرية</strong></h2>
                      <p>
                        جميع محتويات هذا الموقع، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والصور ومقاطع الفيديو والشعارات، هي ملك حصري لشركة MCars Services، باستثناء العلامات التجارية أو الشعارات التابعة للشركاء. يُحظر أي نسخ أو توزيع دون إذن كتابي مسبق.
                      </p>
                      <h2><strong>سياسة الخصوصية وحماية البيانات</strong></h2>
                      <p>
                        وفقاً للائحة العامة لحماية البيانات (GDPR) والقوانين المعمول بها، يحق لك الوصول إلى بياناتك الشخصية وتصحيحها وحذفها عبر مراسلتنا على contact@mcslimo.fr أو عبر البريد العادي إلى مقر شركتنا.
                      </p>
                    </div>
                  ) : isEn ? (
                    <div>
                      <h2><strong>General Information</strong></h2>
                      <p>
                        <strong>Company Name</strong>: MCars Services (MCS Limo)<br />
                        <strong>Legal Form</strong>: SARL<br />
                        <strong>Share Capital</strong>: €1,000<br />
                        <strong>SIRET</strong>: 85250694800011<br />
                        <strong>VAT Number</strong>: FR38852506948<br />
                        <strong>Headquarters</strong>: 10 Place Lucien Boilleau, 91420 Morangis, France<br />
                        <strong>Phone</strong>: +33 1 89 48 02 96<br />
                        <strong>Email</strong>: contact@mcslimo.fr
                      </p>
                      <h2><strong>Web Hosting</strong></h2>
                      <p>
                        <strong>Host</strong>: Hostinger<br />
                        <strong>Contact</strong>: contact@hostinger.com
                      </p>
                      <h2><strong>Intellectual Property</strong></h2>
                      <p>
                        All content on this website, including but not limited to graphics, images, text, videos, logos, and layout, is the exclusive property of MCars Services, with the exception of trademarks or logos belonging to partner entities. Any reproduction or distribution without prior written permission is prohibited.
                      </p>
                      <h2><strong>Privacy Policy & Data Protection</strong></h2>
                      <p>
                        In accordance with applicable European GDPR and French data protection regulations (Loi Informatique et Libertés), you have the right to access, rectify, and delete your personal data by sending a written request to contact@mcslimo.fr or by postal mail to our headquarters.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h2><strong>Informations générales</strong></h2>
                      <p>
                        <strong>Dénomination</strong> : MCars Services<br />
                        <strong>Forme juridique</strong> : SARL<br />
                        <strong>Capital social</strong> : 1.000 €<br />
                        <strong>Numéro de SIRET </strong>: 85250694800011<br />
                        <strong>Numéro de TVA </strong>: FR38852506948<br />
                        <strong>Siège social</strong> : 10 Place Lucien Boilleau, 91420 Morangis<br />
                        <strong>Téléphone </strong>: +33 1 89 48 02 96
                      </p>
                      <h2><strong>Hébergeur</strong></h2>
                      <p>
                        <strong>Nom </strong>: Hostinger<br />
                        <strong>Contact </strong>: contact@hostinger.com
                      </p>
                      <h2><strong>Propriété intellectuelle</strong></h2>
                      <p>
                        Tout le contenu du présent site incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société MCars Services à l’exception des marques, logos ou contenus appartenant à d’autres sociétés partenaires ou auteurs.
                      </p>
                      <h2><strong>Politique de confidentialité</strong></h2>
                      <p>
                        Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant en nous contactant à 10 Place Lucien Boilleau, 91420 Morangis ou par email à contact@mcslimo.fr.
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
