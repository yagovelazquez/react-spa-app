import { Box, Flex } from "@chakra-ui/react";
import NavLink from "../commom/NavLink";

function More(props) {
  const links = [
    { label: "Hotel & Resorts", link: "hotel-resorts" },
    { label: "Private Retreats", link: "private-retreats" },
    { label: "Residences", link: "residences" },
    { label: "Hotel Status", link: "hotel-status" },
  ];

  const { onMoreClick, ...allProps } = props;

  return (
    <Flex
      bg="white"
      position="absolute"
      width="425px"
      left="70px"
      top="76px"
      flexWrap={"wrap"}
      padding="42px 30px 28px 30px"
      boxShadow={"0 2px 4px 0 rgb(0 0 0 / 50%)"}
      _after={{
        borderBottom: "12px solid white",
        borderLeft: "12px solid transparent",
        borderRight: "12px solid transparent",
        bottom: "122px",
        content: "''",
        display: "inline-block",
        position: "relative",
        left: "165px",
      }}
      {...allProps}
    >
      {links.map((item, index) => (
        <Box marginBottom="10px" key={item.label} flexBasis={"50%"}>
          <NavLink
            marginLeft="15px"
            font="buttonLabel"
            onClick={() => onMoreClick(false)}
            activelink="true"
            to={`/${item.link}`}
            invertColors
          >
            {item.label}
          </NavLink>
        </Box>
      ))}
    </Flex>
  );
}

export default More;
