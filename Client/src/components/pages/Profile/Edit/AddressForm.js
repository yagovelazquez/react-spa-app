import FormCollapse from "./../../../commom/FormCollapse";
import * as Yup from "yup";
import Button from "../../../commom/Button";
import useUser from "../../../Hooks/useUser";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import { generalPostCall } from "../../../../Lib/fetchServer";
import { useMutation, useQueryClient } from "react-query";

import React from "react";

function AddressForm(props) {
  const { onOpenSection, isOpen, action, infoItem, countriesData } = props;

  const { user, updateStoragedUser } = useUser();
  const queryClient = useQueryClient();

  const { mutate: mutateSubmit } = useMutation(
    (values) => {
      if (action === "update") {
        values.address = infoItem.address;
        values.id = infoItem.id;
      }
      values.token = user.token;
      return generalPostCall(values, `${serverUrl}/user/edit/address`, action);
    },
    {
      onSuccess: (values, variables) => {
  

        const {
          country,
          state,
          city,
          street,
          number,
          postal,
          type,
          primaryAddress,
        } = variables;
        let id;

        id = values.id;

        if (action === "update") {
          id = infoItem.id;
        }

        const newAddress = {
          country,
          state,
          city,
          street,
          number,
          postal,
          type,
          primaryAddress,
          id,
        };

        queryClient.setQueryData(
          [queryKeys.user, queryKeys.address],
          (oldValue) => {
            const updatedAddresses = oldValue.map((item) => {
              if (action !== "update") return item;

              if (item.id === infoItem.id) return newAddress;

              return item;
            });

            if (action === "add") {
              updatedAddresses.push(newAddress);
            }

            updateStoragedUser({ addresses: updatedAddresses }, true);

            return updatedAddresses;
          }
        );

        onOpenSection("");
      },
    }
  );

  const { mutate: mutateDelete } = useMutation(
    () => {
      let values = {
        id: infoItem.id,
      };
      values.token = user.token;
      return generalPostCall(
        values,
        `${serverUrl}/user/edit/address`,
        "DELETE"
      );
    },
    {
      onSuccess: () => {
        onOpenSection("");

        queryClient.setQueryData(
          [queryKeys.user, queryKeys.address],
          (oldValue) => {
            const updatedAddresses = oldValue.filter(
              ({ id }) => id !== infoItem.id
            );

            updateStoragedUser({ addresses: updatedAddresses }, true);

            return updatedAddresses;
          }
        );
      },
    }
  );

  let DeleteButton;
  let buttonlabel;

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
    gridTemplateAreas: [
      '"close" "street" "country" "state" "city" "postal" "type" "primaryAddress" "button" ',
      `'empty close' 'street street' 'country city' 'state postal' 'type empty2' 'primaryAddress button' `,
    ],
    gridTemplateColumns: ["auto", "1fr 1fr"],
    gridTemplateRows: "0px",
    marginBottom: "30px",
    flexDir: "column",
    padding: "36px 60px",
    color: "black",
    bg: "white",
    as: "form",
    width: "100%",
    marginTop: action === "add" ?  "30px": 0,
  };

  const inputMap = [
    { label: "Street*", name: "street", inputType: "input" },
    {
      label: "Country / Region*",
      name: "country",
      inputType: "select",
      selectOptions: countriesData,
    },
    { label: "City*", name: "city", inputType: "input" },
    { label: "State / Province*", name: "state", inputType: "input" },
    { label: "Zip / Postal Code*", name: "postal", inputType: "input" },
    {
      label: "Type*",
      name: "type",
      inputType: "select",
      selectOptions: [{ name: "Work" }, { name: "Home" }, { name: "Other" }],
    },
    { label: "PRIMARY ADDRESS", name: "primaryAddress", inputType: "checkbox" },
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
          onClick={() => mutateDelete()}
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
        onSubmitForm={mutateSubmit}
        inputPropertiesProps={inputPropertiesProps}
        buttonPropertiesProps={buttonPropertiesProps}
      ></FormCollapse>
    </React.Fragment>
  );
}

export default AddressForm;
