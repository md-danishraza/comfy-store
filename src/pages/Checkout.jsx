import React from "react";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const loader = (store) => () => {
  const user = store.getState().userState.user;

  if (!user) {
    toast.warning("You must be logged in to Checkout!");
    return redirect("/login");
  }
  // access allowed
  return null;
};

function Checkout() {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (!cartTotal) {
    return <SectionTitle text="Your Cart is Empty!" />;
  }
  return (
    <>
      <SectionTitle text="Place Your Order." />
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export default Checkout;
