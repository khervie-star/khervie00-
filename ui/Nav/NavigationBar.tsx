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
    <nav className="w-full h-[70px] box-border bg-transparent fixed left-0 right-0 px-[3em] py-[1em] flex items-center justify-between mix-blend-screen">
      <div>
        <Link
          href="/"
          className="font-medium text-[32px] mx-4 my-12 px-2 py-12 cursor-pointer text-[#171717] dark:text-white"
        >
          Khervie00
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {/* <MenuToggle toggle={() => toggleOpen()} /> */}
        <div
          className="hover-underline-animation cursor-pointer text-[32px] p-4 pb-1 px-1 font-fredoka_one"
          onClick={() => toggleOpen()}
          data-hover="MENU"
        >
          MENU
        </div>
        <Nav isOpen={isOpen} />
        <ThemeToggleSwitch />
      </div>
    </nav>
  );
};

export default NavigationBar;
