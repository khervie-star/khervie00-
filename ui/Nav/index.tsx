"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/useDimension";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Link from "next/link";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";
import DarkModeSwitch from "../Buttons/ThemeButton";
import { useCycleContext } from "../../providers/UseCycleContext";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at -40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Nav = () => {
  const [isOpen, toggleOpen] = useCycleContext();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(1000);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="bg-[#fafafa] dark:bg-[#171717] absolute top-0 left-0 bottom-0 w-screen h-screen z-40"
        variants={sidebar}
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-screen bg-[#fafafa] dark:bg-[#171717] "
          // variants={sidebar}
        />
        <Navigation />
        <div className="w-full h-[70px] box-border fixed left-0 right-0 px-[1em] md:px-[3em] py-[1em] flex items-center justify-between z-[9999]  text-[#fafafa] ">
          <div className=" ">
            <div
              className="hover-underline-animation flip-animate cursor-pointer text-[20px] md:text-[32px] child-span-before:block text-[#171717] dark:text-[#fafafa] "
              onClick={() => toggleOpen()}
              data-hover="MENU"
            >
              <span data-hover="← Go back">Close Menu</span>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-8 text-[#171717] dark:text-[#fafafa] ">
            {/* <div
              className="hover-underline-animation flip-animate cursor-pointer text-[20px] md:text-[32px] child-span-before:block"
              // onClick={() => setOpen(false)}
              data-hover="MENU"
            >
              <span data-hover="MENU">MENU</span>
            </div> */}

            <DarkModeSwitch />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Nav;
