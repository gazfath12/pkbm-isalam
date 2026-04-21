import { getMaterials } from "@/lib/actions/materials";
import { checkAuth } from "@/lib/actions/auth";
import Link from "next/link";
import { FiPlus, FiTrash2, FiFile, FiImage, FiLink, FiArrowLeft } from "react-icons/fi";
import DeleteMaterialButton from "./DeleteMaterialButton";
import styles from "../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function MaterialsAdminPage() {
  await checkAuth();
  const materialsList = await getMaterials();

  return (
    <div>
      <div className={styles.pageHeader}>
        <div>
          <Link href="/admin/dashboard" className={styles.backBtn} style={{ marginBottom: "1rem" }}>
            <FiArrowLeft size={18} /> Kembali ke Dashboard
          </Link>
          <h2 className={styles.pageTitle} style={{ marginTop: "1rem" }}>Materi Promosi</h2>
          <p className={styles.pageSubtitle}>Kelola brosur, poster, dan flyer untuk diunduh pengunjung.</p>
        </div>
        <Link href="/admin/dashboard/materials/new" className={styles.addBtn}>
          <FiPlus size={20} />
          Tambah Materi Baru
        </Link>
      </div>

      <div className={styles.card}>
        {materialsList.length === 0 ? (
          <div className={styles.emptyState}>
            <FiFile size={48} className={styles.emptyIcon} />
            <p>Belum ada materi promosi yang diunggah.</p>
            <Link href="/admin/dashboard/materials/new" className={styles.emptyLink}>Tambah sekarang</Link>
          </div>
        ) : (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Judul</th>
                  <th>Tipe</th>
                  <th>Kategori</th>
                  <th>File</th>
                  <th style={{ textAlign: "right" }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {materialsList.map((m) => (
                  <tr key={m.id}>
                    <td>
                      <div style={{ fontWeight: "600", color: "var(--color-dark)" }}>{m.title}</div>
                      <div style={{ fontSize: "0.75rem", color: "#666" }}>{m.description}</div>
                    </td>
                    <td>
                      <span className={styles.badge} style={{ backgroundColor: "#f3f4f6", color: "#374151" }}>
                        {m.type}
                      </span>
                    </td>
                    <td>{m.category}</td>
                    <td>
                      <a 
                        href={m.fileUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", color: "var(--color-primary)", fontWeight: "500", textDecoration: "none" }}
                      >
                        <FiLink size={14} /> Lihat File
                      </a>
                    </td>
                    <td>
                      <div className={styles.actions}>
                        <DeleteMaterialButton id={m.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
