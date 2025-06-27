import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router";


const TopRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  fetch("https://recipe-book-server-khaki.vercel.app/recipes/liked")
    .then((res) => res.json())
    .then((data) => setRecipes(data));
}, []);
;


  return (
    <Fade triggerOnce direction="up" cascade damping={0.2}>

      <div className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Top Liked Recipes</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="border rounded-lg shadow p-4">
            <img
              src={recipe.image || "https://via.placeholder.com/300"}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
           <p className="text-gray-600">Cuisine: {recipe.cuisine}</p>

                  <p className="text-amber-500 font-medium mt-2">
                Likes: {parseInt(recipe.likes) || 0}
              </p>


          
            <Link className="btn mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" to={`/recipe/${recipe._id}`}>View Details</Link>

          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("/allRecipe")}
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900"
        >
          See All Recipes
        </button>
      </div>
    </div>
    </Fade>
  );
};

export default TopRecipe;

