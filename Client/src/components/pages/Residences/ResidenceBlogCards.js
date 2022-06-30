import BlogCard from "../../commom/BlogCard";
import { HStack, useMediaQuery } from "@chakra-ui/react";
import CarouselCards from "./../../commom/CarouselCards";

function ResidenceBlogCards() {
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const blogContents = [
    {
      title: "A CURATED LIFESTYLE",
      text: "Through anticipatory service and meticulous attention to detail, our dedicated team enhances and elevates every aspect of daily life.",
      imgUrl: "/Buildings/curatedLife.jpg",
      linkTo: "../page-under-construction",
      linkLabel: "LEARN MORE",
    },
    {
      title: "PEACE OF MIND",
      text: "Whether you are at home or away, world-class Four Seasons property management protects, secures and maintains your residence for you.",
      imgUrl: "/Buildings/peaceMind.jpg",
      linkTo: "../page-under-construction",
      linkLabel: "LEARN MORE",
    },
    {
      title: "EXPERTS IN OUR FIELD",
      text: "Known across the world for quality, consistency and constant innovation, each individual home is the result of decades of experience and expertise.",
      imgUrl: "/Buildings/expertsField.jpg",
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
            height="440px"
          ></BlogCard>
        ))}
      {!isLargerThan960 && (
        <CarouselCards variant="blogCards" items={blogContents} />
      )}
    </HStack>
  );
}

export default ResidenceBlogCards;
