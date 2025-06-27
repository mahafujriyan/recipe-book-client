
import React, { useContext, useState } from 'react';
import { GiOpenBook } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthContext';
import { Link, NavLink, useLocation } from 'react-router';
import { MdDashboard } from 'react-icons/md';
import ThemeToggle from '../../Utilites/ThemeToggle';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    logOut()
      .then(() => alert("Signed out successfully"))
      .then(() => window.location.reload())
      .catch((error) => console.log(error));
  };

  const handleMobileToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const navLinks = (
    <>
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}>
        Home
      </NavLink>
      <NavLink to="/allRecipe" className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}>
        All Recipe
      </NavLink>
      
    </>
  );

  const userLinks = (
    <>
      <NavLink to="/addRecipe" className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}>
        Add Recipe
      </NavLink>
      <NavLink to="/myRecipe" className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}>
        My Recipes
      </NavLink>
      <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-primary font-bold' : 'hover:text-primary'}>
        <div className="flex items-center gap-1">
          <MdDashboard size={18} /> 
        </div>
      </NavLink>
    </>
  );

  return (
    <nav className="bg-orange-100 text-neutral-800 shadow-md sticky top-0 z-50 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
         <Link
              to="/"
              className="flex items-center gap-2 text-3xl font-bold text-rose-600 hover:text-rose-800 transition-all duration-200"
            >
              <GiOpenBook className="text-4xl" />
              <span>TastyPages</span>
            </Link>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl text-primary cursor-pointer" onClick={handleMobileToggle}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 font-medium items-center">
          {navLinks}
          {user && userLinks}
          <ThemeToggle />
        </div>

        {/* Auth Buttons / Avatar */}
        {user ? (
          <div className="relative">
            <img
              onClick={() => setShowMenu(!showMenu)}
              src={user?.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
              alt="avatar"
              className="hidden md:block w-10 h-10 rounded-full cursor-pointer border-2 border-primary"
            />
            {showMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-base-100 border border-neutral rounded shadow-md p-3 z-50">
                <img
                  className="w-10 h-10 border-2 border-primary rounded-full"
                  src={user?.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
                  alt={user.displayName}
                />
                <p className="font-semibold text-base-content mt-2">{user?.displayName || 'User'}</p>
                <button
                  onClick={handleLogout}
                  className="mt-3 w-full btn btn-error"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden md:flex gap-2">
            <Link to="/signIn" className="btn btn-primary">Login</Link>
            <Link to="/signUp" className="btn btn-primary">Register</Link>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-3 font-medium text-base-content">
            {navLinks}
            {user && userLinks}
            <ThemeToggle />

            {!user ? (
              <>
                <Link to="/signIn" onClick={handleMobileToggle} className="btn btn-primary px-3 py-1 rounded">Login</Link>
                <Link to="/signUp" onClick={handleMobileToggle} className="btn btn-primary px-3 py-1 rounded">Register</Link>
              </>
            ) : (
              <div className="flex flex-col items-center gap-2 mt-4 p-3 border border-neutral rounded bg-base-100 shadow-md">
                <img
                  src={user?.photoURL || 'https://i.ibb.co/ZYW3VTp/brown-brim.png'}
                  alt={user.displayName}
                  className="w-12 h-12 rounded-full border-2 border-primary"
                />
                <p className="text-center font-semibold text-base-content">{user?.displayName || 'User'}</p>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenu(false);
                  }}
                  className="w-full btn btn-error"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
