import React from 'react';
import { Box, ChakraProvider, Heading, Text, Flex } from '@chakra-ui/react';
import AboutMeImage from './frontend/assets/about-me.jpg';
import Header from './frontend/components/Header/Header';
import Footer from './frontend/components/Footer';

function AboutPage() {
  return (
    <ChakraProvider>
      <Flex direction="column" height="100vh">
        <Header loggedOut={true} />
        <Flex flex="1">
          <Box
            flex="1"
            bg="rgba(255, 255, 255, 0.95)"
            p={12}
            textAlign="left"
          >
            <Heading size="3xl" mb={6} mt={12} ml={5}>About this project</Heading>
            <Text p={5}  mt={2} fontSize="2xl">
              This is a 3rd-year project for Anglia Ruskin University. The project is a web
              application that allows users to upload an image of a food item and get back
              nutritional information about that food item.
            </Text>
            <Text mt={2} p={5}>
              Image by{' '}
              <a href="https://www.freepik.com/free-vector/flat-colorful-university-concept-background_4715899.htm">
                Freepik
              </a>
            </Text>
          </Box>
          <Box flex="1" pl={8} mt={50}>
            <img src={AboutMeImage} alt="About Me" style={{ width: '100%', height:"50vh" ,borderRadius: '8px' }} />
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default AboutPage;
