import type { Metadata } from "next";
import Preloader from "@/components/Preloader/Preloader";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://isalam.sch.id"), // Update dengan domain asli
  title: "PKBM & LKP I-SALAM — Pendidikan Kesetaraan & Pelatihan Vokasional",
  description:
    "PKBM & LKP I-SALAM hadir di Colomadu, Karanganyar. Layanan Kejar Paket A/B/C terakreditasi B, kursus komputer, desain grafis, tata boga, hantaran, dan bimbel SD & SMP berbasis nilai keislaman.",
  keywords: "PKBM I-SALAM, LKP I-SALAM, Bimbel I-SALAM, Kejar Paket A, Kejar Paket B, Kejar Paket C, Kursus Komputer, Desain Grafis, Tata Boga, Hantaran, Bimbel SD SMP, Colomadu, Karanganyar, Jawa Tengah",
  authors: [{ name: "PKBM & LKP I-SALAM" }],
  robots: "index, follow",
  openGraph: {
    title: "PKBM & LKP I-SALAM — Pendidikan Kesetaraan & Pelatihan Vokasional",
    description:
      "Pusat pengembangan SDM unggul di Colomadu, Karanganyar. PKBM Akreditasi B, LKP Vokasi, dan Bimbel SD & SMP berbasis nilai Islam.",
    url: "https://isalam.sch.id",
    siteName: "PKBM & LKP I-SALAM",
    images: [
      {
        url: "/assets/logo_transparent.png",
        width: 800,
        height: 600,
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
  },
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
