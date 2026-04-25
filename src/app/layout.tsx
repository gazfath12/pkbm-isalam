import type { Metadata } from "next";
import Preloader from "@/components/Preloader/Preloader";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://isalam.sch.id"),
  title: {
    default: "PKBM & LKP I-SALAM — Pendidikan Kesetaraan & Pelatihan Vokasional",
    template: "%s | PKBM & LKP I-SALAM",
  },
  description:
    "PKBM & LKP I-SALAM di Colomadu, Karanganyar. Layanan Kejar Paket A/B/C terakreditasi B, kursus komputer, desain grafis, tata boga, dan bimbel SD & SMP berbasis nilai keislaman.",
  keywords: [
    "PKBM I-SALAM",
    "LKP I-SALAM",
    "Pusdiklat ISALAM",
    "Kejar Paket A Colomadu",
    "Kejar Paket B Karanganyar",
    "Kejar Paket C Jawa Tengah",
    "Kursus Komputer Karanganyar",
    "Bimbel SD SMP Colomadu",
    "Pendidikan Kesetaraan",
    "Vokasi Karanganyar"
  ],
  authors: [{ name: "PKBM & LKP I-SALAM", url: "https://isalam.sch.id" }],
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
      "Pusat pengembangan SDM unggul di Colomadu, Karanganyar. PKBM Akreditasi B, LKP Vokasi, dan Bimbel SD & SMP berbasis nilai Islam.",
    url: "https://isalam.sch.id",
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
    google: "google-site-verification-placeholder",
  },
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
