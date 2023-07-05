interface BannerProps {
  pharagraphs: string[];
}

export default function Banner(props: BannerProps) {
  const { pharagraphs = [] } = props;

  return (
    <div className="flex flex-col gap-4 pb-4">
      {pharagraphs.map((pharagraph) => (
        <div key={pharagraph} className="text-stone-700">{pharagraph}</div>
      ))}
    </div>
  );
}
