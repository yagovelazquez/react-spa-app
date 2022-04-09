import { Box, HStack, VStack, Flex, Image } from "@chakra-ui/react";
import Text from "../commom/Text";
import NavLink from "../commom/NavLink";

function FooterLinkList() {

    const footerContentLinks = [
        [
          { title: "About" },
          { title: "About us", link: "about-hush-sunrise" },
          { title: "Career", link: "career" },
          { title: "Contact Us", link: "contact_us" },
        ],
        [
          { title: "Reservations" },
          { title: "Request an Invoice", link: "request-invoice" },
          { title: "Find a reservation", link: "find-reservation" },
          { title: "Email Preferences", link: "email-sign-up" },
        ],
        [
          { title: "News" },
          { title: "Press Room", link: "press-room" },
          { title: "New Openings", link: "new-openings" },
          { title: "Magazine", link: "magazine" },
          { title: "Newsletter", link: "newsletter" },
        ],
        [
          { title: "More" },
          { title: "Private Jet", link: "private-jet" },
          { title: "Residences", link: "residences" },
          { title: "Gift Cards", link: "gift-cards" },
        ],
      ];

    return ( <HStack width="960px" gap="30px" align="flex-start">
        {footerContentLinks.map((arr) => {
          return (
            <VStack
              key={arr[0].title}
              width="210px"
              spacing="20px"
              align="flex-start"
            >
              {arr.map((content, index) => {
                if (index === 0)
                  return (
                    <Text
                      key={content.title}
                      variant="italicTitle"
                      color="white"
                    >
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
      </HStack>  );
}

export default FooterLinkList;