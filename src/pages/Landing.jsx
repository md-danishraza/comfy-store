import React from "react";
import { Hero } from "../components";
import { FeaturedProducts } from "../components";

import { customFetch } from "../utils";

export const loader = async () => {
  const response = await customFetch("/products?featured=true");
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
