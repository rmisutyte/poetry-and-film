"use client";

import ItemList from "../../components/ItemList/ItemList";
import { LoadingSkeleton } from "../../components/LoadingSkeleton/LoadingSkeleton";

export default function Gallery() {
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
}
