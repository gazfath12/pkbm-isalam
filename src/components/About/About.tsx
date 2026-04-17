"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";
import styles from "./About.module.css";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

const pillars = [
  {
    icon: FiEye,
    title: "Visi Kami",
    description:
      "Menjadi lembaga pendidikan nonformal terdepan yang mencetak generasi unggul, berdaya saing, dan berakhlak mulia demi kemajuan bangsa dan negara.",
    color: "var(--color-primary)",
    bg: "rgba(10, 77, 74, 0.06)",
  },
  {
    icon: FiTarget,
    title: "Misi Kami",
    description:
      "Menyelenggarakan pendidikan kesetaraan berkualitas, mengembangkan keterampilan vokasional, memberdayakan masyarakat, dan menjalin kemitraan strategis dengan dunia usaha dan industri.",
    color: "var(--color-accent)",
    bg: "rgba(201, 168, 76, 0.06)",
  },
  {
    icon: FiHeart,
    title: "Nilai Kami",
    description:
      "Kami percaya pada integritas, inklusivitas, dan inovasi. Setiap individu berhak mendapatkan akses pendidikan yang layak, tanpa memandang latar belakang.",
    color: "var(--color-primary-light)",
    bg: "rgba(13, 107, 103, 0.06)",
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

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
          <h2 className="section-title">Mengenal Lebih Dekat</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Didirikan dengan semangat memberdayakan masyarakat, kami telah berdiri
            lebih dari satu dekade melayani ratusan warga belajar.
          </p>
        </motion.div>

        {/* Profile Text */}
        <motion.div
          className={styles.profileGrid}
          variants={fadeIn(0.15)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <div className={styles.profileText}>
            <h3 className={styles.profileTitle}>Profil Lembaga</h3>
            <p>
              PKBM (Pusat Kegiatan Belajar Masyarakat) dan LKP (Lembaga Kursus dan Pelatihan)
              kami lahir dari keprihatinan terhadap masih tingginya angka putus sekolah dan
              keterbatasan akses pendidikan di masyarakat.
            </p>
            <p>
              Dengan semangat gotong royong dan komitmen penuh, kami hadir sebagai jembatan
              antara masyarakat yang membutuhkan pendidikan dengan kesempatan nyata untuk
              berkembang dan berdaya saing di era modern.
            </p>
            <p>
              Didukung oleh tenaga pendidik berpengalaman dan kurikulum yang relevan dengan
              kebutuhan industri, kami telah membantu ratusan warga belajar meraih ijazah
              setara, sertifikasi kompetensi, dan keterampilan hidup yang nyata.
            </p>

            <div className={styles.achievements}>
              {[
                { label: "Berdiri Sejak", value: "2013" },
                { label: "Ijin Operasional", value: "Aktif" },
                { label: "Akreditasi", value: "B" },
              ].map((a) => (
                <div key={a.label} className={styles.achievementItem}>
                  <span className={styles.achValue}>{a.value}</span>
                  <span className={styles.achLabel}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.profileVisual}>
            <div className={styles.visualCard}>
              <svg viewBox="0 0 320 280" fill="none" className={styles.profileSvg}>
                <rect width="320" height="280" rx="20" fill="url(#profileGrad)" opacity="0.08"/>
                {/* Building */}
                <rect x="60" y="130" width="200" height="110" rx="4" fill="url(#buildingGrad)" opacity="0.85"/>
                <rect x="40" y="120" width="240" height="15" rx="4" fill="rgba(201,168,76,0.6)"/>
                {/* Windows */}
                {[85, 130, 175].map(x => (
                  [155, 195].map(y => (
                    <rect key={`${x}-${y}`} x={x} y={y} width="28" height="20" rx="2" fill="rgba(255,255,255,0.3)"/>
                  ))
                ))}
                {/* Door */}
                <rect x="140" y="200" width="40" height="40" rx="3" fill="rgba(201,168,76,0.7)"/>
                {/* Flag pole */}
                <rect x="158" y="60" width="4" height="68" fill="rgba(255,255,255,0.5)"/>
                <path d="M162 65 L195 78 L162 92 Z" fill="rgba(201,168,76,0.8)"/>
                {/* Stars */}
                {[[50,50], [270,40], [290,160], [30,200]].map(([x,y], i) => (
                  <circle key={i} cx={x} cy={y} r="3" fill="rgba(201,168,76,0.4)"/>
                ))}
                <defs>
                  <linearGradient id="profileGrad" x1="0" y1="0" x2="320" y2="280">
                    <stop stopColor="#c9a84c"/>
                    <stop offset="1" stopColor="#0a4d4a"/>
                  </linearGradient>
                  <linearGradient id="buildingGrad" x1="60" y1="130" x2="260" y2="240" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0a4d4a"/>
                    <stop offset="1" stopColor="#063330"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className={styles.visualBadge}>
                <span>🏫</span>
                <span>Lembaga Terpercaya</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vision Mission Cards */}
        <div className={styles.pillarsGrid}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className={styles.pillarCard}
              style={{ background: pillar.bg }}
              variants={fadeIn(0.1 * i + 0.3)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <div
                className={styles.pillarIcon}
                style={{ background: `${pillar.color}1A`, color: pillar.color }}
              >
                <pillar.icon size={26} />
              </div>
              <h3 className={styles.pillarTitle} style={{ color: pillar.color }}>
                {pillar.title}
              </h3>
              <p className={styles.pillarDesc}>{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
