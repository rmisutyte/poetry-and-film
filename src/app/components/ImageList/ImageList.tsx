import { useEffect } from "react";
import styles from "./ImageList.module.css";
import ImageTile from "../ImageTile/ImageTile";
import { useInView } from "react-intersection-observer";

type GalleryItem = {
  imageUrl: string;
  name: string;
};

export default function ImageList({
  items,
  fetchMorePhotos,
}: {
  items: GalleryItem[];
  fetchMorePhotos: () => void;
}) {
  const { ref, inView } = useInView({ rootMargin: "400px 0px" });

  useEffect(() => {
    if (inView && fetchMorePhotos) {
      fetchMorePhotos();
    }
  }, [inView]);

  return (
    <>
      <div className={styles.ImageList}>
        {items.map((item, index) => (
          <ImageTile imageSrc={item.imageUrl} alt={item.name} key={index} />
        ))}
      </div>
      <div ref={ref}></div>
    </>
  );
}
