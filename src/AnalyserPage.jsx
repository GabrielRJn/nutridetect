
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from "./frontend/components/Header/Header";
import axios from 'axios';

function Analyzer() {
  
  return (
    <ChakraProvider>
      <Box>
        <Header />
       
        <h1>This is the Analyzer page</h1>
      </Box>
    </ChakraProvider>
  );
}

export default Analyzer;
