import BlogCard from "../../commom/BlogCard";
import { HStack, useMediaQuery } from "@chakra-ui/react";
import CarouselCards from "./../../commom/CarouselCards";

function RetreatBlogCards() {
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const blogContents = [
    {
      title: "BEACH & SEASIDE",
      text: "From powder-white sands, to pristine coral reefs, discover the sea and all of its secrets, as we bring you ever closer to the world’s most exclusive beachfront destinations.",
      imgUrl: "/Retreats/beachCard.jpg",
      linkTo: "../page-under-construction",
      linkLabel: "LEARN MORE",
    },
    {
      title: "MOUNTAIN & COUNTRY",
      text: "Whether surrounded by snow-covered peaks or rolling countryside, discover the perfect space from which to explore your sense of adventure, or escape from the rest of the world.",
      imgUrl: "/Retreats/mountainCard.jpg",
      linkTo: "../page-under-construction",
      linkLabel: "LEARN MORE",
    },
    {
      title: "URBAN RETREATS",
      text: "The perfect starting point for a city break, or ideal base for an extended stay, retreat to your own urban sanctuary, after a day exploring the sights and sounds of the world around you.",
      imgUrl: "/Retreats/urbanCard.jpg",
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
            height="500px"
          ></BlogCard>
        ))}
      {!isLargerThan960 && (
        <CarouselCards variant="blogCards" items={blogContents} />
      )}
    </HStack>
  );
}

export default RetreatBlogCards;
