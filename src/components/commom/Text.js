import { Text as TextChakra } from "@chakra-ui/react";

function Text(props) {
  return (
    <TextChakra {...props}>
      {props.children}
    </TextChakra>
  );
}

export default Text;
