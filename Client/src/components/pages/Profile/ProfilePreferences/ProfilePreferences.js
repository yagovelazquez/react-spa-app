import { IoBedOutline } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import ProfileIconSection from "../ProfileIconSection";
import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";
import ProfileSectionTitle from "../ProfileSectionTitle";
import RoomForm from "./RoomForm";
import SleepForm from "./SleepForm";
import { useQuery, useQueryClient } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import useUser from "../../../Hooks/useUser";
import { getUserPreferences } from "../../../../Lib/fetchServerProfile";
import { serverUrl } from "../../../../ReactQuery/queryUrl";

function ProfilePreferences() {
  const [openSection, setOpenSection] = useState("");
  const { user } = useUser();

  const queryClient = useQueryClient();

  const { data: preferenceData } = useQuery(
    [queryKeys.user, queryKeys.preferences],
    () => {
      const url = `${serverUrl}/user/preferences/`;
      return getUserPreferences(url, user.token);
    },
    {
      enabled: !!user,
      initialData: queryClient.getQueriesData(queryKeys.user)[0][1].preferences,
    }
  );

  class Properties {
    constructor(iconAs, textContent, headingContent) {
      this.iconProperties.as = iconAs;
      this.textProperties.content = textContent;
      this.headingProperties.content = headingContent;
    }

    iconProperties = {
      size: "45px",
      color: "white",
      marginRight: "30px",
    };

    boxContainer = {
      flexDirection: "column",
      alignItems: "center",
    };

    headingProperties = {
      fontWeight: "550",
      letterSpacing: ".1875rem",

      marginBottom: "40px",
      paddingTop: "10px",
    };

    textProperties = {
      variant: "normalText",
      fontSize: "lg",
      marginBottom: "20px",
      contentList: true,

      paddingLeft: "66px",
      width: ["100%", "660px", "900px"],
    };

    containerProperties = {
      padding: "50px 0 0 0",
      justifyContent: "center",
      bg: "black",
      width: ["100%", "660px", "900px"],
    };
    buttonProperties = {
      width: "80px",
      invertColor: "true",
      content: "edit",
      borderRadius: "20px",
      _hover: {},
      _active: {},
    };

    textContainerProperties = {
      flexDirection: "column",
      alignItems: "flex-start",
      color: "white",
      marginRight: "auto",
    };
  }

  const roomProperties = new Properties(
    BiHomeAlt,
    preferenceData.roomPreferences,
    "ROOM"
  );
  const sleepProperties = new Properties(
    IoBedOutline,
    preferenceData.sleepPreferences,
    "SLEEP"
  );

  const headingSectionTitleContent = "YOUR PREFERENCES";
  const subheadingSectionTitleContent = "You may change these at any time.";

  return (
    <VStack
      bg="black"
      width="100%"
      color="white"
      paddingTop="75px"
      ref={(ref) => ref}
      alignItems="center"
      paddingLeft={["20px", 0]}
    >
      <ProfileSectionTitle
        width={["100%", "660px", "900px"]}
        headingSectionTitleContent={headingSectionTitleContent}
        subheadingSectionTitleContent={subheadingSectionTitleContent}
      ></ProfileSectionTitle>

      <ProfileIconSection
        CollapseForm={SleepForm}
        hasCollapase={true}
        onOpenSection={setOpenSection}
        openSection={openSection}
        {...sleepProperties}
      ></ProfileIconSection>
      <ProfileIconSection
        CollapseForm={RoomForm}
        hasCollapase={true}
        onOpenSection={setOpenSection}
        openSection={openSection}
        {...roomProperties}
      ></ProfileIconSection>
    </VStack>
  );
}

export default React.memo(ProfilePreferences);
