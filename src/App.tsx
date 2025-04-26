import { useState, useEffect } from "react";
import React from "react";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import ImageGallery from "./components/ImageGallery/ImageGallery.tsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.tsx";
import Loader from "./components/Loader/Loader.tsx";
import ImageModal from "./components/ImageModal/ImageModal.tsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.tsx";
import fetchImages from "./api.ts";
import { imageProps } from "./types/image.types.ts";

function App() {
  const [param, setParam] = useState<string>("");
  const [images, setImages] = useState<imageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<imageProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  //

  //
  useEffect(() => {
    if (!param) return;

    const loadImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedImages = await fetchImages({ query: param, page });
        setImages((prevImages) => [...prevImages, ...fetchedImages]);
      } catch (error) {
        setError("Щось пішло не так, спробуйте ще раз.");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [param, page]);

  const handleSearch = (topic: string) => {
    setPage(1);
    setImages([]);
    setParam(topic);
  };

  const handleImageClick = (image: imageProps) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        image={selectedImage}
      />
    </div>
  );
}

export default App;
