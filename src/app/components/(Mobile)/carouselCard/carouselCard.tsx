import Image from "next/image";
import React from "react";
import Carousel from "../carousel/carousel";

export default function CarouselCard() {
  return (
    <>
      <Carousel
        slides={[
          {
            src: "https://source.unsplash.com/random?landscape,mountain",
            alt: "",
          },
          {
            src: "https://source.unsplash.com/random?landscape,cars",
            alt: "",
          },
          {
            src: "https://source.unsplash.com/random?landscape,night",
            alt: "",
          },
          {
            src: "https://source.unsplash.com/random?landscape,city",
            alt: "",
          },
        ]}
      />
      <div className="flex flex-col items-center relative pt-16 pb-8 gap-4 box-border">
        <div className="absolute -top-1/2 translate-y-1/2 mt-8">
          <Image
            src={"https://placekitten.com/85/115"}
            alt={""}
            width={85}
            height={115}
          />
        </div>
        <span className="uppercase text-2xl">hotel xcaret méxico</span>
        <p className="block text-xl px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          porttitor sem erat volutpat.
        </p>
        <p className="block px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          porttitor sem. Aliquam erat volutpat.
        </p>
      </div>
    </>
  );
}
