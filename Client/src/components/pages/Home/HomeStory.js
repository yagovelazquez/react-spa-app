import { Flex } from "@chakra-ui/react";
import Text from "../../commom/Text";
import Button from "../../commom/Button";
import { useNavigate } from "react-router-dom";

function HomeStory() {
  let navigate = useNavigate();

  const discoverHistoryHandler = () => {
    navigate("../page-under-construction");
  };

  return (
    <Flex
      align="center"
      bg="black"
      flexDir="column"
      padding={["90px 30px", "90px 60px"]}
      gap="20px"
    >
      <Text
        maxWidth="700px"
        fontSize="2xl"
        fontWeight="100"
        textAlign="center"
        color="white"
      >
        THE HUSH SUNRISE STORY
      </Text>

      <Text
        maxWidth="700px"
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

      <Button onClick={discoverHistoryHandler} marginTop="10px" width="210">
        Discover our story
      </Button>
    </Flex>
  );
}

export default HomeStory;
