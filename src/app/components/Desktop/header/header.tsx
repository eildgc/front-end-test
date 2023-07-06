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
    <div
      className={"relative flex flex-col items-center justify-center h-screen-70"}
    >
      <Image
        src={logoPromoSrc}
        fill
        alt=""
        className="absolute inset-0 -z-10"
      />
      <div className="pl-24">
        <div className="text-inherit text-5xl uppercase self-start">
          {title}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{discount}</span>
          {paragraphs.map((paragraph) => (
            <p
              className="block text-stone-700 text-xl justify-center"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}