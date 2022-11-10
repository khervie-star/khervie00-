"use client";

import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const Chakra = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ChakraProvider>{children}</ChakraProvider>
    </div>
  );
};

export default Chakra;
