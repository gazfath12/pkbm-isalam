"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.content}>
        <div className={styles.errorCode}>
          <span className={styles.digit}>5</span>
          <span className={styles.digitAccent}>0</span>
          <span className={styles.digit}>0</span>
        </div>

        <div className={styles.iconWrap}>
          <span className={styles.iconEmoji}>⚙️</span>
        </div>

        <h1 className={styles.title}>Terjadi Kesalahan Server</h1>
        <p className={styles.subtitle}>
          Mohon maaf, terjadi kesalahan pada server kami. Tim teknis kami sedang
          bekerja untuk memperbaikinya. Silakan coba lagi dalam beberapa saat.
        </p>

        {error?.digest && (
          <div className={styles.errorDigest}>
            <code>Error ID: {error.digest}</code>
          </div>
        )}

        <div className={styles.actions}>
          <button onClick={reset} className={styles.btnPrimary}>
            🔄 Coba Lagi
          </button>
          <Link href="/" className={styles.btnOutline}>
            ← Kembali ke Beranda
          </Link>
        </div>

        <div className={styles.quickLinks}>
          <p className={styles.quickLinksLabel}>Atau hubungi kami:</p>
          <div className={styles.linkGrid}>
            <a
              href="https://wa.me/6281391002505"
              target="_blank"
              rel="noreferrer"
              className={styles.quickLink}
            >
              💬 WhatsApp
            </a>
            <a href="mailto:isalam.pkbmlkp@gmail.com" className={styles.quickLink}>
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
