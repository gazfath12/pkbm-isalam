"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiUsers, FiBookOpen, FiAward, FiTrendingUp } from "react-icons/fi";
import styles from "./Stats.module.css";

const stats = [
  {
    id: "stat-siswa",
    icon: FiUsers,
    value: 205,
    suffix: "+",
    label: "Siswa Aktif",
    description: "Warga belajar yang sedang aktif mengikuti program kami",
    color: "var(--color-accent)",
  },
  {
    id: "stat-pengajar",
    icon: FiBookOpen,
    value: 20,
    suffix: "+",
    label: "Tenaga Pengajar",
    description: "Pendidik dan instruktur berpengalaman bersertifikat",
    color: "var(--color-primary-light)",
  },
  {
    id: "stat-lulusan",
    icon: FiAward,
    value: 48,
    suffix: "+",
    label: "Alumni Lulusan",
    description: "Warga belajar yang telah berhasil menyelesaikan program",
    color: "var(--color-accent-light)",
  },
  {
    id: "stat-tahun",
    icon: FiTrendingUp,
    value: 5,
    suffix: "+",
    label: "Tahun Pengalaman",
    description: "Melayani masyarakat dengan penuh dedikasi",
    color: "var(--color-primary-light)",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      const duration = 2000;
      const start = performance.now();

      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * value));
        if (progress < 1) requestAnimationFrame(animate);
        else setCount(value);
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value, hasStarted]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="statistik" className={styles.stats} ref={ref}>
      <div className={styles.bgDecor} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Dalam Angka</span>
          <h2 className="section-title">Ketercapaian Kami</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Angka-angka berikut adalah bukti nyata dari komitmen kami dalam memberdayakan
            masyarakat melalui pendidikan.
          </p>
        </motion.div>

        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              id={stat.id}
              className={styles.statCard}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div
                className={styles.statIcon}
                style={{ background: `${stat.color}1a`, color: stat.color }}
              >
                <stat.icon size={28} />
              </div>
              <div
                className={styles.statNumber}
                style={{ color: stat.color }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
              <p className={styles.statDesc}>{stat.description}</p>

              {/* Progress bar decorative */}
              <div className={styles.statBar}>
                <motion.div
                  className={styles.statBarFill}
                  style={{ background: stat.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: "75%" } : {}}
                  transition={{ duration: 1.5, delay: i * 0.1 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
