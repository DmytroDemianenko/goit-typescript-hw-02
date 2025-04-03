import { useEffect, useState } from "react";
import { fetchImages } from "./components/services/api";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchImages(page, query);
        setImages((prev) => [...prev, ...data.results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <div className="container">
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <SearchBar handleSubmit={handleSetQuery} />
        {isError && <ErrorMessage />}
        {query.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}

        {modalIsOpen && (
          <ImageModal
            onClose={closeModal}
            image={selectedImage}
            modalIsOpen={modalIsOpen}
          />
        )}

        {isLoading && <Loader />}
        {query.length > 0 && <LoadMoreBtn increasePage={handleChangePage} />}
      </div>
    </>
  );
}

export default App;
