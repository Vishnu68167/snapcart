import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Details from "./components/Details";
import Landing from "./components/Landing";
import Product from "./components/Product";



const App = () => {
  return (
    
    <div className="h-screen w-screen flex">
      
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/product" element={<Product />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App; 
