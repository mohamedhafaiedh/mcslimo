import React from "react";
import Script from "next/script";
import "@/app/globals.css";
import JsonLd from "./JsonLd";
import MobileMenuScript from "./MobileMenuScript";
import { LOCALES, Lang } from "@/lib/seo";

export default function BaseLayout({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const localeInfo = LOCALES[lang];

  return (
    <html lang={localeInfo.code} dir={localeInfo.dir} suppressHydrationWarning>
      <head>
        <JsonLd lang={lang} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&family=Dosis:wght@500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Google Tag Manager (GTM-NZGFNG4) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NZGFNG4');`}
        </Script>

        {/* Google Analytics 4 (GA4 G-V5RTREXCBK) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V5RTREXCBK"
          strategy="afterInteractive"
        />
        <Script id="ga4-script" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-V5RTREXCBK');`}
        </Script>

        {/* WhatsApp Chat Widget (Wati) */}
        <Script id="wati-widget" strategy="lazyOnload">
          {`(function() {
  var p = window.location.pathname;
  var isAr = '${lang}' === 'ar' || p === '/ar' || p.indexOf('/ar/') === 0;
  var isEn = '${lang}' === 'en' || p === '/en' || p.indexOf('/en/') === 0;
  var isEs = '${lang}' === 'es' || p === '/es' || p.indexOf('/es/') === 0;
  var isIt = '${lang}' === 'it' || p === '/it' || p.indexOf('/it/') === 0;

  var texts = {
    subTitle: "Nous répondons en quelques minutes",
    welcome: "Bonjour,\\nComment pouvons-nous vous aider ?",
    msg: "Bonjour,\\nJ'ai une question à vous poser",
    cta: "Lancer la discussion"
  };

  if (isAr) {
    texts = {
      subTitle: "نرد خلال دقائق معدودة",
      welcome: "مرحباً،\\nكيف يمكننا مساعدتك؟",
      msg: "Hello,\\nI have a question",
      cta: "بدء المحادثة"
    };
  } else if (isEn) {
    texts = {
      subTitle: "We reply within a few minutes",
      welcome: "Hello,\\nHow can we help you?",
      msg: "Hello,\\nI have a question",
      cta: "Start Chat"
    };
  } else if (isEs) {
    texts = {
      subTitle: "Respondemos en pocos minutos",
      welcome: "Hola,\\n¿Cómo podemos ayudarle?",
      msg: "Hello,\\nI have a question",
      cta: "Iniciar conversación"
    };
  } else if (isIt) {
    texts = {
      subTitle: "Rispondiamo in pochi minuti",
      welcome: "Buongiorno,\\nCome possiamo aiutarvi?",
      msg: "Hello,\\nI have a question",
      cta: "Avvia chat"
    };
  }

  var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?65773';
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = url;
  var options = {
    "enabled": true,
    "chatButtonSetting": {
      "backgroundColor": "#4dc247",
      "ctaText": "",
      "borderRadius": "25",
      "marginLeft": "0",
      "marginBottom": "50",
      "marginRight": "50",
      "position": "right"
    },
    "brandSetting": {
      "brandName": "MCS Limo",
      "brandSubTitle": texts.subTitle,
      "brandImg": "/images/cropped-MCS-Limo-fav.png",
      "welcomeText": texts.welcome,
      "messageText": texts.msg,
      "backgroundColor": "#0a5f54",
      "ctaText": texts.cta,
      "borderRadius": "25",
      "autoShow": false,
      "phoneNumber": "33673399525"
    }
  };
  s.onload = function() {
    if (typeof CreateWhatsappChatWidget === 'function') {
      CreateWhatsappChatWidget(options);
    }
  };
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);

  document.addEventListener('click', function(e) {
    var closeBtn = e.target && (e.target.closest ? e.target.closest('.wa-chat-bubble-close-btn') : null);
    if (closeBtn || (e.target && e.target.classList && e.target.classList.contains('wa-chat-bubble-close-btn'))) {
      var box = document.querySelector('.wa-chat-box');
      if (box) {
        box.style.display = 'none';
      }
    }
  }, true);
})();`}
        </Script>
      </head>
      <body className="home page-template-default page page-id-915 wp-custom-logo wp-embed-responsive ehf-header ehf-footer ehf-template-hello-elementor ehf-stylesheet-hello-elementor elementor-default elementor-kit-6 elementor-page elementor-page-915">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZGFNG4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MobileMenuScript />
        {children}
      </body>
    </html>
  );
}
