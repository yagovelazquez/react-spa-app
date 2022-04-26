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

function EmailForm(props) {
  const { onOpenSection, isOpen, action, isPrimary } = props;
  const { user, updateUser } = useUser();
  const queryClient = useQueryClient();

  let buttonlabel;
  let UpdateButton;
  const gridProperties = {
    gridTemplateAreas: `'empty close' 'email email' 'type type' 'primaryEmail primaryEmail' 'deleteButton button' `,
    gridTemplateRows: "0px",
    gridTemplateColumns: "1fr 145px",
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
    email: Yup.string().required("Please enter a valid email"),
    type: Yup.string().required("Please enter a valid type"),
    primaryEmail: Yup.boolean().required(
      "Please enter a valid primary address"
    ),
  });

  if (action === "update") {
    buttonlabel = "update";
    UpdateButton = () => {
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
      label: "Email*",
      name: "email",
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
      label: "Primary Email",
      name: "primaryEmail",
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
        AnyComponent={UpdateButton && !isPrimary ? UpdateButton : null}
        onSubmitForm={() => {
          console.log("submited");
        }}
        inputPropertiesProps={inputPropertiesProps}
        buttonPropertiesProps={buttonPropertiesProps}
      ></FormCollapse>
    </React.Fragment>
  );
}

export default EmailForm;
