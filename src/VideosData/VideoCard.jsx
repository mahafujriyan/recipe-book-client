import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FiPlay } from 'react-icons/fi';

const VideoCard = ({video}) => {
    
  
    return (

       <Fade triggerOnce direction="up" cascade damping={0.2}>
         <div   className="bg-white shadow-md rounded-xl overflow-hidden">
            <div
    className="cursor-pointer relative"
    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
  >
    <img
      src={video.thumbnail}
      alt={video.title}
      className="w-full h-48 object-cover"
    />
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-bold text-xl opacity-100 transition">
      <FiPlay /> Play
    </div>
  </div>
  <div className="p-4">
    <h3 className="font-bold dark:text-accent text-lg mb-2">{video.title}</h3>
    <p className="text-sm text-gray-600">{video.description}</p>
  </div>
        </div>
       </Fade>
       
    );
};

export default VideoCard;