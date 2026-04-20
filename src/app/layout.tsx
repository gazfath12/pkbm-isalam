import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pusdiklat ISALAM — PKBM Inisiator Salam Kariim & LKP ISALAM",
  description:
    "Pusdiklat ISALAM menghadirkan PKBM Inisiator Salam Kariim & LKP ISALAM di Colomadu, Karanganyar. Layanan pendidikan Kejar Paket A/B/C, kursus menjahit, komputer, dan pelatihan keterampilan vokasional berbasis nilai keislaman.",
  keywords: "Pusdiklat ISALAM, PKBM Inisiator Salam Kariim, LKP ISALAM, Kejar Paket A, Kejar Paket B, Kejar Paket C, Kursus Menjahit Karanganyar, Kursus Komputer Colomadu, Pendidikan Kesetaraan, Pelatihan Kerja, Karanganyar, Jawa Tengah",
  authors: [{ name: "Pusdiklat ISALAM" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Pusdiklat ISALAM — Pendidikan Kesetaraan & Pelatihan Keterampilan",
    description:
      "Pusat pengembangan SDM unggul di Colomadu, Karanganyar. Menyediakan Kejar Paket A/B/C dan berbagai pelatihan vokasional profesional.",
    url: "https://pusdiklat-isalam.com", // Ganti dengan domain asli jika sudah ada
    siteName: "Pusdiklat ISALAM",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Pusdiklat ISALAM",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pusdiklat ISALAM — PKBM & LKP",
    description: "Lembaga pendidikan kesetaraan dan kursus pelatihan di Karanganyar.",
    images: ["/assets/logo.png"],
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
      <body>{children}</body>
    </html>
  );
}
