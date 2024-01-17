import React from 'react';
import { Box,  Text } from '@chakra-ui/react';

function Footer() {
  return (
    <Box
    bg="blackAlpha.900"
      color="white"
      p={4}
      textAlign="center"
        position="absolute"
      bottom="0"
      height={12}
      width="100%"
    >
      <Text>&copy; NutriDetect | LinkedIn | GitHub</Text> 
    </Box>
  );
}

export default Footer;
