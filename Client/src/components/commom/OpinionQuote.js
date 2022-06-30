import { VStack, HStack, Box } from "@chakra-ui/react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Text from "./Text";

function OpinionQuote(props) {
  const { opinion, author, occupation } = props;

  return (
    <VStack>
      <Box
        as={RiDoubleQuotesL}
        boxSize={["2.5rem", "2.5rem", "4rem"]}
        color="#d8d8d8"
      ></Box>

      <Text
        width={["90vw", "90vw", "770px"]}
        textAlign="center"
        variant="normalText"
        fontSize={["2rem", "2.25rem", "5xl"]}
        fontStyle="italic"
        letterSpacing="-.03rem"
      >
        {opinion}
      </Text>

      <Box
        as={RiDoubleQuotesR}
        boxSize={["2.5rem", "2.5rem", "4rem"]}
        color="#d8d8d8"
      ></Box>

      <HStack spacing="20px">
        <Text fontWeight="700" fontSize="xs" letterSpacing="0.1875rem">
          {author}
        </Text>
        <Text fontWeight="400" fontSize="xs" letterSpacing="0.1875rem">
          {occupation}
        </Text>
      </HStack>
    </VStack>
  );
}

export default OpinionQuote;
