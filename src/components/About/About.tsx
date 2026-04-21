"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiTarget, FiEye, FiStar } from "react-icons/fi";
import { VISI, MISI, PROFILE, ACTIVITIES } from "@/data/siteData";
import styles from "./About.module.css";

const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
});

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="profil" className={styles.about} ref={ref}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-header"
          variants={fadeIn(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <span className="section-label">Tentang Kami</span>
          <h2 className="section-title">Profil PKBM & LKP I-SALAM</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Lembaga pendidikan nonformal dan pelatihan keterampilan yang berdedikasi
            memberdayakan masyarakat melalui pendidikan berkualitas berbasis nilai Islam.
          </p>
        </motion.div>

        {/* Profile Grid: Text + Photo */}
        <motion.div
          className={styles.profileGrid}
          variants={fadeIn(0.15)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className={styles.profileText}>
            <h3 className={styles.profileTitle}>Tentang Kami</h3>
            {PROFILE.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className={styles.achievements}>
              {PROFILE.achievements.map((a) => (
                <div key={a.label} className={styles.achievementItem}>
                  <span className={styles.achValue}>{a.value}</span>
                  <span className={styles.achLabel}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.profileVisual}>
            <div className={styles.photoCollage}>
              {/* Main large photo */}
              <div className={styles.mainPhoto}>
                <Image
                  src={ACTIVITIES.staff[0].src}
                  alt={ACTIVITIES.staff[0].alt}
                  fill
                  className={styles.collageImg}
                />
                <div className={styles.photoLabel}>
                  <FiStar size={14} />
                  <span>Kegiatan Guru & Staf</span>
                </div>
              </div>
              {/* Two smaller photos */}
              <div className={styles.subPhotos}>
                <div className={styles.subPhoto}>
                  <Image
                    src={ACTIVITIES.staff[1].src}
                    alt={ACTIVITIES.staff[1].alt}
                    fill
                    className={styles.collageImg}
                  />
                </div>
                <div className={styles.subPhoto}>
                  <Image
                    src={ACTIVITIES.students[9].src}
                    alt={ACTIVITIES.students[9].alt}
                    fill
                    className={styles.collageImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visi & Misi Cards */}
        <div className={styles.visiMisiGrid}>
          {/* Visi */}
          <motion.div
            className={`${styles.vmCard} ${styles.visiCard}`}
            variants={fadeIn(0.3)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className={styles.vmIconWrap}>
              <FiEye size={28} />
            </div>
            <h3 className={styles.vmTitle}>{VISI.title}</h3>
            <p className={styles.vmContent}>&ldquo;{VISI.content}&rdquo;</p>
          </motion.div>

          {/* Misi */}
          <motion.div
            className={`${styles.vmCard} ${styles.misiCard}`}
            variants={fadeIn(0.45)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className={`${styles.vmIconWrap} ${styles.misiIcon}`}>
              <FiTarget size={28} />
            </div>
            <h3 className={styles.vmTitle}>{MISI.title}</h3>
            <ul className={styles.misiList}>
              {MISI.items.map((item, i) => (
                <li key={i} className={styles.misiItem}>
                  <span className={styles.misiNum}>{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
