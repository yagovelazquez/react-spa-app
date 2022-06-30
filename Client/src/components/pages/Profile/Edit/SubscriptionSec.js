import * as Yup from "yup";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import { getGeneralCall, generalPostCall } from "../../../../Lib/fetchServer";
import useUser from "./../../../Hooks/useUser";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import EditSectionsFormVariant from "./EditSectionsFormVariant";
import { Box } from "@chakra-ui/react";
import Text from "../../../commom/Text";

function SubscriptionSec() {
  const { user, updateStoragedUser } = useUser();
  const queryClient = useQueryClient();

  const { data } = useQuery(
    [queryKeys.user, queryKeys.subscriptions],
    () => {
      return getGeneralCall(`${serverUrl}/user/edit/subscription`, user.token);
    },
    {
      enabled: !!user,
      initialData: queryClient.getQueriesData(queryKeys.user)[0][1][
        "subscriptions"
      ],
    }
  );

  const { mutate: mutateSubmit } = useMutation(
    (values) => {
      values.token = user.token;
      return generalPostCall(
        values,
        `${serverUrl}/user/edit/subscription`,
        "update"
      );
    },
    {
      onSuccess: (values, variables) => {
        const { token, ...subscriptions } = variables;

        queryClient.setQueryData(
          [queryKeys.user, queryKeys.subscriptions],
          subscriptions
        );

        updateStoragedUser({ subscriptions }, true);
      },
    }
  );

  const gridPropertiesProps = {
    gridTemplateAreas:
      "'heading' 'subHeadingText' 'subHotelAllCommunication' 'subOffers' 'subResidences' 'subSurveys' 'button'",
  };

  const formProperties = {
    validationSchema: Yup.object({
      subOffers: Yup.boolean().required(),
      subHotelAllCommunication: Yup.boolean().required(),
      subResidences: Yup.boolean().required(),
      subSurveys: Yup.boolean().required(),
    }),
    heading: "EMAIL SUBSCRIPTIONS",
    headingProperties: {
      margin: "0px",
      fontSize: "md",
      fontWeight: "600",
      letterSpacing: "0.2rem",
    },
    checkBoxLabelProperties: {
      name: "subHeadingText",
      variant: "normalText",
      fontSize: "lg",
    },
    CheckAllNameField: "subHotelAllCommunication",
    inputContents: [
      {
        label:
          "Subscribe to ALL Hush Sunrise Hotels and Resorts communications",
        name: "subHotelAllCommunication",
        inputType: "checkbox",
        checkAll: {
          checkBoxesNames: [
            "subSurveys",
            "subResidences",
            "subOffers",
            "subHotelAllCommunication",
          ],
        },
      },
      {
        label: "Hush Sunrise Offers and Promotions",
        name: "subOffers",
        inputType: "checkbox",
        initialValue: data?.subOffers,
      },
      {
        label: "Hush Sunrise Private Residences",
        name: "subResidences",
        inputType: "checkbox",
        initialValue: data?.subResidences,
      },
      {
        label: "Market Research Surveys",
        name: "subSurveys",
        inputType: "checkbox",
        initialValue: data?.subSurveys,
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
    onSubmitForm: (values, resetForm, setTouched) => {
      const { subHotelAllCommunication, ...restOfValues } = values;
      setTouched({});
      mutateSubmit(restOfValues);
    },
    AnyComponent: () => {
      return (
        <Text name="subHeadingText" variant="normalText" fontSize="lg">
          Please select the communications you would like to receive from Hush
          Sunrise. We’re mindful of your inbox and we’ll make sure you only
          receive content based on your interests.
        </Text>
      );
    },
  };

  return (
    <Box name="subscriptionSec">
      <EditSectionsFormVariant
        formProperties={formProperties}
        gridPropertiesProps={gridPropertiesProps}
        data={data}
      />
    </Box>
  );
}

export default SubscriptionSec;
