import Text from "../../commom/Text";
import { HStack, VStack } from "@chakra-ui/react";
import TitleArrow from "../../commom/TitleArrow";
import { useNavigate } from "react-router-dom";

function ConfidenceCard(props) {
  const { title, text, Icon, to } = props;

  let navigate = useNavigate();

  const clickHandler = () => {
    navigate(to);
  };

  const containerProperties = {
    _hover: { bg: "#f5f5f5" },
    cursor: "pointer",
  };

  return (
    <HStack
      {...containerProperties}
      width={["90vw", "330px", "450px"]}
      border=".5px solid #d8d8d8"
      boxShadow="0 0 10px 0 rgb(0 0 0 / 10%)"
      padding="20px"
      onClick={clickHandler}
    >
      <Icon size={"2rem"} />
      <VStack spacing="15px" paddingLeft="10px" alignItems="flex-start">
        <TitleArrow textStyles={{ fontSize: "xs" }} styles={{ _hover: {} }}>
          {title}
        </TitleArrow>
        <Text fontSize="md" variant="italicTitle">
          {text}
        </Text>
      </VStack>
    </HStack>
  );
}

export default ConfidenceCard;
