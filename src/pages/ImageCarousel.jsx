import { useState, useEffect } from "react";
import fetchImages from "../services/imageService";

const ImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch images on component mount
  useEffect(() => {
    const loadImages = async () => {
      const fetchedImages = await fetchImages();
      setImages(fetchedImages);
    };
    loadImages();
  }, []);

  // Handle Next Button
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle Previous Button
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Show Loading if images are not yet loaded
  if (images.length === 0) return <p>Loading images...</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="text-muted">Photos</h2>
      <img
        src={images[currentIndex]?.urls?.regular}
        alt={images[currentIndex]?.alt_description || "Unsplash Image"}
        style={{
          width: "auto",
          height: "60vh",
          display: "block",
          margin: "auto",
          justifyContent: "center",
          objectFit: "contain",
        }}
      />
      <div style={{ marginTop: 5, justifyContent: "center" }}>
        <button
          onClick={prevImage}
          style={{ marginRight: 10 }}
          className="btn btn-secondary"
        >
          &lt; Prev
        </button>
        <button
          onClick={nextImage}
          style={{ marginLeft: 10 }}
          className="btn btn-secondary"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
