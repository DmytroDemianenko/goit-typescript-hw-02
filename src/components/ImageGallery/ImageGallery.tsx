import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../../types";

interface ImageUrls {
  small: string;
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.wrapper}>
      {images.map((image) => (
        <ImageCard
          id={image.id}
          key={image.id}
          image={image}
          openModal={() => openModal(image)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
