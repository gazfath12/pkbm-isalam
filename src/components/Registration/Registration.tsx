// Registration.tsx - Form langsung ke WhatsApp (privat, tidak ditampilkan publik)
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiUser,
  FiPhone,
  FiBookOpen,
  FiSend,
  FiShield,
  FiClock,
  FiAward,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { REGISTRATION_PROGRAMS, SITE } from "@/data/siteData";
import styles from "./Registration.module.css";

type FormData = {
  name: string;
  phone: string;
  program: string;
  address: string;
  message: string;
};

type FormErrors = Partial<FormData>;

export default function Registration() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    program: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.phone.match(/^(\+62|0)[0-9]{8,12}$/))
      newErrors.phone = "Nomor HP tidak valid (contoh: 08xxxxxxxxxx)";
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

    // Build WhatsApp message
    const waMessage = [
      `*PENDAFTARAN PKBM & LKP I-SALAM*`,
      ``,
      `Assalamu'alaikum, saya ingin mendaftar program berikut:`,
      ``,
      `📛 *Nama Lengkap:* ${formData.name}`,
      `📱 *No. HP:* ${formData.phone}`,
      `📚 *Program:* ${formData.program}`,
      formData.address ? `📍 *Alamat:* ${formData.address}` : "",
      formData.message ? `💬 *Pesan:* ${formData.message}` : "",
      ``,
      `Mohon informasi lebih lanjut. Terima kasih.`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      setLoading(false);
      window.open(waUrl, "_blank");
    }, 800);
  };

  return (
    <section id="daftar" className={styles.registration} ref={ref}>
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
                Data pendaftaran akan langsung diterima tim kami via WhatsApp.
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
                <div className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <FaWhatsapp size={20} style={{ color: "var(--color-whatsapp)" }} />
                  </div>
                  <span>Respons cepat via WhatsApp</span>
                </div>
              </div>

              <div className={styles.statsContainer}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Alumni</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2</span>
                  <span className={styles.statLabel}>Program</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Kelulusan</span>
                </div>
              </div>

              {/* WhatsApp direct button */}
              <a
                href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum, saya ingin tanya informasi program di PKBM & LKP I-SALAM.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directWaBtn}
                id="direct-wa-btn"
              >
                <FaWhatsapp size={22} style={{ color: "white" }} />
                Chat WhatsApp Langsung
              </a>
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
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formHeader}>
                  <div className={styles.waIndicator}>
                    <FaWhatsapp size={18} style={{ color: "var(--color-whatsapp)" }} />
                    <span>Data dikirim via WhatsApp</span>
                  </div>
                  <h3 className={styles.formTitle}>Formulir Pendaftaran</h3>
                  <p className={styles.formSubtitle}>
                    Isi data di bawah ini, lalu klik kirim. WhatsApp Anda akan
                    terbuka otomatis dengan pesan siap dikirim ke tim kami.
                  </p>
                </div>

                {/* Nama */}
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nama Lengkap *</label>
                  <div className={`${styles.inputWrapper} ${errors.name ? styles.error : ""}`}>
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
                  {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
                </div>

                {/* Phone */}
                <div className={styles.formGroup}>
                  <label htmlFor="phone">No. HP (WhatsApp) *</label>
                  <div className={`${styles.inputWrapper} ${errors.phone ? styles.error : ""}`}>
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
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                </div>

                {/* Program */}
                <div className={styles.formGroup}>
                  <label htmlFor="program">Program yang Dipilih *</label>
                  <div className={`${styles.inputWrapper} ${errors.program ? styles.error : ""}`}>
                    <FiBookOpen className={styles.inputIcon} />
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                    >
                      <option value="">— Pilih Program —</option>
                      <optgroup label="PKBM Inisiator Salam Kariim">
                        {REGISTRATION_PROGRAMS.filter((p) => p.startsWith("PKBM")).map((p) => (
                          <option key={p} value={p}>{p.replace("PKBM Inisiator Salam Kariim – ", "")}</option>
                        ))}
                      </optgroup>
                      <optgroup label="LKP I-SALAM">
                        {REGISTRATION_PROGRAMS.filter((p) => p.startsWith("LKP")).map((p) => (
                          <option key={p} value={p}>{p.replace("LKP I-SALAM – ", "")}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  {errors.program && <span className={styles.errorMessage}>{errors.program}</span>}
                </div>

                {/* Address */}
                <div className={styles.formGroup}>
                  <label htmlFor="address">Alamat Tinggal</label>
                  <div className={styles.inputWrapper}>
                    <FiMapPin className={styles.inputIcon} />
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Kecamatan / Kabupaten"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="message">Pesan / Pertanyaan</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Ceritakan kondisi atau pertanyaan Anda..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  id="submit-registration-btn"
                  disabled={loading}
                >
                  {loading ? (
                    <span className={styles.loader}>
                      Menyiapkan<span>.</span><span>.</span><span>.</span>
                    </span>
                  ) : (
                    <>
                      <FaWhatsapp size={18} />
                      Kirim via WhatsApp
                    </>
                  )}
                </button>

                <p className={styles.privacyNote}>
                  🔒 Data Anda aman dan tidak akan dipublikasikan. Hanya diterima langsung oleh tim kami.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}