import React from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { ComplexPagination, OrdersList, SectionTitle } from "../components";

const ordersQuery = (params, user) => {
  return {
    queryKey: ["order", user.username, params.page ? parseInt(params.page) : 1],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryclient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warning("You Must Be LoggedIn!");
      return redirect("/login");
    }
    // getting params as an object (or we can get it from params argument of loader)
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    // getting all orders (if user exist jwt)
    try {
      const response = await queryclient.ensureQueryData(
        ordersQuery(params, user)
      );
      // console.log(response);
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error accessing your orders";

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
    }
    return null;
  };

function Orders() {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="Please make an order." />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <ComplexPagination />
    </>
  );
}

export default Orders;
