import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <h1>Life on film</h1>
        <h2>Moments of life on film</h2>
      </div>
    </header>
  );
}
