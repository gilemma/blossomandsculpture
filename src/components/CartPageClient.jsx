"use client";

import Image from "next/image";
import Link from "next/link";
import { artworks } from "../data/artworks";
import { useCart } from "./cart/CartProvider";

const artworkLookup = new Map(artworks.map((artwork) => [artwork.slug, artwork]));

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

export default function CartPageClient() {
  const { items, isHydrated, updateQuantity, removeItem, clearCart } = useCart();

  const lineItems = items
    .map((item) => {
      const artwork = artworkLookup.get(item.slug);
      return artwork ? { ...artwork, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const subtotal = lineItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingLabel = subtotal >= 50 && lineItems.length > 0 ? "Free" : "Calculated at checkout";

  if (!isHydrated) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <section className="border-b border-stone-200 pb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Cart</p>
          <h1 className="mt-3 font-serif text-4xl text-stone-800 md:text-5xl">Your Cart</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">Loading your selected prints.</p>
        </section>
      </main>
    );
  }

  if (!lineItems.length) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <section className="border-b border-stone-200 pb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Cart</p>
          <h1 className="mt-3 font-serif text-4xl text-stone-800 md:text-5xl">Your Cart</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">Your cart is empty for now. Browse the collection to add a print.</p>
        </section>

        <div className="mt-12 max-w-xl rounded-sm border border-stone-200 bg-stone-50 p-8">
          <p className="text-sm leading-7 text-stone-600">When you add a print from its product page, it will appear here with quantity controls and an order summary.</p>
          <Link
            href="/collections/art-prints"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-stone-800 px-6 text-sm uppercase tracking-[0.16em] text-stone-50 transition hover:bg-stone-700"
          >
            Return to collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
      <section className="border-b border-stone-200 pb-10">
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Cart</p>
        <h1 className="mt-3 font-serif text-4xl text-stone-800 md:text-5xl">Your Cart</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">A simple review of the prints you have selected so far.</p>
      </section>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-8">
          {lineItems.map((item) => (
            <article key={item.slug} className="grid gap-5 border-b border-stone-200 pb-8 sm:grid-cols-[8rem_minmax(0,1fr)]">
              <Link href={`/collections/art-prints/${item.slug}`} className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </Link>

              <div className="flex flex-col justify-between gap-5">
                <div>
                  <Link href={`/collections/art-prints/${item.slug}`} className="text-lg text-stone-800 transition hover:text-stone-600">
                    {item.title}
                  </Link>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-stone-600">{item.description}</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.16em] text-stone-500">{formatCurrency(item.price)}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="inline-flex items-center border border-stone-300">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                      className="flex h-10 w-10 items-center justify-center text-stone-700 transition hover:bg-stone-100"
                      aria-label={`Decrease quantity of ${item.title}`}
                    >
                      −
                    </button>
                    <span className="flex h-10 min-w-10 items-center justify-center border-x border-stone-300 px-3 text-sm text-stone-800">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center text-stone-700 transition hover:bg-stone-100"
                      aria-label={`Increase quantity of ${item.title}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(item.slug)}
                    className="text-sm uppercase tracking-[0.16em] text-stone-500 transition hover:text-stone-800"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-sm border border-stone-200 bg-stone-50 p-6">
          <h2 className="text-lg text-stone-800">Order Summary</h2>
          <div className="mt-6 space-y-4 text-sm text-stone-600">
            <div className="flex items-center justify-between gap-4">
              <span>Subtotal</span>
              <span className="text-stone-800">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <span>Shipping</span>
              <span className="text-stone-800">{shippingLabel}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-base text-stone-800">
              <span>Total</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-stone-600">This cart is ready for checkout integration whenever you want to connect the purchase flow.</p>

          <div className="mt-6 space-y-3">
            <Link
              href="/collections/art-prints"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-stone-800 px-6 text-sm uppercase tracking-[0.16em] text-stone-50 transition hover:bg-stone-700"
            >
              Continue shopping
            </Link>
            <button
              type="button"
              onClick={clearCart}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-stone-300 px-6 text-sm uppercase tracking-[0.16em] text-stone-700 transition hover:bg-stone-100"
            >
              Clear cart
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}