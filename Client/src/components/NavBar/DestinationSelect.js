import { queryKeys } from "../../ReactQuery/queryContants";
import { serverUrl } from "../../ReactQuery/queryUrl";
import Select from "../commom/Select";
import { useQuery } from "react-query";
import { getGeneralCall } from "../../Lib/fetchServer";
import { VStack } from "@chakra-ui/react";
import Text from "../commom/Text";
import { CheckRatesContext } from "./CheckRatesContextProvider";
import { useContext } from "react";

function DestinationSelect({ variant }) {
  const url = `${serverUrl}/hotels-resorts`;
  const queryKey = queryKeys.hotelResorts;
  const { data } = useQuery([queryKey], () => getGeneralCall(url));

  const { setFormValues } = useContext(CheckRatesContext);

  const placeHolderData = [];

  const selectProperties = {
    border: "1px solid rgb(216, 216, 216)",
    bg: "#f0f0f0",
    borderRadius: 0,
  };

  const changeHandler = (e) => {
    setFormValues((prevValue) => {
      const formValues = { ...prevValue };
      formValues.destination = e.target.value;
      return formValues;
    });
  };

  return (
    <VStack alignItems="flex-start" spacing={"5px"}>
      <Text letterSpacing="2px" fontSize="0.625rem" fontWeight="700">
        DESTINATION
      </Text>
      <Select
        placeHolder={"Find a Hotel or Resort"}
        propertyName="property"
        selectProperties={selectProperties}
        selectOptions={data || placeHolderData}
        onChange={changeHandler}
      ></Select>
    </VStack>
  );
}

export default DestinationSelect;
