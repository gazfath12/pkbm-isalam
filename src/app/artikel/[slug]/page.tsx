import { getArticleBySlug, getPublishedArticles } from "@/lib/actions/articles";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { FiCalendar, FiArrowLeft, FiTag } from "react-icons/fi";
import { Metadata } from "next";
import styles from "../artikel.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  return {
    title: `${article.title} - Pusdiklat ISALAM`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.imageUrl ? [article.imageUrl] : [],
    },
  };
}

export default async function SingleArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article || !article.published) {
    notFound();
  }

  // Get recent articles for sidebar/bottom
  const allArticles = await getPublishedArticles();
  const otherArticles = allArticles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <main style={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Header Spacer */}
      <div style={{ height: "90px", background: "linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))" }} />

      <div className="container" style={{ padding: "40px 0 80px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          
          {/* Back Button */}
          <div>
            <Link 
              href="/artikel" 
              className={styles.backButton}
            >
              <FiArrowLeft /> Kembali ke Daftar Artikel
            </Link>
          </div>

          <article style={{ 
            backgroundColor: "white", 
            borderRadius: "var(--radius-xl)", 
            overflow: "hidden", 
            boxShadow: "var(--shadow-lg)" 
          }}>
            {/* Cover Image */}
            {article.imageUrl ? (
              <div style={{ width: "100%", height: "400px", position: "relative" }}>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                />
              </div>
            ) : (
              <div style={{ width: "100%", height: "200px", background: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))" }} />
            )}

            {/* Article Content */}
            <div style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
                <span style={{ 
                  backgroundColor: "var(--color-gray-50)", 
                  color: "var(--color-primary)", 
                  padding: "0.25rem 1rem", 
                  borderRadius: "9999px", 
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  border: "1px solid var(--color-gray-200)"
                }}>
                  <FiTag /> {article.category}
                </span>
                <span style={{ color: "var(--color-gray-600)", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
                  <FiCalendar /> {new Date(article.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>

              <h1 style={{ 
                fontSize: "clamp(2rem, 4vw, 3rem)", 
                fontFamily: "var(--font-serif)",
                fontWeight: "700", 
                color: "var(--color-dark)", 
                marginBottom: "2rem",
                lineHeight: "1.2"
              }}>
                {article.title}
              </h1>

              <div style={{ 
                fontSize: "1.125rem", 
                color: "var(--color-gray-700)", 
                lineHeight: "1.8",
                whiteSpace: "pre-wrap" // Allows newlines from textarea to render properly
              }}>
                {article.content}
              </div>
            </div>
          </article>

          {/* Other Articles Section */}
          {otherArticles.length > 0 && (
            <div style={{ marginTop: "4rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontFamily: "var(--font-serif)", fontWeight: "700", marginBottom: "1.5rem", color: "var(--color-dark)" }}>
                Artikel Lainnya
              </h3>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
                gap: "1.5rem" 
              }}>
                {otherArticles.map((other) => (
                  <Link 
                    href={`/artikel/${other.slug}`} 
                    key={other.id}
                    className={styles.articleCard}
                  >
                    <div style={{ height: "180px", backgroundColor: other.imageUrl ? "transparent" : "var(--color-gray-100)", position: "relative", overflow: "hidden" }}>
                      {other.imageUrl && (
                        <img 
                          src={other.imageUrl} 
                          alt={other.title} 
                          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                        />
                      )}
                    </div>
                    <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: "700", fontSize: "1.125rem", marginBottom: "0.5rem", color: "var(--color-dark)", lineHeight: 1.4 }}>
                        {other.title}
                      </h4>
                      <p style={{ color: "var(--color-gray-600)", fontSize: "0.875rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {other.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}
