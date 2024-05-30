import styles from "./Modal.module.css";
import { useEffect, useRef } from "react";

export default function Modal({
  openModal,
  closeModal,
  children,
}: {
  openModal: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      modalRef.current!.showModal();
    } else {
      modalRef.current!.close();
    }
  }, [openModal]);

  return (
    <dialog ref={modalRef} className={styles.modal}>
      <div className={styles.content}>
        <button
          type="button"
          onClick={closeModal}
          className={styles.closeButton}
        >
          CLOSE
        </button>
        {children}
      </div>
    </dialog>
  );
}
