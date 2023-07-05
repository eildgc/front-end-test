import React from "react";

interface HeaderProps {
  title: string,
}

export default function Header(props:HeaderProps) {
  const {title } = props;
  return (
      <div className="flex flex-col items-center gap-y-4 py-16 mb-8">
        <div className="text-inherit text-4xl uppercase">
          {title}
        </div>
        <span className="text-4xl">
          15%
        </span>
        <p className="block px-8 text-stone-700 text-xl justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          porttitor sem. Aliquam erat volutpat.
        </p>
      </div>
  );
}