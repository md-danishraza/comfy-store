import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ request }) => {
  // objects
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(new URL(request.url).searchParams.entries());
  // console.log(params);

  const response = await customFetch("/products", { params });
  // console.log(response.data);

  return {
    products: response.data.data,
    meta: response.data.meta,
    params: params,
  };
};

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export default Products;
