
"use client";

import { Ephesis } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "./cart/CartProvider";



const script = Ephesis({ weight: "400", subsets: ["latin"] });

export default function SiteTitleBar() {
  const { itemCount, isHydrated } = useCart();

  return (
    <div className="border-b border-stone-300 bg-stone-50 sticky top-0 z-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center py-4 sm:px-6 md:px-10">
        <Link href="/collections/art-prints" className="justify-self-start pl-2 sm:pl-0">
          <Image src={Logo} alt="Logo" className="h-[2.667rem] w-auto max-[399px]:h-[1.778rem] sm:h-16" />
        </Link>
        <Link
          href="/collections/art-prints"
          className={`${script.className} text-2xl sm:text-3xl md:text-4xl text-center text-stone-800 transition-colors hover:text-stone-950`}
        >
          Blossom and Sculpture
        </Link>
        <nav className="flex justify-self-end pr-2 sm:pr-0 gap-4">
          <Link
            href="/cart"
            className="relative inline-flex items-center text-stone-700 transition-colors hover:text-stone-950"
            aria-label="Open cart"
          >
            <FiShoppingCart className="m-1 h-8 w-auto max-[399px]:h-[1.333rem]" />
            {isHydrated && itemCount > 0 ? (
              <span className="absolute -right-2 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-stone-800 px-1.5 py-0.5 text-[10px] font-medium leading-none text-stone-50">
                {itemCount}
              </span>
            ) : null}
          </Link>
        </nav>
      </div>
      
    </div>
  );
}