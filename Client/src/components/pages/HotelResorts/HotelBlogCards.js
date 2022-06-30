import BlogCard from "../../commom/BlogCard";
import { HStack, useMediaQuery } from "@chakra-ui/react";
import CarouselCards from "./../../commom/CarouselCards";

function HotelBlogCards() {
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");

  const blogContents = [
    {
      title: "DISCOVER NEW ADVENTURES",
      text: "Discover the most daring and exciting places around the world. At Hush Sunrise we have many thriling worldwide waiting for you to choose.",
      imgUrl: "/Hotel_Resorts/hotelCard3.jpg",
      linkTo: "../page-under-construction",
      linkLabel: "LEARN MORE",
    },
    {
      title: "FIND THE BEST DESTINATION",
      text: "Whether you prefer calmer places, romantic places or an exciting adventure, Hush Sunrise got you covered.",
      imgUrl: "/Hotel_Resorts/hotelCard2.jpg",
      linkTo: "../page-under-construction",
      linkLabel: "LEARN MORE",
    },
    {
      title: "NEW OPPORTUNITIES",
      text: "Check out our hotels and resorts with discount and promotions.",
      imgUrl: "/Hotel_Resorts/hotelCard1.jpg",
      linkTo: "../page-under-construction",
      linkLabel: "LEARN MORE",
    },
  ];

  return (
    <HStack spacing="30px" marginTop="90px">
      {isLargerThan960 &&
        blogContents.map((content) => (
          <BlogCard
            key={content.title}
            title={content.title}
            text={content.text}
            imgUrl={content.imgUrl}
            linkTo={content.linkTo}
            linkLabel={content.linkLabel}
          ></BlogCard>
        ))}
      {!isLargerThan960 && (
        <CarouselCards variant="blogCards" items={blogContents} />
      )}
    </HStack>
  );
}

export default HotelBlogCards;
