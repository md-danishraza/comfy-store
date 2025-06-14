import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
function CartItemsList() {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  // console.log(cartItems);

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </>
  );
}

export default CartItemsList;
