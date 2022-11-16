"use client";

import * as React from "react";
import { motion, motionValue, useCycle } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Nav from ".";
import DarkModeSwitch from "../Buttons/ThemeButton";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const actionVariants = {
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

export const Navigation = () => {
  return (
    <>
      <motion.ul
        variants={variants}
        className="p-[25px] absolute top-[40px] md:top-[90px] left-0 w-screen md:w-[300px]"
      >
        {links.map((value, i) => (
          <MenuItem i={i} key={i} link={value.link} name={value.name} />
        ))}
      </motion.ul>
      <motion.div
        variants={actionVariants}
        className="p-[25px] absolute bottom-0 right-[40px] md:right-[90px] w-[230px] h-[200px]"
      >
        <p className="text-4xl font-bold text-[#171717] dark:text-[#fafafa] mb-2">
          Reach out
        </p>
        <a
          className=" text-lg font-light text-[#171717] dark:text-[#fafafa]  my-2 mb-4 hover-underline-animation after:bg-[#171717] dark:after:bg-[#fafafa] group-hover:after:scale-x-[1] group-hover:after:origin-bottom-left"
          href="mailto:herviek2001@gmail.com"
        >
          <span>herviek2001@gmail.com</span>
        </a>
        <div className="flex gap-6 text-[20px] mt-4 md:mt-8 text-[#171717] dark:text-[#fafafa] ">
          <Link href="https://twitter.com/kwesi_Hervie/">
            <FaTwitter />
          </Link>
          <Link href="https://www.linkedin.com/in/kwesi-hervie-10622715b/">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com/khervie-star">
            <FaGithub />
          </Link>
          <Link href="https://wa.me/2348180746707?text=Hi%20Khervie00">
            <FaWhatsapp />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "projects" },
  { name: "Stack", link: "stack" },
  { name: "Contact", link: "contact" },
];
