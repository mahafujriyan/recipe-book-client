
import React, { useEffect, useState } from 'react';
import ImageCarousel from './ImageCarousel';


const Cards = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/videos.json')
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-rose-600">Best Recipe</h2>
      {images.length > 0 ? (
        <ImageCarousel images={images} />
      ) : (
        <p className="text-center">Loading recipes...</p>
      )}
    </div>
  );
};

export default Cards;
