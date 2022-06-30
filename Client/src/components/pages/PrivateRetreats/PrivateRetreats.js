import { Flex } from "@chakra-ui/react";
import PrivateRetreatDescription from "./PrivateRetreatDescription";
import PrivateSelectImage from "./PrivateSelectImage";
import RetreatBlogCards from "./RetreatCards";
import RetreatOpinionQuote from "./RetreatQuotes";
import RetreatCollapseItems from "./RetreatCollapseItems";
import RetreatCarousel from "./RetreatCarousel";

function PrivateRetreats() {
  return (
    <Flex alignItems="center" flexDir="column">
      <PrivateSelectImage></PrivateSelectImage>
      <PrivateRetreatDescription></PrivateRetreatDescription>
      <RetreatBlogCards></RetreatBlogCards>
      <RetreatOpinionQuote></RetreatOpinionQuote>.
      <RetreatCollapseItems></RetreatCollapseItems>
      <RetreatCarousel></RetreatCarousel>
    </Flex>
  );
}

export default PrivateRetreats;
