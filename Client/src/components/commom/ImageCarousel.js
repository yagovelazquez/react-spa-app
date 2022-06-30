import { useSwiperSlide, useSwiper } from "swiper/react";
import { Image, Box, VStack } from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Text from "./Text";

function ImageCarousel({ url, title, text }) {
  const { isActive, isNext, isPrev } = useSwiperSlide();

  const swiper = useSwiper();

  const cardClickHandler = () => {
    if (isActive) return;
    if (isNext) {
      swiper.slideNext();
    }
    if (isPrev) {
      swiper.slidePrev();
    }
  };

  const swipeNext = () => {
    swiper.slideNext();
  };

  const swipePrev = () => {
    swiper.slidePrev();
  };

  return (
    <>
      <Box
        cursor="pointer"
        onClick={swipePrev}
        as={RiArrowLeftSLine}
        boxSize={"2rem"}
        marginTop={["140px", "200px", "230px"]}
        transition={isActive ? "all 2s ease" : "none"}
        opacity={isActive ? 1 : 0}
      />{" "}
      <VStack alignItems="flex-start">
        <Image
          onClick={cardClickHandler}
          width={["100%", "100%", "930px"]}
          height={["50vw", "50vw", "520px"]}
          filter={isActive ? "opacity(100%)" : "opacity(60%)"}
          transition="all 1s ease"
          objectFit="fill"
          cursor="grab"
          _active={{ cursor: "grabbing" }}
          src={url}
        />
        <Text
          opacity={isActive ? 1 : 0}
          fontSize="xs"
          letterSpacing="0.1875rem"
          fontWeight="700"
          paddingTop="20px"
          transition="all 1s ease"
        >
          {title}
        </Text>
        <Text
          transition="all 1s ease"
          opacity={isActive ? 1 : 0}
          width={["200px", "465px"]}
          variant="normalText"
          fontSize="lg"
          padding={["0 0 40px 0", "0 0 80px 0", "0 0 120px 0"]}
        >
          {text}
        </Text>
      </VStack>
      <Box
        cursor="pointer"
        onClick={swipeNext}
        as={RiArrowRightSLine}
        marginTop={["140px", "200px", "230px"]}
        transition={isActive ? "all 2s ease" : "none"}
        opacity={isActive ? 1 : 0}
        boxSize="2rem"
      />{" "}
    </>
  );
}

export default ImageCarousel;
