"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { navTypes } from "./types";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, link, name }: navTypes) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-[#171717] dark:text-[#fafafa] text-6xl m-7 font-extralight"
    >
      <a href={link}>{name}</a>
    </motion.li>
  );
};
