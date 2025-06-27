import React from 'react';

const Banner1 = () => {
    return (
        <div id="slide1" className="carousel-item relative w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-400">

     <div className=" w-full rounded-lg shadow-lg overflow-hidden bg-white">
      {/* Image */}
      <img
        src="/assets/recope-2.jpg"
        alt="Healthy Breakfast"
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="bg-[#A7C5BD] px-4 py-3">
        <h3 className="text-lg font-semibold text-white text-center mb-1">
          Healthy lunch
        </h3>
        
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
    );
};

export default Banner1;