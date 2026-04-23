"use server";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkAuth } from "./auth";
import { uploadToCloudinary } from "@/lib/cloudinary";

// Helper for Cloudinary upload
async function saveImageToCloud(file: File): Promise<string | null> {
  return await uploadToCloudinary(file, "articles");
}

export async function getArticles() {
  try {
    return await db.select().from(articles).orderBy(desc(articles.createdAt));
  } catch (error) {
    console.error("Database error in getArticles:", error);
    return [];
  }
}

export async function getArticleById(id: string) {
  try {
    const result = await db.select().from(articles).where(eq(articles.id, id));
    return result[0];
  } catch (error) {
    console.error("Database error in getArticleById:", error);
    return null;
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    const result = await db.select().from(articles).where(eq(articles.slug, slug));
    return result[0];
  } catch (error) {
    console.error("Database error in getArticleBySlug:", error);
    return null;
  }
}

export async function getPublishedArticles() {
  try {
    return await db.select().from(articles).where(eq(articles.published, true)).orderBy(desc(articles.createdAt));
  } catch (error) {
    console.error("Database error in getPublishedArticles:", error);
    return [];
  }
}

export async function createArticle(prevState: any, formData: FormData) {
  await checkAuth();

  const title = formData.get("title") as string;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const published = formData.get("published") === "on";
  
  const imageFile = formData.get("image") as File;
  const newImageUrl = await saveImageToCloud(imageFile);
  
  try {
    await db.insert(articles).values({
      title,
      slug,
      excerpt,
      content,
      category,
      imageUrl: newImageUrl,
      published,
    });
  } catch (error) {
    return { error: "Gagal menyimpan artikel. Mungkin slug sudah ada." };
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
  redirect("/admin/dashboard");
}

export async function updateArticle(id: string, prevState: any, formData: FormData) {
  await checkAuth();

  const title = formData.get("title") as string;
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const published = formData.get("published") === "on";
  
  const imageFile = formData.get("image") as File;
  const existingImageUrl = formData.get("existingImageUrl") as string;
  
  const newImageUrl = await saveImageToCloud(imageFile);
  const finalImageUrl = newImageUrl || (existingImageUrl !== "" ? existingImageUrl : null);

  try {
    await db.update(articles).set({
      title,
      slug,
      excerpt,
      content,
      category,
      imageUrl: finalImageUrl,
      published,
      updatedAt: new Date(),
    }).where(eq(articles.id, id));
  } catch (error) {
    return { error: "Gagal mengupdate artikel." };
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
  redirect("/admin/dashboard");
}

export async function deleteArticle(id: string) {
  await checkAuth();
  try {
    await db.delete(articles).where(eq(articles.id, id));
  } catch (error) {
    console.error("Database error in deleteArticle:", error);
  }
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}
