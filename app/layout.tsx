import { Metadata } from "next";
import "./globals.css";
import { Oswald, Poppins } from "next/font/google";

import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";
import CookieConsent from "./components/CookieConsent";

// 🔤 FONTE
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// 🔎 METADATA SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://vidrosa.com.br"),

  title: "Vidraçaria em Belo Horizonte | Vidrosa Vidros e Esquadrias",

  description:
    "Vidraçaria em Belo Horizonte com mais de 28 anos. Box, fachadas, espelhos e esquadrias de alumínio sob medida. Orçamento grátis!",

  keywords: [
    "vidraçaria em belo horizonte",
    "box de banheiro bh",
    "fachada de vidro bh",
    "esquadrias de alumínio bh",
    "vidraçaria vidrosa",
    "vidraçaria perto de mim",
    "orçamento vidraçaria",
    "orçamento blindex",
    "orçamento box de banheiro",
    "orçamento esquadrias de alumínio",
    "vidros sob medida",
    "vidraçaria em bh",
    "vidraceiro em bh",
    "espelho sob medida",
    "vidraçaria perto de mim",
    "vidraçaria próximo de mim",
    "vidraçaria perto",
    "orçamento pele de vidro",
  ],

  authors: [{ name: "Vidrosa" }],

  openGraph: {
    title: "Vidraçaria em Belo Horizonte | Vidrosa",
    description:
      "Soluções em vidro sob medida com instalação rápida em BH e região.",
    url: "https://vidrosa.com.br",
    siteName: "Vidrosa",
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={oswald.className}>
        {/* 🔥 GOOGLE TAG */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16583312985"
          strategy="afterInteractive"
        />

        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16583312985');
          `}
        </Script>

        {/* 🔥 META PIXEL */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1154529539720656');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* NOSCRIPT PIXEL */}
        <noscript>
          <img
            height="1"
            width="1"
            alt="metapixel"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1154529539720656&ev=PageView&noscript=1"
          />
        </noscript>
        <Header />
        {children}
        <Footer />
        <WhatsappFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
