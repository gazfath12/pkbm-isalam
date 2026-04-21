"use server";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkAuth } from "./auth";
import fs from "fs/promises";
import path from "path";

// Helper for local file upload
async function saveImageLocally(file: File): Promise<string | null> {
  if (!file || file.size === 0) return null;
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Buat folder uploads jika belum ada
  const uploadDir = path.join(process.cwd(), "public/uploads");
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }

  // Bikin nama file unik
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
  const ext = file.name.split(".").pop();
  const filename = `${uniqueSuffix}.${ext}`;
  const filepath = path.join(uploadDir, filename);

  await fs.writeFile(filepath, buffer);
  return `/uploads/${filename}`;
}

export async function getArticles() {
  return await db.select().from(articles).orderBy(desc(articles.createdAt));
}

export async function getArticleById(id: string) {
  const result = await db.select().from(articles).where(eq(articles.id, id));
  return result[0];
}

export async function getArticleBySlug(slug: string) {
  const result = await db.select().from(articles).where(eq(articles.slug, slug));
  return result[0];
}

export async function getPublishedArticles() {
  return await db.select().from(articles).where(eq(articles.published, true)).orderBy(desc(articles.createdAt));
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
  const newImageUrl = await saveImageLocally(imageFile);
  
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
  
  const newImageUrl = await saveImageLocally(imageFile);
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
  await db.delete(articles).where(eq(articles.id, id));
  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}
