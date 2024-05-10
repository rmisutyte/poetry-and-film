import styles from "./Gallery.module.css";
import Tile from "./Tile";

export default function Gallery({ items = [] }) {
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
