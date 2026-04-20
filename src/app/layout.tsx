import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pusdiklat ISALAM — PKBM Inisiator Salam Kariim & LKP ISALAM",
  description:
    "Pusdiklat ISALAM adalah lembaga pendidikan dan pelatihan berbasis nilai keislaman di Colomadu, Karanganyar. Program PKBM Inisiator Salam Kariim dan LKP ISALAM hadir untuk memberdayakan masyarakat.",
  keywords: "Pusdiklat ISALAM, PKBM Inisiator Salam Kariim, LKP ISALAM, pendidikan nonformal, kejar paket, kursus, pelatihan, Karanganyar",
  openGraph: {
    title: "Pusdiklat ISALAM — PKBM & LKP",
    description:
      "Pusat pengembangan SDM unggul, profesional, dan berakhlak mulia di Colomadu, Karanganyar.",
    type: "website",
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
