"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUser, FiLinkedin, FiMail } from "react-icons/fi";
import { TEAM_MEMBERS } from "@/data/siteData";
import styles from "./Team.module.css";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
});

export default function Team() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="tim" className={styles.team} ref={ref}>
      <div className={styles.bgPattern} />
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeIn(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <span className="section-label">Sumber Daya Manusia</span>
          <h2 className="section-title">Profil Tim I-SALAM</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Tim profesional dan berdedikasi yang berkomitmen memberikan pendidikan terbaik
            bagi setiap warga belajar I-SALAM.
          </p>
        </motion.div>

        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={member.id}
              className={`${styles.memberCard} ${hoveredId === member.id ? styles.hovered : ""}`}
              variants={fadeIn(i * 0.1)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={styles.cardInner}>
                {/* Avatar */}
                <div className={styles.avatarWrap}>
                  <div className={styles.avatar}>
                    {/* Fallback initials */}
                    <span className={styles.initials}>{member.initials}</span>
                  </div>
                  <div className={styles.avatarRing} />
                </div>

                {/* Info */}
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <span className={styles.memberRole}>{member.role}</span>
                  <p className={styles.memberDesc}>{member.description}</p>
                </div>

                {/* Hover Overlay */}
                <div className={styles.cardOverlay}>
                  <div className={styles.overlayContent}>
                    <FiUser size={28} className={styles.overlayIcon} />
                    <p>{member.description}</p>
                    <div className={styles.overlayActions}>
                      <a href={`mailto:isalam.pkbmlkp@gmail.com`} className={styles.overlayBtn} aria-label="Email">
                        <FiMail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className={styles.teamFooter}
          variants={fadeIn(0.6)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <p className={styles.teamFooterText}>
            Ingin bergabung bersama kami sebagai tutor atau instruktur?
          </p>
          <a
            href={`https://wa.me/6281391002505?text=${encodeURIComponent("Assalamu'alaikum, saya ingin mengetahui informasi bergabung sebagai tutor/instruktur di I-SALAM.")}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            id="team-join-btn"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </div>
    </section>
  );
}
