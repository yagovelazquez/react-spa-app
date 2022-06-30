import {
  TableContainer,
  Table as ChakraTable,
  Tr,
  Td,
  Tbody,
  Th,
  Thead,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Table(props) {
  const { variant, colorScheme, headItems, bodyItems, isOpen } = props;
  const [topValue, setTopValue] = useState(0);

  useEffect(() => {
    let timeTopValue;
    if (isOpen) {
      timeTopValue = setTimeout(() => setTopValue(95), 500);
    }
    if (!isOpen) {
      setTopValue(0);
    }

    return () => {
      clearTimeout(timeTopValue);
    };
  }, [isOpen]);

  return (
    <Box width={["94vw", "auto", "auto"]}>
      <TableContainer overflow={["scroll", "visible"]} overflowY="visible">
        <ChakraTable
          maxWidth={["650px", "700px", "850px"]}
          __css={{ borderCollapse: "separate", borderSpacing: "0" }}
          variant={variant}
          colorScheme={colorScheme}
        >
          <Thead position={["relative", "sticky"]} top={[0, topValue]}>
            <Tr>
              {headItems.map((item, index) => (
                <Th
                  borderBottom="2px solid black !important"
                  textAlign="center"
                  fontSize="0.625rem"
                  letterSpacing="0.1875rem"
                  padding="20px"
                  fontWeight="400"
                  whiteSpace="normal"
                  bg="white"
                  borderRight={
                    index !== headItems.length - 1 ? "1px solid #d8d8d8" : null
                  }
                  key={item.content}
                  {...item.props}
                >
                  {item.content}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {bodyItems.map((trItems) => {
              return (
                <Tr key={trItems.key}>
                  {trItems.content.map((itdItems, index) => {
                    return (
                      <Td
                        borderRight={
                          index !== headItems.length - 1
                            ? "1px solid #d8d8d8"
                            : null
                        }
                        textAlign="center"
                        whiteSpace="normal"
                        fontFamily="Monotype Garamond, garamond, serif"
                        key={itdItems.key}
                        {...itdItems.props}
                      >
                        {itdItems.content}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </ChakraTable>
      </TableContainer>
    </Box>
  );
}

export default Table;
