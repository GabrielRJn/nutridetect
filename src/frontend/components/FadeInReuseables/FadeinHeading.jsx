import React from 'react'
import { Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeInVariants } from '../FadeInReuseables/FadeFunctions'
const FadeinHeading = (props) => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInVariants}
    transition={{ duration: 1 }}
    style={{
      position: "absolute",
      transform: "translateY(-50%)",
    }}
  >
    <Heading
      ml={28}
      mt={20}
      mb={10}
      size="2xl"
      color="whiteAlpha.900"
      textShadow="0 4px 8px rgba(0, 0, 0, 0.3)"
      fontWeight={500}
      px={4} 
      display="inline-block"
      width="100%" 
    >
      {props.text}
    </Heading>
  </motion.div>
  )
}

export default FadeinHeading