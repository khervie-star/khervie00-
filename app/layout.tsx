import type { Metadata } from "next";

import "./globals.css";
import "animate.css";
import localFont from "@next/font/local";
import { Outfit } from "next/font/google";
import { ProviderTree } from "../context";

const myFont = localFont({ src: "../lib/font/ProximaSoft-Thin.woff2" });

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const URL_BASE = "https://khervie00.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(URL_BASE),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Kwesi Hervie | UI Developer",
    description:
      "Kwesi Hervie | UI Developer | Tech. Nerd |  Cybersecurity Enthusiast",
    url: URL_BASE,
    siteName: "Kwesi Hervie | Portfolio",
    images: [
      {
        url: `${URL_BASE}/og.jpeg`,
        width: 800,
        height: 600,
      },
      {
        url: `${URL_BASE}/og.jpeg`,
        width: 1800,
        height: 1600,
        alt: "Kwesi Hervie",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  title: "Kwesi Hervie | UI Developer",
  description: "Software Development | Networking | IT Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className + ` scroll-smooth`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-[#fafafa] dark:bg-[#171717] transition-all duration-500 text-[#171717] dark:text-white overflow-x-hidden relative scroll-smooth">
        <ProviderTree>{children}</ProviderTree>
      </body>
    </html>
  );
}
