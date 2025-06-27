import React from 'react';

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import { PiPhone } from 'react-icons/pi';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-orange-100  text-gray-700 py-10 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3  gap-8 text-center md:text-left">
        
        {/* Logo and Copyright */}
        <div>
           <Link
      to="/"
      className="flex items-center gap-2 text-3xl font-bold text-rose-600 hover:text-rose-800 transition-all duration-200"
    >
      <GiOpenBook className="text-4xl" />
      <span>TastyPages</span>
    </Link>
          <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} RecipeBook. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>Email: support@testypages.com</p>
          <p> <span className='flex gap-2'> <PiPhone size={24}></PiPhone> 16458</span> </p>
        </div>

        {/* Social Links */} 
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-orange-500 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-orange-700" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-orange-700" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-orange-700" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-orange-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
