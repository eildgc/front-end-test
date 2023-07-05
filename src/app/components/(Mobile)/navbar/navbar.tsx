import Dropdown from "@/app/components/dropdown/dropdown";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../lib/redux";
import { setLanguage } from "../../../../../lib/redux/features/i18n-slice";

export default function Navbar() {
  const language = useAppSelector((state) => state.i18n.language);
  const dispatch = useAppDispatch();
  
  const currencies = [
    "MXN",
    "USD",
    "EUR",
    "CAD",
    "COP",
    "GBP",
    "CLP",
    "UYU",
    "RUB",
    "CNY",
    "KRW",
    "GTQ",
    "ARS",
    "PEN",
    "CRC",
    "AUD",
    "JPY",
  ];
  function toggleLanguage(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    dispatch(setLanguage(language === 'es' ? 'en' : 'es' ));
  }
  return (
    <>
      <nav className="flex item-center text-xs py-2 pl-2 uppercase bg-white">
        <ul className="relative flex w-full item-center gap-6 text-black text-right">
          <li className="grow w-24 h-8 left-0 relative">
            <Image
              className="h-full w-full object-cover"
              src="https://placekitten.com/200/300"
              alt="Logo Hoteles Xcaret"
              width={200}
              height={200}
            />
          </li>
          <div className="flex gap-4 items-center pr-4 relative right-0">
            <li className="">
              <a href="" className="no-underline hover:underline transition-all duration-300 ease-in-out">
                Contacto
              </a>
            </li>
            <li className="">
              <a href="" onClick={toggleLanguage} className="no-underline hover:underline transition-all duration-300 ease-in-out">
                {language}
              </a>
            </li>
            <li className="">
              <Dropdown options={currencies}/>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
