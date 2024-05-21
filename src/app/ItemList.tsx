import { useEffect, useState } from "react";
import styles from "./ItemList.module.css";
import Tile from "./Tile";
import { useInView } from "react-intersection-observer";

type GalleryItem = {
  imageUrl: string;
  name: string;
};

export default function ItemList({
  items,
  fetchMorePhotos,
}: {
  items: GalleryItem[];
  fetchMorePhotos: () => void;
}) {
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });

  useEffect(() => {
    if (inView && fetchMorePhotos) {
      fetchMorePhotos();
    }
  }, [inView]);

  return (
    <>
      <div className={styles.itemList}>
        {items.map((item, index) => (
          <Tile imageSrc={item.imageUrl} alt={item.name} key={index} />
        ))}
      </div>
      <div ref={ref}></div>
    </>
  );
}
