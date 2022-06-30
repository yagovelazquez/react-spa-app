import { Button as ChakraButton } from "@chakra-ui/react";
import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  let hover = {
    background: "black",
    color: "white",
    border: "1px solid white",
  };

  let normalColors = {
    bg: "white",
    color: "black",
    border: "1px solid black",
  };

  if (props.invertColor) {
    hover = {
      bg: "white",
      color: "black",
      border: "1px solid black",
    };

    normalColors = {
      bg: "black",
      color: "white",
      border: "1px solid white",
    };
  }

  const clonedProps = { ...props };
  delete clonedProps.invertColor;

  return (
    <ChakraButton
      ref={ref}
      _hover={hover}
      borderRadius="0px"
      _active={hover}
      {...normalColors}
      font="buttonLabel"
      fontSize="xs"
      letterSpacing=".2em"
      textTransform="uppercase"
      height="39px"
      width="190px"
      fontWeight="700"
      padding="12px 20px"
      _focus={{
        outline: "none",
      }}
      {...clonedProps}
    >
      {props.children}
    </ChakraButton>
  );
});

export default Button;
