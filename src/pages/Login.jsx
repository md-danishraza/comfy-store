import React from "react";
import { FormInput, Submitbtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

const url = "/auth/local";

export const action = async ({ request }, store) => {
  // console.log(store);
  const data = Object.fromEntries(await request.formData());

  try {
    const response = await customFetch.post(url, data);
    store.dispatch(loginUser({ response: response.data }));
    toast.success("Logged In Successfully!");
    return redirect("/");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";

    toast.error(errorMessage);
  }

  return null;
};

function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifier"
          defaultValue="tim@gmail.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultValue="tim@gmail.com"
        />
        <div className="mt-4">
          <Submitbtn text="login" />
        </div>

        <button className="btn btn-secondary btn-block" type="button">
          guest user
        </button>
        <p className="text-center">
          Not a member Yet?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
