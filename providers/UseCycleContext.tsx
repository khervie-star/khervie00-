"use client";

import { useCycle } from "framer-motion";
import React, { ReactNode } from "react";
import { createContext, useContext, useState } from "react";

const Context = createContext<any>(undefined);

export const CycleContext = ({ children }: { children: ReactNode }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <Context.Provider value={[isOpen, toggleOpen]}>{children}</Context.Provider>
  );
};

export const useCycleContext = () => {
  return useContext(Context);
};
