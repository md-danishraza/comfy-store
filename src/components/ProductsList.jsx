import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function ProductsList() {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-y-8 w-full">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 rounded-lg flex flex-row w-full  gap-y-4 bg-base-100 shadow-xl hover:shadow-2xl duration-300 group "
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="flex flex-col sm:flex-row justify-between grow-1  ml-8 sm:0">
              <div className="ml-0 sm:ml-16">
                <h3 className="capitalize font-medium text-lg">{title}</h3>
                <h4 className="capitalize text-md text-neutral-content">
                  {company}
                </h4>

                {/* COLOR */}
              </div>

              <p className="font-medium  text-lg ">{dollarsAmount}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsList;
