import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import backgroundImageUrl from "../../assets/hero-background.jpg";
import LoginTile from "../LoginTile/LoginTile";

const fadeInVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

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
        alt="Background image of dinner"
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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            right: 0,
            top: "25%",
            transform: "translateY(-50%)",
            flexDirection: "column",
            alignItems: "flex-end",
            paddingRight: "10%",
          }}
        >
          <Heading
            loggedOut={true}
            color="white"
            fontSize="8xl"
            textShadow="0 4px 8px rgba(0, 0, 0, 0.5)"
          >
            Start <br/> your plan {" "}
            <Text opacity="1" as="span" color="#FFC671">
              today.
            </Text>
          </Heading>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default LoginHero;
