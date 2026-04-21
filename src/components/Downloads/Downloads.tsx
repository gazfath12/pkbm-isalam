"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiDownload, FiFileText, FiImage } from "react-icons/fi";
import { PROMO_MATERIALS } from "@/data/siteData";
import styles from "./Downloads.module.css";

export default function Downloads() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    link.target = "_blank";
    link.click();
  };

  return (
    <section id="unduhan" className={styles.downloads} ref={ref}>
      <div className={styles.bgGradient} />
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label light">Materi Promosi</span>
          <h2 className="section-title light">Brosur & Flyer</h2>
          <div className="gold-divider" />
          <p className="section-subtitle light">
            Unduh dan bagikan materi promosi resmi I-SALAM kepada keluarga, teman,
            dan masyarakat yang membutuhkan informasi program kami.
          </p>
        </motion.div>

        <div className={styles.materialsGrid}>
          {PROMO_MATERIALS.map((material, i) => (
            <motion.div
              key={material.id}
              className={styles.materialCard}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              {/* Preview area */}
              <div className={styles.previewArea} style={{ background: `linear-gradient(135deg, ${material.color}25 0%, ${material.color}10 100%)` }}>
                <div className={styles.previewIcon} style={{ color: material.color }}>
                  {material.type === "PDF" ? <FiFileText size={40} /> : <FiImage size={40} />}
                </div>
                <span className={styles.typeBadge} style={{ background: material.color }}>
                  {material.type}
                </span>
              </div>

              {/* Content */}
              <div className={styles.materialContent}>
                <span
                  className={styles.categoryTag}
                  style={{ color: material.color, background: `${material.color}15` }}
                >
                  {material.category}
                </span>
                <h3 className={styles.materialTitle}>{material.title}</h3>
                <p className={styles.materialDesc}>{material.description}</p>

                <button
                  id={`download-${material.id}`}
                  className={styles.downloadBtn}
                  onClick={() => handleDownload(material.fileUrl, material.title)}
                  style={{ background: material.color, boxShadow: `0 4px 20px ${material.color}40` }}
                >
                  <FiDownload size={16} />
                  Unduh {material.type}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info note */}
        <motion.div
          className={styles.infoNote}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <span className={styles.noteIcon}>📢</span>
          <p>
            Ingin mendapatkan brosur fisik atau materi promosi dalam jumlah banyak?{" "}
            <a
              href={`https://wa.me/6281391002505?text=${encodeURIComponent("Assalamu'alaikum, saya ingin meminta brosur fisik dari I-SALAM.")}`}
              target="_blank"
              rel="noreferrer"
              className={styles.noteLink}
            >
              Hubungi kami via WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
