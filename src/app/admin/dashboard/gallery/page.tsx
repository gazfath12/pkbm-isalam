import { getPhotos } from "@/lib/actions/gallery";
import { checkAuth } from "@/lib/actions/auth";
import Link from "next/link";
import { FiEdit2, FiPlus, FiInbox, FiImage } from "react-icons/fi";
import DeletePhotoButton from "./DeletePhotoButton";
import styles from "../../admin.module.css";
import Image from "next/image";

export default async function GalleryAdminPage() {
  await checkAuth();
  const photos = await getPhotos();

  const categoryMap: Record<string, string> = {
    students: "Kegiatan Belajar",
    staff: "Staf & Karyawan",
    dinas: "Kegiatan Dinas",
  };

  return (
    <div>
      <div className={styles.pageHeader}>
        <div>
          <h2 className={styles.pageTitle}>Galeri Foto</h2>
          <p className={styles.pageSubtitle}>Kelola dokumentasi foto kegiatan untuk ditampilkan di galeri utama.</p>
        </div>
        <Link href="/admin/dashboard/gallery/new" className={styles.addBtn}>
          <FiPlus size={20} />
          Unggah Foto Baru
        </Link>
      </div>

      <div className={styles.card}>
        {photos.length === 0 ? (
          <div className={styles.emptyState}>
            <FiInbox size={48} className={styles.emptyIcon} />
            <p style={{ fontSize: "1.125rem", marginBottom: "1rem", color: "#3f3f46", fontWeight: "500" }}>Belum ada foto di galeri.</p>
            <Link href="/admin/dashboard/gallery/new" style={{ color: "var(--color-primary)", textDecoration: "underline", fontWeight: "500" }}>Unggah foto pertama Anda</Link>
          </div>
        ) : (
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th style={{ width: "120px" }}>Preview</th>
                  <th>Keterangan (Caption)</th>
                  <th>Kategori</th>
                  <th>Tanggal Unggah</th>
                  <th style={{ textAlign: "right" }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {photos.map((photo) => (
                  <tr key={photo.id}>
                    <td>
                      <div style={{ position: "relative", width: "100px", height: "60px", borderRadius: "4px", overflow: "hidden", border: "1px solid #e5e7eb" }}>
                        <Image 
                          src={photo.imageUrl} 
                          alt={photo.alt || ""} 
                          fill 
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </td>
                    <td>
                      <div className={styles.articleTitle}>{photo.caption}</div>
                    </td>
                    <td>
                      <span className={`${styles.badge} ${styles.badgeCategory}`}>
                        {categoryMap[photo.category] || photo.category}
                      </span>
                    </td>
                    <td style={{ color: "#71717a", fontSize: "0.875rem" }}>
                      {new Date(photo.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                    </td>
                    <td>
                      <div className={styles.actions}>
                        <Link 
                          href={`/admin/dashboard/gallery/edit/${photo.id}`} 
                          className={`${styles.iconBtn} ${styles.editBtn}`}
                          title="Edit Foto"
                        >
                          <FiEdit2 size={18} />
                        </Link>
                        <DeletePhotoButton id={photo.id} />
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
