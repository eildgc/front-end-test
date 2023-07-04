import Dropdown from "@/app/components/dropdown/dropdown";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row item-center text-xs p-2 uppercase bg-white">
        <ul className="flex flex-row w-full item-center gap-2 text-black text-right">
          <li className="basis-1/2 block h-8 w-8 ">
            <Image className="h-full w-full object-cover" src="https://placekitten.com/200/300" alt="Logo Hoteles Xcaret" width={200} height={200}/></li>
          <li className="basis-1/2 py-2">
          <a href="" className="no-underline hover:underline">Contacto</a> 
          </li>
          <li className="basis-1/2
           py-2">
            <a href="" className="no-underline hover:underline">EN</a> 
          </li>
          <li className="basis-20">
            <Dropdown />
          </li>
        </ul>
      </nav>
    </>
  );
}
