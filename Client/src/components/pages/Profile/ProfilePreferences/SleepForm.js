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



function SleepForm(props) {
  const { onOpenSection, isOpen } = props;
  const { user, updateUser } = useUser();
  const queryClient = useQueryClient()

  const { mutate, data } = useMutation((values) => {
      values.token = user.token;
   return updateUserPreferences(values, `${serverUrl}/user/preferences/sleep`);
    },
    {
      onSuccess: (values,variables) => {
        if (values === 1) {
            const sleepPreferences = []
            const {mattressName, pillowName} = variables
            sleepPreferences.push(mattressName, `Pillows - ${pillowName}`)
            queryClient.setQueryData([queryKeys.user, queryKeys.preferences], (oldValue) =>  {return {roomPreferences: oldValue.roomPreferences, sleepPreferences}});
            let updatedUser = _.clone(user)
            updatedUser.preferences.sleepPreferences = sleepPreferences   
            updateUser(updatedUser)
        }
         onOpenSection("")
  
      },
    }
  );


  const validationSchema = Yup.object({
    mattressName: Yup.string().required("Please enter a valid mattress"),
    pillowName: Yup.string().required("Please enter a valid pilow"),
  });

  const gridProperties = {
    columnGap: "35px",
    rowGap: "45px",
    gridTemplateAreas: `'empty close' 'mattressName pillowName' 'text_1 text_2'  'empty2 button' `,
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "0px",
    marginBottom: "30px",
    flexDir: "column",
    padding: "36px 60px",
    color: "black",
    bg: "white",
    as: "form",
    width: "745px",
  };

  const inputMap = [
    {
      label: "Mattress*",
      name: "mattressName",
      inputType: "select",
      selectOptions: [
        { name: "Signature mattress (medium firmness)" },
        { name: "Pillowtop mattress - Firm" },
        { name: "Pillowtop mattress - Plush" },
      ],
    },

    {
      label: "Pillow*",
      name: "pillowName",
      inputType: "select",
      selectOptions: [
        { name: "Pillows - Feather", value: "Feather" },
        { name: "Pillows - Buckwheat", value: "Buckwheat" },
        { name: "Pillows - Down Alternative", value: "Down Alternative" },
        { name: "Pillows - Extra large", value: "Extra Large" },
        { name: "Pillows - Foam", value: "Foam" },
        { name: "Pillows - Hard", value: "Hard" },
        { name: "Pillows - Horsehair", value: "Horsehair" },
        { name: "Pillows - Memory Foam", value: "Memory Foam" },
        { name: "Pillows - Orthopedic", value: "Orthopedic" },
        { name: "Pillows - Soft", value: "Soft" },
      ],
    },
  ];

  const texts = {
    textsContent: [
      {
        name: "text_1",
        content:
          "The Hush Sunrise standard of luxury, designed for optimum comfort. May be customised to your preferred level of firmness.",
      },
      {
        name: "text_2",
        content:
          "Our standard of luxurious comfort, made with hypo-allergenic down.",
      },
    ],
    textProperties: {
      variant: "normalText",
      fontSize: "sm",
    },
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
        onSubmitForm={mutate}
        texts={texts}
      ></FormCollapse>
    </React.Fragment>
  );
}

export default SleepForm;
