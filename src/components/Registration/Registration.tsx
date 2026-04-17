// app/registration/Registration.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBookOpen,
  FiSend,
  FiCheck,
  FiShield,
  FiClock,
  FiAward,
} from "react-icons/fi";
import styles from "./Registration.module.css";

const programs = [
  "PKBM - Kejar Paket A (Setara SD)",
  "PKBM - Kejar Paket B (Setara SMP)",
  "PKBM - Kejar Paket C (Setara SMA)",
  "LKP - Menjahit & Tata Busana",
  "LKP - Komputer & Teknologi Informasi",
  "LKP - Tata Kecantikan & Salon",
  "LKP - Otomotif & Teknik",
  "LKP - Bahasa Asing & Komunikasi",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
};

type FormErrors = Partial<FormData>;

export default function Registration() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Email tidak valid";
    if (!formData.phone.match(/^(\+62|0)[0-9]{8,12}$/))
      newErrors.phone = "Nomor telepon tidak valid";
    if (!formData.program) newErrors.program = "Pilih salah satu program";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulasi pengiriman data
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="daftar" className={styles.registration} ref={ref}>
      {/* Background decorative elements */}
      <div className={styles.bgGradient} />
      <div className={styles.bgPattern} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Panel - Info */}
          <motion.div
            className={styles.infoPanel}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.infoContent}>
              <span className={styles.sectionBadge}>Bergabung Bersama Kami</span>
              <h2 className={styles.infoTitle}>
                Mulai Perjalanan Belajarmu Hari Ini
              </h2>
              <div className={styles.divider} />
              <p className={styles.infoDesc}>
                Daftarkan dirimu sekarang dan bergabunglah bersama ratusan warga
                belajar yang telah merasakan manfaat nyata dari program kami.
              </p>

              <div className={styles.benefitsGrid}>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FiShield />
                  </div>
                  <span>Biaya terjangkau & dapat cicil</span>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FiClock />
                  </div>
                  <span>Jadwal fleksibel pagi & malam</span>
                </div>
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FiAward />
                  </div>
                  <span>Ijazah & sertifikat resmi</span>
                </div>
              </div>

              {/* Testimoni singkat atau statistik */}
              <div className={styles.statsContainer}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Siswa Aktif</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>25+</span>
                  <span className={styles.statLabel}>Program</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Kepuasan</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            className={styles.formPanel}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <FiCheck />
                  </div>
                  <h3>Pendaftaran Berhasil!</h3>
                  <p>
                    Terima kasih, <strong>{formData.name}</strong>! Tim kami
                    akan menghubungi Anda melalui nomor{" "}
                    <strong>{formData.phone}</strong> dalam 1×24 jam untuk
                    konfirmasi.
                  </p>
                  <button
                    className={styles.resetButton}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        program: "",
                        message: "",
                      });
                    }}
                  >
                    Daftar Program Lain
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formHeader}>
                    <h3 className={styles.formTitle}>Formulir Pendaftaran</h3>
                    <p className={styles.formSubtitle}>
                      Isi data dengan benar. Tim kami akan segera menghubungi
                      Anda.
                    </p>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="name">Nama Lengkap *</label>
                    <div
                      className={`${styles.inputWrapper} ${
                        errors.name ? styles.error : ""
                      }`}
                    >
                      <FiUser className={styles.inputIcon} />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    {errors.name && (
                      <span className={styles.errorMessage}>{errors.name}</span>
                    )}
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <div
                        className={`${styles.inputWrapper} ${
                          errors.email ? styles.error : ""
                        }`}
                      >
                        <FiMail className={styles.inputIcon} />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="contoh@email.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.email && (
                        <span className={styles.errorMessage}>
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">No. HP / Telepon *</label>
                      <div
                        className={`${styles.inputWrapper} ${
                          errors.phone ? styles.error : ""
                        }`}
                      >
                        <FiPhone className={styles.inputIcon} />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="08xxxxxxxxxx"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.phone && (
                        <span className={styles.errorMessage}>
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="program">Program yang Dipilih *</label>
                    <div
                      className={`${styles.inputWrapper} ${
                        errors.program ? styles.error : ""
                      }`}
                    >
                      <FiBookOpen className={styles.inputIcon} />
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                      >
                        <option value="">— Pilih Program —</option>
                        {programs.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.program && (
                      <span className={styles.errorMessage}>
                        {errors.program}
                      </span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Pesan / Pertanyaan</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Ceritakan kondisi belajar Anda atau pertanyaan yang ingin disampaikan..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className={styles.loader}>
                        Mengirim<span>.</span><span>.</span><span>.</span>
                      </span>
                    ) : (
                      <>
                        <FiSend /> Kirim Pendaftaran
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}