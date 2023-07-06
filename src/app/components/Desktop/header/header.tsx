import Image from "next/image";
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
      className={
        "relative flex flex-col items-center justify-center h-screen-70"
      }
    >
      <Image
        src={logoPromoSrc}
        fill
        alt=""
        className="absolute inset-0 -z-10"
      />
      <div className="flex flex-col w-full max-w-2xl">
        <div className="flex text-inherit text-5xl uppercase justify-center self-start">
          {title}
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="text-4xl">{discount}</span>
          <p className="block text-stone-700 text-xl justify-center w-full">
            {paragraphs.join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
}
