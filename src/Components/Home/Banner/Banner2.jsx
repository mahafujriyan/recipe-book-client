import React from 'react';
import { motion } from 'framer-motion';
const Banner2 = () => {
    return (
       <div id="slide2" className="carousel-item relative w-full">
    <motion.div
  className="w-full h-full bg-cover bg-center"
  style={{ backgroundImage: "url('/assets/recipe-1.jpg')" }} // <-- correct path
  initial={{ scale: 1 }}
  animate={{ scale: 1.05 }}
  transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }}
>
  <div className=" bg-opacity-50 h-full flex flex-col justify-center items-center ">
    <h2 className="text-4xl font-bold">Turon</h2>
    <p className="mt-2 max-w-xl text-center">
      Turon (banana lumpia) are sweet and crunchy fried snacks filled with jackfruit and saba bananas and popular in the Philippines.
    </p>
  </div>
</motion.div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
    );
};

export default Banner2;