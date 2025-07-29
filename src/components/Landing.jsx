import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-center text-center w-[96%] h-[92%] px-4 bg-[#1a1a1a] rounded-4xl mx-auto mt-13">
        <h1 className="text-white text-6xl md:text-8xl font-extrabold mb-8 drop-shadow-lg">
          SnapCart
        </h1>

       <Link to="/product" >
        <button className="
          bg-gray-700
          text-white
          font-bold
          py-4
          px-10
          rounded-full
          shadow-lg
          hover:bg-gray-600
          transition-transform
          duration-200
          ease-in-out
          hover:scale-105
          hover:shadow-xl
          active:scale-95
          active:shadow-md
        ">
          Get Started
        </button>
       </Link> 
        
      </section>
    </>
  );
};

export default Hero;