import { useEffect, useState } from "react";
import styles from "./ItemList.module.css";
import Tile from "./Tile";
import { useInView } from "react-intersection-observer";
import { createApi } from "unsplash-js";

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
      console.log(fetchMorePhotos);
      console.log(inView);
      console.log("would fetch more");
      setTimeout(() => console.log(inView), 5000);
      // fetchData();
      fetchMorePhotos();
    }
    // }
  }, [inView]);

  return (
    <div className={styles.itemList}>
      {items.map((item, index) => (
        <Tile imageSrc={item.imageUrl} alt={item.name} key={index} />
      ))}
      <h2 ref={ref}>I am inside the viewport</h2>
    </div>
  );
}
