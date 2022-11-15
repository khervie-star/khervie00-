"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { GiMoonBats, GiSunCloud } from "react-icons/gi";

import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  // const [isOn, setIsOn] = useState(() => {
  //   if (localStorage.getItem("theme") === "light") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // const toggleSwitch = () => setIsOn(!isOn);

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  // if (isOn) {
  //   document.documentElement.classList.remove("dark");
  //   localStorage.setItem("theme", "light");
  // } else {
  //   document.documentElement.classList.add("dark");
  //   localStorage.setItem("theme", "dark");
  // }

  // if (
  //   localStorage.theme === "light" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: light)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }

  return (
    <div className="flex items-center gap-2">
      <div
        className="text-[12px] cursor-pointer font-bold hidden md:block"
        onClick={() => setTheme("light")}
      >
        Light
      </div>
      <div
        onClick={toggleTheme}
        className={`flex-start flex h-[30px] w-[60px] rounded-[50px] bg-zinc-100 p-[5px] box-border shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
          theme === "dark" && "place-content-end"
        }`}
      >
        <motion.div
          className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-black/90"
          layout
          transition={spring}
        >
          <motion.div whileTap={{ rotate: 360 }}>
            {theme === "light" ? (
              <GiSunCloud className="h-4 w-4 text-yellow-300" />
            ) : (
              <RiMoonClearFill className="h-4 w-4 text-slate-200" />
            )}
          </motion.div>
        </motion.div>
      </div>
      <div
        className="text-[12px] cursor-pointer font-bold hidden md:block"
        onClick={() => setTheme("dark")}
      >
        Dark
      </div>
    </div>
  );
}
