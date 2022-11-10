"use client";

import {
  HStack,
  Text,
  Switch,
  useColorMode,
  useColorModeValue,
  Box,
  styled,
  chakra,
  BoxProps,
  Center,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { HTMLMotionProps, motion, Variants } from "framer-motion";
import React from "react";

type Merge<P, T> = Omit<P, keyof T> & T;
type MotionBoxProps = Merge<BoxProps, HTMLMotionProps<"div">>;

export const MotionBox: React.FC<MotionBoxProps> = motion(Box);

const Circle = (props: any) => {
  return (
    <motion.circle
      id="Oval"
      r="17.5px"
      initial={false}
      fill="#333"
      {...props}
    />
  );
};

const ThemeToggleSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { systemTheme, theme, setTheme } = useTheme();

  const size = 20;

  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const containerVariants: Variants = {
    dark: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        // delay: 0,
      },
      backgroundColor: "#1A202C",
    },
    light: { backgroundColor: "#76A5FF" },
  };

  const childVariants: Variants = {
    light: {
      y: 0,
      transition: {
        type: "tween",
      },
    },
    dark: {
      y: "-100px",
    },
  };

  return (
    <div className="flex gap-3 items-center">
      <div
        className="text-[12px] cursor-pointer"
        onClick={() => setTheme("light")}
      >
        Light
      </div>
      <Center>
        <Box
          onClick={toggleTheme}
          cursor="pointer"
          __css={{
            ".btn": {
              width: `${size * 2.1}px`,
              height: `${size}px`,
              borderRadius: `${size}px`,
              padding: `${size / 8}px`,
              boxSizing: "content-box",
              display: "flex",
              justifyContent: theme === "dark" ? "flex-end" : "flex-start",
              overflow: "hidden",
              pos: "relative",
              "&::before": {
                transition: "transform 0.3s linear",
                content: '""',
                backgroundColor: "white",
                position: "absolute",
                width: `${size * 0.3}px`,
                height: `${size * 0.3}px`,
                borderRadius: "50%",
                right: "15%",
                top: "20%",
                zIndex: 2,
                transform:
                  theme === "dark" ? "translateY(100px)" : "translateY(0)",
              },
              "&::after": {
                content: '""',
                transition: "transform 0.3s linear",
                transitionDelay: ".1s",
                backgroundColor: "white",
                position: "absolute",
                width: `${size * 0.2}px`,
                height: `${size * 0.2}px`,
                borderRadius: "50%",
                right: "30%",
                top: "45%",
                zIndex: 2,
                transform:
                  theme === "light" ? "translateY(100px)" : "translateY(0)",
              },
            },
            ".knob": {
              width: `${size}px`,
              height: `${size}px`,
              zIndex: "9999",
              borderRadius: `${size}px`,
            },
          }}
        >
          <motion.div
            className="btn"
            variants={containerVariants}
            initial={theme === "dark" ? "light" : "dark"}
            exit={theme === "light" ? "dark" : "light"}
            animate={theme}
          >
            <MotionBox
              pos="absolute"
              top="70%"
              left="25%"
              width={`${size * 0.08}px`}
              height={`${size * 0.06}px`}
              borderRadius="50%"
              background="white"
              key="circle-2"
              variants={childVariants}
            ></MotionBox>
            <MotionBox
              pos="absolute"
              top="25%"
              left="15%"
              width={`${size * 0.3}px`}
              height={`${size * 0.3}px`}
              background="white"
              key="subheading1"
              clipPath="polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)"
              // borderRadius="50%"
              variants={childVariants}
            ></MotionBox>
            <MotionBox
              pos="absolute"
              top="60%"
              left="45%"
              width={`${size * 0.2}px`}
              height={`${size * 0.2}px`}
              borderRadius="58%"
              clipPath="polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)"
              background="white"
              key="subheading2"
              variants={childVariants}
            ></MotionBox>
            <MotionBox
              borderRadius="50%"
              pos="absolute"
              top="40%"
              left="35%"
              width={`${size * 0.1}px`}
              height={`${size * 0.1}px`}
              background="white"
              key="circle-1"
              variants={childVariants}
            ></MotionBox>
            <MotionBox
              pos="absolute"
              top="25%"
              left="55%"
              width={`${size * 0.08}px`}
              height={`${size * 0.08}px`}
              borderRadius="50%"
              background="white"
              key="circle-2"
              variants={childVariants}
            ></MotionBox>
            <motion.div
              layout
              animate={theme}
              variants={{
                dark: {
                  boxShadow:
                    "inset 0px 13px white, inset 0px 13px 1px 1px white",
                  rotate: 90,
                  background: "transparent",
                },
                light: {
                  boxShadow: "inset 0px 0px white, inset 0px 0px 0px 0px white",
                  rotate: 90,
                  background: "#fff",
                },
              }}
              initial={false}
              className="knob"
            />
          </motion.div>
        </Box>
      </Center>
      <div
        className="text-[12px] cursor-pointer"
        onClick={() => setTheme("dark")}
      >
        Dark
      </div>
    </div>
  );
};

export default ThemeToggleSwitch;
