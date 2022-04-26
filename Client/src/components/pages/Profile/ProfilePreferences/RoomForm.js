import FormCollapse from "../../../commom/FormCollapse";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";
import { updateUserPreferences } from "../../../../Lib/fetchServerProfile";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import useUser from "./../../../Hooks/useUser";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import { clone as _clone } from "lodash";
import { useCallback } from 'react';

function RoomForm(props) {
  const { onOpenSection, isOpen } = props;
  const { user, updateUser } = useUser();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (values) => {
      values.token = user.token;
      return updateUserPreferences(
        values,
        `${serverUrl}/user/preferences/room`
      );
    },
    {
      onSuccess: (values, variables) => {
        const { smokingRoom } = variables;

        if (values === 1) {
          queryClient.setQueryData(
            [queryKeys.user, queryKeys.preferences],
            (oldValue) => {
              return {
                roomPreferences: [smokingRoom],
                sleepPreferences: oldValue.sleepPreferences,
              };
            }
          );

          let updatedUser = _clone(user);
          updatedUser.preferences.roomPreferences = [smokingRoom];
          updateUser(updatedUser);
        }

        onOpenSection("");
      },
    }
  );

  

  const validationSchema = Yup.object({
    smokingRoom: Yup.string().required("Please enter a valid room option"),
  });

  const gridProperties = {
    columnGap: "35px",
    rowGap: "45px",
    gridTemplateAreas: `'empty close' 'smokingRoom smokingRoom'  'empty2 button' `,
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
      label: "Room*",
      name: "smokingRoom",
      inputType: "select",
      selectOptions: [
        { name: "Smoking room", value: "Smoking room" },
        { name: "Non smoking room", value: "Non smoking room" },
      ],
    },
  ];

  return (
    <FormCollapse
      isOpen={isOpen}
      gridProperties={gridProperties}
      buttonLabel={"update"}
      validationSchema={validationSchema}
      onOpenSection={onOpenSection}
      onSubmitForm={mutate}
      formInputs={inputMap}
    ></FormCollapse>
  );
}

export default RoomForm;
