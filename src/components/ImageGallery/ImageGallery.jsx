import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ images, openModal }) => {
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
