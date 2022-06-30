import CarouselCards from "../../commom/CarouselCards";

function HotelCarousel() {
  const images = [
    {
      url: "/Hotel_Resorts/opportunities.jpg",
      title: "NEW OPPORTUNITIES",
      text: "Check out our hotels and resorts with discount and promotions.",
    },
    {
      url: "/Hotel_Resorts/adventures.jpg",
      title: "DISCOVER NEW ADVENTURES",
      text: "Discover the most daring and exciting places around the world.",
    },
    {
      url: "/Hotel_Resorts/destination.jpg",
      title: "FIND THE BEST DESTINATION",
      text: "Whether you prefer calmer places, romantic places or an exciting adventure, Hush Sunrise got you covered.",
    },
  ];

  return <CarouselCards items={images} variant="images"></CarouselCards>;
}

export default HotelCarousel;
