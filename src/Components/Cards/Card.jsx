
import React from 'react';
import { Fade } from 'react-awesome-reveal';


const Card = ({ data }) => {
  return (
    <Fade triggerOnce direction="up" cascade damping={0.2}>
      <div className="card bg-white shadow-md rounded-xl overflow-hidden p-1 w-full mx-auto">
        <img
          className="w-full h-[200px] p-3 rounded-3xl object-cover"
          src={data.thumbnail}
          alt={data.title}
        />
        <h1 className="font-bold dark:text-accent text-lg mb-2 px-3">
          {data.title}
        </h1>
      </div>
    </Fade>
  );
};

export default Card;
