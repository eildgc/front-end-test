'use client';
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import MobileCarouselCard from "./components/mobile/carouselCard/carouselCard";
import Banner from "./components/banner/banner";
import Button from "./components/button/button";
import Popup from "./components/mobile/popup/popup";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../../lib/redux";
import {
  useFetchAdditionalI18nQuery,
  useFetchI18nQuery,
} from "../../lib/redux/features/i18n-api-slice";
import MobileHeader from "./components/mobile/header/header";
import Carousel from "./components/carousel/carousel";
import Header from "./components/desktop/header/header";
import CarouselCard from "./components/desktop/carouselCard/carouselCard";
import MobileNavbar from "./components/mobile/navbar/navbar";
import Navbar from "./components/desktop/navbar/navbar";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";

export default function Home() {
  const [isMobileCustom, setIsMobileCustom] = useState(false);
  useEffect(() => {
    setIsMobileCustom(isMobile);
  }, []);
  const language = useAppSelector((state) => state.i18n.language);
  const { data, isFetching } = useFetchI18nQuery();
  const { data: additionalData, isFetching: isFetchingAdditionalData } =
    useFetchAdditionalI18nQuery();
  const content = data?.[language];
  const additionalContent = additionalData?.[language];

  const [reservationNumber, setReservationNumber] = useState(0);
  const [bookLocationType, setBookLocationType] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const router = useRouter();

  function generateReservation() {
    return Math.floor(100000 + Math.random() * 900000);
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>,locationType: string) => {
    e.preventDefault();
    setReservationNumber(generateReservation);
    setPopupOpen(true);
    setBookLocationType(locationType);
  };
  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  const handleConfirmBooking = () => {
    router.push("/thankyou");
  };

  if (isFetching) {
    return <div>Loading</div>;
  }
  if (!content) {
    return <div>Data error</div>;
  }

  return (
    <>
      <LazyMotion features={domAnimation}>
        {isMobileCustom && <MobileNavbar />}
        {!isMobileCustom && <Navbar />}
        {createPortal(
          <AnimatePresence>
            <Popup
              titleMessage={`${additionalContent?.resumeBookReservation.reservationMessage} ${bookLocationType}`}
              message={`${additionalContent?.resumeBookReservation.reservationNumber} ${reservationNumber}`}
              extraMessage={
                additionalContent?.resumeBookReservation.instructions ?? ""
              }
              isOpen={popupOpen}
              onClose={handleClosePopup}
              onConfirm={handleConfirmBooking}
            />
          </AnimatePresence>,
          document.getElementById("content") ?? document.body
        )}

        <header className=" text-black">
          {isMobileCustom && (
            <MobileHeader
              title={content.header.h1}
              logoPromoSrc={content.promotions[0].imagePromo}
              discount={content.header.discount}
              paragraphs={content.header.paragraphs}
            />
          )}
          {!isMobileCustom && (
            <Header
              title={content.header.h1}
              logoPromoSrc={content.promotions[0].imagePromo}
              discount={content.header.discount}
              paragraphs={content.header.paragraphs}
            />
          )}
        </header>

        <main className="bg-white text-black px-4 md:px-0">
          <div className="flex flex-col pb-8">
            {content.promotions.map((promotion) => (
              <div key={promotion.title}>
                {isMobileCustom && (
                  <MobileCarouselCard
                    key={promotion.title}
                    title={promotion.title}
                    subTitle={promotion.Subtitle}
                    paragraph={promotion.paragraphs[0]}
                    logoSrcUrl={promotion.logoPromo}
                    carousel={<Carousel slides={content.carousel.mobile} />}
                  >
                    <Button
                      href={content.buttonBook.href}
                      text={content.buttonBook.text}
                      onClick={(e) => handleClick(e,promotion.title)}
                    />
                  </MobileCarouselCard>
                )}
                {!isMobileCustom && (
                  <CarouselCard
                    key={promotion.title}
                    title={promotion.title}
                    subTitle={promotion.Subtitle}
                    paragraph={promotion.paragraphs[0]}
                    logoSrcUrl={promotion.logoPromo}
                    carousel={<Carousel slides={content.carousel.mobile} />}
                  >
                    <Button
                      href={content.buttonBook.href}
                      text={content.buttonBook.text}
                      onClick={(e) => handleClick(e,promotion.title)}
                    />
                  </CarouselCard>
                )}
              </div>
            ))}
          </div>
          <Banner text={content.legals} />
        </main>
      </LazyMotion>
    </>
  );
}
