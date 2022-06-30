import { Flex } from "@chakra-ui/react";
import ResidenceDescription from "./ResidencesDescription";
import ResidenceSelectImage from "./ResidenceSelectImage";
import ResidenceBlogCards from "./ResidenceBlogCards";
import ResidenceOpinionQuote from "./ResidenceOpinionQuote";
import ResidenceCollapseItems from "./ResidenceCollapseItems";
import ResidenceCarousel from "./ResidenceCarousel";

function Residences() {
  return (
    <Flex overflow="hidden" alignItems="center" flexDir="column">
      <ResidenceSelectImage></ResidenceSelectImage>
      <ResidenceDescription></ResidenceDescription>
      <ResidenceBlogCards></ResidenceBlogCards>
      <ResidenceOpinionQuote></ResidenceOpinionQuote>
      <ResidenceCollapseItems></ResidenceCollapseItems>
      <ResidenceCarousel></ResidenceCarousel>
    </Flex>
  );
}

export default Residences;
