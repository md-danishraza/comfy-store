import React from "react";
import { FormInput, Submitbtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

const url = "/auth/local/register";

export const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());

  try {
    const response = await customFetch.post(url, data);
    toast.success("account created successfully!");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";

    toast.error(errorMessage);
    return null;
  }

  return null;
};

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="Username" name="username" />
        <FormInput type="email" label="Email" name="email" />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4">
          <Submitbtn text="Register" />
        </div>

        <p className="text-center">
          Already a member?{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Register;
