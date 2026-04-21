import { getArticles } from "@/lib/actions/articles";
import { checkAuth } from "@/lib/actions/auth";
import Link from "next/link";
import { FiEdit2, FiPlus, FiEye, FiFileText, FiInbox } from "react-icons/fi";
import DeleteButton from "./DeleteButton";
import styles from "../admin.module.css";

export default async function AdminDashboard() {
  await checkAuth(); // Proteksi route ini
  const articlesList = await getArticles();

  return (
    <div>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Daftar Artikel</h2>
          <p className={styles.pageSubtitle}>Kelola berita, kegiatan, dan informasi untuk website utama.</p>
        </div>
        <Link href="/admin/dashboard/new" className={styles.addBtn}>
          <FiPlus size={20} />
          Tulis Artikel Baru
        </Link>
      </div>

      <div className={styles.card}>
        {articlesList.length === 0 ? (
          <div className={styles.emptyState}>
            <FiInbox size={48} className={styles.emptyIcon} />
            <p style={{ fontSize: "1.125rem", marginBottom: "1rem", color: "#3f3f46", fontWeight: "500" }}>Belum ada artikel yang dibuat.</p>
            <Link href="/admin/dashboard/new" style={{ color: "var(--color-primary)", textDecoration: "underline", fontWeight: "500" }}>Buat artikel pertama Anda</Link>
          </div>
        ) : (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
            <thead>
              <tr>
                <th>Judul Artikel</th>
                <th>Kategori</th>
                <th>Tanggal</th>
                <th>Status</th>
                <th style={{ textAlign: "right" }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {articlesList.map((article) => (
                <tr key={article.id}>
                  <td>
                    <div className={styles.articleTitle}>{article.title}</div>
                    <div className={styles.articleExcerpt}>{article.excerpt}</div>
                  </td>
                  <td>
                    <span className={`${styles.badge} ${styles.badgeCategory}`}>
                      {article.category}
                    </span>
                  </td>
                  <td style={{ color: "#71717a", fontSize: "0.875rem" }}>
                    {new Date(article.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                  </td>
                  <td>
                    {article.published ? (
                      <span className={`${styles.badge} ${styles.badgePublic}`}>
                        <FiEye /> Publik
                      </span>
                    ) : (
                      <span className={`${styles.badge} ${styles.badgeDraft}`}>
                        <FiFileText /> Draft
                      </span>
                    )}
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <Link 
                        href={`/admin/dashboard/edit/${article.id}`} 
                        className={`${styles.iconBtn} ${styles.editBtn}`}
                        title="Edit Artikel"
                      >
                        <FiEdit2 size={18} />
                      </Link>
                      <DeleteButton id={article.id} />
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
