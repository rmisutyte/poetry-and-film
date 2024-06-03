import styles from "./ImageTile.module.css";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

type ImageTileItem = {
  imageSrc: string;
  alt: string;
};

const ONE_COLUMN_LAYOUT_BREAK = 711;

export default function ImageTile({ imageSrc, alt }: ImageTileItem) {
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
    console.log(width);
  }, [width]);

  return (
    <div>
      <div aria-label="this is an image" onClick={openModal}>
        <figure className={styles.ImageTile}>
          <picture>
            <source srcSet={imageSrc} />
            <img src={imageSrc} alt={alt}></img>
          </picture>
        </figure>
      </div>
      {isModalOpen && (
        <Modal openModal={isModalOpen} closeModal={closeModal}>
          <picture>
            <source srcSet={imageSrc} />
            <img src={imageSrc} alt={alt}></img>
          </picture>
        </Modal>
      )}
    </div>
  );
}
