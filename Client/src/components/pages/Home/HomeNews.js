import { VStack, HStack } from "@chakra-ui/react";
import ImageBox from "../../commom/ImageBox";
import Text from "../../commom/Text";




function HomeNews() {
    return (      <VStack marginTop={90} spacing="40px">
    <Text variant="titleNormal" fontSize="2xl" fontWeight="hairline">
      explore more with hush sunrise
    </Text>
    <HStack spacing={30}>
      <ImageBox
        boxStyles={{ width: "450px" }}
        url={"/News/hotel.jpg"}
        title="HOTEL STATUS DURING COVID-19"
        description="A centralized place to find the latest information about property reopenings and current facility availability, including any temporary changes to property offerings."
      />

      <VStack height="100%" spacing="25px">
        <ImageBox
          boxStyles={{ width: "450px" }}
          url={"/News/newOpenings.jpg"}
          title="DISCOVER OUR NEW OPENINGS"
          description="Explore our growing collection of hotels and resorts."
        />
        <ImageBox
          boxStyles={{ width: "450px" }}
          url={"/News/inspiration.jpg"}
          title="INSPIRATION YOU CAN TAKE WITH YOU"
          description="Discover our fascinating world of luxury, travel and lifestyle through the lens of Four Seasons Magazine, the perfect inspiration for your next adventure."
        />
      </VStack>
    </HStack>
  </VStack>  );
}

export default HomeNews;