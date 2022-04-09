import { VStack, Box, Image, Flex } from "@chakra-ui/react";
import Text from "./Text";
import Button from "./Button";
import { useSwiperSlide, useSwiper } from "swiper/react";
import { useEffect } from "react";
import { useRef } from "react";


function CarouselCard({ content, onActiveSlide, firstcard }) {
  const { isActive, isNext, isPrev } = useSwiperSlide();
  const swiper = useSwiper();
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
    if (isActive) {
      onActiveSlide(content);
    }
  }, [content, isActive, onActiveSlide, firstcard]);

  const firstActive = firstcard.title === content.title && firstRender.current;

  const boxProperties =
    isActive || firstActive
      ? { minWidth: "400px", width: "400px", height: "600px", bg: "white" }
      : {
          minWidth: "325px",
          width: "325px",
          height: "500px",
          bg: "transparent",
          border: "1px solid white",
        };

  const cardClickHandler = () => {
    if (isActive) return;
    if (isNext) {
      swiper.slideNext();
    }
    if (isPrev) {
      swiper.slidePrev();
    }
  };



  return (
    <Box
      transition="all 0.5s linear "
      {...boxProperties}
      onClick={cardClickHandler}
    >
      {(isActive || firstActive) && (
        <VStack spacing="32px" height="600px">
          <Text marginTop="32px" color="black" variant="titleSelected">
            {content.title}
          </Text>
          <Image
            overflow="clip"
            src={content.imgUrl}
            minHeight="231.25px"
            maxHeight="231.25px"
            width="400px"
            alt={content.title}
          ></Image>
          <Flex
            display="flex"
            alignItems="center"
            height="100%"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Text
              margin="0 32px"
              textAlign="center"
              fontSize="lg"
              variant="normalText"
              color="black"
            >
              {content.description}
            </Text>

            <Button marginBottom="50px" invertColor={true}>
              View Property
            </Button>
          </Flex>
        </VStack>
      )}

      {!isActive && (
        <Text
          textAlign="center"
          marginTop="32px"
          color="white"
          variant="titleSelected"
        >
          {content.title}
        </Text>
      )}
    </Box>
  );
}

export default CarouselCard;
