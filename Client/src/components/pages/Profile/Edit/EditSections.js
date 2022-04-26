import { VStack, Flex, Box } from "@chakra-ui/react";
import Button from "../../../commom/Button";
import Text from "../../../commom/Text";
import { ChakraProvider } from "@chakra-ui/react";
import { useRef } from "react";
import useOutsideClick from "../../../Hooks/useOutsideClick";
import EditInfoList from "./EditInfoList";

function EditSections(props) {
  const { variant, title, CollapseForm, refKey, openSection, onOpenSection, collapseFormProps } =
    props;
  const objRef = {};

  let formAddKey = `${refKey} add`;
  let formEditKey = `${refKey} edit`;

  const isOpenAdd = formAddKey === openSection ? true : false;
  const isOpenEdit = formEditKey === openSection ? true : false;

  objRef[formAddKey] = useRef();
  let openFormRef = useRef();
  objRef[formEditKey] = useRef();

  let textProperties = {};
  let containerProperties = {};

  const buttonProperties = {
    width: "80px",
    invertColor: "true",
    borderRadius: "20px",
    _hover: {},
    _active: {},
  };

  if (variant === "noTitle") {
    buttonProperties.content = "edit";
    textProperties = {
      fontSize: "3xl",
      opacity: "0.8",
    };
    containerProperties = {
      width: "900px",
    };
  }

  if (variant === "normal") {
    buttonProperties.content = "add";
    textProperties = {
      fontWeight: "600",
      letterSpacing: "0.2rem",
    };
    containerProperties = {
      width: "675px",
      padding: "100px 0px",
    };
  }


  const openCollapseFormHandler = (formKey) => {
    onOpenSection((prevValue) => {
      openFormRef.current = objRef[formKey].current
      if (formKey === prevValue) return "";
      return formKey;
    });
  };

  const onClickOutside = () => {
    onOpenSection((prevValues) => {
      if (prevValues === formAddKey || prevValues == formEditKey) return "";
      return prevValues;
    });
  };

  useOutsideClick({
    ref: openFormRef,
    value: "buttons",
    callback: onClickOutside,
  });

  return (
    <Flex
      ref={objRef[formAddKey]}
      flexDir="column"
      borderBottom="1px solid gray"
      {...containerProperties}
      id={refKey}
    >
      <Flex width="100%" padding="0 0 40px 0" justifyContent="space-between">
        <Text {...textProperties}>{title}</Text>
        <Button
          onClick={() => {
            openCollapseFormHandler(formAddKey);
          }}
          value="buttons"
          {...buttonProperties}
          invertColor="true"
        >
          {buttonProperties.content}
        </Button>
      </Flex>
   <CollapseForm
        action={"add"}
        onOpenSection={onOpenSection}
        {...collapseFormProps}
        isOpen={isOpenAdd}
      ></CollapseForm>
      {variant === "normal" && (
        <VStack
          alignItems="flex-start"
          spacing="40px"
          ref={objRef[formEditKey]}
        >
          <EditInfoList
            type="personal"
            primary={true}
            onOpenEditForm={() => {
              openCollapseFormHandler(formEditKey);
            }}
            info="yagovelazquez@gmail.com"
          ></EditInfoList>
          <Box width="100%">
            <CollapseForm
               isPrimary={true}
              {...collapseFormProps}
              action={"update"}
              onOpenSection={onOpenSection}
              isOpen={isOpenEdit}
            ></CollapseForm>
          </Box>
        </VStack>
      )}
    </Flex>
  );
}

export default EditSections;
