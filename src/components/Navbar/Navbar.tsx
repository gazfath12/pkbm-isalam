"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { SITE } from "@/data/siteData";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#program", label: "Program" },
  { href: "#tim", label: "Tim" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#kegiatan", label: "Kegiatan" },
  { href: "#artikel", label: "Fawaid" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    
    if (pathname !== "/" && href.startsWith("#")) {
      router.push(`/${href}`);
      return;
    }
    
    // Add a slight delay to allow the mobile menu to close before calculating position
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        {/* Logo */}
        <a href={pathname !== "/" ? "/#beranda" : "#beranda"} className={styles.logo} onClick={(e) => handleNavClick(e, "#beranda")}>
          <div className={styles.logoImgWrap}>
            <Image
              src="/assets/logo_transparent.png"
              alt="Logo Pusdiklat ISALAM"
              width={48}
              height={48}
              className={styles.logoImg}
              priority
            />
          </div>
          <div className={styles.logoTextWrap}>
            <span className={styles.logoTitle}>{SITE.shortName}</span>
            <span className={styles.logoSub}>{SITE.tagline}</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={pathname !== "/" && link.href.startsWith("#") ? `/${link.href}` : link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={pathname !== "/" ? "/#daftar" : "#daftar"}
          className={`btn btn-primary ${styles.ctaBtn}`}
          onClick={(e) => handleNavClick(e, "#daftar")}
        >
          Daftar Sekarang
          <FiChevronRight size={16} />
        </a>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={pathname !== "/" && link.href.startsWith("#") ? `/${link.href}` : link.href}
                className={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href={pathname !== "/" ? "/#daftar" : "#daftar"}
              className={`btn btn-primary ${styles.mobileCta}`}
              onClick={(e) => handleNavClick(e, "#daftar")}
            >
              Daftar Sekarang
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
