import GalleryForm from "../GalleryForm";
import { checkAuth } from "@/lib/actions/auth";

export default async function NewPhotoPage() {
  await checkAuth();
  
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <GalleryForm />
    </div>
  );
}
