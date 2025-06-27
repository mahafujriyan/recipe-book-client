import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Roots from '../Roots/Roots';
import AddRecipe from '../Components/AddRecipe/AddRecipe';
import UpdateRecipe from '../Components/UpdateRecipe/UpdateRecipe';
import Home from '../Components/Home/Home.jsx';
import AllRecipe from '../Components/AllRecipe/AllRecipe.jsx';
import DetailsRecipe from '../Components/DetailsRecipe/DetailsRecipe.jsx';
import ErrorPage from '../errorPage/ErrorPage.jsx';
import SingUp from '../Components/Auth/SingUp.jsx';
import SingIn from '../Components/Auth/SingIn.jsx';
import MyRecipes from '../Components/MyRecipe/MyRecipes.jsx';
import PrivateRoutes from './PrivateRoutes.jsx';
import Loader from '../Loader/Loader.jsx';
import DashboardLayout from '../Dashboad/DashboardLayout.jsx';
import Dashboard from '../Dashboad/Dashboard.jsx';
export const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots> ,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
          index: true,
          element:<Home></Home> 
        },
        {
          path: 'allRecipe',
          element: <AllRecipe></AllRecipe>,
          
         


        }
        ,
        {
          path:'myRecipe',
          element:<PrivateRoutes>
            <MyRecipes></MyRecipes>
          </PrivateRoutes>


        },
        
        {
          path:'addRecipe',
          element:<PrivateRoutes>
            <AddRecipe></AddRecipe>
          </PrivateRoutes>
        },
        {
          path:'updateRecipe',
          element:<UpdateRecipe></UpdateRecipe>
        },
          {
  path: 'recipe/:id',
  loader: async ({ params }) => {
    const res = await fetch(`https://recipe-book-server-khaki.vercel.app/recipes/${params.id}`);
    return res.json();
  },
  element:<PrivateRoutes>
     <DetailsRecipe />
  </PrivateRoutes> ,
  hydrateFallbackElement:<Loader></Loader>
},

      {
        path:'singUp',
        element:<SingUp></SingUp>
      },
      {
        path:'singIn',
        element:<SingIn></SingIn>
      },
      {
        path:'recipeDetails',
        element:<PrivateRoutes>
          <DetailsRecipe></DetailsRecipe>
        </PrivateRoutes>
      }


        

    ]
  },
   {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      { index: true, element: <Dashboard /> },
    { path: "all-items", element: <AllRecipe /> }, 
    { path: "add-item", element: <AddRecipe /> }, 
    { path: "my-items", element: <MyRecipes /> },
    ]
  }
]);

export default router;