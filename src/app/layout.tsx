import type { Metadata } from "next";
import Script from "next/script";
import Preloader from "@/components/Preloader/Preloader";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pusdiklatisalam.web.id"),
  title: {
    default: "PKBM & LKP I-SALAM — Kejar Paket A/B/C & Kursus Vokasi Colomadu, Solo",
    template: "%s | PKBM & LKP I-SALAM",
  },
  description:
    "PKBM & LKP I-SALAM (Pusdiklat I-Salam) di Colomadu, Karanganyar. Layanan Kejar Paket A/B/C Terakreditasi, Kursus Komputer, Desain Grafis, dan Tata Boga di daerah Solo Raya.",
  keywords: [
    "PKBM I-SALAM",
    "PKBM ISALAM",
    "I-SALAM",
    "PKBM Colomadu",
    "PKBM Solo",
    "PKBM Karanganyar",
    "LKP I-SALAM",
    "Pusdiklat ISALAM",
    "Kejar Paket A Colomadu",
    "Kejar Paket B Karanganyar",
    "Kejar Paket C Solo",
    "Kursus Komputer Karanganyar",
    "Bimbel SD SMP Colomadu",
    "Pendidikan Kesetaraan Solo",
    "Vokasi Karanganyar",
    "Sekolah Paket Solo"
  ],
  authors: [{ name: "PKBM & LKP I-SALAM", url: "https://www.pusdiklatisalam.web.id" }],
  creator: "PKBM & LKP I-SALAM",
  publisher: "PKBM & LKP I-SALAM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
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
    title: "PKBM & LKP I-SALAM — Pendidikan Kesetaraan & Pelatihan Vokasional",
    description:
      "Pusat pengembangan SDM unggul di Colomadu, Karanganyar. PKBM Akreditasi B, LKP Vokasi, dan Bimbel SD & SMP berbasis nilai Islam di Solo Raya.",
    url: "https://www.pusdiklatisalam.web.id",
    siteName: "PKBM & LKP I-SALAM",
    images: [
      {
        url: "/assets/logo_transparent.png",
        width: 1200,
        height: 630,
        alt: "Logo PKBM & LKP I-SALAM",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PKBM & LKP I-SALAM",
    description: "Lembaga pendidikan kesetaraan, kursus vokasional, dan bimbel di Karanganyar, Jawa Tengah.",
    images: ["/assets/logo_transparent.png"],
    creator: "@pkbm_isalam",
  },
  verification: {
    google: "83999e39988338a6",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "PKBM & LKP I-SALAM",
    "alternateName": "Pusdiklat I-Salam",
    "url": "https://www.pusdiklatisalam.web.id",
    "logo": "https://www.pusdiklatisalam.web.id/assets/logo_transparent.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6281391002505",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["id"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Colomadu",
      "addressLocality": "Karanganyar",
      "addressRegion": "Jawa Tengah",
      "postalCode": "57175",
      "addressCountry": "ID"
    },
    "description": "Lembaga pendidikan nonformal dan pelatihan keterampilan di Colomadu, Karanganyar, Jawa Tengah.",
    "sameAs": [
      "https://www.instagram.com/pkbm_isalam"
    ]
  };

  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
