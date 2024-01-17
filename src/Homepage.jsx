import { ChakraProvider, Heading, Box, HStack, Flex, Icon , Text } from '@chakra-ui/react';
import { FaCog, FaHistory, FaChartLine } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import React from 'react';
import Header from './frontend/components/Header/Header';
import Footer from './frontend/components/Footer';

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
              _hover={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)', 
                transform: 'scale(1.1)',
                color: 'rgba(255, 255, 255)',
                borderColor: 'rgba(255, 255, 255)',
              }}
            >
              <Icon as={FaChartLine} boxSize="16" mb={4} />
              <Heading size="lg" mb={4}>
                New Analysis
              </Heading>
              <Text fontSize="lg">Generate a new report</Text>
            </Flex>
          </motion.div>

          <motion.div
            variants={optionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Flex
              borderWidth={5}
              borderColor="#8EDF67"
              direction="column"
              align="center"
              pt={16}
              bgColor="transparent"
              color="#8EDF67"
              borderRadius="lg"
              boxShadow="dark-lg"
              width="20vw"
              height="40vh"
              _hover={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)', 
                transform: 'scale(1.1)',
                color: 'rgba(255, 255, 255)',
                borderColor: 'rgba(255, 255, 255)',
              }}
            >
              <Icon as={FaHistory} boxSize="16" mb={4} />
              <Heading size="lg" mb={4}>
                Saved suggestions
              </Heading>
              <Text fontSize="lg"> View your past results</Text>
            </Flex>
          </motion.div>

          <motion.div
            variants={optionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
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
              _hover={{
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)', 
                transform: 'scale(1.1)',
                color: 'rgba(255, 255, 255)',
                borderColor: 'rgba(255, 255, 255)',
              }}
            >
              <Icon as={FaCog} boxSize="16" mb={4} />
              <Heading size="lg" mb={4}>
                Settings
              </Heading>
              <Text fontSize="lg"> Change your preferences </Text>
            </Flex>
          </motion.div>
        </HStack>

        <Footer />
      </Box>
    </ChakraProvider>
  );
};

