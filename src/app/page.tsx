"use client";
import React, { useReducer, useState } from "react";
// import {isMobile} from 'react-device-detect';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import CarouselCard from "./components/Mobile/carouselCard/carouselCard";
import Banner from "./components/banner/banner";
import Button from "./components/button/button";
import Popup from "./components/Mobile/popup/popup";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../../lib/redux";
import { useFetchI18nQuery } from "../../lib/redux/features/i18n-api-slice";
import Header from "./components/Mobile/header/header";
import Carousel from "./components/carousel/carousel";

export default function Home() {
  const language = useAppSelector((state) => state.i18n.language);
  const { data, isFetching } = useFetchI18nQuery();
  const content = data?.[language];

  const [reservationNumber, setReservationNumber] = useState(0);
  const [bookLocationType, setBookLocationType] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);
  const router = useRouter();

  function generateReservation() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  const handleClick = (locationType: string) => {
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
      {/* <BrowserView>
        <header></header>
        <main>
          <h1>This is rendered only in browser</h1>
        </main>
      </BrowserView> */}
      {/* <MobileView> */}
      {popupOpen &&
        createPortal(
          <Popup
            titleMessage={`Resumen de reservación ${bookLocationType}`}
            message={`Your reservation number is ${reservationNumber}`}
            extraMessage={"Please click confirm to finish your reservation"}
            isOpen={popupOpen}
            onClose={handleClosePopup}
            onConfirm={handleConfirmBooking}
          />,
          document.body
        )}
      <header className=" text-black">
        <Header
          title={content.header.h1}
          logoPromoSrc={content.promotions[0].imagePromo}
          discount={content.header.discount}
          paragraphs={content.header.paragraphs}
        />
      </header>
      <main className="bg-white text-black px-4">
        <div className="flex flex-col pb-8">
          {content.promotions.map((promotion) => (
            <CarouselCard
              key={promotion.title}
              title={promotion.title}
              subTitle={promotion.Subtitle}
              paragraph={promotion.paragraphs[0]}
              logoSrcUrl={promotion.logoPromo}
              carousel={<Carousel slides={content.carousel.mobile} />}
            />
          ))}
          {/* <CarouselCard
            title="HOTEL XCARET MÉXICO"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat."
            pharagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat." logoSrcUrl={""}          />
          <Button
            href="#"
            text="¡RESERVA AHORA!"
            onClick={() => handleClick("HOTEL XCARET MÉXICO")}
          />
        </div>
        <div className="flex flex-col pb-8">
          <CarouselCard
            title="HOTEL XCARET ARTE"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat."
            pharagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat." logoSrcUrl={""}          />
          <Button
            href="#"
            text="¡RESERVA AHORA!"
            onClick={() => handleClick("HOTEL XCARET ARTE")}
          />
        </div>
        <div className="flex flex-col pb-8">
          <CarouselCard
            title="casa de la playa"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat."
            pharagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat." logoSrcUrl={""}          />
          <Button
            href="#"
            text="¡RESERVA AHORA!"
            onClick={() => handleClick("CASA DE LA PLAYA")}
          /> */}
        </div>
        <Banner
          text={content.legals}
        />
      </main>
      {/* </MobileView> */}
    </>
  );
}