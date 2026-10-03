function ImageCard({ url, title, description }) {
  return (
    <figure className="image-card">
      <img src={url} alt={title} loading="lazy" />
      <figcaption>
        <h3>{title}</h3>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}

export default ImageCard;
