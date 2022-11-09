"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";

const IconVariants = {
  animate: {
    y: 10,
    transition: {
      duration: 0.75,
      yoyo: Infinity,
    },
  },
};

const AngleDownAnimationButton = () => {
  return (
    <div>
      <motion.button variants={IconVariants} animate="animate">
        <FaAngleDown />
      </motion.button>
    </div>
  );
};

export default AngleDownAnimationButton;
