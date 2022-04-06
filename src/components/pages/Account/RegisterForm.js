import Form from "../../commom/Form";
import Text from "../../commom/Text";
import { Link } from "react-router-dom";
import React from "react";
import { VStack } from "@chakra-ui/react";
import * as Yup from "yup";

function RegisterForm() {
  const inputContents = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Password", name: "password", type: "password" },
    { label: "Email", name: "email", type: "email" },

  ];

  const heading = "Register";
  const subheading = "Please fill in the information below:";
  const buttonLabel = "Create my Account";

  const validationSchema = Yup.object({
    lastName: Yup.string().required("Please enter a valid last name"),
    firstName: Yup.string().required("Please enter a valid first name"),
    password: Yup.string().required("Please enter a valid password"),
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
          Have an account?{" "}
          {<Link to="/account/login">Log in</Link>}
        </Text>
      </VStack>
    </React.Fragment>
  );
}

export default RegisterForm;
