"use client";

import styles from "./Footer.module.css";
import { FiHeart } from "react-icons/fi";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#program", label: "Program" },
  { href: "#statistik", label: "Statistik" },
  { href: "#artikel", label: "Artikel" },
  { href: "#daftar", label: "Daftar" },
  { href: "#kontak", label: "Kontak" },
];

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Brand */}
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="10" fill="url(#footerLogoGrad)" />
                  <path d="M8 28L20 12L32 28H8Z" fill="white" opacity="0.9"/>
                  <circle cx="20" cy="18" r="4" fill="rgba(255,255,255,0.5)"/>
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="40" y2="40">
                      <stop stopColor="#0a4d4a"/>
                      <stop offset="1" stopColor="#c9a84c"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className={styles.footerLogoText}>PKBM & LKP</span>
              </div>
              <p className={styles.footerTagline}>
                Memberdayakan Masyarakat Melalui Pendidikan Berkualitas yang Inklusif dan Bermartabat.
              </p>
            </div>

            {/* Quick Links */}
            <div className={styles.footerSection}>
              <h5 className={styles.footerHeading}>Navigasi</h5>
              <ul className={styles.footerLinks}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      className={styles.footerLink}
                      onClick={() => scrollToSection(link.href)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className={styles.footerSection}>
              <h5 className={styles.footerHeading}>Program</h5>
              <ul className={styles.footerLinks}>
                {[
                  "Kejar Paket A",
                  "Kejar Paket B",
                  "Kejar Paket C",
                  "Kursus Menjahit",
                  "Kursus Komputer",
                  "Tata Kecantikan",
                ].map((p) => (
                  <li key={p}>
                    <button className={styles.footerLink} onClick={() => scrollToSection("#program")}>
                      {p}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className={styles.footerSection}>
              <h5 className={styles.footerHeading}>Legalitas</h5>
              <div className={styles.legalBadges}>
                {[
                  { label: "Terdaftar Kemendikbud", icon: "🏛️" },
                  { label: "Akreditasi B", icon: "🎖️" },
                  { label: "NPSN Resmi", icon: "📋" },
                ].map((b) => (
                  <div key={b.label} className={styles.legalBadge}>
                    <span>{b.icon}</span>
                    <span>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              &copy; {year} PKBM & LKP. Hak cipta dilindungi undang-undang.
            </p>
            <p className={styles.madeWith}>
              Dibuat dengan <FiHeart size={13} className={styles.heartIcon} /> untuk kemajuan pendidikan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
