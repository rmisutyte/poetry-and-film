import styles from "./Tile.module.css";
import { produceWebP } from "../../conv";

export default function Tile({ imageSrc, title }) {
  return (
    <div className={styles.tile}>
      <picture>
        <source srcSet={imageSrc} />
        <img src={imageSrc}></img>
      </picture>
      <p>{title}</p>
    </div>
  );
}
