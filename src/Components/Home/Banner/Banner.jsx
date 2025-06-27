import React from 'react';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';

const Banner = () => {
    return (
        <div className="carousel w-full h-8/12 rounded-lg overflow-hidden">
      <Banner1 />
      <Banner2 />
      <Banner3 />
    </div> 
    );
};

export default Banner;