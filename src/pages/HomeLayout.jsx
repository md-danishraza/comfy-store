import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Navbar } from "../components";

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="align-element py-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
