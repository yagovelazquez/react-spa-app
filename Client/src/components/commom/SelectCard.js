import { HStack, Box } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Text from "./Text";
import styled from "styled-components";
import { useSwiper } from "swiper/react";


const StyledWrapper = styled.div`
  svg {
    color: white;
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
  svg:hover {
    color: gray;
    cursor: pointer;
  }
`;

const IconWrapper = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

function SelectCard(props) {
  const { cardslength, onIncreaseCount, onDecreaseCount, ...otherProps } = props;
  const swiper = useSwiper();
  const count = swiper.realIndex + 1 



  return (
    <Box {...otherProps}>
      <IconWrapper>
        <HStack spacing={5} justify="center">
          <IoIosArrowBack onClick={() => {swiper.slidePrev()}}></IoIosArrowBack>
          <Text color="white" variant="titleSelected">
            {count} / {cardslength}
          </Text>
          <IoIosArrowForward onClick={() => {swiper.slideNext()}}></IoIosArrowForward>
        </HStack>
      </IconWrapper>
    </Box>
  );
}

export default SelectCard;
