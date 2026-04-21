import { cookies } from "next/headers";
import { ReactNode } from "react";
import "../globals.css"; // Ensure globals are loaded
import { logoutAction } from "@/lib/actions/auth";
import styles from "./admin.module.css";
import Image from "next/image";

export const metadata = {
  title: "Admin Dashboard - Pusdiklat ISALAM",
  robots: "noindex, nofollow", // Hide from search engines
};

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  const isAuthenticated = session?.value === "true";

  if (!isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className={styles.dashboardLayout}>
      <header className={styles.header}>
        <div className={styles.headerTitle}>
          <Image 
            src="/assets/logo_transparent.png" 
            alt="Logo" 
            width={32} 
            height={32} 
            style={{ objectFit: "contain" }}
          />
          I-SALAM <span>Admin</span>
        </div>
        <nav className={styles.navLinks}>
          <a href="/admin/dashboard" className={styles.navLink}>Artikel</a>
          <a href="/admin/dashboard/materials" className={styles.navLink}>Materi Promosi</a>
          <a href="/" target="_blank" className={styles.publicLink}>Lihat Website ↗</a>
          <form action={logoutAction}>
            <button type="submit" className={styles.logoutBtn}>
              Logout
            </button>
          </form>
        </nav>
      </header>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
