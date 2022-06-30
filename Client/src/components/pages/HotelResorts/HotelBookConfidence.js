import Text from "../../commom/Text";
import { VStack, Flex } from "@chakra-ui/react";
import { RiHotelLine, RiHeartPulseLine } from "react-icons/ri";

import ConfidenceCard from "./ConfidenceCard";

function HotelBookConfidence() {
  return (
    <VStack
      marginBottom="90px"
      marginTop="70px"
      alignItems={["center", "flex-start"]}
      spacing="30px"
    >
      <Text
        textAlign="center"
        padding="0 30px"
        fontWeight="700"
        fontSize="md"
        letterSpacing="0.25rem"
      >
        BOOK YOUR STAY WITH CONFIDENCE
      </Text>
      <Flex flexDir={["column", "row"]} gap="30px">
        <ConfidenceCard
          title="CHECK HOTEL STATUS"
          text="Find out property status and available amenities services"
          Icon={RiHotelLine}
          to="../hotel-status"
        ></ConfidenceCard>
        <ConfidenceCard
          title="ENHANCE HEALTH AND SAFETY"
          text="Hush Sunrise Lead with Care program"
          Icon={RiHeartPulseLine}
          to="../page-under-construction"
        ></ConfidenceCard>
      </Flex>
    </VStack>
  );
}

export default HotelBookConfidence;
