"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#program", label: "Program" },
  { href: "#statistik", label: "Statistik" },
  { href: "#artikel", label: "Artikel" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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
        <a href="#beranda" className={styles.logo} onClick={(e) => handleNavClick(e, "#beranda")}>
          <div className={styles.logoMark}>
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
              <path d="M8 28L20 12L32 28H8Z" fill="white" opacity="0.9"/>
              <circle cx="20" cy="18" r="4" fill="rgba(255,255,255,0.5)"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop stopColor="#0a4d4a"/>
                  <stop offset="1" stopColor="#c9a84c"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.logoText}>
            PKBM <em>&</em> LKP
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#daftar" className={`btn btn-primary ${styles.ctaBtn}`} onClick={(e) => handleNavClick(e, "#daftar")}>
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
                href={link.href}
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
              href="#daftar"
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
