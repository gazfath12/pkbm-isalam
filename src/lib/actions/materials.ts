"use server";
import { db } from "@/db";
import { materials } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkAuth } from "./auth";
import fs from "fs/promises";
import path from "path";

// Helper for local file upload
async function saveFileLocally(file: File): Promise<string | null> {
  if (!file || file.size === 0) return null;
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public/uploads/materials");
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }

  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
  const ext = file.name.split(".").pop();
  const filename = `${uniqueSuffix}.${ext}`;
  const filepath = path.join(uploadDir, filename);

  await fs.writeFile(filepath, buffer);
  return `/uploads/materials/${filename}`;
}

export async function getMaterials() {
  try {
    return await db.select().from(materials).orderBy(desc(materials.createdAt));
  } catch (error) {
    console.error("Database error in getMaterials:", error);
    return [];
  }
}

export async function createMaterial(prevState: any, formData: FormData) {
  await checkAuth();

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const type = formData.get("type") as string;
  const category = formData.get("category") as string;
  
  const file = formData.get("file") as File;
  const image = formData.get("image") as File;
  
  const fileUrl = await saveFileLocally(file);
  const imageUrl = await saveFileLocally(image);
  
  if (!fileUrl) {
    return { error: "File wajib diupload." };
  }

  try {
    await db.insert(materials).values({
      title,
      description,
      type,
      category,
      fileUrl,
      imageUrl,
    });
  } catch (error) {
    console.error("Error creating material:", error);
    return { error: "Gagal menyimpan materi promosi." };
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard/materials");
  redirect("/admin/dashboard/materials");
}

export async function deleteMaterial(id: string) {
  await checkAuth();
  try {
    await db.delete(materials).where(eq(materials.id, id));
  } catch (error) {
    console.error("Database error in deleteMaterial:", error);
  }
  revalidatePath("/");
  revalidatePath("/admin/dashboard/materials");
}
