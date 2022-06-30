import Text from "../../commom/Text";
import Button from "../../commom/Button";
import { useRef } from "react";
import { Flex, Box } from "@chakra-ui/react";
import useOutsideClick from "../../Hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";

function ProfileIconSection(props) {
  const {
    iconProperties,
    headingProperties,
    textProperties,
    containerProperties,
    boxContainer,
    textContainerProperties,
    buttonProperties,
    hasCollapase,
    openSection,
    onOpenSection,
    CollapseForm,
    refKey,
  } = props;
  const { contentList, ...otherTextProperties } = textProperties;
  const isOpen = headingProperties.content === openSection ? true : false;
  const objRef = {};

  let navigate = useNavigate();

  objRef[refKey] = useRef();

  const clickHandler = () => {
    if (!hasCollapase) return navigate("../hotel-resorts");

    if (!isOpen) {
      onOpenSection(headingProperties.content);
    }

    if (isOpen) {
      onOpenSection("");
    }
  };

  const onClickOutside = () => {
    if (!hasCollapase) return;

    onOpenSection((prevValues) => {
      if (prevValues === headingProperties.content) return "";
      return prevValues;
    });
  };

  useOutsideClick({
    ref: objRef[refKey],
    value: "buttons",
    callback: onClickOutside,
  });

  return (
    <Flex
      ref={objRef[refKey]}
      {...boxContainer}
      justifyContent="center"
      bg="black"
      width="100%"
    >
      <Flex width="100% !important" {...containerProperties}>
        <Box {...iconProperties}></Box>
        <Flex {...textContainerProperties}>
          <Text {...headingProperties}>{headingProperties.content}</Text>
        </Flex>
        <Button {...buttonProperties} onClick={clickHandler} value="buttons">
          {buttonProperties.content}
        </Button>
      </Flex>
      {hasCollapase && (
        <CollapseForm
          onOpenSection={onOpenSection}
          isOpen={isOpen}
        ></CollapseForm>
      )}
      {textProperties.content.map((item, index) => {
        return (
          <Text key={index} {...otherTextProperties}>
            {contentList ? `- ${item}` : item}
          </Text>
        );
      })}
    </Flex>
  );
}

export default ProfileIconSection;
