"use server";
import { db } from "@/db";
import { materials } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkAuth } from "./auth";
import { uploadToCloudinary } from "@/lib/cloudinary";

// Helper for Cloudinary upload
async function saveToCloud(file: File): Promise<string | null> {
  return await uploadToCloudinary(file, "materials");
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
  
  const fileUrl = await saveToCloud(file);
  const imageUrl = await saveToCloud(image);
  
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
