import { HStack, Box } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Text from "./Text";
import styled from "styled-components";

const StyledWrapper = styled.div`
  svg {
    color: white;
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
  svg:hover {
    color: gray;
  }
`;

const IconWrapper = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

function SelectCard({
  selectPreviousCard,
  selectNextCard,
  cardsLength,
  counter,
}) {
  const increaseCount = () => {
    selectNextCard();
  };
  const decreseCount = () => {
    selectPreviousCard();
  };

  return (
    <Box>
      <IconWrapper>
        <HStack spacing={5}>
          <IoIosArrowBack onClick={decreseCount}></IoIosArrowBack>
          <Text color="white" variant="titleSelected">
            {counter} / {cardsLength}
          </Text>
          <IoIosArrowForward onClick={increaseCount}></IoIosArrowForward>
        </HStack>
      </IconWrapper>
    </Box>
  );
}

export default SelectCard;
