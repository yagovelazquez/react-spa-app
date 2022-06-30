import { VStack } from "@chakra-ui/react";
import CollapseItem from "../../commom/CollapseItem";
import { useQuery } from "react-query";
import { queryKeys } from "./../../../ReactQuery/queryContants";
import { getGeneralCall } from "../../../Lib/fetchServer";
import { serverUrl } from "../../../ReactQuery/queryUrl";

function RetreatCollapseItems() {
  const { data } = useQuery([queryKeys.retreats], () =>
    getGeneralCall(`${serverUrl}/retreats`)
  );
  const hotelsObj = {
    europe: [],
    northAmerica: [],
    southAmerica: [],
    africa: [],
    asia: [],
  };
  data?.forEach((hotelData) => {
    switch (hotelData.continent) {
      case "EUROPE":
        hotelsObj.europe.push(hotelData);
        break;
      case "NORTH AMERICA":
        hotelsObj.northAmerica.push(hotelData);
        break;
      case "CENTRAL & SOUTH AMERICA":
        hotelsObj.southAmerica.push(hotelData);
        break;
      case "MIDDLE EAST & AFRICA":
        hotelsObj.africa.push(hotelData);
        break;
      case "ASIA & PACIFIC":
        hotelsObj.asia.push(hotelData);
        break;

      default:
        break;
    }
  });

  const continents = [
    { label: "EUROPE", key: "europe" },
    { label: "NORTH AMERICA", key: "northAmerica" },
    { label: "CENTRAL & SOUTH AMERICA", key: "southAmerica" },
    { label: "MIDDLE EAST & AFRICA", key: "africa" },
    { label: "ASIA & PACIFIC", key: "asia" },
  ];

  return (
    <VStack spacing="0">
      {continents.map((continent) => {
        return (
          <CollapseItem
            key={continent.label}
            data={hotelsObj[continent.key]}
            label={continent.label}
            variant="list"
          />
        );
      })}
    </VStack>
  );
}

export default RetreatCollapseItems;
