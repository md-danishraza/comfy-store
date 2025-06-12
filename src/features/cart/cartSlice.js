import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return JSON.parse(cart) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      //   if item exist

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      //   calculate totals
      cartSlice.caseReducers.calculateTotals(state);
      // toast message
      toast.success("Item added to Cart!");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === cartID);

      // remove from state cart
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      // re calculating totals
      state.numItemsInCart -= item.amount;
      state.cartTotal -= item.price * item.amount;
      //   calculate totals
      cartSlice.caseReducers.calculateTotals(state);
      // toast message
      toast.success("Item removed from Cart!");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;

      const item = state.cartItems.find((i) => i.cartID === cartID);

      // increment will be same (amoun > or < item.amount)
      state.numItemsInCart += amount - item.amount;

      // re calculating totals
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      //   calculate totals
      cartSlice.caseReducers.calculateTotals(state);
      // toast message
      toast.success("Item Updated!");
    },

    calculateTotals: (state) => {
      //   18% of total amount
      state.tax = 0.18 * state.cartTotal;

      state.orderTotal = state.cartTotal + state.shipping + state.tax;

      //   save to local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
