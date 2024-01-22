import { ChakraProvider, Heading, Box, HStack, Flex, Icon , Text , Link, Menu } from '@chakra-ui/react';
import { FaCog, FaHistory, FaChartLine } from 'react-icons/fa'; 
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import MenuTile from '../../components/FadeInReuseables/MenuTile';
import FadeinHeading from '../../components/FadeInReuseables/FadeinHeading';
const user = {
  firstName: "Gabriel",
  lastName: "Johnson",
};

export const Homepage = () => {
  return (
    <ChakraProvider>
      <Header loggedOut={false} />
      <Box height="100vh" width="100vw" bgColor="blackAlpha.900">
        <FadeinHeading text="Hello {user.firstName}, choose an option below..."/>
        
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