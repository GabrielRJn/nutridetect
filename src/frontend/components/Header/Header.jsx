import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Stack,
  Spacer,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
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
          mt={1}
          mr={12}
          
        >
          <Button color="white" variant="unstyled" p={2}>
            <Text fontSize="xl">About</Text>
          </Button>
          <CircleIcon color="#8EDF67" boxSize={2} mt={4} />
          <Button color="white" variant="unstyled" p={2}>
            <Text fontSize="xl">Contact</Text>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Header;
