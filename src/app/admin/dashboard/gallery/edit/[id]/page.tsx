import GalleryForm from "../../GalleryForm";
import { checkAuth } from "@/lib/actions/auth";
import { getPhotoById } from "@/lib/actions/gallery";
import { notFound } from "next/navigation";

export default async function EditPhotoPage({ params }: { params: Promise<{ id: string }> }) {
  await checkAuth();
  
  const { id } = await params;
  const photo = await getPhotoById(id);
  
  if (!photo) {
    notFound();
  }
  
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <GalleryForm photo={photo} />
    </div>
  );
}
