"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "blossom-and-sculpture-cart";
const CartContext = createContext(null);

function normalizeCart(items) {
  return items
    .filter((item) => item?.slug && Number.isFinite(item?.quantity))
    .map((item) => ({ slug: item.slug, quantity: Math.max(1, Math.floor(item.quantity)) }));
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(STORAGE_KEY);
      if (storedCart) {
        setItems(normalizeCart(JSON.parse(storedCart)));
      }
    } catch {
      setItems([]);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [isHydrated, items]);

  const value = useMemo(() => {
    const addItem = (slug) => {
      setItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.slug === slug);

        if (existingItem) {
          return currentItems.map((item) =>
            item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
          );
        }

        return [...currentItems, { slug, quantity: 1 }];
      });
    };

    const updateQuantity = (slug, quantity) => {
      setItems((currentItems) => {
        if (quantity <= 0) {
          return currentItems.filter((item) => item.slug !== slug);
        }

        return currentItems.map((item) =>
          item.slug === slug ? { ...item, quantity } : item
        );
      });
    };

    const removeItem = (slug) => {
      setItems((currentItems) => currentItems.filter((item) => item.slug !== slug));
    };

    const clearCart = () => setItems([]);
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);

    return { items, isHydrated, itemCount, addItem, updateQuantity, removeItem, clearCart };
  }, [items, isHydrated]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}