"use client";
import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";

interface DropdownProps {
  options?: string[];
  icon: IconifyIcon;
}

export default function Dropdown(props: DropdownProps) {
  const { options = [], icon } = props;
  const optionElements = options.map((option) => (
    <option className="block w-full" key={option}>
      {option}
    </option>
  ));
  return (
    <div className="relative flex w-full uppercase bg-inherit ">
      {/* <select className="flex w-full text-black bg-inherit rounded-md outline-none appearance-none focus:border-indigo-600 pr-6 pl-1 py-2"> */}
      <select
        className="flex w-full text-black bg-inherit rounded-md outline-none uppercase appearance-none focus:border-indigo-600 pr-6 relative z-10"
        suppressHydrationWarning
      >
        {optionElements}
      </select>
      <Icon className="absolute right-0 top-1/2 -translate-y-1/2" icon={icon} width={24} height={24} />
    </div>
  );
}
