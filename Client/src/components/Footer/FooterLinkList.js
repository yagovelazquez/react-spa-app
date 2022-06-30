import { VStack, Flex } from "@chakra-ui/react";
import Text from "../commom/Text";
import NavLink from "../commom/NavLink";

function FooterLinkList() {
  const footerContentLinks = [
    [
      { title: "About" },
      { title: "About us", link: "../page-under-construction" },
      { title: "Career", link: "../page-under-construction" },
      { title: "Contact Us", link: "../page-under-construction" },
    ],
    [
      { title: "Reservations" },
      { title: "Request an Invoice", link: "../page-under-construction" },
      { title: "Find a reservation", link: "../page-under-construction" },
      { title: "Email Preferences", link: "../page-under-construction" },
    ],
    [
      { title: "News" },
      { title: "Press Room", link: "../page-under-construction" },
      { title: "New Openings", link: "../page-under-construction" },
      { title: "Magazine", link: "../page-under-construction" },
      { title: "Newsletter", link: "../page-under-construction" },
    ],
    [
      { title: "More" },
      { title: "Private Jet", link: "../page-under-construction" },
      { title: "Residences", link: "../page-under-construction" },
      { title: "Gift Cards", link: "../page-under-construction" },
    ],
  ];

  return (
    <Flex
      flexDir={["column", "row"]}
      width={["100%", "650px", "930px"]}
      padding={["0 0 0 50px", 0]}
      gap="30px"
      justifyContent={["flex-start", "flex-start", "center"]}
      flexWrap={["wrap"]}
      align="flex-start"
    >
      {footerContentLinks.map((arr) => {
        return (
          <VStack
            key={arr[0].title}
            width={["330px", "300px", "210px"]}
            spacing={["20px"]}
            align="flex-start"
          >
            {arr.map((content, index) => {
              if (index === 0)
                return (
                  <Text key={content.title} variant="italicTitle" color="white">
                    {content.title}
                  </Text>
                );
              return (
                <NavLink
                  key={content.title}
                  _hover={{ color: "grey" }}
                  to={content.link}
                  fontSize="0.625rem"
                >
                  {content.title}
                </NavLink>
              );
            })}
          </VStack>
        );
      })}
    </Flex>
  );
}

export default FooterLinkList;
