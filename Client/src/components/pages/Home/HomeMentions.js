import { VStack, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import Text from "../../commom/Text";

function HomeMentions() {
  const mentions = [
    { user: "@JohnDoe", imgUrl: "/mention/mention1.jpg" },
    { user: "@Jessdoe", imgUrl: "/mention/mention2.jpg" },
    { user: "@RaeReilly", imgUrl: "/mention/mention3.jpg" },
    { user: "@Jehnjessy", imgUrl: "/mention/mention4.jpg" },
  ];

  return (
    <VStack margin="90px 0px" spacing="40px">
      <Text variant="titleNormal" fontSize="2xl" fontWeight="hairline">
        #HushSunrise{" "}
      </Text>
      <Text textAlign="center" width="775px" variant="normalText" fontSize="lg">
        Visit @hushsunrise and #hushsunrise to discover unforgettable guest
        experiences at Hush Sunrise Hotels and Resorts.
      </Text>
      <HStack spacing={30} marginTop="40px">
        {mentions.map((mention) => {
          return (
            <VStack key={mention.user} justify="center" align={"left"}>
              <Image
                overflow="clip"
                boxSize="210px"
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
        })}
      </HStack>
    </VStack>
  );
}

export default HomeMentions;
