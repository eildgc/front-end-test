import Image from "next/image";
import Dropdown from "../../dropdown/dropdown";
import { useAppDispatch, useAppSelector } from "../../../../../lib/redux";
import { useFetchI18nQuery } from "../../../../../lib/redux/features/i18n-api-slice";


import { Icon } from '@iconify/react';
import baselineFacebook from '@iconify/icons-ic/baseline-facebook';
import twitterIcon from '@iconify/icons-mdi/twitter';
import instagramIcon from '@iconify/icons-mdi/instagram';

interface FooterProps {
  // socials: {
  //   srcUrl: string;
  //   logo: {
  //     srcUrl: string;
  //     alt: string;
  //   };
  // }[];
  // copy: string;
  // links: {
  //   title: string;
  //   srcUrl: string;
  // }[];
}

export default function Footer(props: FooterProps) {
  const language = useAppSelector((state) => state.i18n.language);
  const dispatch = useAppDispatch();
  const { data, isFetching } = useFetchI18nQuery();
  const content = data?.[language];

  const facebookHref = content?.prefooter.social.facebookUrl;
  const instagramHref = content?.prefooter.social.instagramUrl;
  const twitterHref = content?.prefooter.social.twitterUrl;

  // const { socials = [], copy, links = [] } = props;
  return (
    <div className="flex flex-col bg-gray-700">
      <div className="flex gap-4 justify-center py-4">
        <div className="" >
          <a href={facebookHref}>
            <Icon icon={baselineFacebook} width={24} height={24} className="text-white"></Icon>
          </a>
        </div>
        <div className="" >
          <a href={twitterHref}>
            <Icon icon={twitterIcon} width={24} height={24} className="text-white"></Icon>
          </a>
        </div>
        <div className="" >
          <a href={instagramHref}>
            <Icon icon={instagramIcon} width={24} height={24} className="text-white"></Icon>
          </a>
        </div>
        {/* {content?.footer.links.map((link) => (
          <div className="" key={link.href}>
            <a href={link.href}>
              <Image
                src={social.logo.srcUrl}
                alt={social.logo.alt}
                width={24}
                height={24}
              />
            </a>
          </div>
        ))} */}
      </div>
      <div className="flex flex-col py-2">
        <div className="uppercase text-sm px-4">
          {content?.prefooter.contactCenter.title}
        </div>
        <a
          href={`mailto:${content?.prefooter.contactCenter.email}`}
          target="_blank"
          className="no-underline hover:underline transition-all duration-300 ease-in-out text-xs px-4"
        >
          {content?.prefooter.contactCenter.email}
        </a>
      </div>
      <div className="flex gap-4 px-4 py-2 pb-4">
        {content?.prefooter.numbers
          .filter((number) => number.main && number.number)
          .map((number) => (
            <div className="flex flex-col gap-0" key={number.name}>
              <span className="uppercase font-semibold text-sm">
                {number.name}
              </span>
              <a href={`tel:${number.href}`} className="text-xs">
                {number.number}
              </a>
            </div>
          ))}
        <div className="flex flex-col gap-0">
          <details className="relative w-full">
            <summary className="top-10">
              {
                content?.prefooter.numbers.find((number) => !number.number)
                  ?.name
              }
            </summary>
            {content?.prefooter.numbers
              .filter((number) => !number.main && number.number)
              .map((number) => (
                <div
                  key={number.name}
                  className="flex flex-col gap-0 bg-white text-stone-700 text-xs p-1 "
                >
                  <a className="no-underline">{number.name}</a>
                  <a
                    href={`tel:${number.href}`}
                    target="_blank"
                    className="no-underline hover:underline transition-all duration-300 ease-in-out"
                  >
                    {number.number}
                  </a>
                </div>
              ))}
          </details>
        </div>
      </div>
      <div className="flex flex-col gap-2 place-items-center bg-black text-white text-xs px-4">
        <div className="py-2">{content?.footer.copy}</div>
        <div className="pb-2">
          {content?.footer.links.map((link) => (
            <a
              href={link.href}
              key={link.tittle}
              className="no-underline hover:underline transition-all duration-300 ease-in-out"
            >
              {link.tittle}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
