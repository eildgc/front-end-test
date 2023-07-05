import Image from "next/image";

interface FooterProps {
  socials: {
    srcUrl: string;
    logo: {
      srcUrl: string;
      alt: string;
    };
  }[];
  copy: string;
  links: {
    title: string;
    srcUrl: string;
  }[];
}

export default function Footer(props: FooterProps) {
  const { socials = [], copy, links = [] } = props;
  const phoneNumbers = [];
  return (
    <div className="flex flex-col bg-gray-700">
      <div className="flex gap-4 justify-center py-4">
        {socials.map((social) => (
          <div className="" key={social.srcUrl}>
            <a href={social.srcUrl}>
              <Image
                src={social.logo.srcUrl}
                alt={social.logo.alt}
                width={24}
                height={24}
              />
            </a>
          </div>
        ))}
      </div>
      <div className="flex flex-col py-2">
        <div className="uppercase text-sm px-4">atención a clientes</div>
        <a
          href="mailto:reservaciones@hotelxcaret.com"
          target="_blank"
          className="no-underline hover:underline transition-all duration-300 ease-in-out text-xs px-4"
        >
          reservaciones@hotelxcaret.com
        </a>
      </div>
      <div className="flex gap-4 px-4 py-2 pb-4">
        <div className="flex flex-col gap-0">
          <span className="uppercase font-semibold text-sm">méxico</span>
          <a href="tel:018000000000" className="text-xs">
            018000000000
          </a>
        </div>
        <div className="flex flex-col gap-0">
          <span className="uppercase font-semibold text-sm">USA</span>
          <a href="tel:018000000000" className="text-xs">
            018000000000
          </a>
        </div>
        <div className="flex flex-col gap-0">
          <span className="uppercase font-semibold text-sm">Resto del mundo</span>
          <a href="#"></a>
        </div>
      </div>
      <div className="flex flex-col gap-2 place-items-center bg-black text-white text-xs px-4">
        <div className="py-2">{copy}</div>
        <div className="pb-2">
          {links.map((link) => (
            <a
              href={link.srcUrl}
              key={link.srcUrl}
              className="no-underline hover:underline transition-all duration-300 ease-in-out"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
