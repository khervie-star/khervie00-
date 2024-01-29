"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Khervie00 from "../../public/assets/khervie00.jpg";
import { Footer } from "../../ui/Footer";
import { Tabs, ConfigProvider } from "antd";
import { Tab } from "@headlessui/react";

const projectTabs = [
  {
    label: "Web",
    children: null,
  },
  {
    label: "Mobile",
    children: null,
  },
  {
    label: "Others",
    children: null,
  },
];

const programmes = [
  {
    title: "Agriculture and Livelihoods Zero Hunger Project ",
    time: "Every first sunday of the month",
    img: "",
  },
  {
    title: "Education and Employability",
    time: "Sunday, 9am - 11:30am",
    img: "",
  },
  {
    title: "Care and support for the Vulnerable",
    time: "Sunday, 8am - 9am",
    img: "",
  },
];

const tab_styles =
  "ui-selected:border-b-2 ui-selected:border-solid ui-selected:border-green-600  ui-selected:text-green-600 text-white/80 transition-all duration-[150ms]";

const Page = () => {
  return (
    <>
      <div data-scroll-section className="box-border">
        <div className="h-[90vh] md:h-screen lg:grid grid-cols-2 gap-4 items-start p-10 md:p-20 relative">
          <div className=" flex md:items-start md:h-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-[100px] md:text-[120px] text-left md:text-center mt-20 my-8 md:my-20 leading-[80px] md:leading-normal flex flex-col gap-2 items-start">
                <span>Stack</span>
              </h1>
              <p>
                Here are some of the tool and tech I&apos;ve worked with over
                time:
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[80vw] h-[2px] bg-[#171717] dark:bg-slate-100 mr-[-20vw] text-center" />

        <div className="">
          <div className="flex justify-start gap-[40px]">
            <div className="sidebar"></div>
          </div>
        </div>

        <Link
          className="group flip-animate about-link  text-[#fafafa] dark:text-[#171717] dark:bg-white bg-[#171717] text-[64px] h-[50vh] md:h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer  dark:child-span-before:text-[#171717] child-span-before:text-[#fafafa] child-span-before:block"
          href="/about">
          <div className=" hover-underline-animation after:bg-[#fafafa] dark:after:bg-[#171717] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left">
            <span data-hover="Contact">About</span>
          </div>
        </Link>

        <Link
          className="group flip-animate about-link  text-[#fafafa] dark:text-[#171717] dark:bg-white bg-[#171717] text-[64px] h-[50vh] md:h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer  dark:child-span-before:text-[#171717] child-span-before:text-[#fafafa] child-span-before:block"
          href="/contact">
          <div className=" hover-underline-animation after:bg-[#fafafa] dark:after:bg-[#171717] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left">
            <span data-hover="Contact">Contact</span>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Page;
