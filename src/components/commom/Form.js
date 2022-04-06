import React from "react";
import { Formik } from "formik";
import { Flex } from "@chakra-ui/react";
import Text from "./Text";
import Button from "./Button";
import TextField from "./TextField";
import { useState, useRef } from "react";

const Form = ({
  inputContents,
  heading,
  subHeading,
  buttonLabel,
  validationSchema,
  onSubmitForm,
  isValidatingOnchange
}) => {
  const [validateParam, setValidateParam] = useState({
    validateOnChange: false,
    validateOnBlur: false,
  });

  const submitRef = useRef()

  let initialValues = {}

  inputContents.forEach(inputContent => {
    initialValues[inputContent.name] = ''
  })

  return (
    <Formik
      {...validateParam}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {onSubmitForm(values)}}
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

          {inputContents.map((inputContent) => {
            return (
              <TextField submitRef={submitRef} key={inputContent.name} {...inputContent}></TextField>
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
              submitRef.current = false 
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
