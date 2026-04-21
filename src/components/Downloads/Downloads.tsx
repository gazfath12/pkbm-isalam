"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiDownload, FiFileText, FiImage } from "react-icons/fi";
import { PROMO_MATERIALS } from "@/data/siteData";
import styles from "./Downloads.module.css";

export default function Downloads({ materials = [] }: { materials?: any[] }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Merge static data with dynamic if needed, or just use dynamic
  const allMaterials = materials.length > 0 ? materials : PROMO_MATERIALS;
  const handleDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    link.target = "_blank";
    link.click();
  };

  const getMaterialColor = (type: string) => {
    switch (type) {
      case "Brosur": return "#e85d04";
      case "Poster": return "#faa307";
      case "Flyer": return "#dc7c00";
      default: return "#6b4226";
    }
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
          {allMaterials.map((material, i) => {
            const color = material.color || getMaterialColor(material.type);
            const isPdf = material.type === "PDF" || material.fileUrl?.endsWith(".pdf");
            
            return (
              <motion.div
                key={material.id}
                className={styles.materialCard}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Preview area */}
                <div className={styles.previewArea} style={{ background: `linear-gradient(135deg, ${color}25 0%, ${color}10 100%)` }}>
                  {material.imageUrl ? (
                    <img src={material.imageUrl} alt={material.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <div className={styles.previewIcon} style={{ color: color }}>
                      {isPdf ? <FiFileText size={40} /> : <FiImage size={40} />}
                    </div>
                  )}
                  <span className={styles.typeBadge} style={{ background: color }}>
                    {material.type}
                  </span>
                </div>

                {/* Content */}
                <div className={styles.materialContent}>
                  <span
                    className={styles.categoryTag}
                    style={{ color: color, background: `${color}15` }}
                  >
                    {material.category}
                  </span>
                  <h3 className={styles.materialTitle}>{material.title}</h3>
                  <p className={styles.materialDesc}>{material.description}</p>

                  <button
                    id={`download-${material.id}`}
                    className={styles.downloadBtn}
                    onClick={() => handleDownload(material.fileUrl, material.title)}
                    style={{ background: color, boxShadow: `0 4px 20px ${color}40` }}
                  >
                    <FiDownload size={16} />
                    Unduh {material.type}
                  </button>
                </div>
              </motion.div>
            );
          })}
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
