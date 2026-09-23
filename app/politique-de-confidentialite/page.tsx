"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default function PolitiqueDeConfidentialitePage() {
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
        <div data-elementor-type="wp-page" data-elementor-id="3" className="elementor elementor-3" data-elementor-post-type="page">
          <div className="elementor-element elementor-element-a7e2631 e-flex e-con-boxed e-con e-parent" data-id="a7e2631" data-element_type="container" data-e-type="container" data-settings='{"background_background":"classic"}'>
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-ef352e7 elementor-widget__width-inherit elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="ef352e7" data-element_type="widget" data-e-type="widget" data-widget_type="theme-page-title.default">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {isAr ? "سياسة الخصوصية وملفات تعريف الارتباط" : isEn ? "Privacy & Cookie Policy" : "Politique de confidentialité"}
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
                        ملف تعريف الارتباط (Cookie) هو ملف صغير يتم حفظه على جهازك عند تصفح موقعنا. يتيح لنا تذكر تفضيلاتك (مثل اللغة المختارة)، وتحليل حركة المرور على الموقع، وتحسين تجربة التصفح الخاصة بك.
                      </p>
                      <h3><strong>كيفية إدارة ملفات تعريف الارتباط في متصفحك</strong></h3>
                      <p>
                        يمكنك في أي وقت ضبط إعدادات متصفحك لقبول أو رفض أو حذف ملفات تعريف الارتباط:
                      </p>
                      <ul>
                        <li><strong>Google Chrome:</strong> الإعدادات &gt; الخصوصية والأمان &gt; ملفات تعريف الارتباط وبيانات الموقع الأخرى.</li>
                        <li><strong>Mozilla Firefox:</strong> الإعدادات &gt; الخصوصية والأمان &gt; ملفات تعريف الارتباط وبيانات الموقع.</li>
                        <li><strong>Safari:</strong> التفضيلات &gt; الخصوصية &gt; إدارة بيانات موقع الويب.</li>
                        <li><strong>Microsoft Edge:</strong> الإعدادات &gt; ملفات تعريف الارتباط وأذونات الموقع.</li>
                      </ul>
                      <h3><strong>حقوقك المتعلقة ببياناتك الشخصية</strong></h3>
                      <p>
                        وفقاً للائحة العامة لحماية البيانات (GDPR)، يحق لك الوصول إلى بياناتك الشخصية وتصحيحها أو طلب حذفها من خلال مراسلتنا على contact@mcslimo.fr.
                      </p>
                    </div>
                  ) : isEn ? (
                    <div>
                      <p>
                        A cookie is a small file stored on your browser or device when you browse our website. It allows us to remember your preferences (such as your chosen language), analyze site traffic, and enhance your user experience.
                      </p>
                      <h3><strong>Managing Cookies in Your Browser</strong></h3>
                      <p>
                        You can configure your browser to accept, refuse, or delete cookies at any time:
                      </p>
                      <ul>
                        <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data.</li>
                        <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data.</li>
                        <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data.</li>
                        <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions.</li>
                      </ul>
                      <h3><strong>Your Data Rights</strong></h3>
                      <p>
                        Under European GDPR regulations, you have full rights to access, rectify, or request the deletion of any personal information stored with us. For inquiries, please email contact@mcslimo.fr.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>
                        Le « cookie » est un fichier installé sur votre terminal, permettant de stocker des informations relatives à votre navigation sur notre site internet dans le but, notamment, de mémoriser vos préférences et paramètres (comme la langue choisie), d’analyser la fréquentation de notre site et d’améliorer votre expérience utilisateur.
                      </p>
                      <h3><strong>Comment exercer votre choix concernant les cookies ?</strong></h3>
                      <p>
                        À tout moment, vous pouvez exprimer et modifier vos préférences en matière de cookies via la section Paramètres de votre navigateur :
                      </p>
                      <ul>
                        <li><strong>Google Chrome :</strong> Paramètres &gt; Confidentialité et sécurité &gt; Cookies et autres données des sites.</li>
                        <li><strong>Mozilla Firefox :</strong> Paramètres &gt; Vie privée et sécurité &gt; Cookies et données de sites.</li>
                        <li><strong>Safari :</strong> Préférences &gt; Confidentialité &gt; Gérer les données de sites web.</li>
                        <li><strong>Microsoft Edge :</strong> Paramètres &gt; Cookies et autorisations de site.</li>
                      </ul>
                      <h3><strong>Vos droits sur vos données personnelles</strong></h3>
                      <p>
                        Conform&eacute;ment au RGPD et &agrave; la loi Informatique et Libert&eacute;s, vous disposez d&apos;un droit d&apos;acc&egrave;s, de rectification et d&apos;effacement de vos donn&eacute;es personnelles en nous &eacute;crivant &agrave; contact@mcslimo.fr.
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
