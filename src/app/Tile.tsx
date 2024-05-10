import styles from "./Tile.module.css";

export default function Tile({ imageSrc, title, alt }) {
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
