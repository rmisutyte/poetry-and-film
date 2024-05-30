import styles from "./Modal.module.css";
import { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

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
        <button onClick={closeModal} className={styles.closeButton}>
          <AiOutlineClose size={28} />
        </button>
        {children}
      </div>
    </dialog>
  );
}
