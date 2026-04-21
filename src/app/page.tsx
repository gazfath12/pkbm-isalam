import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Programs from "@/components/Programs/Programs";
import Stats from "@/components/Stats/Stats";
import Articles from "@/components/Articles/Articles";
import Registration from "@/components/Registration/Registration";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { getPublishedArticles } from "@/lib/actions/articles";

export default async function Home() {
  const dbArticles = await getPublishedArticles();

  // Memetakan artikel dari DB ke format yang dibutuhkan UI
  const colors = [
    "var(--color-primary)",
    "var(--color-accent-dark)",
    "var(--color-primary-light)",
    "var(--color-accent)",
  ];

  const mappedArticles = dbArticles.map((article, index) => ({
    id: article.id,
    slug: article.slug,
    tag: article.category,
    title: article.title,
    excerpt: article.excerpt,
    date: new Date(article.createdAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: "3 menit", // Estimasi statis
    category: article.category,
    imageUrl: article.imageUrl,
    color: colors[index % colors.length],
  }));

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Stats />
      {mappedArticles.length > 0 && <Articles articles={mappedArticles} />}
      <Registration />
      <Contact />
      <Footer />
    </main>
  );
}
