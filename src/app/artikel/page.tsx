import { getPublishedArticles } from "@/lib/actions/articles";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import styles from "./artikel.module.css";

export const metadata = {
  title: "Artikel & Kabar Terkini",
  description: "Berita, kegiatan, pelatihan, dan informasi terbaru seputar PKBM & LKP I-SALAM Colomadu, Karanganyar.",
  alternates: {
    canonical: "/artikel",
  },
  openGraph: {
    title: "Artikel & Kabar Terkini | PKBM & LKP I-SALAM",
    description: "Berita, kegiatan, pelatihan, dan informasi terbaru seputar PKBM & LKP I-SALAM.",
    url: "https://www.pusdiklatisalam.web.id/artikel",
    type: "website",
  },
};

export const dynamic = "force-dynamic";

export default async function ArticlesPage() {
  const articles = await getPublishedArticles();

  return (
    <main>
      <Navbar />
      
      {/* Header Section */}
      <section className="section" style={{ 
        paddingTop: "140px", 
        paddingBottom: "80px", 
        background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))", 
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", filter: "blur(20px)" }} />
        <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(250,163,7,0.1)", filter: "blur(30px)" }} />
        
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1 className="section-title light" style={{ marginBottom: "1rem" }}>
            Artikel & Kabar Terkini
          </h1>
          <p className="section-subtitle light" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Temukan berita, kegiatan terbaru, dan kisah sukses dari Pusdiklat ISALAM.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: "80px 0", backgroundColor: "#f9fafb" }}>
        <div className="container">
          {articles.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 0", color: "#6b7280" }}>
              <p style={{ fontSize: "1.25rem" }}>Belum ada artikel yang dipublikasikan.</p>
            </div>
          ) : (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
              gap: "2rem" 
            }}>
              {articles.map((article) => (
                <Link 
                  href={`/artikel/${article.slug}`} 
                  key={article.id}
                  className={styles.articleCard}
                >
                  {/* Image Placeholder or Actual Image */}
                  <div style={{ 
                    height: "240px", 
                    backgroundColor: article.imageUrl ? "transparent" : "var(--color-gray-100)",
                    position: "relative",
                    overflow: "hidden"
                  }}>
                    {article.imageUrl ? (
                      <img 
                        src={article.imageUrl} 
                        alt={article.title} 
                        style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af" }}>
                        <span>ISALAM</span>
                      </div>
                    )}
                    <span style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      backgroundColor: "var(--color-accent)",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: "bold"
                    }}>
                      {article.category}
                    </span>
                  </div>

                  <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-gray-600)", fontSize: "0.875rem", marginBottom: "0.75rem" }}>
                      <FiCalendar />
                      <span>{new Date(article.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    <h2 style={{ fontSize: "1.25rem", fontFamily: "var(--font-serif)", fontWeight: "700", color: "var(--color-dark)", marginBottom: "0.5rem", lineHeight: 1.4 }}>
                      {article.title}
                    </h2>
                    <p style={{ color: "var(--color-gray-700)", fontSize: "0.9375rem", marginBottom: "1.5rem", flex: 1, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {article.excerpt}
                    </p>
                    <div style={{ color: "var(--color-primary)", fontWeight: "600", display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "auto", transition: "var(--transition-fast)" }}>
                      Baca Selengkapnya <FiArrowRight />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
