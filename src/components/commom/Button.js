import { Button as ChakraButton } from "@chakra-ui/react";

function Button(props) {
  let hover = {
    background: "black",
    color: "white",
  };

  let normalColors = {
    bg: "white",
    color: "black",
    border:"1px solid white",
  };

  if (props.invertColor) {
    hover = {
      bg: "white",
      color: "black",

    };

    normalColors = {
      bg: "black",
      color: "white",
      border:"1px solid black"
    };
  }

  const clonedProps =  {...props}
  delete clonedProps.invertColor

  return (
    <ChakraButton
      _hover={hover}
      borderRadius="0px"

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
        outline: "none"
      }}
      {...clonedProps}
      
    >
      {props.children}
    </ChakraButton>
  );
}

export default Button;
