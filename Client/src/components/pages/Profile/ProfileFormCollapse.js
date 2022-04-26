import { Grid, GridItem, keyframes, useOutsideClick, Collapse } from "@chakra-ui/react";
import React from "react";
import { Formik } from "formik";
import Button from "../../commom/Button";
import TextField from "./../../commom/TextField";
import * as Yup from "yup";
import {countries} from "countries-list"
import { useRef } from "react";
import FormCollpase from './../../commom/FormCollapse';


function ProfileFormCollapse(props) {
  
  const { isOpen, keyRef, onOpenSection } = props;

  const objRef = {};

  objRef[keyRef] = useRef();

  const onClickOutside = () => {
    if (isOpen === true) {
      onOpenSection("");
    }
  };

  useOutsideClick({
    ref: objRef[keyRef],
    handler: onClickOutside,
  });


  const inputMap = [
    { label: "Street*", name: "street", type: "input" },
    { label: "Country / Region*", name: "country", type: "select", selectOptions: Object.values(countries) },
    { label: "City*", name: "city", type: "input" },
    { label: "State / Province*", name: "state", type: "input" },
    { label: "Zip / Postal Code*", name: "postal", type: "input" },
    { label: "Type*", name: "type", type: "select", selectOptions: [{name: "Business"}, {name: "Home"}] },
    { label: "Primary Address", name: "primaryAddress", type: "checkbox" },
  ];

  const inputProperties = {
    borderColor: "black",
    border: "none",
    borderBottom: "1px solid",
    borderRadius: "0px",
    padding: "0px",
    _hover: {borderColor: "black"},
    cursor: "pointer"
  };

  const labelProperties = {
    fontSize: "lg",
    cursor: "pointer",
 
  };


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

  let initialValues = {};

  const buttonLabel = "save";

  const onSubmitForm = (values) => {};

  inputMap.forEach((inputContent) => {
    if (inputContent.type === "checkbox") {
      initialValues[inputContent.name] = false;
      return;
    }
    initialValues[inputContent.name] = "";
  });

  return (
    <FormCollpase></FormCollpase>
  );
}

export default ProfileFormCollapse;
