import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from "./frontend/components/Header/Header";
import LoginHero from "./frontend/components/LoginHero/LoginHero";
import { LoginTile } from "./frontend/components/LoginTile/LoginTile";
function LoginPage() {
  return (
    <ChakraProvider>
      <Box>
        <Header />

        <LoginHero>
          <LoginTile />
        </LoginHero>
      </Box>
    </ChakraProvider>
  );
}

export default LoginPage;
