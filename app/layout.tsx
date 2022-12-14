import AnimatedCursor from "../providers/AnimatedCursor";
import ThemeContextProvider from "../providers/ThemeContext";
import { Footer } from "../ui/Footer";
import "./globals.css";
import localFont from "@next/font/local";
import LocomotiveScroll from "../providers/LocomotiveScroll";
import Link from "next/link";
import Nav from "../ui/Nav";
import NavigationBar from "../ui/Nav/NavigationBar";
import { CycleContext } from "../providers/UseCycleContext";

const myFont = localFont({ src: "../lib/font/ProximaSoft-Thin.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className + ` scroll-smooth`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-[#fafafa] dark:bg-[#171717] transition-all duration-500 text-[#171717] dark:text-white overflow-x-hidden relative scroll-smooth">
        <ThemeContextProvider>
          <LocomotiveScroll>
            <CycleContext>
              <AnimatedCursor />
              <NavigationBar />
              {children}
              {/* <Footer /> */}
            </CycleContext>
          </LocomotiveScroll>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
