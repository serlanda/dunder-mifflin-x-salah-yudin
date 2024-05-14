"use client";

import { useState } from "react";

export default function ProductCount({ product }) {
  const [quantity, setQuantity] = useState(1);

  const onChange = (e) => {
    if (e.target.value > 0) {
      setQuantity(e.target.value);
    }
  };

  return (
    <div className="bg-red-200 p-2 rounded-lg">
      <label htmlFor="quantity">
        Miktar
        <input
          type="number"
          name="quantity"
          id="quantity"
          className="ml-2 rounded-lg py-1 px-2 text-black"
          value={quantity}
          onChange={onChange}
        />
      </label>
      <p>urun fiyati: {product.price * quantity}</p>
    </div>
  );
}
