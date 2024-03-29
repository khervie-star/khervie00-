"use client";

import React, { ReactNode, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const LocomotiveScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // mobile: {
        //   smooth: true,
        //   inertia: 0.8,
        //   getDirection: true,
        //   breakpoint: 0,
        // },
        // tablet: {
        //   smooth: true,
        //   inertia: 0.8,
        //   getDirection: true,
        //   breakpoint: 0,
        // },
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}>
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
};

export default LocomotiveScroll;
