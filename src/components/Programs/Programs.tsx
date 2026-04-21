"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBookOpen, FiAward, FiUsers, FiArrowRight, FiCheck, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PROGRAMS, SITE } from "@/data/siteData";
import styles from "./Programs.module.css";

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Programs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const openWhatsApp = (programName: string) => {
    const msg = encodeURIComponent(
      `Assalamu'alaikum, saya ingin mendapatkan informasi lebih lanjut tentang program *${programName}* di PKBM & LKP I-SALAM. Mohon bantuannya. Terima kasih.`
    );
    window.open(`https://wa.me/${SITE.whatsappNumber}?text=${msg}`, "_blank");
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const icons = [FiBookOpen, FiAward, FiUsers];

  return (
    <section id="program" className={styles.programs} ref={ref}>
      {/* Background */}
      <div className={styles.bgDecor} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label light">Program Kami</span>
          <h2 className="section-title light">Tiga Layanan Unggulan</h2>
          <div className="gold-divider" />
          <p className="section-subtitle light">
            PKBM, LKP Vokasi, dan Bimbel — tiga program yang saling melengkapi untuk
            memberdayakan setiap lapisan masyarakat melalui pendidikan berkualitas.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className={styles.cardsGrid}>
          {PROGRAMS.map((program, i) => {
            const Icon = icons[i];
            const isExpanded = expandedId === program.id;

            return (
              <motion.div
                key={program.id}
                id={`program-card-${program.id}`}
                className={styles.programCard}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
              >
                {/* Card Header */}
                <div className={styles.cardHeader} style={{ background: program.gradient }}>
                  <div className={styles.cardTagWrap}>
                    <div className={styles.cardTag}>{program.tag}</div>
                    <div className={styles.cardSubtag}>{program.fullName}</div>
                  </div>
                  <div className={styles.cardIconWrap} style={{ color: program.accent }}>
                    <Icon size={44} />
                  </div>
                  <div className={styles.cardHeaderDecor} />
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <p className={styles.cardSubtitle}>{program.subtitle}</p>
                  <h3 className={styles.cardTitle}>{program.name}</h3>
                  <p className={styles.cardDesc}>{program.description}</p>

                  {/* Visi & Misi Toggle Button */}
                  <button 
                    className={styles.toggleBtn} 
                    onClick={() => toggleExpand(program.id)}
                    style={{ color: program.color }}
                  >
                    {isExpanded ? "Tutup Visi & Misi" : "Lihat Visi & Misi"}
                    {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                  </button>

                  {/* Expanded Visi & Misi Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className={styles.visiMisiSection}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={styles.visiMisiContent}>
                          <div className={styles.vmBlock}>
                            <h4>Visi</h4>
                            <p>&ldquo;{program.visi}&rdquo;</p>
                          </div>
                          <div className={styles.vmBlock}>
                            <h4>Misi</h4>
                            <ul>
                              {program.misi.map((m, idx) => (
                                <li key={idx}><span>{idx + 1}.</span> {m}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Features List */}
                  <ul className={styles.featureList}>
                    {program.features.map((f) => (
                      <li key={f} className={styles.featureItem}>
                        <span
                          className={styles.featureCheck}
                          style={{
                            background: `${program.color}20`,
                            color: program.color,
                          }}
                        >
                          <FiCheck size={12} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className={styles.cardActions}>
                    <button
                      id={`program-daftar-${program.id}`}
                      className={styles.cardCta}
                      style={{
                        background: program.gradient,
                        boxShadow: `0 4px 20px ${program.color}40`,
                      }}
                      onClick={() => scrollToSection("#daftar")}
                    >
                      Daftar Program
                      <FiArrowRight size={16} />
                    </button>
                    <button
                      id={`program-wa-${program.id}`}
                      className={styles.cardWa}
                      onClick={() => openWhatsApp(program.name)}
                    >
                      <FaWhatsapp size={20} style={{ color: "var(--color-whatsapp)" }} />
                      Tanya via WA
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
