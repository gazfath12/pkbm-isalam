"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCalendar, FiUsers, FiBookOpen, FiCoffee, FiAward, FiTrendingUp } from "react-icons/fi";
import { EVENTS } from "@/data/siteData";
import styles from "./Events.module.css";

const categoryIcons: Record<string, React.ReactNode> = {
  Rutin: <FiCalendar size={18} />,
  Workshop: <FiUsers size={18} />,
  Akademik: <FiBookOpen size={18} />,
  Event: <FiAward size={18} />,
  Pengembangan: <FiTrendingUp size={18} />,
};

export default function Events() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="kegiatan" className={styles.events} ref={ref}>
      <div className={styles.bgAccent} />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Aktivitas Lembaga</span>
          <h2 className="section-title">Kegiatan Pendukung</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Beragam kegiatan ekstrakurikuler, workshop, dan event pendidikan yang memperkaya
            pengalaman belajar di I-SALAM.
          </p>
        </motion.div>

        <div className={styles.eventsGrid}>
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              className={styles.eventCard}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Icon */}
              <div className={styles.eventIcon} style={{ color: event.color, background: `${event.color}15` }}>
                <span className={styles.emoji}>{event.icon}</span>
              </div>

              {/* Category Badge */}
              <span
                className={styles.categoryBadge}
                style={{ color: event.color, background: `${event.color}15`, border: `1px solid ${event.color}30` }}
              >
                {categoryIcons[event.category]}
                {event.category}
              </span>

              {/* Content */}
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <p className={styles.eventDesc}>{event.description}</p>

              {/* Decorative bottom bar */}
              <div className={styles.bottomBar} style={{ background: event.color }} />
            </motion.div>
          ))}
        </div>

        {/* CTA Row */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className={styles.ctaText}>
            Tertarik mengikuti kegiatan atau workshop kami?
          </p>
          <a
            href={`https://wa.me/6281391002505?text=${encodeURIComponent("Assalamu'alaikum, saya ingin mengetahui informasi jadwal kegiatan/workshop di I-SALAM.")}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            id="events-cta-btn"
          >
            Tanyakan Jadwal
          </a>
        </motion.div>
      </div>
    </section>
  );
}
