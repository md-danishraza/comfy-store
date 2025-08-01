import React, { useEffect, useState } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";
import logo from "../assets/COMFY.svg";
function Navbar() {
  const isDark = useSelector((state) => state.userState.isDark);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") === "true";

    // Ensure Redux state matches localStorage
    if (storedTheme !== isDark) {
      dispatch(toggleTheme());
    }

    document.documentElement.setAttribute(
      "data-theme",
      storedTheme ? "dark" : "fantasy"
    );
  }, [dispatch, isDark]);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Title */}
          {/* <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary rounded-full p-4 text-2xl items-center  "
          >
            C
          </NavLink> */}
          <NavLink
            to="/"
            className="hidden lg:flex items-center w-24 relative "
          >
            <img src={logo} alt="" className="absolute " />
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onClick={handleTheme}
            />

            <BsMoonFill className="swap-off" />
            <BsSunFill className="swap-on" />
          </label>
          {/* CART LINK*/}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
