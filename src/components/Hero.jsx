import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          We’re redefining comfort in every home.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Experience furniture designed with you in mind—where style meets
          functionality, and relaxation is effortless. At Comfy-Store, we blend
          aesthetics with ergonomics, creating pieces that transform the way you
          live and unwind.
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden lg:carousel h-[28rem] carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((img, i) => {
          return (
            <div key={i} className="carousel-item">
              <img
                src={img}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
