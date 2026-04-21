"use client";
import { deleteMaterial } from "@/lib/actions/materials";
import { FiTrash2 } from "react-icons/fi";
import styles from "../../admin.module.css";
import { useState } from "react";

export default function DeleteMaterialButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (confirm("Apakah Anda yakin ingin menghapus materi ini?")) {
      setLoading(true);
      await deleteMaterial(id);
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleDelete} 
      className={`${styles.iconBtn} ${styles.deleteBtn}`}
      disabled={loading}
      title="Hapus Materi"
    >
      <FiTrash2 size={18} />
    </button>
  );
}
