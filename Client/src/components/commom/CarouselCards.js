import CarouselCard from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SelectCard from "./SelectCard";
import { useState } from "react";
import styled from "styled-components";
import "swiper/css/virtual";
import ImageCarousel from "./ImageCarousel";
import BlogCard from "./BlogCard";

const SwiperWrapper = styled.div`
  & .swiper-slide {
    display: flex;
    align-items: ${({ variant }) =>
      variant === "cardCarousel" ? "center;" : "flex-start;"}
    justify-content: center;
    height: ${({ variant }) =>
      variant === "cardCarousel" ? "600px !important;" : "auto !important;"}
    width: ${({ variant }) =>
      variant === "cardCarousel" ? "350px !important;" : "auto !important;"}
  }import HotelBlogCards from './../pages/HotelResorts/HotelBlogCards';

`;

function CarouselCards({ items, variant }) {
  const [activeSlide, setActiveSlide] = useState(items[0]);

  const activeSliderHandler = (activeSlide) => {
    setActiveSlide(activeSlide);
  };

  return (
    <Box
      width="100vw"
      bgImage={
        variant === "cardCarousel" &&
        `linear-gradient(rgba(0, 0, 0, 1), rgba(0,0,0,0.5)), url(${activeSlide.imgUrl})`
      }
      height={variant === "cardCarousel" ? "800px" : "auto"}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <SwiperWrapper variant={variant}>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides
          preloadImages
          spaceBetween={variant === "cardCarousel" ? 50 : 0}
          loop={true}
        >
          {items.map((content, index) => {
            return (
              <SwiperSlide
                virtualIndex={index}
                key={content.title || content.url}
              >
                {variant === "cardCarousel" && (
                  <CarouselCard
                    key={content.title}
                    firstcard={items[0]}
                    content={content}
                    color="black"
                    onActiveSlide={activeSliderHandler}
                  ></CarouselCard>
                )}
                {variant === "images" && (
                  <ImageCarousel
                    text={content.text}
                    title={content.title}
                    url={content.url}
                  ></ImageCarousel>
                )}

                {variant === "blogCards" && (
                  <BlogCard
                    title={content.title}
                    text={content.text}
                    imgUrl={content.imgUrl}
                    linkTo={content.linkTo}
                    linkLabel={content.linkLabel}
                    variant="carousel"
                  ></BlogCard>
                )}
              </SwiperSlide>
            );
          })}
          {variant === "cardCarousel" && (
            <SelectCard
              marginTop="40px"
              cardslength={items.length}
            ></SelectCard>
          )}
        </Swiper>
      </SwiperWrapper>
    </Box>
  );
}

export default CarouselCards;
