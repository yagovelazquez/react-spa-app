import Form from "../../commom/Form";
import Text from "../../commom/Text";
import { Link } from "react-router-dom";
import React from "react";
import { VStack } from "@chakra-ui/react";
import * as Yup from "yup";

function ForgotPasswordForm() {
  const inputContents = [
    { label: "Email", name: "email", type: "email" },

  ];

  const heading = "Recover Password";
  const subheading = "Please enter your email:";
  const buttonLabel = "Create my Account";

  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter a valid email address"),
  });

  const submitFormHandler = (values) => {
  }

  return (
    <React.Fragment>
      <VStack h="600px" justify="center" spacing="24px">
        <Form
          buttonLabel={buttonLabel}
          heading={heading}
          subHeading={subheading}
          inputContents={inputContents}
          validationSchema={validationSchema}
          onSubmitForm={submitFormHandler}
          isValidatingOnchange={true}
        ></Form>
        );
        <Text variant="formText" fontWeight="300" marginTop="24px">
          Remember your password?{" "}
          {<Link to="/account/login">back to login</Link>}
        </Text>
      </VStack>
    </React.Fragment>
  );
}

export default ForgotPasswordForm;
