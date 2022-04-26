import Form from "../../commom/Form";
import Text from "../../commom/Text";
import { Link } from "react-router-dom";
import React from "react";
import { VStack } from "@chakra-ui/react";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { recoveryServerCall } from "../../../Lib/fetchServer";
import { serverUrl } from "../../../ReactQuery/queryUrl";


function ForgotPasswordForm() {
  const inputContents = [{ label: "Email", name: "email", type: "email" }];

  const { mutate, error, data: success} = useMutation((data) => {
    return recoveryServerCall(data, data.url);
  });

  const heading = "Recover Password";
  const subheading = "Please enter your email:";
  const buttonLabel = "Recover";

  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter a valid email address"),
  });

  const submitFormHandler = (email) => {
    const url = `${serverUrl}/user/recover`;
    mutate({ email, url });
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
          successMessage={success?.message}
          errorMessage={error?.message}
        ></Form>

        <Text variant="formText" fontWeight="300" marginTop="24px">
          Remember your password?{" "}
          {<Link to="/account/login">back to login</Link>}
        </Text>
      </VStack>
    </React.Fragment>
  );
}

export default ForgotPasswordForm;
