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

export default function MobileCarouselCard(props: CarouselCardProps) {
  const { title, subTitle, paragraph = "", logoSrcUrl, carousel, children } = props;
  return (
    <div className="relative">
      {carousel}
      <div className="flex flex-col items-center pt-16 pb-8 gap-4 box-border">
		{/* HACK: using hardcoded top-96 same as in carousel */}
        <div className="absolute top-96 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white box-content">
          <div className="w-20 h-28 border-white border-8 relative">
            <Image src={logoSrcUrl} alt={""} fill />
          </div>
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
