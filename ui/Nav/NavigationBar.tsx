"use client";
import Link from "next/link";
import React from "react";
import Nav from ".";
import { motion, useCycle } from "framer-motion";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import ThemeToggleSwitch from "../Buttons/ThemeToggleSwitch";
import { MenuToggle } from "./MenuToggle";
import DarkModeSwitch from "../Buttons/ThemeButton";

const NavigationBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="w-full h-[70px] box-border fixed left-0 right-0 px-[1em] md:px-[3em] py-[1em] flex items-center justify-between z-[9999]  text-[#fafafa] ">
      <div className="">
        <Link
          href="/"
          className="font-medium text-[20px] md:text-[32px] mx-4 my-12 px-2 py-12 cursor-pointer text-[#fafafa] "
        >
          Khervie00
        </Link>
      </div>
      <div className="flex items-center gap-3 md:gap-8">
        {/* <MenuToggle toggle={() => toggleOpen()} /> */}
        <div
          className=" flip-animate cursor-pointer text-[20px] md:text-[32px] child-span-before:block  hover-underline-animation after:bg-[#171717] dark:after:bg-[#fafafa] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left"
          onClick={() => toggleOpen()}
          data-hover="MENU"
        >
          <span data-hover="MENU">MENU</span>
        </div>
        <Nav isOpen={isOpen} />
        {/* <ThemeToggleSwitch /> */}
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default NavigationBar;
