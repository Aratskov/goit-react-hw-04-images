import { Backdrop, ModalWindows, Img } from "./Modal.styled";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ src, visible, isOpen, tags }) => {
  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleCloseEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleCloseEscape);
    };
  }, [isOpen]);

  const handleCloseEscape = (event) => {
    if (event.code === "Escape") {
      visible(false);
    }
  };

  const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      visible(false);
    }
  };
  return createPortal(
    <Backdrop onClick={handleCloseModal}>
      <ModalWindows>
        <Img src={src} alt={tags} />
      </ModalWindows>
    </Backdrop>,
    modalRoot
  );
};
