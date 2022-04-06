import { Box, HStack, Flex, Image } from "@chakra-ui/react";
import Text from "../commom/Text";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import FooterLinkList from "./FooterLinkList";

function Footer() {


  const iconsList = [
    <BsInstagram />,
    <AiOutlineTwitter />,
    <BsFacebook />,
    <BsYoutube />,
  ];

  const legalTitles = [
    "Legal Notice",
    "Privacy Policy",
    "Cookie Preferences",
    "Acessibility Policy",
  ];

  return (
    <Box
      width="100%"
      bg="black"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Image src="/treeLogo2.jpg" alt="Logo" margin="90px 0" boxSize="200px" />
     
     <FooterLinkList />

      <Flex
        flexDir="column"
        width="960px"
        marginTop="90px"
        align="flex-start"
        gap="10px"
      >
        <HStack
          width="100%"
          spacing="30px"
          color="white"
          paddingBottom="20px"
          borderBottom="1px solid gray"
        >
          {iconsList.map((icon, idx) => (
            <Box
              key={`icon ${idx}`}
              cursor="pointer"
              _hover={{ color: "gray" }}
            >
              {icon}
            </Box>
          ))}
        </HStack>
        <HStack
          divider={
            <Text marginRight="10px" marginLeft="5px" color="white">
              •
            </Text>
          }
          marginTop="15px"
        >
          {legalTitles.map((titles) => (
            <Text
              key={titles}
              fontWeight="400"
              fontSize=".625rem"
              letterSpacing="0.1rem"
              color="white"
            >
              {titles}
            </Text>
          ))}
        </HStack>
        <Text
          fontWeight="400"
          letterSpacing="0.078rem"
          color="#7d7d7d"
          fontSize=".625rem"
        >
          ©Hush Sunrise Hotels Limited 1997-2022. All Rights Reserved.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
