import Image from "next/image";

interface HeaderProps {
  title: string;
  logoPromoSrc: string;
  discount: string;
  paragraphs: string[];
}

export default function MobileHeader(props: HeaderProps) {
  const { title, logoPromoSrc, discount, paragraphs } = props;
  return (
    <div className={"relative flex flex-col items-center gap-y-4 py-16 mb-8"}>
      <Image
        src={logoPromoSrc}
        fill
        alt=""
        className="absolute inset-0 -z-10"
      />
      <div className="text-inherit text-4xl uppercase">{title}</div>
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
  );
}
