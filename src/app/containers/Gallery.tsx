"use client";

import ItemList from "../ItemList";
import LoadingSkeleton from "../LoadingSkeleton";
import { useUnsplash } from "@/hooks/useUnsplash";

export const Gallery = () => {
  const { photos, fetchMorePhotos, loading } = useUnsplash();
  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <ItemList items={photos} fetchMorePhotos={fetchMorePhotos} />
      )}
    </>
  );
};
