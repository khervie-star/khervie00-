import React, { ReactNode } from "react";
import { useCycleContext } from "./UseCycleContext";

const Misc = ({ children }: { children: ReactNode }) => {
  const [isOpen, toggleOpen] = useCycleContext();

  return <div>{!isOpen && children}</div>;
};

export default Misc;
