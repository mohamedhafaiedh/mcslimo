import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import MobileMenuScript from "./components/MobileMenuScript";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
    template: "%s",
  },
  description: "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris",
  openGraph: {
    title: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
    description: "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris",
    url: `${SITE_URL}/`,
    siteName: "MCS Limo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/MCS-Limo-logo-1000x450-1.png",
        width: 1000,
        height: 450,
        alt: "MCS Limo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chauffeur privé Haut de gamme à Paris - MCS Limo",
    description: "Pour tous vos trajets à Paris depuis ou vers les gares ou aéroports parisiens ou encore les longs trajets depuis/vers Paris",
    images: ["/images/MCS-Limo-logo-1000x450-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

        {/* Google Tag Manager (GTM-PXGBR8D5) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXGBR8D5');`}
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
      "brandSubTitle": "Nous répondons en quelques minutes",
      "brandImg": "/images/cropped-MCS-Limo-fav.png",
      "welcomeText": "Bonjour,\\nComment pouvons-nous vous aider ?",
      "messageText": "Bonjour, \\nJ'ai une question à vous poser",
      "backgroundColor": "#0a5f54",
      "ctaText": "Lancer la discussion",
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
})();`}
        </Script>
      </head>
      <body className="home page-template-default page page-id-915 wp-custom-logo wp-embed-responsive ehf-header ehf-footer ehf-template-hello-elementor ehf-stylesheet-hello-elementor elementor-default elementor-kit-6 elementor-page elementor-page-915">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PXGBR8D5"
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
