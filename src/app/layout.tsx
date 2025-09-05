import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EducaVales",
  description: "Cursos e certificações de qualidade",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/favicon.ico",
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
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
