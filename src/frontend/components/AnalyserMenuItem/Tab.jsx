import React from 'react'
import { Box, Icon } from '@chakra-ui/react'
import { FaCamera } from 'react-icons/fa'
export const Tab = (props) => {
  return (
    <Box as="span" boxShadow="rgb(0,0 ,255 , 0.5)" top={100} ml="45vw" width="9vw"  borderRadius="10" backgroundColor="blackAlpha.100" transform="rotate(-270deg)" textAlign="end">
            <Icon as={props.icon} boxSize="10"  m={2} mr="3.5vw" p={1}  color="black" transform="rotate(-90deg)"/>
          </Box>
  )
}
