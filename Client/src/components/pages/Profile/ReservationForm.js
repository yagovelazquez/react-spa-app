import { Box } from "@chakra-ui/react";
import * as Yup from "yup";
import Form from "../../commom/Form";
import { useNavigate } from "react-router-dom";

function ReservactionForm() {
  const buttonProperties = {
    gridArea: "button",
    width: "180px",
    invertColor: "true",
    _hover: {},
    _active: {},
    fontSize: "0.65rem",
    fontWeight: "700",
    height: "39px",
    padding: "12px 20px",
    allowdisable: "true",

    justifySelf: "center",
    marginTop: "40px",
  };

  let navigate = useNavigate();

  const formSubmitHandler = () => {
    navigate("../page-under-construction");
  };

  const validationSchema = Yup.object({
    hotelName: Yup.string().required("Please enter a valid hotel"),

    lastName: Yup.string().required("Please enter a last name"),
    confirmationNumber: Yup.string().required(
      "Please enter a valid confirmation"
    ),
    confirmation: Yup.bool().oneOf([true], "Field must be checked"),
  });

  const headingProperties = {
    gridArea: "heading",
    letterSpacing: "0.2rem",

    justifySelf: "center",
    fontSize: "3xl",
  };

  const gridProperties = {
    rowGap: "30px",
    justifyItems: "start",
    width: "100%",
    gridTemplateAreas:
      "'heading''hotelName'  'lastName' 'confirmationNumber' 'confirmation' 'button'",
  };

  const inputContents = [
    { label: "Hotel Name*", name: "hotelName", inputType: "input" },
    { label: "Last Name*", name: "lastName", inputType: "input" },
    {
      label: "Confirmation Number*",
      name: "confirmationNumber",
      inputType: "input",
    },
    {
      label:
        "I confirm that I am the guest and/or individual authorized and responsible for the requested reservation and payment details.",
      name: "confirmation",
      inputType: "checkbox",
    },
  ];

  const inputProperties = {
    border: "none",
    borderBottom: "1px solid black",
  };

  const checkBoxLabelProperties = {
    variant: "normalText",
    fontSize: "lg",
    paddingLeft: "10px",
  };

  const checkBoxProperties = {
    marginBottom: "auto",
  };

  const formikProps = {
    validateOnChange: true,
  };

  const heading = "ADD YOUR RESERVATION";

  const buttonLabel = "Continue";

  return (
    <Box padding="100px 0">
      <Form
        checkBoxProperties={checkBoxProperties}
        inputProperties={inputProperties}
        checkBoxLabelProperties={checkBoxLabelProperties}
        buttonLabel={buttonLabel}
        heading={heading}
        headingProperties={headingProperties}
        buttonProperties={buttonProperties}
        gridProperties={gridProperties}
        formikProps={formikProps}
        animationStyle="moveUpLabel"
        variant="profile"
        onSubmitForm={formSubmitHandler}
        validationSchema={validationSchema}
        inputContents={inputContents}
      ></Form>
    </Box>
  );
}

export default ReservactionForm;
