import React from "react";

import { Link } from "react-router-dom";
import { SectionTitle, CartItemsList, CartTotals } from "../components";
import { useSelector } from "react-redux";

function Cart() {
  // temp
  const user = useSelector((state) => state.userState.user);

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" styles="text-error" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to Checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              Proceed to Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
