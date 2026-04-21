"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiStar, FiMessageSquare } from "react-icons/fi";
import { TESTIMONIALS } from "@/data/siteData";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <section id="testimoni" className={styles.testimonials} ref={ref}>
      <div className={styles.bgDecor} />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Pesan & Kesan</span>
          <h2 className="section-title">Apa Kata Mereka</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Dengarkan pengalaman langsung dari para warga belajar yang telah merasakan
            manfaat nyata dari program I-SALAM.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className={styles.featuredCard}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          key={active}
        >
          <div className={styles.quoteIcon}>
            <FiMessageSquare size={32} />
          </div>
          <blockquote className={styles.quoteText}>
            &ldquo;{TESTIMONIALS[active].quote}&rdquo;
          </blockquote>
          <div className={styles.stars}>
            {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
              <FiStar key={i} className={styles.starIcon} />
            ))}
          </div>
          <div className={styles.authorRow}>
            <div
              className={styles.authorAvatar}
              style={{ background: `linear-gradient(135deg, ${TESTIMONIALS[active].avatarColor}, ${TESTIMONIALS[active].avatarColor}88)` }}
            >
              {TESTIMONIALS[active].initials}
            </div>
            <div className={styles.authorInfo}>
              <strong className={styles.authorName}>{TESTIMONIALS[active].name}</strong>
              <span className={styles.authorProgram}>{TESTIMONIALS[active].program} · {TESTIMONIALS[active].year}</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className={styles.navRow}>
          <button className={styles.navBtn} onClick={prev} aria-label="Sebelumnya">&#8592;</button>
          <div className={styles.dots}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Testimoni ${i + 1}`}
              />
            ))}
          </div>
          <button className={styles.navBtn} onClick={next} aria-label="Selanjutnya">&#8594;</button>
        </div>

        {/* Thumbnail Grid */}
        <div className={styles.thumbnailGrid}>
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.id}
              className={`${styles.thumbCard} ${i === active ? styles.thumbActive : ""}`}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <div
                className={styles.thumbAvatar}
                style={{ background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}88)` }}
              >
                {t.initials}
              </div>
              <div className={styles.thumbInfo}>
                <span className={styles.thumbName}>{t.name}</span>
                <span className={styles.thumbProgram}>{t.program}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
