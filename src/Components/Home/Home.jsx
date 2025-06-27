import React from 'react';

import Videos from '../../VideosData/Videos';
import ThemeToggle from '../../Utilites/ThemeToggle';
import TopRecipe from './TopRecipe';
import Cards from '../Cards/Cards';
import AllRecipe from '../AllRecipe/AllRecipe';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div className=' w-11/12 mx-auto space-y-4'>
             <div className="flex justify-end">
                
            </div>
            <Banner></Banner>
            <AllRecipe></AllRecipe>
           <TopRecipe></TopRecipe>
            <Videos></Videos>
            <Cards></Cards>
            
        </div>
    );
};

export default Home;