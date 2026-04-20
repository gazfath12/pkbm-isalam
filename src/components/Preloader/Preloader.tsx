"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Preloader.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Memberikan waktu loading palsu agar animasi terlihat bagus (1.2 detik)
    // Di aplikasi nyata, bisa digabungkan dengan event window.onload
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.preloader}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className={styles.spinnerWrapper}>
            {/* Logo Muncul Membesar */}
            <motion.div
              className={styles.logoWrap}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/assets/logo_transparent.png"
                alt="Loading ISALAM..."
                width={70}
                height={70}
                className={styles.logo}
                priority
              />
            </motion.div>

            {/* Lingkaran Berputar */}
            <motion.div
              className={styles.spinner}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
