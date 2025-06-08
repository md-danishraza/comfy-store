import React from "react";
import { useRouteError, Link } from "react-router-dom";

function Error() {
  const error = useRouteError();

  // if resource not found
  if (error.status == 404) {
    return (
      <main className="flex flex-col px-8 items-center justify-center text-center min-h-screen">
        <div>
          <p className="text-primary text-9xl font-semibold">404</p>
          <h1 className="mt-4 text-3xl sm:text-5xl tracking-tight font-bold">
            Page Not Found
          </h1>
          <p className="text-lg mt-6 leading-7">
            Sorry, we couldn't find the page you are looking for.
          </p>
          <div className="mt-10">
            <Link className="btn btn-secondary" to="/">
              Go Back Home
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="flex flex-col px-8 items-center justify-center text-center min-h-screen">
      <div>
        {/* <p className="text-primary text-9xl font-semibold">404</p> */}
        <h1 className="mt-4 text-3xl sm:text-5xl tracking-tight font-bold">
          some error occurred
        </h1>
        <p className="text-lg mt-6 leading-7">
          {error.message || "An unexpected error occurred."}
        </p>
        <div className="mt-10">
          <Link className="btn btn-secondary" to="/">
            Go Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Error;
