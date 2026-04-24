"use client";

import { FiTrash2 } from "react-icons/fi";
import { deletePhoto } from "@/lib/actions/gallery";
import { useTransition } from "react";
import styles from "../../admin.module.css";

export default function DeletePhotoButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Yakin ingin menghapus foto ini?")) {
      startTransition(async () => {
        await deletePhoto(id);
      });
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isPending}
      className={`${styles.iconBtn} ${styles.deleteBtn}`}
      style={{ opacity: isPending ? 0.5 : 1, cursor: isPending ? "not-allowed" : "pointer" }}
      title="Hapus Foto"
    >
      <FiTrash2 size={18} />
    </button>
  );
}
