import Dropdown from "@/app/components/dropdown/dropdown";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../lib/redux";
import { setLanguage } from "../../../../../lib/redux/features/i18n-slice";
import dropdownIcon from "@iconify/icons-gridicons/dropdown";
import { useFetchI18nQuery } from "../../../../../lib/redux/features/i18n-api-slice";

export default function Navbar() {
  const language = useAppSelector((state) => state.i18n.language);
  const dispatch = useAppDispatch();
  const { data, isFetching } = useFetchI18nQuery();
  const content = data?.[language];

  function toggleLanguage(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    dispatch(setLanguage(language === 'es' ? 'en' : 'es' ));
  }
  return (
    <>
      <nav className="flex item-center text-xs py-2 pl-2 uppercase bg-white">
        <ul className="relative flex w-full item-center gap-6 text-black text-right">
          <li className="relative grow w-4 h-8 left-0 flex items-center">
            <div className="relative w-36 h-8 ">
            <Image
              className="w-full h-full object-contain"
              src={content?.navbar.logo??""}
              alt="Logo Hoteles Xcaret"
              fill
            />
            </div>
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
              <Dropdown options={content?.navbar.menu.currency} icon={dropdownIcon}/>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}