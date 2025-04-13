import { useEffect } from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

// Zakładając, że typ Image jest zdefiniowany w ImageCard.tsx lub w innym miejscu
interface ImageUrls {
  regular: string;
}

interface Image {
  urls: ImageUrls;
  alt_description: string;
}

interface ImageModalProps {
  onClose: () => void;
  image: Image;
  modalIsOpen: boolean;
}

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

const ImageModal: React.FC<ImageModalProps> = ({
  onClose,
  image,
  modalIsOpen,
}) => {
  const { urls, alt_description } = image;

  const handleBackdropClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
