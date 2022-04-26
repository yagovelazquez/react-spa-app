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



function NameForm(props) {
  const { onOpenSection, isOpen } = props;
  const { user, updateUser } = useUser();
  const queryClient = useQueryClient()


  const validationSchema = Yup.object({
    title: Yup.string().required("Please enter a valid title"),
  });

  const gridProperties = {
    columnGap: "30px",
    gridTemplateAreas: `'empty empty close' 'text_1 title button' `,
    gridTemplateColumns: "1fr 172px auto",
    gridTemplateRows: "0px",
    marginBottom: "30px",
    flexDir: "column",
    padding: "36px 60px",
    color: "black",
    bg: "white",
    height: "195px",
    as: "form",
    width: "900px",
  };

  const inputMap = [
    {
      label: "",
      name: "title",
      inputType: "select",
      selectOptions: [
        { name: "Mr."},
        { name: "Mrs."},
        { name: "Ms."},
        { name: "Dr."}
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
    alignSelf:"center"
  }

 const buttonPropertiesProps={
   alignSelf:"center"
  }

  return (
    <React.Fragment>
      <FormCollapse
        isOpen={isOpen}
        gridProperties={gridProperties}
        buttonLabel={"update"}
        validationSchema={validationSchema}
        onOpenSection={onOpenSection}
        formInputs={inputMap}
        onSubmitForm={() => {console.log('submited')}}
        texts={texts}
        inputPropertiesProps={inputPropertiesProps}
        buttonPropertiesProps={buttonPropertiesProps}
      ></FormCollapse>
    </React.Fragment>
  );
}

export default NameForm;
