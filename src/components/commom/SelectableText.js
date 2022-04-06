import Text from "./Text";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";

function SelectableText(props) {




  const selectTextHandler = (event) => {
    props.setSelectedText(event.target.innerText);
  };

  const textStyles = {
    normalFont: {
      variant: "titleNormal",
      textAlign: "left",
     cursor: "pointer",
     color: "white",
    },
    selectedFont: {
      variant: "titleSelected",
      borderBottom: "1px solid",
      borderColor: "white",
      textAlign: "center",
      cursor: "pointer",
      color: "white"

    },
  };

  const texts = [
    { text: "Residences" },
    { text: "Hotel & Resorts" },
    { text: "Private Retreats" },
  ];

  return (
    <Flex width="100%" alignItems="center" justify="center" gap="50px"  marginBottom="15px" paddingLeft={props.paddingLeft}>
      {texts.map((textObj) => {
        if (textObj.text.toUpperCase() === props.selectedText) {
          return (
            <Text {...textStyles.selectedFont}  key={textObj.text}>
              {textObj.text}
            </Text>
          );
        }
        return (
          <Text
            key={textObj.text}
            onClick={selectTextHandler}
        
            {...textStyles.normalFont}
          > 
            {textObj.text}
          </Text>
        );
      })}
    </Flex>
  );
}

export default SelectableText;
