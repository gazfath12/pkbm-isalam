import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "404 — Halaman Tidak Ditemukan | PUSDIKLAT I-SALAM",
  description: "Halaman yang Anda cari tidak dapat ditemukan.",
};

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      {/* Background decor */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.content}>
        {/* Big number */}
        <div className={styles.errorCode}>
          <span className={styles.digit}>4</span>
          <span className={styles.digitAccent}>0</span>
          <span className={styles.digit}>4</span>
        </div>

        {/* Icon */}
        <div className={styles.iconWrap}>
          <span className={styles.iconEmoji}>🔍</span>
        </div>

        <h1 className={styles.title}>Halaman Tidak Ditemukan</h1>
        <p className={styles.subtitle}>
          Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
          Silakan kembali ke beranda atau hubungi kami jika ada masalah.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.btnPrimary}>
            ← Kembali ke Beranda
          </Link>
          <Link href="/#kontak" className={styles.btnOutline}>
            Hubungi Kami
          </Link>
        </div>

        {/* Quick links */}
        <div className={styles.quickLinks}>
          <p className={styles.quickLinksLabel}>Atau kunjungi:</p>
          <div className={styles.linkGrid}>
            <Link href="/#program" className={styles.quickLink}>Program</Link>
            <Link href="/#profil" className={styles.quickLink}>Profil</Link>
            <Link href="/artikel" className={styles.quickLink}>Artikel</Link>
            <Link href="/#daftar" className={styles.quickLink}>Daftar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
