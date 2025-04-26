import React from "react";
import { imageCardProps } from "../../types/image.types";

const ImageCard = ({ image, onImageClick }: imageCardProps) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
