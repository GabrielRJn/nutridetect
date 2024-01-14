import React from "react";
import { Flex, Heading, Text} from "@chakra-ui/react";
import backgroundImageUrl from "../../assets/hero-background.jpg";
import LoginTile from "../LoginTile/LoginTile";

export const LoginHero = () => {
  return (
    <Flex
      position="relative"
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        position="relative"
        backgroundImage={`url(${backgroundImageUrl})`}
        backgroundSize="cover"
        backgroundPosition="center"
        width="100%"
        height="100%"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <LoginTile />
        </div>
      
        <Flex
          position="absolute"
          right={0} 
          top="45%" 
          transform="translateY(-50%)"
          flexDirection="column"
          alignItems="flex-end"
          paddingRight="10%" 
        >
          <Heading color="white" fontSize="8xl" textShadow="0 4px 8px rgba(0, 0, 0, 0.7)">
            Start your plan{" "}
            <Text opacity="1" color="#FFC671">
              today.
            </Text>
          </Heading>
        </Flex>
   
      </Flex>
      
    </Flex>
    
  );
};

export default LoginHero;
