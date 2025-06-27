// import React from 'react';

import LottieAni from "../../Animation/LottieAni";

const CuisineFilter = ({ selectedCuisine, setSelectedCuisine, cuisines, loading }) => {
  return (
    <div className="my-4 text-center">
      <label className="mr-2 font-semibold text-base-content">Filter by Cuisine:</label>

      {loading ? (
        <LottieAni></LottieAni>
      ) : (
        <select
          className="select select-bordered"
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
        >
          <option value="">All</option>
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CuisineFilter;
