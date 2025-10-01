import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serzer Klima - Profesyonel Klima Bakım ve Su Arıtma Servisi | İzmir",
  description: "İzmir'da klima bakım, onarım, montaj ve su arıtma cihazı tamiri hizmetleri. Uzman teknisyenlerimizle 7/24 hizmetinizdeyiz. Uygun fiyat, kaliteli hizmet.",
  keywords: "klima bakım, klima tamiri, su arıtma tamiri, klima montaj, acil klima servisi, İzmir klima servisi, klima gaz dolumu, filtre temizliği",
  authors: [{ name: "Serzer Klima" }],
  creator: "Serzer Klima",
  publisher: "Serzer Klima",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://serzerklima.com',
    title: 'Serzer Klima - Profesyonel Klima Bakım ve Su Arıtma Servisi',
    description: 'İzmir\'da klima bakım, onarım, montaj ve su arıtma cihazı tamiri hizmetleri. Uzman teknisyenlerimizle 7/24 hizmetinizdeyiz.',
    siteName: 'Serzer Klima',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serzer Klima - Profesyonel Klima Bakım ve Su Arıtma Servisi',
    description: 'İzmir\'da klima bakım, onarım, montaj ve su arıtma cihazı tamiri hizmetleri. Uzman teknisyenlerimizle 7/24 hizmetinizdeyiz.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
