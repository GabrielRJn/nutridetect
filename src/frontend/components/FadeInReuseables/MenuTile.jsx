import React from 'react'


import { Box, Flex, Text, Heading, Icon } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaCog, FaHistory, FaChartLine } from 'react-icons/fa';  //DO NOT DELETE
import { Link } from 'react-router-dom'
import { optionVariants } from '../FadeInReuseables/FadeFunctions'
//Fade in menu tile for homepage

  
const MenuTile = props => {
  return (
    <Box>
         <Link to={props.linkTo}>
          <motion.div
            variants={optionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
        
            <Flex
              borderWidth={5}
              borderColor="#8EDF67"
              direction="column"
              align="center"
              p={16}
              bgColor="transparent"
              color="#8EDF67"
              borderRadius="lg"
              boxShadow="dark-lg"
              width="20vw"
              height="40vh"
              overflow="hidden"
              _hover={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)', 
                transform: 'scale(1.1)',
                color: 'rgba(255, 255, 255)',
                borderColor: 'rgba(255, 255, 255)',
              }}
            >
              <Icon as={props.icon} boxSize="16" mb={4} />
              <Heading size="lg" mb={4}>
                {props.title}
              </Heading>
              <Text fontSize="lg">{props.description}</Text>
            </Flex>
          </motion.div>
          </Link>
    </Box>
  )
}

MenuTile.propTypes = {}

export default MenuTile