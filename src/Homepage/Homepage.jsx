import { ChakraProvider, Heading, Box, HStack, Flex, Icon , Text , Link, Menu } from '@chakra-ui/react';
import { FaCog, FaHistory, FaChartLine } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import React from 'react';
import Header from '../frontend/components/Header/Header';
import Footer from '../frontend/components/Footer';
import CameraFunctions from '../CameraFunctions';
import MenuTile from './MenuTile';

const user = {
  firstName: "Gabriel",
  lastName: "Johnson",
};

const fadeInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const optionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Homepage = () => {
  return (
    <ChakraProvider>
      <Header loggedOut={false} />
      <Box height="100vh" width="100vw" bgColor="blackAlpha.900">
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
            Hello {user.firstName}, choose an option below...
          </Heading>
        </motion.div>

        <HStack spacing={20} justify="center" pt={80} height="70vh">
        <MenuTile title="New Analysis" description="Generate a new report" icon={FaChartLine} linkTo="/analyser"/>
        <MenuTile title="Saved suggestions" description="View your past results" icon={FaHistory} linkTo="/saved-suggestions"/>
        <MenuTile title="Settings" description="Change your preferences" icon={FaCog} linkTo="/settings"/>
        </HStack>

        <Footer />
      </Box>
    </ChakraProvider>
  );
};