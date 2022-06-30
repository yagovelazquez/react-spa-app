import { VStack, Box } from "@chakra-ui/react";
import CollapseItem from "../../commom/CollapseItem";
import { useQuery } from "react-query";
import { queryKeys } from "./../../../ReactQuery/queryContants";
import { getGeneralCall } from "../../../Lib/fetchServer";
import { serverUrl } from "../../../ReactQuery/queryUrl";
import Text from "../../commom/Text";
import AnimatedPage from "../../commom/AnimatedPage";

function HotelStatus() {
  const { data } = useQuery([queryKeys.hotelResorts], () =>
    getGeneralCall(`${serverUrl}/hotels-resorts`)
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
    <AnimatedPage>
      <VStack justifyItems="center">
        <Text
          padding="70px 0px"
          margin="0 30px"
          maxWidth="610px"
          variant="normalText"
          fontSize={["lg", "lg", "xl"]}
        >
          A centralized place to find the latest information about Hush Sunrise
          property reopenings and current facility availability, including any
          temporary changes to property offerings.
        </Text>

        {continents.map((continent) => {
          return (
            <CollapseItem
              key={continent.label}
              data={hotelsObj[continent.key]}
              label={continent.label}
              variant="status"
            />
          );
        })}

        <Box bg="black" width="100%">
          <Text
            padding="70px 50px"
            variant="normalText"
            fontSize="lg"
            margin="0 auto"
            color="white"
            maxWidth={["1030px"]}
          >
            The information displayed on this page reflects the current
            situation at last update and continues to evolve. Some of our
            services and facilities may be modified due to social distancing
            guidelines and health and safety procedures. For the latest property
            information and anticipated facility availability during future
            stays, please contact the hotel or resort directly. Although this
            new Hush Sunrise experience might look different, we will continue
            to deliver the same intuitive and personalized service for which we
            are known.
          </Text>
        </Box>
      </VStack>
    </AnimatedPage>
  );
}

export default HotelStatus;
