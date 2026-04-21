import ArticleForm from "../../ArticleForm";
import { checkAuth } from "@/lib/actions/auth";
import { getArticleById } from "@/lib/actions/articles";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Edit Artikel - Admin",
};

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  await checkAuth();
  
  const { id } = await params;
  const article = await getArticleById(id);
  
  if (!article) {
    notFound();
  }

  return <ArticleForm article={article} />;
}
