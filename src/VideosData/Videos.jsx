import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { FiPlay } from 'react-icons/fi';

const Videos = () => {
     const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("/videos.json")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

    return (
       <div className="max-w-6xl mx-auto px-4 py-8">
         <h2 className="text-3xl font-bold text-center mb-8 text-rose-600">Delicious Recipe Videos</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                videos.map(video=><VideoCard video={video} key={video.id}></VideoCard>)
            }
         </div>
        
       </div>

    )
}

export default Videos;