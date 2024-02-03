import React, { useState } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Radio,
  RadioGroup,
  HStack,
  Button,
  Spacer,
  Stack,
  Stepper,
  Step,
  StepIcon,
  StepNumber,
  StepSeparator,
  StepIndicator,
  StepTitle,
  StepDescription,
  Box,
  StepStatus,
} from '@chakra-ui/react';


const SignUpForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const isError = (step === 0 && email === '') || (step === 1 && password === '') || (step === 2 && (gender === '' || age === ''));

  const steps = [
    { title: 'Account details' },
    { title: 'About you' },
    { title: 'Preferences and goals' },
  ];

  return (
    <>
      <Stepper activeStep={step} >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>

      <FormControl isInvalid={isError}>
        {step === 0 && (
          <>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your account email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            {!isError ? <FormHelperText>Enter your account email address</FormHelperText> : <FormErrorMessage>Email is required.</FormErrorMessage>}
          </>
        )}
        {step === 1 && (
          <>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your account password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {!isError ? <FormHelperText>Enter your account password</FormHelperText> : <FormErrorMessage>Password is required.</FormErrorMessage>}
          </>
        )}
        {step === 2 && (
          <>
            <FormLabel>Gender</FormLabel>
            <Flex>
              <RadioGroup as="div">
                <HStack spacing="24px">
                  <Radio value="Male" onChange={() => setGender('Male')}>
                    Male
                  </Radio>
                  <Radio value="Female" onChange={() => setGender('Female')}>
                    Female
                  </Radio>
                </HStack>
              </RadioGroup>
              <Spacer />
              <Stack spacing="1px" top="500">
                <FormLabel>Age</FormLabel>
                <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} width="25%" />
                {!isError ? <FormHelperText>Enter your age</FormHelperText> : <FormErrorMessage>Age is required.</FormErrorMessage>}
              </Stack>
            </Flex>
          </>
        )}
      </FormControl>
      <HStack spacing="4">
        {step > 0 && (
          <Button colorScheme="blue" onClick={handlePrev}>
            Previous
          </Button>
        )}
        {step < 2 && (
          <Button colorScheme="teal" onClick={handleNext}>
            Next
          </Button>
        )}
        {step === 2 && (
          <Button colorScheme="green" onClick={handleNext}>
            Sign up
          </Button>
        )}
      </HStack>
    </>
  );
};

export default SignUpForm;
