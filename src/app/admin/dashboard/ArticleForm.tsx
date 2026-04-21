"use client";

import { useActionState, useState } from "react";
import { createArticle, updateArticle } from "@/lib/actions/articles";
import Link from "next/link";
import { FiArrowLeft, FiSave } from "react-icons/fi";
import styles from "../admin.module.css";
import Image from "next/image";

type Article = {
  id?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  category?: string;
  imageUrl?: string | null;
  published?: boolean | null;
};

export default function ArticleForm({ article }: { article?: Article }) {
  const isEditing = !!article?.id;
  const [imagePreview, setImagePreview] = useState<string | null>(article?.imageUrl || null);
  
  const formActionFn = isEditing 
    ? updateArticle.bind(null, article.id!) 
    : createArticle;
    
  const [state, formAction, isPending] = useActionState(formActionFn, null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className={styles.formHeader}>
        <Link href="/admin/dashboard" className={styles.backBtn}>
          <FiArrowLeft size={20} />
        </Link>
        <h2 className={styles.pageTitle}>
          {isEditing ? "Edit Artikel" : "Tulis Artikel Baru"}
        </h2>
      </div>

      <form action={formAction} className={styles.card} style={{ padding: "2.5rem" }}>
        {state?.error && (
          <div className={styles.errorMsg} style={{ marginBottom: "1.5rem" }}>
            {state.error}
          </div>
        )}

        <div className={styles.formGrid}>
          <div className={styles.formColFull}>
            <label className={styles.formLabel}>Judul Artikel</label>
            <input 
              type="text" 
              name="title" 
              defaultValue={article?.title} 
              required 
              className={styles.formInput}
              placeholder="Contoh: Pendaftaran Tahun Ajaran Baru..."
            />
          </div>

          <div className={styles.formColFull}>
            <label className={styles.formLabel}>Ringkasan Singkat (Excerpt)</label>
            <textarea 
              name="excerpt" 
              defaultValue={article?.excerpt} 
              required 
              rows={2}
              className={styles.formInput}
              style={{ resize: "vertical" }}
              placeholder="Tulis 1-2 kalimat ringkasan yang menarik..."
            />
          </div>

          <div className={styles.formColFull}>
            <label className={styles.formLabel}>Isi Lengkap Artikel</label>
            <textarea 
              name="content" 
              defaultValue={article?.content} 
              required 
              rows={10}
              className={styles.formInput}
              style={{ resize: "vertical" }}
              placeholder="Tulis isi artikel selengkapnya di sini..."
            />
          </div>

          <div>
            <label className={styles.formLabel}>Kategori</label>
            <select 
              name="category" 
              defaultValue={article?.category || "Informasi"} 
              className={styles.formInput}
            >
              <option value="Informasi">Informasi</option>
              <option value="Kegiatan">Kegiatan</option>
              <option value="Pelatihan">Pelatihan</option>
              <option value="Prestasi">Prestasi</option>
            </select>
          </div>

          <div>
            <label className={styles.formLabel}>Gambar Cover (Opsional)</label>
            <input 
              type="file" 
              name="image" 
              accept="image/*"
              className={styles.formInput}
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className={styles.formImagePreview}>
                <Image 
                  src={imagePreview} 
                  alt="Preview" 
                  width={300} 
                  height={150} 
                  style={{ objectFit: "cover", width: "100%", height: "auto" }} 
                />
              </div>
            )}
            {/* Hidden field to keep old image URL if no new file is uploaded */}
            <input type="hidden" name="existingImageUrl" value={article?.imageUrl || ""} />
          </div>

          <div className={styles.formColFull}>
            <label className={styles.formCheckboxLabel}>
              <input 
                type="checkbox" 
                id="published" 
                name="published" 
                defaultChecked={article?.published ?? true} 
                className={styles.formCheckbox}
              />
              Langsung Publikasikan (Tampilkan di website)
            </label>
          </div>
        </div>

        <div className={styles.formFooter}>
          <button 
            type="submit" 
            disabled={isPending}
            className={styles.saveBtn}
          >
            <FiSave size={20} />
            {isPending ? "Menyimpan..." : "Simpan Artikel"}
          </button>
        </div>
      </form>
    </div>
  );
}
