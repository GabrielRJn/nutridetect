// SignUpModal.jsx
import React from 'react';
import {Flex, FormControl, FormLabel, Input, FormHelperText,FormErrorMessage, Radio, RadioGroup, HStack, Button, Heading, Spacer , Stack} from '@chakra-ui/react';
import { useState } from 'react';
const SignUpForm = ({ isOpen, onClose }) => {

  const [input, setInput] = useState('')
 
  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
 
  return (
    <FormControl isInvalid={isError}>
      <Heading mb={2} fontWeight="semibold" color="#404040" fontSize={25}>Sign Up</Heading>
      <Spacer pb={5}/>
      <FormLabel>Email</FormLabel>
      <Input type='email' placeholder='Enter your account email address' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your account email address
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <Spacer p={1}/>
      <FormLabel>Password</FormLabel>
      <Input type='password' placeholder='Enter your account password' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter your account password
        </FormHelperText>
      ) : (
        <FormErrorMessage>Password is required.</FormErrorMessage>
      )}
      <Spacer p={1}/>
      
      <FormLabel>Gender</FormLabel>
      <Flex>
      <RadioGroup as="div" >
        <HStack spacing="24px">
          <Radio value="Male">Male</Radio>
          <Radio value="Female">Female</Radio>
          </HStack>
      </RadioGroup>
   <Spacer/>
        <Stack spacing="1px" top="500">
      <FormLabel>Age</FormLabel>
      <Input type='number' value={input} onChange={handleInputChange} width="25%" />
      {!isError ? (
        <FormHelperText>
          Enter your age
        </FormHelperText>
      ) : (
        <FormErrorMessage>Age is required.</FormErrorMessage>
      )}
      </Stack>
      </Flex>
       <Button boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"  mt="10" color="white" backgroundColor="#404040"  type="submit" width="25.5vw">
                Sign up
              </Button>
    </FormControl>
  );
};

export default SignUpForm;
