import React from "react";
import { Formik } from "formik";
import { Flex } from "@chakra-ui/react";
import Text from "./Text";
import Button from "./Button";
import TextField from "./TextField";
import { useState } from "react";

const Form = ({
  inputContents,
  heading,
  subHeading,
  buttonLabel,
  validationSchema,
  onSubmitForm,
  isValidatingOnchange,
  successMessage,
  errorMessage,
}) => {
  const [validateParam, setValidateParam] = useState({
    validateOnChange: false,
    validateOnBlur: false,
  });

  let initialValues = {};

  inputContents.forEach((inputContent) => {
    initialValues[inputContent.name] = "";
  });

  return (
    <Formik
      {...validateParam}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmitForm(values, resetForm);
     
      }}
    >
      {(formik) => (
        <Flex
          flexDir="column"
          as="form"
          mx="auto"
          alignItems="center"
          justify="center"
          width="400px"
          onSubmit={formik.handleSubmit}
        >
          <Text
            marginBottom="24px"
            fontWeight="300"
            letterSpacing="2px"
            fontSize="2xl"
          >
            {heading}
          </Text>
          <Text marginBottom="24px" variant="formText" fontWeight="300">
            {subHeading}
          </Text>

          {successMessage && (
            <Text
              bgColor="#d2e4c4"
              color="#307a07"
              marginBottom="20px"
              variant="formText"
              fontWeight="400"
              width="100%"
              padding="10px 30px"
            >
              {successMessage}
            </Text>
          )}
          {errorMessage && (
            <Text
              bgColor="#e4c4c4"
              color="#cb2b2b"
              marginBottom="20px"
              variant="formText"
              fontWeight="400"
              width="100%"
              padding="10px 30px"
              transition="all 1s ease"
            >
              {errorMessage}
            </Text>
          )}

          {inputContents.map((inputContent) => {
            return (
              <TextField key={inputContent.name}  {...inputContent} inputType="input"></TextField>
            );
          })}
          <Button
            fontSize="14px"
            invertColor="true"
            fontWeight="300"
            width="100%"
            height="48px"
            type="submit"
            onClick={() => {
              if (isValidatingOnchange) {
                setValidateParam({
                  validateOnChange: true,
                });
              }
            }}
          >
            {buttonLabel}
          </Button>
        </Flex>
      )}
    </Formik>
  );
};

export default Form;
