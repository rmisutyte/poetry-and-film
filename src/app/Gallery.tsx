import styles from "./Gallery.module.css";
import Tile from "./Tile";

type GalleryItem = {
  imageUrl: string;
  name: string;
};

export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className={styles.gallery}>
      {items.map((item, index) => (
        <Tile
          imageSrc={item.imageUrl}
          title={item.name}
          alt={item.name}
          key={index}
        />
      ))}
    </div>
  );
}
