import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const productsQuery = (params) => {
  const { search, category, company, sort, price, shipping, page } = params;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch("/products", { params }),
  };
};

export const loader =
  (queryclient) =>
  async ({ request }) => {
    // objects
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    // console.log(new URL(request.url).searchParams.entries());
    // console.log(params);

    const response = await queryclient.ensureQueryData(productsQuery(params));
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
