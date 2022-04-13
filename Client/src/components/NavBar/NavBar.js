import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavLink from "../commom/NavLink";
import useUser from "../Hooks/useUser";

import Button from "../commom/Button";

function NavBar() {
  const {user} =  useUser()
  const links = ["treatments", "staff", "calendar", "profile"];

  return (
    <Flex
      align="center"
      justify="space-between"
      bg="black"
      width="100%"
      height="95px"
      padding="12px 30px"
      borderBottom="1px solid white"
      pos="sticky" top="0" left="0"
      zIndex={10}
    >
      <Flex align="center" justify="center" gap="35px">
        <Link to="/">
          <Image src="/treeLogo.jpg" alt="Logo" boxSize="71px" />
        </Link>

        {links.map((link, index) => {
          if (index === 0) {
            return (
              <NavLink
                key={link}
                marginLeft="15px"
                font="buttonLabel"
                activelink="true"
                to={`/${link}`}
              >
                {link}
              </NavLink>
            );
          }

          return (
            <NavLink  activelink="true" key={link} font="buttonLabel" to={`/${link}`}>
              {link}
            </NavLink>
          );
        })}
      </Flex>

      <Button>Check Rates</Button>
    </Flex>
  );
}

export default NavBar;
