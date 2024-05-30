import styles from "./Tile.module.css";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

type TileItem = {
  imageSrc: string;
  alt: string;
};

const ONE_COLUMN_LAYOUT_BREAK = 711;

export default function Tile({ imageSrc, alt }: TileItem) {
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
    <figure className={styles.tile}>
      <div onClick={openModal}>
        <picture>
          <source srcSet={imageSrc} />
          <img src={imageSrc} alt={alt}></img>
        </picture>
      </div>
      {isModalOpen && (
        <Modal openModal={isModalOpen} closeModal={closeModal}>
          <picture>
            <source srcSet={imageSrc} />
            <img src={imageSrc} alt={alt}></img>
          </picture>
        </Modal>
      )}
    </figure>
  );
}
