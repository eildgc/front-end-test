import React from "react";
import { Icon } from "@iconify/react";
import dropdownIcon from "@iconify/icons-gridicons/dropdown";

export default function Dropdown() {
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
  const currenciesList = currencies.map((currency) => (
    <option className="block w-full" key={currency}>
      {currency}
    </option>
  ));
  return (
    <div className="relative w-full uppercase bg-inherit ">
      <select className="flex w-full text-black bg-inherit rounded-md outline-none appearance-none focus:border-indigo-600 pr-6 pl-1 py-2">
        {currenciesList}
      </select>
    </div>
  );
}
