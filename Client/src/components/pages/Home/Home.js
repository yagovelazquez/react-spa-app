import Text from "../../commom/Text";
import { Flex, Select } from "@chakra-ui/react";
import { useState } from "react";

import HomeCards from "./HomeCards";
import TitleArrow from "../../commom/TitleArrow";


import HomeNews from "./HomeNews";
import HomeMentions from "./HomeMentions";
import HomeStory from "./HomeStory";
import HomeSelectableText from "./HomeSelectableText";

function Home() {
  const [selectedText, setSelectedText] = useState("HOTEL & RESORTS");


  return (
    <>
      <Flex
        grow="1"
        bg="black"
        flexDir="column"
        alignItems="center"
        paddingTop="50px"
        flexWrap="wrap"
        overflow="clip"
      >


        <Text color="white" marginBottom="15px" variant="italicTitle">
          Featured Properties
        </Text>

        <HomeSelectableText selectedText={selectedText}  onSelectedText={setSelectedText}></HomeSelectableText>

        <Text marginBottom="15px" color="white" variant="normalText">
          Whether staying for business or leisure, discover our most inspiring
          properties all around the world.
        </Text>

        <TitleArrow styles={{ color: "white", marginBottom: "30px" }}>
          View all hotels and resorts
        </TitleArrow>

        <HomeCards selectedText={selectedText} />
      </Flex>

      <HomeNews />
      <HomeMentions />
      <HomeStory />
    </>
  );
}

export default Home;
