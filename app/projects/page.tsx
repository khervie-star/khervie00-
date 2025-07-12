"use client";

import { Tab, Tabs } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Footer } from "../../ui/Footer";
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { SiJsonwebtokens } from "react-icons/si";
import { Mobile, Web } from "./_components";

const Projects = () => {
  const [selected, setSelected] = React.useState<any>("web");

  return (
    <div>
      <div data-scroll-section className="box-border">
        {/* <div className="h-fit lg:grid grid-cols-2 gap-4 items-start p-10 md:p-20 relative">
          <div className=" flex md:items-start md:h-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-[80px] md:text-[120px] text-left md:text-center mt-20 my-8 leading-[80px] md:leading-normal flex flex-col gap-2 items-start">
                <span>
                  Experience & <br /> Work Experience
                </span>
              </h1>
              <p className="text-base lg:text-[24px]">
                Some cool projects I&apos;ve worked on over time:
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="relative w-[80vw] h-[2px] bg-[#171717] dark:bg-slate-100 mr-[-20vw] text-center" /> */}
        <div className="">
          {" "}
          <div className="mt-4 md:mt-8 pt-20">
            <h1 className="text-[45px] lg:text-[80px] text-center w-full mb-2 mt-8 md:mt-2">
              Projects
            </h1>
            <p className="text-base text-default-400 lg:text-[24px] mb-8 text-center">
              Some cool projects I&apos;ve worked on over time:
            </p>
            <div className="flex w-full flex-col">
              <div className="w-full flex justify-center">
                <Tabs
                  aria-label="Options"
                  color="primary"
                  variant="bordered"
                  selectedKey={selected}
                  onSelectionChange={setSelected}>
                  <Tab
                    key="web"
                    title={
                      <div className="flex items-center space-x-2">
                        <CgWebsite />
                        <span>Web</span>
                      </div>
                    }
                  />
                  <Tab
                    key="mobile"
                    title={
                      <div className="flex items-center space-x-2">
                        <CiMobile1 />
                        <span>Mobile</span>
                      </div>
                    }
                  />
                  {/* <Tab
                    key="others"
                    title={
                      <div className="flex items-center space-x-2">
                        <SiJsonwebtokens />
                        <span>Others</span>
                      </div>
                    }
                  /> */}
                </Tabs>
              </div>
            </div>
            <div className={"w-full px-5 py-8 lg:px-[100px] lg:py-[70px]"}>
              {selected == "web" && <Web />}
              {selected == "mobile" && (
                <section>
                  <h2 className="text-center">Give me 5 minutes 🫠...</h2>
                </section>
              )}
            </div>
          </div>
        </div>

        <Link
          className="group flip-animate about-link  text-[#fafafa] dark:text-[#171717] dark:bg-white bg-[#171717] text-[64px] h-[50vh] md:h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer  dark:child-span-before:text-[#171717] child-span-before:text-[#fafafa] child-span-before:block"
          href="/about">
          <div className=" hover-underline-animation after:bg-[#fafafa] dark:after:bg-[#171717] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left">
            <span data-hover="About">About</span>
          </div>
        </Link>
        <Link
          className="group flip-animate about-link  dark:text-[#fafafa] text-[#171717] bg-white dark:bg-[#171717] text-[64px] h-[50vh] md:h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer  child-span-before:text-[#171717] dark:child-span-before:text-[#fafafa] child-span-before:block"
          href="/contact">
          <div className=" hover-underline-animation dark:after:bg-[#fafafa] after:bg-[#171717] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left">
            <span data-hover="Contact">Contact</span>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
