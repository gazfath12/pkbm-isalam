"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiChevronDown, FiBookOpen, FiAward, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SITE, ACTIVITIES } from "@/data/siteData";
import styles from "./Hero.module.css";

const HERO_ACTIVITIES = ACTIVITIES.students.slice(0, 5);

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_ACTIVITIES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + HERO_ACTIVITIES.length) % HERO_ACTIVITIES.length);
  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % HERO_ACTIVITIES.length);

  return (
    <section id="beranda" className={styles.hero}>
      {/* Background Slideshow */}
      <div className={styles.bgSlideshow}>
        {HERO_ACTIVITIES.map((act, i) => (
          <div
            key={act.src}
            className={`${styles.bgSlide} ${i === activeSlide ? styles.bgSlideActive : ""}`}
          >
            <Image src={act.src} alt={act.alt} fill className={styles.bgImg} priority={i === 0} />
          </div>
        ))}
        <div className={styles.bgOverlay} />
      </div>

      {/* Floating decorative orbs */}
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
            Terakreditasi B — Resmi & Terpercaya
          </motion.div>

          <motion.h1 variants={item} className={styles.title}>
            {SITE.name}
          </motion.h1>

          <motion.p variants={item} className={styles.institutionSub}>
            {SITE.tagline}
          </motion.p>

          <motion.p variants={item} className={styles.subtitle}>
            Pusat pengembangan SDM yang unggul, profesional, dan berakhlak mulia. Hadir melalui{" "}
            <strong>PKBM Inisiator Salam Kariim</strong> dan <strong>LKP ISALAM</strong> untuk
            memberdayakan seluruh lapisan masyarakat.
          </motion.p>

          <motion.div variants={item} className={styles.actions}>
            <button
              id="hero-cta-daftar"
              className="btn btn-primary"
              onClick={() => scrollToSection("#daftar")}
            >
              Daftar Sekarang
              <FiChevronRight size={26} style={{ marginLeft: '4px' }} />
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
              { value: "500+", label: "Warga Belajar" },
              { value: "10+", label: "Tahun Beroperasi" },
              { value: "2", label: "Program Unggulan" },
              { value: "98%", label: "Lulus Ujian" },
            ].map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo Gallery Panel */}
        <motion.div
          className={styles.rightPanel}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          {/* Program Badges */}
          <div className={`${styles.floatingCard} ${styles.card1} animate-float`}>
            <FiBookOpen size={22} style={{ color: "var(--color-accent)" }} />
            <div>
              <strong>PKBM Inisiator Salam Kariim</strong>
              <p>Pendidikan Kesetaraan</p>
            </div>
          </div>
          <div
            className={`${styles.floatingCard} ${styles.card2}`}
            style={{ animation: "float 4.5s ease-in-out infinite 1s" }}
          >
            <FiAward size={22} style={{ color: "var(--color-accent-light)" }} />
            <div>
              <strong>LKP ISALAM</strong>
              <p>Kursus & Pelatihan</p>
            </div>
          </div>

          {/* Photo Slider */}
          <div className={styles.photoFrame}>
            <div className={styles.photoSlider}>
              {HERO_ACTIVITIES.map((act, i) => (
                <motion.div
                  key={act.src}
                  className={styles.photoSlide}
                  animate={{
                    opacity: i === activeSlide ? 1 : 0,
                    scale: i === activeSlide ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ position: "absolute", inset: 0 }}
                >
                  <Image src={act.src} alt={act.alt} fill className={styles.photoImg} />
                </motion.div>
              ))}
              <div className={styles.photoCaption}>
                {HERO_ACTIVITIES[activeSlide].caption}
              </div>
              <button
                className={`${styles.sliderBtn} ${styles.sliderBtnPrev}`}
                onClick={prevSlide}
                aria-label="Previous photo"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                className={`${styles.sliderBtn} ${styles.sliderBtnNext}`}
                onClick={nextSlide}
                aria-label="Next photo"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
            <div className={styles.photoDots}>
              {HERO_ACTIVITIES.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === activeSlide ? styles.dotActive : ""}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
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
