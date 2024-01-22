
import React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from "./frontend/components/Header/Header";
import Footer from "./frontend/components/Footer";


function Analyzer() {
  
  return (
    <ChakraProvider>
      <Header />
      <Box height="100vh">
        <Box ml={10} p={10}>
        <Heading fontWeight="bold" size="3xl" mb={10}>Add your favourite recipes</Heading>
        <Heading fontWeight="bold" size="md">Choose an option ...</Heading>
        </Box>

       <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default Analyzer;
