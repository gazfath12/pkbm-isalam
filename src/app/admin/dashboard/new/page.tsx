import ArticleForm from "../ArticleForm";
import { checkAuth } from "@/lib/actions/auth";

export const metadata = {
  title: "Tulis Artikel Baru - Admin",
};

export default async function NewArticlePage() {
  await checkAuth();
  return <ArticleForm />;
}
