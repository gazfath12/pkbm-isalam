"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCalendar, FiArrowRight, FiTag } from "react-icons/fi";
import styles from "./Articles.module.css";

const articles = [
  {
    id: "article-1",
    tag: "Kegiatan",
    title: "Kelulusan Paket C Angkatan ke-8: Raih Mimpi Tanpa Batas",
    excerpt:
      "Sebanyak 45 warga belajar berhasil dinyatakan lulus ujian kesetaraan Paket C dan siap melanjutkan pendidikan ke perguruan tinggi atau memasuki dunia kerja.",
    date: "10 April 2026",
    readTime: "3 menit",
    category: "Kegiatan",
    color: "var(--color-primary)",
  },
  {
    id: "article-2",
    tag: "Pelatihan",
    title: "Workshop Tata Busana Bersama Desainer Lokal: Merajut Kreativitas",
    excerpt:
      "LKP kami mengadakan workshop eksklusif tata busana bersama desainer lokal ternama. Peserta belajar teknik menjahit modern dan trend fashion terkini.",
    date: "5 April 2026",
    readTime: "4 menit",
    category: "Pelatihan",
    color: "var(--color-accent-dark)",
  },
  {
    id: "article-3",
    tag: "Prestasi",
    title: "Alumnus LKP Berhasil Buka Usaha Salon dan Rekrut 5 Karyawan",
    excerpt:
      "Kisah sukses Ibu Sari, alumni program Tata Kecantikan LKP kami yang kini mengelola salon sendiri dan sudah mempekerjakan lima orang karyawan.",
    date: "28 Maret 2026",
    readTime: "5 menit",
    category: "Prestasi",
    color: "var(--color-primary-light)",
  },
  {
    id: "article-4",
    tag: "Informasi",
    title: "Pendaftaran Tahun Ajaran Baru 2026/2027 Telah Dibuka",
    excerpt:
      "Segera daftarkan diri Anda atau anggota keluarga yang ingin mengikuti program PKBM dan LKP tahun ajaran baru. Kuota terbatas!",
    date: "20 Maret 2026",
    readTime: "2 menit",
    category: "Informasi",
    color: "var(--color-accent)",
  },
];

export default function Articles() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="artikel" className={styles.articles} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Berita & Kegiatan</span>
          <h2 className="section-title">Kabar Terkini</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Ikuti terus perkembangan, kegiatan, dan prestasi terbaru dari komunitas belajar kami.
          </p>
        </motion.div>

        <div className={styles.articlesGrid}>
          {/* Featured Article */}
          <motion.div
            id={articles[0].id}
            className={styles.featuredCard}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={styles.featuredVisual} style={{ background: `linear-gradient(135deg, ${articles[0].color}, var(--color-primary-dark))` }}>
              <div className={styles.featuredPattern} />
              <svg viewBox="0 0 400 200" fill="none" className={styles.featuredSvg}>
                <circle cx="200" cy="100" r="60" fill="rgba(255,255,255,0.08)"/>
                <circle cx="200" cy="100" r="40" fill="rgba(255,255,255,0.06)"/>
                <path d="M175 85 L200 65 L225 85 L215 85 L215 115 L185 115 L185 85 Z" fill="rgba(255,255,255,0.5)"/>
                <rect x="185" y="95" width="30" height="25" fill="rgba(255,255,255,0.3)"/>
                <circle cx="197" cy="107" r="3" fill="rgba(255,255,255,0.5)"/>
              </svg>
              <span className={styles.featuredTag}>{articles[0].tag}</span>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.articleMeta}>
                <span className={styles.metaDate}><FiCalendar size={13}/>{articles[0].date}</span>
                <div className={styles.metaDot} />
                <span className={styles.metaDate}>{articles[0].readTime} baca</span>
              </div>
              <h3 className={styles.featuredTitle}>{articles[0].title}</h3>
              <p className={styles.articleExcerpt}>{articles[0].excerpt}</p>
              <button className={styles.readMore} id={`read-${articles[0].id}`}>
                <span>Baca Selengkapnya</span>
                <FiArrowRight size={16}/>
              </button>
            </div>
          </motion.div>

          {/* Side Articles */}
          <div className={styles.sideArticles}>
            {articles.slice(1).map((article, i) => (
              <motion.div
                key={article.id}
                id={article.id}
                className={styles.articleCard}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              >
                <div
                  className={styles.articleCardAccent}
                  style={{ background: article.color }}
                />
                <div className={styles.articleCardContent}>
                  <div className={styles.articleMeta}>
                    <span
                      className={styles.articleTag}
                      style={{ color: article.color, background: `${article.color}15` }}
                    >
                      <FiTag size={11}/>{article.tag}
                    </span>
                    <div className={styles.metaDot} />
                    <span className={styles.metaDate}><FiCalendar size={12}/>{article.date}</span>
                  </div>
                  <h4 className={styles.articleTitle}>{article.title}</h4>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <button className={styles.readMore} id={`read-${article.id}`}>
                    <span>Baca</span>
                    <FiArrowRight size={14}/>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section Footer */}
        <motion.div 
          className={styles.sectionFooter}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button className={styles.viewAllBtn} id="view-all-articles">
            Lihat Semua Artikel
            <FiArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
