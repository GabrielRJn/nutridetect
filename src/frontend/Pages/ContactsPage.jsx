import { ChakraProvider, Heading, Input, Box,  FormLabel } from '@chakra-ui/react';
import React from 'react';
import { Button } from '@chakra-ui/react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import veg from '../assets/veg.jpg';

const ContactsPage = () => {

  
  return (
    <ChakraProvider>
      <Header loggedOut={true} />
      <Box
        height="100vh"
        borderStyle="inset"
        position="relative"
        overflow="hidden" 
      >
        <Box
          height="25%"
         
          bgImage={`url(${veg})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          alt="Image of vegetables"
        
        />
        
        
        <Box
          mt={0}
          height="70vh"
        
          color="white"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading mb={50} size="4xl">
            Contacts Page
          </Heading>
          
          <Box width="40vw"  mt={20} mb={200} maxW="100vw">
            <FormLabel color="black" fontWeight="semibold" fontSize="large" mt={4}>
              Name
            </FormLabel>
            <Input placeholder="Name" mb={4} borderColor="blackAlpha.600" />
            <FormLabel  color="black" fontWeight="semibold" fontSize="large">
              Email
            </FormLabel>
            <Input placeholder="Email" mb={4} borderColor="blackAlpha.600" />
            <FormLabel  color="black" fontWeight="semibold" fontSize="large">
              Message
            </FormLabel>
            <Input height="20vh" mb={4} placeholder="Enter your message"  borderColor="blackAlpha.600"/>
            <Button>Submit</Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </ChakraProvider>
  );
};

export default ContactsPage;
