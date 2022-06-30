import { VStack, Flex, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import Text from "../../commom/Text";

function HomeMentions() {
  const mentions = [
    { user: "@JohnDoe", imgUrl: "/Mention/mention1.jpg" },
    { user: "@Jessdoe", imgUrl: "/Mention/mention2.jpg" },
    { user: "@RaeReilly", imgUrl: "/Mention/mention3.jpg" },
    { user: "@Jehnjessy", imgUrl: "/Mention/mention4.jpg" },
  ];

  const mentionImages = mentions.map((mention) => {
    return (
      <VStack        padding={["20px", 0]} key={mention.user} justify="center" align={"left"}>
        <Image
          overflow="clip"
          maxWidth={["100%", "210px", "210px"]}
          height={["auto", "210px", "210px"]}
          minWidth="210px"
          src={mention.imgUrl}
          alt={mention.user}
        />
        <HStack spacing="10px">
          <BsInstagram size="0.8em" />
          <Text
            variant="titleNormal"
            letterSpacing="0.2rem"
            fontSize="0.625rem"
            lineHeight="1.3rem"
            fontWeight="100"
          >
            {mention.user}
          </Text>
        </HStack>
      </VStack>
    );
  });

  return (
    <VStack bg="white" padding="90px 0px" spacing="40px">
      <Text variant="titleNormal" fontSize="2xl" fontWeight="hairline">
        #HushSunrise{" "}
      </Text>
      <Text
        textAlign="center"
        width={["auto", 775]}
        padding={["0 30px", 0]}
        variant="normalText"
        fontSize="lg"
      >
        Visit @hushsunrise and #hushsunrise to discover unforgettable guest
        experiences at Hush Sunrise Hotels and Resorts.
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir={["column", "row"]}
        maxWidth={["500px", "500px", "100%"]}

        flexWrap="wrap"
        gap={30}
        marginTop="40px"
      >
        {mentionImages}
      </Flex>
    </VStack>
  );
}

export default HomeMentions;
