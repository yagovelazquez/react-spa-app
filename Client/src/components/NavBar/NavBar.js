import {
  Flex,
  Image,
  useMediaQuery,
  VStack,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Drawer,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavLink from "../commom/NavLink";
import Button from "../commom/Button";
import RatesCollapse from "./RatesCollapse";
import { VscMenu } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import useOutsideClick from "../Hooks/useOutsideClick";
import { useState, useEffect, useRef } from "react";
import Text from "../commom/Text";
import More from "./More";

let moreTimer;

function NavBar() {
  const location = useLocation();
  const [opacityButton, setOpacityButton] = useState(1);
  const [isOpen, onToggle] = useState(false);
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const [isMoreClick, setIsMoreClick] = useState(false);
  const [isMore, setIsMore] = useState({
    isVisible: false,
    isTriggered: false,
    visibleOnHover: true,
  });

  const moreRef = useRef();

  useOutsideClick({
    ref: moreRef,
    value: "moreRef",
    callback: () => setIsMoreClick(false),
  });

  useEffect(() => {
    if (isMore.isTriggered) {
      moreTimer = setTimeout(() => {
        setIsMore({
          isVisible: false,
          isTriggered: false,
          visibleOnHover: false,
        });
      }, 500);
    }

    if (!isMore.isTriggered) {
      clearTimeout(moreTimer);
    }

    return () => clearTimeout(moreTimer);
  }, [isMore]);

  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const [isLargerThan1085] = useMediaQuery("(min-width: 1085px)");

  useEffect(() => {
    setOpenDrawer(false);
  }, [location]);

  let navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setOpacityButton(0);
    }
    if (!isOpen) {
      setOpacityButton(1);
    }
  }, [isOpen]);

  const links = [
    { label: "Hotel & Resorts", link: "hotel-resorts" },
    { label: "Private Retreats", link: "private-retreats" },
    { label: "Residences", link: "residences" },
    { label: "Hotel Status", link: "hotel-status" },
    { label: "profile", link: "profile" },
  ];

  const handleHoverMore = () => {
    setIsMore((prevValue) => {
      if (
        !prevValue.isVisible ||
        prevValue.isTriggered ||
        prevValue.visibleOnHover
      )
        return { isVisible: true, isTriggered: false, visibleOnHover: true };

      return prevValue;
    });
  };

  const handleMouseOut = () => {
    setIsMore((prevValue) => {
      return { ...prevValue, isTriggered: true };
    });
  };

  const linksDrawer = [
    { label: "My Profile", link: "profile" },
    { src: "/treeLogoBlack.png", alt: "Logo" },

    { label: "Hotel & Resorts", link: "hotel-resorts" },
    { label: "Private Retreats", link: "private-retreats" },
    { label: "Residences", link: "residences" },
    { label: "Hotel Status", link: "hotel-status" },
  ];

  const openDrawerHandler = () => {
    setOpenDrawer((prevValue) => !prevValue);
  };

  return (
    <Flex
      flexDir="column"
      position={"sticky"}
      width="100%"
      zIndex={99}
      top="0"
      left="0"
    >
      <Box>
        <Flex
          align="center"
          justify="space-between"
          bg="black"
          width="100%"
          height="95px"
          padding="12px 30px"
          borderBottom="1px solid white"
          sx={{ willChange: "transform" }}
        >
          <Flex
            width="100%"
            align="center"
            justifyContent={["space-between", "space-between", "flex-start"]}
            gap="35px"
          >
            <Link to="/">
              <Image
                src="/treeLogo.jpg"
                alt="Logo"
                boxSize={["61px", "61px", "71px"]}
              />
            </Link>

            {!isLargerThan960 && (
              <VStack
                onClick={openDrawerHandler}
                cursor="pointer"
                color="white"
                _hover={{ color: "gray" }}
              >
                <VscMenu size="2rem"></VscMenu>
                <Text
                  letterSpacing=".25rem"
                  fontWeight="700"
                  fontSize=".45rem"
                  transform="translate(2px, -8px)"
                >
                  MENU
                </Text>{" "}
              </VStack>
            )}

            {isLargerThan960 && !isLargerThan1085 && (
              <>
                <NavLink
                  marginLeft="15px"
                  font="buttonLabel"
                  activelink="true"
                  to={`/profile`}
                  value="moreRef"
                >
                  Profile
                </NavLink>
                <Box
                  ref={moreRef}
                  onMouseEnter={handleHoverMore}
                  onMouseLeave={handleMouseOut}
                >
                  <Text
                    onClick={() => {
                      setIsMore({
                        isVisible: false,
                        isTriggered: false,
                        visibleOnHover: false,
                      });
                      setIsMoreClick((prev) => !prev);
                    }}
                    letterSpacing="2.1px"
                    fontSize="xs"
                    fontWeight="700"
                    borderBottom={
                      (isMore.isVisible && isMore.visibleOnHover) || isMoreClick
                        ? "1px solid gray"
                        : "none"
                    }
                    color={
                      (isMore.isVisible && isMore.visibleOnHover) || isMoreClick
                        ? "gray"
                        : "white"
                    }
                  >
                    MORE...
                  </Text>
                  {((isMore.isVisible && isMore.visibleOnHover) ||
                    isMoreClick) && <More onMoreClick={setIsMoreClick}></More>}
                </Box>
              </>
            )}

            {isLargerThan1085 &&
              links.map((item, index) => {
                if (index === 0) {
                  return (
                    <NavLink
                      key={item.link}
                      marginLeft="15px"
                      font="buttonLabel"
                      activelink="true"
                      to={`/${item.link}`}
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                return (
                  <NavLink
                    activelink="true"
                    key={item.link}
                    font="buttonLabel"
                    to={`/${item.link}`}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
          </Flex>

          {isLargerThan960 && (
            <Button
              transition="all 0.5s ease"
              opacity={opacityButton}
              value="checkRatesButton"
              onClick={() => onToggle(true)}
            >
              Check Rates
            </Button>
          )}
        </Flex>
        {isLargerThan960 && (
          <RatesCollapse onToggle={onToggle} isOpen={isOpen}></RatesCollapse>
        )}
        {!isLargerThan960 && (
          <Drawer
            isOpen={isOpenDrawer}
            placement="right"
            onClose={openDrawerHandler}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton _focus={{}} />
              <DrawerBody>
                <VStack paddingTop="10px" alignItems={"flex-start"}>
                  {linksDrawer.map((item, index) => {
                    if (index === 0) {
                      return (
                        <Text
                          key={item.link}
                          textTransform="uppercase"
                          fontSize="sm"
                          letterSpacing="2.04px"
                          cursor="pointer"
                          onClick={() => {
                            return navigate("../profile");
                          }}
                        >
                          {item.label}
                        </Text>
                      );
                    }

                    if (item.src) {
                      return (
                        <Image
                          cursor="pointer"
                          onClick={() => navigate("../")}
                          src={item.src}
                          key={item.src}
                          boxSize={["71px"]}
                          alt="Logo"
                        ></Image>
                      );
                    }
                    return (
                      <NavLink
                        bg="white"
                        color="black"
                        activelink="true"
                        key={item.link}
                        font="buttonLabel"
                        fontSize="sm"
                        fontWeight="100"
                        paddingTop="10px"
                        to={`/${item.link}`}
                        variant="drawer"
                        _hover={{ border: "none", color: "gray" }}
                      >
                        {item.label}
                      </NavLink>
                    );
                  })}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        )}
      </Box>
    </Flex>
  );
}

export default NavBar;
