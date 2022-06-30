import FormCollapse from "../../../commom/FormCollapse";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import React from "react";
import useUser from "../../../Hooks/useUser";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import { generalPostCall } from "../../../../Lib/fetchServer";

function NameForm(props) {
  const { onOpenSection, isOpen } = props;
  const { user, updateStoragedUser } = useUser();

  const queryClient = useQueryClient();

  const { mutate: mutateSubmit } = useMutation(
    (values) => {
      values.token = user.token;
      return generalPostCall(values, `${serverUrl}/user`, "update");
    },
    {
      onSuccess: (values, variables) => {
        const { title } = variables;

        queryClient.setQueryData([queryKeys.user, queryKeys.title], () => {
          updateStoragedUser({ title }, true);

          return title;
        });

        onOpenSection("");
      },
    }
  );

  const validationSchema = Yup.object({
    title: Yup.string().required("Please enter a valid title"),
  });

  const gridProperties = {
    columnGap: "30px",
    gridTemplateAreas: [
      `'empty empty close' 'text_1 text_1 text_1' 'title title title' 'button button button' `,
      `'empty empty close' 'text_1 title button' `,
    ],
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: ["30px auto 60px 70px", "0px"],
    marginBottom: "30px",
    padding: "36px 60px",
    color: "black",
    bg: "white",
    height: ["auto", "195px"],
    as: "form",
    width: ["100%", "660px", "900px"],
    marginTop: "20px"
  };

  const inputMap = [
    {
      label: "",
      name: "title",
      inputType: "select",
      selectOptions: [
        { name: "Mr." },
        { name: "Mrs." },
        { name: "Ms." },
        { name: "Dr." },
      ],
    },
  ];

  const texts = {
    textsContent: [
      {
        name: "text_1",
        content:
          "We’re sorry but at this time you can’t change your name without calling us. Please call toll free xxxxx-xxxxx any time.",
      },
    ],
    textProperties: {
      variant: "normalText",
      fontSize: "lg",
    },
  };

  const inputPropertiesProps = {
    alignSelf: "center",
  };

  const buttonPropertiesProps = {
    alignSelf: "center"
  };

  return (
    <React.Fragment>
      <FormCollapse
        isOpen={isOpen}
        gridProperties={gridProperties}
        buttonLabel={"update"}
        validationSchema={validationSchema}
        onOpenSection={onOpenSection}
        formInputs={inputMap}
        onSubmitForm={mutateSubmit}
        texts={texts}
        inputPropertiesProps={inputPropertiesProps}
        buttonPropertiesProps={buttonPropertiesProps}
      ></FormCollapse>
    </React.Fragment>
  );
}

export default NameForm;
