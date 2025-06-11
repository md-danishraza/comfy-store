import React from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

function ProductsContainer() {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;

  const [layout, setLayout] = useState("grid");

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm
        ${
          pattern == layout
            ? "btn-primary text-primary-content"
            : "btn-ghost text-based-content"
        }
    `;
  };
  return (
    <>
      {/* header */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4>
          {totalProducts} Product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {/* products */}
      <div>
        {totalProducts == 0 ? (
          <h4>Sorry, No products available.</h4>
        ) : layout == "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
