import Form from "../../commom/Form";
import React from "react";

import * as Yup from "yup";

import { useState } from "react";

function ConstructionForm() {
  const [successMessage, setSuccessMessage] = useState(null);

  const inputContents = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeHolder: "Enter your email address",
    },
  ];

  const gridProperties = {
    gridTemplateAreas: `'successMessage successMessage' 'email button'  `,
    gridTemplateColumns: "auto 132px",
    rowGap: "10px",
    alignItems: "start",
  };

  const buttonProperties = {
    gridArea: "button",
    fontSize: "0.65rem",
    padding: "5px",
    height: "42px",
  };

  const buttonLabel = "Notify me!";

  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter a valid email address"),
  });

  const submitFormHandler = (values, resetForm) => {
    resetForm();
    setSuccessMessage(
      "Thank you! You will get notified as soon as we finish the development."
    );
  };

  return (
    <React.Fragment>
      <Form
        gridProperties={gridProperties}
        isGrid={true}
        buttonLabel={buttonLabel}
        inputContents={inputContents}
        validationSchema={validationSchema}
        onSubmitForm={submitFormHandler}
        successMessage={successMessage}
        buttonProperties={buttonProperties}
      ></Form>
    </React.Fragment>
  );
}

export default ConstructionForm;
