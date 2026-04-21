"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./error.module.css";

// This catches errors in the root layout
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html lang="id">
      <body>
        <div className={styles.wrapper} style={{ minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
          <div className={styles.bgOrb1} />
          <div className={styles.bgOrb2} />

          <div className={styles.content}>
            <div className={styles.errorCode}>
              <span className={styles.digit}>5</span>
              <span className={styles.digitAccent}>0</span>
              <span className={styles.digit}>3</span>
            </div>

            <div className={styles.iconWrap}>
              <span className={styles.iconEmoji}>🚧</span>
            </div>

            <h1 className={styles.title}>Layanan Sedang Gangguan</h1>
            <p className={styles.subtitle}>
              Terjadi kesalahan kritis pada aplikasi. Tim kami telah diberitahu
              dan sedang melakukan perbaikan. Silakan coba kembali beberapa saat lagi.
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
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
