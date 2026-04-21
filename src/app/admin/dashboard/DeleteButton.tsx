"use client";

import { FiTrash2 } from "react-icons/fi";
import { deleteArticle } from "@/lib/actions/articles";
import { useTransition } from "react";

import styles from "../admin.module.css";

export default function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Yakin ingin menghapus artikel ini secara permanen?")) {
      startTransition(async () => {
        await deleteArticle(id);
      });
    }
  };

  return (
    <button 
      onClick={handleDelete}
      disabled={isPending}
      className={`${styles.iconBtn} ${styles.deleteBtn}`}
      style={{ opacity: isPending ? 0.5 : 1, cursor: isPending ? "not-allowed" : "pointer" }}
      title="Hapus Artikel"
    >
      <FiTrash2 size={18} />
    </button>
  );
}
