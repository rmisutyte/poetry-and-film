import styles from "./PoemTile.module.css";

type PoemTileItem = {
  name: string;
  body: string;
  author: string;
};

export default function PoemTile({ name, body, author }: PoemTileItem) {
  return (
    <figure>
      <figcaption>
        <cite>{name}</cite> by {author}
      </figcaption>
      <p className={styles.body}>{body}</p>
    </figure>
  );
}
