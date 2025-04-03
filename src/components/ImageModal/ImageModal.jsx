import { useEffect } from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ onClose, image, modalIsOpen }) => {
  const { urls, alt_description } = image;
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, image]);
  return (
    <Modal
      onClick={handleBackdropClick}
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <img className={s.picture} src={urls.regular} alt={alt_description} />
      <div className={s.contentWrapper}>
        <h2 className={s.title}>Title: {alt_description}</h2>
      </div>

      <button onClick={onClose} className={s.closeBtn}>
        ×
      </button>
    </Modal>
  );
};

export default ImageModal;
