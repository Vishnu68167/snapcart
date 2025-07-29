import React, { useContext } from "react";
import { productContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [product] = useContext(productContext);

  let dis_category =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);
  dis_category = [...new Set(dis_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };

  return (
    <nav className="w-[20%] h-full bg-white/90 rounded-[20px] shadow-lg p-6 flex flex-col items-center">
      <Link
        className="py-3 px-6 mb-4 text-sm font-semibold text-white bg-orange-400 rounded-full hover:bg-orange-500 transition"
        to="/create"
      >
        + Add Product
      </Link>

      <hr className="my-4 w-full border-zinc-300" />

      <h1 className="text-xl font-bold text-zinc-700 mb-4 w-full">Category</h1>

      <div className="w-full flex flex-col gap-3">
        {dis_category.map((c, i) => (
          <Link
            key={i}
            to={`/product?category=${c}`}
            className="flex items-center px-3 py-2 rounded-lg hover:bg-zinc-100 transition text-sm text-zinc-600"
          >
            <span
              style={{ backgroundColor: color() }}
              className="w-[14px] h-[14px] mr-3 rounded-full"
            ></span>
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
