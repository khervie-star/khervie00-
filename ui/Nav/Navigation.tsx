"use client";

import * as React from "react";
import { motion, motionValue } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

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

export const Navigation = () => (
  <>
    <motion.ul
      variants={variants}
      className="p-[25px] absolute top-[90px] left-0 w-screen"
    >
      {links.map((value, i) => (
        <MenuItem i={i} key={i} link={value.link} name={value.name} />
      ))}
    </motion.ul>
    <motion.div
      variants={actionVariants}
      className="p-[25px] absolute bottom-[90px] right-[90px] w-[230px] h-[200px]"
    >
      <p className="text-4xl font-bold text-[#171717] dark:text-[#fafafa] mb-2">
        Reach out
      </p>
      <a
        className="link link-underline link-underline-black text-lg font-light text-[#171717] dark:text-[#fafafa] my-2 mb-4"
        href="mailto:herviek2001@gmail.com"
      >
        herviek2001@gmail.com
      </a>
      <div className="flex gap-6 text-[20px] mt-8">
        <Link href="#">
          <FaTwitter />
        </Link>
        <Link href="#">
          <FaLinkedin />
        </Link>
        <Link href="#">
          <FaGithub />
        </Link>
        <Link href="#">
          <FaWhatsapp />
        </Link>
      </div>
    </motion.div>
  </>
);

const links = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about-me" },
  { name: "Projects", link: "#projects" },
  { name: "Stack", link: "#stack" },
  { name: "Contact", link: "#contact" },
];
