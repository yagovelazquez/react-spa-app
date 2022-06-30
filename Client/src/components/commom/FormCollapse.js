import { Grid, GridItem, keyframes, Collapse, Box } from "@chakra-ui/react";
import React from "react";
import { Formik } from "formik";
import Button from "./Button";
import TextField from "./TextField";
import { VscChromeClose } from "react-icons/vsc";
import Text from "./Text";

function FormCollapse(props) {
  const {
    isOpen,
    AnyComponent,
    onOpenSection,
    formInputs,
    validationSchema,
    buttonLabel,
    gridProperties,
    texts,
    onSubmitForm,
    inputPropertiesProps,
    buttonPropertiesProps,
  } = props;

  const inputProperties = {
    borderColor: "black",
    border: "none",
    borderBottom: "1px solid",
    borderRadius: "0px",
    padding: "0px",
    _hover: { borderColor: "black" },
    cursor: "pointer",
  };

  const labelProperties = {
    fontSize: "lg",
    cursor: "pointer",
  };

  const closeFormHandler = () => {
    onOpenSection("");
  };

  let initialValues = {};

  formInputs?.forEach((inputContent) => {
    if (inputContent.inputType === "checkbox") {
      initialValues[inputContent.name] = false;
      return;
    }
    initialValues[inputContent.name] = "";
  });

  const animation = {
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

  return (
    <Collapse in={isOpen} style={{ width: "100%" }} animateOpacity>
      <Formik
        initialValues={initialValues}
        validateOnChange={true}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmitForm(values);
          resetForm();
        }}
      >
        {(formik) => (
          <Grid
            onSubmit={formik.handleSubmit}
            borderRadius="5px"
            {...gridProperties}
          >
            {formInputs?.map((inputContent) => {
              return (
                <GridItem
                  key={inputContent.name}
                  {...inputPropertiesProps}
                  gridArea={inputContent.name}
                >
                  <TextField
                    selectOptions={inputContent.options}
                    selectProperties={inputProperties}
                    inputProperties={inputProperties}
                    labelProperties={labelProperties}
                    animation={animation}
                    key={inputContent.label}
                    {...inputContent}
                  ></TextField>
                </GridItem>
              );
            })}

            {AnyComponent && <AnyComponent></AnyComponent>}

            {texts?.textsContent.map((text) => {
              return (
                <Text
                  {...texts.textProperties}
                  gridArea={text.name}
                  key={text.name}
                >
                  {text.content}
                </Text>
              );
            })}

            <Box
              size="25px"
              opacity={0.5}
              _hover={{ cursor: "pointer" }}
              onClick={closeFormHandler}
              gridArea="close"
              justifySelf="end"
              as={VscChromeClose}
            ></Box>

            <Button
              fontSize="xs"
              invertColor="true"
              fontWeight="300"
              border="none"
              gridArea="button"
              {...buttonPropertiesProps}
              width="auto"
              padding="12px 40px"
              type="submit"
              justifySelf="end"
              disabled={!formik.isValid || !formik.dirty}
              _disabled={{
                cursor: "not-allowed ",
                bg: "gray",
                _hover: { bg: "gray", border: "none", color: "white" },
              }}
            >
              {buttonLabel}
            </Button>
          </Grid>
        )}
      </Formik>
    </Collapse>
  );
}

export default React.memo(FormCollapse);
