import Form from "../../commom/Form";

import React from "react";
import { VStack } from "@chakra-ui/react";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { recoveryServerCall } from "../../../Lib/fetchServer";
import { serverUrl } from "../../../ReactQuery/queryUrl";


function ChangePassForm({token}) {
  const inputContents = [
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" }
  ];


  const {mutate, error ,data: sucess} = useMutation((data) => {
    data.token = token  
    return recoveryServerCall(data,data.url)})

  const heading = "Reset Password";
  const subheading = "Please enter a new password:";
  const buttonLabel = "Reset";
  const successMessage = sucess ? `Password ${sucess.message}` : null

  const validationSchema = Yup.object({
    password: Yup.string().required('Please enter a valid password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords don't match").required('Please enter a valid password'),
  });



  const submitFormHandler = (values) => {
     const url = `${serverUrl}/user/`
     mutate({password: values.password, url})
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
          errorMessage={error?.message}
          successMessage={successMessage}
        ></Form>
      </VStack>
    </React.Fragment>
  );
}

export default ChangePassForm;
