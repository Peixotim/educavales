import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import Image from "next/image";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://faculdadeeducavale.com.br"),
  title: {
    default: "Faculdade EducaVale - Pós-graduação e MBA Reconhecidos pelo MEC",
    template: "%s | Faculdade EducaVale",
  },
  description:
    "Faculdade EducaVale: Pós-graduação e MBA 100% online, metodologia inovadora, professores especialistas e certificação reconhecida pelo MEC. Transforme sua carreira hoje!",
  keywords: [
    "faculdade",
    "educavale",
    "pós-graduação",
    "mba",
    "ensino a distância",
    "ead",
    "cursos online",
  ],
  authors: [{ name: "Faculdade EducaVale" }],
  creator: "Faculdade EducaVale",
  publisher: "Faculdade EducaVale",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "http://faculdadeeducavale.com.br",
    siteName: "Faculdade EducaVale",
    title: "Faculdade EducaVale - Pós-graduação e MBA Reconhecidos pelo MEC",
    description:
      "Cursos de Pós-graduação e MBA online reconhecidos pelo MEC. Avance na carreira com a EducaVale.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faculdade EducaVale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@faculdadeeducavale",
    creator: "@faculdadeeducavale",
    title: "Faculdade EducaVale",
    description: "Cursos de Pós-graduação e MBA online reconhecidos pelo MEC.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "http://faculdadeeducavale.com.br",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-pt-40">
      <head>
        <meta
          name="google-site-verification"
          content="p8j7IGmPd_8IsEFdVTNRjDD2pJvACQRk_mAqWs6bc1M"
        />

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
            fbq('init', '830251270171431'); // Novo ID do pixel
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <Image
            height="1"
            width="1"
            alt="facebook-script"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=830251270171431&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className={montserrat.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
