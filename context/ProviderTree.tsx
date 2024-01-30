"use client";

import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";
import AnimatedCursor from "../providers/AnimatedCursor";
import LocomotiveScroll from "../providers/LocomotiveScroll";
import Misc from "../providers/Misc";
import ThemeContextProvider from "../providers/ThemeContext";
import { CycleContext } from "../providers/UseCycleContext";
import NavigationBar from "../ui/Nav/NavigationBar";

export const ProviderTree = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      <NextUIProvider>
        <LocomotiveScroll>
          <CycleContext>
            <AnimatedCursor />
            <NavigationBar />
            <Misc>{children}</Misc>
            {/* <Footer /> */}
          </CycleContext>
        </LocomotiveScroll>
      </NextUIProvider>
    </ThemeContextProvider>
  );
};
