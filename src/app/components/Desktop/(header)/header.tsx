import Image from "next/image";
import React from "react";

interface HeaderProps {
  title: string;
  logoPromoSrc: string;
  discount: string;
  paragraphs: string[];
}

export default function Header(props: HeaderProps) {
  const { title, logoPromoSrc, discount, paragraphs } = props;
  return (
    <div className={"flex flex-col items-center relative"}>
      <Image src={logoPromoSrc} fill alt="" className="absolute inset-0 -z-10" />
      <div className="text-inherit text-5xl uppercase">{title}</div>
      <div className="flex">
        <span className="text-4xl">{discount}</span>
        {paragraphs.map((paragraph) => (
          <p
            className="block px-8 text-stone-700 text-xl justify-center"
            key={paragraph}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
