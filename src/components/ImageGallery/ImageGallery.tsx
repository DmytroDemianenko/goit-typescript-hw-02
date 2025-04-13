import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

// Zakładając, że typ Image jest zdefiniowany w ImageCard.tsx lub w innym miejscu
interface ImageUrls {
  small: string;
}

interface Image {
  id: string; // Dodajemy id, które jest używane jako key i przekazywane do ImageCard
  urls: ImageUrls;
  alt_description: string;
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
