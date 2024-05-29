"use client";

import ItemList from "../../components/ItemList/ItemList";
import { LoadingSkeleton } from "../../components/LoadingSkeleton/LoadingSkeleton";
import { usePersonalPhotos } from "@/app/hooks/usePersonalPhotos";

export default function Gallery() {
  const { photos, fetchMorePhotos, loading } = usePersonalPhotos();
  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <ItemList items={photos} fetchMorePhotos={fetchMorePhotos} />
      )}
    </>
  );
}
