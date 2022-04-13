import Form from "../../commom/Form";
import Text from "../../commom/Text";
import { Link } from "react-router-dom";
import React from "react";
import { VStack } from "@chakra-ui/react";
import * as Yup from "yup";
import { useMutation } from "react-query";
import useUser from "../../Hooks/useUser";
import { serverUrl } from "../../../ReactQuery/queryUrl";
import { authServerCall } from "../../../Lib/fetchServer";

function LoginForm() {

  const logUrl = `${serverUrl}/auth`;
  const { updateUser } = useUser();
  const { mutate, error } = useMutation((values) => {
    return authServerCall(values, logUrl);
  }, {
    onSuccess: (data) => {
      
      updateUser(data)
    }
  });

  const inputContents = [
    { label: "Email", name: "email", type: "email" },
    {
      label: "Password",
      name: "password",
      type: "password",
      InputRightContent: () => {
        return (
          <Text variant="formText" fontSize="sm" fontWeight="300">
            <Link to="/account/forgot-password">Forgot Password?</Link>
          </Text>
        );
      },
      inputRightElementSet: { width: "7rem" },
    },
  ];

  const heading = "Login";
  const subheading = "Please enter your e-mail and password:";
  const buttonLabel = "Login";

  const validationSchema = Yup.object({
    password: Yup.string().required("Please enter a valid password"),
    email: Yup.string().required("Please enter a valid email address"),
  });

  const submitFormHandler = (values) => {
    mutate(values);
  };

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
          Don't have an account?{" "}
          {<Link to="/account/register">Create One</Link>}
        </Text>
      </VStack>
    </React.Fragment>
  );
}

export default LoginForm;
