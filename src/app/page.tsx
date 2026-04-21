import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Programs from "@/components/Programs/Programs";
import Stats from "@/components/Stats/Stats";
import Team from "@/components/Team/Team";
import Multimedia from "@/components/Multimedia/Multimedia";
import Testimonials from "@/components/Testimonials/Testimonials";
import Events from "@/components/Events/Events";
import Downloads from "@/components/Downloads/Downloads";
import Articles from "@/components/Articles/Articles";
import Registration from "@/components/Registration/Registration";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { getPublishedArticles } from "@/lib/actions/articles";
import { getMaterials } from "@/lib/actions/materials";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [dbArticles, dbMaterials] = await Promise.all([
    getPublishedArticles(),
    getMaterials()
  ]);

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
    date: new Date(article.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
    readTime: "3 menit",
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
      <Team />
      <Testimonials />
      <Multimedia />
      <Events />
      <Downloads materials={dbMaterials} />
      {mappedArticles.length > 0 && <Articles articles={mappedArticles} />}
      <Registration />
      <Contact />
      <Footer />
    </main>
  );
}
