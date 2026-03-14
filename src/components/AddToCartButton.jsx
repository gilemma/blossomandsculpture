"use client";

import { useState } from "react";
import { useCart } from "./cart/CartProvider";

export default function AddToCartButton({ slug }) {
  const { addItem } = useCart();
  const [hasAdded, setHasAdded] = useState(false);

  const handleClick = () => {
    addItem(slug);
    setHasAdded(true);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex min-h-12 items-center justify-center rounded-sm bg-stone-800 px-6 text-sm uppercase tracking-[0.16em] text-stone-50 transition hover:bg-stone-700"
    >
      {hasAdded ? "Added to cart" : "Add to cart"}
    </button>
  );
}