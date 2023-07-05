import { useState } from "react";

interface ButtonProps {
    href?: string,
    text: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const { href, text, onClick } = props;
  

  return (
    <>
      <button onClick={(e) => onClick?.(e)}
        type="button"
        className="uppercase md:w-80 w-60 font-serif bg-white text-black hover:bg-black hover:text-white border-solid border-black border-2 rounded py-2 transition-all duration-300 ease-in-out place-items-center self-center"
      >
        {text}
        {/* <a href={href}>{text}</a> */}
      </button>
    </>
  );
}
