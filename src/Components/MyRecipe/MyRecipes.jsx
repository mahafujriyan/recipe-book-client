import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import MyRecipeCard from './MyRecipeCard';

const MyRecipes = () => {
    const{user}=useContext(AuthContext)
    const navigate=useNavigate()
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
  if (!user) {
    navigate('/singIn'); 
    return;
  }

  if (user?.email) {
    fetch(`https://recipe-book-server-khaki.vercel.app/recipes/user/${user.email}`)
      .then(res => res.json())
      .then(data => setRecipes(data));
  }
}, [user]);

  if (!user) return null;
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl font-bold  text-center'>My recipes</h2>

           <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3 gap-5'>
             {
                recipes.map(recipe=><MyRecipeCard recipe={recipe} recipes={recipes} setRecipes={setRecipes} user={user} key={recipe._id}></MyRecipeCard>)
            }
           </div>
        </div>
    );
};

export default MyRecipes;