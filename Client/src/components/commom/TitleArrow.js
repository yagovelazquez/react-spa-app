import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Text from "./Text";
import { HiArrowNarrowRight } from "react-icons/hi";
import styled from "styled-components";

const StyledSvg = styled.div`
display: inline;
margin-left: 1px;
vertical-align: sub;

svg {
  display: inline;
  
}
`



function TitleArrow({ children, styles, textStyles, link }) {
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
    <Link to={link || "page-under-construction"}>
    
        <Box {...defaultStyles} {...styles}>
          <Text display="inline" {...defaultTextStyles} {...textStyles}>
            {children}
          </Text>
          <StyledSvg><HiArrowNarrowRight size="1rem"></HiArrowNarrowRight></StyledSvg>

         
        </Box>
     
    </Link>
  );
}

export default TitleArrow;
