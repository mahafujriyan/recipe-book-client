

import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import {  useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";
const cuisineOptions = ["Italian", "Mexican", "Indian", "Chinese", "Others"];
const categoryOptions = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"];

const AddRecipeForm = () => {

const {user}=useContext(AuthContext)
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();
   const form=e.target
   const formData=new FormData(form)
   const newRecipe=Object.fromEntries(formData.entries())
      newRecipe.categories = formData.getAll("categories");
       newRecipe.userEmail = user?.email || "anonymous@example.com";

    console.log("Recipe submitted:",newRecipe);
    
    fetch("https://recipe-book-server-khaki.vercel.app/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRecipe)
    })
      .then((res) => res.json())
      .then((data) => {

        if(data.insertedId){
                Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your recipe has been added",
        showConfirmButton: false,
        timer: 1500
      });
        }
        console.log("data after added", data);
        navigate("/");
      })
      .catch((err) => console.error("Submission error:", err));
  };
  

  return ( 
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-base-200 shadow-md rounded-xl space-y-6 my-5">
      <h2 className="text-2xl font-bold text-center text-rose-600">Add New Recipe</h2>

      {/* Image Upload */}
      <div >
        <label className="block font-semibold mb-1">Image</label>
       <input
          type="text"
          name="image"
         
        
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* Title */}
      <div>
        <label className="block font-semibold mb-1">Title</label>
        <input
          type="text"
          name="title"
         
        
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>

      {/* Ingredients */}
      <div>
        <label className="block font-semibold mb-1">Ingredients</label>
        <textarea
          name="ingredients"
        
          
          className="w-full border rounded px-3 py-2"
          rows={3}
          required
        />
      </div>

      {/* Instructions */}
      <div>
        <label className="block font-semibold mb-1">Instructions</label>
        <textarea
          name="instructions"
         
          className="w-full border rounded px-3 py-2"
          rows={3}
          required
        />
      </div>

      {/* Cuisine Type */}
      <div>
        <label className="block font-semibold mb-1">Cuisine Type</label>
        <select
          name="cuisine"
       
          className="w-full border rounded px-3 py-2"
          required
        >
          <option value="">-- Select Cuisine --</option>
          {cuisineOptions.map((cuisine) => (
            <option key={cuisine} value={cuisine}>{cuisine}</option>
          ))}
        </select>
      </div>

      {/* Preparation Time */}
      <div>
        <label className="block font-semibold mb-1">Preparation Time (minutes)</label>
        <input
          type="number"
          name="prepTime"
         
          className="w-full border rounded px-3 py-2"
          min="1"
          required
        />
      </div>

      {/* Categories */}
      <div>
        <label className="block font-semibold mb-1">Categories</label>
        <div className="flex flex-wrap gap-4">
          {categoryOptions.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="categories"
                value={category}
              
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Hidden Likes */}
      <input type='number' name="likes"  defaultValue={0} />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-rose-600 text-white font-bold py-3 rounded hover:bg-rose-700 transition flex items-center justify-center gap-2"
      >
        <FaPlus /> Add Recipe
      </button>
      
    </form>
  );
};

export default AddRecipeForm;
