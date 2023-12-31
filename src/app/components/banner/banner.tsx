interface BannerProps {
  text: string;
}

export default function Banner(props: BannerProps) {
  const { text } = props;

  return (
    <div className="flex flex-col grow-0 relative items-start gap-8 pb-4 w-full">
      <div className="max-w-7xl mr-auto">
        <div
          className="text-stone-700 text-left text-sm max-w-xl pl-2 2xl:pl-10"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </div>
  );
}
