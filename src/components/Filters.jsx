import React from "react";
import { Form, useLoaderData, Link } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

function Filters() {
  const { meta, params } = useLoaderData();
  // destructure default values from query params
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* search */}
      <FormInput
        type="search"
        label="search product"
        size="input-sm"
        name="search"
        defaultValue={search}
      />
      {/* catogeries */}
      <FormSelect
        name="category"
        label="select category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />

      {/* companies */}
      <FormSelect
        name="company"
        label="select company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* order sorting */}
      <FormSelect
        name="order"
        label="Sort By"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* price */}
      <FormRange
        name="price"
        label="Select Price"
        size="range-sm"
        price={price}
      />

      {/* free shipping checkbox */}
      <FormCheckbox
        name="shipping"
        label="Free Shipping"
        defaultValue={shipping}
        size="checkbox-sm"
      />

      {/* buttons */}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  );
}

export default Filters;
