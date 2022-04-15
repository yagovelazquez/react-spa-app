import Text from "./Text";
import { Flex } from "@chakra-ui/react";

function SelectableText(props) {
  const selectTextHandler = (event) => {
    props.onSelectedText(event.target.innerText);
  };

  const { texts, textStyles, flexStyles } = props;

  return (
    <Flex {...flexStyles} >
      {texts.map((textObj) => {
        if (textObj.text.toUpperCase() === props.selectedText) {
          return (
            <Text {...textStyles.selectedFont} key={textObj.text}>
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
