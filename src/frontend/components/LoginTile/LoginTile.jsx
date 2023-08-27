import React from "react";
import { Flex, Card, CardHeader, CardBody, Center } from "@chakra-ui/react";
import LoginForm from "./Login Form/LoginForm";

export const LoginTile = (props) => {
  return (
    <Card color="white" zIndex={999} left={20} top={10} height="80vh" w="30vw">
      <Center>
        <CardHeader fontSize="4xl" fontWeight="bold" color="#404040">
          Welcome back
        </CardHeader>
      </Center>
      <CardBody color="black">
        <LoginForm />
      </CardBody>
    </Card>
  );
};

export default LoginTile;
