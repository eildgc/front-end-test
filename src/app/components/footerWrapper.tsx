'use client';

import { isMobile } from "react-device-detect";
import MobileFooter from "./mobile/footer/footer";
import Footer from "./desktop/footer/footer";
import { useEffect, useState } from "react";
// import { MobileView } from "react-device-detect";

export default function FooterWrapper() {
  const [isMobileCustom, setIsMobileCustom] = useState(false);
  useEffect(() => {
    setIsMobileCustom(isMobile);
  }, []);
  return (
    <>
      {/* <MobileView> */}
      {isMobileCustom && 
      <MobileFooter />}
      {/* </MobileView> */}
      {!isMobileCustom && <Footer />}
    </>
  );
}
