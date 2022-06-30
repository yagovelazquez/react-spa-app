import CarouselCards from "../../commom/CarouselCards";
import { Box } from "@chakra-ui/react";

function RetreatCarousel() {
  const images = [
    {
      url: "/Retreats/beachRetreat.jpg",
      title: "BEACH & SEASIDE",
      text: "From powder-white sands, to pristine coral reefs, discover the sea and all of its secrets, as we bring you ever closer to the world’s most exclusive beachfront destinations.",
    },
    {
      url: "/Retreats/mountainRetreat.jpg",
      title: "MOUNTAIN & COUNTRY",
      text: "Whether surrounded by snow-covered peaks or rolling countryside, discover the perfect space from which to explore your sense of adventure, or escape from the rest of the world.",
    },
    {
      url: "/Retreats/urbanRetreat.jpg",
      title: "URBAN RETREATS",
      text: "The perfect starting point for a city break, or ideal base for an extended stay, retreat to your own urban sanctuary, after a day exploring the sights and sounds of the world around you.",
    },
  ];

  return (
    <Box marginTop="90px">
      <CarouselCards items={images} variant="images"></CarouselCards>
    </Box>
  );
}

export default RetreatCarousel;
