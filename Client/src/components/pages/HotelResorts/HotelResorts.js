import { Flex } from "@chakra-ui/react";
import HotelCards from "./HotelBlogCards";
import HotelOpinionQuote from "./HotelOpinionQuote";
import HotelsCollapseItems from "./HotelsCollapseItems";
import HotelSelectImage from "./HotelSelectImage";
import HotelPageDescription from "./HotelPageDescription";
import HotelBookConfidence from "./HotelBookConfidence";
import HotelCarousel from "./HotelCarousel";

function HotelResorts() {
  return (
    <Flex alignItems="center" flexDir="column">
      <HotelSelectImage />
      <HotelPageDescription></HotelPageDescription>
      <HotelCards></HotelCards>
      <HotelOpinionQuote></HotelOpinionQuote>
      <HotelsCollapseItems></HotelsCollapseItems>
      <HotelBookConfidence></HotelBookConfidence>
      <HotelCarousel></HotelCarousel>
    </Flex>
  );
}

export default HotelResorts;
