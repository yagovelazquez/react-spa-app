import { Link } from "@chakra-ui/react";
import { NavLink as NavLinkRouter, useMatch } from "react-router-dom";

function NavLink(props) {
  const focus = {
    outline: "none",
  };

  const match = useMatch(props.to);

  let hover = {
    color: "gray",
    textDecoration: "none",
    borderBottom: "1px solid",
    borderColor: "gray",
  };

  let normalColors = {
    bg: "black",
    color: "white",
  };

  if (match) {
    if (props.activelink) {
      normalColors.borderBottom = "1px solid";
      normalColors.borderColor = "white";
    }
  }

  if (props.invertColors) {
    normalColors = {
      bg: "white",
      color: "black",
    };
    if (match) {
      if (props.activelink) {
        normalColors.borderColor = "black";
      }
    }
  }

  if (match) {
    if (props.activelink) {
      normalColors.borderBottom = "1px solid";
      normalColors.borderColor = "white";
    }
  }

  let otherProps;

  if (match && props.variant === "drawer") {
    otherProps = {
      _before: {
        borderBottom: "9px solid transparent",
        borderLeft: "9px solid #000",
        borderTop: "9px solid transparent",
        content: "''",
        display: "block",
        height: 0,
        left: 0,
        position: "absolute",
        width: 0,
      },
    };
  }

  const { invertColors, ...propsNavlink } = props;

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
      {...propsNavlink}
      {...otherProps}
    >
      {props.children}
    </Link>
  );
}

export default NavLink;
