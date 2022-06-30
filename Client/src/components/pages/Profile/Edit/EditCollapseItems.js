import { Flex, Box } from "@chakra-ui/react";
import EditInfoList from "./EditInfoList";
import useOutsideClick from "../../../Hooks/useOutsideClick";

function EditCollapseItems({
  openFormRef,
  CollapseForm,
  collapseFormProps,
  openSection,
  displayedInfo,
  objRef,
  infoItem,
  openCollapseFormHandler,
  onOpenSection,
  infoVariables,
  joinSeparator,
}) {
  const onClickOutside = (event) => {
    onOpenSection((prevValues) => {
      if (displayedInfo === prevValues) return "";

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
      value={displayedInfo}
      key={displayedInfo}
      ref={(ref) => {
        objRef.current[displayedInfo] = ref;
      }}
      display="column"
      width="100%"
    >
      <EditInfoList
        type={infoItem.type}
        primary={infoItem[infoVariables.primary]}
        onOpenEditForm={() => {
          return openCollapseFormHandler(displayedInfo);
        }}
        displayedInfo={infoVariables.displayedInfo
          .map((item) => infoItem[item])
          .join(joinSeparator || "")}
      ></EditInfoList>
      <Box marginTop="40px">
        <CollapseForm
          {...collapseFormProps}
          infoItem={infoItem}
          action={"update"}
          onOpenSection={onOpenSection}
          isOpen={openSection === displayedInfo ? true : false}
        ></CollapseForm>
      </Box>
    </Flex>
  );
}

export default EditCollapseItems;
