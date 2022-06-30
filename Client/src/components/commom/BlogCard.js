import { Flex, Link, Image } from "@chakra-ui/react";
import Text from "./Text";
import { Link as RouterLink } from "react-router-dom";
import { useSwiperSlide, useSwiper } from "swiper/react";
import { Box } from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function BlogCard(props) {
  const { imgUrl, title, text, linkLabel, linkTo, height, variant } = props;

  const swiperSlide = useSwiperSlide();

  const swiper = useSwiper();

  const swipeNext = () => {
    swiper.slideNext();
  };

  const swipePrev = () => {
    swiper.slidePrev();
  };

  return (
    <>
      {variant === "carousel" && (
        <Box
          cursor="pointer"
          onClick={swipePrev}
          as={RiArrowLeftSLine}
          boxSize={"2rem"}
          marginTop={["180px"]}
          transition={swiperSlide?.isActive ? "all 2s ease" : "none"}
          opacity={swiperSlide?.isActive ? 1 : 0}
        />
      )}
      <Flex
        alignItems="center"
        bg="#f5f5f5"
        width={["330px", "330px", "290px"]}
        minHeight={height || "433px"}
        flexDir="column"
        transition={"all 1s ease"}
      >
        <Image width="100%" height="163px" src={imgUrl}></Image>
        <Text
          _after={{
            display: "block",
            width: "40px",
            content: "''",
            height: "3px",
            margin: "15px auto",
            bg: "black",
          }}
          margin="30px 15px"
          marginBottom="0px"
          variant="titleNormal"
          letterSpacing=".1875rem"
        >
          {title}
        </Text>
        <Text
          fontSize="lg"
          margin="0 15px"
          textAlign="center"
          variant="normalText"
        >
          {text}
        </Text>
        <Link
          fontSize="0.75rem"
          fontWeight={700}
          letterSpacing="0.1875rem"
          marginTop="auto"
          _hover={{ color: "gray", borderColor: "gray" }}
          borderBottom="1px solid black"
          marginBottom="20px"
          to={linkTo}
          as={RouterLink}
        >
          {linkLabel}
        </Link>
      </Flex>
      {variant === "carousel" && (
        <Box
          cursor="pointer"
          onClick={swipeNext}
          as={RiArrowRightSLine}
          marginTop={["180px"]}
          transition={swiperSlide?.isActive ? "all 2s ease" : "none"}
          opacity={swiperSlide?.isActive ? 1 : 0}
          boxSize="2rem"
        />
      )}
    </>
  );
}

export default BlogCard;
