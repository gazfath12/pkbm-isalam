import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PKBM & LKP - Pusat Kegiatan Belajar Masyarakat",
  description:
    "Lembaga pendidikan nonformal yang berkomitmen memberdayakan masyarakat melalui program PKBM dan LKP. Bergabunglah bersama kami dalam mencerdaskan kehidupan bangsa.",
  keywords: "PKBM, LKP, pendidikan nonformal, kejar paket, kursus, pelatihan",
  openGraph: {
    title: "PKBM & LKP - Pusat Kegiatan Belajar Masyarakat",
    description:
      "Lembaga pendidikan nonformal yang berkomitmen memberdayakan masyarakat.",
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
