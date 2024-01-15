import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  Spacer,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CircleIcon } from "../CustomIcons/CircleIcon";
const Header = () => {
  return (
    <Box p={4} bg="blackAlpha.900" boxShadow="md" w="100%">
      <Flex>
        <Heading color="white" ml={12}>
          <span style={{ color: "#8EDF67" }}>Nutri</span>
          <span style={{ color: "#FFC671" }}>Detect</span>
        </Heading>
        <Spacer />
        <Stack
          direction="row"
          alignContent="center"
          justifyContent="flex-end"
          
          mr={12}
          
        >
          <Link to="/about-me">
          <Button color="white" variant="unstyled" p={2}>
            <Text fontSize="2xl">About</Text>
          </Button>
          </Link>
       
          <CircleIcon color="#8EDF67" boxSize={2} mt={6} />
          <Link to="/contact">
          <Button color="white" variant="unstyled" p={2}>
            <Text fontSize="2xl">Contact</Text>
          </Button>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
