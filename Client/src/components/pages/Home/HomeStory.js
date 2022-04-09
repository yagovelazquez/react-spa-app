import {  Flex } from "@chakra-ui/react";
import Text from "../../commom/Text";
import Button from "../../commom/Button";
import { Image, Button as ButtonChak } from "@chakra-ui/react";

function HomeStory() {
  return (
    <Flex align="center" bg="black" padding="90px 0" flexDir="column" gap="20px">
      <Text
        width="700px"
        fontSize="2xl"
        fontWeight="100"
        textAlign="center"
        color="white"
      >
        THE HUSH SUNRISE STORY
      </Text>

      <Text
        width="700px"
        fontSize="lg"
        lineHeight="1.5rem"
        variant="normalText"
        textAlign="center"
        color="white"
      >
        A name synonymous around the world for continual innovation, remarkable
        expansion and a single-minded dedication to the highest standards of
        service, discover how Hush Sunrise has transformed the hospitality
        industry and redefined the meaning of luxury travel since first opening
        its doors back in 1961.
      </Text>

      <Button marginTop="10px"  width="210">
        Discover our story
      </Button>


    </Flex>
  );
}

export default HomeStory;
