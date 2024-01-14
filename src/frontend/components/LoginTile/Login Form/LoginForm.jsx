import React from "react";
import {
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Input, InputGroup, InputLeftElement, Button, Spacer, Box } from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa"; 

export const LoginForm = () => {
  function validateField(value) {
    let error;
    if (!value) {
      error = "This field is required";
    }
    return error;
  }

  return (
    
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="username" validate={validateField}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.username && form.touched.username}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaUser color="gray.300" />}
                  />
                  <Input
                    {...field}
                    placeholder="Enter your username"
                    borderColor="#404040"
                    borderRadius={4}
                  />
                </InputGroup>
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer p={4}/>
          <Field name="password" validate={validateField}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.password && form.touched.password}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FaLock color="gray.200" />}
                  />
                  <Input
                    borderColor="#404040"
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    borderRadius={4}
                  />
                </InputGroup>
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button boxShadow="0 4px 8px rgba(0, 0, 0, 0.3)"  mt={8} color="white" backgroundColor="#404040" isLoading={props.isSubmitting} type="submit" width={395}>
          Log in
          </Button>
        </Form>
      )}
    </Formik>

  );
};

export default LoginForm;
