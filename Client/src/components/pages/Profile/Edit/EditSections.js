import { VStack, Flex, Box } from "@chakra-ui/react";
import Button from "../../../commom/Button";
import Text from "../../../commom/Text";
import { useRef } from "react";
import useOutsideClick from "../../../Hooks/useOutsideClick";
import { useQuery, useQueryClient } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import { getGeneralCall } from "../../../../Lib/fetchServer";
import EditCollapseItems from "./EditCollapseItems";

function EditSections(props) {
  const {
    variant,
    title,
    CollapseForm,
    refKey,
    user,
    openSection,
    onOpenSection,
    collapseFormProps,
    joinSeparator,
    fullQueryKey,
    queryUrl,
    initialDataVariable,
    infoVariables,
  } = props;
  const objRef = useRef({});

  const queryClient = useQueryClient();

  const { data } = useQuery(
    fullQueryKey,
    () => {
      return getGeneralCall(queryUrl, user.token);
    },
    {
      enabled: !!user,
      initialData: queryClient.getQueriesData(queryKeys.user)[0][1][
        initialDataVariable
      ],
    }
  );

  let formAddKey = `${refKey} add`;
  const isOpenAdd = formAddKey === openSection ? true : false;

  objRef.current[formAddKey] = useRef();

  let openFormRef = useRef();
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
      width: ["100%", "660px", "900px"],
    };
  }

  if (variant === "normal") {
    buttonProperties.content = "add";
    textProperties = {
      fontWeight: "600",
      letterSpacing: "0.2rem",
    };
    containerProperties = {
      width: ["100%", "660px"],
      padding: "100px 0px",
    };
  }

  const openCollapseFormHandler = (formKey) => {
    onOpenSection((prevValue) => {
      openFormRef.current = objRef.current[formKey];
      if (formKey === prevValue) return "";
      return formKey;
    });
  };

  const onClickOutside = (event) => {
    onOpenSection((prevValues) => {
      if (formAddKey === prevValues) return "";

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
      flexDir="column"
      borderBottom="1px solid gray"
      {...containerProperties}
    >
      <Flex width="100%" justifyContent="space-between">
        <Text {...textProperties}>
          {variant === "noTitle" && data && `${data} `}
          {title}
        </Text>
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
      <Box ref={(ref) => (objRef.current[formAddKey] = ref)}>
        <CollapseForm
          action={"add"}
          onOpenSection={onOpenSection}
          {...collapseFormProps}
          isOpen={isOpenAdd}
        ></CollapseForm>
      </Box>
      {variant === "normal" && (
        <VStack alignItems="flex-start">
          {data &&
            data.map((infoItem) => {
              const displayedInfo = infoVariables.displayedInfo
                .map((item) => infoItem[item])
                .join("");

              return (
                <EditCollapseItems
                  key={displayedInfo}
                  infoVariables={infoVariables}
                  collapseFormProps={collapseFormProps}
                  CollapseForm={CollapseForm}
                  openCollapseFormHandler={openCollapseFormHandler}
                  onOpenSection={onOpenSection}
                  openSection={openSection}
                  displayedInfo={displayedInfo}
                  joinSeparator={joinSeparator}
                  openFormRef={openFormRef}
                  objRef={objRef}
                  infoItem={infoItem}
                ></EditCollapseItems>
              );
            })}
        </VStack>
      )}
    </Flex>
  );
}

export default EditSections;
