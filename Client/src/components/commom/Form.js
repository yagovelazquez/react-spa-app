import React from "react";
import { Formik, useFormikContext } from "formik";
import { Grid, GridItem, keyframes, useMediaQuery } from "@chakra-ui/react";
import Text from "./Text";
import Button from "./Button";
import TextField from "./TextField";

import { useState, useEffect } from "react";

const CheckAllBox = ({ CheckAllNameField }) => {
  const { values, setFieldValue } = useFormikContext();

  let isAllTrue = true;

  for (const key in values) {
    if (key === CheckAllNameField) continue;

    if (values[key] === false) {
      isAllTrue = false;
      break;
    }
  }

  useEffect(() => {
    if (isAllTrue) {
      setFieldValue(CheckAllNameField, true);
    }
    if (!isAllTrue && values[CheckAllNameField] === true) {
      setFieldValue(CheckAllNameField, false);
    }
  }, [isAllTrue, setFieldValue, CheckAllNameField, values]);

  return null;
};

const Form = ({
  inputContents,
  heading,
  subHeading,
  CheckAllNameField,
  buttonLabel,
  animationStyle,
  validationSchema,
  gridProperties,
  isGrid,
  AnyComponent,
  onSubmitForm,
  buttonProperties,
  animation: animationProp,
  headingProperties,
  isValidatingOnchange,
  successMessage,
  checkBoxProperties,
  selectProperties,
  errorMessage,
  inputProperties,
  checkBoxLabelProperties,
  labelProperties,
  formikProps,
  variant,
}) => {
  const [validateParam, setValidateParam] = useState({
    validateOnChange: false,
    validateOnBlur: false,
  });

  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

  let initialValues = {};
  let variantValue = variant ? variant : "normal";

  inputContents.forEach((inputContent) => {
    if (inputContent.inputType === "checkbox") {
      initialValues[inputContent.name] = inputContent.initialValue || false;
      return;
    }
    initialValues[inputContent.name] = inputContent.initialValue || "";
  });

  let animation;

  if (animationProp) {
    animation = animationProp;
  }

  if (animationStyle === "moveUpLabel") {
    animation = {
      keyFramesFoward: keyframes`
    
    0% { transform: translateY(-28px) ; opacity: 0; }
    50% {  transform: translateY(-45px) ; opacity: 0 ; text-transform: uppercase; font-size: 0.70rem; letter-spacing: 0.15rem}
    100% { transform: translateY(-60px)  ; opacity: 1; text-transform: uppercase; font-size: 0.70rem; letter-spacing: 0.15rem }     
    `,

      keyFramesBackward: keyframes`
    0%  { transform: translateY(-60px)  ; opacity: 1; text-transform: uppercase; font-size: 0.70rem; letter-spacing: 0.15rem }  
    50%  {  transform: translateY(-50px) ; opacity: 0; text-transform: uppercase; font-size: 0.70rem; letter-spacing: 0.15rem}
    70% { transform: translateY(-40px) ; opacity: 0; }
    100% { transform: translateY(-28px) ; opacity: 1; }
    `,
    };
  }

  return (
    <Formik
      {...validateParam}
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setTouched }) => {
        onSubmitForm(values, resetForm, setTouched);
      }}
      {...formikProps}
    >
      {(formik) => (
        <>
          <Grid
            as="form"
            mx="auto"
            alignItems="center"
            justifyItems="center"
            width={isLargerThan400 ? "400px" : "100%"}
            onSubmit={formik.handleSubmit}
            {...gridProperties}
          >
            {heading && (
              <Text
                marginBottom="24px"
                fontWeight="300"
                letterSpacing="2px"
                fontSize="2xl"
                {...headingProperties}
              >
                {heading}
              </Text>
            )}
            {subHeading && (
              <Text marginBottom="24px" variant="formText" fontWeight="300">
                {subHeading}
              </Text>
            )}

            {successMessage && (
              <Text
                bgColor="#d2e4c4"
                color="#307a07"
                gridArea={isGrid ? "successMessage" : null}
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

            {variantValue === "normal" &&
              inputContents.map((inputContent) => {
                const inputField = (
                  <TextField
                    inputProperties={inputProperties}
                    placeHolder={inputContent.placeHolder}
                    labelProperties={labelProperties}
                    checkBoxProperties={checkBoxProperties}
                    animation={animation}
                    key={inputContent.name}
                    {...inputContent}
                    inputType="input"
                  ></TextField>
                );

                return isGrid ? (
                  <GridItem
                    key={inputContent.name}
                    width="100%"
                    gridArea={inputContent.name}
                  >
                    {inputField}
                  </GridItem>
                ) : (
                  inputField
                );
              })}

            {variantValue === "profile" &&
              inputContents.map((inputContent) => {
                return (
                  <GridItem
                    key={inputContent.name}
                    width="100%"
                    gridArea={inputContent.name}
                  >
                    <TextField
                      checkBoxLabelProperties={checkBoxLabelProperties}
                      selectProperties={selectProperties}
                      labelProperties={labelProperties}
                      checkBoxProperties={checkBoxProperties}
                      animation={animation}
                      inputProperties={inputProperties}
                      {...inputContent}
                    ></TextField>
                  </GridItem>
                );
              })}

            {AnyComponent && <AnyComponent />}

            {CheckAllNameField && (
              <CheckAllBox CheckAllNameField={CheckAllNameField} />
            )}

            <Button
              fontSize="14px"
              invertColor="true"
              fontWeight="300"
              width="100%"
              height="48px"
              type="submit"
              disabled={
                buttonProperties?.allowdisable &&
                (!formik.isValid || !formik.dirty)
              }
              onClick={() => {
                if (isValidatingOnchange) {
                  setValidateParam({
                    validateOnChange: true,
                  });
                }
              }}
              {...buttonProperties}
            >
              {buttonLabel}
            </Button>
          </Grid>
        </>
      )}
    </Formik>
  );
};

export default Form;
