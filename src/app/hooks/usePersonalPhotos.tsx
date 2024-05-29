import { useEffect, useState } from "react";

export const usePersonalPhotos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState<{ imageUrl: string; name: string }[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  const fetchMorePhotos = () => {
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  };

  const fetchPhotos = async () => {
    const response = await fetch(`/api/images?per_page=10&page=${currentPage}`);
    const data = await response.json();
    const mappedPhotoDetails = data.map(
      (item: { imageUrl: string; name: string }) => {
        return { imageUrl: item.imageUrl, name: item.name };
      }
    );
    setPhotos([...(photos ? photos : []), ...mappedPhotoDetails]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPhotos();
  }, [currentPage]);

  return {
    fetchMorePhotos,
    photos,
    loading,
  };
};
