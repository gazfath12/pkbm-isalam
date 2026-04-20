"use client";

import Image from "next/image";
import styles from "./Footer.module.css";
import { FiHeart, FiMessageCircle, FiInstagram, FiFacebook, FiMapPin } from "react-icons/fi";
import { SITE, CONTACT, PROGRAMS } from "@/data/siteData";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#program", label: "Program" },
  { href: "#statistik", label: "Statistik" },
  { href: "#artikel", label: "Fawaid" },
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
                <Image
                  src="/assets/logo.jpg"
                  alt="Logo Pusdiklat ISALAM"
                  width={44}
                  height={44}
                  className={styles.footerLogoImg}
                />
                <div className={styles.footerLogoCopy}>
                  <span className={styles.footerLogoTitle}>{SITE.shortName}</span>
                  <span className={styles.footerLogoSub}>{SITE.tagline}</span>
                </div>
              </div>
              <p className={styles.footerTagline}>
                {SITE.description}
              </p>
              <div className={styles.footerContact}>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.footerWa}
                  id="footer-wa-btn"
                >
                  <FiMessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(CONTACT.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.footerLocation}
                >
                  <FiMapPin size={14} />
                  {CONTACT.address}
                </a>
              </div>
            </div>

            {/* Navigation */}
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
              <div className={styles.programBadges}>
                {PROGRAMS.map((p) => (
                  <div key={p.id} className={styles.programBadge}>
                    <span className={styles.programBadgeTag}>{p.tag}</span>
                    <span className={styles.programBadgeName}>{p.name}</span>
                  </div>
                ))}
              </div>
              <ul className={styles.footerLinks} style={{ marginTop: "0.75rem" }}>
                {[
                  "Kejar Paket A (SD)",
                  "Kejar Paket B (SMP)",
                  "Kejar Paket C (SMA)",
                  "Kursus Menjahit",
                  "Kursus Komputer",
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
                  { label: "Ijin Operasional Aktif", icon: "✅" },
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
              &copy; {year} {SITE.name}. Hak cipta dilindungi undang-undang.
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
