"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiBookOpen, FiAward } from "react-icons/fi";
import styles from "./Hero.module.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section id="beranda" className={styles.hero}>
      {/* Background Layer */}
      <div className={styles.bgOverlay} />
      <div className={styles.bgPattern} />
      <div className={styles.bgGradient} />

      {/* Floating decorative elements */}
      <div className={`${styles.floatOrb} ${styles.orbTop}`} />
      <div className={`${styles.floatOrb} ${styles.orbBottom}`} />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.textBlock}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className={styles.badge}>
            <FiAward className={styles.badgeIcon} />
            Terakreditasi Resmi
          </motion.div>

          <motion.h1 variants={item} className={styles.title}>
            Memberdayakan Masyarakat{" "}
            <em>Melalui Pendidikan</em>{" "}
            Berkualitas
          </motion.h1>

          <motion.p variants={item} className={styles.subtitle}>
            PKBM & LKP hadir sebagai lembaga pendidikan nonformal terpercaya yang membuka akses
            belajar seluas-luasnya bagi seluruh lapisan masyarakat. Bersama kami, setiap orang
            berhak mendapatkan pendidikan yang layak.
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <button
              id="hero-cta-daftar"
              className="btn btn-primary"
              onClick={() => scrollToSection("#daftar")}
            >
              <FiBookOpen size={18} />
              Daftar Program
            </button>
            <button
              id="hero-cta-program"
              className="btn btn-outline"
              onClick={() => scrollToSection("#program")}
            >
              Lihat Program Kami
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div variants={item} className={styles.quickStats}>
            {[
              { value: "500+", label: "Siswa Aktif" },
              { value: "40+", label: "Pengajar" },
              { value: "2", label: "Program Unggulan" },
              { value: "10+", label: "Tahun Pengalaman" },
            ].map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Right Panel */}
        <motion.div
          className={styles.rightPanel}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <div className={styles.cardStack}>
            <div className={`${styles.floatingCard} ${styles.card1} animate-float`}>
              <FiBookOpen size={24} style={{ color: "var(--color-accent)" }} />
              <div>
                <strong>PKBM</strong>
                <p>Pendidikan Kesetaraan</p>
              </div>
            </div>
            <div className={`${styles.floatingCard} ${styles.card2}`} style={{ animation: "float 4.5s ease-in-out infinite 1s" }}>
              <FiAward size={24} style={{ color: "var(--color-primary-light)" }} />
              <div>
                <strong>LKP</strong>
                <p>Kursus & Pelatihan</p>
              </div>
            </div>
          </div>
          <div className={styles.heroImageFrame}>
            <div className={styles.heroImagePlaceholder}>
              <svg viewBox="0 0 300 350" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroIllustration}>
                <rect width="300" height="350" rx="24" fill="url(#heroGrad)" opacity="0.15"/>
                <circle cx="150" cy="120" r="55" fill="url(#circleGrad)" opacity="0.9"/>
                <circle cx="150" cy="104" r="28" fill="rgba(255,255,255,0.9)"/>
                <rect x="60" y="190" width="180" height="8" rx="4" fill="rgba(255,255,255,0.4)"/>
                <rect x="80" y="210" width="140" height="8" rx="4" fill="rgba(255,255,255,0.3)"/>
                <rect x="100" y="230" width="100" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
                <path d="M90 290 Q150 254 210 290" stroke="rgba(201,168,76,0.8)" strokeWidth="3" fill="none"/>
                <defs>
                  <linearGradient id="heroGrad" x1="0" y1="0" x2="300" y2="350">
                    <stop stopColor="#c9a84c"/>
                    <stop offset="1" stopColor="#0a4d4a"/>
                  </linearGradient>
                  <linearGradient id="circleGrad" x1="0" y1="0" x2="110" y2="110">
                    <stop stopColor="#c9a84c"/>
                    <stop offset="1" stopColor="#e0be76"/>
                  </linearGradient>
                </defs>
              </svg>
              <p className={styles.heroImageCaption}>Komunitas Belajar Kami</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        className={styles.scrollIndicator}
        onClick={() => scrollToSection("#profil")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        id="scroll-indicator-btn"
      >
        <FiChevronDown size={22} />
      </motion.button>
    </section>
  );
}
