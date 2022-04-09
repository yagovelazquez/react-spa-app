import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
import Text from "./Text";
import { HiArrowNarrowRight } from "react-icons/hi";



function TitleArrow({ children, styles, textStyles }) {
  const defaultStyles = {
    cursor: "pointer",
    color: "black",
    _hover: {
      color: "gray",
    }
  };

  const defaultTextStyles = {
    cursor: "pointer",
    variant: "titleNormal",
    fontSize: "0.65rem",
    letterSpacing: ".3em",

  };

  return (
    <Link to="unknown">
    
        <HStack {...defaultStyles} {...styles}>
          <Text {...defaultTextStyles} {...textStyles}>
            {children}
          </Text>

          <HiArrowNarrowRight></HiArrowNarrowRight>
        </HStack>
     
    </Link>
  );
}

export default TitleArrow;
