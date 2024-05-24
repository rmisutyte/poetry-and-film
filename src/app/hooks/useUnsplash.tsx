import { useEffect, useState } from "react";

export const useUnsplash = () => {
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
    const response = await fetch(
      `/api/images?query=film+photo&per_page=10&page=${currentPage}`
    );
    const data = await response.json();
    const mappedPhotoDetails: { imageUrl: string; name: string }[] =
      data.results.map(
        (result: { urls: { regular: string }; alt_description: string }) => {
          return {
            imageUrl: result.urls.regular,
            name: result.alt_description || "generic description",
          };
        }
      ) || [];
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
