import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Dashboard = () => {
        const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({ total: 0, myItems: 0 });
  useEffect(() => {
  async function fetchStats() {
    try {
      const [allRes, myRes] = await Promise.all([
        fetch('https://recipe-book-server-khaki.vercel.app/recipes'),
        fetch(`https://recipe-book-server-khaki.vercel.app/recipes/user/${user.email}`)
      ]);

      const allData = await allRes.json();
      const myData = await myRes.json();

      // Add safety checks before using .length
      const allRecipes = Array.isArray(allData) ? allData : [];
      const myRecipes = Array.isArray(myData) ? myData : [];

      

      setStats({ total: allRecipes.length, myItems: myRecipes.length });
    } catch (error) {
      console.error("❌ Failed to fetch stats:", error);
    }
  }

  if (user?.email) {
    fetchStats();
  }
}, [user?.email]);


    return (
         <div className="text-base-content">
      <h2 className="text-2xl font-semibold mb-4">Welcome, {user.displayName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-md ring-1 ring-base-300 text-center">
          <div className="p-4">
            <h3 className="text-xl font-bold">Total Recipe</h3>
            <p className="text-3xl">{stats.total || 'Loading...'}</p>

          </div>
        </div>
        <div className="card bg-base-100 shadow-md ring-1 ring-base-300 text-center">
          <div className="p-4">
            <h3 className="text-xl font-bold"> My Recipe</h3>
            <p className="text-3xl">{stats.myItems}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;