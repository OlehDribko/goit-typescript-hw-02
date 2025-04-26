import Modal from "react-modal";
import React from "react";
import { ImageModalProps } from "../../types/image.types";

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Selected Image"
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
      <button onClick={onClose}>Закрити</button>
    </Modal>
  );
};

export default ImageModal;
