import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Navbar } from "../components";

function HomeLayout() {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="align-element py-20">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default HomeLayout;
