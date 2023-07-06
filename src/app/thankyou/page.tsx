"use client";
import { useRouter } from "next/navigation";
import Button from "../components/button/button";
import { isMobile } from "react-device-detect";
import MobileNavbar from "../components/Mobile/navbar/navbar";
import Navbar from "../components/desktop/navbar/navbar";
import { useFetchAdditionalI18nQuery, useFetchI18nQuery } from "../../../lib/redux/features/i18n-api-slice";
import { useAppSelector } from "../../../lib/redux";

export default function ThankYou() {
  const language = useAppSelector((state) => state.i18n.language);
  const { data, isFetching } = useFetchI18nQuery();
  const { data: additionalData, isFetching: isFetchingAdditionalData } =
    useFetchAdditionalI18nQuery();
  const content = data?.[language];
  const additionalContent = additionalData?.[language];

  const router = useRouter();
  const handleReturn = () => {
    router.push("/");
  };

  return (
    <>
      {isMobile && <MobileNavbar />}
      {!isMobile && <Navbar />}
      <div className="flex flex-col items-center justify-center gap-4 mt-12">
        <div className="text-black text-center ">{additionalContent?.thankYouPage.message}</div>
        <div className="text-black text-center">{additionalContent?.thankYouPage.thankyou}</div>
        <Button onClick={handleReturn} text={additionalContent?.button.text ?? ''} />
      </div>
    </>
  );
}
