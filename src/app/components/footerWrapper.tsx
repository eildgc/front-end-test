"use client";

import { isMobile } from "react-device-detect";
import MobileFooter from "./mobile/footer/footer";
import Footer from "./desktop2/footer/footer";

export default function FooterWrapper() {
  return (
    <>
      {isMobile && <MobileFooter />}
      {!isMobile && <Footer />}
    </>
  );
}
