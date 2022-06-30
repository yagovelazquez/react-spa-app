import { Link as RouterLink } from "react-router-dom";
import Link from "./Link";
import { Flex, Box } from "@chakra-ui/react";

function LinkList(props) {
  const { links } = props;

  return (
    <Flex
      width={["94vw", "700px", "930px"]}
      flexDir={["column", "row"]}
      marginBottom="50px"
      flexWrap="wrap"
    >
      {links.map(({ property }) => (
        <Box
          key={property}
          marginTop="20px"
          flexBasis={["100%", "50%", "33.333333%"]}
        >
          <Link
            fontSize="0.75rem"
            fontWeight={700}
            letterSpacing="0.1875rem"
            _hover={{ color: "gray", borderColor: "gray" }}
            borderBottom="1px solid black"
            to={"../page-under-construction"}
            as={RouterLink}
          >
            {property}
          </Link>
        </Box>
      ))}
    </Flex>
  );
}

export default LinkList;
