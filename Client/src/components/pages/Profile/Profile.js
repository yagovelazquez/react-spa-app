import React from "react";
import Text from "../../commom/Text";
import { HStack, VStack } from "@chakra-ui/react";
import ProfileExclusiveOffer from "./ProfileExclusiveOffer";

import {countries} from "countries-list"


import ScrollableNavProfile from "./ScrollableNavProfile";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ProfilePreferences from "./ProfilePreferences/ProfilePreferences";
import ProfileInterests from "./ProfileInterests/ProfileInterests";
import ProfileRequestInvoice from "./ProfileRequestInvoice";
import useUser from "../../Hooks/useUser";

function Profile() {
  const {user} = useUser()
  const textProperities = {
    variant: "titleNormal",
    letterSpacing: ".1rem",
    color: "white",
    borderRight: "#8d8d8d 3px solid",
    padding: "5px 40px 5px 0",
  };

  return (
    <React.Fragment>
      <VStack spacing={0}>
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
          <ScrollableNavProfile></ScrollableNavProfile>
        </HStack>
        <ProfileDetails></ProfileDetails>
        <ProfileExclusiveOffer></ProfileExclusiveOffer>
        <ProfilePreferences id="preferences"></ProfilePreferences>
        <ProfileInterests user={user} id="interests"></ProfileInterests>
        <ProfileRequestInvoice id="invoice" />
      </VStack>
    </React.Fragment>
  );
}

export default Profile;
