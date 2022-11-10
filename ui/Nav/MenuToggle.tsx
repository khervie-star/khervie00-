"use client";

import * as React from "react";
import { motion, SVGMotionProps } from "framer-motion";
import { useTheme } from "next-themes";

import { navTypes } from "./types";

const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props.color}
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: navTypes) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      className="bg-transparent rounded-[50%] h-[50px] w-[50px] right-16 top-4 pointer outline-none border-0 select-none z-[9999]"
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          color={theme === "dark" ? "#fafafa" : "#171717"}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
          color={theme === "dark" ? "#fafafa" : "#171717"}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
          color={theme === "dark" ? "#fafafa" : "#171717"}
        />
      </svg>
      {/* <div className="uppercase font-bold text-[48px]">Menu</div> */}
    </button>
  );
};
