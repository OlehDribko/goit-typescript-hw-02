import React from "react";

import ImageCard from "../ImageCard/ImageCard";
import style from "./ImagGallery.module.css";
import { imageGalleryProp } from "../../types/image.types";

const ImageGallery = ({ images, onImageClick }: imageGalleryProp) => {
  return (
    <ul className="cardOfImg">
      {images.map((img) => (
        <li className={style.cardOfImg} key={img.id}>
          <ImageCard image={img} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
