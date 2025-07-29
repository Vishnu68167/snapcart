import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import Navbar from "./navbar";

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);
  
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <>
    <Navbar/>
    <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]">
      <img
        className="w-[40%] h-[70%] object-contain"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">
          {product.title}
        </h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3">{product.price}</h2>
        <p className="mb-[5%]">
          {product.description}
        </p>
        <Link className=" mr-5 py-3 px-5 border rounded text-blue-300">
          Edit
        </Link>
        <Link className="py-3 px-5 border rounded text-red-300">Delete</Link>
      </div>
    </div>
    </>
    ) : ( 
       <Loading/>
  );
};

export default Details;
