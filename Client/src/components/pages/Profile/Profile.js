import React from "react";
import Text from "../../commom/Text";
import { HStack, VStack, Box, useMediaQuery } from "@chakra-ui/react";
import ProfileExclusiveOffer from "./ProfileExclusiveOffer";
import { Waypoint } from "react-waypoint";
import { useRef } from "react";
import ScrollableNavProfile from "./ScrollableNavProfile";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ProfilePreferences from "./ProfilePreferences/ProfilePreferences";
import ProfileInterests from "./ProfileInterests/ProfileInterests";
import ProfileRequestInvoice from "./ProfileRequestInvoice";
import useUser from "../../Hooks/useUser";
import AnimatedPage from "../../commom/AnimatedPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useUser();

  let navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("../account/login");
    }
  }, [user, navigate]);

  const sectionRef = useRef();
  const textProperities = {
    variant: "titleNormal",
    letterSpacing: ".1rem",
    color: "white",
    borderRight: "#8d8d8d 3px solid",
    padding: "5px 40px 5px 0",
  };

  const enterHandler = (section) => {
    sectionRef?.current?.setSectionActive(section);
  };

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  if (!user) return <Box height="100vh" bg="white"></Box>;

  return (
    <React.Fragment>
      <AnimatedPage>
        <VStack spacing={0}>
          {isLargerThan700 && (
            <HStack
              display="flex"
              pos="sticky"
              top="95px"
              left="0"
              sx={{ willChange: "transform" }}
              zIndex={10}
              alignItems="center"
              width="100%"
              bgColor="#595959"
              justifyContent="center"
              height="56px"
              gap={3}
            >
              <Text {...textProperities}>PROFILE</Text>^
              <ScrollableNavProfile ref={sectionRef}></ScrollableNavProfile>
            </HStack>
          )}

          <Box width="100%" ref={(ref) => ref}>
            <ProfileDetails></ProfileDetails>
          </Box>
          <Waypoint
            topOffset="150px"
            onEnter={() => {
              enterHandler("");
            }}
          ></Waypoint>
          <ProfileExclusiveOffer></ProfileExclusiveOffer>
          <Waypoint
            topOffset="150px"
            bottomOffset="350px"
            onEnter={() => {
              enterHandler("preferences");
            }}
          >
            <Box ref={(ref) => ref} width="100%" id="preferences">
              <ProfilePreferences></ProfilePreferences>
            </Box>
          </Waypoint>

          <Waypoint
            topOffset="150px"
            bottomOffset="350px"
            onEnter={() => {
              enterHandler("interests");
            }}
          >
            <Box ref={(ref) => ref} width="100%" id="interests">
              <ProfileInterests user={user}></ProfileInterests>
            </Box>
          </Waypoint>

          <Waypoint
            topOffset="100px"
            bottomOffset="350px"
            onEnter={() => {
              enterHandler("invoice");
            }}
          >
            <Box ref={(ref) => ref} width="100%" id="invoice">
              <ProfileRequestInvoice />
            </Box>
          </Waypoint>
        </VStack>
      </AnimatedPage>
    </React.Fragment>
  );
}

export default Profile;
