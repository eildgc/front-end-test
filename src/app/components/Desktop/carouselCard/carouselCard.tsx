import Image from "next/image";
import React, { ReactNode } from "react";
import Carousel from "../../carousel/carousel";

interface CarouselCardProps {
  title: string;
  logoSrcUrl: string;
  subTitle: string;
  paragraph: string;
  carousel: ReactNode;
  children?: ReactNode;
}

export default function CarouselCard(props: CarouselCardProps) {
  const {
    title,
    subTitle,
    paragraph = "",
    logoSrcUrl,
    carousel,
    children,
  } = props;
  return (
    <div className="grid grid-cols-2 pt-24 pb-10 w-full h-full">
      {carousel}
      <div className="flex flex-col flex-start gap-4 box-border pl-10">
        <div className="relative w-20 h-28">
          <Image src={logoSrcUrl} alt={""} fill />
        </div>
        <span className="uppercase text-2xl text-stone-900 whitespace-pre-line">
          {title}
        </span>
        <p className="block text-xl text-stone-900">{subTitle}</p>
        <p className="block text-stone-700">{paragraph}</p>
        {children}
      </div>
    </div>
  );
}
