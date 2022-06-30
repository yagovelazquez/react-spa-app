import { Flex, Box, Grid } from "@chakra-ui/react";
import { BsGift } from "react-icons/bs";
import Button from "../../commom/Button";
import Text from "../../commom/Text";
import { useNavigate } from "react-router-dom";

function ProfileExclusiveOffer() {
  let navigate = useNavigate();

  const findHotelHandler = () => {
    navigate("../hotel-resorts");
  };

  const iconProperties = {
    size: "54px",
    color: "white",
    as: BsGift,
    marginTop: ["40px", 0],
  };

  const headingProperties = {
    fontWeight: "550",
    letterSpacing: ".1875rem",
    content: "YOU CAN NOW SEE EXCLUSIVE OFFERS",
    marginBottom: "20px",
    fontSize: ["xs", "xs", "sm"],
    textAlign: "center",
  };

  const textProperties = {
    content:
      "Complimentary perks, best rate guaranteeed and personalized service when you book with us",
    variant: "normalText",
    fontSize: ["0.9375rem", "0.9375rem", "lg"],
    textAlign: "center",
  };

  const buttonProperties = {
    width: "240px",
    invertColor: "true",
    content: "Find a hotel or resort",
    marginTop: ["30px", "30px", 0],
    fontSize: ["0.625rem", "0.625rem", "xs"],
    padding: ["12px 15px", "12px 15px", "12px 20px"],
  };

  const gridProperties = {
    bg: "black",
    width: ["250px", "660px", "900px"],
    gridTemplateAreas: [
      '"heading" "text" "icon" "button"',
      '"icon heading" "icon text" "icon button"',
      '"icon heading button" "icon text button"',
    ],
    color: "white",
    gridTemplateColumns: ["250px", "min-content 460px min-content"],
    justifyContent: ["space-between"],
    justifyItems: ["center"],
    alignItems: "center",
  };

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      borderBottom="1px solid gray"
      height={["415px", "215px"]}
      bg="black"
    >
      <Grid {...gridProperties}>
        <Box gridArea="icon" {...iconProperties}></Box>
        <Text gridArea="heading" {...headingProperties}>
          {headingProperties.content}
        </Text>
        <Text gridArea="text" {...textProperties}>
          {textProperties.content}
        </Text>
        <Button
          onClick={findHotelHandler}
          gridArea="button"
          {...buttonProperties}
        >
          {buttonProperties.content}
        </Button>
      </Grid>
    </Flex>
  );
}

export default ProfileExclusiveOffer;
