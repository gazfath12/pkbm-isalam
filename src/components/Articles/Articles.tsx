"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FiCalendar, FiArrowRight, FiTag } from "react-icons/fi";
import styles from "./Articles.module.css";

type Article = {
  id: string;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  color: string;
  imageUrl?: string | null;
};

export default function Articles({ articles }: { articles: Article[] }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!articles || articles.length === 0) {
    return null; // Sembunyikan section jika tidak ada artikel
  }

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
          <Link href="/artikel" className="btn btn-outline">
            Lihat Semua Kabar <FiArrowRight />
          </Link>
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
            <div className={styles.featuredVisual} style={{ background: articles[0].imageUrl ? 'transparent' : `linear-gradient(135deg, ${articles[0].color}, var(--color-primary-dark))` }}>
              {articles[0].imageUrl ? (
                <img 
                  src={articles[0].imageUrl} 
                  alt={articles[0].title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
                />
              ) : (
                <>
                  <div className={styles.featuredPattern} />
                  <svg viewBox="0 0 400 200" fill="none" className={styles.featuredSvg}>
                    <circle cx="200" cy="100" r="60" fill="rgba(255,255,255,0.08)"/>
                    <circle cx="200" cy="100" r="40" fill="rgba(255,255,255,0.06)"/>
                    <path d="M175 85 L200 65 L225 85 L215 85 L215 115 L185 115 L185 85 Z" fill="rgba(255,255,255,0.5)"/>
                    <rect x="185" y="95" width="30" height="25" fill="rgba(255,255,255,0.3)"/>
                    <circle cx="197" cy="107" r="3" fill="rgba(255,255,255,0.5)"/>
                  </svg>
                </>
              )}
              <span className={styles.featuredTag} style={{ zIndex: 1 }}>{articles[0].tag}</span>
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.articleMeta}>
                <span className={styles.metaDate}><FiCalendar size={13}/>{articles[0].date}</span>
                <div className={styles.metaDot} />
                <span className={styles.metaDate}>{articles[0].readTime} baca</span>
              </div>
              <h3 className={styles.featuredTitle}>{articles[0].title}</h3>
              <p className={styles.articleExcerpt}>{articles[0].excerpt}</p>
              <Link href={`/artikel/${articles[0].slug}`} className={styles.readMore}>
                <span>Baca Selengkapnya</span>
                <FiArrowRight size={16}/>
              </Link>
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
                  <Link href={`/artikel/${article.slug}`} className={styles.readMore}>
                    <span>Baca</span>
                    <FiArrowRight size={14}/>
                  </Link>
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
          <Link href="/artikel" className={styles.viewAllBtn}>
            Lihat Semua Artikel
            <FiArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
