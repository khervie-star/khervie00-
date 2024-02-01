"use client";

import Link from "next/link";
import React from "react";
import { Footer } from "../../ui/Footer";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";

import react from "../../public/assets/skill_icons/react.png";
import flutter from "../../public/assets/skill_icons/flutter.svg";
import csharp from "../../public/assets/skill_icons/c-sharp.png";
import cplusplus from "../../public/assets/skill_icons/c++.png";
import azure from "../../public/assets/skill_icons/azure.svg";
import npm from "../../public/assets/skill_icons/npm.svg";
import next from "../../public/assets/skill_icons/nextjs.svg";
import tailwind from "../../public/assets/skill_icons/tailwind.svg";
import js from "../../public/assets/skill_icons/js.png";
import ts from "../../public/assets/skill_icons/ts.png";
import html from "../../public/assets/skill_icons/html.png";
import css from "../../public/assets/skill_icons/css3-seeklogo.svg";
import scss from "../../public/assets/skill_icons/sass-seeklogo.svg";
import animate from "../../public/assets/skill_icons/animatecss-opengraph.jpg";

import styled_comp from "../../public/assets/skill_icons/styled-components-1.svg";
import chakra from "../../public/assets/skill_icons/pngaaa.com-7959704.png";

import wordpress from "../../public/assets/skill_icons/wordpress.svg";
import reactquery from "../../public/assets/skill_icons/reactquery.svg";

import bootstrap from "../../public/assets/skill_icons/bootstrap-seeklogo.svg";
import git from "../../public/assets/skill_icons/git-seeklogo.svg";
import github from "../../public/assets/skill_icons/github-seeklogo.svg";
import vite from "../../public/assets/skill_icons/vite-seeklogo.svg";
import php from "../../public/assets/skill_icons/php-seeklogo.svg";
import python from "../../public/assets/skill_icons/python-seeklogo.svg";

import web3 from "../../public/assets/skill_icons/web3js-seeklogo.svg";
import vercel from "../../public/assets/skill_icons/vercel-seeklogo.svg";
import mui from "../../public/assets/skill_icons/material-ui-seeklogo.svg";
import antd from "../../public/assets/skill_icons/ant-design-seeklogo.svg";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const stack: any = {
  frontend: [
    { title: "HTML/CSS", icon: html },
    { title: "ReactJs", icon: react },
    { title: "NextJs", icon: next },
    { title: "JavaScript", icon: js },
    { title: "ReactQuery", icon: reactquery },
    { title: "Wordpress", icon: wordpress },
  ],
  mobile: [
    { title: "Flutter", icon: flutter },
    { title: "ReactNative", icon: react },
  ],
  styling: [
    { title: "CSS", icon: css },
    { title: "SCSS", icon: scss },
    { title: "TailwindCss", icon: tailwind },
    { title: "Styled Components", icon: styled_comp },
    { title: "Bootstrap", icon: bootstrap },
    { title: "Animate.css", icon: animate },
  ],
  ui_libraries: [
    { title: "MUI", icon: mui },
    { title: "Antd", icon: antd },
    { title: "NextUI", icon: "" },
    { title: "Chakra UI", icon: chakra },
  ],
  tools: [
    { title: "Git", icon: git },
    { title: "Github", icon: github },
    { title: "Npm", icon: npm },
    { title: "Vite", icon: vite },
  ],
  languages: [
    { title: "TypeScript", icon: ts },
    { title: "JavaScript", icon: js },
    { title: "Php", icon: php },
    { title: "Python", icon: python },
    { title: "C++", icon: cplusplus },
    { title: "C#", icon: csharp },
  ],
  database: [{ title: "MongoDb", icon: "" }],
  blockchain: [
    { title: "Web3Js", icon: web3 },
    { title: "Ether.js", icon: "" },
  ],
  cloud: [
    { title: "Vercel", icon: vercel },
    { title: "Azure", icon: azure },
  ],
  others: [
    { title: "Shell scripting (bash)", icon: "" },
    { title: "Nmap", icon: "" },
    { title: "JTR", icon: "" },
  ],
};

const tab_styles =
  "ui-selected:border-b-2 ui-selected:border-solid ui-selected:border-green-600  ui-selected:text-green-600 text-white/80 transition-all duration-[150ms]";

const renderSkillCards = (skills: any) => {
  console.log(skills);
  return skills.map(
    (
      skill: {
        icon: string | StaticImport;
        title: string;
      },
      i: React.Key | null | undefined
    ) => (
      <div
        className="skill_card bg-white w-[150px] h-[120px] lg:w-[162px] lg:h-[135px] flex justify-center items-center text-center hover:-translate-y-2 transition-all duration-500"
        key={i}>
        <div className="">
          <div className="w-[40px] h-[40px] relative mb-2 text-center mx-auto">
            <Image
              src={skill.icon}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <p className=" text-[#171717]">{skill.title}</p>
        </div>
      </div>
    )
  );
};
const Page = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<any>(
    new Set(["frontend"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  console.log(selectedValue);

  return (
    <>
      <div data-scroll-section className="box-border">
        <div className="h-fit lg:grid grid-cols-2 gap-4 items-start p-10 md:p-20 relative">
          <div className=" flex md:items-start md:h-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-[100px] md:text-[120px] text-left md:text-center mt-20 my-8 leading-[80px] md:leading-normal flex flex-col gap-2 items-start">
                <span>Stack</span>
              </h1>
              <p className="text-base lg:text-[24px]">
                Here are some of the tool and tech I&apos;ve worked with over
                time:
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-[80vw] h-[2px] bg-[#171717] dark:bg-slate-100 mr-[-20vw] text-center" />

        <div className="h-full bg-slate-100 p-5 py-10 lg:p-[100px]">
          <div className="flex flex-col lg:flex-row justify-start gap-[40px]">
            <div className="w-[300px] border-none rounded-small border-default-200 dark:border-default-100 hidden lg:block">
              <Listbox
                aria-label="Skills Menu"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-transparent max-w-[300px] overflow-visible shadow-none rounded-medium text-[#171717]"
                itemClasses={{
                  base: "px-3 rounded-md gap-3 h-12 data-[hover=true]:rounded-md data-[hover=true]:bg-default-100/10 justify-start",
                  title: "text-[#171717] text-base font-medium !flex-none",
                  selectedIcon: "text-[#171717]",
                }}>
                <ListboxItem key="frontend">Frontend.</ListboxItem>
                <ListboxItem key="styling">Styling.</ListboxItem>
                <ListboxItem key="ui_libraries">UI Libraries.</ListboxItem>
                <ListboxItem key="mobile">Mobile.</ListboxItem>
                <ListboxItem key="languages">Languages.</ListboxItem>
                <ListboxItem key="blockchain">Blockchain.</ListboxItem>
                <ListboxItem key="cloud">Cloud.</ListboxItem>
                <ListboxItem key="database">Database.</ListboxItem>
                <ListboxItem key="tools">Tools.</ListboxItem>
                <ListboxItem key="others">Others.</ListboxItem>
              </Listbox>
            </div>
            <div className="block lg:hidden">
              <Dropdown
                showArrow
                classNames={{
                  base: "before:bg-default-200", // change arrow background
                  content:
                    "py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black",
                }}>
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    className="capitalize text-[#171717]">
                    {selectedValue}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Skills selection menu"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}>
                  <DropdownItem key="frontend">Frontend.</DropdownItem>
                  <DropdownItem key="styling">Styling.</DropdownItem>
                  <DropdownItem key="ui_libraries">UI libraries.</DropdownItem>
                  <DropdownItem key="mobile">Mobile.</DropdownItem>
                  <DropdownItem key="languages">Languages.</DropdownItem>
                  <DropdownItem key="blockchain">Blockchain.</DropdownItem>
                  <DropdownItem key="cloud">Cloud.</DropdownItem>
                  <DropdownItem key="database">Database.</DropdownItem>
                  <DropdownItem key="tools">Tools</DropdownItem>
                  <DropdownItem key="others">Others.</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="w-full lg:w-[calc(100%-500px)] h-full lg:px-[100px]">
              <h6 className="text-green-800 font-semibold text-[20px] lg:text-[28px] mb-6 capitalize">
                {selectedValue}
              </h6>
              <div className="flex justify-start flex-wrap items-center gap-6 animate__animated animate__fadeInUp">
                {renderSkillCards(stack[selectedValue])}
              </div>
            </div>
          </div>
        </div>

        <Link
          className="group flip-animate about-link  dark:text-[#fafafa] text-[#171717] bg-white dark:bg-[#171717] text-[64px] h-[50vh] md:h-[70vh] w-full flex items-center justify-center font-medium cursor-pointer  child-span-before:text-[#171717] dark:child-span-before:text-[#fafafa] child-span-before:block"
          href="/about">
          <div className=" hover-underline-animation dark:after:bg-[#fafafa] after:bg-[#171717] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left">
            <span data-hover="About">About</span>
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
