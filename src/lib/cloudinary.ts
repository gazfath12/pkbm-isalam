import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(file: File, folder: string): Promise<string | null> {
  if (!file || file.size === 0) return null;

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { 
          folder: `pkbm/${folder}`,
          resource_type: "auto"
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary upload error:", error);
            reject(error);
          } else {
            resolve(result?.secure_url || null);
          }
        }
      ).end(buffer);
    });
  } catch (error) {
    console.error("Error in uploadToCloudinary:", error);
    return null;
  }
}
