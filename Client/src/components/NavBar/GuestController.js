import { Flex, HStack } from "@chakra-ui/react";
import Text from "../commom/Text";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

function GuestController(props) {
  const { onAddCountHandler, onSubHandler, count, label } = props;

  const addCountHandler = () => {
    onAddCountHandler(label);
  };

  const subCountHnadler = () => {
    onSubHandler(label);
  };

  return (
    <HStack>
      <Text
        fontWeight="400"
        letterSpacing="3px"
        fontSize="0.625rem"
      >{`${count} ${label}`}</Text>
      <Flex
        cursor="pointer"
        bg="white"
        _hover={{ color: "white", bg: "black" }}
        onClick={addCountHandler}
        justifyContent="center"
        alignItems="center"
        boxSize="30px"
        border="1px solid black"
      >
        {<BsPlus size="20px" />}
      </Flex>
      <Flex
        cursor="pointer"
        onClick={subCountHnadler}
        _hover={{ color: "white", bg: "black" }}
        justifyContent="center"
        alignItems="center"
        boxSize="30px"
        border="1px solid black"
      >
        {<AiOutlineMinus size="20px" />}
      </Flex>
    </HStack>
  );
}

export default GuestController;
