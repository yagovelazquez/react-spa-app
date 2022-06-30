import * as Yup from "yup";
import { languages } from "countries-list";
import { useMemo } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import { getGeneralCall, generalPostCall } from "../../../../Lib/fetchServer";
import useUser from "./../../../Hooks/useUser";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import EditSectionsFormVariant from "./EditSectionsFormVariant";
import { Box } from "@chakra-ui/react";

function LanguageSec({ countryNameList }) {
  const { user, updateStoragedUser } = useUser();
  const queryClient = useQueryClient();

  const { data } = useQuery(
    [queryKeys.user, queryKeys.language],
    () => {
      return getGeneralCall(`${serverUrl}/user/edit/language`, user.token);
    },
    {
      enabled: !!user,
      initialData: queryClient.getQueriesData(queryKeys.user)[0][1][
        "languages"
      ][0],
    }
  );

  const { mutate: mutateSubmit } = useMutation(
    (values) => {
      let action;
      if (data) {
        action = "update";
      }
      values.token = user.token;
      return generalPostCall(values, `${serverUrl}/user/edit/language`, action);
    },
    {
      onSuccess: (values, variables) => {
        const { token, ...languagePref } = variables;

        queryClient.setQueryData(
          [queryKeys.user, queryKeys.language],
          languagePref
        );

        updateStoragedUser({ languages: languagePref }, true);
      },
    }
  );

  const languageList = useMemo(() => {
    let languagesArray = [];

    for (const key in languages) {
      languagesArray.push({ name: languages[key].name });
    }

    return languagesArray;
  }, []);

  const gridPropertiesProps = {
    gridTemplateAreas: "'heading' 'country' 'preferredLanguage' 'button'",
  };

  const formProperties = {
    validationSchema: Yup.object({
      country: Yup.string().required("Please enter a valid country"),
      preferredLanguage: Yup.string().required("Please enter a valid language"),
    }),
    heading: "COUNTRY & LANGUAGE",
    inputContents: [
      {
        label: "Country / Region",
        name: "country",
        inputType: "select",
        selectOptions: countryNameList,
        initialValue: data?.country,
      },
      {
        label: "Preferred Language",
        name: "preferredLanguage",
        inputType: "select",
        selectOptions: languageList,
        initialValue: data?.preferredLanguage,
      },
    ],

    selectProperties: {
      borderColor: "black",
      border: "none",
      borderBottom: "1px solid",
      borderRadius: "0px",
      padding: "0px",
      _hover: {},
      cursor: "pointer",
      _focus: { borderBottom: "1px solid" },
      width: ["100%","495px"],
    },
    onSubmitForm: mutateSubmit,
  };

  return (
    <Box name="languageSec">
      <EditSectionsFormVariant
        formProperties={formProperties}
        gridPropertiesProps={gridPropertiesProps}
        data={data}
      />
    </Box>
  );
}

export default LanguageSec;
