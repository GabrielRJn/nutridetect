import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const AnalyserMenuItem = (props) => {
  return (
    <Box width="48vw" height="20vh" _hover={ {
        background: "blackAlpha.100",
        borderRadius: "5px",
        cursor: "pointer"
      }
      } 
       p={5}>
        <Heading as="span" fontWeight="medium" color="#404040" mb={2} > {props.heading} </Heading>
        <Text mt={2} fontSize="xl" fontStyle="italic">{props.text}</Text>
    
    </Box>
  )
}

export default AnalyserMenuItem