import MaterialForm from "../MaterialForm";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import styles from "../../../admin.module.css";
import { checkAuth } from "@/lib/actions/auth";

export default async function NewMaterialPage() {
  await checkAuth();
  
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className={styles.pageHeader}>
        <div>
          <Link href="/admin/dashboard/materials" className={styles.backLink}>
            <FiArrowLeft /> Kembali ke Daftar Materi
          </Link>
          <h2 className={styles.pageTitle} style={{ marginTop: "1rem" }}>Tambah Materi Baru</h2>
          <p className={styles.pageSubtitle}>Unggah brosur, poster, atau flyer baru.</p>
        </div>
      </div>

      <div className={styles.card}>
        <MaterialForm />
      </div>
    </div>
  );
}
