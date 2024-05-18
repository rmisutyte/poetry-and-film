import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

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
    const unsplash = createApi({
      accessKey: process.env.NEXT_PUBLIC_API_ACCESS_KEY || "",
    });
    unsplash.search
      .getPhotos({
        query: "film photography",
        page: currentPage,
        perPage: 10,
      })
      .then((res) => {
        const mappedPhotoDetails: { imageUrl: string; name: string }[] =
          res.response?.results.map((result) => {
            return {
              imageUrl: result.urls.regular,
              name: result.alt_description || "generic description",
            };
          }) || [];
        setPhotos([...(photos ? photos : []), ...mappedPhotoDetails]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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
