"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiMapPin,
  FiClock,
  FiMessageCircle,
  FiInstagram,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi";
import { CONTACT, SITE } from "@/data/siteData";
import styles from "./Contact.module.css";

const contacts = [
  {
    id: "contact-wa",
    icon: FiMessageCircle,
    label: "WhatsApp",
    value: `+${CONTACT.whatsapp}`,
    sub: "Respon cepat via chat",
    action: `https://wa.me/${CONTACT.whatsapp}`,
    color: "#25d366",
  },
  {
    id: "contact-email",
    icon: FiMail,
    label: "Email",
    value: CONTACT.email,
    sub: "Balasan dalam 1×24 jam",
    action: `mailto:${CONTACT.email}`,
    color: "var(--color-accent)",
  },
  {
    id: "contact-hours",
    icon: FiClock,
    label: "Jam Operasional",
    value: CONTACT.operationalHours,
    sub: "Hari kerja",
    action: "#",
    color: "var(--color-primary-light)",
  },
  {
    id: "contact-address",
    icon: FiMapPin,
    label: "Alamat",
    value: CONTACT.address,
    sub: "PKBM Inisiator Salam Kariim & LKP ISALAM",
    action: `https://www.google.com/maps/search/${encodeURIComponent(CONTACT.address)}`,
    color: "#fc5c7d",
  },
];

const socialLinks = [
  { icon: FiInstagram, href: "#", label: "Instagram", id: "social-instagram" },
  { icon: FiFacebook, href: "#", label: "Facebook", id: "social-facebook" },
  { icon: FiYoutube, href: "#", label: "YouTube", id: "social-youtube" },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="kontak" className={styles.contact} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Hubungi Kami</span>
          <h2 className="section-title">Kontak & Lokasi</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi tim kami
            melalui channel yang tersedia.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className={styles.contactGrid}>
          {contacts.map((c, i) => (
            <motion.a
              key={c.id}
              id={c.id}
              href={c.action}
              target={c.action.startsWith("http") ? "_blank" : undefined}
              rel={c.action.startsWith("http") ? "noreferrer" : undefined}
              className={styles.contactCard}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className={styles.contactIcon}
                style={{ background: `${c.color}1a`, color: c.color }}
              >
                <c.icon size={24} />
              </div>
              <div>
                <span className={styles.contactLabel}>{c.label}</span>
                <p className={styles.contactValue}>{c.value}</p>
                <p className={styles.contactSub}>{c.sub}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Hours & Social */}
        <motion.div
          className={styles.bottomRow}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className={styles.hoursCard}>
            <div className={styles.hoursHeader}>
              <FiClock size={20} style={{ color: "var(--color-accent)" }} />
              <h4>Jam Operasional</h4>
            </div>
            <div className={styles.hoursList}>
              {[
                { day: "Senin – Jumat", hours: "08:00 – 17:00 WIB" },
                { day: "Sabtu", hours: "08:00 – 13:00 WIB" },
                { day: "Minggu & Libur", hours: "Tutup" },
              ].map((h) => (
                <div key={h.day} className={styles.hoursRow}>
                  <span>{h.day}</span>
                  <span
                    className={`${styles.hoursValue} ${h.hours === "Tutup" ? styles.closed : ""}`}
                  >
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.socialCard}>
            <h4>Ikuti Kami di Media Sosial</h4>
            <p>Dapatkan informasi terbaru, inspirasi belajar, dan pengumuman penting dari kami.</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  aria-label={s.label}
                  className={styles.socialBtn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
