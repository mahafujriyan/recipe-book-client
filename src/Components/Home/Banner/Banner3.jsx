import React from 'react';

const Banner3 = () => {
    return (
         <div id="slide3" className="carousel-item relative w-full bg-[#fef9c3]">
           <div className="w-full rounded-lg shadow-lg overflow-hidden bg-white">
      {/* Image */}
      <img
        src="/assets/recope-3.jpg"
        alt="Healthy Breakfast"
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="bg-[#A7C5BD] px-4 py-3">
        <h3 className="text-lg font-semibold text-white mb-1 text-center">
          Healthy Breakfast Meals
        </h3>
        
      </div>
    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
    );
};

export default Banner3;