import FormCollapse from "../../../commom/FormCollapse";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import { generalPostCall } from "../../../../Lib/fetchServer";
import React from "react";
import useUser from "../../../Hooks/useUser";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import Button from "../../../commom/Button";

function PhoneForm(props) {
  const { onOpenSection, isOpen, action, countriesData, infoItem } = props;

  const { user, updateStoragedUser } = useUser();
  const queryClient = useQueryClient();

  const { mutate: mutateSubmit } = useMutation(
    (values) => {
      if (action === "update") {
        values.oldPhone = infoItem.phone;
      }
      values.token = user.token;
      return generalPostCall(values, `${serverUrl}/user/edit/phone`, action);
    },
    {
      onSuccess: (values, variables) => {
        const { phone, type, primaryPhone, countryCode } = variables;

        const newPhone = { phone, type, primaryPhone, countryCode };

       

        queryClient.setQueryData(
          [queryKeys.user, queryKeys.phone],
          (oldValue) => {
            const updatedPhones = oldValue.map((item) => {
              if (action !== "update") return item;

              if (item.phone === infoItem.phone) return newPhone;

              return item;
            });

            if (action === "add") {
              updatedPhones.push(newPhone);
            }

            updateStoragedUser({ phones: updatedPhones }, true);

            return updatedPhones;
          }
        );

        onOpenSection("");
      },
    }
  );

  const { mutate: mutateDelete } = useMutation(
    () => {
      let values = {
        phone: infoItem.phone,
      };
      values.token = user.token;
      return generalPostCall(values, `${serverUrl}/user/edit/phone`, "DELETE");
    },
    {
      onSuccess: () => {
        onOpenSection("");

        queryClient.setQueryData(
          [queryKeys.user, queryKeys.phone],
          (oldValue) => {
            const updatedPhones = oldValue.filter(
              ({ phone }) => phone !== infoItem.phone
            );

            updateStoragedUser({ phones: updatedPhones }, true);

            return updatedPhones;
          }
        );
      },
    }
  );

  let buttonlabel;
  let DeleteButton;
  const gridProperties = {
    gridTemplateAreas: [
      "'close close' 'countryCode countryCode' 'phone phone' 'type type' 'primaryPhone primaryPhone' 'deleteButton button'",
      `'empty empty close' 'countryCode phone phone' 'type type type' 'primaryPhone primaryPhone primaryPhone' 'empty2 deleteButton button' `,
    ],
    gridTemplateRows: "0px",
    gridTemplateColumns: ["auto auto", "162px 1fr 145px"],
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
    phone: Yup.string().required("Please enter a valid phone number"),
    countryCode: Yup.string().required("Please enter a valid country code"),
    type: Yup.string().required("Please enter a valid type"),
    primaryPhone: Yup.boolean().required("Please enter a valid primary phone"),
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
          onClick={() => mutateDelete()}
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
      selectOptions: countriesData,
    },
    {
      label: "PRIMARY PHONE",
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
        AnyComponent={
          DeleteButton && !infoItem?.primaryEmail ? DeleteButton : null
        }
        onSubmitForm={mutateSubmit}
        inputPropertiesProps={inputPropertiesProps}
        buttonPropertiesProps={buttonPropertiesProps}
      ></FormCollapse>
    </React.Fragment>
  );
}

export default PhoneForm;
