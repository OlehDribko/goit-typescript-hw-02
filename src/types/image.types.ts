export type imageProps = {
  urls: {
        small: string,
      regular: string,
    }, alt_description: string,
    id: string,
}
export type imageCardProps = {
  image: imageProps,
  onImageClick:(image: imageProps) => void,
}
export type imageGalleryProp = { 
    images: imageProps[],
  onImageClick:(image: imageProps) => void,
}
export type ImageModalProps = {
    isOpen: boolean,
    onClose: () => void,
    image:imageProps,
}

