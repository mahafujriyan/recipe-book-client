import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';


const DashboardLayout = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-base-200 text-base-content">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-accent-content shadow-md p-4 md:min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <nav className=" flex flex-col gap-2">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}`
            }
          >
            Overview
          </NavLink>
          <NavLink
            to="/dashboard/all-items"
            className={({ isActive }) =>
              `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}`
            }
          >
            All Recipe
          </NavLink>
          <NavLink
            to="/dashboard/add-item"
            className={({ isActive }) =>
              `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}`
            }
          >
            Add Recipe
          </NavLink>
          <NavLink
            to="/dashboard/my-items"
            className={({ isActive }) =>
              `btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}`
            }
          >
            My Recipe
          </NavLink>
        </nav>
        <div className="mt-6">
          <Link to="/" className="btn btn-primary rounded-xl">
            Back to Home
          </Link>
        </div>
      </aside>
      

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6">
        <Outlet />

      </main>
      
    </div>
       
    );
};

export default DashboardLayout;