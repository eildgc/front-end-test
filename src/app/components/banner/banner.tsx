interface BannerProps {
  paragraphs?: string[];
  text: string;
}

export default function Banner(props: BannerProps) {
  const { paragraphs = [], text } = props;

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* {paragraphs.map((paragraph) => (
        <div key={paragraph} className="text-stone-700">{paragraph}</div>
      ))} */}
      <div className="text-stone-700" dangerouslySetInnerHTML={{__html:text}}></div>
    </div>
  );
}
