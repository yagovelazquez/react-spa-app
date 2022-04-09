import { Link } from "@chakra-ui/react";
import { NavLink as NavLinkRouter, useMatch } from "react-router-dom";


function NavLink(props) {
  const focus = {
    outline: "none",
  };

  const match = useMatch(props.to)
 

  let hover = {
    color: "gray",
    textDecoration: "none",
    borderBottom: "1px solid",
    borderColor: "gray",
  };

  let normalColors = {
    bg: "black",
    color: "white"
  };

  if (props.invertColors) {

    normalColors = {
      bg: "black",
      color: "white",
    };
  }

  if (match) {
    if (props.activelink) {
    normalColors.borderBottom = "1px solid"
    normalColors.borderColor = "white"
    }
}

  return (
    <Link
      letterSpacing="2.1px"
      as={NavLinkRouter}
      _focus={focus}
      fontSize="xs"
      fontWeight="700"
      textTransform="uppercase"
      {...normalColors}
      _hover={hover}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export default NavLink;
