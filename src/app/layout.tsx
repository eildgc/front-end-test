"use client";
import { BrowserView, isBrowser, isMobile } from "react-device-detect";
import { Providers } from "../../lib/providers";
import MobileFooter from "./components/Mobile/footer/footer";
import MobileNavbar from "./components/Mobile/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/desktop/navbar/navbar";
import Footer from "./components/desktop/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={inter.className}
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <Providers>
          <div style={{ flex: "1 0 auto" }} className="max-w-7xl w-full mx-auto">
            {children}
          </div>
          {isMobile && <MobileFooter />}
          {!isMobile && <Footer />}
        </Providers>
      </body>
    </html>
  );
}
