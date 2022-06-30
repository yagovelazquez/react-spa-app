import CarouselCards from "../../commom/CarouselCards";
import { Box } from "@chakra-ui/react";

function ResidenceCarousel() {
  const images = [
    {
      url: "/Buildings/curatedLife2.jpg",
      title: "A CURATED LIFESTYLE",
      text: "Through anticipatory service and meticulous attention to detail, our dedicated team enhances and elevates every aspect of daily life.",
    },
    {
      url: "/Buildings/peaceMind2.jpg",
      title: "PEACE OF MIND",
      text: "Whether you are at home or away, world-class Four Seasons property management protects, secures and maintains your residence for you.",
    },
    {
      url: "/Buildings/expertField2.jpg",
      title: "EXPERTS IN OUR FIELD",
      text: "Known across the world for quality, consistency and constant innovation, each individual home is the result of decades of experience and expertise.",
    },
  ];

  return (
    <Box marginTop="90px">
      <CarouselCards items={images} variant="images"></CarouselCards>
    </Box>
  );
}

export default ResidenceCarousel;
