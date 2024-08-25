import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function GalleryImage({ gallery = [] }) {
  const galleryImages = gallery.map((imageUrl) => ({
    original: imageUrl,
    thumbnail: imageUrl,
  }));

  return <ImageGallery showPlayButton={false} items={galleryImages} />;
}

export default GalleryImage;
