import React from "react";
import { ChakraProvider, Heading, Box, Flex, Tag, Text, Tooltip } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import AnalyserMenuItem from "../../components/AnalyserMenuItem/AnalyserMenuItem";
import ArrowIcon from "../../components/ArrowIcon";


function Analyzer() {
  let numberOfItems = 0;

  return (
    <ChakraProvider>
      <Header />
      
      <Box height="120vh" >
     
        <Flex  >
          <ArrowIcon LinkTo="/homepage" />
         <Flex
            as="div"
            flexDir="column"
            justify="flex-end"
            width="40vw"
            height="114vh"
           mr="20vw"
           ml="5vw"
           
          >
            <Box mb="20vh">
            <Heading
            
          fontWeight="bold"
          width="40vw"
          size="4xl"
          color="#404040"
          mb="10vh"
          
          textDecorationStyle="solid"
          textDecoration="underline"
          textDecorationColor="#FBBC05"
        >Add your favourite recipes
        
        </Heading>
        <Heading fontWeight="bold" color="#404040" size="xl"mb="1vw" >
          Choose an option ...
        </Heading>
        <Flex flexDir="column" justify="flex-start" mb="3vw">
            <AnalyserMenuItem
              heading="Scan a recipe"
              text="Scan a recipe using your phone's camera"
              type="scan"
            />
            <AnalyserMenuItem
              heading="Add a recipe manually"
              text="Add a recipe manually by filling in the form below"
              type="manual"
            />
          </Flex>
          </Box> 
          </Flex>
         
          <Flex background="#1F242B" width="80vw" flexDir="row">
            <Box ml="9vw"  mt={10}>
              
            <Heading fontWeight="semibold" color="whiteAlpha.800" fontSize="5xl">
              Overview 
              <Tag ml="1vw" mt="1.5vw" borderRadius="6%" fontWeight="bold" colorScheme="orange">{numberOfItems} ITEMS</Tag>
            </Heading>

            <Box ml="5vw" mt="5vh">

           { numberOfItems === 0 ? 
           <Text color="whiteAlpha.700" fontSize="xl" fontStyle="italic" > Empty </Text>
          : <Text color="white"> items go here </Text>}
            
            </Box>
            </Box>
            </Flex> 
          </Flex>
       
      </Box> 

      <Footer />
    </ChakraProvider>
  );
}

export default Analyzer;
