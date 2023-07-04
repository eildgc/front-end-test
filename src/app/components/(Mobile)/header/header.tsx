import React from "react";

export default function Header() {
  return (
      <div className="flex flex-col items-center gap-y-4 py-16 mb-8">
        <div className="text-inherit text-4xl uppercase">
          viaja y vuela
        </div>
        <span className="text-4xl">
          15%
        </span>
        <p className="block px-8 justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          porttitor sem. Aliquam erat volutpat.
        </p>
      </div>
  );
}