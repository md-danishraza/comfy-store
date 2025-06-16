import React from "react";
import { Hero } from "../components";
import { FeaturedProducts } from "../components";

import { customFetch } from "../utils";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch("/products?featured=true"),
};

export const loader = (queryclient) => async () => {
  const response = await queryclient.ensureQueryData(featuredProductsQuery);
  // console.log(response.data);
  const products = response.data.data;
  return { products };
};

function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default Landing;
