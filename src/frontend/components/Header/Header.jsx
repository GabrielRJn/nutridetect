import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  Spacer,
  Text,
  Tooltip
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CircleIcon } from "../CustomIcons/CircleIcon";
import { FaDoorOpen, FaUser} from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const Header = ({ loggedOut}) => {
  return (
    <Box p={4} bg="blackAlpha.900" boxShadow="md" w="100%">
      <Flex>
        <Link to="/login-page">
          <Heading color="white" ml={12} aria-label="NutriDetect">
            <span style={{ color: "#8EDF67" }}>Nutri</span>
            <span style={{ color: "#FFC671" }}>Detect</span>
          </Heading>
        </Link>
        <Spacer />
        <Stack
          direction="row"
          alignContent="center"
          justifyContent="flex-end"
          spacing={4}
          mr={12}
        >
          {loggedOut ? (
            <>
              <Link to="/about-me">
                <Button color="white" variant="unstyled" p={2} aria-label="About page">
                  <Text fontSize="2xl">About</Text>
                </Button>
              </Link>
              <CircleIcon color="#8EDF67" boxSize={2} mt={6} />
              <Link to="/contact">
                <Button color="white" variant="unstyled" p={2} aria-label="Contact page">
                  <Text fontSize="2xl">Contact</Text>
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Tooltip label="View Profile" mt="7vh" left="87vw" aria-label="View profile tooltip">
              <Icon as={FaUser} boxSize="10" mb={4}  p={2} color="white" />
              </Tooltip>
              <Spacer boxSize={4}/>
              <Tooltip label="Log out" aria-label="Log out tooltip" left="93vw" mt="7vh">
              <Icon as={FaDoorOpen} boxSize="10" mb={4} p={1}  color="white" />
              </Tooltip>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
