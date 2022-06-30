import DestinationSelect from "./../../NavBar/DestinationSelect";
import CalendarInput from "./../../NavBar/CalendarInput";
import GuestInput from "./../../NavBar/GuestInput";
import PromotionInput from "./../../NavBar/PromotionInput";
import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import { useContext } from "react";
import { CheckRatesContext } from "./../../NavBar/CheckRatesContextProvider";
import Button from "../../commom/Button";
import { useNavigate } from "react-router-dom";

function CheckRatesPageForm() {
  const { destination, checkin, checkout } = useContext(CheckRatesContext);

  const [isLargerThan1150] = useMediaQuery("(min-width: 1150px)");
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan780] = useMediaQuery("(min-width: 780px)");
  const [isLargerThan0] = useMediaQuery("(min-width: 0px)");

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
  };

  let templateAreas;
  let templateColumns;
  let buttonWidth;
  let gridHeight;
  let marginButtonTop;

  if (isLargerThan0) {
    templateAreas = "'destination' 'calendar' 'guest' 'promotion' 'button'";
    templateColumns = "95%";
    buttonWidth = "100%";
    gridHeight = "450px";
    marginButtonTop = "0";
  }

  if (isLargerThan780) {
    templateAreas = "'destination calendar calendar' 'guest promotion button'";
    templateColumns = "330px 185px 185px";
    buttonWidth = "100%";
    marginButtonTop = "20px";
    gridHeight = "185px";
  }

  if (isLargerThan1000) {
    templateAreas = "'destination calendar calendar' 'guest promotion button'";
    templateColumns = "415px 255px 255px";
    buttonWidth = "100%";
    gridHeight = "225px";
  }

  if (isLargerThan1150) {
    templateColumns = "";
    templateAreas = "'destination calendar guest promotion button'";
    gridHeight = "125px";
  }

  return (
    <Grid
      gridTemplateAreas={templateAreas}
      width={"100%"}
      templateColumns={templateColumns}
      justifyContent="center"
      templateRows="60px 60px"
      height={gridHeight}
      paddingTop="30px"
      gap="20px"
    >
      <GridItem gridArea="destination">
        <DestinationSelect variant="page"></DestinationSelect>
      </GridItem>
      <GridItem gridArea="calendar">
        <CalendarInput variant="page"></CalendarInput>
      </GridItem>
      <GridItem gridArea="guest">
        <GuestInput variant="page"></GuestInput>
      </GridItem>
      <GridItem gridArea="promotion">
        <PromotionInput variant="page"></PromotionInput>
      </GridItem>
      <GridItem gridArea="button">
        <Button
          onClick={buttonInvalidProps ? null : clickHandler}
          height="40px"
          border="1px solid black"
          marginTop={marginButtonTop}
          invertColor
          width={buttonWidth}
          {...buttonInvalidProps}
        >
          check rates
        </Button>
      </GridItem>
    </Grid>
  );
}

export default CheckRatesPageForm;
