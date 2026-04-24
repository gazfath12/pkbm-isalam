"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiX, FiImage } from "react-icons/fi";
import styles from "./Gallery.module.css";

import { ACTIVITIES } from "@/data/siteData";

const categories = [
  { id: "all", label: "Semua" },
  { id: "students", label: "Kegiatan Belajar" },
  { id: "staff", label: "Staf & Karyawan" },
  { id: "dinas", label: "Kegiatan Dinas" },
];

interface Photo {
  imageUrl: string;
  caption: string;
  category: string;
  alt?: string | null;
  catId?: string; // used for filtering internally
}

export default function Gallery({ photos = [] }: { photos?: Photo[] }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const categoryMap: Record<string, string> = {
    students: "Kegiatan Belajar",
    staff: "Staf & Karyawan",
    dinas: "Kegiatan Dinas",
  };

  const allImages = photos.length > 0 
    ? photos.map(img => ({ 
        src: img.imageUrl, 
        alt: img.alt || img.caption, 
        caption: img.caption, 
        category: categoryMap[img.category] || img.category, 
        catId: img.category 
      }))
    : [
        ...ACTIVITIES.students.map(img => ({ ...img, catId: "students" })),
        ...ACTIVITIES.staff.map(img => ({ ...img, catId: "staff" })),
        ...ACTIVITIES.dinas.map(img => ({ ...img, catId: "dinas" })),
      ];

  const filteredImages = activeFilter === "all" 
    ? allImages 
    : allImages.filter(img => img.catId === activeFilter);

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

        {/* Filter Tabs */}
        <div className={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.activeBtn : ""}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className={styles.grid}
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                key={`${img.catId}-${img.src}`}
                layout
                className={styles.imageCard}
                onClick={() => setSelectedImage(img.src)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <div className={styles.captionWrap}>
                    <span className={styles.catBadge}>{img.category}</span>
                    <span className={styles.caption}>
                      {img.caption}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
