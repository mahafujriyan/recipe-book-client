
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyRecipeCard = ({ recipe, recipes, setRecipes }) => {
  const [updateRecipe, setUpdateRecipe] = useState(null);

  const handleDelete = (id) => {
    fetch(`https://recipe-book-server-khaki.vercel.app/recipes/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipes(recipes.filter((r) => r._id !== id));
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Recipe has been deleted.',
          timer: 1500,
          showConfirmButton: false,
        });
        console.log('Deleted recipe:', data);
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());

    // Convert category (comma-separated) back to string or array
    if (updatedData.category) {
      updatedData.category = updatedData.category.split(',').map((c) => c.trim());
    }

    fetch(`https://recipe-book-server-khaki.vercel.app/recipes/${updatedData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'Recipe has been updated.',
            timer: 1500,
            showConfirmButton: false,
          });

          const updated = recipes.map((r) =>
            r._id === updatedData._id ? { ...r, ...updatedData } : r
          );
          setRecipes(updated);
          setUpdateRecipe(null);
        }
      });
  };

  return (
    <div>
    <div className='card rounded-2xl p-2  overflow-hidden object-cover  shadow-md border hover:shadow-lg transition duration-300 space-y-5'>
          <img src={recipe.image} alt={recipe.title} className="h-[250px] object-cover w-full p-2 rounded-xl" />
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Prep Time:</strong> {recipe.prepTime} mins</p>
      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Likes:</strong> {recipe.likes}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => handleDelete(recipe._id)}
          className="bg-red-500 text-white px-4 py-1 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => setUpdateRecipe(recipe)}
          className="bg-blue-500 text-base-100 px-4 py-1 rounded"
        >
          Update
        </button>
        <button className="bg-white text-rose-600 p-1 rounded-full shadow hover:text-white hover:bg-rose-600 transition">
          <span className='flex gap-0.5'><FaHeart size={24} /></span>
        </button>
      </div>
    </div>

      {/* Update Modal */}
      {updateRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <h2 className="text-xl font-bold mb-4">Update Recipe</h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input type="hidden" name="_id" defaultValue={updateRecipe._id} />
              <input name="title" defaultValue={updateRecipe.title} placeholder="Title" className="input input-bordered w-full" />
              <input name="image" defaultValue={updateRecipe.image} placeholder="Image URL" className="input input-bordered w-full" />
              <textarea name="ingredients" defaultValue={updateRecipe.ingredients} placeholder="Ingredients" className="textarea textarea-bordered w-full" />
              <textarea name="instructions" defaultValue={updateRecipe.instructions} placeholder="Instructions" className="textarea textarea-bordered w-full" />
              <input name="cuisine" defaultValue={updateRecipe.cuisine} placeholder="Cuisine" className="input input-bordered w-full" />
              <input name="prepTime" defaultValue={updateRecipe.prepTime} placeholder="Preparation Time" className="input input-bordered w-full" />
              <input name="category" defaultValue={Array.isArray(updateRecipe.category) ? updateRecipe.category.join(', ') : updateRecipe.category} placeholder="Category (comma separated)" className="input input-bordered w-full" />

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setUpdateRecipe(null)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn bg-green-600 text-white">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRecipeCard;
