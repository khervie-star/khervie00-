"use client";

import React from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const AnimatedCursorWrapper = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={30}
        color="250, 250, 250"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        // outerStyle={{
        //   border: "2px solid #171717",
        //   background: "transparent",
        // }}
        hasBlendMode={true}
        innerStyle={{
          mixBlendMode: "exclusion",
        }}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".clickable",
        ]}
      />
    </>
  );
};

export default AnimatedCursorWrapper;
