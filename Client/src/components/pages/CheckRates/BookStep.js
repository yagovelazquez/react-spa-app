import { Box, HStack } from "@chakra-ui/react";
import Text from "../../commom/Text";

function BookingStep(props) {
  const { color, bg, borderColor, text, number } = props;

  return (
    <HStack>
      <Box
        borderRadius={"50%"}
        textAlign="center"
        verticalAlign="center"
        border="1px solid black"
        borderColor={borderColor}
        fontSize="0.75rem"
        bg={bg}
        color={color}
        height="19px"
        width="19px"
      >
        {number}
      </Box>
      <Text fontSize="0.60rem" letterSpacing="0.1875rem" color="white">
        {text}
      </Text>
    </HStack>
  );
}

export default BookingStep;
