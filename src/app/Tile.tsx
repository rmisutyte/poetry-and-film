import styles from "./Tile.module.css";

type TileItem = {
  imageSrc: string;
  title: string;
  alt: string;
};

export default function Tile({ imageSrc, title, alt }: TileItem) {
  return (
    <div className={styles.tile}>
      <picture>
        <source srcSet={imageSrc} />
        <img src={imageSrc} alt={alt}></img>
      </picture>
      <p>{title}</p>
    </div>
  );
}
