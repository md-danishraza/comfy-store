import React from "react";

import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Navbar, Loading } from "../components";

function HomeLayout() {
  const navigate = useNavigation();
  const isPageLoading = navigate.state === "loading";
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <main className="align-element py-20">
          <Outlet />
        </main>
      )}
      <Footer />
    </section>
  );
}

export default HomeLayout;
