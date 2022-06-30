import CheckRatesPageForm from "./CheckRatesPageForm";
import CheckRatesContextProvider from "./../../NavBar/CheckRatesContextProvider";
import { Flex, useMediaQuery, Box, HStack } from "@chakra-ui/react";
import BookingSteps from "./BookingSteps";
import Text from "../../commom/Text";
import { GiConfirmed } from "react-icons/gi";
import AnimatedPage from "../../commom/AnimatedPage";

function CheckRates() {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  return (
    <CheckRatesContextProvider>
      <AnimatedPage>
        <Flex bg="white" flexDir="column">
          {isLargerThan700 && <BookingSteps></BookingSteps>}
          <CheckRatesPageForm></CheckRatesPageForm>
          <HStack marginTop="100px" marginBottom={30} justifyContent={"center"}>
            <Box as={GiConfirmed} size="24px"></Box>
            <Text paddingTop="2px" lineHeight="1rem" letterSpacing=".1rem">
              BEST RATE GUARANTEED
            </Text>
          </HStack>
        </Flex>
      </AnimatedPage>
    </CheckRatesContextProvider>
  );
}

export default CheckRates;
