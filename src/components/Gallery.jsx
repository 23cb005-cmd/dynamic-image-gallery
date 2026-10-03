import ImageCard from "./ImageCard";
import images from "../data/images";

function Gallery() {
  return (
    <>
      <section className="gallery-grid">
        {images.map((image) => (
          <ImageCard
            key={image.title}
            url={image.url}
            title={image.title}
            description={image.description}
          />
        ))}
      </section>
    </>
  );
}

export default Gallery;
