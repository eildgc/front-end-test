import Image from "next/image";
import React, { useState } from "react";

interface CarouselProps {
  slides: {
    src: string;
    alt: string;
  }[];
}

export default function Carousel(props: CarouselProps) {
  const { slides = [] } = props;
  const [curSlide, setCurSlide] = useState(0);

  function nextSlide() {
    if (curSlide === slides.length - 1) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
    }
  }
  function previouSlide() {
    if (curSlide === 0) {
      setCurSlide(slides.length - 1);
    } else {
      setCurSlide(curSlide - 1);
    }
  }

  return (
    // <!-- slider container -->
    <div className="grid place-items-center px-3">
      {/* Slider */}
      <div className="slider relative w-full h-96 overflow-hidden">
         {/* <!-- slides --> */}
        {slides.map((slide, index) => (
          <div
            className="slide w-full h-full absolute transition-transform duration-300 ease-in-out motion-reduce:transition-none"
            style={{ transform: `translateX(${100 * (index - curSlide)}%)` }}
            key={slide.src}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
       

        {/* <!-- Control buttons --> */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col">
          <button
            onClick={nextSlide}
            className="btn btn-next text-black text-3xl font-semibold cursor-pointer px-4 py-1"
          >
            &gt;
          </button>
          <button
            onClick={previouSlide}
            className="btn btn-prev text-black text-3xl font-semibold cursor-pointer px-4 py-1"
          >
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
}
