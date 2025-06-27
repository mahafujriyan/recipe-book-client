import React, { useContext, useState } from 'react';
import { FaClock, FaHeart } from 'react-icons/fa';
import { IoInformationOutline } from 'react-icons/io5';
import { MdStar } from 'react-icons/md';
import { PiForkKnifeBold } from 'react-icons/pi';

import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { handleLike } from '../../Utilites/Utilities';

const AllRecipeCard = ({recipe}) => {
    
        const{cuisine,
    image,
    likes,
    prepTime,
    title,
    userEmail,
    _id}=recipe
    const {user}=useContext(AuthContext)

     const [likeCount, setLikeCount] = useState(Number(likes) || 0);

    const likeClick = () => {
        handleLike(_id, userEmail, user, setLikeCount);
      };

    return (
         <div className=" max-w-xs my-5  rounded-xl overflow-hidden shadow-md border hover:shadow-lg transition duration-300" >
      <div className="relative">
        <img
            src={image}
          alt="Creamy Garlic Mushroom Penne Pasta"
          className="w-full h-[180px] p-2 rounded-2xl object-cover"
        />
        <div className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-sm rounded-full flex items-center gap-1">
          <MdStar className="text-white" />
          <span>4.8</span>
        </div>
        <button 
          onClick={likeClick}
          className="absolute top-2 right-2 bg-white text-rose-600 p-1 rounded-full shadow hover:text-white hover:bg-rose-600 transition"> <FaHeart></FaHeart>
            {likeCount}
          </button>
      </div>

      <div className="p-4">
       
        <h3 className="text-md font-semibold dark:text-accent ">
          {title}
        </h3>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
          <div className="flex items-center gap-1">
            <FaClock className="text-rose-400" /> <span>{prepTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <PiForkKnifeBold className="text-rose-400" /> <span>{cuisine}</span>
          </div>
          
        </div>
        <div className="flex justify-center mt-2 items-center gap-1">
           <span><Link  to={`/recipe/${_id}`} className='btn btn-secondary'>  <IoInformationOutline size={24} className="text-white" /> See more</Link></span>
          </div>
      </div>
    </div>
    );
};

export default AllRecipeCard;