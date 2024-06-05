import styles from "./ImageTile.module.css";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

type ImageTileItem = {
  imageSrc: string;
  name: string;
};

const ONE_COLUMN_LAYOUT_BREAK = 711;

export default function ImageTile({ imageSrc, name }: ImageTileItem) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const openModal = () => {
    if (width > ONE_COLUMN_LAYOUT_BREAK) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
  }, [width]);

  return (
    <div>
      <div className={styles.ImageTile} aria-label={name} onClick={openModal}>
        <figure>
          <picture>
            <source srcSet={imageSrc} />
            <img src={imageSrc} alt={name}></img>
          </picture>
          <figcaption>{name}</figcaption>
        </figure>
      </div>
      {isModalOpen && (
        <Modal openModal={isModalOpen} closeModal={closeModal}>
          <picture>
            <source srcSet={imageSrc} />
            <img src={imageSrc} alt={name}></img>
          </picture>
        </Modal>
      )}
    </div>
  );
}
