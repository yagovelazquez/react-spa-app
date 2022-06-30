import CarouselCards from "../../commom/CarouselCards";
import cardsContent from "./CardContent";

function HomeCards({ selectedText }) {
  const selectedCards = cardsContent[selectedText];
  return (
    <CarouselCards
      variant="cardCarousel"
      items={selectedCards}
      key={selectedText}
    ></CarouselCards>
  );
}

export default HomeCards;
