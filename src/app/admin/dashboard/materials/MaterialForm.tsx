"use client";
import { useActionState } from "react";
import { createMaterial } from "@/lib/actions/materials";
import { FiSave, FiFile, FiImage, FiTag } from "react-icons/fi";
import styles from "../../admin.module.css";

export default function MaterialForm() {
  const [state, formAction, isPending] = useActionState(createMaterial, null);

  return (
    <form action={formAction} className={styles.form}>
      {state?.error && (
        <div className={styles.errorMessage} style={{ marginBottom: "1.5rem" }}>
          {state.error}
        </div>
      )}

      <div className={styles.formGroup}>
        <label htmlFor="title">Judul Materi *</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          placeholder="Contoh: Brosur Paket C 2024" 
          required 
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description">Deskripsi Singkat</label>
        <textarea 
          id="description" 
          name="description" 
          rows={3} 
          placeholder="Jelaskan isi materi ini..."
        ></textarea>
      </div>

      <div className={styles.grid2}>
        <div className={styles.formGroup}>
          <label htmlFor="type">Tipe Materi *</label>
          <select id="type" name="type" required>
            <option value="Brosur">Brosur</option>
            <option value="Poster">Poster</option>
            <option value="Flyer">Flyer</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="category">Kategori *</label>
          <select id="category" name="category" required>
            <option value="Lembaga">Profil Lembaga</option>
            <option value="Program">Program Pendidikan</option>
            <option value="Kegiatan">Kegiatan Belajar</option>
            <option value="Vokasi">Kursus & Vokasi</option>
          </select>
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.formGroup}>
          <label htmlFor="file">File (PDF/JPG/PNG) *</label>
          <input 
            type="file" 
            id="file" 
            name="file" 
            accept=".pdf,.jpg,.jpeg,.png" 
            required 
          />
          <p style={{ fontSize: "0.75rem", color: "#666", marginTop: "0.25rem" }}>File yang akan diunduh pengguna.</p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">Gambar Preview (Opsional)</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            accept="image/*" 
          />
          <p style={{ fontSize: "0.75rem", color: "#666", marginTop: "0.25rem" }}>Akan muncul sebagai thumbnail.</p>
        </div>
      </div>

      <div className={styles.formActions} style={{ marginTop: "2rem" }}>
        <button 
          type="submit" 
          className={styles.saveBtn} 
          disabled={isPending}
        >
          <FiSave />
          {isPending ? "Menyimpan..." : "Simpan Materi"}
        </button>
      </div>
    </form>
  );
}
