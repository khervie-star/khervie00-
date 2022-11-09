"use client";

import React from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AnimatedCursorWrapper = () => {
  return (
    <>
      <AnimatedCursor />
    </>
  );
};

export default AnimatedCursorWrapper;
