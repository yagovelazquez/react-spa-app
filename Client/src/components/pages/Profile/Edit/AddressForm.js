import FormCollapse from "./../../../commom/FormCollapse";
import { countries } from "countries-list";
import * as Yup from "yup";
import Button from "../../../commom/Button";
import React from "react";

function AddressForm(props) {
  const { onOpenSection, isOpen, action } = props;

  let DeleteButton
  let buttonlabel

  const validationSchema = Yup.object({
    street: Yup.string().required("Please enter a valid street"),
    country: Yup.string().required("Please enter a valid country"),
    city: Yup.string().required("Please enter a valid city"),
    state: Yup.string().required("Please enter a valid state"),
    postal: Yup.string().required("Please enter a valid postal"),
    type: Yup.string().required("Please enter a valid type"),
    primaryAddress: Yup.boolean().required(
      "Please enter a valid primary address"
    ),
  });

  const gridProperties = {
    columnGap: "35px",
    rowGap: "45px",
    gridTemplateAreas: `'empty close' 'street street' 'country city' 'state postal' 'type empty2' 'primaryAddress button' `,
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "0px",
    marginBottom: "30px",
    flexDir: "column",
    padding: "36px 60px",
    color: "black",
    bg: "white",
    as: "form",
    width: "100%",
  };

  const inputMap = [
    { label: "Street*", name: "street", inputType: "input" },
    {
      label: "Country / Region*",
      name: "country",
      inputType: "select",
      selectOptions: [],
    },
    { label: "City*", name: "city", inputType: "input" },
    { label: "State / Province*", name: "state", inputType: "input" },
    { label: "Zip / Postal Code*", name: "postal", inputType: "input" },
    {
      label: "Type*",
      name: "type",
      inputType: "select",
      selectOptions: [{ name: "Business" }, { name: "Home" }],
    },
    { label: "Primary Address", name: "primaryAddress", inputType: "checkbox" },
  ];

  if (action === "add") {
    buttonlabel = "save";
  }

  if (action === "update") {
    buttonlabel = "update";
    DeleteButton = () => {
      return (
        <Button
          border="none"
          width="63px"
          padding="0px"
          _hover={{ color: "gray", borderBottomColor: "gray" }}
          justifySelf="end"
          borderBottom="1px solid black"
          gridArea="button"
          marginRight="172px"
          position="relative"
        >
          delete
        </Button>
      );
    };
  }

  const inputPropertiesProps = {
    alignSelf: "center",
  };

  const buttonPropertiesProps = {
    alignSelf: "center",
  };



  return (
    <React.Fragment>
    <FormCollapse
      isOpen={isOpen}
      gridProperties={gridProperties}
      buttonLabel={buttonlabel}
      validationSchema={validationSchema}
      onOpenSection={onOpenSection}
      formInputs={inputMap}
      AnyComponent={DeleteButton ? DeleteButton : null}
      onSubmitForm={() => {
        console.log("submited");
      }}
      inputPropertiesProps={inputPropertiesProps}
      buttonPropertiesProps={buttonPropertiesProps}

    ></FormCollapse>
      </React.Fragment>
  );
}

export default AddressForm;


