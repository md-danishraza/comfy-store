import React from "react";
import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";
import { generateAmountOptions } from "../utils";

import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data, id: params.id };
};

function SingleProduct() {
  const { product, id } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  // colors []
  const [productColor, setProductColor] = useState(colors[0]);
  // quantity
  const [amount, setAmount] = useState(1);
  const handleChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to={`/products/${id}`}>{title}</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{dollarAmount}</p>

          <p className="mt-6 leading-8">{description}</p>

          {/* colors */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge h-6 w-6 mr-2 ${
                      color == productColor && "border-2 border-neutral-500"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            {/* amount */}
            <div className="form-control w-full max-w-xs">
              <label htmlFor="amount" className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  Amount
                </h4>
              </label>
              <select
                className="select select-primary select-md select-bordered"
                id="amount"
                value={amount}
                onChange={handleChange}
              >
                {generateAmountOptions(3)}
              </select>
            </div>
            <div className="mt-2">
              <button className="btn btn-md btn-primary" onClick={addToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
