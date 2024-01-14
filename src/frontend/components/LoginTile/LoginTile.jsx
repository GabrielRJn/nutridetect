import React from "react";
import { Card, CardHeader, CardBody, Center, Box, Text, Link } from "@chakra-ui/react";
import LoginForm from "./Login Form/LoginForm";

export const LoginTile = (props) => {
  return (
    <Card color="white" zIndex={999} left={20} top={10} height="80vh" w="30vw" borderRadius={1} >
      <Box p={3}>
      
      <CardBody color="black" mt="30">
      <Center>
        <CardHeader fontSize="5xl" fontWeight="bold" color="#404040" left={3} pb="14">
          Welcome back
        </CardHeader>
      </Center>
        <LoginForm />
        <Text color="#404040"  fontSize="md" mt={5} ml={16} pb="14">
          Don't have an account? <Link as="span" fontWeight="bold"> Sign up here</Link>
        </Text>
      </CardBody>
    
      </Box>
    </Card>
  );
};

export default LoginTile;
