import { Providers } from "../../lib/providers";
import FooterWrapper from "./components/footerWrapper";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xcaret Front end",
  description: "Generated by create next app!!!",
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
            <div
              style={{ flex: "1 0 auto" }}
              className="max-w-7xl w-full mx-auto" id="content"
            >
              {children}
            </div>
            <FooterWrapper />
        </Providers>
      </body>
    </html>
  );
}
