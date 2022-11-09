"use client";

import React from "react";
import { useTheme } from "next-themes";
import { FaAngleDown, FaSun, FaMoon } from "react-icons/fa";
import { GiMoonBats, GiSunCloud } from "react-icons/gi";

const ThemeToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeToggle = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <button>
          <GiSunCloud
            onClick={() => setTheme("light")}
            className="icon cursor-pointer text-2xl text-[#FEFCD7] dark:text-[#FEFCD7]"
          />
        </button>
      );
    }
    return (
      <button>
        <GiMoonBats
          onClick={() => setTheme("dark")}
          className="icon cursor-pointer text-2xl text-gray-500 dark:text-gray-400"
        />
      </button>
    );
  };

  return (
    <div>
      <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
        {renderThemeToggle()}
      </div>
    </div>
  );
};

export default ThemeToggleButton;
