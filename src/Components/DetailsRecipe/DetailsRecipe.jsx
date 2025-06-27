import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { FaClock, FaGlobe, FaUser, FaSignal, FaHeart } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
;
const DetailsRecipe = () => {
  const {user}=useContext(AuthContext)
  const recipes=useLoaderData()
     const{cuisine,
        image,
        likes,
        prepTime,
        title,
        _id,
        ingredients,
        instructions,
        userEmail

        }=recipes
      const [likeCount, setLikeCount] = useState(Number(likes) || 0);

        const handleLike = async () => {
  if (!user || user.email === userEmail) {
    alert("You cannot like your own recipe.");
    return;
  }

  try {
    const res = await fetch(`https://recipe-book-server-khaki.vercel.app/recipes/${_id}/like`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userEmail: user.email })
    });

    if (res.ok) {
      setLikeCount(prev => prev + 1);
    } else {
      const data = await res.json();
      alert(data.message || "Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    alert("Network error.");
  }
};


    return (
       <div className=" card bg-base-100 shadow-xl">
          <h1 className='text-center font-bold text-2xl '>"<span className='text-orange-500'>{likeCount}</span> people interested in this recipe"</h1>
              
     <div className='grid grid-cols-1 md:grid-cols-2'>
         <div>
        <figure>
        <img src={image} alt={title} className="w-[400px] h-[500px] object-cover p-3 rounded-2xl" />
      </figure>
      </div>
      <div className="">
        <h2 className="card-title text-4xl">{title} </h2>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
          <div className="flex items-center gap-1"><FaClock /> {prepTime}</div>
          <div className="flex items-center gap-1"><FaGlobe /> {cuisine}</div>
          
          <div className="flex items-center gap-1"><FaSignal /> </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <div className="avatar">
            
          </div>
          <p className="text-sm font-semibold"></p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Ingredients:
            <span className='card'>
                {ingredients}

            </span>
          </h3>
          <div className=" gap-2 text-sm grid grid-cols-1 md:grid-cols-2 mt-2 space-x-1">
          
             <p><span className='font-bold text-2xl '>Instruction:</span> {instructions}</p>
          
          </div>
        </div>

              <button 
          onClick={handleLike}
          className="absolute top-2 right-2 bg-white text-rose-600 p-1 rounded-full shadow hover:text-white hover:bg-rose-600 transition">
          <span className='flex gap-0.5'>
            <FaHeart size={24} /> {likeCount}
          </span>
        </button>

      </div>
     </div>
    </div>
    );
};

export default DetailsRecipe;