
"use client";

import { Ephesis } from "next/font/google";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";



const script = Ephesis({ weight: "400", subsets: ["latin"] });

export default function SiteTitleBar() {
  return (
    <div className="border-b border-stone-300 bg-stone-50 sticky top-0 z-10">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 py-4 md:px-10">
        <Image src={Logo} alt="Logo" className="h-16 w-auto" />
        <h1 className={`${script.className} text-4xl text-center text-stone-800`}>Blossom and Sculpture</h1>
        <nav className="flex justify-self-end gap-4">
            <div className="flex items-center gap-4 grow-3">
                <a href="#" className=""><FiShoppingCart className="h-8 w-auto m-1" /></a>
            </div>
        </nav>
      </div>
      
    </div>
  );
}