"use client";
import Link from "next/link";
import React from "react";
import Nav from ".";
import { motion, useCycle } from "framer-motion";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import ThemeToggleSwitch from "../Buttons/ThemeToggleSwitch";
import { MenuToggle } from "./MenuToggle";

const NavigationBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className="w-full h-[70px] box-border fixed left-0 right-0 px-[1em] md:px-[3em] py-[1em] flex items-center justify-between z-[9999] mix-blend-difference  ">
      <div className="">
        <Link
          href="/"
          className="font-medium text-[20px] md:text-[32px] mx-4 my-12 px-2 py-12 cursor-pointer text-[#171717] dark:text-white "
        >
          Khervie00
        </Link>
      </div>
      <div className="flex items-center gap-8">
        {/* <MenuToggle toggle={() => toggleOpen()} /> */}
        <div
          className="hover-underline-animation flip-animate cursor-pointer text-[20px] md:text-[32px] font-fredoka_one"
          onClick={() => toggleOpen()}
          data-hover="MENU"
        >
          <span data-hover="MENU">MENU</span>
        </div>
        {/* <Nav isOpen={isOpen} /> */}
        <ThemeToggleSwitch />
      </div>
    </div>
  );
};

export default NavigationBar;
