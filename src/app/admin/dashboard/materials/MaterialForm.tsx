"use client";
import { useActionState } from "react";
import { createMaterial } from "@/lib/actions/materials";
import { FiSave, FiFile, FiImage, FiTag } from "react-icons/fi";
import styles from "../../admin.module.css";

export default function MaterialForm() {
  const [state, formAction, isPending] = useActionState(createMaterial, null);

  return (
    <form action={formAction} className={styles.card} style={{ padding: "2.5rem" }}>
      {state?.error && (
        <div className={styles.errorMsg} style={{ marginBottom: "1.5rem" }}>
          {state.error}
        </div>
      )}

      <div className={styles.formColFull} style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="title" className={styles.formLabel}>Judul Materi *</label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          placeholder="Contoh: Brosur Paket C 2024" 
          required 
          className={styles.formInput}
        />
      </div>

      <div className={styles.formColFull} style={{ marginBottom: "1.5rem" }}>
        <label htmlFor="description" className={styles.formLabel}>Deskripsi Singkat</label>
        <textarea 
          id="description" 
          name="description" 
          rows={3} 
          placeholder="Jelaskan isi materi ini..."
          className={styles.formInput}
          style={{ resize: "vertical" }}
        ></textarea>
      </div>

      <div className={styles.grid2} style={{ marginBottom: "1.5rem" }}>
        <div>
          <label htmlFor="type" className={styles.formLabel}>Tipe Materi *</label>
          <select id="type" name="type" required className={styles.formInput}>
            <option value="Brosur">Brosur</option>
            <option value="Poster">Poster</option>
            <option value="Flyer">Flyer</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label htmlFor="category" className={styles.formLabel}>Kategori *</label>
          <select id="category" name="category" required className={styles.formInput}>
            <option value="Lembaga">Profil Lembaga</option>
            <option value="Program">Program Pendidikan</option>
            <option value="Kegiatan">Kegiatan Belajar</option>
            <option value="Vokasi">Kursus & Vokasi</option>
          </select>
        </div>
      </div>

      <div className={styles.grid2}>
        <div>
          <label htmlFor="file" className={styles.formLabel}>File (PDF/JPG/PNG) *</label>
          <input 
            type="file" 
            id="file" 
            name="file" 
            accept=".pdf,.jpg,.jpeg,.png" 
            required 
            className={styles.formInput}
          />
          <p style={{ fontSize: "0.75rem", color: "#666", marginTop: "0.25rem" }}>File yang akan diunduh pengguna.</p>
        </div>

        <div>
          <label htmlFor="image" className={styles.formLabel}>Gambar Preview (Opsional)</label>
          <input 
            type="file" 
            id="image" 
            name="image" 
            accept="image/*" 
            className={styles.formInput}
          />
          <p style={{ fontSize: "0.75rem", color: "#666", marginTop: "0.25rem" }}>Akan muncul sebagai thumbnail.</p>
        </div>
      </div>

      <div className={styles.formFooter}>
        <button 
          type="submit" 
          className={styles.saveBtn} 
          disabled={isPending}
        >
          <FiSave size={20} />
          {isPending ? "Menyimpan..." : "Simpan Materi"}
        </button>
      </div>
    </form>
  );
}
