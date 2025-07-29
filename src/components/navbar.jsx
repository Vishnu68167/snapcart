import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl bg-[#fae8da] backdrop-blur-md rounded-full shadow-md px-6 py-3 flex items-center justify-between z-50">
      <div className="font-bold text-lg text">
        <span className="text-orange-500"></span>SnapCart
      </div>
      <ul className="flex space-x-6 text-sm text-gray-700 font-medium">
        <li className="hover:text-black cursor-pointer"><Link to="/" className="text-shadow-black ">HOME</Link></li>
        <li className="hover:text-black cursor-pointer">ABOUT</li>
        <li className="hover:text-black cursor-pointer"><Link to="/product" >PRODUCT</Link></li>
        <li className="hover:text-black cursor-pointer">PROFILE</li>
      </ul>
      <button className="bg-[#bfa57f] text-white px-5 py-2 rounded-full text-sm hover:bg-[#a98f6c] transition">
        Contact us
      </button>
    </nav>
  );
};

export default Navbar;