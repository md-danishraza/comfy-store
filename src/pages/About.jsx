import React from "react";

function About() {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-center">
        At Comfy-Store, every piece is designed to bring effortless relaxation
        into your home. Whether it's the plush embrace of a cozy armchair or the
        seamless blend of style and function in a sleek coffee table, our
        furniture is made to elevate your living space.
      </p>
    </>
  );
}

export default About;
