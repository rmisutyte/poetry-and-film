import styles from "./LoadingSkeleton.module.css";
import ItemList from "./ItemList";

export function ImageSkeleton() {
  return <div className={styles.loadingImageSkeleton}></div>;
}

const items = [
  ...Array(8).map(() => {
    return {};
  }),
];

export const LoadingSkeleton = () => {
  return (
    <div className={styles.skeletonGrid}>
      {items.map((item, index) => (
        <ImageSkeleton key={index} />
      ))}
    </div>
  );
};
