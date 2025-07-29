import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import Navbar from "./navbar";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Product = () => {
  const [product] = useContext(productContext);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const [filterPro, setFilterPro] = useState(null);

  const getProdCategory = async () => {
    try {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(
          category
        )}`
      );
      setFilterPro(data);
    } catch (error) {
      console.log("Error fetching filtered products:", error);
    }
  };

  useEffect(() => {
    if (!category) {
      // If no category selected, show all products
      setFilterPro(product);
    } else {
      getProdCategory();
    }
  }, [category, product]);

  return product ? (
    <>
      <Navbar />
      <div className="w-[96%] mx-auto mt-[100px] bg-white rounded-[30px] shadow-2xl p-10 flex gap-6 min-h-[80vh] overflow-hidden">
        <Nav />
        <div className="w-full flex flex-wrap overflow-y-auto gap-6 justify-start">
          {filterPro &&
            filterPro.map((p) => (
              <Link
                key={p.id}
                to={`/details/${p.id}`}
                className="p-4 border shadow-lg rounded-xl w-[18%] min-h-[35vh] bg-zinc-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-center"
              >
                <div
                  className="hover:scale-105 transition-transform duration-300 mb-4 w-full h-[70%] bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${p.image})` }}
                ></div>
                <h1 className="text-center text-sm font-semibold text-zinc-800 hover:text-blue-400">
                  {p.title}
                </h1>
              </Link>
            ))}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Product;
