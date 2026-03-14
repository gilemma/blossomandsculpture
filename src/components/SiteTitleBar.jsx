
"use client";

import { Ephesis } from "next/font/google";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";



const script = Ephesis({ weight: "400", subsets: ["latin"] });

export default function SiteTitleBar() {
  return (
    <div className="border-b border-stone-300 bg-stone-50 sticky top-0 z-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center py-4 sm:px-6 md:px-10">
        <div className="justify-self-start pl-2 sm:pl-0">
          <Image src={Logo} alt="Logo" className="h-[2.667rem] w-auto max-[399px]:h-[1.778rem] sm:h-16" />
        </div>
        <h1 className={`${script.className} text-2xl sm:text-3xl md:text-4xl text-center text-stone-800`}>Blossom and Sculpture</h1>
        <nav className="flex justify-self-end pr-2 sm:pr-0 gap-4">
            <div className="flex items-center gap-4 grow-3">
                <a href="#" className=""><FiShoppingCart className="m-1 h-8 w-auto max-[399px]:h-[1.333rem]" /></a>
            </div>
        </nav>
      </div>
      
    </div>
  );
}