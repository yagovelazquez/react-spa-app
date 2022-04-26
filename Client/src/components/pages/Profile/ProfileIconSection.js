import Text from "../../commom/Text";
import Button from "../../commom/Button";
import { useRef, memo } from "react";
import { HStack, Flex, Box } from "@chakra-ui/react";
import useOutsideClick from "../../Hooks/useOutsideClick";



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
  const {contentList,...otherTextProperties} = textProperties
  const isOpen = headingProperties.content === openSection ? true : false;
  const objRef = {};



  objRef[refKey] = useRef();


  const clickHandler = () => {
    if (!hasCollapase) return;

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
    <HStack {...boxContainer} justifyContent="center" bg="black" width="100%">
      <Flex {...containerProperties}>
        <Box {...iconProperties}></Box>
        <Flex {...textContainerProperties} ref={objRef[refKey]}>
          <Text {...headingProperties}>{headingProperties.content}</Text>
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
        <Button
          {...buttonProperties}
          onClick={clickHandler}
          value="buttons"
        >
          {buttonProperties.content}
        </Button>
      </Flex>
    </HStack>
  );
}

export default ProfileIconSection;
