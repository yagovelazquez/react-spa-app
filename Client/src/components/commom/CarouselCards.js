import CarouselCard from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SelectCard from "./SelectCard";
import { useState, useRef } from "react";
import styled from "styled-components";
import { Virtual } from "swiper";
import "swiper/css/virtual";

const SwiperWrapper = styled.div`
  & .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px !important;
    width: 350px !important;
  }
`;

function CarouselCards({ selectedCards }) {
  const [activeSlide, setActiveSlide] = useState(selectedCards[0]);

  const activeSliderHandler = (activeSlide) => {
    setActiveSlide(activeSlide);
  };

  return (
    <Box
      width="100%"
      bgImage={`linear-gradient(rgba(0, 0, 0, 1), rgba(0,0,0,0.5)), url(${activeSlide.imgUrl})`}
      height="800px"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <SwiperWrapper >
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          preloadImages={true}
          spaceBetween={50}
          loop={true}

     
        >
          {selectedCards.map((content, index) => {
            return (
              <SwiperSlide virtualIndex={index} key={content.title}>
                <CarouselCard
                  key={content.title}
                  firstcard={selectedCards[0]}
                  content={content}
                  color="black"
                  onActiveSlide={activeSliderHandler}
                ></CarouselCard>
              </SwiperSlide>
            );
          })}
          <SelectCard
            marginTop="40px"
            cardslength={selectedCards.length}
          ></SelectCard>
        </Swiper>
      </SwiperWrapper>
    </Box>
  );
}

export default CarouselCards;
