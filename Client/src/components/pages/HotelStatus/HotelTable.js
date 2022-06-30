import Table from "../../commom/Table";
import { Link as RouterLink } from "react-router-dom";
import Text from "../../commom/Text";
import { AiOutlineCheck } from "react-icons/ai";
import { IoRemoveOutline } from "react-icons/io5";
import { Box } from "@chakra-ui/react";

function HotelTable(props) {
  const { isOpen, hotelData } = props;

  const headItems = [
    { content: "PROPERTY", props: { width: "248px" } },
    { content: "STATUS", props: { width: "142px" } },
    { content: "ANTICIPATED OPENING DATE", props: { maxWidth: "172px" } },
    { content: "OPEN DINING OPTIONS", props: { maxWidth: "137px" } },
    { content: "SPA", props: { maxWidth: "70px" } },
    { content: "POOL" },
  ];

  const bodyItems = [];

  hotelData.forEach((hotel) => {
    const item = {
      content: [
        {
          key: hotel.property,
          props: { maxWidth: "248px" },
          content: (
            <Text
              variant="titleNormal"
              letterSpacing="0.1875rem"
              paddingBottom="3px"
              borderBottom="1px solid black"
              as={RouterLink}
              to={"../page-under-construction"}
            >
              {hotel.property}
            </Text>
          ),
        },
        {
          key: `${hotel.property}open`,
          props: { maxWidth: "120px" },
          content: hotel.status,
        },
        {
          key: `${hotel.property}openingDate`,
          content: hotel.openingDate,
        },
        {
          key: `${hotel.property}dinningOptions`,
          content: hotel.dinningOptions,
        },
        {
          key: `${hotel.property}spa`,
          content: hotel.spa ? (
            <Box paddingLeft="5px">
              <AiOutlineCheck size="1.3rem" />
            </Box>
          ) : (
            <Box paddingLeft="5px">
              <IoRemoveOutline size="1.5rem" />
            </Box>
          ),
        },
        {
          key: `${hotel.property}pool`,
          content: hotel.pool ? (
            <Box paddingLeft="5px">
              <AiOutlineCheck size="1.3rem" />
            </Box>
          ) : (
            <Box paddingLeft="5px">
              <IoRemoveOutline size="1.5rem" />
            </Box>
          ),
        },
      ],
      key: `${hotel.property}1`,
    };

    bodyItems.push(item);
  });

  return (
    <Table
      isOpen={isOpen}
      variant="striped"
      headItems={headItems}
      bodyItems={bodyItems}
      colorScheme={"blackAlpha"}
    ></Table>
  );
}

export default HotelTable;
