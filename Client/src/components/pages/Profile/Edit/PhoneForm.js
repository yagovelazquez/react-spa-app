import FormCollapse from "../../../commom/FormCollapse";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import { updateUserPreferences } from "../../../../Lib/fetchServerProfile";
import React from "react";
import useUser from "../../../Hooks/useUser";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import _ from "lodash";
import Button from "../../../commom/Button";

function PhoneForm(props) {
  const { onOpenSection, isOpen, action, countriesData } = props;

  const { user, updateUser } = useUser();
  const queryClient = useQueryClient();



  let buttonlabel;
  let DeleteButton;
  const gridProperties = {
    gridTemplateAreas: `'empty empty close' 'countryCode phone phone' 'type type type' 'primaryPhone primaryPhone primaryPhone' 'empty2 deleteButton button' `,
    gridTemplateRows: "0px",
    gridTemplateColumns: "162px 1fr 145px",
    columnGap: "30px",
    rowGap: "30px",
    marginBottom: "30px",
    flexDir: "column",
    padding: "36px 60px",
    color: "black",
    bg: "white",
    as: "form",
    width: "100%",
  };

  const validationSchema = Yup.object({
    phone: Yup.string().required("Please enter a valid phone number"),
    countryCode: Yup.string().required("Please enter a valid country code"),
    type: Yup.string().required("Please enter a valid type"),
    primaryPhone: Yup.boolean().required(
      "Please enter a valid primary phone"
    ),
  });

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
          gridArea="deleteButton"
        >
          delete
        </Button>
      );
    };
  }

  if (action === "add") {
    buttonlabel = "save";
  }

  const inputMap = [
    {
      label: "Phone number*",
      name: "phone",
      inputType: "input",
    },
    {
      label: "Type*",
      name: "type",
      inputType: "select",
      selectOptions: [
        { name: "Personal" },
        { name: "Business" },
        { name: "Other" },
      ],
    },
    {
        label: "Country Code*",
        name: "countryCode",
        inputType: "select",
        selectOptions: countriesData ,
      },
    {
      label: "Primary Phone",
      name: "primaryPhone",
      inputType: "checkbox",
    },
  ];

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

export default PhoneForm;
