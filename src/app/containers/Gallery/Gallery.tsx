"use client";

import ImageList from "../../components/ImageList/ImageList";
import { LoadingSkeleton } from "../../components/LoadingSkeleton/LoadingSkeleton";
import { usePersonalPhotos } from "@/app/hooks/usePersonalPhotos";

export default function Gallery() {
  const { photos, fetchMorePhotos, loading } = usePersonalPhotos();
  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <ImageList items={photos} fetchMorePhotos={fetchMorePhotos} />
      )}
    </>
  );
}
