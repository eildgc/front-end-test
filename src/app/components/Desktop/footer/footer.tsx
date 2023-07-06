import { useAppDispatch, useAppSelector } from "../../../../../lib/redux";
import { useFetchI18nQuery } from "../../../../../lib/redux/features/i18n-api-slice";

import { Icon } from "@iconify/react";
import baselineFacebook from "@iconify/icons-ic/baseline-facebook";
import twitterIcon from "@iconify/icons-mdi/twitter";
import instagramIcon from "@iconify/icons-mdi/instagram";

export default function Footer() {
  const language = useAppSelector((state) => state.i18n.language);
  const dispatch = useAppDispatch();
  const { data, isFetching } = useFetchI18nQuery();
  const content = data?.[language];

  const facebookHref = content?.prefooter.social.facebookUrl;
  const instagramHref = content?.prefooter.social.instagramUrl;
  const twitterHref = content?.prefooter.social.twitterUrl;

  return (
    <footer className="shrink-0 w-full bg-gray-500">
      <div className="max-w-7xl ">
        <div className="flex flex-row items-start justify-around">
          <div>
            <div className="flex flex-col py-2">
              <div className="uppercase text-sm">
                {content?.prefooter.contactCenter.title}
              </div>
              <a
                href={`mailto:${content?.prefooter.contactCenter.email}`}
                target="_blank"
                className="no-underline hover:underline transition-all duration-300 ease-in-out text-xs"
              >
                {content?.prefooter.contactCenter.email}
              </a>
            </div>
            <div className="flex gap-4 py-2 items-start justify-start">
              {content?.prefooter.numbers
                .filter((number) => number.main && number.number)
                .map((number) => (
                  <div className="flex flex-col" key={number.name}>
                    <span className="uppercase font-semibold text-sm">
                      {number.name}
                    </span>
                    <a href={`tel:${number.href}`} className="text-xs">
                      {number.number}
                    </a>
                  </div>
                ))}
              <div className="flex flex-col">
                <details className="">
                  <summary className="">
                    {
                      content?.prefooter.numbers.find(
                        (number) => !number.number
                      )?.name
                    }
                  </summary>
                  {content?.prefooter.numbers
                    .filter((number) => !number.main && number.number)
                    .map((number) => (
                      <div
                        key={number.name}
                        className="flex flex-col bg-white text-stone-700 text-xs p-1 "
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
          </div>
          <div className="flex gap-4 justify-center py-4">
            <a href={facebookHref}>
              <Icon
                icon={baselineFacebook}
                width={24}
                height={24}
                className="text-white"
              ></Icon>
            </a>
            <a href={twitterHref}>
              <Icon
                icon={twitterIcon}
                width={24}
                height={24}
                className="text-white"
              ></Icon>
            </a>
            <a href={instagramHref}>
              <Icon
                icon={instagramIcon}
                width={24}
                height={24}
                className="text-white"
              ></Icon>
            </a>
          </div>
        </div>
      </div>
      <div className="shrink-0 w-full bg-black ">
        <div className="max-w-7xl ">
          <div className="flex flex-col gap-2 place-items-center text-white text-xs">
            <div className="pb-2 w-full flex py-2 justify-around items-center">
              {content?.footer.copy}
              <div className="self-end">
                {content?.footer.links.map((link) => (
                  <a
                    href={link.href}
                    key={link.tittle}
                    className="no-underline hover:underline transition-all duration-300 ease-in-out pr-2"
                  >
                    {link.tittle}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
