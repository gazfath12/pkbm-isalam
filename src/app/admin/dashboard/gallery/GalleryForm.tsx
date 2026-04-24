"use client";

import { useActionState, useState } from "react";
import { createPhoto, updatePhoto } from "@/lib/actions/gallery";
import Link from "next/link";
import { FiArrowLeft, FiSave } from "react-icons/fi";
import styles from "../../admin.module.css";
import Image from "next/image";

type Photo = {
  id?: string;
  imageUrl?: string;
  caption?: string;
  category?: string;
  alt?: string | null;
};

export default function GalleryForm({ photo }: { photo?: Photo }) {
  const isEditing = !!photo?.id;
  const [imagePreview, setImagePreview] = useState<string | null>(photo?.imageUrl || null);
  
  const formActionFn = isEditing 
    ? updatePhoto.bind(null, photo.id!) 
    : createPhoto;
    
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
        <Link href="/admin/dashboard/gallery" className={styles.backBtn}>
          <FiArrowLeft size={20} />
        </Link>
        <h2 className={styles.pageTitle}>
          {isEditing ? "Edit Foto" : "Unggah Foto Baru"}
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
            <label className={styles.formLabel}>Keterangan Foto (Caption)</label>
            <input 
              type="text" 
              name="caption" 
              defaultValue={photo?.caption} 
              required 
              className={styles.formInput}
              placeholder="Contoh: Kegiatan Belajar Paket C Angkatan 2024"
            />
          </div>

          <div>
            <label className={styles.formLabel}>Kategori</label>
            <select 
              name="category" 
              defaultValue={photo?.category || "students"} 
              className={styles.formInput}
            >
              <option value="students">Kegiatan Belajar</option>
              <option value="staff">Staf & Karyawan</option>
              <option value="dinas">Kegiatan Dinas</option>
            </select>
          </div>

          <div>
            <label className={styles.formLabel}>Alt Text (SEO)</label>
            <input 
              type="text" 
              name="alt" 
              defaultValue={photo?.alt || ""} 
              className={styles.formInput}
              placeholder="Deskripsi singkat foto untuk aksesibilitas..."
            />
          </div>

          <div className={styles.formColFull}>
            <label className={styles.formLabel}>Pilih Foto</label>
            <input 
              type="file" 
              name="image" 
              accept="image/*"
              className={styles.formInput}
              onChange={handleImageChange}
              required={!isEditing}
            />
            {imagePreview && (
              <div className={styles.formImagePreview} style={{ marginTop: "1rem" }}>
                <Image 
                  src={imagePreview} 
                  alt="Preview" 
                  width={300} 
                  height={200} 
                  style={{ objectFit: "cover", borderRadius: "8px" }} 
                />
              </div>
            )}
            {/* Hidden field to keep old image URL if no new file is uploaded */}
            <input type="hidden" name="existingImageUrl" value={photo?.imageUrl || ""} />
          </div>
        </div>

        <div className={styles.formFooter}>
          <button 
            type="submit" 
            disabled={isPending}
            className={styles.saveBtn}
          >
            <FiSave size={20} />
            {isPending ? "Menyimpan..." : "Simpan Foto"}
          </button>
        </div>
      </form>
    </div>
  );
}
