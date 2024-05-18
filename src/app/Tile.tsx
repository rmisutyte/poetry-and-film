import styles from "./Tile.module.css";

type TileItem = {
  imageSrc: string;
  alt: string;
};

export default function Tile({ imageSrc, alt }: TileItem) {
  return (
    <div className={styles.tile}>
      <picture>
        <source srcSet={imageSrc} />
        <img className={styles.tileImage} src={imageSrc} alt={alt}></img>
      </picture>
    </div>
  );
}
