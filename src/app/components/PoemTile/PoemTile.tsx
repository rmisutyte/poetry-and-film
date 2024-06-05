import styles from "./PoemTile.module.css";

type PoemTileItem = {
  name: string;
  body: string;
  author: string;
};

export default function PoemTile({ name, body, author }: PoemTileItem) {
  return (
    <div className={styles.preview}>
      <div className={styles.container}>
        <div className={styles.poemBody}>
          <h2>{name}</h2>
          <h3> by {author}</h3>
          <p>{body}</p>
        </div>
      </div>
      <div className={styles.linkContainer}>
        <a href="/poems">Read more</a>
      </div>
    </div>
  );
}
