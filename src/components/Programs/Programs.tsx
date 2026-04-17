"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBookOpen, FiAward, FiArrowRight, FiCheck } from "react-icons/fi";
import styles from "./Programs.module.css";

const programs = [
  {
    id: "pkbm",
    tag: "PKBM",
    icon: FiBookOpen,
    title: "Pusat Kegiatan Belajar Masyarakat",
    subtitle: "Pendidikan Kesetaraan",
    description:
      "Program pendidikan nonformal yang memberikan layanan pendidikan kesetaraan setara SD, SMP, dan SMA bagi masyarakat yang tidak berkesempatan menempuh pendidikan formal.",
    features: [
      "Kejar Paket A (Setara SD)",
      "Kejar Paket B (Setara SMP)",
      "Kejar Paket C (Setara SMA)",
      "Pembelajaran Fleksibel",
      "Ujian Nasional Kesetaraan",
      "Biaya Terjangkau",
    ],
    color: "var(--color-primary)",
    accent: "var(--color-primary-light)",
    bgColor: "var(--color-primary-dark)",
    gradient: "linear-gradient(135deg, #0a4d4a 0%, #063330 100%)",
  },
  {
    id: "lkp",
    tag: "LKP",
    icon: FiAward,
    title: "Lembaga Kursus dan Pelatihan",
    subtitle: "Keterampilan Vokasional",
    description:
      "Program kursus dan pelatihan keterampilan yang bertujuan meningkatkan kompetensi dan kemampuan kerja, serta memberikan sertifikasi kompetensi yang diakui industri.",
    features: [
      "Kursus Menjahit & Tata Busana",
      "Komputer & Teknologi Informasi",
      "Tata Kecantikan & Salon",
      "Otomotif & Teknik",
      "Bahasa Asing & Komunikasi",
      "Sertifikasi BNSP",
    ],
    color: "var(--color-accent-dark)",
    accent: "var(--color-accent)",
    bgColor: "#3d2800",
    gradient: "linear-gradient(135deg, #5c3d00 0%, #3d2800 100%)",
  },
];

export default function Programs() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
          <h2 className="section-title light">Dua Program Unggulan</h2>
          <div className="gold-divider" />
          <p className="section-subtitle light">
            Dua program unik yang saling melengkapi — pendidikan kesetaraan dan keterampilan vokasional
            — dirancang untuk memberdayakan setiap lapisan masyarakat.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className={styles.cardsGrid}>
          {programs.map((program, i) => (
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
                <div className={styles.cardTag}>{program.tag}</div>
                <div className={styles.cardIconWrap} style={{ color: program.accent }}>
                  <program.icon size={40} />
                </div>
                <div className={styles.cardHeaderDecor} />
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <p className={styles.cardSubtitle}>{program.subtitle}</p>
                <h3 className={styles.cardTitle}>{program.title}</h3>
                <p className={styles.cardDesc}>{program.description}</p>

                {/* Features List */}
                <ul className={styles.featureList}>
                  {program.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <span
                        className={styles.featureCheck}
                        style={{
                          background: `${program.color}1a`,
                          color: program.color,
                        }}
                      >
                        <FiCheck size={12} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  id={`program-daftar-${program.id}`}
                  className={styles.cardCta}
                  style={{
                    background: program.gradient,
                    boxShadow: `0 4px 20px ${program.color}40`,
                  }}
                  onClick={() => {
                    const el = document.querySelector("#daftar");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Daftar Program Ini
                  <FiArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
