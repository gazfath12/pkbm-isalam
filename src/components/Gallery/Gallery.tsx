"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiX, FiImage } from "react-icons/fi";
import styles from "./Gallery.module.css";

const GALLERY_IMAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => ({
  id: num,
  src: `/assets/activities/gambar-${num}.png`,
  alt: `Galeri Kegiatan I-SALAM ${num}`,
  caption: `Kegiatan ${num}`,
}));

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeri" className={styles.gallery} ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Koleksi Foto</span>
          <h2 className="section-title">Galeri Kegiatan</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Dokumentasi lengkap momen berharga, aktivitas belajar, dan kegiatan khusus
            dari warga belajar dan tenaga kependidikan.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              className={styles.imageCard}
              onClick={() => setSelectedImage(img.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.caption}>
                  <FiImage style={{ marginRight: "8px", verticalAlign: "middle" }} />
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
              <FiX size={24} />
            </button>
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className={styles.modalImage}
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
