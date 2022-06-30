import { Flex } from "@chakra-ui/react";
import DestinationSelect from "./DestinationSelect";
import CalendarInput from "./CalendarInput";
import GuestInput from "./GuestInput";
import PromotionInput from "./PromotionInput";
import { useContext } from "react";
import { CheckRatesContext } from "./CheckRatesContextProvider";
import Button from "../commom/Button";
import { useNavigate } from "react-router-dom";
import Text from "../commom/Text";

function CheckRatesForm({ onToggle }) {
  const { destination, checkin, checkout } = useContext(CheckRatesContext);

  let navigate = useNavigate();

  const invalidProps = {
    _hover: {},
    bg: "gray",
    borderColor: "gray",
    cursor: "default",
    _active: {},
  };

  const buttonInvalidProps =
    (destination === "") | !checkin || !checkout ? invalidProps : null;

  const clickHandler = () => {
    navigate("../page-under-construction");
    onToggle();
  };

  return (
    <Flex
      width="100vw"
      flexDir="column"
      height="110px"
      bg="rgba(255,255,255,0.95)"
      position="absolute"
      columnGap="10px"
      padding="0 10px"
    >
      <Text
        onClick={() => onToggle(false)}
        cursor="pointer"
        _after={{
          borderBottom: "10px solid hsla(0,0%,100%,.7)",
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          bottom: "24px",
          content: "''",
          display: "inline-block",
          position: "relative",
          right: "50%",
        }}
        margin="12px 120px 0 auto"
        letterSpacing="2px"
        fontSize="0.625rem"
        fontWeight="700"
      >
        HIDE
      </Text>
      <Flex gap="10px" justifyContent="center">
        <DestinationSelect></DestinationSelect>
        <CalendarInput></CalendarInput>
        <GuestInput></GuestInput>
        <PromotionInput></PromotionInput>
        <Button
          onClick={buttonInvalidProps ? null : clickHandler}
          height="40px"
          border="1px solid black"
          marginTop="20px"
          invertColor
          {...buttonInvalidProps}
        >
          check rates
        </Button>
      </Flex>
    </Flex>
  );
}

export default CheckRatesForm;
