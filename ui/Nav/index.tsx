"use client";

import React, { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/useDimension";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Link from "next/link";

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
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(1000);

  return (
    <div>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        className="absolute top-0 left-0 bottom-0 w-screen"
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-screen bg-[#fafafa] dark:bg-[#171717]"
          variants={sidebar}
        />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
        <Link
          href="/"
          className="font-medium text-[32px] mx-4 my-12 px-2 py-12 cursor-pointer"
        >
          Khervie00
        </Link>
      </motion.nav>
    </div>
  );
};

export default Nav;
