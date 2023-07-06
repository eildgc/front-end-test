interface BannerProps {
  paragraphs?: string[];
  text: string;
}

export default function Banner(props: BannerProps) {
  const { paragraphs = [], text } = props;

  return (
    <div className="flex flex-col grow-0 relative items-start  gap-8 pb-4 px-4 w-full">
      <div className="max-w-7xl ">
        <div
          className="text-stone-700 text-left text-sm max-w-lg"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </div>
  );
}
