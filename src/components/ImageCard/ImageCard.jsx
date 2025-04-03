import s from "./ImageCard.module.css";
const ImageCard = ({ image, openModal }) => {
  const { urls, alt_description } = image;

  return (
    <li>
      <div>
        <img
          className={s.image}
          src={urls.small}
          alt={alt_description}
          width="450px"
          height="240px"
          onClick={openModal}
        />
      </div>
    </li>
  );
};
export default ImageCard;
