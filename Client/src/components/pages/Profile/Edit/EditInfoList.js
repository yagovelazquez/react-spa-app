import { VStack, HStack } from "@chakra-ui/react";
import Button from "../../../commom/Button";
import Text from "../../../commom/Text";

function EditInfoList(props) {
  const { type, primary, onOpenEditForm, displayedInfo } = props;

  const buttonProperties = {
    padding: "20px 12px",
    width: "auto",
    _active: {},
    _hover: {},
    invertColor: true,
    border: "none",
  };

  const commomTextProperties = {
    fontSize: "xs",
    fontWeight: "600",
    letterSpacing: "0.1875rem",
  };

  const primaryTextProperties = {
    ...commomTextProperties,
    textTransform: "upperCase",

    _before: {
      display: "inline-block",
      background: "#fff",
      borderRadius: "100%",
      width: "2px",
      height: "2px",
      marginBottom: "3px",
      marginRight: "10px",
      content: "' '",
    },
  };

  const typeTextProperties = {
    ...commomTextProperties,
    fontSize: "xs",
    fontWeight: "600",
    letterSpacing: "0.1875rem",
    color: "gray",
  };

  return (
    <VStack maxWidth="530px" borderBottom="1px white solid">
      <HStack width="100%">
        <Text {...typeTextProperties} textTransform="upperCase">
          {type}
        </Text>
        {primary && <Text {...primaryTextProperties}>PRIMARY</Text>}
      </HStack>
      <HStack width="100%" justifyContent="space-between">
        <Text fontSize="2xl" padding="5px 0" opacity="0.8">
          {displayedInfo}
        </Text>
        <Button onClick={onOpenEditForm} value="buttons" {...buttonProperties}>
          edit
        </Button>
      </HStack>
    </VStack>
  );
}

export default EditInfoList;
