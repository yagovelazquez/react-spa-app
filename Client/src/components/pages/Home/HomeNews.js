import { VStack, HStack, useMediaQuery } from "@chakra-ui/react";
import ImageBox from "../../commom/ImageBox";
import Text from "../../commom/Text";

function HomeNews() {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [isLargerThan450] = useMediaQuery("(min-width: 700px)");

  let padding = !isLargerThan450 ? "0 30px" : "0 75px"

  const ImagesBoxes = (
    <>
      <ImageBox
        boxStyles={{ width: ["100%", 328, 450], padding: [padding, 0] }}
        imageStyles={{ maxHeight: [500, "auto"], objectFit: "cover" }}
        url={"/News/hotel.jpg"}
        link="../hotel-status"
        title="HOTEL STATUS DURING COVID-19"
        description="A centralized place to find the latest information about property reopenings and current facility availability, including any temporary changes to property offerings."
      />

      <VStack height="100%" spacing="25px">
        <ImageBox
          boxStyles={{ width: ["100%", 328, 450], padding: [padding, 0] }}
          url={"/News/newOpenings.jpg"}
          title="DISCOVER OUR NEW OPENINGS"
          description="Explore our growing collection of hotels and resorts."
        />
        <ImageBox
          boxStyles={{ width: ["100%", 328, 450], padding: [padding, 0] }}
          url={"/News/inspiration.jpg"}
          title="INSPIRATION YOU CAN TAKE WITH YOU"
          description="Discover our fascinating world of luxury, travel and lifestyle through the lens of Four Seasons Magazine, the perfect inspiration for your next adventure."
        />
      </VStack>
    </>
  );

  return (
    <VStack paddingTop={90} bg="white" spacing="40px">
      <Text
        variant="titleNormal"
        fontSize={["1rem", "2xl"]}
        fontWeight="hairline"
        textAlign="center"
      >
        explore more with hush sunrise
      </Text>
      {isLargerThan700 ? (
        <HStack alignItems="flex-start" spacing={30}>
          {ImagesBoxes}
        </HStack>
      ) : (
        <VStack spacing="25px">{ImagesBoxes}</VStack>
      )}
    </VStack>
  );
}

export default HomeNews;
