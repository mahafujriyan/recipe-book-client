import React, { useEffect, useState } from 'react';
import AllRecipeCard from './AllRecipeCard';
import CuisineFilter from './CuisineFilter';

const AllRecipe = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(false);
  const [cuisines, setCuisines] = useState([]);

  // Fetch all unique cuisines
  useEffect(() => {
    const fetchAllCuisines = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://recipe-book-server-khaki.vercel.app/recipes");
        const data = await res.json();
        const uniqueCuisines = [...new Set(data.map(r => r.cuisine))];
        setCuisines(uniqueCuisines);
      } catch (err) {
        console.error("Error fetching cuisines:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllCuisines();
  }, []);

  // Fetch recipes with optional cuisine and sorting
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        let url = "https://recipe-book-server-khaki.vercel.app/recipes";
        const queryParams = [];

        if (selectedCuisine) queryParams.push(`cuisine=${encodeURIComponent(selectedCuisine)}`);
        if (sortOrder) queryParams.push(`sort=${sortOrder}`);

        if (queryParams.length > 0) {
          url += `?${queryParams.join("&")}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setRecipesData(data);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, [selectedCuisine, sortOrder]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center my-4 gap-4">
        <CuisineFilter
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          cuisines={cuisines}
          loading={loading}
        />

        <div>
          <label className="font-medium mr-2">Sort by:</label>
          <select
            className="border px-3 py-1 rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Default</option>
            <option value="asc">A-Z (Title)</option>
            <option value="desc">Z-A (Title)</option>
            <option value="top">Top Liked</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? <p>Loading...</p> : recipesData.map((recipe) => (
          <AllRecipeCard recipe={recipe} key={recipe._id} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipe;