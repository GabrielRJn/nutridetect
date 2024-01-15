import { Box, ChakraProvider, Heading, Text} from '@chakra-ui/react'
import React from 'react'

import aboutMeImage from "../../assets/about-me.jpg";

function AboutPage() {
  return (
    <ChakraProvider>
   < Box
    position="relative"
    backgroundImage={`url(${aboutMeImage})`}
    backgroundSize="cover"
    backgroundPosition="center"
    width="100%"
    height="100%"
   >
    <Heading>
        About this project
    </Heading>

    <Text>
        This is a 3rd year project for Anglia Ruskin University.
        The project is a web application that allows users to upload an image of a food item and get back nutritional information about that food item.
    </Text>
    Image by <a href="https://www.freepik.com/free-vector/flat-colorful-university-concept-background_4715899.htm">Freepik</a>
    </Box>
    </ChakraProvider>
  )
}

export default AboutPage