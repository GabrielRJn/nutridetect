// LoginTile.jsx
import React from 'react';
import { Card, CardHeader, CardBody, Center, Box, Text, Link, useDisclosure } from '@chakra-ui/react';
import LoginForm from './Login Form/LoginForm';


export const LoginTile = (props) => {


  return (
    <>
      <Card color="white" zIndex={999} left={20} top={10} height="80vh" w="30vw" borderRadius={4}>
        <Box p={3}>
          <CardBody color="black" mt="30">
            <LoginForm/>
          </CardBody>
        </Box>
      </Card>


    </>
  );
};

export default LoginTile;
