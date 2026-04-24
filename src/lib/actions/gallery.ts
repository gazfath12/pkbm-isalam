"use server";
import { db } from "@/db";
import { gallery } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { checkAuth } from "./auth";
import { uploadToCloudinary } from "@/lib/cloudinary";

// Helper for Cloudinary upload
async function saveImageToCloud(file: File): Promise<string | null> {
  return await uploadToCloudinary(file, "gallery");
}

export async function getPhotos() {
  try {
    return await db.select().from(gallery).orderBy(desc(gallery.createdAt));
  } catch (error) {
    console.error("Database error in getPhotos:", error);
    return [];
  }
}

export async function getPhotoById(id: string) {
  try {
    const result = await db.select().from(gallery).where(eq(gallery.id, id));
    return result[0];
  } catch (error) {
    console.error("Database error in getPhotoById:", error);
    return null;
  }
}

export async function createPhoto(prevState: any, formData: FormData) {
  await checkAuth();

  const caption = formData.get("caption") as string;
  const category = formData.get("category") as string;
  const alt = formData.get("alt") as string || caption;
  
  const imageFile = formData.get("image") as File;
  
  if (!imageFile || imageFile.size === 0) {
    return { error: "Gambar wajib diunggah." };
  }

  const imageUrl = await saveImageToCloud(imageFile);
  
  if (!imageUrl) {
    return { error: "Gagal mengunggah gambar ke Cloudinary." };
  }

  try {
    await db.insert(gallery).values({
      imageUrl,
      caption,
      category,
      alt,
    });
  } catch (error) {
    return { error: "Gagal menyimpan data foto ke database." };
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard/gallery");
  redirect("/admin/dashboard/gallery");
}

export async function updatePhoto(id: string, prevState: any, formData: FormData) {
  await checkAuth();

  const caption = formData.get("caption") as string;
  const category = formData.get("category") as string;
  const alt = formData.get("alt") as string || caption;
  
  const imageFile = formData.get("image") as File;
  const existingImageUrl = formData.get("existingImageUrl") as string;
  
  let imageUrl = existingImageUrl;
  
  if (imageFile && imageFile.size > 0) {
    const newUrl = await saveImageToCloud(imageFile);
    if (newUrl) {
      imageUrl = newUrl;
    }
  }

  try {
    await db.update(gallery).set({
      imageUrl,
      caption,
      category,
      alt,
    }).where(eq(gallery.id, id));
  } catch (error) {
    return { error: "Gagal mengupdate data foto." };
  }

  revalidatePath("/");
  revalidatePath("/admin/dashboard/gallery");
  redirect("/admin/dashboard/gallery");
}

export async function deletePhoto(id: string) {
  await checkAuth();
  try {
    await db.delete(gallery).where(eq(gallery.id, id));
  } catch (error) {
    console.error("Database error in deletePhoto:", error);
    return { error: "Gagal menghapus foto." };
  }
  revalidatePath("/");
  revalidatePath("/admin/dashboard/gallery");
}
