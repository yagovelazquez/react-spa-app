import FormCollapse from "../../../commom/FormCollapse";
import * as Yup from "yup";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import React from "react";
import useUser from "../../../Hooks/useUser";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import Button from "../../../commom/Button";
import { useMutation } from "react-query";
import { generalPostCall } from "../../../../Lib/fetchServer";

function EmailForm(props) {
  const { onOpenSection, isOpen, action, infoItem } = props;
  const { user, updateStoragedUser } = useUser();
  const queryClient = useQueryClient();

  const { mutate: mutateSubmit } = useMutation(
    (values) => {
      if (action === "update") {
        values.oldEmail = infoItem.email;
      }
      values.token = user.token;
      return generalPostCall(values, `${serverUrl}/user/edit/email`, action);
    },
    {
      onSuccess: (variables) => {
        const { email, type, primaryEmail } = variables;

        const newEmail = { email, type, primaryEmail };

        queryClient.setQueryData(
          [queryKeys.user, queryKeys.email],
          (oldValue) => {
            const updatedEmails = oldValue.map((item) => {
              if (action !== "update") return item;

              if (item.email === infoItem.email) return newEmail;

              return item;
            });

            if (action === "add") {
              updatedEmails.push(newEmail);
            }

            updateStoragedUser({ email: updatedEmails }, true);

            return updatedEmails;
          }
        );

        onOpenSection("");
      },
    }
  );

  const { mutate: mutateDelete } = useMutation(
    () => {
      let values = {
        email: infoItem.email,
      };
      values.token = user.token;
      return generalPostCall(values, `${serverUrl}/user/edit/email`, "DELETE");
    },
    {
      onSuccess: () => {
        onOpenSection("");

        queryClient.setQueryData(
          [queryKeys.user, queryKeys.email],
          (oldValue) => {
            const updatedEmails = oldValue.filter(
              ({ email }) => email !== infoItem.email
            );

            updateStoragedUser({ email: updatedEmails }, true);

            return updatedEmails;
          }
        );
      },
    }
  );

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
    marginTop: action === "add" ?  "30px": 0,
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
          onClick={() => mutateDelete()}
          type="button"
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
      label: "PRIMARY EMAIL",
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
        AnyComponent={
          UpdateButton && !infoItem?.primaryEmail ? UpdateButton : null
        }
        onSubmitForm={mutateSubmit}
        inputPropertiesProps={inputPropertiesProps}
        buttonPropertiesProps={buttonPropertiesProps}
      ></FormCollapse>
    </React.Fragment>
  );
}

export default EmailForm;
