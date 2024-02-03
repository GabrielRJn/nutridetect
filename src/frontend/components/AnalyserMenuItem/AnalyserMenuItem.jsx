import React from 'react'
import { Box, Heading, Text, Wrap } from '@chakra-ui/react'
import CameraBoxForAnalyser from '../../Pages/AnalyserPage/CameraBoxForAnalyser'



const AnalyserMenuItem = (props) => {


  const handleType = () =>{
    if (props.type === "scan") {
      console.log("scan")
      
    } else{

      //no code for manual yet
    }
  }
  
  
  return (
    <Wrap onClick= {handleType}>
    <Box width="48vw" height="20vh" _hover={ {
        background: "blackAlpha.100",
        borderRadius: "5px",
        cursor: "pointer",
        
    }
      } 
       p={5}>
        <Heading as="span" fontWeight="medium" color="#404040" mb={2} > {props.heading} </Heading>
        <Text mt={2} fontSize="xl" fontStyle="italic">{props.text}</Text>
        
    </Box>
    </Wrap>
  )
}

export default AnalyserMenuItem