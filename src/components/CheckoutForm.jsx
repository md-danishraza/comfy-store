import React from "react";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import Submitbtn from "./Submitbtn";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";
import { clearCart } from "../features/cart/cartSlice";

export const action =
  (store, queryclient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      // removing order queries so that it will be refetched
      queryclient.removeQueries(["orders"]);

      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing your order";

      toast.error(errorMessage);

      if (error?.response?.status == 401 || 403) {
        return redirect("/login");
      }
    }

    return null;
  };

function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl">Shipping Information</h4>
      <FormInput
        label="first name"
        name="name"
        type="text"
        size="block input-info  text-lg w-full md:w-xs lg:w-md"
      />
      <FormInput
        label="address"
        name="address"
        type="text"
        size="block input-info text-lg w-full md:w-xs lg:w-md"
      />
      <div className="mt-4">
        <SubmitBtn text="Place Your Order" />
      </div>
    </Form>
  );
}

export default CheckoutForm;
