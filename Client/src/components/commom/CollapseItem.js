import { Collapse, HStack, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import Text from "./Text";
import HotelTable from "../pages/HotelStatus/HotelTable";
import LinkList from "./LinkList";

function CollapseItem(props) {
  const { label, data, variant } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <Box width={["94vw", "685px", "930px"]}>
      <HStack
        height="90px"
        borderTop="1px solid black"
        justifyContent="space-between"
        width="100%"
        onClick={openHandler}
        cursor="pointer"
      >
        <Text variant="titleNormal" letterSpacing="0.1875rem">
          {label}
        </Text>
        {isOpen ? <IoRemoveOutline /> : <AiOutlinePlus />}
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        {variant === "status" && (
          <HotelTable hotelData={data} isOpen={isOpen} />
        )}
        {variant === "list" && <LinkList links={data}></LinkList>}
      </Collapse>
    </Box>
  );
}

export default CollapseItem;
